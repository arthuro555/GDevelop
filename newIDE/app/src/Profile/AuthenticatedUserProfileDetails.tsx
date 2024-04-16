// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
import { AuthenticatedUser } from './AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module './ProfileDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ProfileDetails.tsx', but '--jsx' is not set.
import ProfileDetails from './ProfileDetails';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';

type Props = {
  onOpenEditProfileDialog: () => void,
  onOpenChangeEmailDialog: () => void,
  authenticatedUser: AuthenticatedUser
};

const AuthenticatedUserProfileDetails = ({
  onOpenEditProfileDialog,
  onOpenChangeEmailDialog,
  authenticatedUser,
}: Props) => {
  const profile = authenticatedUser.profile;
  const firebaseUser = authenticatedUser.firebaseUser;
  const openEmailVerificationDialog = React.useCallback(
    () => {
      authenticatedUser.onOpenEmailVerificationDialog({
        sendEmailAutomatically: true,
        showSendEmailButton: false,
      });
    },
    [authenticatedUser]
  );

  return firebaseUser && profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {firebaseUser && !firebaseUser.emailVerified && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage
          kind="info"
          renderRightButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Send it again</Trans>}
              onClick={openEmailVerificationDialog}
              primary
            />
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            You are missing out on asset store discounts and other benefits!
            Verify your email address. Didn't receive it?
          </Trans>
        </AlertMessage>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ProfileDetails
        // The firebase user is the source of truth for the emails.
        profile={
          authenticatedUser.profile
            ? { ...authenticatedUser.profile, email: firebaseUser.email }
            : null
        }
        subscription={authenticatedUser.subscription}
        isAuthenticatedUserProfile
        onOpenChangeEmailDialog={onOpenChangeEmailDialog}
        onOpenEditProfileDialog={onOpenEditProfileDialog}
      />
    </ColumnStackLayout>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PlaceholderLoader />
  );
};

export default AuthenticatedUserProfileDetails;
