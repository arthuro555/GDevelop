import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../CommunityLeaderboards/GameFeedbackLeaderboard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/GameFeedbackLeaderboard.tsx', but '--jsx' is not set.
import { GameFeedbackLeaderboard } from '../../../CommunityLeaderboards/GameFeedbackLeaderboard';
import { fakeGameLeaderboards } from '../../../fixtures/GDevelopServicesTestData/FakeGameLeaderboards';

export default {
  title: 'CommunityLeaderboards/GameFeedbackLeaderboard',
  component: GameFeedbackLeaderboard,
  decorators: [paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GameFeedbackLeaderboard
      gameLeaderboard={fakeGameLeaderboards[0]}
      displayEntriesCount={5}
    />
  );
};

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GameFeedbackLeaderboard gameLeaderboard={null} displayEntriesCount={5} />
  );
};
