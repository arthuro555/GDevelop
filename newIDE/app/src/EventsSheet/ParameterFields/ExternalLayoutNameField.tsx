import React from 'react';

import GenericExpressionField from './GenericExpressionField';
import { enumerateExternalLayouts } from '../../ProjectManager/EnumerateProjectItems';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import Functions from '@material-ui/icons/Functions';

import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

import SelectOption from '../../UI/SelectOption';

import FlatButton from '../../UI/FlatButton';

import TypeCursorSelect from '../../UI/CustomSvgIcons/TypeCursorSelect';

import { Trans, t } from '@lingui/macro';

import RaisedButton from '../../UI/RaisedButton';

import { TextFieldWithButtonLayout } from '../../UI/Layout';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ExternalLayoutNameField(props: ParameterFieldProps, ref) {
    const field = React.useRef<
      GenericExpressionField | SelectFieldInterface | null | undefined
    >(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const externalLayoutNames = props.project
      ? enumerateExternalLayouts(props.project).map((externalLayout) =>
          externalLayout.getName()
        )
      : [];
    const isCurrentValueInLayoutsList = !!externalLayoutNames.find(
      (layoutName) => `"${layoutName}"` === props.value
    );

    // If the current value is not in the list of layouts, display an expression field.
    const [isExpressionField, setIsExpressionField] = React.useState(
      (!!props.value && !isCurrentValueInLayoutsList) ||
        props.scope.eventsFunctionsExtension
    );

    const switchFieldType = () => {
      setIsExpressionField(!isExpressionField);
    };

    const onChangeSelectValue = (event: any, value: any) => {
      props.onChange(event.target.value);
    };

    const onChangeTextValue = (value: string) => {
      props.onChange(value);
    };

    const fieldLabel = props.parameterMetadata
      ? props.parameterMetadata.getDescription()
      : undefined;

    const selectOptions = externalLayoutNames.map((layoutName) => (
      <SelectOption
        key={layoutName}
        value={`"${layoutName}"`}
        label={layoutName}
        shouldNotTranslate
      />
    ));

    return (
      <TextFieldWithButtonLayout
        renderTextField={() =>
          !isExpressionField ? (
            <SelectField
// @ts-expect-error - TS2322 - Type 'MutableRefObject<SelectFieldInterface | ExpressionField | null | undefined>' is not assignable to type 'Ref<SelectFieldInterface> | undefined'.
              ref={field}
              id={
                props.parameterIndex !== undefined
                  ? `parameter-${props.parameterIndex}-external-layout-field`
                  : undefined
              }
              value={props.value}
              onChange={onChangeSelectValue}
              margin={props.isInline ? 'none' : 'dense'}
              fullWidth
              floatingLabelText={fieldLabel}
              translatableHintText={t`Choose an external layout`}
              helperMarkdownText={
                (props.parameterMetadata &&
                  props.parameterMetadata.getLongDescription()) ||
                null
              }
            >
              {selectOptions}
            </SelectField>
          ) : (
            <GenericExpressionField
// @ts-expect-error - TS2769 - No overload matches this call.
              ref={field}
              id={
                props.parameterIndex !== undefined
                  ? `parameter-${props.parameterIndex}-external-layout-field`
                  : undefined
              }
              expressionType="string"
              {...props}
              onChange={onChangeTextValue}
            />
          )
        }
        renderButton={(style) =>
          isExpressionField ? (
            <FlatButton
              id="switch-expression-select"
              leftIcon={<TypeCursorSelect />}
              style={style}
              primary
              label={<Trans>Select an external layout</Trans>}
              onClick={switchFieldType}
            />
          ) : (
            <RaisedButton
              id="switch-expression-select"
              icon={<Functions />}
              style={style}
              primary
              label={<Trans>Use an expression</Trans>}
              onClick={switchFieldType}
            />
          )
        }
      />
    );
  }
);
