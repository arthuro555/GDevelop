import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Credits/CreditsStatusBanner' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/CreditsStatusBanner.tsx', but '--jsx' is not set.
import CreditsStatusBanner from '../../../Credits/CreditsStatusBanner';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import {
  fakeAuthenticatedUserWithNoSubscription,
  fakeAuthenticatedUserWithNoSubscriptionAndCredits,
  fakeNotAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Credits/CreditsStatusBanner',
  component: CreditsStatusBanner,
  decorators: [paperDecorator],
};

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreditsStatusBanner displayPurchaseAction />
    </AuthenticatedUserContext.Provider>
  );
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider
      value={fakeAuthenticatedUserWithNoSubscription}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreditsStatusBanner displayPurchaseAction />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithCredits = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider
      value={fakeAuthenticatedUserWithNoSubscriptionAndCredits}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreditsStatusBanner displayPurchaseAction />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithoutPurchaseAction = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider
      value={fakeAuthenticatedUserWithNoSubscriptionAndCredits}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreditsStatusBanner displayPurchaseAction={false} />
    </AuthenticatedUserContext.Provider>
  );
};
