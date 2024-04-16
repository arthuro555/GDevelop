// @ts-expect-error - TS6142 - Module './UserSurvey' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/UserSurvey.tsx', but '--jsx' is not set.
import {formatUserAnswers} from './UserSurvey';

// @ts-expect-error - TS2582 - Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
describe('formatUserAnswers', () => {
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('it sets projectDescription as string even if user answer is empty', () => {
    const userAnswers = [
      {
        questionId: 'projectDescription',
        userInput: '',
        answers: ['input'],
      },
    ];

    expect(formatUserAnswers(userAnswers)).toEqual({
      projectDescription: '',
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('it removes creationGoal answer when choosing other at first question', () => {
    const userAnswers = [
      {
        questionId: 'creationGoal',
        answers: ['input'],
        userInput: 'Bonjour  ',
      },
    ];

    expect(formatUserAnswers(userAnswers)).toEqual({
      creationGoalInput: 'Bonjour',
    });
  });
// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('it does not set input if value is spaces only', () => {
    const userAnswers = [
      {
        questionId: 'painPoints',
        answers: ['lackGraphics', 'lackSound', 'input'],
        userInput: '    ',
      },
    ];

    expect(formatUserAnswers(userAnswers)).toEqual({
      painPoints: ['lackGraphics', 'lackSound'],
    });
  });

// @ts-expect-error - TS2582 - Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.
  test('it formats a complex user answers', () => {
    const userAnswers = [
      {
        questionId: 'creationGoal',
        answers: ['building'],
      },
      {
        questionId: 'buildingKindOfProjects',
        answers: ['videoGame', 'interactiveContent'],
      },
      {
        questionId: 'projectDescription',
        userInput: 'Best video game',
        answers: ['input'],
      },
      {
        questionId: 'workingTeam',
        answers: ['onePlus'],
      },
      {
        questionId: 'painPoints',
        answers: ['lackGraphics', 'lackSound', 'input'],
        userInput: 'Better ideas',
      },
      {
        questionId: 'targetDate',
        answers: ['1MonthOrLess'],
      },
      {
        questionId: 'gameDevelopmentExperience',
        answers: ['someNoCode'],
      },
      {
        questionId: 'targetPlatform',
        answers: ['client', 'androidApp', 'console'],
      },
    ];
    const expectedUSerSurvey = {
      creationGoal: ['building'],
      kindOfProjects: ['videoGame', 'interactiveContent'],
      projectDescription: 'Best video game',
      workingTeam: ['onePlus'],
      painPoints: ['lackGraphics', 'lackSound'],
      painPointsInput: 'Better ideas',
      targetDate: ['1MonthOrLess'],
      gameDevelopmentExperience: ['someNoCode'],
      targetPlatform: ['client', 'androidApp', 'console'],
    } as const;
    expect(formatUserAnswers(userAnswers)).toEqual(expectedUSerSurvey);
  });
});
