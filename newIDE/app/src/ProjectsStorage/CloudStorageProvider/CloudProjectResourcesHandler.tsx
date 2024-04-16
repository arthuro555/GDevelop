import * as React from 'react';

// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { ResourcesActionsProps } from '../../ProjectsStorage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import { downloadUrlsToLocalFiles } from '../../Utils/LocalFileDownloader';
import Window from '../../Utils/Window';
import ResourcesLoader from '../../ResourcesLoader';

const path = optionalRequire('path');
const electron = optionalRequire('electron');
const remote = optionalRequire('@electron/remote');
const app = remote ? remote.app : null;

export const generateGetResourceActions = ({
  authenticatedUser,
}: {
  authenticatedUser: AuthenticatedUser
}) => ({
  project,
  resource,
  i18n,
  fileMetadata,
  informUser,
}: ResourcesActionsProps) => {
  const openLabel =
    app && path
      ? t`Save in the "Downloads" folder`
      : t`Open resource in browser`;

  const openOrDownloadResource = async ({
    askUserForDownloadDestination,
  }: {
    askUserForDownloadDestination: boolean
  }) => {
    let resourceUrl = ResourcesLoader.getResourceFullUrl(
      project,
      resource.getName(),
      {}
    );
    if (app && path && electron) {
      const defaultPath = path.join(
        app.getPath('downloads'),
        resource.getName()
      );
// @ts-expect-error - TS7034 - Variable 'targetPath' implicitly has type 'any' in some locations where its type cannot be determined.
      let targetPath;
      if (askUserForDownloadDestination) {
        targetPath = remote.dialog.showSaveDialogSync(null, {
          defaultPath: defaultPath,
          properties: ['createDirectory', 'showOverwriteConfirmation'],
        });
        if (!targetPath) return;
      } else {
        targetPath = defaultPath;
      }
      await downloadUrlsToLocalFiles({
        urlContainers: [
          {
            url: resourceUrl,
            filePath: targetPath,
          },
        ],
        onProgress: () => {},
        throwIfAnyError: false,
      });
      informUser({
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        actionLabel: <Trans>Open folder</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        message: <Trans>The resource has been downloaded</Trans>,
        onActionClick: () =>
// @ts-expect-error - TS7005 - Variable 'targetPath' implicitly has an 'any' type.
          electron.shell.showItemInFolder(path.resolve(targetPath)),
      });
    } else {
      Window.openExternalURL(resourceUrl);
    }
  };

  const actions = [
    {
      label: i18n._(openLabel),
      click: () =>
        openOrDownloadResource({ askUserForDownloadDestination: false }),
    },
  ];

  if (app && path) {
    actions.push({
      label: i18n._(t`Save as...`),
      click: () =>
        openOrDownloadResource({ askUserForDownloadDestination: true }),
    });
  }
  return actions;
};
