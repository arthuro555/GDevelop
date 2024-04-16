import * as React from 'react';
import {
  InAppTutorialShortHeader,
  InAppTutorial,
} from '../Utils/GDevelopServices/InAppTutorial';

export type InAppTutorialState = {
  currentlyRunningInAppTutorial: InAppTutorial | null,
  startTutorial: (
    arg1: {
      tutorialId: string,
      initialStepIndex: number,
      initialProjectData: {
        [key: string]: string
      }
    },
  ) => Promise<void>,
  endTutorial: () => void,
  inAppTutorialShortHeaders: Array<InAppTutorialShortHeader> | null | undefined,
  getInAppTutorialShortHeader: (tutorialId: string) => InAppTutorialShortHeader | null | undefined,
  startStepIndex: number,
  startProjectData: {
    [key: string]: string
  },
  inAppTutorialsFetchingError: string | null,
  fetchInAppTutorials: () => Promise<void>
};

export const initialInAppTutorialState: InAppTutorialState = {
  currentlyRunningInAppTutorial: null,
  getInAppTutorialShortHeader: (tutorialId: string) => null,
  startTutorial: async () => {},
  endTutorial: () => {},
  inAppTutorialShortHeaders: null,
  startStepIndex: 0,
  startProjectData: {},
  inAppTutorialsFetchingError: null,
  fetchInAppTutorials: async () => {},
};

const InAppTutorialContext = React.createContext<InAppTutorialState>(initialInAppTutorialState);

export default InAppTutorialContext;
