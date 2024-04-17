import { t } from '@lingui/macro';
import * as React from 'react';

import Download from '../../UI/CustomSvgIcons/Download';
import { StorageProvider, SaveAsLocation } from '../index';

import DownloadFileSaveAsDialog from './DownloadFileSaveAsDialog';

/**
 * "Storage" allowing to download a copy of the game.
 * Used for the web-app.
 */
export default {
  internalName: 'DownloadFile',
  name: t`Download a copy`,
  // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderIcon: (props) => <Download fontSize={props.size} />,
  hiddenInOpenDialog: true,
  createOperations: ({ setDialog, closeDialog }) => ({
    onSaveProjectAs: async (
      project: gd.Project,
      saveAsLocation: SaveAsLocation | null | undefined, // Unused - everything is done in memory.
      options
    ) => {
      options.onStartSaving();

      return new Promise((resolve) => {
        setDialog(() => (
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
