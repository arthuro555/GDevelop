import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/CreateAccountDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateAccountDialog.tsx', but '--jsx' is not set.
import CreateAccountDialog from '../../../Profile/CreateAccountDialog';

export default {
  title: 'Profile/CreateAccountDialog',
  component: CreateAccountDialog,
  decorators: [paperDecorator],
};

const defaultProps = {
  onClose: () => action('onClose')(),
  onGoToLogin: action('onGoToLogin'),
  onCreateAccount: action('onCreateAccount'),
  onLoginWithProvider: action('onLoginWithProvider'),
  createAccountInProgress: false,
  error: null,
} as const;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <CreateAccountDialog {...defaultProps} />;

export const PasswordErrorFromBackend = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CreateAccountDialog
    {...defaultProps}
    error={{ code: 'auth/weak-password' }}
  />
);

export const EmailErrorFromBackend = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CreateAccountDialog
    {...defaultProps}
    error={{ code: 'auth/invalid-email' }}
  />
);

export const Submitting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <CreateAccountDialog {...defaultProps} createAccountInProgress />
);
