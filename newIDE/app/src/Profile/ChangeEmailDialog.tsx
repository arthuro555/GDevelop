// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { User as FirebaseUser } from 'firebase/auth';
import {
  ChangeEmailForm,
  AuthError,
} from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
// @ts-expect-error - TS6142 - Module './CreateAccountDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountDialog.tsx', but '--jsx' is not set.
import { getEmailErrorText } from './CreateAccountDialog';
// @ts-expect-error - TS6142 - Module './ForgotPasswordDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ForgotPasswordDialog.tsx', but '--jsx' is not set.
import { emailRegex } from './ForgotPasswordDialog';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';

type Props = {
  firebaseUser: FirebaseUser,
  onClose: () => void,
  onChangeEmail: (form: ChangeEmailForm) => Promise<void>,
  changeEmailInProgress: boolean,
  error: AuthError | null | undefined
};

const ChangeEmailDialog = ({
  onClose,
  onChangeEmail,
  firebaseUser,
  changeEmailInProgress,
  error,
}: Props) => {
  const [email, setEmail] = React.useState(firebaseUser.email);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);

  const doChangeEmail = async () => {
// @ts-expect-error - TS2531 - Object is possibly 'null'.
    const trimmedEmail = email.trim();
    setEmail(trimmedEmail);
    setIsEmailValid(emailRegex.test(trimmedEmail));

    if (changeEmailInProgress || !email || !isEmailValid) return;

    await onChangeEmail({
      email,
    });
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Change your email</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Back</Trans>}
          disabled={changeEmailInProgress}
          key="back"
          primary={false}
          onClick={onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader isLoading={changeEmailInProgress} key="change-email">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Save</Trans>}
            primary
            onClick={doChangeEmail}
            disabled={changeEmailInProgress}
          />
        </LeftLoader>,
      ]}
      maxWidth="xs"
      cannotBeDismissed={changeEmailInProgress}
      onRequestClose={onClose}
      onApply={doChangeEmail}
      open
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Form onSubmit={doChangeEmail} autoComplete="on" name="changeEmail">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            value={email}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Email</Trans>}
            errorText={
              getEmailErrorText(error) ||
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              (!isEmailValid ? <Trans>Invalid email address</Trans> : null)
            }
            fullWidth
            type="email"
            disabled={changeEmailInProgress}
            required
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) => {
              if (!isEmailValid) setIsEmailValid(true);
              setEmail(value);
            }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onBlur={event => {
              const trimmedEmail = event.currentTarget.value.trim();
              setEmail(trimmedEmail);
              setIsEmailValid(emailRegex.test(trimmedEmail));
            }}
          />
        </ColumnStackLayout>
      </Form>
    </Dialog>
  );
};

export default ChangeEmailDialog;
