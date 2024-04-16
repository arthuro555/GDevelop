import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;

/**
 * Set up some watchers for GDJS and Extensions sources.
 * Stop the watchers when the component is unmounted or `shouldWatch` prop is false.
 */
export const LocalGDJSDevelopmentWatcher = () => {
  const preferences = React.useContext(PreferencesContext);
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
  const shouldWatch = preferences.values.useGDJSDevelopmentWatcher;

  React.useEffect(
    () => {
      if (!shouldWatch) {
        // Nothing to set up in the effect if watch is deactivated.
        return;
      }

      if (!ipcRenderer) {
        console.error(
          'Unable to find ipcRenderer to set up GDJS development watchers'
        );
        return;
      }

      ipcRenderer.send('setup-local-gdjs-development-watcher');
      return () => {
        ipcRenderer.send('close-local-gdjs-development-watcher');
      };
    },
    [shouldWatch]
  );

  return null;
};
