import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import ForgotPasswordDialog from '../../../Profile/ForgotPasswordDialog';

export default {
  title: 'Profile/ForgotPasswordDialog',
  component: ForgotPasswordDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
  <ForgotPasswordDialog
    onClose={() => action('onClose')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
    onForgotPassword={() => action('onForgotPassword')()}
  />
);
