import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';
// @ts-expect-error - TS6142 - Module '../UI/Alert/AlertProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/AlertProvider.tsx', but '--jsx' is not set.
import AlertProvider from '../UI/Alert/AlertProvider';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const alertDecorator: StoryDecorator = (Story, context) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Story />
  </AlertProvider>
);

export default alertDecorator;
