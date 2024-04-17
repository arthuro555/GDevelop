import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../../PaperDecorator';

import {
  fakeSilverAuthenticatedUser,
  mockSigningCredentials,
} from '../../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';

import { SigningCredentialsDialog } from '../../../../ExportAndShare/SigningCredentials/SigningCredentialsDialog';

import alertDecorator from '../../../AlertDecorator';

export default {
  title: 'ExportAndShare/SigningCredentials/SigningCredentialsDialog',
  component: SigningCredentialsDialog,
  decorators: [alertDecorator, paperDecorator],
};

export const Loading = () => {
  return (
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const Errored = () => {
  return (
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={new Error('Fake Error')}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const Empty = () => {
  return (
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={[]}
        error={null}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithSigningCredentials = () => {
  return (
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
      <SigningCredentialsDialog
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={mockSigningCredentials}
        error={null}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};
