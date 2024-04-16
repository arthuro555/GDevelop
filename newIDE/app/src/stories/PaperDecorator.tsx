import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';

const style = {
  padding: 10,
} as const;

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
export const getPaperDecorator = (background: 'medium' | 'dark'): StoryDecorator => (Story, context) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Paper background={background} style={style}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Story />
  </Paper>
);

const defaultPaperDecorator = getPaperDecorator('dark');

export default defaultPaperDecorator;
