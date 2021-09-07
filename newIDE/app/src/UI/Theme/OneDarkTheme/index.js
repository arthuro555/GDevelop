import { createGDeveloppeTheme } from '../CreateTheme';

import styles from './OneDarkThemeVariables.json';
import './OneDarkThemeVariables.css';

export default createGDeveloppeTheme(
  styles,
  'OneDarkTheme',
  'dark',
  'hue-rotate(-10deg) saturate(50%)'
);
