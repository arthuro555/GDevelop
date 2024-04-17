import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { FileToCloudProjectResourceUploader } from '../../../ResourcesList/FileToCloudProjectResourceUploader';

import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';

import paperDecorator from '../../PaperDecorator';
import GDevelopJsInitializerDecorator, {
  testProject,
} from '../../GDevelopJsInitializerDecorator';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

export default {
  title: 'ResourcesList/FileToCloudProjectResourceUploader',
  component: FileToCloudProjectResourceUploader,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};

export const Default = () => (
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
    <FileToCloudProjectResourceUploader
// @ts-expect-error - TS2322 - Type '{ project: any; createNewResource: () => any; onChooseResources: HandlerFunction; options: { initialSourceName: string; multiSelection: true; resourceKind: "image"; }; fileMetadata: { ...; }; getStorageProvider: () => StorageProvider; automaticallyOpenInput: false; }' is not assignable to type 'IntrinsicAttributes & FileToCloudProjectResourceUploaderProps'.
      project={testProject.project}
      createNewResource={() => new gd.ImageResource()}
      onChooseResources={action('onChooseResources')}
      options={{
        initialSourceName: 'unused',
        multiSelection: true,
        resourceKind: 'image',
      }}
      fileMetadata={{ fileIdentifier: 'fake-identifier' }}
      getStorageProvider={() => CloudStorageProvider}
      automaticallyOpenInput={false}
    />
  </AuthenticatedUserContext.Provider>
);

export const AutomaticallyOpenInput = () => (
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
    <FileToCloudProjectResourceUploader
// @ts-expect-error - TS2322 - Type '{ project: any; createNewResource: () => any; onChooseResources: HandlerFunction; options: { initialSourceName: string; multiSelection: true; resourceKind: "image"; }; fileMetadata: { ...; }; getStorageProvider: () => StorageProvider; automaticallyOpenInput: true; }' is not assignable to type 'IntrinsicAttributes & FileToCloudProjectResourceUploaderProps'.
      project={testProject.project}
      createNewResource={() => new gd.ImageResource()}
      onChooseResources={action('onChooseResources')}
      options={{
        initialSourceName: 'unused',
        multiSelection: true,
        resourceKind: 'image',
      }}
      fileMetadata={{ fileIdentifier: 'fake-identifier' }}
      getStorageProvider={() => CloudStorageProvider}
      automaticallyOpenInput
    />
  </AuthenticatedUserContext.Provider>
);

export const SingleFile = () => (
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
    <FileToCloudProjectResourceUploader
// @ts-expect-error - TS2322 - Type '{ project: any; createNewResource: () => any; onChooseResources: HandlerFunction; options: { initialSourceName: string; multiSelection: false; resourceKind: "image"; }; fileMetadata: { ...; }; getStorageProvider: () => StorageProvider; automaticallyOpenInput: false; }' is not assignable to type 'IntrinsicAttributes & FileToCloudProjectResourceUploaderProps'.
      project={testProject.project}
      createNewResource={() => new gd.ImageResource()}
      onChooseResources={action('onChooseResources')}
      options={{
        initialSourceName: 'unused',
        multiSelection: false,
        resourceKind: 'image',
      }}
      fileMetadata={{ fileIdentifier: 'fake-identifier' }}
      getStorageProvider={() => CloudStorageProvider}
      automaticallyOpenInput={false}
    />
  </AuthenticatedUserContext.Provider>
);

export const IncompatibleStorageProvider = () => (
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
    <FileToCloudProjectResourceUploader
// @ts-expect-error - TS2322 - Type '{ project: any; createNewResource: () => any; onChooseResources: HandlerFunction; options: { initialSourceName: string; multiSelection: true; resourceKind: "image"; }; fileMetadata: { ...; }; getStorageProvider: () => StorageProvider; automaticallyOpenInput: false; }' is not assignable to type 'IntrinsicAttributes & FileToCloudProjectResourceUploaderProps'.
      project={testProject.project}
      createNewResource={() => new gd.ImageResource()}
      onChooseResources={action('onChooseResources')}
      options={{
        initialSourceName: 'unused',
        multiSelection: true,
        resourceKind: 'image',
      }}
      fileMetadata={{ fileIdentifier: 'fake-identifier' }}
      getStorageProvider={() => UrlStorageProvider}
      automaticallyOpenInput={false}
    />
  </AuthenticatedUserContext.Provider>
);

export const NotAuthenticatedUser = () => (
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
    <FileToCloudProjectResourceUploader
// @ts-expect-error - TS2322 - Type '{ project: any; createNewResource: () => any; onChooseResources: HandlerFunction; options: { initialSourceName: string; multiSelection: true; resourceKind: "image"; }; fileMetadata: { ...; }; getStorageProvider: () => StorageProvider; automaticallyOpenInput: false; }' is not assignable to type 'IntrinsicAttributes & FileToCloudProjectResourceUploaderProps'.
      project={testProject.project}
      createNewResource={() => new gd.ImageResource()}
      onChooseResources={action('onChooseResources')}
      options={{
        initialSourceName: 'unused',
        multiSelection: true,
        resourceKind: 'image',
      }}
      fileMetadata={{ fileIdentifier: 'fake-identifier' }}
      getStorageProvider={() => UrlStorageProvider}
      automaticallyOpenInput={false}
    />
  </AuthenticatedUserContext.Provider>
);
