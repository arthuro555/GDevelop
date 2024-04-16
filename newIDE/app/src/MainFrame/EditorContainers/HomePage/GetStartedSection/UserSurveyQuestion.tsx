import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  createStyles,
  darken,
  lighten,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';

import { AnswerData, QuestionData } from './Questionnaire';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../../../../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module './UserSurvey' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/UserSurvey.tsx', but '--jsx' is not set.
import { isOnlyOneFreeAnswerPossible } from './UserSurvey';
import { MessageDescriptor } from '../../../../Utils/i18n/MessageDescriptor.flow';

const getColumnsFromWindowSize = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 3 : 1;
    case 'medium':
      return 2;
    case 'large':
      return 3;
    case 'xlarge':
    default:
      return 4;
  }
};

const useStylesForAnswer = (isSelected?: boolean) =>
  makeStyles(theme =>
    createStyles({
      root: {
        '&:hover': {
          filter: isSelected
            ? undefined
            : theme.palette.type === 'dark'
            ? 'brightness(120%)'
            : 'brightness(85%)',
        },
      },
    })
  )();

export const TitleAndSubtitle = ({
  i18n,
  text,
  multi,
  answers,
  textAlign,
}: {
  i18n: I18nType,
  text: MessageDescriptor,
  multi: boolean | null | undefined,
  answers: AnswerData[],
  textAlign: 'center' | 'left'
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text size="block-title" align={textAlign} noMargin>
      {i18n._(text)}
    </Text>
    {multi ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Text style={styles.subTitle} align={textAlign} noMargin>
        {i18n._(t`You can select more than one.`)}
      </Text>
    ) : isOnlyOneFreeAnswerPossible(answers) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Text style={styles.subTitle} align={textAlign} noMargin>
        {i18n._(
          t`The more descriptive you are, the better we can match the content we’ll recommend.`
        )}
      </Text>
    ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Spacer />
  </ColumnStackLayout>
);

const styles = {
  answerButton: {
    border: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflow: 'hidden',
    marginBottom: 30,
  },
  answerButtonBackground: { width: '100%', height: '100%' },
  answerCoverImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    aspectRatio: '292 / 103',
  },
  answerCheckboxAnchor: { position: 'relative' },
  answerCheckboxContainer: {
    position: 'absolute',
    left: 5,
    top: 'calc(50% - 9px)',
  },
  answerTextContainer: { marginLeft: 25, marginRight: 25 },
  freeAnswerContent: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  freeAnswerInputOutline: {
    border: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    padding: 8,
  },
  subTitle: { opacity: 0.6 },
} as const;

type FreeAnswerProps = {
  answerData: AnswerData,
  onSelect: (arg1: string) => void,
  selected: boolean,
  i18n: I18nType,
  showCheckbox: boolean,
  onClickSend?: (arg1: string) => void,
  value: string,
  onChange: (arg1: string) => void
};

