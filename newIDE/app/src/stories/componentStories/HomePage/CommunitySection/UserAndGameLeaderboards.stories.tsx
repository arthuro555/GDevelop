import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../MainFrame/EditorContainers/HomePage/CommunitySection/UserAndGameLeaderboards' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CommunitySection/UserAndGameLeaderboards.tsx', but '--jsx' is not set.
import { UserAndGameLeaderboards } from '../../../../MainFrame/EditorContainers/HomePage/CommunitySection/UserAndGameLeaderboards';
import { fakeGameLeaderboards } from '../../../../fixtures/GDevelopServicesTestData/FakeGameLeaderboards';
import { fakeUserLeaderboards } from '../../../../fixtures/GDevelopServicesTestData/FakeUserLeaderboards';
// @ts-expect-error - TS6142 - Module '../../../../CommunityLeaderboards/CommunityLeaderboardsContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/CommunityLeaderboardsContext.tsx', but '--jsx' is not set.
import { CommunityLeaderboardsContext } from '../../../../CommunityLeaderboards/CommunityLeaderboardsContext';

export default {
  title: 'HomePage/CommunitySection/UserAndGameLeaderboards',
  component: UserAndGameLeaderboards,
  decorators: [paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <CommunityLeaderboardsContext.Provider
      value={{
        fetchCommunityLeaderboards: async () => {},
        gameLeaderboards: fakeGameLeaderboards,
        userLeaderboards: fakeUserLeaderboards,
        error: null,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserAndGameLeaderboards />
    </CommunityLeaderboardsContext.Provider>
  );
};

export const Loading = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <CommunityLeaderboardsContext.Provider
      value={{
        fetchCommunityLeaderboards: async () => {},
        gameLeaderboards: null,
        userLeaderboards: null,
        error: null,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserAndGameLeaderboards />
    </CommunityLeaderboardsContext.Provider>
  );
};
