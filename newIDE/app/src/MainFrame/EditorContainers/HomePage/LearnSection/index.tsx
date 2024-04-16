// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../HomePageMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenu.tsx', but '--jsx' is not set.
import { HomeTab } from '../HomePageMenu';
import {
  TutorialCategory,
  Tutorial,
} from '../../../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS6142 - Module './MainPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/MainPage.tsx', but '--jsx' is not set.
import MainPage from './MainPage';
// @ts-expect-error - TS6142 - Module './TutorialsCategoryPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/TutorialsCategoryPage.tsx', but '--jsx' is not set.
import TutorialsCategoryPage from './TutorialsCategoryPage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../../../../Tutorial/TutorialContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../../UI/PlaceholderLoader';
import { sendTutorialOpened } from '../../../../Utils/Analytics/EventSender';
import Window from '../../../../Utils/Window';
import { secondsToMinutesAndSeconds } from '../../../../Utils/DateDisplay';
// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileGrid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileGrid.tsx', but '--jsx' is not set.
import { ImageTileComponent } from '../../../../UI/ImageTileGrid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
import { selectMessageByLocale } from '../../../../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';

export const TUTORIAL_CATEGORY_TEXTS = {
  'full-game': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Entire games</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>Make complete games step by step</Trans>,
  },
  'game-mechanic': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Specific game mechanics</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        Find how to implement the most common game mechanics and more
      </Trans>
    ),
  },
  'official-beginner': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Beginner course</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>Learn the fundamental principles of GDevelop</Trans>,
  },
  'official-intermediate': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Intermediate course</Trans>,
    description: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>Learn all the game-building mechanics of GDevelop</Trans>
    ),
  },
  'official-advanced': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>Advanced course</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>The icing on the cake</Trans>,
  },
} as const;

export const formatTutorialToImageTileComponent = (i18n: I18nType, tutorial: Tutorial): ImageTileComponent => ({
  title: selectMessageByLocale(i18n, tutorial.titleByLocale) || tutorial.title,
  description:
    selectMessageByLocale(i18n, tutorial.descriptionByLocale) ||
    tutorial.description,
  onClick: () => {
    sendTutorialOpened(tutorial.id);
    Window.openExternalURL(
      selectMessageByLocale(i18n, tutorial.linkByLocale) || tutorial.link
    );
  },
  imageUrl:
    selectMessageByLocale(i18n, tutorial.thumbnailUrlByLocale) ||
    tutorial.thumbnailUrl,
  overlayText: tutorial.duration
    ? secondsToMinutesAndSeconds(tutorial.duration)
    : '\u{1F4D8}',
  overlayTextPosition: 'bottomRight',
});

const styles = {
  paper: {
    flex: 1,
    display: 'flex',
  },
} as const;

type Props = {
  onOpenExampleStore: () => void,
  onTabChange: (tab: HomeTab) => void,
  selectInAppTutorial: (tutorialId: string) => void
};

const LearnSection = ({
  onOpenExampleStore,
  onTabChange,
  selectInAppTutorial,
}: Props) => {
  const {
    tutorials,
    fetchTutorials,
    error: tutorialLoadingError,
  } = React.useContext(TutorialContext);

  React.useEffect(
    () => {
      fetchTutorials();
    },
    [fetchTutorials]
  );

  const [
    selectedCategory,
    setSelectedCategory,
  ] = React.useState<TutorialCategory | null | undefined>(null);

  if (tutorialLoadingError)
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Paper square style={styles.paper} background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PlaceholderError onRetry={fetchTutorials}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Can't load the tutorials. Verify your internet connection or retry
            later.
          </Trans>
        </PlaceholderError>
      </Paper>
    );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (!tutorials) return <PlaceholderLoader />;

  return !selectedCategory ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MainPage
      onOpenExampleStore={onOpenExampleStore}
      onTabChange={onTabChange}
      onSelectCategory={setSelectedCategory}
      tutorials={tutorials}
      selectInAppTutorial={selectInAppTutorial}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TutorialsCategoryPage
      onBack={() => setSelectedCategory(null)}
      category={selectedCategory}
      tutorials={tutorials}
    />
  );
};

const LearnSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Learn section</Trans>}
    scope="start-page-learn"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LearnSection {...props} />
  </ErrorBoundary>
);

export default LearnSectionWithErrorBoundary;
