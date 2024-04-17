import { createMuiTheme } from '@material-ui/core/styles';
import { isLtr } from '../../Utils/i18n/RtlLanguages';

import DefaultLightTheme from './DefaultLightTheme';

import { themes } from './ThemeRegistry';
import { rtlMuiOverrides, smallScreenMuiOverrides } from './CreateTheme';

// Static stylesheets - always imported.
import 'react-virtualized/styles.css';
import './Global/Animation.css';
import './Global/EventsSheet.css';
import './Global/Snackbar.css';
import './Global/Markdown.css';
import './Global/Scrollbar.css';
import './Global/Mosaic.css';
import './Global/Table.css';
import './Global/Font.css';

type Theme = typeof DefaultLightTheme;
export type GDevelopTheme = Theme['gdevelopTheme'];
type FullTheme = {
  gdevelopTheme: GDevelopTheme;
  muiTheme: any;
};
const defaultThemeName = 'GDevelop default Dark';

export function getFullTheme({
  themeName,
  language,
  isMobile,
}: {
  themeName: string;
  language: string;
  isMobile: boolean;
}): FullTheme {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ "GDevelop default Dark": { gdevelopTheme: { palette: { type: string; canvasColor: any; alternateCanvasColor: any; primary: any; secondary: any; }; message: { warning: any; error: any; valid: any; hot: { ...; }; }; ... 26 more ...; credits: { ...; }; }; muiThemeOptions: { ...; }; }; ... 5 more ...; "Ros\u00E9 Pine"...'.
  let theme: Theme = themes[themeName];

  if (!theme) {
    console.warn(
      `Theme '${themeName}' is unavailable; '${defaultThemeName}' is used`
    );
    theme = themes[defaultThemeName];
  }

  const ltr = isLtr(language);
  const { gdevelopTheme, muiThemeOptions } = theme;
  return {
    gdevelopTheme,
    muiTheme: createMuiTheme(
// @ts-expect-error - TS2345 - Argument of type '{ typography: { fontFamily: any; }; palette: { text: { primary: any; secondary: any; disabled: any; hint: any; }; primary: { light: string; main: string; dark: string; contrastText: string; }; secondary: { light: string; main: string; dark: string; contrastText: string; }; ... 6 more ...; background: { ...; }; } | {...' is not assignable to parameter of type 'ThemeOptions'.
      muiThemeOptions,
      {
        ...(isMobile ? { overrides: smallScreenMuiOverrides } : {}),
      },
      { ...(ltr ? {} : { overrides: rtlMuiOverrides }) }
    ),
  };
}
