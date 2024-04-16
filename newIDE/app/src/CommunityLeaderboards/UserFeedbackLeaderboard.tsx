import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import {
  UserLeaderboard,
  UserLeaderboardEntry,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
import { selectMessageByLocale } from '../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Annotation'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Annotation.js' implicitly has an 'any' type.
import Annotation from '../UI/CustomSvgIcons/Annotation';
// @ts-expect-error - TS6142 - Module '../UI/User/UserPublicProfileTextWithAvatar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileTextWithAvatar.tsx', but '--jsx' is not set.
import { UserPublicProfileTextWithAvatar } from '../UI/User/UserPublicProfileTextWithAvatar';

type Props = {
  userLeaderboard: UserLeaderboard | null,
  displayEntriesCount: number
};

const styles = {
  avatar: {
    width: 16,
    height: 16,
  },
  paper: {
    flex: 1,
  },
  entryRow: {
    borderBottom: '1px solid black',
  },
  rankColumn: {
    width: 30,
    textAlign: 'center',
  },
  playerColumn: {},
  scoreColumn: {
    width: 30,
    textAlign: 'center',
  },
} as const;

const loadingEntry: UserLeaderboardEntry = {
  userPublicProfile: null,
  count: null,
};

export const UserFeedbackLeaderboard = ({
  userLeaderboard,
  displayEntriesCount,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper background="medium" style={styles.paper}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title" align="center">
              {userLeaderboard
                ? selectMessageByLocale(
                    i18n,
                    userLeaderboard.displayNameByLocale
                  )
                : '-'}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <thead>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <tr>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <th style={styles.rankColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="body2" color="secondary">
                      #
                    </Text>
                  </th>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <th style={styles.playerColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="body2" color="secondary" align="left">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Player</Trans>
                    </Text>
                  </th>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <th style={styles.scoreColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Annotation />
                  </th>
                </tr>
              </thead>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <tbody>
                {(userLeaderboard
                  ? userLeaderboard.topUserCommentQualityRatings
                  : new Array(displayEntriesCount).fill(loadingEntry)
                )
                  .slice(0, displayEntriesCount)
// @ts-expect-error - TS7006 - Parameter 'entry' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
                  .map((entry, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <tr
                      key={index}
                      style={{
                        ...styles.entryRow,
                        borderColor: gdevelopTheme.toolbar.separatorColor,
                      }}
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <td style={styles.rankColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text>{index + 1}</Text>
                      </td>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <td style={styles.playerColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <UserPublicProfileTextWithAvatar
                          avatarSize={20}
                          user={entry.userPublicProfile}
                          expand
                        />
                      </td>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <td style={styles.scoreColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text>{entry.count ? entry.count : '-'}</Text>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </ColumnStackLayout>
        </Paper>
      )}
    </I18n>
  );
};
