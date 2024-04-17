import { I18n as I18nType } from '@lingui/core';
import {
  createNewResource,
  ResourceKind,
  ResourceManagementProps,
} from './ResourceSource';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import { StorageProvider } from '../ProjectsStorage';
import newNameGenerator from '../Utils/NewNameGenerator';
import {
  applyResourceDefaults,
  updateResourceJsonMetadata,
} from './ResourceUtils';
import { convertDataURLtoBlob } from '../Utils/BlobDownloader';

/**
 * Representation of a resource to be edited by an external editor.
 */
export type ExternalEditorBase64Resource = {
  /**
   * Name of the resource in the project. If not specified, it means a new resource
   * must be created.
   */
  name?: string | null | undefined;
  /**
   * The base64 encoded "data:" Url. Could maybe be replaced by Blobs in the future.
   */
  dataUrl: string;
  /**
   * The local file path, if applicable. Useful so that the editor replaces an existing file
   * (on the desktop app), rather than creating a new one.
   */
  localFilePath?: string | null | undefined;
  /**
   * The extension of the file, if a file must be created for this resource.
   */
  extension?: string | null | undefined;
  /**
   * Original index of this resource in the animation, useful to reorder the animation if changed
   * in the external editor (for example, frames re-ordered in Piskel).
   */
  originalIndex?: number | null | undefined;
};

/**
 * The input sent to an external editor.
 */
export type ExternalEditorInput = {
  resources: Array<ExternalEditorBase64Resource>;
  singleFrame: boolean | null | undefined;
  name?: string;
  isLooping?: boolean;
  fps?: number;
  externalEditorData?: any;
};

/**
 * The output of an external editor.
 */
export type ExternalEditorOutput = {
  resources: Array<ExternalEditorBase64Resource>;
  externalEditorData: any | null | undefined;
  baseNameForNewResources: string;
};

/**
 * The result of the edition of one or more resources.
 */
export type EditWithExternalEditorReturn = {
  newMetadata: any | null | undefined;
  newName: string | null | undefined;
  resources: Array<{
    name: string;
    originalIndex?: number | null | undefined;
  }>;
};

/**
 * These are the options passed to an external editor to edit one or more resources.
 */
export type EditWithExternalEditorOptions = {
  project: gd.Project;
  i18n: I18nType;
  getStorageProvider: () => StorageProvider;
  resourceManagementProps: ResourceManagementProps;
  signal: AbortSignal;
  resourceNames: Array<string>;
  extraOptions: {
    singleFrame?: boolean; // If set to true, edition should be limited to a single frame,
    name?: string; //Check what this is used for. Is this "animationName?",
    isLooping?: boolean;
    fps?: number;
    existingMetadata: string;
  };
};

/**
 * Description of an external editor along with the method to open it to edit some resources.
 */
export type ResourceExternalEditor = {
  name: string;
  createDisplayName: MessageDescriptor;
  editDisplayName: MessageDescriptor;
  kind: ResourceKind;
  edit: (
    arg1: EditWithExternalEditorOptions
  ) => Promise<EditWithExternalEditorReturn | null>;
};

export type ResourceWithTemporaryBlobUrl = {
  resource: gd.Resource;
  blobUrl: string;
  originalIndex?: number | null | undefined;
};

/**
 * Store the given resources, sent by an external editors, into the resources
 * of the game (existing or new ones), with blob URLs - which should then be uploaded/stored
 * locally.
 */
