import * as React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

import {
  fakeSilverAuthenticatedUser,
  mockSigningCredentials,
} from '../../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/SigningCredentials/IosSigningCredentialsSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/IosSigningCredentialsSelector.tsx', but '--jsx' is not set.
import { IosSigningCredentialsSelector } from '../../../../ExportAndShare/SigningCredentials/IosSigningCredentialsSelector';
import { TargetName } from '../../../../Utils/GDevelopServices/Build';
import { GDevelopBuildApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
// @ts-expect-error - TS6142 - Module '../../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../../AlertDecorator';
// @ts-expect-error - TS6142 - Module '../../../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../../../UI/Toggle';

export default {
  title: 'ExportAndShare/SigningCredentials/IosSigningCredentialsSelector',
  component: IosSigningCredentialsSelector,
  decorators: [alertDecorator, paperDecorator],
};

export const Errored = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock.onAny().reply(500);

  const [buildSigningOptions, setBuildSigningOptions] = React.useState<any>(null);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IosSigningCredentialsSelector
        targets={['iosAppStore']}
        authenticatedUser={fakeSilverAuthenticatedUser}
        buildSigningOptions={buildSigningOptions}
        onSelectBuildSigningOptions={setBuildSigningOptions}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithSigningCredentialsButNonePreSelected = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock
    .onGet(`${GDevelopBuildApi.baseUrl}/signing-credential`)
    .reply(200, mockSigningCredentials)
    .onAny()
    .reply(500);

  const [buildSigningOptions, setBuildSigningOptions] = React.useState<any>(null);
  const [targets, setTargets] = React.useState<Array<TargetName>>([
    'iosAppStore',
  ]);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Toggle
        label="Distribution?"
        onToggle={() => {
          setTargets(
            targets.includes('iosAppStore')
              ? ['iosDevelopment']
              : ['iosAppStore']
          );
        }}
        toggled={targets.includes('iosAppStore')}
        labelPosition="right"
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IosSigningCredentialsSelector
        targets={targets}
        authenticatedUser={fakeSilverAuthenticatedUser}
        buildSigningOptions={buildSigningOptions}
        onSelectBuildSigningOptions={setBuildSigningOptions}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const WithSigningCredentialsAndOnePreSelected = () => {
  const axiosMock = new MockAdapter(axios, { delayResponse: 500 });
  axiosMock
    .onGet(`${GDevelopBuildApi.baseUrl}/signing-credential`)
    .reply(200, mockSigningCredentials)
    .onAny()
    .reply(500);

  const [buildSigningOptions, setBuildSigningOptions] = React.useState({
    certificateSerial: '12345',
    mobileProvisionUuid: '12345679',
  });
  const [targets, setTargets] = React.useState<Array<TargetName>>([
    'iosAppStore',
  ]);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Toggle
        label="Distribution?"
        onToggle={() => {
          setTargets(
            targets.includes('iosAppStore')
              ? ['iosDevelopment']
              : ['iosAppStore']
          );
        }}
        toggled={targets.includes('iosAppStore')}
        labelPosition="right"
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IosSigningCredentialsSelector
        targets={targets}
        authenticatedUser={fakeSilverAuthenticatedUser}
        buildSigningOptions={buildSigningOptions}
        onSelectBuildSigningOptions={setBuildSigningOptions}
      />
    </AuthenticatedUserContext.Provider>
  );
};
