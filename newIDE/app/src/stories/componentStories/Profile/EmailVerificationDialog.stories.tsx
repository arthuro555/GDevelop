import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../Profile/EmailVerificationDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/EmailVerificationDialog.tsx', but '--jsx' is not set.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically={false}
    showSendEmailButton={false}
  />
);

export const EmailAlreadySentWithButton = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically={false}
    showSendEmailButton
  />
);

export const SendEmailOnOpeningNoButton = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically
    showSendEmailButton={false}
  />
);

export const VerifiedUser = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EmailVerificationDialog
    onClose={action('onClose')}
    authenticatedUser={fakeAuthenticatedUserWithEmailVerified}
    onSendEmail={action('onSendEmail')}
    sendEmailAutomatically
    showSendEmailButton
  />
);
