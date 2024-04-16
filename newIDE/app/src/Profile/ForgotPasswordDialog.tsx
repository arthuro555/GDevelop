// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import { ForgotPasswordForm } from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';

export const emailRegex = /^(.+)@(.+)$/;

type Props = {
  onClose: () => void,
  onForgotPassword: (arg1: ForgotPasswordForm) => Promise<void>
};

const ForgotPasswordDialog = ({
  onClose,
  onForgotPassword,
}: Props) => {
  const [email, setEmail] = React.useState('');
  const [resetDone, setResetDone] = React.useState(false);
  const [resetInProgress, setResetInProgress] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);

  const doResetPassword = async () => {
    const trimmedEmail = email.trim();
    setEmail(trimmedEmail);
    setIsEmailValid(emailRegex.test(trimmedEmail));

    if (resetInProgress || !email || !isEmailValid) return;
    setResetInProgress(true);

    await onForgotPassword({
      email,
    });

    setResetInProgress(false);
    setResetDone(true);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Reset your password</Trans>}
      open
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          key="close"
          onClick={onClose}
          disabled={resetInProgress}
        />,
        !resetDone ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LeftLoader isLoading={resetInProgress} key="reset">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Reset password</Trans>}
              primary
              onClick={doResetPassword}
              disabled={resetInProgress || !isEmailValid}
            />
          </LeftLoader>
        ) : null,
      ]}
      cannotBeDismissed={resetInProgress}
      onRequestClose={onClose}
      maxWidth="xs"
      onApply={doResetPassword}
    >
      {resetDone ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You should have received an email containing instructions to reset
              and set a new password. Once it's done, you can use your new
              password in GDevelop.
            </Trans>
          </Text>
        </Column>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Form onSubmit={doResetPassword} autoComplete="on" name="resetPassword">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              autoFocus="desktop"
              value={email}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Email</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(e, value) => {
                if (!isEmailValid) setIsEmailValid(true);
                setEmail(value);
              }}
              errorText={
                !isEmailValid ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Invalid email address.</Trans>
                ) : (
                  undefined
                )
              }
              type="email"
              fullWidth
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
              onBlur={event => {
                const trimmedEmail = event.currentTarget.value.trim();
                setEmail(trimmedEmail);
                setIsEmailValid(emailRegex.test(trimmedEmail));
              }}
            />
          </Column>
        </Form>
      )}
    </Dialog>
  );
};

export default ForgotPasswordDialog;
