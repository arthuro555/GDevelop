import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import ChangeEmailDialog from '../../../Profile/ChangeEmailDialog';

export default {
  title: 'Profile/ChangeEmailDialog',
  component: ChangeEmailDialog,
  decorators: [paperDecorator],
};

const defaultProps = {
  firebaseUser: {
    uid: 'id',
    email: 'email',
  },
  onClose: () => action('onClose')(),
  changeEmailInProgress: false,
  onChangeEmail: action('onChangeEmail'),
  error: null,
} as const;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <ChangeEmailDialog {...defaultProps} />;

export const ErrorFromBackend = () => (
  // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ChangeEmailDialog
    {...defaultProps}
    error={{ code: 'auth/requires-recent-login' }}
  />
);

export const Submitting = () => (
  // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ChangeEmailDialog {...defaultProps} changeEmailInProgress />
);
