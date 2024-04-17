import { Trans } from '@lingui/macro';
import React from 'react';

import FlatButton from '../UI/FlatButton';

import Dialog from '../UI/Dialog';

import HelpButton from '../UI/HelpButton';

import { Column } from '../UI/Grid';

import { ColumnStackLayout } from '../UI/Layout';

import RaisedButton from '../UI/RaisedButton';

import Text from '../UI/Text';
import { mapFor } from '../Utils/MapFor';

import Upload from '../UI/CustomSvgIcons/Upload';
import {
  BlobDownloadUrlHolder,
  openBlobDownloadUrl,
} from '../Utils/BlobDownloadUrlHolder';

import PlaceholderLoader from '../UI/PlaceholderLoader';
import { serializeToObjectAsset } from '../Utils/Serializer';
import { showErrorBox } from '../UI/Messages/MessageBox';
import { downloadUrlsToBlobs, ItemResult } from '../Utils/BlobDownloader';

import { useGenericRetryableProcessWithProgress } from '../Utils/UseGenericRetryableProcessWithProgress';
import { extractDecodedFilenameFromProjectResourceUrl } from '../Utils/GDevelopServices/Project';
import {
  archiveFiles,
  BlobFileDescriptor,
  TextFileDescriptor,
} from '../Utils/BrowserArchiver';
import ResourcesLoader from '../ResourcesLoader';

const excludedObjectType = [
  'BBText::BBText',
  'Lighting::LightObject',
  'PrimitiveDrawing::Drawer',
  'TextEntryObject::TextEntry',
  'TextInput::TextInputObject',
  'TextObject::Text',
  'Video::VideoObject',
];

type DownloadResourcesAsBlobsOptionsWithoutProgress = {
  project: gd.Project;
  resourceNames: Array<string>;
  onAddBlobFile: (resourceName: string, blob: Blob) => void;
};

type DownloadResourcesAsBlobsOptions =
  DownloadResourcesAsBlobsOptionsWithoutProgress & {
    onProgress: (count: number, total: number) => void;
  };

export const downloadResourcesAsBlobs = async ({
  project,
  resourceNames,
  onAddBlobFile,
  onProgress,
}: DownloadResourcesAsBlobsOptions) => {
  const result = {
    erroredResources: [],
  } as const;

  type ResourceToFetch = {
    resource: gd.Resource;
    url: string;
    filename: string;
  };

  const resourcesManager = project.getResourcesManager();
  const resourcesToFetchAndUpload = resourceNames
    .map((resourceName: string): ResourceToFetch | null | undefined => {
      const resource = resourcesManager.getResource(resourceName);
      const resourceFile = ResourcesLoader.getResourceFullUrl(
        project,
        resourceName,
        {}
      );
      return {
        resource,
        url: resourceFile,
        filename: extractDecodedFilenameFromProjectResourceUrl(resourceFile),
      };
    })
    .filter(Boolean);

// @ts-expect-error - TS2322 - Type 'ItemResult<{ url: string; }>[]' is not assignable to type 'ItemResult<ResourceToFetch>[]'.
  const downloadedBlobsAndResources: Array<ItemResult<ResourceToFetch>> =
    await downloadUrlsToBlobs({
// @ts-expect-error - TS2322 - Type '(ResourceToFetch | null | undefined)[]' is not assignable to type '{ url: string; }[]'.
      urlContainers: resourcesToFetchAndUpload,
      onProgress: (count, total) => {
        onProgress(count, total * 2);
      },
    });

  downloadedBlobsAndResources.forEach(({ item, error, blob }) => {
    const { resource } = item;
    if (error || !blob) {
      // @ts-expect-error - TS2339 - Property 'push' does not exist on type 'readonly []'.
      result.erroredResources.push({
        resourceName: resource.getName(),
        error: error || new Error('Unknown error during download.'),
      });
      return;
    }
    onAddBlobFile(resource.getName(), blob);
  });

  return result;
};

const addSpacesToPascalCase = (pascalCaseName: string): string => {
  let name = pascalCaseName
    .replace(/([A-Z]+|\d+)/g, ' $1')
    .replace(/_(\w)/g, (match, $1) => ' ' + $1.toUpperCase())
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  name = name.charAt(0) === ' ' ? name.substring(1) : name;
  return name;
};

type EnumeratedObject = {
  object: gd.gdObject;
  path: string;
};

const enumerateAllObjects = (
  objectTreeItem: gd.ObjectFolderOrObject,
  folderPath: string,
  allObjects: Array<EnumeratedObject>
) => {
  if (objectTreeItem.isFolder()) {
    mapFor(0, objectTreeItem.getChildrenCount(), (i) => {
      enumerateAllObjects(
        objectTreeItem.getChildAt(i),
        folderPath + objectTreeItem.getFolderName() + '/',
        allObjects
      );
    });
  } else {
    allObjects.push({ object: objectTreeItem.getObject(), path: folderPath });
  }
};

const enumerateAllObjectsOfScene = (
  scene: gd.Layout,
  folderPath: string,
  allObjects: Array<EnumeratedObject>
) => {
  const objectTreeItem = scene.getRootFolder();

  mapFor(0, objectTreeItem.getChildrenCount(), (i) => {
    enumerateAllObjects(objectTreeItem.getChildAt(i), folderPath, allObjects);
  });
};

