import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/GoogleDriveStorageProvider/GoogleDriveSaveAsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/GoogleDriveSaveAsDialog.tsx', but '--jsx' is not set.
import GoogleDriveSaveAsDialog from '../../../ProjectsStorage/GoogleDriveStorageProvider/GoogleDriveSaveAsDialog';

export default {
  title: 'Storage Providers/GoogleDriveStorageProvider/GoogleDriveSaveAsDialog',
  component: GoogleDriveSaveAsDialog,
};

export const DefaultFakePickedFileSaveWorking = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GoogleDriveSaveAsDialog
    onShowFilePicker={() =>
      Promise.resolve({
        type: 'FILE',
        id: 'fake-id',
        name: 'Fake Google Drive file',
        parentId: 'fake-parent-id',
      })
    }
    onCancel={action('cancel')}
    onSave={() => Promise.resolve()}
  />
);
DefaultFakePickedFileSaveWorking.storyName =
  'default, fake picked file, save working';

export const DefaultFakePickedFolderSaveWorking = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GoogleDriveSaveAsDialog
    onShowFilePicker={() =>
      Promise.resolve({
        type: 'FOLDER',
        id: 'fake-id',
        name: 'Fake Google Drive file',
      })
    }
    onCancel={action('cancel')}
    onSave={() => Promise.resolve()}
  />
);
DefaultFakePickedFolderSaveWorking.storyName =
  'default, fake picked folder, save working';

export const DefaultErrorWhenPickingFileFolder = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GoogleDriveSaveAsDialog
    onShowFilePicker={() => Promise.reject(new Error('fake-error'))}
    onCancel={action('cancel')}
    onSave={() => Promise.resolve()}
  />
);
DefaultErrorWhenPickingFileFolder.storyName =
  'default, error when picking file/folder';

export const DefaultErrorWhileSaving = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GoogleDriveSaveAsDialog
    onShowFilePicker={() =>
      Promise.resolve({
        type: 'FILE',
        id: 'fake-id',
        name: 'Fake Google Drive file',
        parentId: 'fake-parent-id',
      })
    }
    onCancel={action('cancel')}
    onSave={() => Promise.reject(new Error('fake-error'))}
  />
);
DefaultErrorWhileSaving.storyName = 'default, error while saving';
