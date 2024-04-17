import * as React from 'react';
import { action } from '@storybook/addon-actions';

import RedeemCodeDialog from '../../../Profile/RedeemCodeDialog';
import { fakeSilverAuthenticatedUser } from '../../../fixtures/GDevelopServicesTestData';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { GDevelopUsageApi } from '../../../Utils/GDevelopServices/ApiConfigs';

export default {
  title: 'Profile/RedeemCodeDialog',
  component: RedeemCodeDialog,
};

export const WorkingCode = () => {
  const mock = new MockAdapter(axios, { delayResponse: 100 });
  mock
    .onPost(`${GDevelopUsageApi.baseUrl}/redemption-code/action/redeem-code`)
    .reply(200)
    .onAny()
// @ts-expect-error - TS7006 - Parameter 'config' implicitly has an 'any' type.
    .reply((config) => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
    <RedeemCodeDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(hasJustRedeemedCode: boolean) => Promise<void>'.
      onClose={action('onClose')}
    />
  );
};

export const CodeDoesNotExist = () => {
  const mock = new MockAdapter(axios, { delayResponse: 100 });
  mock
    .onPost(`${GDevelopUsageApi.baseUrl}/redemption-code/action/redeem-code`)
    .reply(404)
    .onAny()
// @ts-expect-error - TS7006 - Parameter 'config' implicitly has an 'any' type.
    .reply((config) => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
    <RedeemCodeDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(hasJustRedeemedCode: boolean) => Promise<void>'.
      onClose={action('onClose')}
    />
  );
};

export const UnknownError = () => {
  const mock = new MockAdapter(axios, { delayResponse: 100 });
  mock
    .onPost(`${GDevelopUsageApi.baseUrl}/redemption-code/action/redeem-code`)
    .reply(500)
    .onAny()
// @ts-expect-error - TS7006 - Parameter 'config' implicitly has an 'any' type.
    .reply((config) => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
    <RedeemCodeDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(hasJustRedeemedCode: boolean) => Promise<void>'.
      onClose={action('onClose')}
    />
  );
};

export const CannotBeRedeemedAnymoreError = () => {
  const mock = new MockAdapter(axios, { delayResponse: 100 });
  mock
    .onPost(`${GDevelopUsageApi.baseUrl}/redemption-code/action/redeem-code`)
    .reply(409, {
      code: 'redemption-code/cannot-be-redeemed-anymore',
    })
    .onAny()
// @ts-expect-error - TS7006 - Parameter 'config' implicitly has an 'any' type.
    .reply((config) => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
    <RedeemCodeDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(hasJustRedeemedCode: boolean) => Promise<void>'.
      onClose={action('onClose')}
    />
  );
};

export const AlreadyRedeemedByUser = () => {
  const mock = new MockAdapter(axios, { delayResponse: 100 });
  mock
    .onPost(`${GDevelopUsageApi.baseUrl}/redemption-code/action/redeem-code`)
    .reply(409, {
      code: 'user-redeemed-code/already-redeemed-by-user',
    })
    .onAny()
// @ts-expect-error - TS7006 - Parameter 'config' implicitly has an 'any' type.
    .reply((config) => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
    <RedeemCodeDialog
      authenticatedUser={fakeSilverAuthenticatedUser}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(hasJustRedeemedCode: boolean) => Promise<void>'.
      onClose={action('onClose')}
    />
  );
};
