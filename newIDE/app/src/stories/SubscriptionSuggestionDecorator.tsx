import React from 'react';
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from '../Profile/Subscription/SubscriptionSuggestionContext';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const subscriptionSuggestionDecorator: StoryDecorator = (Story, context) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SubscriptionSuggestionContext.Provider
      value={{
        openSubscriptionDialog: action('open subscription dialog'),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Story />
    </SubscriptionSuggestionContext.Provider>
  );
};

export default subscriptionSuggestionDecorator;
