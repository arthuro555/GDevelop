import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../../PaperDecorator';
import {
  fakeAuthenticatedUserWithNoSubscription,
  subscriptionPlansWithPricingSystems,
} from '../../../../fixtures/GDevelopServicesTestData';

import RecommendationList from '../../../../MainFrame/EditorContainers/HomePage/GetStartedSection/RecommendationList';
import PreferencesContext, {
  initialPreferences,
} from '../../../../MainFrame/Preferences/PreferencesContext';

import inAppTutorialDecorator from '../../../InAppTutorialDecorator';

import { TutorialStateProvider } from '../../../../Tutorial/TutorialContext';

export default {
  title: 'HomePage/GetStartedSectionSection/RecommendationList',
  component: RecommendationList,
  decorators: [paperDecorator, inAppTutorialDecorator],
};

export const Default = () => (
  // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Provider value={initialPreferences}>
    <TutorialStateProvider>
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
    <TutorialStateProvider>
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
    <TutorialStateProvider>
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
