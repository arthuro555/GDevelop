import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import StartInAppTutorialDialog from '../../../MainFrame/EditorContainers/HomePage/InAppTutorials/StartInAppTutorialDialog';

import inAppTutorialDecorator from '../../InAppTutorialDecorator';

export default {
  title: 'In-app tutorial/StartInAppTutorialDialog',
  component: StartInAppTutorialDialog,
  decorators: [inAppTutorialDecorator, paperDecorator],
};

export const Default = () => {
  return (
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'notStarted'}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(scenario: "start" | "startOver" | "resume") => Promise<void>'.
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};

export const Opening = () => {
  return (
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'notStarted'}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(scenario: "start" | "startOver" | "resume") => Promise<void>'.
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening
    />
  );
};

export const WithTutorialAlreadyStarted = () => {
  return (
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'started'}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(scenario: "start" | "startOver" | "resume") => Promise<void>'.
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};
export const WithTutorialCompleted = () => {
  return (
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'complete'}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(scenario: "start" | "startOver" | "resume") => Promise<void>'.
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};
