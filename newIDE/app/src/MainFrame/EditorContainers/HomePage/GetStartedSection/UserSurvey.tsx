import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import questionnaire, {
  firstQuestion,
  QuestionData,
  AnswerData,
} from './Questionnaire';
// @ts-expect-error - TS6142 - Module './UserSurveyQuestion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/UserSurveyQuestion.tsx', but '--jsx' is not set.
import UserSurveyQuestion, { TitleAndSubtitle } from './UserSurveyQuestion';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { UserSurvey as UserSurveyType } from '../../../../Utils/GDevelopServices/User';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../../UI/Grid';
import ScrollView, {
  ScrollViewInterface,
// @ts-expect-error - TS6142 - Module '../../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
} from '../../../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
import { getRecentPersistedState, persistState } from './UserSurveyStorage';

const STEP_MAX_COUNT = 8;
const QUESTIONNAIRE_FINISHED_STEP = 'QUESTIONNAIRE_FINISHED';

export const isOnlyOneFreeAnswerPossible = (answers: Array<AnswerData>): boolean => answers.length === 1 && 'isFree' in answers[0];

const styles = {
  navigationDot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    margin: 5,
  },
  subTitle: { opacity: 0.6 },
} as const;

export type UserAnswers = Array<{
  questionId: string,
  answers: string[],
  userInput?: string
}>;

export const formatUserAnswers = (userAnswers: UserAnswers): UserSurveyType => {
  const userSurvey: Record<string, any> = {};
  userAnswers.forEach(({ questionId, answers, userInput }) => {
    // Remove `input` choice from answers since input content should be handled differently.
    let cleanedAnswers = answers.filter(answer => answer !== 'input');
    if (
      questionId === 'buildingKindOfProjects' ||
      questionId === 'learningKindOfProjects'
    ) {
      userSurvey.kindOfProjects = cleanedAnswers;
    } else {
      userSurvey[questionId] = cleanedAnswers;
    }
    const trimmedUserInput = userInput ? userInput.trim() : null;
    if (isOnlyOneFreeAnswerPossible(questionnaire[questionId].answers)) {
      userSurvey[questionId] = trimmedUserInput || '';
    } else if (trimmedUserInput) {
      userSurvey[`${questionId}Input`] = trimmedUserInput;
      if (questionId === firstQuestion) {
        delete userSurvey[questionId];
      }
    }
  });
  // We are confident the keys used in the questionnaire correspond
  // to the answers step names
  return userSurvey;
};

const NavigationStep = ({
  stepIndex,
}: {
  stepIndex: number
}) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="center">
      {new Array(STEP_MAX_COUNT).fill(0).map((_, index) => {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            key={index}
            style={{
              ...styles.navigationDot,
              backgroundColor:
                index === stepIndex
                  ? gdevelopTheme.text.color.primary
                  : gdevelopTheme.text.color.disabled,
            }}
          />
        );
      })}
    </Line>
  );
};

type DisplayProps = {
  userAnswers: UserAnswers,
  onSelectAnswer: (arg1: string, arg2: string) => void,
  goToNextQuestion: (arg1: QuestionData) => void,
  onClickSend: () => void,
  onChangeUserInputValue: (arg1: string, arg2: string) => void,
  questionId: string
};

