import { Tutorial } from '../Utils/GDevelopServices/Tutorial';

import { Preferences } from '../MainFrame/Preferences/PreferencesContext';

/**
 * Returns a tutorial if it can be found, otherwise returns null.
 */
const getTutorial = (
  preferences: Preferences,
  tutorials: Array<Tutorial> | null | undefined,
  tutorialId: string
) => {
  if (!tutorials) return null; // Loading or errored, do not display the tutorial.

  const { values } = preferences;
  if (values.hiddenTutorialHints[tutorialId]) return null;
  const tutorial: Tutorial | null | undefined = tutorials.find(
    (tutorial) => tutorial.id === tutorialId
  );
  if (!tutorial) {
    console.warn(`Tutorial with id ${tutorialId} not found`);
    return null;
  }

  return tutorial;
};

export default getTutorial;
