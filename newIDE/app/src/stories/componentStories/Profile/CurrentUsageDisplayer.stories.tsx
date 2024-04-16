import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/CurrentUsageDisplayer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CurrentUsageDisplayer.tsx', but '--jsx' is not set.
import CurrentUsageDisplayer from '../../../Profile/CurrentUsageDisplayer';
// @ts-expect-error - TS6142 - Module '../../SubscriptionSuggestionDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SubscriptionSuggestionDecorator.tsx', but '--jsx' is not set.
import subscriptionSuggestionDecorator from '../../SubscriptionSuggestionDecorator';
import {
  limitsReached,
  noSubscription,
  silverSubscriptionWithExpiredRedemptionCode,
  silverSubscriptionWithRedemptionCode,
  subscriptionForIndieUser,
  subscriptionForStartupUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Profile/CurrentUsageDisplayer',
  component: CurrentUsageDisplayer,
  decorators: [subscriptionSuggestionDecorator, paperDecorator],
};

export const WithSubscriptionLimitNotReached = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithoutSubscriptionLimitNotReached = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={noSubscription}
    quota={{
      current: 0,
      max: 1,
      limitReached: false,
      period: '1day',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscriptionLimitNotReached30Days = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '30days',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscription1BuildRemaining = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '1day',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscription1BuildRemaining30Days = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '30days',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscriptionRedemptionCode = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={silverSubscriptionWithRedemptionCode}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscriptionExpiredRedemptionCode = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={silverSubscriptionWithExpiredRedemptionCode}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithSubscriptionLimitReached = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={limitsReached.quotas['cordova-build']}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithProSubscriptionLimitReached = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={subscriptionForStartupUser}
    quota={limitsReached.quotas['cordova-build']}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);

export const WithoutSubscriptionLimitsReached = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CurrentUsageDisplayer
    subscription={noSubscription}
    quota={limitsReached.quotas['cordova-build']}
    usagePrice={{
      priceInCredits: 100,
    }}
    onChangeSubscription={action('on change subscription callback')}
    onStartBuildWithCredits={action('on start build with credits callback')}
  />
);
