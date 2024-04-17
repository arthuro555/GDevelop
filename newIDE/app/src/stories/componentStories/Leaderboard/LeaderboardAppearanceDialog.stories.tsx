import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import LeaderboardAppearanceDialog from '../../../GameDashboard/LeaderboardAdmin/LeaderboardAppearanceDialog';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserWithNoSubscription,
  fakeStartupAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Leaderboard/LeaderboardAppearanceDialog',
  component: LeaderboardAppearanceDialog,
  decorators: [paperDecorator],
};

export const WithoutSubscription = () => (
  <AuthenticatedUserContext.Provider
    value={fakeAuthenticatedUserWithNoSubscription}
  >
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onSave={() => action('onSave')()}
      leaderboardCustomizationSettings={{
        scoreTitle: 'Coins collected',
        scoreFormatting: {
          type: 'custom',
          prefix: '',
          suffix: ' coins',
          precision: 0,
        },
      }}
    />
  </AuthenticatedUserContext.Provider>
);

export const WithSilverSubscription = () => (
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onSave={() => action('onSave')()}
      leaderboardCustomizationSettings={{
        scoreTitle: 'Coins collected',
        scoreFormatting: {
          type: 'custom',
          prefix: '',
          suffix: ' coins',
          precision: 0,
        },
      }}
    />
  </AuthenticatedUserContext.Provider>
);

export const WithStartupSubscription = () => (
  <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
      onSave={() => action('onSave')()}
      leaderboardCustomizationSettings={{
        scoreTitle: 'Coins collected',
        scoreFormatting: {
          type: 'custom',
          prefix: '',
          suffix: ' coins',
          precision: 0,
        },
      }}
    />
  </AuthenticatedUserContext.Provider>
);
