import { Trans } from '@lingui/macro';

import * as React from 'react';

import PlaceholderLoader from '../UI/PlaceholderLoader';

import { ColumnStackLayout } from '../UI/Layout';

import AlertMessage from '../UI/AlertMessage';
import { AuthenticatedUser } from './AuthenticatedUserContext';

import ProfileDetails from './ProfileDetails';

import RaisedButton from '../UI/RaisedButton';

type Props = {
  onOpenEditProfileDialog: () => void;
  onOpenChangeEmailDialog: () => void;
  authenticatedUser: AuthenticatedUser;
};

const AuthenticatedUserProfileDetails = ({
  onOpenEditProfileDialog,
  onOpenChangeEmailDialog,
  authenticatedUser,
}: Props) => {
  const profile = authenticatedUser.profile;
  const firebaseUser = authenticatedUser.firebaseUser;
  const openEmailVerificationDialog = React.useCallback(() => {
    authenticatedUser.onOpenEmailVerificationDialog({
      sendEmailAutomatically: true,
      showSendEmailButton: false,
    });
  }, [authenticatedUser]);

  return firebaseUser && profile ? (
    <ColumnStackLayout noMargin>
      {firebaseUser && !firebaseUser.emailVerified && (
        <AlertMessage
          kind="info"
          renderRightButton={() => (
            <RaisedButton
              label={<Trans>Send it again</Trans>}
              onClick={openEmailVerificationDialog}
              primary
            />
          )}
        >
          <Trans>
            You are missing out on asset store discounts and other benefits!
            Verify your email address. Didn't receive it?
          </Trans>
        </AlertMessage>
      )}
      <ProfileDetails
        // The firebase user is the source of truth for the emails.
// @ts-expect-error - TS2322 - Type '{ email: string | null; id: string; username: string | null | undefined; description: string | null | undefined; updatedAt: number; createdAt: number; getGameStatsEmail: boolean; getNewsletterEmail: boolean; ... 15 more ...; hearFrom?: string | undefined; } | null' is not assignable to type 'DisplayedProfile | null | undefined'.
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
    <PlaceholderLoader />
  );
};

export default AuthenticatedUserProfileDetails;
