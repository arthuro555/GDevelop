import optionalRequire from '../../Utils/OptionalRequire';
import PromisePool from '@supercharge/promise-pool';
import { retryIfFailed } from '../../Utils/RetryIfFailed';
import newNameGenerator from '../../Utils/NewNameGenerator';
import { FileMetadata } from '../index';
import {
  extractDecodedFilenameWithExtensionFromProductAuthorizedUrl,
  fetchTokenForPrivateGameTemplateAuthorizationIfNeeded,
  isPrivateGameTemplateResourceAuthorizedUrl,
  isProductAuthorizedResourceUrl,
} from '../../Utils/GDevelopServices/Shop';
import {
  extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl,
  isPublicAssetResourceUrl,
} from '../../Utils/GDevelopServices/Asset';
import {
  isBlobURL,
  isURL,
  parseLocalFilePathOrExtensionFromMetadata,
} from '../../ResourcesList/ResourceUtils';
import { sanitizeFilename } from '../../Utils/Filename';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { extractDecodedFilenameFromProjectResourceUrl } from '../../Utils/GDevelopServices/Project';
import axios from 'axios';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;
const fs = optionalRequire('fs-extra');
const path = optionalRequire('path');

type Options = {
  project: gd.Project;
  fileMetadata: FileMetadata;
  onProgress: (arg1: number, arg2: number) => void;
  authenticatedUser: AuthenticatedUser;
};

const generateUnusedFilepath = (
  basePath: string,
  alreadyUsedFilePaths: Set<string>,
  filename: string
) => {
  const extension = path.extname(filename);
  const filenameWithoutExtension = path.basename(filename, extension);
  const name = newNameGenerator(filenameWithoutExtension, (name) => {
    const tentativePath = path.join(basePath, name) + extension;
    return (
      fs.existsSync(tentativePath) || alreadyUsedFilePaths.has(tentativePath)
    );
  });
  return path.join(basePath, name) + extension;
};

const downloadBlobToLocalFile = async (
  blobUrl: string,
  filePath: string
): Promise<void> => {
  if (!ipcRenderer) throw new Error('Not supported');

  const response = await axios.get(blobUrl, {
    responseType: 'arraybuffer',
  });
  const arrayBuffer = response.data;

  await ipcRenderer.invoke(
    'local-file-save-from-arraybuffer',
    arrayBuffer,
    filePath
  );
};

// This mover can be used for both public URLs and Cloud project resources.
export const moveUrlResourcesToLocalFiles = async ({
  project,
  fileMetadata,
  onProgress,
  authenticatedUser,
}: Options) => {
  if (!fs || !ipcRenderer) throw new Error('Unsupported');

  // Get all resources to download.
  const resourcesManager = project.getResourcesManager();
  const allResourceNames = resourcesManager.getAllResourceNames().toJSArray();
  // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
  const resourcesToFetchNames = allResourceNames.filter((resourceName) => {
    const resource = resourcesManager.getResource(resourceName);
    const resourceFile = resource.getFile();
    return isURL(resourceFile);
  });
  const tokenForPrivateGameTemplateAuthorization =
    await fetchTokenForPrivateGameTemplateAuthorizationIfNeeded({
      authenticatedUser,
      // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
      allResourcePaths: resourcesToFetchNames.map((resourceName) => {
        const resource = resourcesManager.getResource(resourceName);
        return resource.getFile();
      }),
    });

  const projectPath = path.dirname(fileMetadata.fileIdentifier);
  const baseAssetsPath = path.join(projectPath, 'assets');
  const downloadedFilePaths = new Set<string>();
  const erroredResources: Array<{
    error: never;
    resourceName: any;
  }> = [];

  let fetchedResourcesCount = 0;

  await PromisePool.withConcurrency(50)
    .for(resourcesToFetchNames) // It's important not to loop on allResourceNames, as calling the onProgress can be costly on the UI.
    .process(async (resourceName) => {
      const resource = resourcesManager.getResource(resourceName);

      const resourceFile = resource.getFile();
      if (isURL(resourceFile)) {
        if (isBlobURL(resourceFile)) {
          try {
            const { localFilePath, extension } =
              parseLocalFilePathOrExtensionFromMetadata(resource);
            const downloadedFilePath = localFilePath
              ? path.resolve(projectPath, localFilePath)
              : generateUnusedFilepath(
                  baseAssetsPath,
                  downloadedFilePaths,
                  sanitizeFilename(resource.getName() + (extension || ''))
                );

            await fs.ensureDir(baseAssetsPath);
            await downloadBlobToLocalFile(resourceFile, downloadedFilePath);
            resource.setFile(
              path.relative(projectPath, downloadedFilePath).replace(/\\/g, '/')
            );
          } catch (error) {
            // @ts-expect-error - TS2322 - Type 'any' is not assignable to type 'never'.
            erroredResources.push({ resourceName, error });
          }
        } else {
          let filename;
          if (isProductAuthorizedResourceUrl(resourceFile)) {
            // Resource is coming from a private asset or private game template.
            filename =
              extractDecodedFilenameWithExtensionFromProductAuthorizedUrl(
                resourceFile
              );
          } else if (isPublicAssetResourceUrl(resourceFile)) {
            // Resource is coming from a public asset.
            filename =
              extractDecodedFilenameWithExtensionFromPublicAssetResourceUrl(
                resourceFile
              );
          } else {
            // Resource is a project resource or a generic url.
            filename =
              extractDecodedFilenameFromProjectResourceUrl(resourceFile);
          }

          // Find a new file for the resource to download.
          const downloadedFilePath = generateUnusedFilepath(
            baseAssetsPath,
            downloadedFilePaths,
            filename
          );
          downloadedFilePaths.add(downloadedFilePath);

          try {
            await retryIfFailed({ times: 2 }, async () => {
              await fs.ensureDir(baseAssetsPath);
              const resourceUrl = new URL(resourceFile);
              if (
                isPrivateGameTemplateResourceAuthorizedUrl(resourceUrl.href) &&
                tokenForPrivateGameTemplateAuthorization
              ) {
                resourceUrl.searchParams.set(
                  'token',
                  tokenForPrivateGameTemplateAuthorization
                );
              }
              const encodedUrl = resourceUrl.href; // Encode the URL to support special characters in file names.
              await ipcRenderer.invoke(
                'local-file-download',
                encodedUrl,
                downloadedFilePath
              );
              resource.setFile(
                path
                  .relative(projectPath, downloadedFilePath)
                  .replace(/\\/g, '/')
              );
            });
          } catch (error) {
            // @ts-expect-error - TS2322 - Type 'any' is not assignable to type 'never'.
            erroredResources.push({ resourceName, error });
          }
        }
      }

      onProgress(fetchedResourcesCount++, resourcesToFetchNames.length);
    });

  return {
    erroredResources,
  };
};
