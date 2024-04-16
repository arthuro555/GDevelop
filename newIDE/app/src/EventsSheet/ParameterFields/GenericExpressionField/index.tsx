import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import Popper from '@material-ui/core/Popper';
import muiZIndex from '@material-ui/core/styles/zIndex';
import Functions from '@material-ui/icons/Functions';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
import SemiControlledTextField, {
  SemiControlledTextFieldInterface,
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
} from '../../../UI/SemiControlledTextField';
import { mapVector } from '../../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector.tsx', but '--jsx' is not set.
import ExpressionSelector from '../../InstructionEditor/InstructionOrExpressionSelector/ExpressionSelector';
import ExpressionParametersEditorDialog, {
  ParameterValues,
// @ts-expect-error - TS6142 - Module './ExpressionParametersEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/ExpressionParametersEditorDialog.tsx', but '--jsx' is not set.
} from './ExpressionParametersEditorDialog';
// @ts-expect-error - TS6142 - Module './ExpressionParametersEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/ExpressionParametersEditor.tsx', but '--jsx' is not set.
import { hasNonCodeOnlyParameters } from './ExpressionParametersEditor';
import { formatExpressionCall } from './FormatExpressionCall';
import { EnumeratedExpressionMetadata } from '../../../InstructionOrExpression/EnumeratedInstructionOrExpressionMetadata';
import {
  ParameterFieldProps,
  FieldFocusFunction,
} from '../ParameterFieldCommons';
import BackgroundHighlighting, {
  Highlight,
// @ts-expect-error - TS6142 - Module './BackgroundHighlighting' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/BackgroundHighlighting.tsx', but '--jsx' is not set.
} from './BackgroundHighlighting';
import debounce from 'lodash/debounce';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../../UI/Layout';
import {
  ExpressionAutocompletion,
  insertAutocompletionInExpression,
  getAutocompletionsFromDescriptions,
} from '../../../ExpressionAutocompletion';
import {
  AutocompletionsState,
  getAutocompletionsInitialState,
  setNewAutocompletions,
  handleAutocompletionsKeyDown,
  handleAutocompletionsScroll,
  getRenderedAutocompletions,
  getNonRenderedCount,
} from './ExpressionAutocompletionsHandler';
// @ts-expect-error - TS6142 - Module './ExpressionAutocompletionsDisplayer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/ExpressionAutocompletionsDisplayer.tsx', but '--jsx' is not set.
import ExpressionAutocompletionsDisplayer from './ExpressionAutocompletionsDisplayer';
import { ResponsiveWindowMeasurer } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
import {
  shouldCloseOrCancel,
  shouldSubmit,
  shouldValidate,
} from '../../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';
import { getProjectScopedContainersFromScope } from '../../../InstructionOrExpression/EventsScope.flow';
const gd: libGDevelop = global.gd;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  textFieldContainer: {
    flex: 1,
    minWidth: 200,
  },
  textFieldAndHighlightContainer: {
    position: 'relative',
  },
  expressionSelectorPopoverContentSmall: {
    display: 'flex',
    maxHeight: 250,
  },
  expressionSelectorPopoverContent: {
    display: 'flex',
    maxHeight: 350,
  },
  input: {
    fontFamily: '"Lucida Console", Monaco, monospace',
    lineHeight: 1.4,
  },
  backgroundHighlightingWithFloatingLabel: {
    marginTop: 22, //Properly align with the text field
    paddingLeft: 12,
    paddingRight: 12,
    boxSizing: 'border-box',
  },
  backgroundHighlightingInline: {
    marginTop: 0, //Properly align with the text field
    paddingLeft: 0,
    paddingRight: 0,
  },
  backgroundHighlightingInlineWithFloatingLabel: {
    marginTop: 22, //Properly align with the text field
    paddingLeft: 0,
    paddingRight: 0,
  },
} as const;

type State = {
  popoverOpen: boolean,
  parametersDialogOpen: boolean,
  selectedExpressionInfo: EnumeratedExpressionMetadata | null | undefined,
  validatedValue: string,
  errorText: string | null | undefined,
  errorHighlights: Array<Highlight>,
  autocompletions: AutocompletionsState
};

