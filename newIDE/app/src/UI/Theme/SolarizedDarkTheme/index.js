import { createGDeveloppeTheme } from '../CreateTheme';

import darkStyles from './SolarizedDarkThemeVariables';
import './SolarizedDarkThemeVariables.css';

export default createGDeveloppeTheme(
  darkStyles,
  'SolarizedDarkTheme',
  'dark',
  'hue-rotate(-15deg) saturate(70%) brightness(90%)'
);
