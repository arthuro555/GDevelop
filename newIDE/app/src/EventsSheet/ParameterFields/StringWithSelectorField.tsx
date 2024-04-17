import React from 'react';

import { Trans, t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

import GenericExpressionField from './GenericExpressionField';

import SelectOption from '../../UI/SelectOption';

import { TextFieldWithButtonLayout } from '../../UI/Layout';

import RaisedButton from '../../UI/RaisedButton';
import Functions from '@material-ui/icons/Functions';

import FlatButton from '../../UI/FlatButton';

import TypeCursorSelect from '../../UI/CustomSvgIcons/TypeCursorSelect';
import { getParameterChoiceValues } from './ParameterMetadataTools';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function StringWithSelectorField(props: ParameterFieldProps, ref) {
    const { value, onChange, parameterIndex, parameterMetadata, isInline } =
      props;

    const field = React.useRef<
      GenericExpressionField | SelectFieldInterface | null | undefined
    >(null);

    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    // The list is not kept with a memo because choices could be changed by
    // another component without this one to know.
    const choices = getParameterChoiceValues(parameterMetadata);

    const isCurrentValueInList = choices.some(
      (choice) => `"${choice}"` === value
    );

    // If the current value is not in the list, display an expression field.
    const [isExpressionField, setIsExpressionField] = React.useState(
      !!value && !isCurrentValueInList
    );

    React.useEffect(() => {
      if (!isExpressionField && !value && choices.length > 0) {
        onChange(`"${choices[0]}"`);
      }
    }, [choices, isExpressionField, onChange, value]);

    const switchFieldType = () => {
      setIsExpressionField(!isExpressionField);
    };

    const onChangeSelectValue = (event: any, value: any) => {
      onChange(event.target.value);
    };

    const fieldLabel = parameterMetadata
      ? parameterMetadata.getDescription()
      : undefined;

    const selectOptions = choices.map((choice) => {
      return (
        <SelectOption
          key={choice}
          value={`"${choice}"`}
          label={choice}
          shouldNotTranslate={true}
        />
      );
    });

    return (
      <TextFieldWithButtonLayout
        renderTextField={() =>
          !isExpressionField ? (
            <SelectField
// @ts-expect-error - TS2322 - Type 'MutableRefObject<SelectFieldInterface | ExpressionField | null | undefined>' is not assignable to type 'Ref<SelectFieldInterface> | undefined'.
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
            <GenericExpressionField
              expressionType="string"
// @ts-expect-error - TS2769 - No overload matches this call.
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
        renderButton={(style) =>
          isExpressionField ? (
            <FlatButton
              id="switch-expression-select"
              leftIcon={<TypeCursorSelect />}
              style={style}
              primary
              label={<Trans>Select a value</Trans>}
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
