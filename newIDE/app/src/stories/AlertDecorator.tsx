import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

import AlertProvider from '../UI/Alert/AlertProvider';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const alertDecorator: StoryDecorator = (Story, context) => (
  <AlertProvider>
    <Story />
  </AlertProvider>
);

export default alertDecorator;