const FreeAnswer = ({
  answerData,
  i18n,
  onSelect,
  selected,
  showCheckbox,
  onClickSend,
  value,
  onChange,
}: FreeAnswerProps) => {
  const { text, imageSource, id } = answerData;
  const [errorText, setErrorText] = React.useState<React.ReactNode>(null);
  const muiTheme = useTheme();
  const borderColor = (muiTheme.palette.type === 'dark' ? darken : lighten)(
    muiTheme.palette.text.primary,
    selected ? 0 : 0.7
  );
  const classes = useStylesForAnswer(selected);

  const clickSend = onClickSend
    ? () => {
        setErrorText(null);
        const cleanedInputValue = value.trim();
        if (!cleanedInputValue) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          setErrorText(<Trans>Please explain your use of GDevelop.</Trans>);
          return;
        }
        onClickSend(cleanedInputValue);
      }
    : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      style={{
        ...styles.answerButton,
        borderColor,
      }}
      classes={classes}
      onClick={e => {
        if (e.nativeEvent && e.nativeEvent.x === 0 && e.nativeEvent.y === 0) {
          // Material UI buttons are clicked when focused and space key is pressed.
          // Here, it's an issue since the input is inside the button and each key press
          // in the input is interpreted as a click.
          // Even if it's a key press, a click event is simulated, and it's hard to
          // discriminate true pointer events and click via space key press.
          // It is supposed that if the coordinates of the event are at 0;0, it's
          // because it comes from a key press.
          return;
        }
        onSelect(id);
      }}
      disableRipple={selected}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper
        square={false}
        background="medium"
        style={styles.answerButtonBackground}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.freeAnswerContent}>
          {selected || !imageSource ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title">{i18n._(text)}</Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center" useFullHeight expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div
                    style={{
                      ...styles.freeAnswerInputOutline,
                      borderColor: muiTheme.palette.text.disabled,
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TextField
                      multiline
                      fullWidth
                      errorText={errorText}
                      rows={5}
                      rowsMax={5}
                      maxLength={200}
                      style={{ fontSize: 14 }}
                      underlineShow={false}
                      margin="none"
                      translatableHintText={t`Tell us more!...`}
                      type="text"
                      value={value}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                      onChange={(_, newValue) => onChange(newValue)}
                      autoFocus="desktop"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                      onClick={e => e.stopPropagation()}
                    />
                  </div>
                  {clickSend && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <RaisedButton
                      primary
                      label={i18n._(t`Send`)}
                      fullWidth
                      onClick={clickSend}
                      disabled={!value}
                    />
                  )}
                </ColumnStackLayout>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
            </>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <img
                src={imageSource}
                style={styles.answerCoverImage}
                alt={`Other`}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent={showCheckbox ? 'flex-start' : 'center'}>
                {showCheckbox ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div style={styles.answerCheckboxAnchor}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div style={styles.answerCheckboxContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <InlineCheckbox checked={selected} paddingSize="small" />
                    </div>
                  </div>
                ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column justifyContent="center" alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.answerTextContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>{i18n._(text)}</Text>
                  </div>
                </Column>
              </Line>
            </>
          )}
        </div>
      </Paper>
    </ButtonBase>
  );
};

type AnswerProps = {
  answerData: AnswerData,
  onSelect: (arg1: string) => void,
  selected: boolean,
  i18n: I18nType,
  showCheckbox: boolean
};

const Answer = ({
  answerData,
  i18n,
  onSelect,
  selected,
  showCheckbox,
}: AnswerProps) => {
  const { imageSource, text, id } = answerData;
  const muiTheme = useTheme();
  const borderColor = (muiTheme.palette.type === 'dark' ? darken : lighten)(
    muiTheme.palette.text.primary,
    selected ? 0 : 0.7
  );
  const classes = useStylesForAnswer();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      style={{
        ...styles.answerButton,
        borderColor,
      }}
      classes={classes}
      onClick={() => onSelect(id)}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper
        square={false}
        background="medium"
        style={styles.answerButtonBackground}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <img
          src={imageSource}
          style={styles.answerCoverImage}
          alt={`Illustration for option ${i18n._(text)}`}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent={showCheckbox ? 'flex-start' : 'center'}>
          {showCheckbox ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.answerCheckboxAnchor}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={styles.answerCheckboxContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <InlineCheckbox checked={selected} paddingSize="small" />
              </div>
            </div>
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column justifyContent="center" alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.answerTextContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin>{i18n._(text)}</Text>
            </div>
          </Column>
        </Line>
      </Paper>
    </ButtonBase>
  );
};

type Props = {
  questionData: QuestionData,
  onSelectAnswer: (arg1: string) => void,
  selectedAnswers: string[],
  showNextButton?: boolean,
  onClickNext: () => void,
  showQuestionText: boolean,
  onClickSend?: (arg1: string) => void,
  userInputValue?: string,
  onChangeUserInputValue?: (arg1: string) => void
};

