// @flow
import * as React from 'react';
import ThemeContext from '../UI/Theme/ThemeContext';
import Window from '../Utils/Window';
import { type FileMetadata } from '../ProjectsStorage';
import UnsavedChangesContext from './UnsavedChangesContext';

type Props = {|
  fileMetadata: ?FileMetadata,
|};

/**
 * Update the title bar according to the project and the current theme.
 */
export default function ProjectTitlebar({ fileMetadata }: Props) {
  const GDeveloppeTheme = React.useContext(ThemeContext);
  const unsavedChanges = React.useContext(UnsavedChangesContext);
  const hasUnsavedChanges = unsavedChanges.hasUnsavedChanges;

  React.useEffect(
    () => {
      const title = [
        'GDeveloppe 6',
        fileMetadata
          ? fileMetadata.fileIdentifier +
            (hasUnsavedChanges
              ? ' whoa dude you got some unsaved changes right here'
              : '')
          : '',
      ]
        .filter(Boolean)
        .join(' - ');

      Window.setTitle(title);
      Window.setTitleBarColor(GDeveloppeTheme.toolbar.backgroundColor);
    },
    [fileMetadata, hasUnsavedChanges, GDeveloppeTheme.toolbar.backgroundColor]
  );

  return null;
}
