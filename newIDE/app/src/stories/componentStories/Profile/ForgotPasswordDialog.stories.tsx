import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/ForgotPasswordDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ForgotPasswordDialog.tsx', but '--jsx' is not set.
import ForgotPasswordDialog from '../../../Profile/ForgotPasswordDialog';

export default {
  title: 'Profile/ForgotPasswordDialog',
  component: ForgotPasswordDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ForgotPasswordDialog
    onClose={() => action('onClose')()}
    onForgotPassword={() => action('onForgotPassword')()}
  />
);
