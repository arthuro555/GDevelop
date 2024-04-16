import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import {
  AuthError,
  IdentityProvider,
} from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UsernameAvailability } from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module './UsernameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/UsernameField.tsx', but '--jsx' is not set.
import { UsernameField } from './UsernameField';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';
// @ts-expect-error - TS6142 - Module './CreateAccountDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountDialog.tsx', but '--jsx' is not set.
import { getEmailErrorText, getPasswordErrorText } from './CreateAccountDialog';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Google'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Google.js' implicitly has an 'any' type.
import Google from '../UI/CustomSvgIcons/Google';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Apple'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Apple.js' implicitly has an 'any' type.
import Apple from '../UI/CustomSvgIcons/Apple';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/GitHub'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GitHub.js' implicitly has an 'any' type.
import GitHub from '../UI/CustomSvgIcons/GitHub';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module './LoginForm' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/LoginForm.tsx', but '--jsx' is not set.
import { accountsAlreadyExistsWithDifferentProviderCopy } from './LoginForm';

const styles = {
  identityProvidersBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 30,
  },
} as const;

type Props = {
  onCreateAccount: () => Promise<void>,
  onLoginWithProvider: (provider: IdentityProvider) => Promise<void>,
  email: string,
  onChangeEmail: (arg1: string) => void,
  password: string,
  onChangePassword: (arg1: string) => void,
  username: string,
  onChangeUsername: (arg1: string) => void,
  optInNewsletterEmail: boolean,
  onChangeOptInNewsletterEmail: (arg1: boolean) => void,
  usernameAvailability: UsernameAvailability | null | undefined,
  onChangeUsernameAvailability: (arg1?: UsernameAvailability | null | undefined) => void,
  isValidatingUsername: boolean,
  onChangeIsValidatingUsername: (arg1: boolean) => void,
  createAccountInProgress: boolean,
  error: AuthError | null | undefined
};

const CreateAccountForm = ({
  onCreateAccount,
  onLoginWithProvider,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  username,
  onChangeUsername,
  optInNewsletterEmail,
  onChangeOptInNewsletterEmail,
  usernameAvailability,
  onChangeUsernameAvailability,
  isValidatingUsername,
  onChangeIsValidatingUsername,
  createAccountInProgress,
  error,
}: Props) => {
  const accountsExistsWithOtherCredentials = error
    ? error.code === 'auth/account-exists-with-different-credential'
    : false;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Form onSubmit={onCreateAccount} autoComplete="on" name="createAccount">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
          {accountsExistsWithOtherCredentials && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="error">
              {accountsAlreadyExistsWithDifferentProviderCopy}
            </AlertMessage>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UsernameField
            value={username}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) => {
              onChangeUsername(value);
            }}
            allowEmpty
            onAvailabilityChecked={onChangeUsernameAvailability}
            onAvailabilityCheckLoading={onChangeIsValidatingUsername}
            isValidatingUsername={isValidatingUsername}
            disabled={createAccountInProgress}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            value={email}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Email</Trans>}
            errorText={getEmailErrorText(error)}
            fullWidth
            type="email"
            required
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) => {
              onChangeEmail(value);
            }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onBlur={event => {
              onChangeEmail(event.currentTarget.value.trim());
            }}
            disabled={createAccountInProgress}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
            value={password}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Password</Trans>}
            errorText={getPasswordErrorText(error)}
            type="password"
            fullWidth
            required
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={(e, value) => {
              onChangePassword(value);
            }}
            disabled={createAccountInProgress}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>I want to receive the GDevelop Newsletter</Trans>}
            checked={optInNewsletterEmail}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
            onCheck={(e, value) => {
              onChangeOptInNewsletterEmail(value);
            }}
            disabled={createAccountInProgress}
          />
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
                  disabled={createAccountInProgress}
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
                  disabled={createAccountInProgress}
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
                  disabled={createAccountInProgress}
                />
              </ResponsiveLineStackLayout>
            </Line>
          </div>
        </ColumnStackLayout>
      </Form>
    </Column>
  );
};

export default CreateAccountForm;
