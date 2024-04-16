import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/CancelReasonDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/CancelReasonDialog.tsx', but '--jsx' is not set.
import CancelReasonDialog from '../../../../Profile/Subscription/CancelReasonDialog';

export default {
  title: 'Subscription/CancelReasonDialog',
  component: CancelReasonDialog,
  decorators: [paperDecorator],
};

export const Loading = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CancelReasonDialog
      onClose={() => action('on close')()}
      onCloseAfterSuccess={action('on close after success')}
    />
  </AuthenticatedUserContext.Provider>
);

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CancelReasonDialog
      onClose={() => action('on close')()}
      onCloseAfterSuccess={action('on close after success')}
    />
  </AuthenticatedUserContext.Provider>
);
