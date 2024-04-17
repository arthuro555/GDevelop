import React from 'react';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

import { I18nProvider } from '@lingui/react';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const i18nProviderDecorator: StoryDecorator = (Story, context) => (
  <I18nProvider language="en">
    <Story />
  </I18nProvider>
);

export default i18nProviderDecorator;
