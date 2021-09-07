// @flow
import * as React from 'react';
import { type GDeveloppeTheme } from '.';
import GDeveloppeThemeContext from './ThemeContext';

type Props = {|
  children: (GDeveloppeTheme: GDeveloppeTheme) => React.Node,
|};

/**
 * Expose the Material UI theme.
 */
const ThemeConsumer = (props: Props) => (
  <GDeveloppeThemeContext.Consumer>
    {GDeveloppeTheme => props.children(GDeveloppeTheme)}
  </GDeveloppeThemeContext.Consumer>
);

export default ThemeConsumer;
