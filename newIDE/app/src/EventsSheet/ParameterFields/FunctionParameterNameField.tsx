import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { enumerateParametersUsableInExpressions } from './EnumerateFunctionParameters';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function FunctionParameterNameField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SelectFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata } = props;
  const allowedParameterTypes =
    parameterMetadata && parameterMetadata.getExtraInfo()
      ? parameterMetadata.getExtraInfo().split(',')
      : [];

  const eventsBasedEntity =
    props.scope.eventsBasedBehavior || props.scope.eventsBasedObject;
  const functionsContainer = eventsBasedEntity
    ? eventsBasedEntity.getEventsFunctions()
    : props.scope.eventsFunctionsExtension;
  const parameters: Array<gdParameterMetadata> =
    props.scope.eventsFunction && functionsContainer
      ? enumerateParametersUsableInExpressions(
          functionsContainer,
          props.scope.eventsFunction,
          allowedParameterTypes
        )
      : [];

  const selectOptions = parameters.map(parameter => {
    const parameterName = parameter.getName();
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key={parameterName}
        value={`"${parameterName}"`}
        label={parameterName}
        shouldNotTranslate={true}
      />
    );
  });

  const onChangeSelectValue = (event: any, value: any) => {
    props.onChange(event.target.value);
  };

  const fieldLabel = props.parameterMetadata
    ? props.parameterMetadata.getDescription()
    : undefined;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SelectField
      ref={field}
      id={
        props.parameterIndex !== undefined
          ? `parameter-${props.parameterIndex}-function-parameter-field`
          : undefined
      }
      value={props.value}
      onChange={onChangeSelectValue}
      margin={props.isInline ? 'none' : 'dense'}
      fullWidth
      floatingLabelText={fieldLabel}
      translatableHintText={t`Choose a parameter`}
      helperMarkdownText={
        (props.parameterMetadata &&
          props.parameterMetadata.getLongDescription()) ||
        null
      }
    >
      {selectOptions}
    </SelectField>
  );
});
