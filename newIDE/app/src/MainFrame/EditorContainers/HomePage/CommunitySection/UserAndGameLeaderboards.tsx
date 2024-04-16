import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../CommunityLeaderboards/UserFeedbackLeaderboard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/UserFeedbackLeaderboard.tsx', but '--jsx' is not set.
import { UserFeedbackLeaderboard } from '../../../../CommunityLeaderboards/UserFeedbackLeaderboard';
// @ts-expect-error - TS6142 - Module '../../../../CommunityLeaderboards/GameFeedbackLeaderboard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/GameFeedbackLeaderboard.tsx', but '--jsx' is not set.
import { GameFeedbackLeaderboard } from '../../../../CommunityLeaderboards/GameFeedbackLeaderboard';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../../../UI/Layout';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../CommunityLeaderboards/CommunityLeaderboardsContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/CommunityLeaderboardsContext.tsx', but '--jsx' is not set.
import { CommunityLeaderboardsContext } from '../../../../CommunityLeaderboards/CommunityLeaderboardsContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

const styles = {
  leaderboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
} as const;

export const UserAndGameLeaderboards = () => {
  const {
    fetchCommunityLeaderboards,
    gameLeaderboards,
    userLeaderboards,
  } = React.useContext(CommunityLeaderboardsContext);

  React.useEffect(
    () => {
      fetchCommunityLeaderboards();
    },
    [fetchCommunityLeaderboards]
  );

  const { windowSize } = useResponsiveWindowSize();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout
      noColumnMargin
      forceMobileLayout={windowSize === 'medium'}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ ...styles.leaderboardContainer, flex: 1 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paper background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Daily</Trans>
            </Text>
          </Line>
        </Paper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noColumnMargin noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GameFeedbackLeaderboard
            gameLeaderboard={
              (gameLeaderboards &&
// @ts-expect-error - TS7006 - Parameter 'leaderboard' implicitly has an 'any' type.
                gameLeaderboards.find(leaderboard =>
                  leaderboard.name.startsWith('daily')
                )) ||
              null
            }
            displayEntriesCount={5}
          />
        </ResponsiveLineStackLayout>
      </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ ...styles.leaderboardContainer, flex: 2 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paper background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Weekly</Trans>
            </Text>
          </Line>
        </Paper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noColumnMargin noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UserFeedbackLeaderboard
            userLeaderboard={
              (userLeaderboards &&
// @ts-expect-error - TS7006 - Parameter 'leaderboard' implicitly has an 'any' type.
                userLeaderboards.find(leaderboard =>
                  leaderboard.name.startsWith('weekly')
                )) ||
              null
            }
            displayEntriesCount={5}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GameFeedbackLeaderboard
            gameLeaderboard={
              (gameLeaderboards &&
// @ts-expect-error - TS7006 - Parameter 'leaderboard' implicitly has an 'any' type.
                gameLeaderboards.find(leaderboard =>
                  leaderboard.name.startsWith('weekly')
                )) ||
              null
            }
            displayEntriesCount={5}
          />
        </ResponsiveLineStackLayout>
      </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ ...styles.leaderboardContainer, flex: 1 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paper background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Monthly</Trans>
            </Text>
          </Line>
        </Paper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noColumnMargin noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UserFeedbackLeaderboard
            userLeaderboard={
              (userLeaderboards &&
// @ts-expect-error - TS7006 - Parameter 'leaderboard' implicitly has an 'any' type.
                userLeaderboards.find(leaderboard =>
                  leaderboard.name.startsWith('monthly')
                )) ||
              null
            }
            displayEntriesCount={5}
          />
        </ResponsiveLineStackLayout>
      </div>
    </ResponsiveLineStackLayout>
  );
};
