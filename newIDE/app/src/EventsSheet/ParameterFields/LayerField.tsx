import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import { mapFor } from '../../Utils/MapFor';
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

export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function LayerField(props, ref) {
  const field = React.useRef<GenericExpressionField | SelectFieldInterface | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

// @ts-expect-error - TS2339 - Property 'scope' does not exist on type 'ParameterFieldInterface'.
  const { layout } = props.scope;
  // The list is not kept with a memo because layers could be changed by
  // another component without this one to know.
  const layerNames = layout
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    ? mapFor(0, layout.getLayersCount(), i => {
        const layer = layout.getLayerAt(i);
        return layer.getName();
      })
    : [];

  const isCurrentValueInLayersList = !!layerNames.find(
// @ts-expect-error - TS7006 - Parameter 'layerName' implicitly has an 'any' type. | TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
    layerName => `"${layerName}"` === props.value
  );

  // If the current value is not in the list of layers, display an expression field.
  const [isExpressionField, setIsExpressionField] = React.useState(
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
    (!!props.value && !isCurrentValueInLayersList) ||
// @ts-expect-error - TS2339 - Property 'scope' does not exist on type 'ParameterFieldInterface'.
      props.scope.eventsFunctionsExtension
  );

  const switchFieldType = () => {
    // If the user had entered `""` (double quotes) we change the value to `` (empty string)
    // so that the dropdown detects it as the base layer.
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'. | TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
    if (props.value === '""') props.onChange('');
    setIsExpressionField(!isExpressionField);
  };

  const onChangeSelectValue = (event: any, value: any) => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
    props.onChange(event.target.value);
  };

  const onChangeTextValue = (value: string) => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
    props.onChange(value);
  };

// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
  const fieldLabel = props.parameterMetadata
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
    ? props.parameterMetadata.getDescription()
    : undefined;

// @ts-expect-error - TS7006 - Parameter 'layerName' implicitly has an 'any' type.
  const selectOptions = layerNames.map(layerName => {
    const isBaseLayer = layerName === '';
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key={isBaseLayer ? 'Base layer' : layerName}
        value={isBaseLayer ? '' : `"${layerName}"`}
        label={isBaseLayer ? t`Base layer` : layerName}
        shouldNotTranslate={!isBaseLayer}
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
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
              props.parameterIndex !== undefined
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
                ? `parameter-${props.parameterIndex}-layer-field`
                : undefined
            }
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
            value={props.value}
            onChange={onChangeSelectValue}
// @ts-expect-error - TS2339 - Property 'isInline' does not exist on type 'ParameterFieldInterface'.
            margin={props.isInline ? 'none' : 'dense'}
            fullWidth
            floatingLabelText={fieldLabel}
            translatableHintText={t`Choose a layer`}
            helperMarkdownText={
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
              (props.parameterMetadata &&
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
                props.parameterMetadata.getLongDescription()) ||
              null
            }
          >
            {selectOptions}
          </SelectField>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GenericExpressionField
            ref={field}
            id={
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
              props.parameterIndex !== undefined
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
                ? `parameter-${props.parameterIndex}-layer-field`
                : undefined
            }
            expressionType="string"
            {...props}
            onChange={onChangeTextValue}
          />
        )
      }
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
      renderButton={style =>
// @ts-expect-error - TS2339 - Property 'scope' does not exist on type 'ParameterFieldInterface'.
        props.scope.eventsFunctionsExtension ? null : isExpressionField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            id="switch-expression-select"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<TypeCursorSelect />}
            style={style}
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Select a layer</Trans>}
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