const UserSurveyQuestion = React.forwardRef<Props, HTMLDivElement>((
  {
// @ts-expect-error - TS2339 - Property 'questionData' does not exist on type 'HTMLDivElement'.
    questionData,
// @ts-expect-error - TS2339 - Property 'onSelectAnswer' does not exist on type 'HTMLDivElement'.
    onSelectAnswer,
// @ts-expect-error - TS2339 - Property 'selectedAnswers' does not exist on type 'HTMLDivElement'.
    selectedAnswers,
// @ts-expect-error - TS2339 - Property 'showNextButton' does not exist on type 'HTMLDivElement'.
    showNextButton,
// @ts-expect-error - TS2339 - Property 'onClickNext' does not exist on type 'HTMLDivElement'.
    onClickNext,
// @ts-expect-error - TS2339 - Property 'showQuestionText' does not exist on type 'HTMLDivElement'.
    showQuestionText,
// @ts-expect-error - TS2339 - Property 'onClickSend' does not exist on type 'HTMLDivElement'.
    onClickSend,
// @ts-expect-error - TS2339 - Property 'userInputValue' does not exist on type 'HTMLDivElement'.
    userInputValue,
// @ts-expect-error - TS2339 - Property 'onChangeUserInputValue' does not exist on type 'HTMLDivElement'.
    onChangeUserInputValue,
  },
  ref
) => {
  const { text, answers, multi } = questionData;
  const { windowSize, isLandscape } = useResponsiveWindowSize();
  const onlyOneFreeAnswerPossible = isOnlyOneFreeAnswerPossible(answers);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'ForwardedRef<Props>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
        <div ref={ref} style={styles.questionContainer}>
          {showQuestionText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TitleAndSubtitle
              i18n={i18n}
              multi={multi}
              answers={questionData.answers}
              text={text}
              textAlign="left"
            />
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            cols={
              onlyOneFreeAnswerPossible
                ? 1
                : getColumnsFromWindowSize(windowSize, isLandscape)
            }
            spacing={15}
            cellHeight="auto"
          >
            {// Case where only one free answer is possible.
            onlyOneFreeAnswerPossible &&
            userInputValue !== undefined &&
            onChangeUserInputValue ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GridListTile>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FreeAnswer
                  answerData={answers[0]}
                  i18n={i18n}
                  key={answers[0].id}
                  // Do not leave possibility to unselect answer.
                  onSelect={() => {}}
                  selected={selectedAnswers.includes(answers[0].id)}
                  showCheckbox={false}
                  onClickSend={onClickSend}
                  value={userInputValue}
                  onChange={onChangeUserInputValue}
                />
              </GridListTile>
            ) : (
// @ts-expect-error - TS7006 - Parameter 'answerData' implicitly has an 'any' type.
              answers.map(answerData => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GridListTile key={answerData.id}>
                  {answerData.id === 'input' &&
                  userInputValue !== undefined &&
                  onChangeUserInputValue ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <FreeAnswer
                      answerData={answerData}
                      i18n={i18n}
                      onSelect={onSelectAnswer}
                      selected={selectedAnswers.includes(answerData.id)}
                      showCheckbox={!!multi}
                      onClickSend={onClickSend}
                      value={userInputValue}
                      onChange={onChangeUserInputValue}
                    />
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Answer
                      answerData={answerData}
                      i18n={i18n}
                      onSelect={onSelectAnswer}
                      selected={selectedAnswers.includes(answerData.id)}
                      showCheckbox={!!multi}
                    />
                  )}
                </GridListTile>
              ))
            )}
          </GridList>
          {showNextButton && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
                primary
                label={i18n._(t`Next`)}
                onClick={onClickNext}
                disabled={
                  selectedAnswers.length === 0 ||
                  (selectedAnswers.length === 1 &&
                    selectedAnswers[0] === 'input' &&
                    !userInputValue)
                }
              />
            </Line>
          )}
        </div>
      )}
    </I18n>
  );
});

export default UserSurveyQuestion;
