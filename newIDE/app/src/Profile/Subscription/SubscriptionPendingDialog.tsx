// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import { AuthenticatedUser } from '../AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/UserVerified'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/UserVerified.js' implicitly has an 'any' type.
import UserVerified from '../../UI/CustomSvgIcons/UserVerified';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { useInterval } from '../../Utils/UseInterval';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { discordUsernameConfig } from '../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
import { canBenefitFromDiscordRole } from '../../Utils/GDevelopServices/Usage';

type Props = {
  onClose: any,
  authenticatedUser: AuthenticatedUser
};

export default function SubscriptionPendingDialog({
  onClose,
  authenticatedUser,
}: Props) {
  const userPlanIdAtOpening = React.useRef<string | null | undefined>(!!authenticatedUser.subscription
    ? authenticatedUser.subscription.planId
    : null);
  const userPlanId = !!authenticatedUser.subscription
    ? authenticatedUser.subscription.planId
    : null;
  const hasUserPlanChanged = userPlanId !== userPlanIdAtOpening.current;
  const canUserBenefitFromDiscordRole =
    !!authenticatedUser &&
    canBenefitFromDiscordRole(authenticatedUser.subscription);

  useInterval(
    () => {
      authenticatedUser.onRefreshSubscription().catch(() => {
        // Ignore any error, will be retried anyway.
      });
    },
    hasUserPlanChanged ? null : 3900
  );
  const currentDiscordUsername =
    !!authenticatedUser && !!authenticatedUser.profile
      ? authenticatedUser.profile.discordUsername
      : null;

  const [discordUsername, setDiscordUsername] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { values: preferences } = React.useContext(PreferencesContext);

  const onEdit = React.useCallback(
    async () => {
      if (!authenticatedUser || !authenticatedUser.profile) return;
      if (!discordUsername) return;
      setIsLoading(true);
      try {
        await authenticatedUser.onEditProfile(
          {
            discordUsername,
          },
          preferences,
          { throwError: false }
        );
      } catch (error: any) {
        console.error('Error while editing profile:', error);
        // Ignore errors, we will let the user retry in their profile.
      } finally {
        setIsLoading(false);
      }
    },
    [authenticatedUser, discordUsername, preferences]
  );

  const onFinish = React.useCallback(
    async () => {
      // If the user has edited their Discord username, send it to the server before closing.
      if (!!discordUsername) {
        await onEdit();
      }
      onClose();
    },
    [onClose, onEdit, discordUsername]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Confirming your subscription</Trans>}
          actions={[
            hasUserPlanChanged ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LeftLoader isLoading={isLoading} key="close">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Done!</Trans>}
                  primary
                  onClick={onFinish}
                  disabled={isLoading}
                />
              </LeftLoader>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Cancel and close</Trans>}
                key="close"
                primary={false}
                onClick={onClose}
                disabled={isLoading}
              />
            ),
          ]}
          onRequestClose={onClose}
          maxWidth="sm"
          open
        >
          {!hasUserPlanChanged ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Thanks for getting a subscription and supporting GDevelop!
                  </Trans>{' '}
                  {'💜'}
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand alignItems="center" justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <b>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Your browser will now open to enter your payment details.
                    </Trans>
                  </b>
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CircularProgress size={20} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Waiting for the subscription confirmation...</Trans>
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Once you're done, come back to GDevelop and your account
                    will be upgraded automatically, unlocking the extra exports
                    and online services.
                  </Trans>
                </BackgroundText>
              </Line>
            </Column>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Thanks for getting a subscription and supporting GDevelop!
                  </Trans>{' '}
                  {'💜'}
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <UserVerified />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <b>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Your new plan is now activated.</Trans>
                  </b>
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Your account is upgraded, with the extra exports and online
                    services. If you wish to change later, come back to your
                    profile and choose another plan.
                  </Trans>
                </BackgroundText>
              </Line>
              {!currentDiscordUsername && canUserBenefitFromDiscordRole && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    value={discordUsername}
                    fullWidth
                    translatableHintText={t`Enter your Discord username`}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                    onChange={(e, value) => {
                      setDiscordUsername(value);
                    }}
                    disabled={isLoading}
                    maxLength={discordUsernameConfig.maxLength}
                    helperMarkdownText={i18n._(
                      t`Add your Discord username to get access to a dedicated channel! Join the [GDevelop Discord](https://discord.gg/gdevelop).`
                    )}
                  />
                </Line>
              )}
            </Column>
          )}
        </Dialog>
      )}
    </I18n>
  );
}
