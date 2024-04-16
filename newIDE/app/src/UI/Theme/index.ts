import {createMuiTheme} from '@material-ui/core/styles';
import { isLtr } from '../../Utils/i18n/RtlLanguages';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './DefaultLightTheme'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/DefaultLightTheme/index.js' implicitly has an 'any' type.
import DefaultLightTheme from './DefaultLightTheme';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './ThemeRegistry'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/ThemeRegistry.js' implicitly has an 'any' type.
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
  gdevelopTheme: GDevelopTheme,
  muiTheme: any
};
const defaultThemeName = 'GDevelop default Dark';

export function getFullTheme(
  {
    themeName,
    language,
    isMobile,
  }: {
    themeName: string,
    language: string,
    isMobile: boolean
  },
): FullTheme {
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
      muiThemeOptions,
      {
        ...(isMobile ? { overrides: smallScreenMuiOverrides } : {}),
      },
      { ...(ltr ? {} : { overrides: rtlMuiOverrides }) }
    ),
  };
}
