import {
  ResourceFetcher,
  FetchAllProjectResourcesOptions,
  FetchAllProjectResourcesResult,
  FetchAllProjectResourcesFunction,
} from './index';

import CloudStorageProvider from '../CloudStorageProvider';
import { moveUrlResourcesToCloudFilesIfPrivate } from '../CloudStorageProvider/CloudResourceFetcher';

import GoogleDriveStorageProvider from '../GoogleDriveStorageProvider';
import UrlStorageProvider from '../UrlStorageProvider';
import { fetchRelativeResourcesToFullUrls } from '../UrlStorageProvider/UrlResourceFetcher';

const fetchNothing: FetchAllProjectResourcesFunction = async () => {
  return {
    erroredResources: [],
  };
};

// @ts-expect-error - TS2322 - Type '{ [x: string]: FetchAllProjectResourcesFunction | (({ project, fileMetadata, authenticatedUser, onProgress, }: { project: gd.Project; fileMetadata: FileMetadata; authenticatedUser: AuthenticatedUser; onProgress: (arg1: number, arg2: number) => void; }) => Promise<...>) | (({ project, fileMetadata, onProgress, }: Opt...' is not assignable to type '{ [key: string]: FetchAllProjectResourcesFunction; }'.
const fetchers: {
  [key: string]: FetchAllProjectResourcesFunction;
} = {
  // The Cloud file storage provider fetches the resources that are
  // private URLs by downloading them and reuploading them to the cloud.
  [CloudStorageProvider.internalName]: moveUrlResourcesToCloudFilesIfPrivate,
  // The cloud storage has nothing to fetch, all resources are supposed
  // to be public URLs.
  [GoogleDriveStorageProvider.internalName]: fetchNothing,
  // The URL storage consider relative resources to be relative to the project
  // URL. This allows to open local projects uploaded to GitHub for example.
  [UrlStorageProvider.internalName]: fetchRelativeResourcesToFullUrls,
};

const BrowserResourceFetcher: ResourceFetcher = {
  fetchAllProjectResources: async (
    options: FetchAllProjectResourcesOptions
  ): Promise<FetchAllProjectResourcesResult> => {
    const { storageProvider } = options;
    const fetcher = fetchers[storageProvider.internalName];
    if (!fetcher)
      throw new Error(
        `Can't find a ResourceFetcher for ${storageProvider.internalName} - have you registered the storage provider here?`
      );

    return fetcher(options);
  },
};

export default BrowserResourceFetcher;