type Props = {
  expressionType: 'number' | 'string',
  /** An optional callback that can be used to provide additional autocompletions. */
  onGetAdditionalAutocompletions?: (currentExpression: string) => Array<ExpressionAutocompletion>,
  /** An optional callback that can be used to show a custom error message. */
  onExtractAdditionalErrors?: (currentExpression: string, currentExpressionNode: gdExpressionNode) => string | null | undefined,
  renderExtraButton?: (
    arg1: {
      style: any,
      onChange: (newValue: string) => void
    },
  ) => React.ReactElement
} & (ParameterFieldProps);

const MAX_ERRORS_COUNT = 10;

const extractErrors = (
  platform: gdPlatform,
  project: gdProject,
  projectScopedContainers: gdProjectScopedContainers,
  expressionType: string,
  expressionNode: gdExpressionNode,
): {
  errorText: string | null | undefined,
  errorHighlights: Array<Highlight>
} => {
  const expressionValidator = new gd.ExpressionValidator(
    gd.JsPlatform.get(),
    projectScopedContainers,
    expressionType
  );
  expressionNode.visit(expressionValidator);
  const errors = expressionValidator.getAllErrors();

// @ts-expect-error - TS7006 - Parameter 'error' implicitly has an 'any' type.
  const errorHighlights: Array<Highlight> = mapVector(errors, error => ({
    begin: error.getStartPosition(),
    end: error.getEndPosition() + 1,
    message: error.getMessage(),
    type: 'error',
  }));
  const otherErrorsCount = Math.max(
    0,
    errorHighlights.length - MAX_ERRORS_COUNT
  );
  const hasMultipleErrors = errorHighlights.length > 1;

  const filteredErrorHighlights =
    otherErrorsCount > 0
      ? errorHighlights.slice(0, MAX_ERRORS_COUNT)
      : errorHighlights;

  const errorText = filteredErrorHighlights
    .map(
      (highlight, i) =>
        (hasMultipleErrors ? `[${i + 1}] ` : '') + highlight.message
    )
    .join(' ');

  expressionValidator.delete();

  return { errorText, errorHighlights };
};

export default class ExpressionField extends React.Component<Props, State> {
  _field: SemiControlledTextFieldInterface | null | undefined = null;
  _fieldElementWidth: number | null | undefined = null;
  _inputElement: HTMLInputElement | null | undefined = null;

  state = {
    popoverOpen: false,
    parametersDialogOpen: false,
    selectedExpressionInfo: null,

    validatedValue: this.props.value,
    errorText: null,
    errorHighlights: [],
    autocompletions: getAutocompletionsInitialState(),
  };

  componentDidMount() {
    if (this._field) {
      this._fieldElementWidth = this._field.getFieldWidth();
      this._inputElement = this._field ? this._field.getInputNode() : null;
    }
  }

  componentWillUnmount() {
    this._enqueueValidation.cancel();
  }

  focus: FieldFocusFunction = options => {
    if (this._field) {
      this._field.focus(options);
      if (options && options.selectAll) {
        if (this._inputElement) {
          this._inputElement.setSelectionRange(
            0,
            this.props.value.toString().length
          );
        }
      }
      this._enqueueValidation();
    }
  };

  _openExpressionPopover = () => {
    this.setState({
      popoverOpen: true,
    });
  };

  _handleFocus = (event: {
    preventDefault: () => void
  }) => {
    // This prevents ghost click.
    event.preventDefault();
  };

  _handleRequestClose = () => {
    this.setState({
      popoverOpen: false,
    });
  };

  _handleChange = (value: string) => {
    this.setState(
      {
        validatedValue: value,
      },
      () => this._enqueueValidation()
    );
  };

  _handleBlur = (value: string) => {
    if (this.props.onChange) this.props.onChange(value);
    this.setState({ validatedValue: value }, () => {
      this._enqueueValidation.cancel();
      this._doValidation();
      this.setState({
        autocompletions: getAutocompletionsInitialState(),
      });
    });
  };

