// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import {
  ForgotPasswordForm,
  AuthError,
  IdentityProvider,
} from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './CreateAccountDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountDialog.tsx', but '--jsx' is not set.
import { getEmailErrorText, getPasswordErrorText } from './CreateAccountDialog';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS6142 - Module './ForgotPasswordDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ForgotPasswordDialog.tsx', but '--jsx' is not set.
import ForgotPasswordDialog from './ForgotPasswordDialog';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Google'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Google.js' implicitly has an 'any' type.
import Google from '../UI/CustomSvgIcons/Google';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Apple'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Apple.js' implicitly has an 'any' type.
import Apple from '../UI/CustomSvgIcons/Apple';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/GitHub'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GitHub.js' implicitly has an 'any' type.
import GitHub from '../UI/CustomSvgIcons/GitHub';

const styles = {
  identityProvidersBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 30,
  },
} as const;

export const accountsAlreadyExistsWithDifferentProviderCopy = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>
    You already have an account for this email address with a different provider
    (Google, Apple or GitHub). Please try with one of those.
  </Trans>
);

type Props = {
  onLogin: () => void,
  onLoginWithProvider: (provider: IdentityProvider) => Promise<void>,
  email: string,
  onChangeEmail: (arg1: string) => void,
  password: string,
  onChangePassword: (arg1: string) => void,
  onForgotPassword: (form: ForgotPasswordForm) => Promise<void>,
  loginInProgress: boolean,
  error: AuthError | null | undefined
};

const LoginForm = ({
  onLogin,
  onLoginWithProvider,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onForgotPassword,
  loginInProgress,
  error,
}: Props) => {
  const [
    isForgotPasswordDialogOpen,
    setIsForgotPasswordDialogOpen,
  ] = React.useState(false);

  const accountsExistsWithOtherCredentials = error
    ? error.code === 'auth/account-exists-with-different-credential'
    : false;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout
        noMargin
        expand
        justifyContent="center"
        alignItems="stretch"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Form onSubmit={onLogin} autoComplete="on" name="login">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
            {accountsExistsWithOtherCredentials && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="error">
                {accountsAlreadyExistsWithDifferentProviderCopy}
              </AlertMessage>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              autoFocus="desktop"
              value={email}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Email</Trans>}
              errorText={getEmailErrorText(error)}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(e, value) => {
                onChangeEmail(value);
              }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
              onBlur={event => {
                onChangeEmail(event.currentTarget.value.trim());
              }}
              fullWidth
              type="email"
              disabled={loginInProgress}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              value={password}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Password</Trans>}
              errorText={getPasswordErrorText(error)}
              type="password"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(e, value) => {
                onChangePassword(value);
              }}
              fullWidth
              disabled={loginInProgress}
            />
          </ColumnStackLayout>
        </Form>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Link
            href=""
            onClick={() => setIsForgotPasswordDialogOpen(true)}
            disabled={loginInProgress}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="body2" noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Did you forget your password?</Trans>
            </Text>
          </Link>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.identityProvidersBlock}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="body2" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Or continue with</Trans>
            </Text>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout expand noColumnMargin noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
                primary
                fullWidth
                label="Google"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<Google />}
                onClick={() => {
                  onLoginWithProvider('google');
                }}
                disabled={loginInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
                primary
                fullWidth
                label="GitHub"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<GitHub />}
                onClick={() => {
                  onLoginWithProvider('github');
                }}
                disabled={loginInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
                primary
                fullWidth
                label="Apple"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<Apple />}
                onClick={() => {
                  onLoginWithProvider('apple');
                }}
                disabled={loginInProgress}
              />
            </ResponsiveLineStackLayout>
          </Line>
        </div>
      </ColumnStackLayout>
      {isForgotPasswordDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ForgotPasswordDialog
          onClose={() => setIsForgotPasswordDialogOpen(false)}
          onForgotPassword={onForgotPassword}
        />
      )}
    </>
  );
};

export default LoginForm;
