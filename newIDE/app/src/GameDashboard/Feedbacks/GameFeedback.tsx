import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';

// @ts-expect-error - TS6142 - Module './FeedbackCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/FeedbackCard.tsx', but '--jsx' is not set.
import FeedbackCard from './FeedbackCard';

import {
  shortenUuidForDisplay,
  listComments,
  Comment,
  updateComment,
} from '../../Utils/GDevelopServices/Play';
import { Game } from '../../Utils/GDevelopServices/Game';
import { getBuilds, Build } from '../../Utils/GDevelopServices/Build';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module './FeedbackAverageCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/FeedbackAverageCard.tsx', but '--jsx' is not set.
import FeedbackAverageCard from './FeedbackAverageCard';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Options'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Options.js' implicitly has an 'any' type.
import Options from '../../UI/CustomSvgIcons/Options';
import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../UI/Menu/ContextMenu';
import { MenuItemTemplate } from '../../UI/Menu/Menu.flow';
import { showErrorBox } from '../../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';

const styles = {
  // Make select field width not dependent on build names (name is truncated).
  selectFieldContainer: { minWidth: 200, maxWidth: 350, width: '100%' },
} as const;

type Props = {
  authenticatedUser: AuthenticatedUser,
  game: Game,
  i18n: I18nType
};

const RETRIEVED_COMMENT_TYPE = 'FEEDBACK';
const filterUnprocessedComments = (comments: Array<Comment>) => {
  return comments.filter((comment: Comment) => !comment.processedAt);
};

const pushOrCreateKey = (
  key: string,
  value: Comment,
  object: {
    [key: string]: Array<Comment>
  },
): {
  [key: string]: Array<Comment>
} => {
  if (!object[key]) {
    object[key] = [value];
  } else {
    object[key].push(value);
  }
  return object;
};

const groupFeedbacks = (
  i18n: I18nType,
  feedbacks: Array<Comment>,
  {
    build,
    date,
  }: {
    build: boolean,
    date: boolean
  },
): {
  [buildIdOrDate: string]: Array<Comment>
} => {
  const feedbacksByBuild = feedbacks.reduce<Record<string, any>>((acc, feedback) => {
    if (build) {
      if (!feedback.buildId) {
        return pushOrCreateKey('game-only', feedback, acc);
      } else {
        return pushOrCreateKey(feedback.buildId, feedback, acc);
      }
    } else {
      const dateKey = i18n.date(feedback.createdAt, {
        month: 'long',
        year: 'numeric',
      });
      return pushOrCreateKey(dateKey, feedback, acc);
    }
  }, {});
  return feedbacksByBuild;
};

const getDisplayedFeedbacks = (
  i18n: I18nType,
  feedbacks: Array<Comment> | null | undefined,
  showUnprocessed: boolean,
  sortByDate: boolean,
  filter: string,
): {
  [buildIdOrDate: string]: Array<Comment>
} | null | undefined => {
  if (!feedbacks) return null;
  let filteredFeedbacksByBuild = feedbacks;
  if (filter === 'game-only') {
    filteredFeedbacksByBuild = feedbacks.filter(feedback => !feedback.buildId);
  } else if (filter) {
    filteredFeedbacksByBuild = feedbacks.filter(
      feedback => feedback.buildId === filter
    );
  }

  const filteredFeedbacksByBuildAndUnprocessed = showUnprocessed
    ? filterUnprocessedComments(filteredFeedbacksByBuild)
    : filteredFeedbacksByBuild;

  return sortByDate
    ? groupFeedbacks(i18n, filteredFeedbacksByBuildAndUnprocessed, {
        build: false,
        date: true,
      })
    : groupFeedbacks(i18n, filteredFeedbacksByBuildAndUnprocessed, {
        build: true,
        date: false,
      });
};

