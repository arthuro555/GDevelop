// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import {
  LoginForm as LoginFormType,
  ForgotPasswordForm,
  AuthError,
  IdentityProvider,
} from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module './LoginForm' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/LoginForm.tsx', but '--jsx' is not set.
import LoginForm from './LoginForm';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../UI/CustomSvgIcons/GDevelopGLogo';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';

const styles = {
  formContainer: {
    marginTop: 20,
  },
} as const;

type Props = {
  onClose: () => void,
  onGoToCreateAccount: () => void,
  onLogin: (form: LoginFormType) => Promise<void>,
  onLogout: () => Promise<void>,
  onLoginWithProvider: (provider: IdentityProvider) => Promise<void>,
  onForgotPassword: (form: ForgotPasswordForm) => Promise<void>,
  loginInProgress: boolean,
  error: AuthError | null | undefined
};

const LoginDialog = ({
  onClose,
  onGoToCreateAccount,
  onLogin,
  onLogout,
  onLoginWithProvider,
  onForgotPassword,
  loginInProgress,
  error,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doLogin = () => {
    if (loginInProgress) return;

    onLogin({
      email: email.trim(),
      password,
    });
  };

  const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Cancel</Trans>}
      key="cancel"
      primary={false}
      onClick={onClose}
    />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LeftLoader isLoading={loginInProgress} key="login">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DialogPrimaryButton
        id="login-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Login</Trans>}
        primary
        onClick={doLogin}
        disabled={loginInProgress}
      />
    </LeftLoader>,
  ];

  const secondaryActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <HelpButton key="help" helpPagePath={'/interface/profile'} />,
  ];

  const dialogContent = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout
      noMargin
      expand
      justifyContent="center"
      alignItems="center"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GDevelopGLogo fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Log in to your account</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body2" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Don't have an account yet?</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Link href="" onClick={onGoToCreateAccount} disabled={loginInProgress}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2" noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Create an account</Trans>
          </Text>
        </Link>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.formContainer,
          // Take full width on mobile.
          width: isMobile ? '95%' : '60%',
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LoginForm
          onLogin={doLogin}
          onLoginWithProvider={onLoginWithProvider}
          email={email}
          onChangeEmail={setEmail}
          password={password}
          onChangePassword={setPassword}
          onForgotPassword={onForgotPassword}
          loginInProgress={loginInProgress}
          error={error}
        />
      </div>
    </ColumnStackLayout>
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={null} // This dialog has a custom design to be more welcoming, the title is set in the content.
      id="login-dialog"
      actions={actions}
      secondaryActions={secondaryActions}
      cannotBeDismissed={loginInProgress}
      onRequestClose={onClose}
      onApply={doLogin}
      maxWidth="sm"
      open
      flexColumnBody
    >
      {dialogContent}
    </Dialog>
  );
};

export default LoginDialog;
