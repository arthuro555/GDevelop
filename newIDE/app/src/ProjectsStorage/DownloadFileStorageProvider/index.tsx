// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Download'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Download.js' implicitly has an 'any' type.
import Download from '../../UI/CustomSvgIcons/Download';
import { StorageProvider, SaveAsLocation } from '../index';
// @ts-expect-error - TS6142 - Module './DownloadFileSaveAsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/DownloadFileStorageProvider/DownloadFileSaveAsDialog.tsx', but '--jsx' is not set.
import DownloadFileSaveAsDialog from './DownloadFileSaveAsDialog';

/**
 * "Storage" allowing to download a copy of the game.
 * Used for the web-app.
 */
export default {
  internalName: 'DownloadFile',
  name: t`Download a copy`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderIcon: props => <Download fontSize={props.size} />,
  hiddenInOpenDialog: true,
  createOperations: ({ setDialog, closeDialog }) => ({
    onSaveProjectAs: async (
      project: gdProject,
      saveAsLocation: SaveAsLocation | null | undefined, // Unused - everything is done in memory.
      options
    ) => {
      options.onStartSaving();

      return new Promise(resolve => {
        setDialog(() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DownloadFileSaveAsDialog
            onDone={() => {
              closeDialog();
              resolve({ wasSaved: false, fileMetadata: null });
            }}
            project={project}
          />
        ));
      });
    },
  }),
} as StorageProvider;
