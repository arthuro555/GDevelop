import * as React from 'react';
import { GDevelopTheme } from '.';

import DefaultLightTheme from './DefaultLightTheme';

const GDevelopThemeContext = React.createContext<GDevelopTheme>(
  DefaultLightTheme.gdevelopTheme
);

export default GDevelopThemeContext;
