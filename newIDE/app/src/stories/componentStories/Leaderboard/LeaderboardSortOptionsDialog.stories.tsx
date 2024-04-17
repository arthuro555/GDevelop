import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import LeaderboardSortOptionsDialog from '../../../GameDashboard/LeaderboardAdmin/LeaderboardSortOptionsDialog';

export default {
  title: 'Leaderboard/LeaderboardSortOptionsDialog',
  component: LeaderboardSortOptionsDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
  <LeaderboardSortOptionsDialog
    open
    onClose={() => action('onClose')()}
// @ts-expect-error - TS2322 - Type 'void' is not assignable to type 'Promise<void>'.
    onSave={() => action('onSave')()}
    sort={'ASC'}
    extremeAllowedScore={undefined}
  />
);
