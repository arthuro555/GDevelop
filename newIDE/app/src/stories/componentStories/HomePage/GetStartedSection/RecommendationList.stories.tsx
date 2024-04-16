import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import {
  fakeAuthenticatedUserWithNoSubscription,
  subscriptionPlansWithPricingSystems,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../MainFrame/EditorContainers/HomePage/GetStartedSection/RecommendationList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/RecommendationList.tsx', but '--jsx' is not set.
import RecommendationList from '../../../../MainFrame/EditorContainers/HomePage/GetStartedSection/RecommendationList';
import PreferencesContext, {
  initialPreferences,
// @ts-expect-error - TS6142 - Module '../../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../../InAppTutorialDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/InAppTutorialDecorator.tsx', but '--jsx' is not set.
import inAppTutorialDecorator from '../../../InAppTutorialDecorator';
// @ts-expect-error - TS6142 - Module '../../../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialStateProvider } from '../../../../Tutorial/TutorialContext';

export default {
  title: 'HomePage/GetStartedSectionSection/RecommendationList',
  component: RecommendationList,
  decorators: [paperDecorator, inAppTutorialDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Provider value={initialPreferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TutorialStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RecommendationList
        authenticatedUser={fakeAuthenticatedUserWithNoSubscription}
        selectInAppTutorial={action('selectInAppTutorial')}
        subscriptionPlansWithPricingSystems={
          subscriptionPlansWithPricingSystems
        }
        onStartSurvey={null}
        hasFilledSurveyAlready={false}
      />
    </TutorialStateProvider>
  </PreferencesContext.Provider>
);

export const WithSurvey = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Provider value={initialPreferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TutorialStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RecommendationList
        authenticatedUser={fakeAuthenticatedUserWithNoSubscription}
        selectInAppTutorial={action('selectInAppTutorial')}
        subscriptionPlansWithPricingSystems={
          subscriptionPlansWithPricingSystems
        }
        onStartSurvey={action('onStartSurvey')}
        hasFilledSurveyAlready={false}
      />
    </TutorialStateProvider>
  </PreferencesContext.Provider>
);

export const WithSurveyAlreadyFilled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Provider value={initialPreferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TutorialStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RecommendationList
        authenticatedUser={fakeAuthenticatedUserWithNoSubscription}
        selectInAppTutorial={action('selectInAppTutorial')}
        subscriptionPlansWithPricingSystems={
          subscriptionPlansWithPricingSystems
        }
        onStartSurvey={action('onStartSurvey')}
        hasFilledSurveyAlready={true}
      />
    </TutorialStateProvider>
  </PreferencesContext.Provider>
);
