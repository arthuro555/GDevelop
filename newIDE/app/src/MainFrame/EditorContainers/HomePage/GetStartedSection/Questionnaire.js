// @flow
import { t } from '@lingui/macro';
import { type MessageDescriptor } from '../../../../Utils/i18n/MessageDescriptor.flow';

export const firstQuestion = 'creationGoal';

export type FreeAnswerData = {|
  text: MessageDescriptor,
  id: string,
  imageSource?: string,
  isFree: true,
|};

export type ChoiceAnswerData = {|
  text: MessageDescriptor,
  id: string,
  nextQuestion?: string,
  imageSource: string,
|};

export type AnswerData = ChoiceAnswerData | FreeAnswerData;

export type QuestionData = {|
  text: MessageDescriptor,
  nextQuestion?: string,
  getNextQuestion?: any => string | null,
  multi?: boolean,
  answers: Array<AnswerData>,
|};

export type Questionnaire = {|
  [questionId: string]: QuestionData,
|};

const questionnaire: Questionnaire = {
  [firstQuestion]: {
    text: t`What is your goal with GDevelop?`,
    answers: [
      {
        text: t`I'm learning or teaching game development`,
        id: 'learningOrTeaching',
        nextQuestion: 'learningOrTeaching',
        imageSource: 'res/down.png',
      },
      {
        text: t`I'm building a video game or app`,
        id: 'building',
        nextQuestion: 'buildingKindOfProjects',
        imageSource: 'res/down.png',
      },
      {
        text: t`Other`,
        id: 'input',
        imageSource: 'res/down.png',
        isFree: true,
      },
    ],
  },
  learningOrTeaching: {
    text: t`Are you teaching or learning game development?`,
    answers: [
      {
        text: t`I am teaching game development`,
        id: 'teaching',
        nextQuestion: 'gameDevelopmentExperience',
        imageSource: 'res/down.png',
      },
      {
        text: t`I am learning game development`,
        id: 'learning',
        nextQuestion: 'learningHow',
        imageSource: 'res/down.png',
      },
    ],
  },
  learningHow: {
    text: t`How are you learning game dev?`,
    answers: [
      {
        text: t`Through a teacher`,
        id: 'withTeacher',
        imageSource: 'res/down.png',
      },
      {
        text: t`On my own`,
        id: 'alone',
        nextQuestion: 'learningKindOfProjects',
        imageSource: 'res/down.png',
      },
    ],
  },
  learningKindOfProjects: {
    text: t`What kind of projects do you want to build with GDevelop?`,
    answers: [
      {
        text: t`A game to publish`,
        id: 'gameToPublish',
        nextQuestion: 'gameDevelopmentExperience',
        imageSource: 'res/down.png',
      },
      {
        text: t`New interactive services for clients`,
        id: 'interactiveService',
        nextQuestion: 'gameDevelopmentExperience',
        imageSource: 'res/down.png',
      },
      {
        text: t`Games to learn or teach something`,
        id: 'seriousGame',
        nextQuestion: 'gameDevelopmentExperience',
        imageSource: 'res/down.png',
      },
      {
        text: t`Other`,
        id: 'other',
        nextQuestion: 'gameDevelopmentExperience',
        imageSource: 'res/down.png',
      },
    ],
  },
  buildingKindOfProjects: {
    text: t`What kind of projects do you want to build with GDevelop?`,
    nextQuestion: 'projectDescription',
    multi: true,
    answers: [
      {
        text: t`Video game`,
        id: 'videoGame',
        imageSource: 'res/down.png',
      },
      {
        text: t`Interactive content`,
        id: 'interactiveContent',
        imageSource: 'res/down.png',
      },
      {
        text: t`App or tool`,
        id: 'appOrTool',
        imageSource: 'res/down.png',
      },
      {
        text: t`Game for teaching or learning`,
        id: 'seriousGame',
        imageSource: 'res/down.png',
      },
    ],
  },
  projectDescription: {
    text: t`Would you like to describe your projects?`,
    nextQuestion: 'workingTeam',
    answers: [
      {
        text: t`What kind of projects are you building?`,
        id: 'input',
        isFree: true,
      },
    ],
  },
  workingTeam: {
    text: t`How are you working on your projects?`,
    nextQuestion: 'painPoints',
    answers: [
      {
        text: t`Completely alone`,
        id: 'alone',
        imageSource: 'res/down.png',
      },
      {
        text: t`With at least one other person`,
        id: 'onePlus',
        imageSource: 'res/down.png',
      },
      {
        text: t`With an established team of people during the whole project`,
        id: 'team',
        imageSource: 'res/down.png',
      },
    ],
  },
  painPoints: {
    text: t`Is there anything that you struggle with while working on your projects?`,
    multi: true,
    nextQuestion: 'targetDate',
    answers: [
      {
        text: t`Lack of Graphics & Animation`,
        id: 'lackGraphics',
        imageSource: 'res/down.png',
      },
      {
        text: t`Lack of Music & Sound`,
        id: 'lackSound',
        imageSource: 'res/down.png',
      },
      {
        text: t`Lack of Marketing & Publicity`,
        id: 'lackMarketing',
        imageSource: 'res/down.png',
      },
      {
        text: t`Implementing in-project monetization`,
        id: 'inAppMonetization',
        imageSource: 'res/down.png',
      },
      {
        text: t`Dealing with data integration from external sources`,
        id: 'externalIntegration',
        imageSource: 'res/down.png',
      },
      {
        text: t`Other`,
        id: 'input',
        imageSource: 'res/down.png',
        isFree: true,
      },
    ],
  },
  targetDate: {
    text: t`When do you plan to finish or release your projects?`,
    nextQuestion: 'gameDevelopmentExperience',
    answers: [
      {
        text: t`Less than a month`,
        id: '1MonthOrLess',
        imageSource: 'res/down.png',
      },
      {
        text: t`Around 1 or 2 months`,
        id: '1To2Months',
        imageSource: 'res/down.png',
      },
      {
        text: t`Around 3 to 5 months`,
        id: '3To5Months',
        imageSource: 'res/down.png',
      },
      {
        text: t`More than 6 months`,
        id: '6MonthsPlus',
        imageSource: 'res/down.png',
      },
      {
        text: t`In around a year`,
        id: '1Year',
        imageSource: 'res/down.png',
      },
      {
        text: t`I don’t have a specific deadline`,
        id: 'noDeadline',
        imageSource: 'res/down.png',
      },
    ],
  },
  gameDevelopmentExperience: {
    text: t`Do you have game development experience?`,
    getNextQuestion: (
      userAnswers: Array<{| questionId: string, answers: string[] |}>
    ) =>
      userAnswers.some(
        answer =>
          answer.questionId === 'targetDate' ||
          (answer.questionId === 'learningKindOfProjects' &&
            answer.answers.includes('interactiveService'))
      )
        ? 'targetPlatform'
        : null,
    answers: [
      {
        text: t`No experience at all`,
        id: 'none',
        imageSource: 'res/down.png',
      },
      {
        text: t`Some no-code experience`,
        id: 'someNoCode',
        imageSource: 'res/down.png',
      },
      {
        text: t`Some code experience`,
        id: 'someCode',
        imageSource: 'res/down.png',
      },
    ],
  },
  targetPlatform: {
    text: t`Where are you planing to publish your project(s)?`,
    multi: true,
    answers: [
      {
        text: t`On Steam and/or Epic Games`,
        id: 'steamEpic',
        imageSource: 'res/down.png',
      },
      {
        text: t`On Itch and/or Newgrounds`,
        id: 'itchNewgrounds',
        imageSource: 'res/down.png',
      },
      {
        text: t`On Poki and/or CrazyGames`,
        id: 'pokiCrazyGames',
        imageSource: 'res/down.png',
      },
      {
        text: t`Android mobile devices (Google Play, Amazon)`,
        id: 'androidApp',
        imageSource: 'res/down.png',
      },
      {
        text: t`Apple mobile devices (App Store)`,
        id: 'iosApp',
        imageSource: 'res/down.png',
      },
      {
        text: t`Sharing the final file with the client`,
        id: 'client',
        imageSource: 'res/down.png',
      },
      {
        text: t`Personal or company website`,
        id: 'personal',
        imageSource: 'res/down.png',
      },
      {
        text: t`Consoles`,
        id: 'console',
        imageSource: 'res/down.png',
      },
      {
        text: t`Other`,
        id: 'other',
        imageSource: 'res/down.png',
      },
    ],
  },
};

export default questionnaire;
