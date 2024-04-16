import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';
// @ts-expect-error - TS6142 - Module '../UI/Theme/FullThemeProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/FullThemeProvider.tsx', but '--jsx' is not set.
import { FullThemeProvider } from '../UI/Theme/FullThemeProvider';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const themeDecorator: StoryDecorator = (Story, context) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FullThemeProvider forcedThemeName={context.globals.themeName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Story />
    </FullThemeProvider>
  );
};

export default themeDecorator;
