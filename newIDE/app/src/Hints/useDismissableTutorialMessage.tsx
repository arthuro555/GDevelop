import * as React from 'react';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../Tutorial/TutorialContext';
import getTutorial from './getTutorial';
// @ts-expect-error - TS6142 - Module './TutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/TutorialMessage.tsx', but '--jsx' is not set.
import TutorialMessage from './TutorialMessage';

/**
 * Returns the DismissableTutorialMessage component if the tutorial can be found,
 * otherwise returns null.
 * Useful to use when you need to know if the component is null before rendering,
 * to avoid spacing issues when the component is hidden.
 */
const useDismissableTutorialMessage = (tutorialId: string) => {
  const preferences = React.useContext(PreferencesContext);
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
  const { tutorials } = React.useContext(TutorialContext);
  const tutorial = getTutorial(preferences, tutorials, tutorialId);

  const DismissableTutorialMessage = React.useMemo(
    () => {
      if (!tutorial || currentlyRunningInAppTutorial) return null;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <TutorialMessage tutorial={tutorial} />;
    },
    [tutorial, currentlyRunningInAppTutorial]
  );

  return {
    DismissableTutorialMessage,
  };
};

export default useDismissableTutorialMessage;
