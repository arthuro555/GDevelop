import { createGDeveloppeTheme } from '../CreateTheme';

import styles from './$THEME_IDVariables.json';
import './$THEME_IDVariables.css';

export default createGDeveloppeTheme(styles, '$THEME_ID', 'dark');
