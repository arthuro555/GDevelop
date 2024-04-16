import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/FileToCloudProjectResourceUploader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/FileToCloudProjectResourceUploader.tsx', but '--jsx' is not set.
import { FileToCloudProjectResourceUploader } from '../../../ResourcesList/FileToCloudProjectResourceUploader';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../../GDevelopJsInitializerDecorator';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

const gd: libGDevelop = global.gd;

export default {
  title: 'ResourcesList/FileToCloudProjectResourceUploader',
  component: FileToCloudProjectResourceUploader,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FileToCloudProjectResourceUploader
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FileToCloudProjectResourceUploader
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FileToCloudProjectResourceUploader
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FileToCloudProjectResourceUploader
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FileToCloudProjectResourceUploader
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
