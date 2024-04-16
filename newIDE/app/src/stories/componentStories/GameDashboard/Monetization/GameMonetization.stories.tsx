import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../GameDashboard/Monetization/GameMonetization' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Monetization/GameMonetization.tsx', but '--jsx' is not set.
import GameMonetization from '../../../../GameDashboard/Monetization/GameMonetization';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';

import {
  fakeSilverAuthenticatedUser,
  gameWithDisplayAdsOnGamePageEnabled,
  gameWithDisplayAdsOnGamePageDisabled,
} from '../../../../fixtures/GDevelopServicesTestData';
import { GDevelopGameApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
  title: 'GameDashboard/Monetization/GameMonetization',
  component: GameMonetization,
  decorators: [paperDecorator],
};

export const AdsEnabled = () => {
  const game = gameWithDisplayAdsOnGamePageEnabled;
  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock
    .onPatch(`${GDevelopGameApi.baseUrl}/game/${game.id}`)
    .reply(200)
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GameMonetization game={game} onGameUpdated={action('onGameUpdated')} />
    </AuthenticatedUserContext.Provider>
  );
};

export const AdsDisabled = () => {
  const game = gameWithDisplayAdsOnGamePageDisabled;
  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock
    .onPatch(`${GDevelopGameApi.baseUrl}/game/${game.id}`)
    .reply(200)
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GameMonetization game={game} onGameUpdated={action('onGameUpdated')} />
    </AuthenticatedUserContext.Provider>
  );
};

export const ErrorWhenUpdatingGame = () => {
  const game = gameWithDisplayAdsOnGamePageEnabled;
  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock
    .onPatch(`${GDevelopGameApi.baseUrl}/game/${game.id}`)
    .reply(500)
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GameMonetization game={game} onGameUpdated={action('onGameUpdated')} />
    </AuthenticatedUserContext.Provider>
  );
};
