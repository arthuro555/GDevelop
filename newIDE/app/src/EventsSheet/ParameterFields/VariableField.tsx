import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import { enumerateVariables } from './EnumerateVariables';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import {
  icon,
  nameAndIconContainer,
  instructionWarningParameter,
} from '../EventsTree/ClassNames';
import SemiControlledAutoComplete, {
  SemiControlledAutoCompleteInterface,
  DataSource,
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../../UI/SemiControlledAutoComplete';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../UI/Layout';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from '../../UI/CustomSvgIcons/ShareExternal';
import intersection from 'lodash/intersection';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

type Props = (ParameterFieldProps) & {
  variablesContainers: Array<gdVariablesContainer>,
  onOpenDialog: () => void | null | undefined
};

type VariableNameQuickAnalyzeResult = 0 | 1 | 2 | 3 | 4;

export type VariableFieldInterface = (ParameterFieldInterface) & {
  updateAutocompletions: () => void
};

export const VariableNameQuickAnalyzeResults = {
  OK: 0,
  WRONG_QUOTE: 1,
  WRONG_SPACE: 2,
  WRONG_EXPRESSION: 3,
  UNDECLARED_VARIABLE: 4,
} as const;

// TODO: the entire VariableField could be reworked to be a "real" GenericExpressionField
// (of type: "variable" or the legacy: "scenevar", "globalvar" or "objectvar"). This will
// ensure we 100% validate and can autocomplete what is entered (and we can have also a simpler
// selector that offers the variables in the scope).
export const quicklyAnalyzeVariableName = (name: string, variablesContainers?: Array<gdVariablesContainer>): VariableNameQuickAnalyzeResult => {
  if (!name) return VariableNameQuickAnalyzeResults.OK;

  for (let i = 0; i < name.length; ++i) {
    const character = name[i];

    if (character === '[') {
      // This probably starts an expression, so stop the analysis.
      break;
    } else if (character === ' ') {
      return VariableNameQuickAnalyzeResults.WRONG_SPACE;
    } else if (character === '"') {
      return VariableNameQuickAnalyzeResults.WRONG_QUOTE;
    } else if (
      character === '(' ||
      character === '+' ||
      character === '-' ||
      character === '/' ||
      character === '*'
    ) {
      return VariableNameQuickAnalyzeResults.WRONG_EXPRESSION;
    }
  }

  // Check at least the name of the root variable, it's the best we can do.
  const dotPosition = name.indexOf('.');
  const squareBracketPosition = name.indexOf('[');
  const nameToCheck =
    dotPosition !== -1 || squareBracketPosition !== -1
      ? name.substring(
          0,
          Math.min(
            dotPosition === -1 ? name.length : dotPosition,
            squareBracketPosition === -1 ? name.length : squareBracketPosition
          )
        )
      : name;

  if (
    variablesContainers &&
    !variablesContainers.some(variablesContainer =>
      variablesContainer.has(nameToCheck)
    )
  ) {
    return VariableNameQuickAnalyzeResults.UNDECLARED_VARIABLE;
  }
  return VariableNameQuickAnalyzeResults.OK;
};

// @ts-expect-error - TS2345 - Argument of type '(props: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, VariableFieldInterface>'.
export default React.forwardRef<Props, VariableFieldInterface>(function VariableField(props: Props, ref) {
  const {
    variablesContainers,
    value,
    onChange,
    isInline,
    onOpenDialog,
    parameterMetadata,
    onRequestClose,
    onApply,
    id,
  } = props;

  const field = React.useRef<SemiControlledAutoCompleteInterface | null | undefined>(null);
  const [
    autocompletionVariableNames,
    setAutocompletionVariableNames,
  ] = React.useState<DataSource>([]);
  /**
   * Can be called to set up or force updating the variables list.
   */
  const updateAutocompletions = React.useCallback(
    () => {
      const definedVariableNames =
        variablesContainers.length === 0
          ? []
          : variablesContainers
              .map(variablesContainer =>
                enumerateVariables(variablesContainer)
                  .map(({ name, isValidName }) =>
                    isValidName
                      ? name
                      : // Hide invalid variable names - they would not
                        // be parsed correctly anyway.
                        null
                  )
                  .filter(Boolean)
              )
              .reduce((a, b) => intersection(a, b));
      setAutocompletionVariableNames(
        definedVariableNames.map(name => ({
          text: name,
          value: name,
        }))
      );
    },
    [variablesContainers]
  );

  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; updateAutocompletions: () => void; }' is not assignable to type 'Props'.
  React.useImperativeHandle(ref, () => ({
    focus,
    updateAutocompletions,
  }));

  React.useEffect(
    () => {
      updateAutocompletions();
    },
    [updateAutocompletions]
  );

  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  const quicklyAnalysisResult = quicklyAnalyzeVariableName(
    value,
    variablesContainers
  );

  const errorText =
    quicklyAnalysisResult === VariableNameQuickAnalyzeResults.WRONG_QUOTE ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        It seems you entered a name with a quote. Variable names should not be
        quoted.
      </Trans>
    ) : quicklyAnalysisResult ===
      VariableNameQuickAnalyzeResults.WRONG_SPACE ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        The variable name contains a space - this is not recommended. Prefer
        to use underscores or uppercase letters to separate words.
      </Trans>
    ) : quicklyAnalysisResult ===
      VariableNameQuickAnalyzeResults.WRONG_EXPRESSION ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        The variable name looks like you're building an expression or a
        formula. You can only use this for structure or arrays. For example:
        Score[3].
      </Trans>
    ) : null;
  const warningTranslatableText =
    quicklyAnalysisResult ===
    VariableNameQuickAnalyzeResults.UNDECLARED_VARIABLE
      ? t`This variable is not declared. It's recommended to use the *variables editor* to add it.`
      : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <TextFieldWithButtonLayout
          renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SemiControlledAutoComplete
              margin={isInline ? 'none' : 'dense'}
              floatingLabelText={description}
              helperMarkdownText={
                warningTranslatableText
                  ? i18n._(warningTranslatableText)
                  : parameterMetadata
                  ? parameterMetadata.getLongDescription()
                  : undefined
              }
              errorText={errorText}
              fullWidth
              value={value}
              onChange={onChange}
              onRequestClose={onRequestClose}
              onApply={onApply}
              dataSource={[
                ...autocompletionVariableNames,
// @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead?
                onOpenDialog && variablesContainers.length === 1
                  ? {
                      translatableValue: t`Add or edit variables...`,
                      text: '',
                      value: '',
                      onClick: onOpenDialog,
                    }
                  : null,
              ].filter(Boolean)}
              openOnFocus={!isInline}
              ref={field}
              id={id}
            />
          )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
          renderButton={style =>
// @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead?
            onOpenDialog && !isInline ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<ShareExternal />}
                disabled={variablesContainers.length !== 1}
                primary
                style={style}
                onClick={onOpenDialog}
              />
            ) : null
          }
        />
      )}
    </I18n>
  );
});

export const renderVariableWithIcon = (
  {
    value,
    parameterMetadata,
    expressionIsValid,
    InvalidParameterValue,
    MissingParameterValue,
  }: ParameterInlineRendererProps,
  VariableIcon: (arg1: SvgIconProps) => React.ReactElement<React.ComponentProps<typeof SvgIcon>>,
  tooltip: string
) => {
  if (!value && !parameterMetadata.isOptional()) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <MissingParameterValue />;
  }

  const IconAndNameContainer = expressionIsValid
    ? React.Fragment
    : InvalidParameterValue;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <span
      title={tooltip}
      className={classNames({
        [nameAndIconContainer]: true,
        [instructionWarningParameter]:
          quicklyAnalyzeVariableName(value) !==
          VariableNameQuickAnalyzeResults.OK,
      })}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconAndNameContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <VariableIcon
          className={classNames({
            [icon]: true,
          })}
        />
        {value}
      </IconAndNameContainer>
    </span>
  );
};
