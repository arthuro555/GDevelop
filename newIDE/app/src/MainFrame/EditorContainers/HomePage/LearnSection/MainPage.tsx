import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
import Window from '../../../../Utils/Window';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import TranslateIcon from '@material-ui/icons/Translate';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../HomePageMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenu.tsx', but '--jsx' is not set.
import { HomeTab } from '../HomePageMenu';
import {
  TutorialCategory,
  Tutorial,
} from '../../../../Utils/GDevelopServices/Tutorial';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../CardWidget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CardWidget.tsx', but '--jsx' is not set.
import { CardWidget, SMALL_WIDGET_SIZE } from '../CardWidget';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileRow.tsx', but '--jsx' is not set.
import ImageTileRow from '../../../../UI/ImageTileRow';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/index.tsx', but '--jsx' is not set.
import { formatTutorialToImageTileComponent, TUTORIAL_CATEGORY_TEXTS } from '.';
// @ts-expect-error - TS6142 - Module '../InAppTutorials/GuidedLessons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/GuidedLessons.tsx', but '--jsx' is not set.
import GuidedLessons from '../InAppTutorials/GuidedLessons';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../../../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Upload'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Upload.js' implicitly has an 'any' type.
import Upload from '../../../../UI/CustomSvgIcons/Upload';
// @ts-expect-error - TS6142 - Module '../../../../UI/WikiSearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/WikiSearchBar.tsx', but '--jsx' is not set.
import WikiSearchBar from '../../../../UI/WikiSearchBar';
// @ts-expect-error - TS6142 - Module '../InAppTutorials/FlingGame' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/FlingGame.tsx', but '--jsx' is not set.
import FlingGame from '../InAppTutorials/FlingGame';

const useStyles = makeStyles({
  tile: {
    width: '100%',
  },
});

const getHelpItemsColumnsFromWidth = (
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
      return 5;
    default:
      return 3;
  }
};

const getTutorialsColumnsFromWidth = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 5 : 1;
    case 'medium':
      return 3;
    case 'large':
      return 5;
    case 'xlarge':
      return 6;
    default:
      return 3;
  }
};

const HELP_ITEMS_MAX_COLUMNS = getHelpItemsColumnsFromWidth('xlarge', true);
const styles = {
  grid: {
    textAlign: 'center',
    maxWidth: (SMALL_WIDGET_SIZE + 2 * 5) * HELP_ITEMS_MAX_COLUMNS, // Avoid tiles taking too much space on large screens.
  },
  helpItem: {
    padding: 10,
    flex: 1,
    display: 'flex',
  },
} as const;

type TutorialsRowProps = {
  tutorials: Tutorial[],
  category: TutorialCategory,
  onSelectCategory: (arg1: TutorialCategory) => void
};

export const TutorialsRow = ({
  tutorials,
  category,
  onSelectCategory,
}: TutorialsRowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ImageTileRow
        title={TUTORIAL_CATEGORY_TEXTS[category].title}
        description={TUTORIAL_CATEGORY_TEXTS[category].description}
        items={tutorials
          .filter(tutorial => tutorial.category === category)
          .map(tutorial => formatTutorialToImageTileComponent(i18n, tutorial))}
        onShowAll={() => onSelectCategory(category)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        showAllIcon={<ChevronArrowRight fontSize="small" />}
        getColumnsFromWindowSize={getTutorialsColumnsFromWidth}
        getLimitFromWindowSize={getTutorialsColumnsFromWidth}
      />
    )}
  </I18n>
);

type Props = {
  onOpenExampleStore: () => void,
  onTabChange: (tab: HomeTab) => void,
  onSelectCategory: (arg1?: TutorialCategory | null | undefined) => void,
  tutorials: Array<Tutorial>,
  selectInAppTutorial: (tutorialId: string) => void
};

