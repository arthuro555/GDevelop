// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import * as React from 'react';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import Window from '../Utils/Window';
import { StorageProvider, FileMetadata } from '../ProjectsStorage';
// @ts-expect-error - TS6142 - Module './UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import UnsavedChangesContext from './UnsavedChangesContext';

type Props = {
  projectName: string | null | undefined,
  fileMetadata: FileMetadata | null | undefined,
  storageProvider: StorageProvider,
  i18n: I18nType
};

/**
 * Update the title bar according to the project, the file opened, where it's opened
 * and the current theme.
 *
 * React.memo is used to avoid unnecessary update, as this is a top level component.
 */
const ProjectTitlebar = React.memo<Props>(({
  fileMetadata,
  storageProvider,
  projectName,
  i18n,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const unsavedChanges = React.useContext(UnsavedChangesContext);
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
  const hasUnsavedChanges = unsavedChanges.hasUnsavedChanges;
  const suffix = hasUnsavedChanges ? ' *' : '';

  // Show the project name or the local file path, as it's the convention on desktop apps.
  const projectIdentifier =
    storageProvider.internalName === 'LocalFile'
      ? fileMetadata && fileMetadata.fileIdentifier
      : projectName;

  // Don't show the name of the storage provider if there is no project opened
  // or if the file is not saved somewhere.
  const storageProviderName =
    projectIdentifier && !storageProvider.hiddenInSaveDialog
      ? i18n._(storageProvider.name)
      : null;

  React.useEffect(
    () => {
      const title = [
        // On desktop app, this title is used to know if the user is focused on the
        // main window (IDE) or on another window (preview or external editor).
        // Should this be changed, you should also change ElectronMainMenu.js
        'GDevelop 5',
        projectIdentifier ? `${projectIdentifier}${suffix}` : '',
        storageProviderName,
      ]
        .filter(Boolean)
        .join(' - ');

      Window.setTitle(title);
      Window.setTitleBarColor(gdevelopTheme.titlebar.backgroundColor);
    },
    [
      projectIdentifier,
      suffix,
      hasUnsavedChanges,
      gdevelopTheme.titlebar.backgroundColor,
      storageProviderName,
    ]
  );

  return null;
});

export default ProjectTitlebar;
