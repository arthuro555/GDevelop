import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { parseISO } from 'date-fns';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Lock'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lock.js' implicitly has an 'any' type.
import Lock from '../../UI/CustomSvgIcons/Lock';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/DotBadge' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DotBadge.tsx', but '--jsx' is not set.
import DotBadge from '../../UI/DotBadge';

import {
  compareAchievements,
  Badge as BadgeType,
  Achievement,
  AchievementWithBadgeData,
} from '../../Utils/GDevelopServices/Badge';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';

type Props = {
  badges: Array<BadgeType>,
  achievements: Array<Achievement>,
  displayUnclaimedAchievements: boolean,
  displayNotifications: boolean
};

const styles = {
  achievementsContainer: {
    maxHeight: 250,
  },
  lockedAchievement: {
    opacity: 0.4,
  },
  unlockedAchievement: {},
} as const;

const AchievementList = ({
  badges,
  achievements,
  displayUnclaimedAchievements,
  displayNotifications,
}: Props) => {
  const [
    achievementsWithBadgeData,
    setAchievementsWithBadgeData,
  ] = React.useState<Array<AchievementWithBadgeData>>([]);

  React.useEffect(
    () => {
      const badgeByAchievementId = badges.reduce<Record<string, any>>((acc, badge) => {
        acc[badge.achievementId] = badge;
        return acc;
      }, {});

      const achievementsWithBadgeData = achievements.reduce<Array<any>>((acc, achievement) => {
        const badge = badgeByAchievementId[achievement.id];
        const hasBadge = !!badge;
        if (hasBadge || (!hasBadge && displayUnclaimedAchievements)) {
          acc.push({
            ...achievement,
            seen: hasBadge ? badge.seen : undefined,
            unlockedAt: hasBadge ? parseISO(badge.unlockedAt) : null,
          });
        }

        return acc;
      }, []);

      achievementsWithBadgeData.sort(compareAchievements);

      setAchievementsWithBadgeData(achievementsWithBadgeData);
    },
    [badges, achievements, displayUnclaimedAchievements]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ScrollView style={styles.achievementsContainer}>
            {achievementsWithBadgeData.map(achievementWithBadgeData => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line
                key={achievementWithBadgeData.id}
                justifyContent="space-between"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column justifyContent="center" alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <DotBadge
                    invisible={
                      !(
                        displayNotifications &&
                        achievementWithBadgeData.seen === false
                      )
                    }
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text
                      noMargin
                      size="sub-title"
                      style={
                        achievementWithBadgeData.unlockedAt
                          ? styles.unlockedAchievement
                          : styles.lockedAchievement
                      }
                    >
                      {achievementWithBadgeData.name}
                    </Text>
                  </DotBadge>
                  {displayUnclaimedAchievements && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Text
                      noMargin
                      style={
                        achievementWithBadgeData.unlockedAt
                          ? styles.unlockedAchievement
                          : styles.lockedAchievement
                      }
                      size="body2"
                    >
                      {achievementWithBadgeData.description}
                    </Text>
                  )}
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column>
                  {achievementWithBadgeData.unlockedAt ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Text>
                      {i18n.date(achievementWithBadgeData.unlockedAt)}
                    </Text>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Lock style={styles.lockedAchievement} />
                  )}
                </Column>
              </Line>
            ))}
          </ScrollView>
        )}
      </I18n>
    </Column>
  );
};

export default AchievementList;
