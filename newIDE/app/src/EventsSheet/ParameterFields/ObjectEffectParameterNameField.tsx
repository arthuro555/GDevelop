import * as React from 'react';
import uniq from 'lodash/uniq';
// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import getObjectByName from '../../Utils/GetObjectByName';
import {
  getLastObjectParameterValue,
  getPreviousParameterValue,
  tryExtractStringLiteralContent,
} from './ParameterMetadataTools';
import getObjectGroupByName from '../../Utils/GetObjectGroupByName';
import { mapVector } from '../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/TypeCursorSelect'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TypeCursorSelect.js' implicitly has an 'any' type.
import TypeCursorSelect from '../../UI/CustomSvgIcons/TypeCursorSelect';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import Functions from '@material-ui/icons/Functions';

const gd: libGDevelop = global.gd;

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function ObjectEffectParameterNameField(props: ParameterFieldProps, ref) {
  const field = React.useRef<GenericExpressionField | null | undefined | SelectFieldInterface>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  // We don't memo/callback this, as we want to recompute it every time something changes.
  // Because of the function getLastObjectParameterValue.
  const getEffectParameterNames = (): Array<string> => {
    const {
      project,
      scope,
      instructionMetadata,
      instruction,
      expressionMetadata,
      expression,
      parameterIndex,
    } = props;

    const objectOrGroupName = getLastObjectParameterValue({
      instructionMetadata,
      instruction,
      expressionMetadata,
      expression,
      parameterIndex,
    });
    const effectName = tryExtractStringLiteralContent(
      getPreviousParameterValue({
        instruction,
        expression,
        parameterIndex,
      })
    );
    if (!objectOrGroupName || !project || !effectName) {
      return [];
    }

    let effectType: string | null = null;
    const object = getObjectByName(project, scope.layout, objectOrGroupName);
    if (object && object.getEffects().hasEffectNamed(effectName)) {
      effectType = object
        .getEffects()
        .getEffect(effectName)
        .getEffectType();
    }

    if (!effectType) {
      const group = getObjectGroupByName(
        project,
        scope.layout,
        objectOrGroupName
      );
      if (group) {
        // If the instruction targets a group, we check that the effect behind
        // the effect name on every object of the group is of the same type.
        const effectTypes: Array<string | null> = mapVector(
          group.getAllObjectsNames(),
// @ts-expect-error - TS7006 - Parameter 'objectName' implicitly has an 'any' type.
          objectName => {
            const object = getObjectByName(project, scope.layout, objectName);
            if (!object) {
              // If object not found, we consider this as an error.
              return null;
            }
            if (!object.getEffects().hasEffectNamed(effectName)) {
              return null;
            }
            return object
              .getEffects()
              .getEffect(effectName)
              .getEffectType();
          }
        );
        if (
          effectTypes.every(type => !!type) &&
          uniq(effectTypes).length === 1
        ) {
          effectType = effectTypes[0];
        }
      }
    }

    if (!effectType) return [];

    const effectMetadata = gd.MetadataProvider.getEffectMetadata(
      project.getCurrentPlatform(),
      effectType
    );
    const properties = effectMetadata.getProperties();
    const parameterNames = properties.keys().toJSArray();

    return parameterNames.sort();
  };

  const effectParameterNames = getEffectParameterNames();

  const isCurrentValueInEffectParameterNamesList = !!effectParameterNames.find(
    effectParameterName => `"${effectParameterName}"` === props.value
  );

  // If the current value is not in the list, display an expression field.
  const [isExpressionField, setIsExpressionField] = React.useState(
    (!!props.value && !isCurrentValueInEffectParameterNamesList) ||
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

  const selectOptions = effectParameterNames.map(effectParameterName => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key={effectParameterName}
        value={`"${effectParameterName}"`}
        label={effectParameterName}
        shouldNotTranslate
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
              props.parameterIndex !== undefined
                ? `parameter-${
                    props.parameterIndex
                  }-layer-effect-parameter-name-field`
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
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GenericExpressionField
            ref={field}
            id={
              props.parameterIndex !== undefined
                ? `parameter-${
                    props.parameterIndex
                  }-layer-effect-parameter-name-field`
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
        props.scope.eventsFunctionsExtension ? null : isExpressionField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            id="switch-expression-select"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<TypeCursorSelect />}
            style={style}
            primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Select an effect property</Trans>}
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
