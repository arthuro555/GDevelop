import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { AuthenticatedUser } from '../../../../Profile/AuthenticatedUserContext';
import { Subscription } from '../../../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../../../../Tutorial/TutorialContext';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import { SectionRow } from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../InAppTutorials/GuidedLessons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/GuidedLessons.tsx', but '--jsx' is not set.
import GuidedLessons from '../InAppTutorials/GuidedLessons';
// @ts-expect-error - TS6142 - Module '../LearnSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/index.tsx', but '--jsx' is not set.
import { formatTutorialToImageTileComponent } from '../LearnSection';
// @ts-expect-error - TS6142 - Module '../../../../UI/ImageTileRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ImageTileRow.tsx', but '--jsx' is not set.
import ImageTileRow from '../../../../UI/ImageTileRow';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Spacer } from '../../../../UI/Grid';
import { Tutorial } from '../../../../Utils/GDevelopServices/Tutorial';
import { SubscriptionPlanWithPricingSystems } from '../../../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../CardWidget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CardWidget.tsx', but '--jsx' is not set.
import { CardWidget } from '../CardWidget';
import Window from '../../../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../../UI/Layout';
import {
  GuidedLessonsRecommendation,
  PlanRecommendation,
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../../../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../../Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module './PlanRecommendationRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/PlanRecommendationRow.tsx', but '--jsx' is not set.
import PlanRecommendationRow from './PlanRecommendationRow';
// @ts-expect-error - TS6142 - Module './SurveyCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/SurveyCard.tsx', but '--jsx' is not set.
import { SurveyCard } from './SurveyCard';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../../../Promotions/PromotionsSlideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Promotions/PromotionsSlideshow.tsx', but '--jsx' is not set.
import PromotionsSlideshow from '../../../../Promotions/PromotionsSlideshow';

const styles = {
  textTutorialContent: {
    padding: 20,
    flex: 1,
    display: 'flex',
  },
} as const;

const useStyles = makeStyles({
  tile: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const getTextTutorialsColumnsFromWidth = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 1;
    case 'medium':
      return 2;
    case 'large':
      return 4;
    case 'xlarge':
      return 5;
    default:
      return 3;
  }
};
const getVideoTutorialsColumnsFromWidth = (
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
const getTutorialsLimitsFromWidth = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 5 : 3;
    case 'medium':
      return 3;
    case 'large':
      return 5;
    case 'xlarge':
      return 5;
    default:
      return 3;
  }
};

const isPlanRecommendationRelevant = (subscription: Subscription, planRecommendation: PlanRecommendation): boolean => {
  // Don't recommend plans to holders of education plan.
  if (subscription.planId === 'gdevelop_education') return false;

  const relevantPlans =
    subscription.planId === 'gdevelop_silver' ||
    subscription.planId === 'gdevelop_indie'
      ? ['gold', 'startup', 'business', 'education']
      : subscription.planId === 'gdevelop_gold' ||
        subscription.planId === 'gdevelop_pro'
      ? ['startup', 'business', 'education']
      : subscription.planId === 'gdevelop_startup'
      ? ['business']
      : [];
  return relevantPlans.includes(planRecommendation.id);
};

type TextTutorialsRowProps = {
  tutorials: Array<Tutorial>
};

