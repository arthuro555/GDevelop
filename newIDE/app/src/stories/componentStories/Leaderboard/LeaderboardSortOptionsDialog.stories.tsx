import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/LeaderboardAdmin/LeaderboardSortOptionsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/LeaderboardSortOptionsDialog.tsx', but '--jsx' is not set.
import LeaderboardSortOptionsDialog from '../../../GameDashboard/LeaderboardAdmin/LeaderboardSortOptionsDialog';

export default {
  title: 'Leaderboard/LeaderboardSortOptionsDialog',
  component: LeaderboardSortOptionsDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LeaderboardSortOptionsDialog
    open
    onClose={() => action('onClose')()}
    onSave={() => action('onSave')()}
    sort={'ASC'}
    extremeAllowedScore={undefined}
  />
);
