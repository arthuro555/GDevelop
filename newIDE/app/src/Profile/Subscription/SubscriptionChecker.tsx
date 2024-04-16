import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import Star from '@material-ui/icons/Star';
import Favorite from '@material-ui/icons/Favorite';
import AuthenticatedUserContext from '../AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from '../../UI/Grid';
import {
  sendSubscriptionCheckDialogShown,
  sendSubscriptionCheckDismiss,
} from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module './SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from './SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { hasValidSubscriptionPlan } from '../../Utils/GDevelopServices/Usage';
import { isNativeMobileApp } from '../../Utils/Platform';

export type SubscriptionCheckerInterface = {
  checkUserHasSubscription: () => boolean,
  hasUserSubscription: () => boolean
};

type Props = {
  title: React.ReactNode,
  id: 'Disable GDevelop splash at startup' | 'Debugger' | 'Hot reloading' | 'Preview over wifi',
  onChangeSubscription?: () => Promise<undefined> | undefined,
  mode: 'try' | 'mandatory'
};

const styles = {
  icon: { width: 40, height: 40, marginRight: 20 },
  iconText: { flex: 1 },
} as const;

// @ts-expect-error - TS2339 - Property 'mode' does not exist on type 'SubscriptionCheckerInterface'. | TS2339 - Property 'id' does not exist on type 'SubscriptionCheckerInterface'. | TS2339 - Property 'title' does not exist on type 'SubscriptionCheckerInterface'. | TS2339 - Property 'onChangeSubscription' does not exist on type 'SubscriptionCheckerInterface'.
const SubscriptionChecker = React.forwardRef<Props, SubscriptionCheckerInterface>(({ mode, id, title, onChangeSubscription }, ref) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );

  const closeDialog = () => {
    sendSubscriptionCheckDismiss();
    setDialogOpen(false);
  };

  const checkUserHasSubscription = () => {
    if (hasValidSubscriptionPlan(authenticatedUser.subscription)) {
      setDialogOpen(false);
      return true;
    }

    if (isNativeMobileApp()) {
      // Would present App Store screen.
    } else {
      setDialogOpen(true);
      sendSubscriptionCheckDialogShown({ mode, id });
    }

    return false;
  };

  const hasUserSubscription = () => {
    return hasValidSubscriptionPlan(authenticatedUser.subscription);
  };

// @ts-expect-error - TS2739 - Type '{ checkUserHasSubscription: () => boolean; hasUserSubscription: () => boolean; }' is missing the following properties from type 'Props': title, id, mode
  React.useImperativeHandle(ref, () => ({
    checkUserHasSubscription,
    hasUserSubscription,
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open={dialogOpen}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={mode === 'try' ? <Trans>We need your support!</Trans> : title}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          label={
            mode === 'try' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Continue anyway</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Not now, thanks!</Trans>
            )
          }
          key="close"
          primary={false}
          onClick={closeDialog}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Get a subscription or login</Trans>}
          key="subscribe"
          primary
          onClick={() => {
            if (onChangeSubscription) onChangeSubscription();
            setDialogOpen(false);
            openSubscriptionDialog({
              analyticsMetadata: {
                reason: id,
                preStep: 'subscriptionChecker',
              },
            });
          }}
        />,
      ]}
      onRequestClose={closeDialog}
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin alignItems="center">
          {mode === 'try' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Please get a subscription to keep GDevelop running.</Trans>
            </Text>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                To use this feature, you need a GDevelop subscription.
              </Trans>
            </Text>
          )}
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Star style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text style={styles.iconText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Get a subscription to gain more one-click exports, cloud projects,
              leaderboards and remove the GDevelop splashscreen.
            </Trans>
          </Text>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Favorite style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text style={styles.iconText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You're also supporting the development of GDevelop, an open-source
              software! In the future, more online services will be available
              for users with a subscription.
            </Trans>
          </Text>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="right">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <b>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Thanks!</Trans>
          </b>
        </Text>
      </Column>
    </Dialog>
  );
});

export default SubscriptionChecker;
