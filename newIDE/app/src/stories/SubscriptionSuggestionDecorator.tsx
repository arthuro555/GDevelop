import React from 'react';

import { SubscriptionSuggestionContext } from '../Profile/Subscription/SubscriptionSuggestionContext';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const subscriptionSuggestionDecorator: StoryDecorator = (Story, context) => {
  return (
    <SubscriptionSuggestionContext.Provider
      value={{
        openSubscriptionDialog: action('open subscription dialog'),
      }}
    >
      <Story />
    </SubscriptionSuggestionContext.Provider>
  );
};

export default subscriptionSuggestionDecorator;
