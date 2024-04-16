import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/LeaderboardAdmin/LeaderboardAppearanceDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardAppearanceDialog.tsx', but '--jsx' is not set.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider
    value={fakeAuthenticatedUserWithNoSubscription}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
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
