// @flow
import { t } from '@lingui/macro';
import { type StorageProvider } from '../index';
import {
  onOpenWithPicker,
  onOpen,
  hasAutoSave,
  onGetAutoSave,
} from './LocalProjectOpener';
import {
  onSaveProject,
  onSaveProjectAs,
  onAutoSaveProject,
} from './LocalProjectWriter';
import {
  type AppArguments,
  POSITIONAL_ARGUMENTS_KEY,
} from '../../Utils/Window';
import { type MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';

/**
 * Use the Electron APIs to provide access to the native
 * file system (with native save/open dialogs).
 */
export default ({
  internalName: 'LocalFile',
  name: t`Local file system`,
  getFileMetadataFromAppArguments: (appArguments: AppArguments) => {
    if (!appArguments[POSITIONAL_ARGUMENTS_KEY]) return null;
    if (!appArguments[POSITIONAL_ARGUMENTS_KEY].length) return null;

    return {
      fileIdentifier: appArguments[POSITIONAL_ARGUMENTS_KEY][0],
    };
  },
  createOperations: () => ({
    onOpenWithPicker,
    onOpen,
    hasAutoSave,
    onSaveProject,
    onSaveProjectAs,
    onAutoSaveProject,
    onGetAutoSave,
    getOpenErrorMessage: (error: Error): MessageDescriptor => {
      return t`No this is illegal to do sorry.`;
    },
  }),
}: StorageProvider);
