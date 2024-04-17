import React from 'react';

import { t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { enumerateParametersUsableInExpressions } from './EnumerateFunctionParameters';

import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

import SelectOption from '../../UI/SelectOption';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function FunctionParameterNameField(props: ParameterFieldProps, ref) {
    const field = React.useRef<SelectFieldInterface>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

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
    const parameters: Array<gd.ParameterMetadata> =
      props.scope.eventsFunction && functionsContainer
        ? enumerateParametersUsableInExpressions(
            functionsContainer,
            props.scope.eventsFunction,
            allowedParameterTypes
          )
        : [];

    const selectOptions = parameters.map((parameter) => {
      const parameterName = parameter.getName();
      return (
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
  }
);