const GameFeedback = ({
  i18n,
  authenticatedUser,
  game,
}: Props) => {
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);
  const { getAuthorizationHeader, profile } = authenticatedUser;
  const [showProcessed, setShowProcessed] = React.useState(false);
  const [sortByDate, setSortByDate] = React.useState(true);
  const [feedbacks, setFeedbacks] = React.useState<Array<Comment> | null | undefined>(null);
  const [buildsByIds, setBuildsByIds] = React.useState<{
    [id: string]: Build
  } | null | undefined>(null);
  const [filter, setFilter] = React.useState<string>('');
  const [isErrored, setIsErrored] = React.useState(false);
  const [isMarkingAllAsProcessed, setIsMarkingAllAsProcessed] = React.useState(
    false
  );

  const displayedFeedbacks = getDisplayedFeedbacks(
    i18n,
    feedbacks,
    showProcessed,
    sortByDate,
    filter
  );

  const displayedFeedbacksArray: Comment[] = displayedFeedbacks
    ? // $FlowFixMe - Flow doesn't understand that we're flattening the array.
      Object.values(displayedFeedbacks)
        .filter(Boolean)
        .flat()
    : [];

  const getBuildNameOption = (buildId: string) => {
    const shortenedUuid = shortenUuidForDisplay(buildId);
    if (!buildsByIds) return shortenedUuid;

    const build = buildsByIds[buildId];

    const name = build.name;
    return name
      ? `${name.substring(0, 15)}${
          name.length >= 15 ? '...' : ''
        } (${shortenedUuid})`
      : shortenedUuid;
  };

  const getBuildNameTitle = (groupKey: string) => {
    if (groupKey === 'game-only') return '';
    const shortenedUuid = shortenUuidForDisplay(groupKey);
    if (!buildsByIds) return shortenedUuid;

    const build = buildsByIds[groupKey];
    if (!build)
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
          {`${shortenedUuid} `}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>(deleted)</Trans>
        </>
      );
    return build.name ? `${build.name} (${shortenedUuid})` : shortenedUuid;
  };

  const loadFeedbacksAndBuilds = React.useCallback(
    async () => {
      setIsErrored(false);
      const { getAuthorizationHeader, profile } = authenticatedUser;
      if (!profile) {
        setIsErrored(true);
        return;
      }
      try {
        const [feedbacks, builds] = await Promise.all([
          listComments(getAuthorizationHeader, profile.id, {
            gameId: game.id,
            type: RETRIEVED_COMMENT_TYPE,
          }),
          getBuilds(getAuthorizationHeader, profile.id, game.id),
        ]);
        setFeedbacks(feedbacks);
        const buildsByIds = builds.reduce<Record<string, any>>((acc, build) => {
          acc[build.id] = build;
          return acc;
        }, {});
        setBuildsByIds(buildsByIds);
      } catch {
        setIsErrored(true);
      }
    },
    [authenticatedUser, game]
  );

  const onCommentUpdated = (updatedComment: Comment) => {
    if (!feedbacks) return;
    setFeedbacks((previousFeedbacks?: Array<Comment> | null) => {
      if (!previousFeedbacks) return previousFeedbacks;
      const newFeedbacks = [...previousFeedbacks];
      const updatedFeedbackIndex = newFeedbacks.findIndex(
        feedback => feedback.id === updatedComment.id
      );
      if (updatedFeedbackIndex === -1) return;
      newFeedbacks[updatedFeedbackIndex] = updatedComment;
      return newFeedbacks;
    });
  };

  const getBuildPropertiesForComment = (comment: Comment) => {
    if (!comment.buildId) return undefined;
    if (!buildsByIds) return { id: comment.buildId };
    const build = buildsByIds[comment.buildId];
    if (!build) return { id: comment.buildId, isDeleted: true };
    return {
      id: build.id,
      name: build.name,
      isDeleted: false,
    };
  };

  React.useEffect(
    () => {
      loadFeedbacksAndBuilds();
    },
    [loadFeedbacksAndBuilds]
  );

  const openOptionsContextMenu = (event: MouseEvent) => {
    if (contextMenu.current) {
      contextMenu.current.open(event.clientX, event.clientY);
    }
  };

  const markAllCommentsAsProcessed = async (i18n: I18nType) => {
    if (!profile || isMarkingAllAsProcessed) return;
    try {
      setIsMarkingAllAsProcessed(true);
      await Promise.all(
        displayedFeedbacksArray
          .filter(comment => !comment.processedAt)
          .map(comment =>
            updateComment(getAuthorizationHeader, profile.id, {
              gameId: comment.gameId,
              commentId: comment.id,
              processed: true,
            })
          )
      );
      // Reload the feedbacks
      loadFeedbacksAndBuilds();
    } catch (error: any) {
      console.error(`Unable to update one of the comments: `, error);
      showErrorBox({
        message:
          i18n._(t`Unable to mark one of the feedback as read.`) +
          ' ' +
          i18n._(t`Verify your internet connection or try again later.`),
        rawError: error,
        errorId: 'all-feedback-card-set-processed-error',
      });
    } finally {
      setIsMarkingAllAsProcessed(false);
    }
  };

  const buildOptionsContextMenu = (i18n: I18nType): Array<MenuItemTemplate> => [
    {
      label: i18n._(t`Sort by most recent`),
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => (() => Promise<void>) | null | undefined'.
      click: () => setSortByDate(!sortByDate),
      checked: sortByDate,
      type: 'checkbox',
    },
    {
      label: i18n._(t`Show unread feedback only`),
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => (() => Promise<void>) | null | undefined'.
      click: () => setShowProcessed(!showProcessed),
      checked: showProcessed,
      type: 'checkbox',
    },
    { type: 'separator' },
    {
      label: i18n._(t`Mark all as solved`),
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type '() => (() => Promise<void>) | null | undefined'.
      click: () => markAllCommentsAsProcessed(i18n),
    },
  ];

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
        {!authenticatedUser.authenticated && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>You need to login first to see your game feedbacks.</Trans>
          </EmptyMessage>
        )}
        {authenticatedUser.authenticated &&
          !displayedFeedbacks &&
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          !isErrored && <PlaceholderLoader />}
        {authenticatedUser.authenticated && isErrored && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={loadFeedbacksAndBuilds}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              An error occurred while retrieving feedbacks for this game.
            </Trans>
          </PlaceholderError>
        )}
        {authenticatedUser.authenticated && displayedFeedbacks && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      This is all the feedback received on {game.gameName}{' '}
                      coming from gd.games.
                    </Trans>
                  </BackgroundText>
                </LineStackLayout>
              </Column>
              {buildsByIds && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div style={styles.selectFieldContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectField
                        fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        floatingLabelText={<Trans>Show</Trans>}
                        value={filter}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                        onChange={(e, i, value) => {
                          setFilter(value);
                        }}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          key={'all'}
                          value={''}
                          label={t`All builds`}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SelectOption
                          key={'game-only'}
                          value={'game-only'}
                          label={t`On game page only`}
                        />
                        {Object.keys(buildsByIds).map(buildId => {
                          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <SelectOption
                              key={buildId}
                              value={buildId}
                              label={getBuildNameOption(buildId)}
                            />
                          );
                        })}
                      </SelectField>
                    </div>
                  </Line>
                </Column>
              )}
            </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout expand noMargin>
              {!!feedbacks && feedbacks.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FeedbackAverageCard feedbacks={feedbacks} />
              )}
            </ColumnStackLayout>
            {displayedFeedbacksArray.length === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
                {showProcessed ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <LineStackLayout
                    alignItems="center"
                    justifyContent="center"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        You don't have any unread feedback for this game.
                      </Trans>
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <FlatButton
                      onClick={() => setShowProcessed(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Show all feedbacks</Trans>}
                    />
                  </LineStackLayout>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>You don't have any feedback for this game.</Trans>
                  </Text>
                )}
              </>
            )}
            {displayedFeedbacksArray.length !== 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout expand noMargin>
                {Object.keys(displayedFeedbacks).map((key, index) => {
                  const title = sortByDate ? key : getBuildNameTitle(key);
                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ColumnStackLayout key={key} noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line
                        justifyContent="space-between"
                        alignItems="center"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text size="block-title">
                            {title}
                            {title ? ' - ' : ' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>
                              {displayedFeedbacks[key].length} feedback cards
                            </Trans>
                          </Text>
                        </Column>
                        {index === 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Column justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <IconButton
                              disabled={isMarkingAllAsProcessed}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                              onClick={event => openOptionsContextMenu(event)}
                            >
                              {!isMarkingAllAsProcessed ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <Options fontSize="small" />
                              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <CircularProgress size={20} />
                              )}
                            </IconButton>
                          </Column>
                        )}
                      </Line>
                      {displayedFeedbacks[key].map(
                        (comment: Comment, index: number) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <FeedbackCard
                            key={comment.id}
                            comment={comment}
                            buildProperties={getBuildPropertiesForComment(
                              comment
                            )}
                            authenticatedUser={authenticatedUser}
                            onCommentUpdated={onCommentUpdated}
                          />
                        )
                      )}
                    </ColumnStackLayout>
                  );
                })}
              </ColumnStackLayout>
            )}
          </Column>
        )}
      </Line>
    </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ContextMenu
      ref={contextMenu}
      buildMenuTemplate={buildOptionsContextMenu}
    />
  </>;
};

export default GameFeedback;
