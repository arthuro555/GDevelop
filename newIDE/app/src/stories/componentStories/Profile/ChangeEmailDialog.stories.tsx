import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/ChangeEmailDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ChangeEmailDialog.tsx', but '--jsx' is not set.
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
