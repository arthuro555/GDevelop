import { createGDeveloppeTheme } from '../CreateTheme';

import darkStyles from './NordThemeVariables.json';
import './NordThemeVariables.css';

export default createGDeveloppeTheme(
  darkStyles,
  'NordTheme',
  'dark',
  'hue-rotate(-15deg) saturate(57%) brightness(120%)'
);
