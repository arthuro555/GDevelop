import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import {
  GameLeaderboard,
  GameLeaderboardEntry,
  getPublicGameUrl,
} from '../Utils/GDevelopServices/Game';
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
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skeleton from '@material-ui/lab/Skeleton';
import Window from '../Utils/Window';

type Props = {
  gameLeaderboard: GameLeaderboard | null,
  displayEntriesCount: number
};

const thumbnailWidth = 100;
const thumbnailHeight = 28;

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
  gameColumn: {},
  scoreColumn: {
    width: 30,
    textAlign: 'center',
  },
  gameThumbnailContainer: {
    width: thumbnailWidth,
    height: thumbnailHeight,
    display: 'inline-block',
    overflow: 'hidden',
    verticalAlign: 'middle',
    marginRight: 5,
  },
  gameThumbnail: {
    width: thumbnailWidth,
    height: thumbnailHeight,
    objectFit: 'cover',
  },
  fullWidthButtonSupportingEllipsisInATable: {
    justifyContent: 'flex-start',
    height: 32,
    // This is required for a text to have ellipsis in a table cell.
    width: 0,
    minWidth: '100%',
  },
} as const;

const loadingEntry: GameLeaderboardEntry = {
  publicGame: null,
  count: null,
};

export const GameFeedbackLeaderboard = ({
  gameLeaderboard,
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
              {gameLeaderboard
                ? selectMessageByLocale(
                    i18n,
                    gameLeaderboard.displayNameByLocale
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
                  <th style={styles.gameColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="body2" color="secondary" align="left">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Game</Trans>
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
                {(gameLeaderboard
                  ? gameLeaderboard.topGameCommentQualityRatings
                  : new Array(displayEntriesCount).fill(loadingEntry)
                )
                  .slice(0, displayEntriesCount)
                  .map((entry, index) => {
                    const publicGameUrl = getPublicGameUrl(entry.publicGame);
                    const title = entry.publicGame
                      ? entry.publicGame.gameName
                      : '';

                    return (
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
                        <td style={styles.gameColumn}>
                          {entry.publicGame ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <ButtonBase
                              onClick={
                                publicGameUrl
                                  ? () => Window.openExternalURL(publicGameUrl)
                                  : undefined
                              }
                              style={
                                styles.fullWidthButtonSupportingEllipsisInATable
                              }
                            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Text
                                style={textEllipsisStyle}
                                noMargin
                                tooltip={title}
                              >
                                {entry.publicGame &&
                                entry.publicGame.thumbnailUrl ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <div style={styles.gameThumbnailContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <img
                                      src={entry.publicGame.thumbnailUrl}
                                      style={styles.gameThumbnail}
                                      alt={title}
                                      title={title}
                                    />
                                  </div>
                                ) : null}
                                {title}
                              </Text>
                            </ButtonBase>
                          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Skeleton
                              variant="rect"
                              width={thumbnailWidth}
                              height={thumbnailHeight}
                            />
                          )}
                        </td>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <td style={styles.scoreColumn}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text>{entry.count ? entry.count : '-'}</Text>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </ColumnStackLayout>
        </Paper>
      )}
    </I18n>
  );
};
