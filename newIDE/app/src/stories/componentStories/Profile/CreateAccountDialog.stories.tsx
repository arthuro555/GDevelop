import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

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
