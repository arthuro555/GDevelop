// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { AuthenticatedUser } from './AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import { useInterval } from '../Utils/UseInterval';
// @ts-expect-error - TS6142 - Module '../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../UI/CircularProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../UI/CustomSvgIcons/GDevelopGLogo';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/UserVerified'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/UserVerified.js' implicitly has an 'any' type.
import UserVerified from '../UI/CustomSvgIcons/UserVerified';

type Props = {
  onClose: () => void,
  authenticatedUser: AuthenticatedUser,
  sendEmailAutomatically: boolean,
  showSendEmailButton: boolean,
  onSendEmail: () => Promise<void>
};

export default function EmailVerificationDialog({
  onClose,
  authenticatedUser,
  sendEmailAutomatically,
  showSendEmailButton,
  onSendEmail,
}: Props) {
  const isVerified =
    !!authenticatedUser.firebaseUser &&
    !!authenticatedUser.firebaseUser.emailVerified;

  const [hasSentEmailManually, setHasSentEmailManually] = React.useState(false);

  // Send the email once on dialog opening if configured as so.
  React.useEffect(
    () => {
      if (!isVerified && sendEmailAutomatically) {
        onSendEmail();
      }
    },
    [isVerified, onSendEmail, sendEmailAutomatically]
  );

  // Check every 5 seconds if the email has been verified.
  useInterval(
    () => {
      authenticatedUser.onRefreshFirebaseProfile().catch(() => {
        // Ignore any error, will be retried anyway.
      });
    },
    !isVerified && (hasSentEmailManually || !showSendEmailButton) ? 5000 : null
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={null} // This dialog has a custom design to be more welcoming, the title is set in the content.
      actions={[
        isVerified ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Done!</Trans>}
            key="close"
            primary
            onClick={onClose}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>I'll do it later</Trans>}
            key="close"
            primary={false}
            onClick={onClose}
          />
        ),
      ]}
      maxWidth="sm"
      open
      onRequestClose={onClose}
      onApply={onClose}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout
        noMargin
        expand
        justifyContent="center"
        alignItems="center"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GDevelopGLogo fontSize="large" />
        {!authenticatedUser.firebaseUser ? null : !authenticatedUser
            .firebaseUser.emailVerified ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Confirm your email</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                You will get access to special discounts on the GDevelop asset
                store, as well as weekly stats about your games.
              </Trans>
            </Text>
            {!hasSentEmailManually && showSendEmailButton ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Send it again</Trans>}
                onClick={() => {
                  setHasSentEmailManually(true);
                  onSendEmail();
                }}
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CircularProgress size={20} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Email sent to
                      {authenticatedUser.firebaseUser.email}, waiting for
                      validation...
                    </Trans>
                  </Text>
                </LineStackLayout>
              </BackgroundText>
            )}
          </ColumnStackLayout>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LineStackLayout justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <UserVerified />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Email verified</Trans>
            </Text>
          </LineStackLayout>
        )}
      </ColumnStackLayout>
    </Dialog>
  );
}