export const saveBlobUrlsFromExternalEditorBase64Resources = async ({
  project,
  baseNameForNewResources,
  resources,
  resourceKind,
}: {
  project: gd.Project;
  baseNameForNewResources: string;
  resources: Array<ExternalEditorBase64Resource>;
  resourceKind: ResourceKind;
}): Promise<Array<ResourceWithTemporaryBlobUrl>> => {
  const resourcesManager = project.getResourcesManager();
// @ts-expect-error - TS2322 - Type '({ resource: any; originalIndex: number | null | undefined; blobUrl: string; } | null)[]' is not assignable to type 'ResourceWithTemporaryBlobUrl[]'.
  const blobs: Array<ResourceWithTemporaryBlobUrl> = resources
    .map(({ name, dataUrl, localFilePath, extension, originalIndex }) => {
      // Convert the data url to a blob URL.
      const blob = convertDataURLtoBlob(dataUrl);
      const blobUrl = blob ? URL.createObjectURL(blob) : '';

      if (!name || !resourcesManager.hasResource(name)) {
        // Insert a new resource.
        // Store the blob url, as well as indication
        // about which extension (for a new file) or filename to use (to overwrite existing file).
        const name = newNameGenerator(baseNameForNewResources, (name) =>
          resourcesManager.hasResource(name)
        );
        console.info('Creating new resource ' + name + '...');

        const newResource = createNewResource(resourceKind);
        if (!newResource) {
          console.error(
            'Could not create a resource for kind: ' + resourceKind
          );
          return null;
        }
        newResource.setName(name);
        newResource.setFile(blobUrl);
        newResource.setMetadata(
          JSON.stringify({
            localFilePath,
            extension,
          })
        );
        applyResourceDefaults(project, newResource);
        resourcesManager.addResource(newResource);
        newResource.delete();

        return {
          resource: resourcesManager.getResource(name),
          originalIndex,
          blobUrl,
        };
      } else {
        console.info('Updating resource ' + name + '.');

        // Get the resource and store the blob url, as well as indication
        // about which extension (for a new file) or filename to use (to overwrite existing file).
        const resource = resourcesManager.getResource(name);
        resource.setFile(blobUrl);
        updateResourceJsonMetadata(resource, {
          localFilePath,
          extension,
        });

        return {
          resource,
          originalIndex,
          blobUrl,
        };
      }
    })
    .filter(Boolean);

  return blobs;
};

/**
 * Free the blob URLs from each resource (to do once these blob URLs have been properly
 * uploaded/stored locally) and update the resources with the given metadata, if any.
 */
export const freeBlobsAndUpdateMetadata = ({
  modifiedResources,
  metadataKey,
  metadata,
}: {
  modifiedResources: Array<ResourceWithTemporaryBlobUrl>;
  metadataKey: string;
  metadata: any | null | undefined;
}) => {
  modifiedResources.forEach(({ resource, blobUrl }) => {
    // Free the blob urls that were created just to allow the resources
    // to be "fetched" to their final destination by `onFetchNewlyAddedResources`.
    // If we don't revoke these blob urls, they will stay in memory forever, despite
    // being used only temporarily as a temporary storage before they are uploaded somewhere
    // (Cloud) or written to the disk (LocalFile).
    URL.revokeObjectURL(blobUrl);

    // Update the modified resources with the metadata of the editor.
    if (metadata) {
      updateResourceJsonMetadata(resource, {
        [metadataKey]: metadata,
      });
    }
  });
};

/**
 * If the editor is storing the names of the resources (Piskel),
 * save them now. It will be useful for the editor,
 * to restore the resources in the proper order.
 */
export const patchExternalEditorMetadataWithResourcesNamesIfNecessary = (
  modifiedResourceNames: Array<string>,
  metadata?: any | null
) => {
  if (
    metadata &&
    typeof metadata === 'object' &&
    Array.isArray(metadata.resourceNames)
  ) {
    metadata.resourceNames = modifiedResourceNames;
  }
};

/**
 * Find some property stored in a key of the metadata.
 * Useful to safely read optional metadata stored by an external editor in a resource
 * or another object (like a `gd.Direction`).
 */
export const readMetadata = (
  metadataKey: string,
  metadata?: any | null
): any | null | undefined => {
  if (!metadata) return null;

  try {
    const parsedMetadata = JSON.parse(metadata);
    if (parsedMetadata && typeof parsedMetadata === 'object') {
      if (parsedMetadata[metadataKey]) return parsedMetadata[metadataKey];
    }
  } catch (error) {
    console.warn('Malformed metadata for a resource - ignoring it.', error);
  }

  return null;
};