const MainPage = ({
  onOpenExampleStore,
  onTabChange,
  onSelectCategory,
  tutorials,
  selectInAppTutorial,
}: Props) => {
  const classes = useStyles();
  const {
    windowSize,
    isMobile,
    isLandscape,
    isMediumScreen,
  } = useResponsiveWindowSize();
  const helpItems: {
    title: React.ReactNode,
    description: React.ReactNode,
    action: () => void,
    disabled?: boolean
  }[] = [
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title: <Trans>Documentation</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      description: <Trans>Find the complete documentation on everything</Trans>,
      action: () =>
        Window.openExternalURL('https://wiki.gdevelop.io/gdevelop5/'),
    },
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title: <Trans>Examples</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      description: <Trans>Have look at existing games from the inside</Trans>,
      action: onOpenExampleStore,
    },
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title: <Trans>Community</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      description: <Trans>Ask your questions to the community</Trans>,
      action: () => onTabChange('community'),
    },
  ].filter(Boolean);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer title={<Trans>Help and guides</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <WikiSearchBar />
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            cols={getHelpItemsColumnsFromWidth(windowSize, isLandscape)}
            style={styles.grid}
            cellHeight="auto"
            spacing={10}
          >
            {helpItems.map((helpItem, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GridListTile key={index} classes={{ tile: classes.tile }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CardWidget
                  onClick={helpItem.action}
                  key={index}
                  size="large"
                  disabled={helpItem.disabled}
                  useDefaultDisabledStyle
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.helpItem}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColumnStackLayout
                      expand
                      justifyContent="center"
                      useFullHeight
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text noMargin size="block-title">
                        {helpItem.title}
                      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text noMargin size="body" color="secondary">
                        {helpItem.description}
                      </Text>
                    </ColumnStackLayout>
                  </div>
                </CardWidget>
              </GridListTile>
            ))}
          </GridList>
        </Line>
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Guided lessons</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GuidedLessons selectInAppTutorial={selectInAppTutorial} />
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Courses</Trans>
            </Text>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Learn everything about GDevelop from the ground up</Trans>
            </Text>
          </Line>
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TutorialsRow
            category="official-beginner"
            onSelectCategory={onSelectCategory}
            tutorials={tutorials}
          />
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TutorialsRow
            category="official-intermediate"
            onSelectCategory={onSelectCategory}
            tutorials={tutorials}
          />
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TutorialsRow
            category="official-advanced"
            onSelectCategory={onSelectCategory}
            tutorials={tutorials}
          />
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Create and Publish a Fling game</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body" color="secondary" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              3-part tutorial to creating and publishing a game from scratch.
            </Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlingGame selectInAppTutorial={selectInAppTutorial} />
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LineStackLayout
            justifyContent="space-between"
            alignItems="center"
            noMargin
            expand
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Guides and tutorials</Trans>
              </Text>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin>
              {!isMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  onClick={() => {
                    Window.openExternalURL(
                      'https://github.com/GDevelopApp/GDevelop-examples/issues/new/choose'
                    );
                  }}
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<Upload />}
                  label={
                    isMediumScreen ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Submit an example</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Submit your project as an example</Trans>
                    )
                  }
                />
              )}
              {!isMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  onClick={() => {
                    Window.openExternalURL(
                      'https://airtable.com/shrv295oHlsuS69el'
                    );
                  }}
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  leftIcon={<TranslateIcon />}
                  label={
                    isMediumScreen ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Submit a tutorial</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Submit a tutorial translated in your language
                      </Trans>
                    )
                  }
                />
              )}
            </LineStackLayout>
          </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Learn by doing</Trans>
            </Text>
          </Line>
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TutorialsRow
            category="full-game"
            onSelectCategory={onSelectCategory}
            tutorials={tutorials}
          />
        </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TutorialsRow
            category="game-mechanic"
            onSelectCategory={onSelectCategory}
            tutorials={tutorials}
          />
        </SectionRow>
      </>
    </SectionContainer>
  );
};

export default MainPage;
