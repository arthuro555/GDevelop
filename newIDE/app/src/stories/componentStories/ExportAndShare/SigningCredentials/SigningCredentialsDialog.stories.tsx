import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

import {
  fakeSilverAuthenticatedUser,
  mockSigningCredentials,
} from '../../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/SigningCredentials/SigningCredentialsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/SigningCredentialsDialog/index.tsx', but '--jsx' is not set.
import { SigningCredentialsDialog } from '../../../../ExportAndShare/SigningCredentials/SigningCredentialsDialog';
// @ts-expect-error - TS6142 - Module '../../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../../AlertDecorator';

export default {
  title: 'ExportAndShare/SigningCredentials/SigningCredentialsDialog',
  component: SigningCredentialsDialog,
  decorators: [alertDecorator, paperDecorator],
};

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const Errored = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={new Error('Fake Error')}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const Empty = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={[]}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithSigningCredentials = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={mockSigningCredentials}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};
