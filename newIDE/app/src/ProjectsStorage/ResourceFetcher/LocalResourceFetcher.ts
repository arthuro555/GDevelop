import {
  ResourceFetcher,
  FetchAllProjectResourcesOptions,
  FetchAllProjectResourcesResult,
  FetchAllProjectResourcesFunction,
} from './index';

import LocalFileStorageProvider from '../LocalFileStorageProvider';
import { moveUrlResourcesToLocalFiles } from '../LocalFileStorageProvider/LocalFileResourceMover';
import UrlStorageProvider from '../UrlStorageProvider';

import CloudStorageProvider from '../CloudStorageProvider';
import { fetchRelativeResourcesToFullUrls } from '../UrlStorageProvider/UrlResourceFetcher';
import { moveUrlResourcesToCloudFilesIfPrivate } from '../CloudStorageProvider/CloudResourceFetcher';

// @ts-expect-error - TS2322 - Type '{ [x: string]: (({ project, fileMetadata, authenticatedUser, onProgress, }: { project: gd.Project; fileMetadata: FileMetadata; authenticatedUser: AuthenticatedUser; onProgress: (arg1: number, arg2: number) => void; }) => Promise<...>) | (({ project, fileMetadata, onProgress, authenticatedUser, }: Options) => Promise...' is not assignable to type '{ [key: string]: FetchAllProjectResourcesFunction; }'.
const fetchers: {
  [key: string]: FetchAllProjectResourcesFunction;
} = {
  // The Cloud file storage provider fetches the resources that are
  // private URLs by downloading them and reuploading them to the cloud.
  [CloudStorageProvider.internalName]: moveUrlResourcesToCloudFilesIfPrivate,
  // The local file storage provider fetches the resources that are URLs
  // by downloading them locally.
  [LocalFileStorageProvider.internalName]: moveUrlResourcesToLocalFiles,
  // The URL storage consider relative resources to be relative to the project
  // URL. This allows to open local projects uploaded to GitHub for example.
  [UrlStorageProvider.internalName]: fetchRelativeResourcesToFullUrls,
};

const LocalResourceFetcher: ResourceFetcher = {
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

export default LocalResourceFetcher;
