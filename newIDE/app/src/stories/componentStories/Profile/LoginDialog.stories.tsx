import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/LoginDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/LoginDialog.tsx', but '--jsx' is not set.
import LoginDialog from '../../../Profile/LoginDialog';

export default {
  title: 'Profile/LoginDialog',
  component: LoginDialog,
  decorators: [paperDecorator],
};

const defaultProps = {
  onClose: action('onClose'),
  onForgotPassword: action('onForgotPassword'),
  onLogin: action('onLogin'),
  onLogout: action('onLogout'),
  onLoginWithProvider: action('onLoginWithProvider'),
  onGoToCreateAccount: action('onGoToCreateAccount'),
  loginInProgress: false,
  error: null,
} as const;

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <LoginDialog {...defaultProps} />;

export const WeakPasswordErrorFromBackend = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LoginDialog
    {...defaultProps}
    error={{
      code: 'auth/weak-password',
    }}
  />
);

export const InvalidEmailErrorFromBackend = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LoginDialog
    {...defaultProps}
    error={{
      code: 'auth/invalid-email',
    }}
  />
);

export const AccountExistsWithDifferentCredentialErrorFromBackend = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LoginDialog
    {...defaultProps}
    error={{
      code: 'auth/account-exists-with-different-credential',
    }}
  />
);

export const Submitting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LoginDialog {...defaultProps} loginInProgress />
);
