import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import NewProjectSetupDialog from '../../../ProjectCreation/NewProjectSetupDialog';

import GoogleDriveStorageProvider from '../../../ProjectsStorage/GoogleDriveStorageProvider';

import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';

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
    <NewProjectSetupDialog
      authenticatedUser={fakeNotAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const OpenAndAuthenticated = () => {
  return (
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const Opening = () => {
  return (
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
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const LimitsReached = () => {
  return (
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
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const FromExample = () => {
  return (
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      selectedExampleShortHeader={geometryMonsterExampleShortHeader}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedPrivateGameTemplateListingData={null}
    />
  );
};

export const FromPrivateGameTemplate = () => {
  return (
    <NewProjectSetupDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onClose={() => action('click on close')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateEmptyProject={() => action('create empty')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromExample={() => action('create from example')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateWithLogin={() => action('create with login')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onCreateFromAIGeneration={() => action('create from AI generation')()}
      selectedExampleShortHeader={null}
      onCreateProjectFromPrivateGameTemplate={() =>
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
        action('create project from private game template')()
      }
      selectedPrivateGameTemplateListingData={
        fakePrivateGameTemplateListingData
      }
    />
  );
};
