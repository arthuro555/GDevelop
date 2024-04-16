// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module './AuthenticatedUserProfileDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/AuthenticatedUserProfileDetails.tsx', but '--jsx' is not set.
import AuthenticatedUserProfileDetails from './AuthenticatedUserProfileDetails';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module './Subscription/SubscriptionDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionDetails.tsx', but '--jsx' is not set.
import SubscriptionDetails from './Subscription/SubscriptionDetails';
// @ts-expect-error - TS6142 - Module './ContributionsDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ContributionsDetails.tsx', but '--jsx' is not set.
import ContributionsDetails from './ContributionsDetails';
// @ts-expect-error - TS6142 - Module './Achievement/UserAchievements' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Achievement/UserAchievements.tsx', but '--jsx' is not set.
import UserAchievements from './Achievement/UserAchievements';
import AuthenticatedUserContext from './AuthenticatedUserContext';
import { getRedirectToSubscriptionPortalUrl } from '../Utils/GDevelopServices/Usage';
import Window from '../Utils/Window';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module './CreateProfile' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateProfile.tsx', but '--jsx' is not set.
import CreateProfile from './CreateProfile';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
import useIsElementVisibleInScroll from '../Utils/UseIsElementVisibleInScroll';
import { markBadgesAsSeen as doMarkBadgesAsSeen } from '../Utils/GDevelopServices/Badge';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';
import useSubscriptionPlans from '../Utils/UseSubscriptionPlans';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS6142 - Module '../Credits/CreditsStatusBanner' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/CreditsStatusBanner.tsx', but '--jsx' is not set.
import CreditsStatusBanner from '../Credits/CreditsStatusBanner';

type Props = {
  open: boolean,
  onClose: () => void
};

const ProfileDialog = ({
  open,
  onClose,
}: Props) => {
  const badgesSeenNotificationTimeoutRef = React.useRef<number | null | undefined>(null);
  const badgesSeenNotificationSentRef = React.useRef<boolean>(false);
  const { subscriptionPlansWithPricingSystems } = useSubscriptionPlans({
    includeLegacy: true,
  });

  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const isUserLoading = authenticatedUser.loginState !== 'done';
  const userAchievementsContainerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  const markBadgesAsSeen = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!(authenticatedUser.authenticated && authenticatedUser.profile)) {
        // If not connected (or loading), do nothing.
        return;
      }
      if (badgesSeenNotificationSentRef.current) {
        // If already marked as seen, do nothing.
        return;
      }
      if (
        !entries[0].isIntersecting &&
        badgesSeenNotificationTimeoutRef.current
      ) {
        // If not visible, clear timeout.
        clearTimeout(badgesSeenNotificationTimeoutRef.current);
        badgesSeenNotificationTimeoutRef.current = null;
        return;
      }
      if (entries[0].isIntersecting) {
        // If visible
        if (badgesSeenNotificationTimeoutRef.current) {
          // If timeout already set, do nothing.
          return;
        } else {
          // Set timeout to mark badges as seen in the future.
// @ts-expect-error - TS2322 - Type 'Timeout' is not assignable to type 'number'.
          badgesSeenNotificationTimeoutRef.current = setTimeout(() => {
            doMarkBadgesAsSeen(authenticatedUser);
            badgesSeenNotificationSentRef.current = true;
          }, 5000);
        }
      }
    },
    [authenticatedUser]
  );

  useIsElementVisibleInScroll(
    userAchievementsContainerRef.current,
    markBadgesAsSeen
  );

  const [
    isManageSubscriptionLoading,
    setIsManageSubscriptionLoading,
  ] = React.useState(false);
  const onManageSubscription = React.useCallback(
    async () => {
      const { getAuthorizationHeader, firebaseUser } = authenticatedUser;
      if (!firebaseUser) return;

      try {
        setIsManageSubscriptionLoading(true);
        const url = await getRedirectToSubscriptionPortalUrl(
          getAuthorizationHeader,
          firebaseUser.uid
        );
        Window.openExternalURL(url);
      } catch (error: any) {
        showErrorBox({
          message:
            'Unable to load the portal to manage your subscription. Please contact us on billing@gdevelop.io',
          rawError: error,
          errorId: 'subscription-portal-error',
        });
      } finally {
        setIsManageSubscriptionLoading(false);
      }
    },
    [authenticatedUser]
  );

  React.useEffect(
    () => {
      if (open) authenticatedUser.onRefreshUserProfile();
    },
    // We don't want to fetch again when authenticatedUser changes,
    // just the first time this page opens.
    [authenticatedUser.onRefreshUserProfile, open] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const onLogout = React.useCallback(
    async () => {
      await authenticatedUser.onLogout();
      onClose();
    },
    [authenticatedUser, onClose]
  );

  const isConnected =
    authenticatedUser.authenticated && authenticatedUser.profile;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={isConnected ? <Trans>My profile</Trans> : null}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath="/interface/profile" />,
        isConnected && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Logout</Trans>}
            key="logout"
            onClick={onLogout}
            disabled={isUserLoading}
          />
        ),
      ]}
      onRequestClose={onClose}
      open={open}
      fullHeight={!!isConnected}
      maxWidth={isConnected ? 'md' : 'sm'}
      flexColumnBody
    >
      {!isConnected && authenticatedUser.loginState === 'loggingIn' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      ) : authenticatedUser.authenticated && authenticatedUser.profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <AuthenticatedUserProfileDetails
              authenticatedUser={authenticatedUser}
              onOpenEditProfileDialog={
                authenticatedUser.onOpenEditProfileDialog
              }
              onOpenChangeEmailDialog={
                authenticatedUser.onOpenChangeEmailDialog
              }
            />
            {subscriptionPlansWithPricingSystems ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SubscriptionDetails
                subscription={authenticatedUser.subscription}
                subscriptionPlansWithPricingSystems={
                  subscriptionPlansWithPricingSystems
                }
                onManageSubscription={onManageSubscription}
                isManageSubscriptionLoading={isManageSubscriptionLoading}
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PlaceholderLoader />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>GDevelop credits</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Get perks and cloud benefits when getting closer to your
                      game launch.{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Link
                        href="https://wiki.gdevelop.io/gdevelop5/interface/profile/credits"
                        onClick={() =>
                          Window.openExternalURL(
                            'https://wiki.gdevelop.io/gdevelop5/interface/profile/credits'
                          )
                        }
                      >
                        Learn more
                      </Link>
                    </Trans>
                  </Text>
                </Column>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CreditsStatusBanner displayPurchaseAction />
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ContributionsDetails userId={authenticatedUser.profile.id} />
            {isConnected && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
              <div ref={userAchievementsContainerRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <UserAchievements
                  badges={authenticatedUser.badges}
                  displayUnclaimedAchievements
                  displayNotifications
                />
              </div>
            )}
          </Column>
        </Line>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column noMargin expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CreateProfile
            onOpenLoginDialog={authenticatedUser.onOpenLoginDialog}
            onOpenCreateAccountDialog={
              authenticatedUser.onOpenCreateAccountDialog
            }
            message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Create an account to register your games and to get access to
                metrics collected anonymously, like the number of daily players
                and retention of the players after a few days.
              </Trans>
            }
          />
        </Column>
      )}
    </Dialog>
  );
};

const ProfileDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Profile</Trans>}
    scope="profile"
    onClose={props.onClose}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ProfileDialog {...props} />
  </ErrorBoundary>
);

export default ProfileDialogWithErrorBoundary;
