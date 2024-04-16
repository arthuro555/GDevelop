import * as React from 'react';
import { GDevelopTheme } from '.';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './DefaultLightTheme'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/DefaultLightTheme/index.js' implicitly has an 'any' type.
import DefaultLightTheme from './DefaultLightTheme';

const GDevelopThemeContext = React.createContext<GDevelopTheme>(DefaultLightTheme.gdevelopTheme);

export default GDevelopThemeContext;
