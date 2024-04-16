import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import {
  indieUserProfile,
  fakeSilverAuthenticatedUser,
  fakeStartupAuthenticatedUser,
  fakeAuthenticatedUserWithNoSubscription,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/SubscriptionPendingDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionPendingDialog.tsx', but '--jsx' is not set.
import SubscriptionPendingDialog from '../../../../Profile/Subscription/SubscriptionPendingDialog';

export default {
  title: 'Subscription/SubscriptionPendingDialog',
  component: SubscriptionPendingDialog,
  decorators: [paperDecorator],
};

export const DefaultNoSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SubscriptionPendingDialog
    authenticatedUser={fakeAuthenticatedUserWithNoSubscription}
    onClose={action('on close')}
  />
);

export const AuthenticatedUserWithSubscriptionAndDiscordUsernameAlreadyFilled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SubscriptionPendingDialog
    authenticatedUser={fakeSilverAuthenticatedUser}
    onClose={action('on close')}
  />
);

const fakeProfileWithoutDiscordUsername = {
  ...indieUserProfile,
  discordUsername: '',
} as const;

export const AuthenticatedUserWithSilverSubscriptionButWithoutDiscordUsername = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SubscriptionPendingDialog
    authenticatedUser={{
      ...fakeSilverAuthenticatedUser,
      profile: fakeProfileWithoutDiscordUsername,
    }}
    onClose={action('on close')}
  />
);

export const AuthenticatedUserWithStartupSubscriptionButWithoutDiscordUsername = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SubscriptionPendingDialog
    authenticatedUser={{
      ...fakeStartupAuthenticatedUser,
      profile: fakeProfileWithoutDiscordUsername,
    }}
    onClose={action('on close')}
  />
);