const zipAssets = async (
  project: gd.Project,
  enumeratedObjects: Array<EnumeratedObject>,
  ensureDownloadResourcesAsBlobsIsDone: (
    options: DownloadResourcesAsBlobsOptionsWithoutProgress
  ) => Promise<void>
): Promise<Blob | null> => {
  const blobFiles = new Map<string, BlobFileDescriptor>();
  const textFiles: Array<TextFileDescriptor> = [];

  try {
    await Promise.all(
      enumeratedObjects.map(async ({ object, path }) => {
        const usedResourceNames: Array<string> = [];
        const serializedObject = serializeToObjectAsset(
          project,
          object,
          addSpacesToPascalCase(object.getName()),
          usedResourceNames
        );

        // Download resources to blobs and update the resources.
        const blobByResourceName: Map<string, Blob> = new Map();
        await ensureDownloadResourcesAsBlobsIsDone({
          project,
          resourceNames: usedResourceNames,
          onAddBlobFile: (resourceName: string, blob: Blob) => {
            blobByResourceName.set(resourceName, blob);
          },
        });

        const resourcesManager = project.getResourcesManager();
        for (const [resourceName, blob] of blobByResourceName) {
          const resource = resourcesManager.getResource(resourceName);
          const resourceFile = 'resources/' + resource.getFile();
          blobFiles.set(resourceFile, { filePath: resourceFile, blob });
        }

        textFiles.push({
          text: JSON.stringify(serializedObject, null, 2),
          filePath: 'objects/' + path + object.getName() + '.asset.json',
        });
      })
    );

    const zippedAssetsBlob = await archiveFiles({
      textFiles,
      blobFiles: [...blobFiles.values()],
      basePath: '',
      onProgress: (count: number, total: number) => {},
    });
    return zippedAssetsBlob;
  } catch (rawError) {
    showErrorBox({
      message: 'Unable to export your assets because of an internal error.',
      rawError,
      errorId: 'download-file-save-as-dialog-error',
    });
    return null;
  }
};

type Props = {
  project: gd.Project;
  layout: gd.Layout;
  onClose: () => void;
};

const ObjectExporterDialog = ({ project, layout: scene, onClose }: Props) => {
  const [zippedSceneAssetsBlob, setZippedSceneAssetsBlob] = React.useState<
    Blob | null | undefined
  >(null);
  const {
    ensureProcessIsDone: ensureDownloadResourcesAsBlobsIsDone,
    renderProcessDialog,
  } =
    useGenericRetryableProcessWithProgress<DownloadResourcesAsBlobsOptionsWithoutProgress>(
      {
// @ts-expect-error - TS2322 - Type '(options: DownloadResourcesAsBlobsOptionsWithoutProgress, onProgress: (count: number, total: number) => void) => Promise<{ readonly erroredResources: readonly []; }>' is not assignable to type '(options: DownloadResourcesAsBlobsOptionsWithoutProgress, onProgress: (count: number, total: number) => void) => Promise<GenericRetryableProcessWithProgressResults>'.
        onDoProcess: React.useCallback(
          (options, onProgress) =>
            downloadResourcesAsBlobs({ ...options, onProgress }),
          []
        ),
      }
    );
  React.useEffect(() => {
    (async () => {
      setZippedSceneAssetsBlob(null);

      const enumeratedObjects: Array<EnumeratedObject> = [];
      enumerateAllObjectsOfScene(scene, '', enumeratedObjects);
      enumeratedObjects.filter(
        ({ object }) => !excludedObjectType.includes(object.getType())
      );
      const zippedLayerAssetsBlob = await zipAssets(
        project,
        enumeratedObjects,
        ensureDownloadResourcesAsBlobsIsDone
      );
      setZippedSceneAssetsBlob(zippedLayerAssetsBlob);
    })();

    return () => {
      setZippedSceneAssetsBlob(null);
    };
  }, [project, ensureDownloadResourcesAsBlobsIsDone, scene]);

  return (
    <Dialog
      title={<Trans>Export {scene.getName()} assets</Trans>}
      secondaryActions={[
        <HelpButton
          key="free-pack-help"
          label={<Trans>Submit a free pack</Trans>}
          helpPagePath="/community/contribute-to-the-assets-store"
        />,

        <HelpButton
          key="paid-pack-help"
          label={<Trans>Submit a paid pack</Trans>}
          helpPagePath="/community/sell-asset-pack-store/"
        />,
      ]}
      actions={[
        <FlatButton
          label={<Trans>Close</Trans>}
          keyboardFocused={true}
          onClick={onClose}
          key="close"
        />,
      ]}
      open
      onRequestClose={onClose}
      maxWidth="sm"
    >
      <ColumnStackLayout expand>
        <Text>
          <Trans>
            Export the scene objects to a file and learn more about the
            submission process in the documentation.
          </Trans>
        </Text>
        <Column alignItems="center">
          {zippedSceneAssetsBlob ? (
            <BlobDownloadUrlHolder blob={zippedSceneAssetsBlob}>
              {(blobDownloadUrl) => (
                <RaisedButton
                  icon={<Upload />}
                  primary
                  onClick={() =>
                    openBlobDownloadUrl(
                      blobDownloadUrl,
                      scene.getName() + '.gdo'
                    )
                  }
                  label={<Trans>Export as a pack</Trans>}
                />
              )}
            </BlobDownloadUrlHolder>
          ) : (
            <PlaceholderLoader />
          )}
        </Column>
      </ColumnStackLayout>
      {renderProcessDialog()}
    </Dialog>
  );
};

export default ObjectExporterDialog;
