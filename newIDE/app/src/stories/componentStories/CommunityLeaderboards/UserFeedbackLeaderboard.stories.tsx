import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../CommunityLeaderboards/UserFeedbackLeaderboard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/UserFeedbackLeaderboard.tsx', but '--jsx' is not set.
import { UserFeedbackLeaderboard } from '../../../CommunityLeaderboards/UserFeedbackLeaderboard';
import { fakeUserLeaderboards } from '../../../fixtures/GDevelopServicesTestData/FakeUserLeaderboards';

export default {
  title: 'CommunityLeaderboards/UserFeedbackLeaderboard',
  component: UserFeedbackLeaderboard,
  decorators: [paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <UserFeedbackLeaderboard
      userLeaderboard={fakeUserLeaderboards[0]}
      displayEntriesCount={5}
    />
  );
};

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <UserFeedbackLeaderboard userLeaderboard={null} displayEntriesCount={5} />
  );
};
