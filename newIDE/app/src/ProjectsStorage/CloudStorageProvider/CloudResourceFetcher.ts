import {
  getCredentialsForCloudProject,
  UploadedProjectResourceFiles,
  uploadProjectResourceFiles,
} from '../../Utils/GDevelopServices/Project';
import {
  convertBlobToFiles,
  downloadUrlsToBlobs,
  ItemResult,
} from '../../Utils/BlobDownloader';
import { FileMetadata } from '../index';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import {
  extractDecodedFilenameWithExtensionFromProductAuthorizedUrl,
  isProductAuthorizedResourceUrl,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/Shop';
import {
  isBlobURL,
  isURL,
  parseLocalFilePathOrExtensionFromMetadata,
} from '../../ResourcesList/ResourceUtils';
import { sanitizeFilename } from '../../Utils/Filename';

export const moveUrlResourcesToCloudFilesIfPrivate = async ({
  project,
  fileMetadata,
  authenticatedUser,
  onProgress,
}: {
  project: gdProject,
  fileMetadata: FileMetadata,
  authenticatedUser: AuthenticatedUser,
  onProgress: (arg1: number, arg2: number) => void
}) => {
  const result = {
    erroredResources: [],
  } as const;

  type ResourceToFetchAndUpload = {
    resource: gdResource,
    url: string,
    filename: string
  };

  const cloudProjectId = fileMetadata.fileIdentifier;

  /**
   * Find the resources stored on GDevelop Cloud that must be downloaded and
   * uploaded into the new project.
   */
  const getResourcesToFetchAndUpload = (project: gdProject): Array<ResourceToFetchAndUpload> => {
    const resourcesManager = project.getResourcesManager();
    const allResourceNames = resourcesManager.getAllResourceNames().toJSArray();
    return allResourceNames
      .map(
        (resourceName: string): ResourceToFetchAndUpload | null | undefined => {
          const resource = resourcesManager.getResource(resourceName);
          const resourceFile = resource.getFile();

          if (isURL(resourceFile)) {
            if (isProductAuthorizedResourceUrl(resourceFile)) {
              // This is a file that is temporarily accessible thanks to a token,
              // so it should be downloaded and stored in the Cloud resources.
              const filenameWithExtension = extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
                resourceFile
              );
              return {
                resource,
                url: resourceFile,
                filename: filenameWithExtension,
              };
            } else if (isBlobURL(resourceFile)) {
              // This is a Blob URL which is surely a reference to a
              // resource that was just edited. It will be fetched and uploaded.
              const { extension } = parseLocalFilePathOrExtensionFromMetadata(
                resource
              );
              return {
                resource,
                url: resourceFile,
                filename: sanitizeFilename(
                  resource.getName() + (extension || '')
                ),
              };
            } else {
              // Public URL resource: nothing to do.
              return null;
            }
          } else {
            // Local resource: unsupported.
// @ts-expect-error - TS2339 - Property 'push' does not exist on type 'readonly []'.
            result.erroredResources.push({
              resourceName: resource.getName(),
              error: new Error('Unsupported relative file.'),
            });
            return null;
          }
        }
      )
      .filter(Boolean);
  };

  const resourcesToFetchAndUpload = getResourcesToFetchAndUpload(project);
  if (resourcesToFetchAndUpload.length === 0) return result;

  // Download all the project resources as blob (much like what is done during an export).
  const downloadedBlobsAndResourcesToUpload: Array<ItemResult<ResourceToFetchAndUpload>> = await downloadUrlsToBlobs({
    urlContainers: resourcesToFetchAndUpload,
    onProgress: (count, total) => {
      onProgress(count, total * 2);
    },
  });

  // Transform Blobs into Files.
  const downloadedFilesAndResourcesToUpload = convertBlobToFiles(
    downloadedBlobsAndResourcesToUpload,
    (resourceName, error) => {
// @ts-expect-error - TS2339 - Property 'push' does not exist on type 'readonly []'.
      result.erroredResources.push({
        resourceName,
        error,
      });
    }
  );

  // Upload the files just downloaded, for the new project.
  await getCredentialsForCloudProject(authenticatedUser, cloudProjectId);
  const uploadedProjectResourceFiles: UploadedProjectResourceFiles = await uploadProjectResourceFiles(
    authenticatedUser,
    cloudProjectId,
    downloadedFilesAndResourcesToUpload.map(({ file }) => file),
    (count, total) => {
      onProgress(total + count, total * 2);
    }
  );

  // Update resources with the newly created URLs.
  uploadedProjectResourceFiles.forEach(({ url, error }, index) => {
    const resource = downloadedFilesAndResourcesToUpload[index].resource;
    if (error || !url) {
// @ts-expect-error - TS2339 - Property 'push' does not exist on type 'readonly []'.
      result.erroredResources.push({
        resourceName: resource.getName(),
        error: error || new Error('Unknown error during upload.'),
      });
      return;
    }

    resource.setFile(url);
  });

  return result;
};
