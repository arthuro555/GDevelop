import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import Functions from '@material-ui/icons/Functions';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/TypeCursorSelect'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TypeCursorSelect.js' implicitly has an 'any' type.
import TypeCursorSelect from '../../UI/CustomSvgIcons/TypeCursorSelect';
import { getParameterChoiceValues } from './ParameterMetadataTools';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function StringWithSelectorField(props: ParameterFieldProps, ref) {
  const {
    value,
    onChange,
    parameterIndex,
    parameterMetadata,
    isInline,
  } = props;

  const field = React.useRef<GenericExpressionField | SelectFieldInterface | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  // The list is not kept with a memo because choices could be changed by
  // another component without this one to know.
  const choices = getParameterChoiceValues(parameterMetadata);

  const isCurrentValueInList = choices.some(
    choice => `"${choice}"` === value
  );

  // If the current value is not in the list, display an expression field.
  const [isExpressionField, setIsExpressionField] = React.useState(
    !!value && !isCurrentValueInList
  );

  React.useEffect(
    () => {
      if (!isExpressionField && !value && choices.length > 0) {
        onChange(`"${choices[0]}"`);
      }
    },
    [choices, isExpressionField, onChange, value]
  );

  const switchFieldType = () => {
    setIsExpressionField(!isExpressionField);
  };

  const onChangeSelectValue = (event: any, value: any) => {
    onChange(event.target.value);
  };

  const fieldLabel = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  const selectOptions = choices.map(choice => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key={choice}
        value={`"${choice}"`}
        label={choice}
        shouldNotTranslate={true}
      />
    );
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextFieldWithButtonLayout
      renderTextField={() =>
        !isExpressionField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SelectField
            ref={field}
            id={
              parameterIndex !== undefined
                ? `parameter-${parameterIndex}-string-with-selector`
                : undefined
            }
            value={value}
            onChange={onChangeSelectValue}
            margin={isInline ? 'none' : 'dense'}
            fullWidth
            floatingLabelText={fieldLabel}
            translatableHintText={t`Choose a value`}
            helperMarkdownText={
              (parameterMetadata && parameterMetadata.getLongDescription()) ||
              null
            }
          >
            {selectOptions}
          </SelectField>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GenericExpressionField
            expressionType="string"
            ref={field}
            id={
              parameterIndex !== undefined
                ? `parameter-${parameterIndex}-string-with-selector`
                : undefined
            }
            {...props}
            onChange={onChange}
          />
        )
      }
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style =>
        isExpressionField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            id="switch-expression-select"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<TypeCursorSelect />}
            style={style}
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Select a value</Trans>}
            onClick={switchFieldType}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
            id="switch-expression-select"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Functions />}
            style={style}
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Use an expression</Trans>}
            onClick={switchFieldType}
          />
        )
      }
    />
  );
});
