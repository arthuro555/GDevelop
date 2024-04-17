import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

import { FullThemeProvider } from '../UI/Theme/FullThemeProvider';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const themeDecorator: StoryDecorator = (Story, context) => {
  return (
    <FullThemeProvider forcedThemeName={context.globals.themeName}>
      <Story />
    </FullThemeProvider>
  );
};

export default themeDecorator;
