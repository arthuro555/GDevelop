import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import {
  RegisterForm,
  AuthError,
  IdentityProvider,
} from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UsernameAvailability } from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module './UsernameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/UsernameField.tsx', but '--jsx' is not set.
import { isUsernameValid } from './UsernameField';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../UI/CustomSvgIcons/GDevelopGLogo';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module './CreateAccountForm' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountForm.tsx', but '--jsx' is not set.
import CreateAccountForm from './CreateAccountForm';

// @ts-expect-error - TS7031 - Binding element 'isMobile' implicitly has an 'any' type.
const getStyles = ({ isMobile }) => {
  return {
    formContainer: {
      width: isMobile ? '95%' : '60%',
      marginTop: 20,
    },
  };
};

type Props = {
  onClose: () => void,
  onGoToLogin: () => void,
  onCreateAccount: (form: RegisterForm) => Promise<void>,
  onLoginWithProvider: (provider: IdentityProvider) => Promise<void>,
  createAccountInProgress: boolean,
  error: AuthError | null | undefined
};

export const getEmailErrorText = (error?: AuthError | null) => {
  if (!error) return undefined;

  if (error.code === 'auth/invalid-email')
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>This email is invalid.</Trans>;
  if (error.code === 'auth/missing-email')
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>Please enter an email address.</Trans>;
  if (error.code === 'auth/user-disabled')
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>This account has been deactivated or deleted.</Trans>;
  if (error.code === 'auth/user-not-found')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>This user was not found: have you created your account?</Trans>
    );
  if (error.code === 'auth/email-already-in-use')
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>This email was already used for another account.</Trans>;
  if (error.code === 'auth/operation-not-allowed')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Service seems to be unavailable, please try again later.</Trans>
    );
  if (error.code === 'auth/requires-recent-login')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        Please log out and log in again to verify your identify, then change
        your email.
      </Trans>
    );
  if (error.code === 'auth/network-request-failed')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        The request could not reach the servers, ensure you are connected to
        internet.
      </Trans>
    );

  return undefined;
};

export const getPasswordErrorText = (error?: AuthError | null) => {
  if (!error) return undefined;

  if (error.code === 'auth/too-many-requests')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        That's a lot of unsuccessful login attempts! Wait a bit before trying
        again or reset your password.
      </Trans>
    );
  if (error.code === 'auth/wrong-password')
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <Trans>The password is invalid.</Trans>;
  if (error.code === 'auth/weak-password')
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        This password is too weak: please use more letters and digits.
      </Trans>
    );
  if (error.code === 'auth/internal-error')
    // Error raised when trying to create an account with an empty password.
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        An unknown error happened, ensure your password is entered correctly.
      </Trans>
    );

  return undefined;
};

const CreateAccountDialog = ({
  onClose,
  onGoToLogin,
  onCreateAccount,
  onLoginWithProvider,
  createAccountInProgress,
  error,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const styles = getStyles({ isMobile });
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [getNewsletterEmail, setGetNewsletterEmail] = React.useState<boolean>(false);
  const [
    usernameAvailability,
    setUsernameAvailability,
  ] = React.useState<UsernameAvailability | null | undefined>(null);
  const [
    isValidatingUsername,
    setIsValidatingUsername,
  ] = React.useState<boolean>(false);

  const canCreateAccount =
    !createAccountInProgress &&
    isUsernameValid(username, { allowEmpty: true }) &&
    !isValidatingUsername &&
    (!usernameAvailability || usernameAvailability.isAvailable);

  const createAccount = async () => {
    if (!canCreateAccount) return;
    try {
      await onCreateAccount({
        email: email.trim(),
        password,
        username,
        getNewsletterEmail,
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={null} // This dialog has a custom design to be more welcoming, the title is set in the content.
      id="create-account-dialog"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader isLoading={createAccountInProgress} key="create-account">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Create account</Trans>}
            id="create-account-button"
            primary
            disabled={!canCreateAccount}
            onClick={createAccount}
          />
        </LeftLoader>,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath={'/interface/profile'} />,
      ]}
      cannotBeDismissed={createAccountInProgress}
      onApply={createAccount}
      onRequestClose={() => {
        if (!createAccountInProgress) onClose();
      }}
      maxWidth="sm"
      open
      flexColumnBody
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Sign up for free!</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Welcome to GDevelop!</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="body2" noMargin align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Already a member?</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Link
              href="#"
              onClick={onGoToLogin}
              disabled={createAccountInProgress}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="body2" noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Log in to your account</Trans>
              </Text>
            </Link>
          </LineStackLayout>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.formContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CreateAccountForm
            onCreateAccount={createAccount}
            onLoginWithProvider={onLoginWithProvider}
            email={email}
            onChangeEmail={setEmail}
            password={password}
            onChangePassword={setPassword}
            username={username}
            onChangeUsername={setUsername}
            optInNewsletterEmail={getNewsletterEmail}
            onChangeOptInNewsletterEmail={setGetNewsletterEmail}
            createAccountInProgress={createAccountInProgress}
            error={error}
            usernameAvailability={usernameAvailability}
            onChangeUsernameAvailability={setUsernameAvailability}
            isValidatingUsername={isValidatingUsername}
            onChangeIsValidatingUsername={setIsValidatingUsername}
          />
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MarkdownText
            translatableSource={t`By creating an account and using GDevelop, you agree to the [Terms and Conditions](https://gdevelop.io/page/terms-and-conditions).`}
          />
        </BackgroundText>
      </ColumnStackLayout>
    </Dialog>
  );
};

export default CreateAccountDialog;
