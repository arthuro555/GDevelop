import * as React from 'react';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { FileMetadata, SaveAsLocation } from '..';
import {
  commitVersion,
  createCloudProject,
  getCredentialsForCloudProject,
  updateCloudProject,
} from '../../Utils/GDevelopServices/Project';
// @ts-expect-error - TS2724 - '"axios"' has no exported member named '$AxiosError'. Did you mean 'AxiosError'?
import type { $AxiosError } from 'axios';
import type { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
import { serializeToJSON } from '../../Utils/Serializer';

import CloudSaveAsDialog from './CloudSaveAsDialog';

import { t } from '@lingui/macro';
import {
  createZipWithSingleTextFile,
  unzipFirstEntryOfBlob,
} from '../../Utils/Zip.js/Utils';
import ProjectCache from '../../Utils/ProjectCache';
import { getProjectCache } from './CloudProjectOpener';
import { retryIfFailed } from '../../Utils/RetryIfFailed';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';

const zipProject = async (project: gd.Project): Promise<[Blob, string]> => {
  const projectJson = serializeToJSON(project);
  const zippedProject = await createZipWithSingleTextFile(
    projectJson,
    'game.json'
  );
  return [zippedProject, projectJson];
};

const checkZipContent = async (zip: Blob, projectJson: string): Promise<boolean> => {
  try {
    const unzippedProjectJson = await unzipFirstEntryOfBlob(zip);
    return (
      unzippedProjectJson === projectJson && !!JSON.parse(unzippedProjectJson)
    );
  } catch (error: any) {
    console.error('An error occurred when checking zipped project.', error);
    return false;
  }
};

const zipProjectAndCommitVersion = async (
  {
    authenticatedUser,
    project,
    cloudProjectId,
    options,
  }: {
    authenticatedUser: AuthenticatedUser,
    project: gd.Project,
    cloudProjectId: string,
    options?: {
      previousVersion?: string,
      restoredFromVersionId?: string
    }
  },
): Promise<string | null | undefined> => {
  const [zippedProject, projectJson] = await zipProject(project);
  const archiveIsSane = await checkZipContent(zippedProject, projectJson);
  if (!archiveIsSane) {
    throw new Error('Project compression failed before saving the project.');
  }

  const newVersion = await retryIfFailed({ times: 2 }, () =>
    commitVersion({
      authenticatedUser,
      cloudProjectId,
      zippedProject,
      previousVersion: options ? options.previousVersion : null,
      restoredFromVersionId: options ? options.restoredFromVersionId : null,
    })
  );
  return newVersion;
};

export const generateOnSaveProject = (
  authenticatedUser: AuthenticatedUser
) => async (
  project: gd.Project,
  fileMetadata: FileMetadata,
  options?: {
    previousVersion?: string,
    restoredFromVersionId?: string
  }
) => {
  const cloudProjectId = fileMetadata.fileIdentifier;
  const gameId = project.getProjectUuid();
  const now = Date.now();

  if (!fileMetadata.gameId) {
    console.info('Game id was never set, updating the cloud project.');
    try {
      await updateCloudProject(authenticatedUser, cloudProjectId, {
        gameId,
      });
    } catch (error: any) {
      console.error('Could not update cloud project with gameId', error);
      // Do not throw, as this is not a blocking error.
    }
  }
  const newVersion = await zipProjectAndCommitVersion({
    authenticatedUser,
    project,
    cloudProjectId,
    options,
  });

  const newFileMetadata: FileMetadata = {
    ...fileMetadata,
    gameId,
    // lastModifiedDate is set here even though it will be set by backend services.
    // Regarding the list of cloud projects in the build section, it should not have
    // an impact since the 2 dates are not used for the same purpose.
    // But it's better to have an up-to-date current file metadata (used by the version
    // history to know when to refresh the most recent version).
    lastModifiedDate: now,
  };
  if (!newVersion) return { wasSaved: false, fileMetadata: newFileMetadata };

  // Save the version being modified in the file metadata, so that it can be
  // used when saving to compare with the last version of the project, and
  // raise a conflict warning if different.
  newFileMetadata.version = newVersion;
  return {
    wasSaved: true,
    fileMetadata: newFileMetadata,
  };
};

export const generateOnChangeProjectProperty = (
  authenticatedUser: AuthenticatedUser
) => async (
  project: gd.Project,
  fileMetadata: FileMetadata,
  properties: {
    name?: string,
    gameId?: string
  },
): Promise<null | {
  version: string,
  lastModifiedDate: number
}> => {
  if (!authenticatedUser.authenticated) return null;
  try {
    await updateCloudProject(
      authenticatedUser,
      fileMetadata.fileIdentifier,
      properties
    );
    const newVersion = await zipProjectAndCommitVersion({
      authenticatedUser,
      project,
      cloudProjectId: fileMetadata.fileIdentifier,
    });
    if (!newVersion) {
      throw new Error("Couldn't save project following property update.");
    }

    return { version: newVersion, lastModifiedDate: Date.now() };
  } catch (error: any) {
    // TODO: Determine if a feedback should be given to user so that they can try again if necessary.
    console.warn(
      'An error occurred while changing cloud project name. Ignoring.',
      error
    );
    return null;
  }
};

export const getWriteErrorMessage = (error: Error | $AxiosError<any>): MessageDescriptor => {
  const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(error);
  if (
    extractedStatusAndCode &&
    extractedStatusAndCode.code === 'project-creation/too-many-projects'
  ) {
    return t`You've reached the limit of cloud projects you can have. Delete some existing cloud projects of yours before trying again.`;
  }
  return t`An error occurred when saving the project, please verify your internet connection or try again later.`;
};

export const generateOnChooseSaveProjectAsLocation = ({
  authenticatedUser,
  setDialog,
  closeDialog,
}: {
  authenticatedUser: AuthenticatedUser,
  setDialog: (arg1: () => React.ReactElement) => void,
  closeDialog: () => void
}) => async (
  {
    project,
    fileMetadata,
  }: {
    project: gd.Project,
    fileMetadata: FileMetadata | null | undefined
  },
// @ts-expect-error - TS2366 - Function lacks ending return statement and return type does not include 'undefined'.
): Promise<{
  saveAsLocation: SaveAsLocation | null | undefined
}> => {
  if (!authenticatedUser.authenticated) {
    return { saveAsLocation: null };
  }

  const name = await new Promise(resolve: (result: Promise<null | string> | null | string) => void => {
    setDialog(() => (

      <CloudSaveAsDialog
        onCancel={() => {
          closeDialog();
          resolve(null);
        }}
        nameSuggestion={project.getName()}
        onSave={(newName: string) => {
          closeDialog();
          resolve(newName);
        }}
      />
    ));

  });

// @ts-expect-error - TS1345 - An expression of type 'void' cannot be tested for truthiness.
  if (!name) return { saveAsLocation: null }; // Save was cancelled.

  return {
    saveAsLocation: {
      name,
    },
  };

};

export const generateOnSaveProjectAs = (
  authenticatedUser: AuthenticatedUser,
  setDialog: (arg1: () => React.ReactElement) => void,
  closeDialog: () => void
) => async (
  project: gd.Project,
  saveAsLocation: SaveAsLocation | null | undefined,
  options: {
    onStartSaving: () => void,
    onMoveResources: (
      arg1: {
        newFileMetadata: FileMetadata
      },
    ) => Promise<void>
  }
) => {
  if (!saveAsLocation)
    throw new Error('A location was not chosen before saving as.');
  const { name, gameId } = saveAsLocation;
  if (!name) throw new Error('A name was not chosen before saving as.');
  if (!authenticatedUser.authenticated) {
    return { wasSaved: false, fileMetadata: null };
  }
  options.onStartSaving();

  try {
    // Create a new cloud project.
    const cloudProject = await createCloudProject(authenticatedUser, {
      name,
      gameId,
    });
    if (!cloudProject)
      throw new Error('No cloud project was returned from creation api call.');
    const cloudProjectId = cloudProject.id;

    const fileMetadata: FileMetadata = {
      fileIdentifier: cloudProjectId,
      gameId,
    };

    // Move the resources to the new project.
    await options.onMoveResources({ newFileMetadata: fileMetadata });

    // Commit the changes to the newly created cloud project.
    await getCredentialsForCloudProject(authenticatedUser, cloudProjectId);
    const newVersion = await zipProjectAndCommitVersion({
      authenticatedUser,
      project,
      cloudProjectId,
    });
    if (!newVersion)
      throw new Error('No version id was returned from committing api call.');

    // Save the version being modified in the file metadata, so that it can be
    // used when saving to compare with the last version of the project, and
    // raise a conflict warning if different.
    fileMetadata.version = newVersion;

    return {
      wasSaved: true,
      fileMetadata,
    };
  } catch (error: any) {
    console.error('An error occurred while creating a cloud project', error);
    throw error;
  }
};

export const getProjectLocation = (
  {
    projectName,
    saveAsLocation,
    newProjectsDefaultFolder,
  }: {
    projectName: string,
    saveAsLocation: SaveAsLocation | null | undefined,
    newProjectsDefaultFolder?: string
  },
): SaveAsLocation => {
  return {
    name: projectName,
  };
};

export const renderNewProjectSaveAsLocationChooser = ({
  projectName,
  saveAsLocation,
  setSaveAsLocation,
  newProjectsDefaultFolder,
}: {
  projectName: string,
  saveAsLocation: SaveAsLocation | null | undefined,
  setSaveAsLocation: (arg1?: SaveAsLocation | null | undefined) => void,
  newProjectsDefaultFolder?: string
}) => {
  if (!saveAsLocation || saveAsLocation.name !== projectName) {
    setSaveAsLocation(
      getProjectLocation({
        projectName,
        saveAsLocation,
        newProjectsDefaultFolder,
      })
    );
  }
  return null;
};

export const generateOnAutoSaveProject = (
  authenticatedUser: AuthenticatedUser
) =>
  ProjectCache.isAvailable()
    ? async (project: gd.Project, fileMetadata: FileMetadata): Promise<void> => {
        const { profile } = authenticatedUser;
        if (!profile) return;
        const cloudProjectId = fileMetadata.fileIdentifier;
        const projectCache = getProjectCache();
        projectCache.put(
          {
            userId: profile.id,
            cloudProjectId,
          },
          project
        );
      }
    : undefined;