  _handleBlurEvent = (event: {
    currentTarget: {
      value: string
    }
  }) => {
    this._handleBlur(event.currentTarget.value);
  };

  _shouldOpenParametersDialog = (expressionInfo: EnumeratedExpressionMetadata): boolean => {
    // If there is no parameter to fill for the selected expression, no need to open the dialog.
    return hasNonCodeOnlyParameters(expressionInfo.metadata);
  };

  _handleExpressionChosen = (expressionInfo: EnumeratedExpressionMetadata) => {
    let newState = { popoverOpen: false };
    if (this._shouldOpenParametersDialog(expressionInfo)) {
      newState = {
        ...newState,
// @ts-expect-error - TS2322 - Type '{ parametersDialogOpen: boolean; selectedExpressionInfo: EnumeratedExpressionMetadata; popoverOpen: boolean; }' is not assignable to type '{ popoverOpen: boolean; }'.
        parametersDialogOpen: true,
        selectedExpressionInfo: expressionInfo,
      };
    } else {
      this.insertExpression(expressionInfo, []);
    }
    this.setState(newState);
  };

  insertExpression = (
    expressionInfo: EnumeratedExpressionMetadata,
    parameterValues: ParameterValues
  ) => {
    if (!this._inputElement) return;
    const {
      globalObjectsContainer,
      objectsContainer,
      scope,
      expressionType,
      value,
    } = this.props;
    const cursorPosition = this._inputElement.selectionStart;
    const parser = new gd.ExpressionParser2();

    // We want to know what type the expression should be so as to convert to string
    // when necessary.
    // We add a fake identifier so that getNodeAtPosition will return the type of
    // its parent. Particularly, this is needed to get the type of a parameter in
    // a function call. We could create a worker ExpectedTypeFinder that would get
    // the type wanted by the parent instead.
    const expressionNode = parser
      .parseExpression(
// @ts-expect-error - TS2345 - Argument of type 'number | null' is not assignable to parameter of type 'number | undefined'.
        value.substr(0, cursorPosition) +
          'fakeIdentifier' +
// @ts-expect-error - TS2345 - Argument of type 'number | null' is not assignable to parameter of type 'number'.
          value.substr(cursorPosition)
      )
      .get();
    const currentNode = gd.ExpressionNodeLocationFinder.getNodeAtPosition(
      expressionNode,
// @ts-expect-error - TS2531 - Object is possibly 'null'.
      cursorPosition + 'fakeIdentifier'.length - 1
    );
    const projectScopedContainers = getProjectScopedContainersFromScope(
      scope,
      globalObjectsContainer,
      objectsContainer
    );
    const type = gd.ExpressionTypeFinder.getType(
      gd.JsPlatform.get(),
      projectScopedContainers,
      expressionType,
      currentNode
    );

    let shouldConvertToString =
      expressionInfo.metadata.getReturnType() === 'number' && type === 'string';

    const functionCall = formatExpressionCall(expressionInfo, parameterValues, {
      shouldConvertToString,
    });

    parser.delete();

    // Generate the expression with the function call
    const newValue =
// @ts-expect-error - TS2345 - Argument of type 'number | null' is not assignable to parameter of type 'number | undefined'.
      value.substr(0, cursorPosition) +
      functionCall +
// @ts-expect-error - TS2345 - Argument of type 'number | null' is not assignable to parameter of type 'number'.
      value.substr(cursorPosition);

    // Apply changes
    if (this.props.onChange) this.props.onChange(newValue);
    this.setState(
      {
        validatedValue: newValue,
      },
      () => this._enqueueValidation()
    );

    // Focus again and select what was just added.
    setTimeout(() => {
      if (this._field) this._field.focus();

      setTimeout(() => {
        if (this._inputElement) {
          this._inputElement.setSelectionRange(
            cursorPosition,
// @ts-expect-error - TS2531 - Object is possibly 'null'.
            cursorPosition + functionCall.length
          );
        }
      }, 5);
    }, 5);
  };

