import React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS2305 - Module '"@storybook/react"' has no exported member 'StoryDecorator'.
import { StoryDecorator } from '@storybook/react';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';

// @ts-expect-error - TS7006 - Parameter 'Story' implicitly has an 'any' type. | TS7006 - Parameter 'context' implicitly has an 'any' type.
const inAppTutorialDecorator: StoryDecorator = (Story, context) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <InAppTutorialContext.Provider
      value={{
        currentlyRunningInAppTutorial: null,
        getInAppTutorialShortHeader: (tutorialId: string) => ({
          id: 'flingGame',
          availableLocales: ['en', 'fr-FR'],
          contentUrl: 'fakeContentUrl',
        }),
        startTutorial: async () => {
          action('Start tutorial')();
        },
        endTutorial: () => {
          action('End tutorial')();
        },
        inAppTutorialShortHeaders: [
          {
            id: 'flingGame',
            availableLocales: ['en', 'fr-FR'],
            contentUrl: 'fakeContentUrl',
          },
        ],
        startStepIndex: 0,
        startProjectData: {},
        inAppTutorialsFetchingError: null,
        fetchInAppTutorials: async () => {
          action('Fetch in app tutorials')();
        },
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Story />
    </InAppTutorialContext.Provider>
  );
};

export default inAppTutorialDecorator;
