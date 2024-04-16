import * as React from 'react';
import { action } from '@storybook/addon-actions';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

import { fakeSilverAuthenticatedUser } from '../../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog/index.tsx', but '--jsx' is not set.
import { CreateIosSigningCredentialsDialog } from '../../../../ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog';
import { GDevelopBuildApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
// @ts-expect-error - TS6142 - Module '../../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../../AlertDecorator';

export default {
  title: 'ExportAndShare/SigningCredentials/CreateIosSigningCredentialsDialog',
  component: CreateIosSigningCredentialsDialog,
  decorators: [alertDecorator, paperDecorator],
};

export const AlwaysError = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock.onAny().reply(500);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreateIosSigningCredentialsDialog
        initialTab={'apple-certificate'}
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WorkingCertificateRequestButCertificateError = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock
    .onPost(`${GDevelopBuildApi.baseUrl}/signing-credential/action/create-csr`)
    .reply(200, {
      certificateRequestUuid: 'fake-certificate-request-uuid',
      csrPem: 'This is the content of the certificate request.',
    })
    .onAny()
    .reply(500);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreateIosSigningCredentialsDialog
        initialTab={'apple-certificate'}
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WorkingCertificateRequestButCertificateUnknownKind = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock
    .onPost(`${GDevelopBuildApi.baseUrl}/signing-credential/action/create-csr`)
    .reply(200, {
      certificateRequestUuid: 'fake-certificate-request-uuid',
      csrPem: 'This is the content of the certificate request.',
    })
    .onPost(
      `${GDevelopBuildApi.baseUrl}/signing-credential/action/upload-certificate`
    )
    .reply(200, {
      certificateSerial: 'fake-certificate-serial',
      certificateKind: 'unknown',
    })
    .onAny()
    .reply(500);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreateIosSigningCredentialsDialog
        initialTab={'apple-certificate'}
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const AllWorking = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock
    .onPost(`${GDevelopBuildApi.baseUrl}/signing-credential/action/create-csr`)
    .reply(200, {
      certificateRequestUuid: 'fake-certificate-request-uuid',
      csrPem: 'This is the content of the certificate request.',
    })
    .onPost(
      `${GDevelopBuildApi.baseUrl}/signing-credential/action/upload-certificate`
    )
    .reply(200, {
      certificateSerial: 'fake-certificate-serial',
      certificateKind: 'distribution',
    })
    .onPost(
      `${
        GDevelopBuildApi.baseUrl
      }/signing-credential/action/create-certificate-p12`
    )
    .reply(200, 'Ok')
    .onPost(
      `${
        GDevelopBuildApi.baseUrl
      }/signing-credential/action/upload-mobile-provision`
    )
    .reply(200, {
      uuid: 'fake-mobile-provision-uuid',
      name: 'Fake provisioning profile',
      certificatesCount: 1,
    })
    .onAny()
    .reply(500);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CreateIosSigningCredentialsDialog
        initialTab={'apple-certificate'}
        authenticatedUser={fakeSilverAuthenticatedUser}
        signingCredentials={null}
        error={null}
        onRefreshSigningCredentials={action('refresh')}
        onClose={action('onClose')}
      />
    </AuthenticatedUserContext.Provider>
  );
};