  _onExpressionAutocompletionsScroll = () => {
    if (this.state.autocompletions.renderEverything) return; // Bail out early to avoid changing the state if not needed.

    this.setState({
      autocompletions: handleAutocompletionsScroll(this.state.autocompletions),
    });
  };

  _insertAutocompletion = (
    expressionAutocompletion: ExpressionAutocompletion
  ) => {
    // If the completion is exact, it's not a completion but just
    // shown for informing the user.
    if (expressionAutocompletion.isExact) return;

    const caretLocation = this._inputElement
      ? this._inputElement.selectionStart
      : 0;
    const expression = this.state.validatedValue;

    const { expression: newExpression, caretLocation: newCaretLocation } =
      expressionAutocompletion.kind === 'FullExpression'
        ? {
            expression: expressionAutocompletion.completion,
            caretLocation: expressionAutocompletion.completion.length,
          }
        : insertAutocompletionInExpression(
// @ts-expect-error - TS2322 - Type 'number | null' is not assignable to type 'number'.
            { expression, caretLocation },
            {
              completion: expressionAutocompletion.completion,
              replacementStartPosition:
                expressionAutocompletion.replacementStartPosition,
              replacementEndPosition:
                expressionAutocompletion.replacementEndPosition,
              addParenthesis: expressionAutocompletion.addParenthesis,
              addDot: expressionAutocompletion.addDot,
              addParameterSeparator:
                expressionAutocompletion.addParameterSeparator,
              addNamespaceSeparator:
                expressionAutocompletion.addNamespaceSeparator,
              hasVisibleParameters:
                expressionAutocompletion.hasVisibleParameters,
              shouldConvertToString:
                expressionAutocompletion.kind === 'Expression'
                  ? expressionAutocompletion.shouldConvertToString
                  : null,
            }
          );

    if (this._field) {
      this._field.forceSetValue(newExpression);
    }
    if (this.props.onChange) this.props.onChange(newExpression);
    this.setState(
      {
        validatedValue: newExpression,
      },
      () => {
        this._enqueueValidation();
        if (this._field) {
          this._field.forceSetSelection(newCaretLocation, newCaretLocation);
        }
      }
    );
  };

  _enqueueValidation = debounce(() => {
    this._doValidation();
  }, 250);

  _doValidation = () => {
    const {
      project,
      globalObjectsContainer,
      objectsContainer,
      expressionType,
      scope,
      onGetAdditionalAutocompletions,
      onExtractAdditionalErrors,
    } = this.props;
    if (!project) return null;

    const expression = this.state.validatedValue;

    // Parsing can be time consuming (~1ms for simple expression,
    // a few milliseconds for complex ones).

    const parser = new gd.ExpressionParser2();
    const expressionNode = parser.parseExpression(expression).get();

    const projectScopedContainers = getProjectScopedContainersFromScope(
      scope,
      globalObjectsContainer,
      objectsContainer
    );

    const { errorText, errorHighlights } = extractErrors(
      gd.JsPlatform.get(),
      project,
      projectScopedContainers,
      expressionType,
      expressionNode
    );
    const extraErrorText = onExtractAdditionalErrors
      ? onExtractAdditionalErrors(expression, expressionNode)
      : null;
    const formattedErrorText = [extraErrorText, errorText]
      .filter(Boolean)
      .join(' - ');

    // If the expression ends with a space, the user must be navigating or switching to another text
    // so let's not return any autocompletions.
    if (
      expression.length > 0 &&
      expression.charAt(expression.length - 1) === ' '
    ) {
      this.setState(state => ({
        errorText: formattedErrorText,
        errorHighlights,
        autocompletions: getAutocompletionsInitialState(),
      }));
      return;
    }

    const cursorPosition = this._inputElement
      ? this._inputElement.selectionStart
      : 0;
    const completionDescriptions = gd.ExpressionCompletionFinder.getCompletionDescriptionsFor(
      gd.JsPlatform.get(),
      projectScopedContainers,
      expressionType,
      expressionNode,
// @ts-expect-error - TS2531 - Object is possibly 'null'.
      cursorPosition - 1
    );

    const newAutocompletions = getAutocompletionsFromDescriptions(
      {
        gd,
        project,
        projectScopedContainers,
        scope,
      },
      completionDescriptions,
      // $FlowFixMe The autocompletion doesn't display the groups so it doesn't need to be able to translate them.
      null
    );

    const allNewAutocompletions = onGetAdditionalAutocompletions
      ? onGetAdditionalAutocompletions(expression).concat(newAutocompletions)
      : newAutocompletions;

    parser.delete();

    this.setState(state => ({
      errorText: formattedErrorText,
      errorHighlights,
      autocompletions: setNewAutocompletions(
        state.autocompletions,
        allNewAutocompletions
      ),
    }));
  };

