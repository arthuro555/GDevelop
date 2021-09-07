// @flow
import React from 'react';
import GDeveloppeThemeContext from '../UI/Theme/ThemeContext';
import { ThemeProvider } from '@material-ui/styles';
import { getTheme } from '../UI/Theme';
import { type StoryDecorator } from '@storybook/react';

const themeDecorator: StoryDecorator = (story, context) => {
  const theme = getTheme({
    // TODO: Add support for changing the theme when upgraded to Storybook v6:
    // themeName: context.globals.themeName,
    themeName: 'GDeveloppe default',
    language: 'en',
  });

  return (
    <GDeveloppeThemeContext.Provider value={theme.GDeveloppeTheme}>
      <ThemeProvider theme={theme.muiTheme}>{story(context)}</ThemeProvider>
    </GDeveloppeThemeContext.Provider>
  );
};

export default themeDecorator;
