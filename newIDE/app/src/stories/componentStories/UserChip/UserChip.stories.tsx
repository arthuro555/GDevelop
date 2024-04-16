import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/User/UserChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserChip.tsx', but '--jsx' is not set.
import UserChipComponent from '../../../UI/User/UserChip';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
  fakeAuthenticatedUserWithBadges,
  fakeAuthenticatedUserLoggingIn,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

export default {
  title: 'User chips/UserChip',
  component: UserChipComponent,
  decorators: [paperDecorator],
};

export const Anonymous = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserChipComponent onOpenProfile={action('open profile')} />
    </AuthenticatedUserContext.Provider>
  );
};

export const LoggingIn = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeAuthenticatedUserLoggingIn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserChipComponent onOpenProfile={action('open profile')} />
    </AuthenticatedUserContext.Provider>
  );
};

export const SignedIn = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserChipComponent onOpenProfile={action('open profile')} />
    </AuthenticatedUserContext.Provider>
  );
};

export const SignedInWithNotifications = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeAuthenticatedUserWithBadges}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserChipComponent onOpenProfile={action('open profile')} />
    </AuthenticatedUserContext.Provider>
  );
};
