import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../../UI/Grid';
import InAppTutorialContext from '../../../../InAppTutorial/InAppTutorialContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../CardWidget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CardWidget.tsx', but '--jsx' is not set.
import { LARGE_WIDGET_SIZE } from '../CardWidget';
// @ts-expect-error - TS6142 - Module './InAppTutorialPhaseCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/InAppTutorialPhaseCard.tsx', but '--jsx' is not set.
import InAppTutorialPhaseCard from './InAppTutorialPhaseCard';
// @ts-expect-error - TS6142 - Module '../../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../../UI/PlaceholderError';
import { FLING_GAME_IN_APP_TUTORIAL_ID } from '../../../../Utils/GDevelopServices/InAppTutorial';
// @ts-expect-error - TS6142 - Module '../../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../../Preferences/PreferencesContext';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Building'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Building.js' implicitly has an 'any' type.
import Building from './Icons/Building';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Unboxing'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Unboxing.js' implicitly has an 'any' type.
import Unboxing from './Icons/Unboxing';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Podium'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Podium.js' implicitly has an 'any' type.
import Podium from './Icons/Podium';

const getColumnsFromWindowSize = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 3 : 1;
    case 'medium':
    case 'large':
    case 'xlarge':
    default:
      return 3;
  }
};

const MAX_COLUMNS = getColumnsFromWindowSize('xlarge', true);
const MAX_SECTION_WIDTH = (LARGE_WIDGET_SIZE + 2 * 5) * MAX_COLUMNS; // widget size + 5 padding per side
const ITEMS_SPACING = 5;
const styles = {
  grid: {
    textAlign: 'center',
    // Avoid tiles taking too much space on large screens.
    maxWidth: MAX_SECTION_WIDTH,
    overflow: 'hidden',
    width: `calc(100% + ${2 * ITEMS_SPACING}px)`, // This is needed to compensate for the `margin: -5px` added by MUI related to spacing.
  },
  bannerContainer: {
    width: '100%',
    maxWidth: MAX_SECTION_WIDTH - 2 * ITEMS_SPACING,
  },
} as const;

type Props = {
  selectInAppTutorial: (tutorialId: string) => void
};

const FlingGame = ({
  selectInAppTutorial,
}: Props) => {
  const {
    inAppTutorialShortHeaders,
    inAppTutorialsFetchingError,
    fetchInAppTutorials,
    currentlyRunningInAppTutorial,
  } = React.useContext(InAppTutorialContext);
  const { getTutorialProgress } = React.useContext(PreferencesContext);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { windowSize, isLandscape } = useResponsiveWindowSize();

  const getTutorialPartProgress = ({
    tutorialId,
    part,
  }: {
    tutorialId: string,
    part: number
  }) => {
    const tutorialProgress = getTutorialProgress({
      tutorialId,
      userId: authenticatedUser.profile
        ? authenticatedUser.profile.id
        : undefined,
    });
    if (!tutorialProgress || !tutorialProgress.progress) return 0;
    return tutorialProgress.progress[part];
  };

  const isTutorialPartComplete = ({
    tutorialId,
    part,
  }: {
    tutorialId: string,
    part: number
  }) => {
    return (
      getTutorialPartProgress({
        tutorialId,
        part,
      }) === 100
    );
  };

  const flingInAppTutorialCards = [
    {
      key: 'create',
      title: t`Start your game`,
      description: t`Add your first characters to the scene and throw your first objects.`,
      keyPoints: [
        t`Game scene size`,
        t`Objects and characters`,
        t`Game Scenes`,
        t`Throwing physics`,
      ],
      durationInMinutes: 5,
      locked: false, // First phase is never locked
      // Phase is disabled if complete or if there's a running tutorial
      disabled:
        !!currentlyRunningInAppTutorial ||
        isTutorialPartComplete({
          tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
          part: 0,
        }),
      progress: getTutorialPartProgress({
        tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
        part: 0,
      }),
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Unboxing {...props} />,
    },
    {
      key: 'publish',
      title: t`Improve and publish your Game`,
      description: t`Add personality to your game and publish it online.`,
      keyPoints: [
        t`Game background`,
        t`In-game obstacles`,
        t`“You win” message`,
        t`Sharing online`,
      ],
      durationInMinutes: 10,
      // Second phase is locked if first phase is not complete
      locked: !isTutorialPartComplete({
        tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
        part: 0,
      }),
      // Phase is disabled if complete or if there's a running tutorial
      disabled:
        !!currentlyRunningInAppTutorial ||
        isTutorialPartComplete({
          tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
          part: 1,
        }),
      progress: getTutorialPartProgress({
        tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
        part: 1,
      }),
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Building {...props} />,
    },
    {
      key: 'leaderboards',
      title: t`Add leaderboards to your online Game`,
      description: t`Add player logins to your game and add a leaderboard.`,
      keyPoints: [
        t`Game personalisation`,
        t`“Start” screen`,
        t`Timers`,
        t`Leaderboards`,
      ],
      durationInMinutes: 15,
      // Third phase is locked if second phase is not complete
      locked: !isTutorialPartComplete({
        tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
        part: 1,
      }),
      // Phase is disabled if complete or if there's a running tutorial
      disabled:
        !!currentlyRunningInAppTutorial ||
        isTutorialPartComplete({
          tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
          part: 2,
        }),
      progress: getTutorialPartProgress({
        tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
        part: 2,
      }),
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Podium {...props} />,
    },
  ];

  const isFlingTutorialComplete =
    isTutorialPartComplete({
      tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
      part: 0,
    }) &&
    isTutorialPartComplete({
      tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
      part: 1,
    }) &&
    isTutorialPartComplete({
      tutorialId: FLING_GAME_IN_APP_TUTORIAL_ID,
      part: 2,
    });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.bannerContainer}>
        {inAppTutorialsFetchingError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={fetchInAppTutorials}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>An error occurred when downloading the tutorials.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Please check your internet connection or try again later.
            </Trans>
          </PlaceholderError>
        ) : inAppTutorialShortHeaders === null ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderLoader />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GridList
            cols={
              isFlingTutorialComplete
                ? 1
                : getColumnsFromWindowSize(windowSize, isLandscape)
            }
            style={styles.grid}
            cellHeight="auto"
            spacing={ITEMS_SPACING * 2}
          >
            {isFlingTutorialComplete ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GridListTile>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <InAppTutorialPhaseCard
                  title={t`Congratulations! You've finished this tutorial!`}
                  description={t`Find your finished game on the “Build” section. Or restart the tutorial by clicking on the card.`}
                  size="banner"
                  locked={false}
                  disabled={false}
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type.
                  renderImage={props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line justifyContent="space-around" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Unboxing {...props} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Building {...props} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Podium {...props} />
                    </Line>
                  )}
                  onClick={() =>
                    selectInAppTutorial(FLING_GAME_IN_APP_TUTORIAL_ID)
                  }
                />
              </GridListTile>
            ) : (
              flingInAppTutorialCards.map(item => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GridListTile key={item.key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InAppTutorialPhaseCard
                    {...item}
                    onClick={() =>
                      selectInAppTutorial(FLING_GAME_IN_APP_TUTORIAL_ID)
                    }
                  />
                </GridListTile>
              ))
            )}
          </GridList>
        )}
      </div>
    </Line>
  );
};

export default FlingGame;
