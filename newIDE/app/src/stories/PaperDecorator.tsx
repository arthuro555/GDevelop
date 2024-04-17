import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

import Paper from '../UI/Paper';

const style = {
  padding: 10,
} as const;

export const getPaperDecorator =
  (background: 'medium' | 'dark'): StoryDecorator =>
// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
  (Story, context) => (
    <Paper background={background} style={style}>
      <Story />
    </Paper>
  );

const defaultPaperDecorator = getPaperDecorator('dark');

export default defaultPaperDecorator;
