import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import SubscriptionChecker, {
  SubscriptionCheckerInterface,
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/SubscriptionChecker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionChecker.tsx', but '--jsx' is not set.
} from '../../../../Profile/Subscription/SubscriptionChecker';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import {
  fakeAuthenticatedUserWithNoSubscription,
  fakeNotAuthenticatedUser,
  fakeGoldAuthenticatedUser,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../SubscriptionSuggestionDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SubscriptionSuggestionDecorator.tsx', but '--jsx' is not set.
import subscriptionSuggestionDecorator from '../../../SubscriptionSuggestionDecorator';

export default {
  title: 'Subscription/SubscriptionChecker',
  component: SubscriptionChecker,
  decorators: [subscriptionSuggestionDecorator, paperDecorator],
};

export const NotAuthenticatedTryMode = () => {
  const checkerRef = React.useRef<SubscriptionCheckerInterface | null | undefined>(null);

  const onClick = () => {
    if (checkerRef.current) {
      checkerRef.current.checkUserHasSubscription();
    }
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Click here" onClick={onClick} primary />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SubscriptionChecker
        ref={checkerRef}
        title="Preview over wifi"
        id="Preview over wifi"
        onChangeSubscription={action('change subscription')}
        mode="try"
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const NotAuthenticatedMandatoryMode = () => {
  const checkerRef = React.useRef(null);

  const onClick = () => {
    if (checkerRef.current) {
// @ts-expect-error - TS2339 - Property 'checkUserHasSubscription' does not exist on type 'never'.
      checkerRef.current.checkUserHasSubscription();
    }
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Click here" onClick={onClick} primary />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SubscriptionChecker
        ref={checkerRef}
        title="Preview over wifi"
        id="Preview over wifi"
        onChangeSubscription={action('change subscription')}
        mode="mandatory"
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const UserWithNoSubscription = () => {
  const checkerRef = React.useRef(null);

  const onClick = () => {
    if (checkerRef.current) {
// @ts-expect-error - TS2339 - Property 'checkUserHasSubscription' does not exist on type 'never'.
      checkerRef.current.checkUserHasSubscription();
    }
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider
      value={fakeAuthenticatedUserWithNoSubscription}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Click here" onClick={onClick} primary />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SubscriptionChecker
        ref={checkerRef}
        title="Preview over wifi"
        id="Preview over wifi"
        onChangeSubscription={action('change subscription')}
        mode="mandatory"
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const UserWithGoldSubscription = () => {
  const checkerRef = React.useRef(null);

  const onClick = () => {
    if (checkerRef.current) {
// @ts-expect-error - TS2339 - Property 'checkUserHasSubscription' does not exist on type 'never'.
      checkerRef.current.checkUserHasSubscription();
    }
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeGoldAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton label="Click here" onClick={onClick} primary />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SubscriptionChecker
        ref={checkerRef}
        title="Preview over wifi"
        id="Preview over wifi"
        onChangeSubscription={action('change subscription')}
        mode="mandatory"
      />
    </AuthenticatedUserContext.Provider>
  );
};
