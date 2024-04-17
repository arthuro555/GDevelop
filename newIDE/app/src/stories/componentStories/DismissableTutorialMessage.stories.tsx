import * as React from 'react';

import paperDecorator from '../PaperDecorator';

import DismissableTutorialMessage from '../../Hints/DismissableTutorialMessage';
import { Tutorial } from '../../Utils/GDevelopServices/Tutorial';
import {
  initialPreferences,
  Preferences,
} from '../../MainFrame/Preferences/PreferencesContext';

import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';

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
  tutorials?: Array<Tutorial> | null | undefined;
  preferences?: Preferences;
  tutorialId: string;
};

const WrappedDismissableTutorialMessage = ({
  // @ts-expect-error - TS2322 - Type '{ id: string; title: string; description: string; thumbnailUrl: string; link: string; type: string; }[]' is not assignable to type 'Tutorial[]'.
  tutorials = defaultTutorials,
// @ts-expect-error - TS2322 - Type '{ readonly values: { readonly language: "en"; readonly autoDownloadUpdates: true; readonly themeName: "GDevelop default Dark"; readonly codeEditorThemeName: "vs-dark"; readonly hiddenAlertMessages: {}; ... 34 more ...; readonly editorStateByProject: {}; }; ... 59 more ...; readonly setEditorStateForProject: (project...' is not assignable to type 'Preferences'.
  preferences = initialPreferences,
  tutorialId,
}: Props) => (
  <PreferencesContext.Provider value={preferences}>
    <TutorialContext.Provider
      value={{
        tutorials,
        fetchTutorials: () => {},
        error: null,
      }}
    >
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
  <WrappedDismissableTutorialMessage tutorials={null} tutorialId="tutorial-1" />
);

export const NoTutorialsFound = () => (
  <WrappedDismissableTutorialMessage tutorials={[]} tutorialId="tutorial-1" />
);

export const HiddenTutorial = () => (
  <WrappedDismissableTutorialMessage
    tutorialId="tutorial-1"
    preferences={{
      ...initialPreferences,
// @ts-expect-error - TS2322 - Type '{ hiddenTutorialHints: { 'tutorial-1': true; }; language: "en"; autoDownloadUpdates: true; themeName: "GDevelop default Dark"; codeEditorThemeName: "vs-dark"; hiddenAlertMessages: {}; hiddenAnnouncements: {}; ... 32 more ...; editorStateByProject: {}; }' is not assignable to type 'PreferencesValues'.
      values: {
        ...initialPreferences.values,
        hiddenTutorialHints: { 'tutorial-1': true },
      },
    }}
  />
);

export const TutorialNotInList = () => (
  <WrappedDismissableTutorialMessage tutorialId="tutorial-3" />
);

export const DefaultVideo = () => (
  <WrappedDismissableTutorialMessage tutorialId="tutorial-1" />
);

export const DefaultText = () => (
  <WrappedDismissableTutorialMessage tutorialId="tutorial-2" />
);