const DesktopDisplay = ({
  userAnswers,
  onSelectAnswer,
  goToNextQuestion,
  onClickSend,
  onChangeUserInputValue,
  questionId,
}: DisplayProps) => {
  const questionData = questionnaire[questionId];
  const userSurveyQuestionRef = React.useRef<HTMLDivElement | null | undefined>(null);

  const scrollToLastQuestion = React.useCallback(() => {
    // If no timeout, the container does not scroll to the very bottom, even
    // if called by layout effect.
    setTimeout(() => {
      if (userSurveyQuestionRef.current) {
        userSurveyQuestionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  React.useEffect(
    () => {
      scrollToLastQuestion();
    },
    [questionId, scrollToLastQuestion]
  );

  const questionsPropsToRender = userAnswers.map((userAnswer, index) => {
    const relatedQuestionData = questionnaire[userAnswer.questionId];
    return {
      key: userAnswer.questionId,
      questionData: relatedQuestionData,
      selectedAnswers: userAnswer.answers,
// @ts-expect-error - TS7006 - Parameter 'answer' implicitly has an 'any' type.
      onSelectAnswer: answer => onSelectAnswer(userAnswer.questionId, answer),
      showNextButton:
        (relatedQuestionData.multi ||
          isOnlyOneFreeAnswerPossible(relatedQuestionData.answers)) &&
        index === userAnswers.length - 1 &&
        questionId === userAnswer.questionId,
      onClickNext: () => goToNextQuestion(relatedQuestionData),
      showQuestionText: true,
      onClickSend:
        userAnswer.questionId === firstQuestion ? onClickSend : undefined,
      userInputValue: userAnswer.userInput || '',
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
      onChangeUserInputValue: value =>
        onChangeUserInputValue(userAnswer.questionId, value),
    };
  });

  // When answering a multi answer question, the first click on an answer adds an item to
  // user answers. The question is then displayed through userAnswers and should not
  // be rendered a second time as a question.
  const shouldDisplayQuestion =
    questionData &&
    (!questionData.multi ||
      userAnswers[userAnswers.length - 1].questionId !== questionId) &&
    !(
      userAnswers[userAnswers.length - 1] &&
      userAnswers[userAnswers.length - 1].questionId === firstQuestion &&
      userAnswers[userAnswers.length - 1].answers[0] === 'input'
    ) &&
    !isOnlyOneFreeAnswerPossible(questionData.answers);

  if (shouldDisplayQuestion) {
    const questionData = questionnaire[questionId];
    questionsPropsToRender.push({
      key: questionId,
      questionData: questionData,
      selectedAnswers: [],
      onSelectAnswer: answer => onSelectAnswer(questionId, answer),
      onClickNext: () => goToNextQuestion(questionData),
// @ts-expect-error - TS2322 - Type 'boolean | undefined' is not assignable to type 'boolean'.
      showNextButton: questionData.multi,
      showQuestionText: true,
    });
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
      title={null} // Let the content handle the title.
      flexBody
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
        {questionsPropsToRender.map((props, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <UserSurveyQuestion
            {...props}
            ref={
              index === questionsPropsToRender.length - 1
                ? userSurveyQuestionRef
                : null
            }
          />
        ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div
          style={{
            // Used to make it possible to scroll to the next question so that the
            // question is (sometime almost) at the top of the screen.
            marginBottom: 400,
          }}
        />
      </ColumnStackLayout>
    </SectionContainer>
  );
};

type MobileDisplayProps = (DisplayProps) & {
  goToPreviousQuestion: () => void
};

const MobileDisplay = ({
  userAnswers,
  onSelectAnswer,
  goToNextQuestion,
  goToPreviousQuestion,
  onClickSend,
  questionId,
  onChangeUserInputValue,
}: MobileDisplayProps) => {
  const scrollViewRef = React.useRef<ScrollViewInterface | null | undefined>();

  React.useEffect(
    () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToPosition(0);
      }
    },
    [questionId]
  );

  const questionData = questionnaire[questionId];
  if (!questionData) return null;

  const userAnswer = userAnswers.find(
    answer => answer.questionId === questionId
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SectionContainer
          title={null} // Let the content handle the title.
          flexBody
          noScroll
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TitleAndSubtitle
                i18n={i18n}
                multi={questionData.multi}
                answers={questionData.answers}
                text={questionData.text}
                textAlign="center"
              />
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ScrollView ref={scrollViewRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <UserSurveyQuestion
                key={questionId}
                questionData={questionData}
                selectedAnswers={userAnswer ? userAnswer.answers : []}
// @ts-expect-error - TS7006 - Parameter 'answer' implicitly has an 'any' type.
                onSelectAnswer={answer => onSelectAnswer(questionId, answer)}
                onClickNext={() => goToNextQuestion(questionData)}
                showNextButton={false}
                showQuestionText={false}
                onClickSend={
                  questionId === firstQuestion ? onClickSend : undefined
                }
                userInputValue={
                  userAnswer ? userAnswer.userInput || '' : undefined
                }
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChangeUserInputValue={value =>
                  onChangeUserInputValue(questionId, value)
                }
              />
            </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout justifyContent="stretch" expand>
                {questionId !== firstQuestion && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <FlatButton
                    fullWidth
                    label={i18n._(t`Back`)}
                    onClick={goToPreviousQuestion}
                  />
                )}
                {(questionData.multi ||
                  isOnlyOneFreeAnswerPossible(questionData.answers)) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <RaisedButton
                    primary
                    fullWidth
                    label={i18n._(t`Next`)}
                    onClick={() => goToNextQuestion(questionData)}
                    disabled={
                      userAnswer
                        ? userAnswer.answers.length === 0 ||
                          (userAnswer.answers.length === 1 &&
                            userAnswer.answers[0] === 'input' &&
                            !userAnswer.userInput)
                        : true
                    }
                  />
                )}
              </LineStackLayout>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <NavigationStep
                stepIndex={
                  userAnswers.length +
                  (questionData.multi &&
                  userAnswers[userAnswers.length - 1].questionId === questionId
                    ? -1
                    : 0)
                }
              />
            </Column>
          </div>
        </SectionContainer>
      )}
    </I18n>
  );
};

type Props = {
  onCompleted: (arg1: UserSurveyType) => Promise<void>,
  onStarted: () => void
};

const UserSurvey = ({
  onCompleted,
  onStarted,
}: Props) => {
  const persistedState = getRecentPersistedState();
  const [questionId, setQuestionId] = React.useState<string>(persistedState ? persistedState.questionId : firstQuestion);
  const { isMobile } = useResponsiveWindowSize();
  const [userAnswers, setUserAnswers] = React.useState<UserAnswers>(persistedState ? persistedState.userAnswers : []);

  React.useEffect(
    () => {
      if (userAnswers.length > 0) {
        persistState({ userAnswers, questionId });
      }
    },
    // Store component state on each survey change.
    [questionId, userAnswers]
  );

  const hasUserStartedSurvey =
    userAnswers.length >= 2 ||
    (userAnswers.length === 1 &&
      userAnswers[0].questionId === firstQuestion &&
      userAnswers[0].answers.length === 1 &&
      userAnswers[0].answers[0] === 'input');
  React.useEffect(
    () => {
      if (hasUserStartedSurvey) {
        onStarted();
      }
    },
    [hasUserStartedSurvey, onStarted]
  );

  const goToNextQuestion = React.useCallback(
    (questionData: QuestionData, answerData?: AnswerData) => {
// @ts-expect-error - TS2339 - Property 'nextQuestion' does not exist on type 'AnswerData'.
      if (answerData && answerData.nextQuestion) {
// @ts-expect-error - TS2339 - Property 'nextQuestion' does not exist on type 'AnswerData'.
        setQuestionId(answerData.nextQuestion);
        return;
      }
      if (questionData.nextQuestion) {
        setQuestionId(questionData.nextQuestion);
        return;
      }
      if (questionData.getNextQuestion) {
        const nextQuestionId = questionData.getNextQuestion(userAnswers);
        if (nextQuestionId) {
          setQuestionId(nextQuestionId);
          return;
        }
      }
      setQuestionId(QUESTIONNAIRE_FINISHED_STEP);
    },
    [userAnswers]
  );

  const onChangeUserInputValue = React.useCallback(
    (questionId: string, value: string) => {
      const matchingUserAnswerIndex = userAnswers.findIndex(
        userAnswer => userAnswer.questionId === questionId
      );
      if (matchingUserAnswerIndex < 0) return;
      const newUserAnswers = [...userAnswers];
      newUserAnswers[matchingUserAnswerIndex].userInput = value;
      setUserAnswers(newUserAnswers);
    },
    [userAnswers]
  );

  React.useEffect(
    () => {
      // On each questionId change, check if new question only has one free answer possible.
      // If that's the case, automatically add an answer to user answers.
      const questionData = questionnaire[questionId];
      if (!questionData) return;
      const { answers } = questionData;
      if (
        isOnlyOneFreeAnswerPossible(answers) &&
        userAnswers.every(userAnswer => userAnswer.questionId !== questionId)
      ) {
        setUserAnswers([
          ...userAnswers,
          { questionId, userInput: '', answers: [answers[0].id] },
        ]);
      }
    },
    [questionId, userAnswers]
  );

  React.useEffect(
    () => {
      // Call onCompleted in effect instead of directly in goToNextQuestion
      // to avoid cases where userAnswers is not up to date and does not contain the
      // last selected answer.
      // This effect should be called only once when questionId is set to this specific
      // value. After that, the whole component should be unmounted and the effect would
      // not be called a second time.
      if (questionId === QUESTIONNAIRE_FINISHED_STEP) {
        onCompleted(formatUserAnswers(userAnswers));
      }
    },
    [questionId, onCompleted, userAnswers]
  );

  const onSelectAnswer = React.useCallback(
    (questionId: string, answerId: string) => {
      const questionData = questionnaire[questionId];
      const { multi } = questionData;
      const existingUserAnswerIndex = userAnswers.findIndex(
        userAnswer => userAnswer.questionId === questionId
      );
      if (existingUserAnswerIndex >= 0) {
        const isLastAnswer = existingUserAnswerIndex === userAnswers.length - 1;
        // User is coming back to a previous question
        if (multi) {
          // Add or remove answer to multi-choice question
          const newUserAnswers = [...userAnswers];
          const answerIndex = newUserAnswers[
            existingUserAnswerIndex
          ].answers.indexOf(answerId);
          if (answerIndex >= 0) {
            newUserAnswers[existingUserAnswerIndex].answers.splice(
              answerIndex,
              1
            );
          } else {
            newUserAnswers[existingUserAnswerIndex].answers.push(answerId);
          }
          setUserAnswers(newUserAnswers);
        } else {
          // Handle new answer in a previous question (that could be the same as before).
          const isAnsweringOtherToFirstQuestion =
            questionId === firstQuestion && answerId === 'input';
          const doesAnswerChangesFollowingQuestion =
            !questionData.nextQuestion || isAnsweringOtherToFirstQuestion;
          const newUserAnswers = [...userAnswers];
          newUserAnswers[existingUserAnswerIndex].answers = [answerId];
          if (doesAnswerChangesFollowingQuestion) {
            newUserAnswers.splice(
              existingUserAnswerIndex + 1,
              userAnswers.length - existingUserAnswerIndex
            );
          }
          setUserAnswers(newUserAnswers);

          if (isAnsweringOtherToFirstQuestion) {
            // The user is coming back to first question, they selected the "Other" answer
            // so they must fill it out now.
            return;
          }

          if (doesAnswerChangesFollowingQuestion) {
            const answerData = questionData.answers.find(
              answerData => answerData.id === answerId
            );
            goToNextQuestion(questionData, answerData);
          } else {
            // Display next question if:
            // - On desktop, it's the last question.
            //   If it's not the last question displayed, it's still displayed so no need
            //   to display it, the user can scroll to the next question
            // - On mobile to go forward in the survey (there is no next button in this case)
            if (isLastAnswer || isMobile) goToNextQuestion(questionData);
          }
        }
      } else {
        const shouldGoToNextQuestion = answerId !== 'input';
        setUserAnswers([...userAnswers, { questionId, answers: [answerId] }]);
        const answerData = questionData.answers.find(
          answerData => answerData.id === answerId
        );
        if (!multi && shouldGoToNextQuestion) {
          goToNextQuestion(questionData, answerData);
        }
      }
    },
    [userAnswers, goToNextQuestion, isMobile]
  );

  const goToPreviousQuestion = React.useCallback(
    () => {
      const currentAnswerIndex = userAnswers.findIndex(
        userAnswer => userAnswer.questionId === questionId
      );
      if (currentAnswerIndex === -1) {
        setQuestionId(userAnswers[userAnswers.length - 1].questionId);
      } else if (currentAnswerIndex >= 1) {
        setQuestionId(userAnswers[currentAnswerIndex - 1].questionId);
      }
    },
    [userAnswers, questionId]
  );

  const endQuestionnaireEarly = React.useCallback(() => {
    setQuestionId(QUESTIONNAIRE_FINISHED_STEP);
  }, []);

  if (isMobile) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <MobileDisplay
        questionId={questionId}
        goToNextQuestion={goToNextQuestion}
        goToPreviousQuestion={goToPreviousQuestion}
        onSelectAnswer={onSelectAnswer}
        userAnswers={userAnswers}
        onClickSend={endQuestionnaireEarly}
        onChangeUserInputValue={onChangeUserInputValue}
      />
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DesktopDisplay
      questionId={questionId}
      goToNextQuestion={goToNextQuestion}
      onSelectAnswer={onSelectAnswer}
      userAnswers={userAnswers}
      onClickSend={endQuestionnaireEarly}
      onChangeUserInputValue={onChangeUserInputValue}
    />
  );
};

export default UserSurvey;