const TextTutorialsRow = ({
  tutorials,
}: TextTutorialsRowProps) => {
  const classes = useStyles();
  const { isLandscape, windowSize } = useResponsiveWindowSize();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="section-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Read</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Text-based content directly from GDevelop’s site and Wiki.
          </Trans>
        </Text>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GridList
        cols={getTextTutorialsColumnsFromWidth(windowSize, isLandscape)}
        cellHeight="auto"
        spacing={10}
      >
        {tutorials.map(tutorial => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GridListTile key={tutorial.id} classes={{ tile: classes.tile }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CardWidget
              onClick={() => Window.openExternalURL(tutorial.link)}
              size="large"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={styles.textTutorialContent}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout expand justifyContent="center" useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin size="block-title">
                    {tutorial.title}
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin size="body" color="secondary">
                    {tutorial.description}
                  </Text>
                </ColumnStackLayout>
              </div>
            </CardWidget>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

type Props = {
  authenticatedUser: AuthenticatedUser,
  selectInAppTutorial: (tutorialId: string) => void,
  subscriptionPlansWithPricingSystems: SubscriptionPlanWithPricingSystems[] | null | undefined,
  onStartSurvey: null | (() => void),
  hasFilledSurveyAlready: boolean
};

const RecommendationList = ({
  authenticatedUser,
  selectInAppTutorial,
  subscriptionPlansWithPricingSystems,
  onStartSurvey,
  hasFilledSurveyAlready,
}: Props) => {
  const { recommendations, subscription, profile } = authenticatedUser;
  const { tutorials } = React.useContext(TutorialContext);
  const { getTutorialProgress } = React.useContext(PreferencesContext);

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (!recommendations) return <PlaceholderLoader />;

  const recommendedTutorials = tutorials
    ? recommendations
        .map(recommendation =>
          recommendation.type === 'gdevelop-tutorial'
// @ts-expect-error - TS7006 - Parameter 'tutorial' implicitly has an 'any' type.
            ? tutorials.find(tutorial => tutorial.id === recommendation.id)
            : null
        )
        .filter(Boolean)
    : [];

  const recommendedVideoTutorials = recommendedTutorials.filter(
    tutorial => tutorial.type === 'video'
  );
  const recommendedTextTutorials = recommendedTutorials.filter(
    tutorial => tutorial.type === 'text'
  );

  const guidedLessonsRecommendation: GuidedLessonsRecommendation | null | undefined = recommendations.find(
    recommendation => recommendation.type === 'guided-lessons'
  );
  const guidedLessonsIds = guidedLessonsRecommendation
    ? guidedLessonsRecommendation.lessonsIds
    : null;

  const planRecommendation: PlanRecommendation | null | undefined = recommendations.find(
    recommendation => recommendation.type === 'plan'
  );

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

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => {
        const items: Array<React.ReactElement<React.ComponentProps<(
          arg1: {
            children: Node,
            expand?: boolean
          },
        ) => any>>> = [];

        if (onStartSurvey && !hasFilledSurveyAlready)
          items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow key="start-survey">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SurveyCard
                onStartSurvey={onStartSurvey}
                hasFilledSurveyAlready={false}
              />
            </SectionRow>
          );

        if (guidedLessonsRecommendation) {
          const displayTextAfterGuidedLessons = guidedLessonsIds
            ? guidedLessonsIds
// @ts-expect-error - TS7006 - Parameter 'tutorialId' implicitly has an 'any' type.
                .map(tutorialId => getTutorialPartProgress({ tutorialId }))
// @ts-expect-error - TS7006 - Parameter 'progress' implicitly has an 'any' type.
                .every(progress => progress === 100)
            : false;

          items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow key="guided-lessons">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="section-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Build game mechanics</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <GuidedLessons
                selectInAppTutorial={selectInAppTutorial}
                lessonsIds={guidedLessonsIds}
              />
              {displayTextAfterGuidedLessons && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Congratulations on completing this selection of guided
                    lessons! Find all lessons in the Learn section.
                  </Trans>
                </Text>
              )}
            </SectionRow>
          );
        }
        if (recommendedVideoTutorials.length) {
          items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow key="videos">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ImageTileRow
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                title={<Trans>Get started with game creation</Trans>}
                margin="dense"
                items={recommendedVideoTutorials.map(tutorial =>
                  formatTutorialToImageTileComponent(i18n, tutorial)
                )}
                getColumnsFromWindowSize={getVideoTutorialsColumnsFromWidth}
                getLimitFromWindowSize={getTutorialsLimitsFromWidth}
              />
            </SectionRow>
          );
        }

        if (onStartSurvey && hasFilledSurveyAlready)
          items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow key="start-survey">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SurveyCard
                onStartSurvey={onStartSurvey}
                hasFilledSurveyAlready
              />
            </SectionRow>
          );

        items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SectionRow key="promotions">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="section-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Discover the ecosystem</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PromotionsSlideshow />
          </SectionRow>
        );

        if (recommendedTextTutorials.length) {
          items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionRow key="texts">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextTutorialsRow tutorials={recommendedTextTutorials} />
            </SectionRow>
          );
        }
        if (planRecommendation) {
          const shouldDisplayPlanRecommendation =
            profile &&
            !profile.isStudent &&
            (!subscription ||
              isPlanRecommendationRelevant(subscription, planRecommendation));
          if (
            shouldDisplayPlanRecommendation &&
            subscriptionPlansWithPricingSystems
          ) {
            items.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SectionRow key="plan">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <PlanRecommendationRow
                  recommendationPlanId={planRecommendation.id}
                  subscriptionPlansWithPricingSystems={
                    subscriptionPlansWithPricingSystems
                  }
                  i18n={i18n}
                />
              </SectionRow>
            );
          }
        }
        return items;
      }}
    </I18n>
  );
};

export default RecommendationList;
