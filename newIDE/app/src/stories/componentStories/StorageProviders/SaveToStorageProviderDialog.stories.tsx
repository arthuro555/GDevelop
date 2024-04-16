import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/SaveToStorageProviderDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/SaveToStorageProviderDialog.tsx', but '--jsx' is not set.
import SaveToStorageProviderDialog from '../../../ProjectsStorage/SaveToStorageProviderDialog';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/GoogleDriveStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
import GoogleDriveStorageProvider from '../../../ProjectsStorage/GoogleDriveStorageProvider';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/DownloadFileStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/DownloadFileStorageProvider/index.tsx', but '--jsx' is not set.
import DownloadFileStorageProvider from '../../../ProjectsStorage/DownloadFileStorageProvider';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import {
  fakeNotAuthenticatedUser,
  fakeAuthenticatedUserWithEmailVerified,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Storage Providers/Writers/SaveToStorageProviderDialog',
  component: SaveToStorageProviderDialog,
};

export const UserNotAuthenticated = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SaveToStorageProviderDialog
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onChooseProvider={action('onChooseProvider')}
      onClose={action('onClose')}
    />
  </AuthenticatedUserContext.Provider>
);

export const UserAuthenticated = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider
    value={fakeAuthenticatedUserWithEmailVerified}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SaveToStorageProviderDialog
      storageProviders={[
        UrlStorageProvider,
        CloudStorageProvider,
        GoogleDriveStorageProvider,
        DownloadFileStorageProvider,
      ]}
      onChooseProvider={action('onChooseProvider')}
      onClose={action('onClose')}
    />
  </AuthenticatedUserContext.Provider>
);
