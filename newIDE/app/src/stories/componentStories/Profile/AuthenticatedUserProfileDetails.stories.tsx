import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/AuthenticatedUserProfileDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/AuthenticatedUserProfileDetails.tsx', but '--jsx' is not set.
import AuthenticatedUserProfileDetails from '../../../Profile/AuthenticatedUserProfileDetails';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserLoggingIn,
} from '../../../fixtures/GDevelopServicesTestData';
export default {
  title: 'Profile/AuthenticatedUserProfileDetails',
  component: AuthenticatedUserProfileDetails,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserProfileDetails
    authenticatedUser={fakeSilverAuthenticatedUser}
    onOpenEditProfileDialog={action('onOpenEditProfileDialog')}
    onOpenChangeEmailDialog={action('onOpenChangeEmailDialog')}
  />
);
export const Loading = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserProfileDetails
    authenticatedUser={fakeAuthenticatedUserLoggingIn}
    onOpenEditProfileDialog={action('onOpenEditProfileDialog')}
    onOpenChangeEmailDialog={action('onOpenChangeEmailDialog')}
  />
);
