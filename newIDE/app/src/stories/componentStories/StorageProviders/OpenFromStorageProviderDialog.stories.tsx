import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/OpenFromStorageProviderDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/OpenFromStorageProviderDialog.tsx', but '--jsx' is not set.
import OpenFromStorageProviderDialogComponent from '../../../ProjectsStorage/OpenFromStorageProviderDialog';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/GoogleDriveStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
import GoogleDriveStorageProvider from '../../../ProjectsStorage/GoogleDriveStorageProvider';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/LocalFileStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/LocalFileStorageProvider/index.tsx', but '--jsx' is not set.
import LocalFileStorageProvider from '../../../ProjectsStorage/LocalFileStorageProvider';

export default {
  title: 'Storage Providers/Openers',
  component: OpenFromStorageProviderDialogComponent,
};

export const OpenFromStorageProviderDialog = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <OpenFromStorageProviderDialogComponent
    storageProviders={[GoogleDriveStorageProvider, LocalFileStorageProvider]}
    onChooseProvider={action('onChooseProvider')}
    onClose={action('onClose')}
  />
);
