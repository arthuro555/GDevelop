import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
import {
  LeaderboardReplacerProgressDialog,
  ReplacePromptDialog,
// @ts-expect-error - TS6142 - Module '../../../Leaderboard/useLeaderboardReplacer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Leaderboard/useLeaderboardReplacer.tsx', but '--jsx' is not set.
} from '../../../Leaderboard/useLeaderboardReplacer';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import { fakeSilverAuthenticatedUser } from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Leaderboard/LeaderboardReplacerDialog',
  component: LeaderboardReplacerProgressDialog,
  decorators: [paperDecorator],
};

export const IsReplacingLeaderboards = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LeaderboardReplacerProgressDialog
    progress={30}
    onAbandon={null}
    onRetry={null}
    erroredLeaderboards={[
      { leaderboardId: 'errored-leaderboard-id', error: new Error() },
    ]}
  />
);

export const WithErrors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LeaderboardReplacerProgressDialog
    progress={100}
    onAbandon={action('onAbandon')}
    onRetry={action('onRetry')}
    erroredLeaderboards={[
      { leaderboardId: 'errored-leaderboard-id', error: new Error() },
    ]}
  />
);

export const ReplacerPromptAuthenticatedUser = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ReplacePromptDialog
      leaderboardsToReplace={['leaderboard-to-replace']}
      onClose={action('onClose')}
      onTriggerReplace={action('onTriggerReplace')}
    />
  </AuthenticatedUserContext.Provider>
);

export const ReplacerPromptNotAuthenticatedUser = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider
    value={{ ...fakeSilverAuthenticatedUser, authenticated: false }}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ReplacePromptDialog
      leaderboardsToReplace={['leaderboard-to-replace']}
      onClose={action('onClose')}
      onTriggerReplace={action('onTriggerReplace')}
    />
  </AuthenticatedUserContext.Provider>
);
