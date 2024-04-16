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
import { Column, Line } from '../../../../UI/Grid';
import InAppTutorialContext from '../../../../InAppTutorial/InAppTutorialContext';
// @ts-expect-error - TS6142 - Module '../CardWidget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CardWidget.tsx', but '--jsx' is not set.
import { LARGE_WIDGET_SIZE } from '../CardWidget';
// @ts-expect-error - TS6142 - Module './InAppTutorialPhaseCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/InAppTutorialPhaseCard.tsx', but '--jsx' is not set.
import InAppTutorialPhaseCard from './InAppTutorialPhaseCard';
// @ts-expect-error - TS6142 - Module '../../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../../UI/PlaceholderError';
import {
  PLINKO_MULTIPLIER_IN_APP_TUTORIAL_ID,
  TIMER_IN_APP_TUTORIAL_ID,
  CAMERA_PARALLAX_IN_APP_TUTORIAL_ID,
  HEALTH_BAR_IN_APP_TUTORIAL_ID,
  JOYSTICK_IN_APP_TUTORIAL_ID,
  OBJECT_3D_IN_APP_TUTORIAL_ID,
  guidedLessonsIds,
} from '../../../../Utils/GDevelopServices/InAppTutorial';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/MultiplierScore'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/MultiplierScore.js' implicitly has an 'any' type.
import MultiplierScore from './Icons/MultiplierScore';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Parallax'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Parallax.js' implicitly has an 'any' type.
import Parallax from './Icons/Parallax';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/HealthBar'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/HealthBar.js' implicitly has an 'any' type.
import HealthBar from './Icons/HealthBar';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Joystick'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Joystick.js' implicitly has an 'any' type.
import Joystick from './Icons/Joystick';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Timer'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Timer.js' implicitly has an 'any' type.
import Timer from './Icons/Timer';
import { useOnlineStatus } from '../../../../Utils/OnlineStatus';
// @ts-expect-error - TS6142 - Module '../../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../../Preferences/PreferencesContext';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/ColoredLinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColoredLinearProgress.tsx', but '--jsx' is not set.
import ColoredLinearProgress from '../../../../UI/ColoredLinearProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Trophy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trophy.js' implicitly has an 'any' type.
import Trophy from '../../../../UI/CustomSvgIcons/Trophy';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Object3D'. '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/Icons/Object3D.js' implicitly has an 'any' type.
import Object3D from './Icons/Object3D';

const getColumnsFromWindowSize = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 1;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'xlarge':
      return 6;
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
  selectInAppTutorial: (tutorialId: string) => void,
  /** To use to restrict the lessons that are displayed. */
  lessonsIds?: Array<string> | null | undefined
};

const GuidedLessons = ({
  selectInAppTutorial,
  lessonsIds,
}: Props) => {
  const isOnline = useOnlineStatus();
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
  }: {
    tutorialId: string
  }) => {
    const tutorialProgress = getTutorialProgress({
      tutorialId,
      userId: authenticatedUser.profile
        ? authenticatedUser.profile.id
        : undefined,
    });
    if (!tutorialProgress || !tutorialProgress.progress) return 0;
    return tutorialProgress.progress[0]; // guided lessons only have one part.
  };

  const displayedGuidedLessonsIds = lessonsIds || guidedLessonsIds;

// @ts-expect-error - TS2349 - This expression is not callable.
  const lessonsCompleted = displayedGuidedLessonsIds.reduce(
// @ts-expect-error - TS7006 - Parameter 'acc' implicitly has an 'any' type. | TS7006 - Parameter 'tutorialId' implicitly has an 'any' type.
    (acc, tutorialId) => {
      const tutorialProgress = getTutorialPartProgress({ tutorialId }) || 0;
      return tutorialProgress === 100 ? acc + 1 : acc;
    },
    0
  );
  const lessonsProgress = Math.round(
    (lessonsCompleted / displayedGuidedLessonsIds.length) * 100
  );

  const guidedLessonCards = [
    {
      id: JOYSTICK_IN_APP_TUTORIAL_ID,
      title: t`Joystick controls`,
      description: t`Learn how to add a joystick to control the player.`,
      durationInMinutes: 1,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Joystick {...props} />,
    },
    {
      id: HEALTH_BAR_IN_APP_TUTORIAL_ID,
      title: t`Health bar`,
      description: t`Learn how to display the health of a player on the foreground.`,
      durationInMinutes: 2,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <HealthBar {...props} />,
    },
    {
      id: OBJECT_3D_IN_APP_TUTORIAL_ID,
      title: t`3D box`,
      description: t`Learn how to add a 3D box to your game.`,
      durationInMinutes: 2,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Object3D {...props} />,
    },
    {
      id: CAMERA_PARALLAX_IN_APP_TUTORIAL_ID,
      title: t`Background`,
      description: t`Learn how to create a parallax background as well as a camera that follows the player.`,
      durationInMinutes: 2,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Parallax {...props} />,
    },
    {
      id: TIMER_IN_APP_TUTORIAL_ID,
      title: t`Timer`,
      description: t`Learn how to use a timer to count a score.`,
      durationInMinutes: 2,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <Timer {...props} />,
    },
    {
      id: PLINKO_MULTIPLIER_IN_APP_TUTORIAL_ID,
      title: t`Score multiplier`,
      description: t`Learn how to manipulate a score by adding collectibles.`,
      durationInMinutes: 3,
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      renderImage: props => <MultiplierScore {...props} />,
    },
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type '"timer" | "healthBar" | "plinkoMultiplier" | "cameraParallax" | "joystick" | "object3d"'.
  ].filter(item => displayedGuidedLessonsIds.includes(item.id));

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
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout alignItems="center">
                {lessonsProgress !== 100 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Text displayInlineAsSpan noMargin size="body2">
                    {lessonsProgress}%
                  </Text>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trophy />
                )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColoredLinearProgress value={lessonsProgress} />
              </LineStackLayout>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <GridList
              cols={getColumnsFromWindowSize(windowSize, isLandscape)}
              style={styles.grid}
              cellHeight="auto"
              spacing={ITEMS_SPACING * 2}
            >
              {guidedLessonCards.map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GridListTile key={item.id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InAppTutorialPhaseCard
                    title={item.title}
                    description={item.description}
                    durationInMinutes={item.durationInMinutes}
                    renderImage={item.renderImage}
                    progress={getTutorialPartProgress({ tutorialId: item.id })}
                    onClick={() => selectInAppTutorial(item.id)}
                    // Phase is disabled if there's a running tutorial or if offline,
                    // because we cannot fetch the tutorial.
                    disabled={!!currentlyRunningInAppTutorial || !isOnline}
                    loading={!inAppTutorialShortHeaders}
                  />
                </GridListTile>
              ))}
            </GridList>
          </ColumnStackLayout>
        )}
      </div>
    </Line>
  );
};

export default GuidedLessons;
