import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider/CloudSaveAsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/CloudSaveAsDialog.tsx', but '--jsx' is not set.
import CloudSaveAsDialog from '../../../ProjectsStorage/CloudStorageProvider/CloudSaveAsDialog';

export default {
  title: 'Storage Providers/CloudStorageProvider/CloudSaveAsDialog',
  component: CloudSaveAsDialog,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CloudSaveAsDialog
    nameSuggestion="My project"
    onCancel={() => action('cancel')()}
    onSave={() => action('save')()}
  />
);
