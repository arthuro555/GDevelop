// @ts-expect-error - TS6142 - Module './UserSurvey' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/UserSurvey.tsx', but '--jsx' is not set.
import {UserAnswers} from './UserSurvey';
const localStoreUserSurveyKey = 'gd-user-survey';
const TEN_MINUTES = 10 * 60 * 1000;

export const getRecentPersistedState = () => {
  try {
    const serializedState = localStorage.getItem(localStoreUserSurveyKey);
    if (!serializedState) return null;
    const state = JSON.parse(serializedState);
    if (
      !state.lastModifiedAt ||
      Date.now() - state.lastModifiedAt > TEN_MINUTES
    ) {
      // After a delay, the user will have forgotten what they were doing
      // or the previous questions.
      return null;
    }
    return state;
  } catch (error: any) {
    console.log('An error occurred when reading local storage:', error);
    return null;
  }
};

export const persistState = (state: {
  userAnswers: UserAnswers,
  questionId: string
}) => {
  try {
    localStorage.setItem(
      localStoreUserSurveyKey,
      JSON.stringify({
        ...state,
        lastModifiedAt: Date.now(),
      })
    );
  } catch (error: any) {
    console.log(
      'An error occurred when storing user survey in local storage:',
      error
    );
  }
};

export const clearUserSurveyPersistedState = () => {
  try {
    localStorage.removeItem(localStoreUserSurveyKey);
  } catch (error: any) {
    console.log(
      'An error occurred when clearing user survey in local storage:',
      error
    );
  }
};

export const hasStartedUserSurvey = () => {
  try {
    return localStorage.hasOwnProperty(localStoreUserSurveyKey);
  } catch (error: any) {
    console.log(
      'An error occurred when checking for user survey persisted state in local storage:',
      error
    );
  }
};
