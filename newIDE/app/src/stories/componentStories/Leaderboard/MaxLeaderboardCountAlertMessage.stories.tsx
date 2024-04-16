import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
import { limitsReached } from '../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/LeaderboardAdmin/MaxLeaderboardCountAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/MaxLeaderboardCountAlertMessage.tsx', but '--jsx' is not set.
import MaxLeaderboardCountAlertMessage from '../../../GameDashboard/LeaderboardAdmin/MaxLeaderboardCountAlertMessage';

export default {
  title: 'Leaderboard/MaxLeaderboardCountAlertMessage',
  component: MaxLeaderboardCountAlertMessage,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MaxLeaderboardCountAlertMessage
    limits={limitsReached}
    onUpgrade={() => action('onUpgrade')()}
    onClose={() => action('onClose')()}
  />
);
