import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';
import { Tutorial } from '../../Utils/GDevelopServices/Tutorial';
import {
  initialPreferences,
  Preferences,
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../../Tutorial/TutorialContext';

const defaultTutorials = [
  {
    id: 'tutorial-1',
    title: 'Tutorial 1',
    description: 'Description 1',
    thumbnailUrl:
      'https://raw.githubusercontent.com/4ian/GDevelop/master/Core/docs/images/gdlogo.png',
    link: 'https://example.com/tutorial.html',
    type: 'video',
  },
  {
    id: 'tutorial-2',
    title: 'Tutorial 2',
    description: 'Description 2',
    thumbnailUrl:
      'https://raw.githubusercontent.com/4ian/GDevelop/master/Core/docs/images/gdlogo.png',
    link: 'https://example.com/tutorial.html',
    type: 'text',
  },
];

type Props = {
  tutorials?: Array<Tutorial> | null | undefined,
  preferences?: Preferences,
  tutorialId: string
};

const WrappedDismissableTutorialMessage = ({
// @ts-expect-error - TS2322 - Type '{ id: string; title: string; description: string; thumbnailUrl: string; link: string; type: string; }[]' is not assignable to type 'Tutorial[]'.
  tutorials = defaultTutorials,
  preferences = initialPreferences,
  tutorialId,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PreferencesContext.Provider value={preferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TutorialContext.Provider
      value={{
        tutorials,
        fetchTutorials: () => {},
        error: null,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DismissableTutorialMessage tutorialId={tutorialId} />
    </TutorialContext.Provider>
  </PreferencesContext.Provider>
);

export default {
  title: 'Tutorial/DismissableTutorialMessageWidget',
  component: WrappedDismissableTutorialMessage,
  decorators: [paperDecorator],
};

export const NoTutorialsLoaded = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage tutorials={null} tutorialId="tutorial-1" />
);

export const NoTutorialsFound = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage tutorials={[]} tutorialId="tutorial-1" />
);

export const HiddenTutorial = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage
    tutorialId="tutorial-1"
    preferences={{
      ...initialPreferences,
      values: {
        ...initialPreferences.values,
        hiddenTutorialHints: { 'tutorial-1': true },
      },
    }}
  />
);

export const TutorialNotInList = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage tutorialId="tutorial-3" />
);

export const DefaultVideo = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage tutorialId="tutorial-1" />
);

export const DefaultText = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedDismissableTutorialMessage tutorialId="tutorial-2" />
);
