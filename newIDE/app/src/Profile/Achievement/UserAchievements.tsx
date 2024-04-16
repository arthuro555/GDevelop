// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React, { useState, useEffect, useCallback } from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';

// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import {
  getAchievements,
  Badge,
  Achievement,
} from '../../Utils/GDevelopServices/Badge';

// @ts-expect-error - TS6142 - Module './AchievementList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Achievement/AchievementList.tsx', but '--jsx' is not set.
import AchievementList from './AchievementList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trophy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trophy.js' implicitly has an 'any' type.
import Trophy from '../../UI/CustomSvgIcons/Trophy';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';

type Props = {
  badges: Array<Badge> | null | undefined,
  displayUnclaimedAchievements: boolean,
  displayNotifications: boolean
};

const styles = {
  summary: {
    textAlign: 'center',
  },
  leftContainer: {
    flex: 1,
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 2,
  },
} as const;

const UserAchievements = ({
  badges,
  displayUnclaimedAchievements,
  displayNotifications,
}: Props) => {
  const [achievements, setAchievements] = useState<Array<Achievement> | null | undefined>(null);
  const [displayError, setDisplayError] = useState<boolean>(false);
  const { isMobile } = useResponsiveWindowSize();

  const fetchAchievements = useCallback(async () => {
    try {
      setDisplayError(false);
      const achievements = await getAchievements();
      setAchievements(achievements);
    } catch (err: any) {
      console.error(`Error when fetching achievements: ${err}`);
      setDisplayError(true);
    }
  }, []);

  useEffect(
    () => {
      fetchAchievements();
    },
    [fetchAchievements]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResponsiveLineStackLayout>
      {displayError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Unable to display your achievements for now.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Please check your internet connection or try again later.
            </Trans>
          </AlertMessage>
        </Line>
      ) : !!badges && !!achievements ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={styles.leftContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                ...styles.summary,
                padding: isMobile ? '0 20' : '20',
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trophy color="secondary" fontSize="large" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  {badges.length}/{achievements.length} achievements
                </Trans>
                {badges.length === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
                    {' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>(yet!)</Trans>
                  </>
                )}
              </Text>
            </div>
          </div>
          {badges.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.rightContainer}>
              {badges && achievements && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AchievementList
                  badges={badges}
                  achievements={achievements}
                  displayUnclaimedAchievements={displayUnclaimedAchievements}
                  displayNotifications={displayNotifications}
                />
              )}
            </div>
          )}
        </>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      )}
    </ResponsiveLineStackLayout>
  );
};

export default UserAchievements;
