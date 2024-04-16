import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../Utils/UseGenericRetryableProcessWithProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/UseGenericRetryableProcessWithProgress.tsx', but '--jsx' is not set.
import { useGenericRetryableProcessWithProgress } from '../../Utils/UseGenericRetryableProcessWithProgress';
import { StorageProviderOperations, StorageProvider } from '../index';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { FileMetadata } from '..';

export type MoveAllProjectResourcesOptionsWithoutProgress = {
  project: gdProject,
  oldFileMetadata: FileMetadata,
  oldStorageProvider: StorageProvider,
  oldStorageProviderOperations: StorageProviderOperations,
  newFileMetadata: FileMetadata,
  newStorageProvider: StorageProvider,
  newStorageProviderOperations: StorageProviderOperations,
  authenticatedUser: AuthenticatedUser
};

export type MoveAllProjectResourcesOptions = (MoveAllProjectResourcesOptionsWithoutProgress) & {
  onProgress: (arg1: number, arg2: number) => void
};

export type MoveAllProjectResourcesResult = {
  erroredResources: Array<{
    resourceName: string,
    error: Error
  }>
};

export type MoveAllProjectResourcesFunction = (options: MoveAllProjectResourcesOptions) => Promise<MoveAllProjectResourcesResult>;

export type ResourceMover = {
  moveAllProjectResources: MoveAllProjectResourcesFunction
};

type UseResourceMoverOutput = {
  /**
   * Launch the moving of the resources, when saving a project in a new location.
   */
  ensureResourcesAreMoved: (options: MoveAllProjectResourcesOptionsWithoutProgress) => Promise<void>,
  /**
   * Render, if needed, the dialog that will show the progress of resources moving.
   */
  renderResourceMoverDialog: () => React.ReactElement
};

/**
 * Hook allowing to launch the fetching of resources, useful after opening a project
 * or adding assets from the asset store (as they must be downloaded on the desktop app).
 */
export const useResourceMover = (
  {
    resourceMover,
  }: {
    resourceMover: ResourceMover
  },
): UseResourceMoverOutput => {
  const {
    ensureProcessIsDone,
    renderProcessDialog,
  } = useGenericRetryableProcessWithProgress<MoveAllProjectResourcesOptionsWithoutProgress>({
    onDoProcess: React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'onProgress' implicitly has an 'any' type.
      (options, onProgress) =>
        resourceMover.moveAllProjectResources({
          ...options,
          onProgress,
        }),
      [resourceMover]
    ),
  });

  return React.useMemo(
    () => ({
      ensureResourcesAreMoved: ensureProcessIsDone,
      renderResourceMoverDialog: renderProcessDialog,
    }),
    [ensureProcessIsDone, renderProcessDialog]
  );
};