  render() {
    const {
      value,
      expressionType,
      parameterMetadata,
      project,
      scope,
      globalObjectsContainer,
      objectsContainer,
      parameterRenderingService,
    } = this.props;
    const description = parameterMetadata
      ? parameterMetadata.getDescription()
      : this.props.isInline
      ? undefined
      : '-'; // We're using multiline TextField, which does not support having no label.
    const longDescription = parameterMetadata
      ? parameterMetadata.getLongDescription()
      : undefined;

    const popoverStyle = {
      width: this._fieldElementWidth || 'auto',
      marginLeft: -5, // Remove the offset that the Popper has for some reason with disablePortal={true}
      // Ensure the popper is above everything (modal, dialog, snackbar, tooltips, etc).
      // There will be only one ExpressionSelector opened at a time, so it's fair to put the
      // highest z index. If this is breaking, check the z-index of material-ui.
      zIndex: muiZIndex.tooltip + 100,
    } as const;

    const backgroundHighlightingStyle = this.props.isInline
      ? // An inline GenericExpressionField is shown with a TextField
        // with variant "standard", and no margins. The label is shown
        // only if provided (description), so we need to adapt the margins
        // of the background
        description
        ? styles.backgroundHighlightingInlineWithFloatingLabel
        : styles.backgroundHighlightingInline
      : // A non-inline GenericExpressionField is shown with a TextField
        // with variant "filled". As we're using a *multiline* field, it
        // always put space for the label, even if not provided.
        styles.backgroundHighlightingWithFloatingLabel;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextFieldWithButtonLayout
              margin={this.props.isInline ? 'none' : 'dense'}
              renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div style={styles.textFieldContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.textFieldAndHighlightContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <BackgroundHighlighting
                      value={this.state.validatedValue}
                      style={{
                        ...styles.input,
                        ...backgroundHighlightingStyle,
                      }}
                      highlights={this.state.errorHighlights}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      id={this.props.id}
                      margin={this.props.isInline ? 'none' : 'dense'}
                      value={value}
                      floatingLabelText={description}
                      helperMarkdownText={longDescription}
                      hintText={expressionType === 'string' ? '""' : undefined}
                      inputStyle={styles.input}
                      onChange={this._handleChange}
                      onBlur={this._handleBlurEvent}
// @ts-expect-error - TS7006 - Parameter 'field' implicitly has an 'any' type.
                      ref={field => (this._field = field)}
                      onFocus={this._handleFocus}
                      errorText={this.state.errorText}
                      onClick={() => this._enqueueValidation()}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                      onKeyDown={event => {
                        const autocompletions = handleAutocompletionsKeyDown(
                          this.state.autocompletions,
                          {
                            event,
                            onUpdateAutocompletions: this._enqueueValidation,
                            onInsertAutocompletion: this._insertAutocompletion,
                          }
                        );
                        this.setState({ autocompletions });

                        // If the user pressed the key to close (or to submit),
                        // there is a chance that this will trigger the closing
                        // of the dialog/popover containing the expression field.
                        // Apply the changes now as otherwise the onBlur handler
                        // has a risk not to be called (as the component will be
                        // unmounted).
                        if (
                          shouldCloseOrCancel(event) ||
                          shouldSubmit(event) ||
                          shouldValidate(event)
                        ) {
                          const value = event.currentTarget.value;
                          if (this.props.onChange) this.props.onChange(value);
                        }
                      }}
                      multiline
                      fullWidth
                    />
                  </div>
                  {this._inputElement && this.state.popoverOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <ClickAwayListener onClickAway={this._handleRequestClose}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Popper
                        style={popoverStyle}
                        open={this.state.popoverOpen}
                        anchorEl={this._inputElement}
                        placement="bottom"
                        disablePortal={
                          true /* Can't use portals as this would put the Popper outside of the Modal, which is keeping the focus in the modal (so the search bar and keyboard browsing won't not work) */
                        }
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <ResponsiveWindowMeasurer>
                          {({ isMobile }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Paper
                              style={
                                isMobile
                                  ? styles.expressionSelectorPopoverContentSmall
                                  : styles.expressionSelectorPopoverContent
                              }
                              background="light"
                            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <ExpressionSelector
                                i18n={i18n}
                                selectedType=""
// @ts-expect-error - TS7006 - Parameter 'type' implicitly has an 'any' type. | TS7006 - Parameter 'expression' implicitly has an 'any' type.
                                onChoose={(type, expression) => {
                                  this._handleExpressionChosen(expression);
                                }}
                                expressionType={expressionType}
                                focusOnMount
                                scope={scope}
                              />
                            </Paper>
                          )}
                        </ResponsiveWindowMeasurer>
                      </Popper>
                    </ClickAwayListener>
                  )}
                  {this._inputElement &&
                    !this.state.popoverOpen &&
                    parameterRenderingService && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ExpressionAutocompletionsDisplayer
                        project={project}
                        anchorEl={this._inputElement}
                        expressionAutocompletions={getRenderedAutocompletions(
                          this.state.autocompletions
                        )}
                        remainingCount={getNonRenderedCount(
                          this.state.autocompletions
                        )}
                        selectedCompletionIndex={
                          this.state.autocompletions.selectedCompletionIndex
                        }
                        onScroll={this._onExpressionAutocompletionsScroll}
// @ts-expect-error - TS7006 - Parameter 'expressionAutocompletion' implicitly has an 'any' type.
                        onChoose={expressionAutocompletion => {
                          this._insertAutocompletion(expressionAutocompletion);

                          setTimeout(
                            () => this.focus(),
                            50 /* Give back the focus to the field after a completion is inserted */
                          );
                        }}
                        parameterRenderingService={parameterRenderingService}
                      />
                    )}
                </div>
              )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
              renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <React.Fragment>
                  {!this.props.isInline &&
                    this.props.renderExtraButton &&
                    this.props.renderExtraButton({
                      style,
                      onChange: this._handleBlur,
                    })}
                  {!this.props.isInline && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <RaisedButton
                      id={`open-${expressionType}-expression-popover-button`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      icon={<Functions />}
                      label={
                        expressionType === 'string'
                          ? '"ABC"'
                          : expressionType === 'number'
                          ? '123'
                          : ''
                      }
                      primary
                      style={style}
                      onClick={this._openExpressionPopover}
                    />
                  )}
                </React.Fragment>
              )}
            />

            {this.state.parametersDialogOpen &&
              this.state.selectedExpressionInfo && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ExpressionParametersEditorDialog
                  project={project}
                  scope={scope}
                  globalObjectsContainer={globalObjectsContainer}
                  objectsContainer={objectsContainer}
                  expressionMetadata={
// @ts-expect-error - TS2339 - Property 'metadata' does not exist on type 'never'.
                    this.state.selectedExpressionInfo.metadata
                  }
// @ts-expect-error - TS7006 - Parameter 'parameterValues' implicitly has an 'any' type.
                  onDone={parameterValues => {
                    if (!this.state.selectedExpressionInfo) return;

                    this.insertExpression(
                      this.state.selectedExpressionInfo,
                      parameterValues
                    );
                    this.setState({
                      parametersDialogOpen: false,
                      selectedExpressionInfo: null,
                    });
                  }}
                  onRequestClose={() => {
                    this.setState({
                      parametersDialogOpen: false,
                      selectedExpressionInfo: null,
                    });
                  }}
                  parameterRenderingService={parameterRenderingService}
                />
              )}
          </React.Fragment>
        )}
      </I18n>
    );
  }
}
