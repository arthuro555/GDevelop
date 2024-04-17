import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import EmailVerificationDialog from '../../../Profile/EmailVerificationDialog';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserWithEmailVerified,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Profile/EmailVerificationDialog',
  component: EmailVerificationDialog,
  decorators: [paperDecorator],
};

export const EmailAlreadySentNoButton = () => (
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically={false}
    showSendEmailButton={false}
  />
);

export const EmailAlreadySentWithButton = () => (
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically={false}
    showSendEmailButton
  />
);

export const SendEmailOnOpeningNoButton = () => (
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically
    showSendEmailButton={false}
  />
);

export const VerifiedUser = () => (
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeAuthenticatedUserWithEmailVerified}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically
    showSendEmailButton
  />
);
