import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../MainFrame/EditorContainers/HomePage/InAppTutorials/StartInAppTutorialDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/InAppTutorials/StartInAppTutorialDialog.tsx', but '--jsx' is not set.
import StartInAppTutorialDialog from '../../../MainFrame/EditorContainers/HomePage/InAppTutorials/StartInAppTutorialDialog';
// @ts-expect-error - TS6142 - Module '../../InAppTutorialDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/InAppTutorialDecorator.tsx', but '--jsx' is not set.
import inAppTutorialDecorator from '../../InAppTutorialDecorator';

export default {
  title: 'In-app tutorial/StartInAppTutorialDialog',
  component: StartInAppTutorialDialog,
  decorators: [inAppTutorialDecorator, paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'notStarted'}
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};

export const Opening = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'notStarted'}
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening
    />
  );
};

export const WithTutorialAlreadyStarted = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'started'}
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};
export const WithTutorialCompleted = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StartInAppTutorialDialog
      open
      tutorialId="flingGame"
      tutorialCompletionStatus={'complete'}
      startTutorial={action('Start tutorial')}
      onClose={() => action('On close dialog')()}
      isProjectOpening={false}
    />
  );
};
