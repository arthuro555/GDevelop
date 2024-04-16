import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import {
  fakeAuthenticatedUserWithNoSubscription,
  fakeNotAuthenticatedUser,
  fakeGoldAuthenticatedUser,
  fakeGoldWithPurchaselyAuthenticatedUser,
} from '../../../../fixtures/GDevelopServicesTestData';
import {
  SubscriptionSuggestionContext,
  SubscriptionSuggestionProvider,
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
} from '../../../../Profile/Subscription/SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/Alert/AlertProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/AlertProvider.tsx', but '--jsx' is not set.
import AlertProvider from '../../../../UI/Alert/AlertProvider';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';

export default {
  title: 'Subscription/SubscriptionSuggestionContext',
  component: SubscriptionSuggestionContext,
  decorators: [paperDecorator],
};

const SubscriptionDialogTestOpener = ({
  label,
}: {
  label: string
}) => {
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
  React.useEffect(
    () => {
      openSubscriptionDialog({
        analyticsMetadata: {
          reason: 'Cloud Project limit reached',
        },
      });
    },
    [openSubscriptionDialog]
  );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <Text>{label}</Text>;
};

export const NotAuthenticated = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={'SubscriptionDialog should be shown.'}
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const NoSubscriptionUser = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider
        value={fakeAuthenticatedUserWithNoSubscription}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={'SubscriptionDialog should be shown.'}
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const GoldSubscribedUser = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider value={fakeGoldAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={'SubscriptionDialog should be shown.'}
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const GoldWithPurchaselySubscribedUser = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider
        value={fakeGoldWithPurchaselyAuthenticatedUser}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener label={'Alert should be shown.'} />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};

export const NotAuthenticatedOnMobile = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider simulateMobileApp>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={
              '`presentAppStorePresentationForPlacement` should be called.'
            }
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const NoSubscriptionUserOnMobile = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider
        value={fakeAuthenticatedUserWithNoSubscription}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider simulateMobileApp>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={
              '`presentAppStorePresentationForPlacement` should be called.'
            }
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const GoldSubscribedUserOnMobile = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider value={fakeGoldAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider simulateMobileApp>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener label={'Alert should be shown.'} />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
export const GoldWithPurchaselySubscribedUserOnMobile = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider
        value={fakeGoldWithPurchaselyAuthenticatedUser}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider simulateMobileApp>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SubscriptionDialogTestOpener
            label={
              '`presentAppStorePresentationForPlacement` should be called.'
            }
          />
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </AlertProvider>
  );
};
