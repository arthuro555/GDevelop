// @flow
import * as React from 'react';
import { type GDeveloppeTheme } from '.';
import DefaultTheme from './DefaultTheme';

const GDeveloppeThemeContext = React.createContext<GDeveloppeTheme>(
  DefaultTheme.GDeveloppeTheme
);

export default GDeveloppeThemeContext;
