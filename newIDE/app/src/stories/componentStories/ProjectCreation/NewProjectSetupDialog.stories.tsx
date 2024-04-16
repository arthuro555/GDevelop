import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ProjectCreation/NewProjectSetupDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/NewProjectSetupDialog.tsx', but '--jsx' is not set.
import NewProjectSetupDialog from '../../../ProjectCreation/NewProjectSetupDialog';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/GoogleDriveStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
import GoogleDriveStorageProvider from '../../../ProjectsStorage/GoogleDriveStorageProvider';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/DownloadFileStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/DownloadFileStorageProvider/index.tsx', but '--jsx' is not set.
import DownloadFileStorageProvider from '../../../ProjectsStorage/DownloadFileStorageProvider';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserWithNoSubscriptionAndTooManyCloudProjects,
  fakeNotAuthenticatedUser,
  geometryMonsterExampleShortHeader,
  fakePrivateGameTemplateListingData,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Project Creation/NewProjectSetupDialog',
  component: NewProjectSetupDialog,
  decorators: [paperDecorator],
};

export const OpenAndNotAuthenticated = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={fakeNotAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const OpenAndAuthenticated = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const Opening = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      isOpeningProject
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const LimitsReached = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={
        fakeAuthenticatedUserWithNoSubscriptionAndTooManyCloudProjects
      }
      storageProviders={[
        CloudStorageProvider,
        UrlStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const FromExample = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      selectedExampleShortHeader={geometryMonsterExampleShortHeader}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const FromPrivateGameTemplate = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
      onCreateEmptyProject={() => action('create empty')()}
      onCreateFromExample={() => action('create from example')()}
      onCreateWithLogin={() => action('create with login')()}
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      selectedExampleShortHeader={null}
      onCreateProjectFromPrivateGameTemplate={() =>
        action('create project from private game template')()
      }
      selectedPrivateGameTemplateListingData={
        fakePrivateGameTemplateListingData
      }
    />
  );
};
