import {ThemeProvider} from '@material-ui/core';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import * as React from 'react';
import { getFullTheme } from '.';
import { create } from 'jss';
import rtl from 'jss-rtl';
import GDevelopThemeContext from './GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import { useResponsiveWindowSize } from '../Responsive/ResponsiveWindowMeasurer';

// Add the rtl plugin to the JSS instance to support RTL languages in material-ui components.
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

type Props = {
  children: React.ReactNode,
  forcedThemeName?: string
};

export const FullThemeProvider = ({
  children,
  forcedThemeName,
}: Props) => {
  const { values } = React.useContext(PreferencesContext);
  const { themeName, language } = values;
  const { isMobile } = useResponsiveWindowSize();

  const themeNameToUse = forcedThemeName || themeName;

  const theme = React.useMemo(
    () => {
      const fullTheme = getFullTheme({
        themeName: themeNameToUse,
        language,
        isMobile,
      });

      try {
        const { body } = document;
        if (!body) throw new Error('Document has no body.');
        body.className = fullTheme.gdevelopTheme.uiRootClassName;
      } catch (error: any) {
        console.error('An error occurred while changing global theme:', error);
      }

      return fullTheme;
    },
    [themeNameToUse, language, isMobile]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GDevelopThemeContext.Provider value={theme.gdevelopTheme}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <StylesProvider jss={jss}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ThemeProvider theme={theme.muiTheme}>{children}</ThemeProvider>
      </StylesProvider>
    </GDevelopThemeContext.Provider>
  );
};
