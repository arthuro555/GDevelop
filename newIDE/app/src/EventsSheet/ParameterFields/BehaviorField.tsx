// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
import {
  ParameterFieldProps,
  FieldFocusFunction,
  ParameterFieldInterface,
} from './ParameterFieldCommons';
import { getLastObjectParameterValue } from './ParameterMetadataTools';
import SemiControlledAutoComplete, {
  SemiControlledAutoCompleteInterface,
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../../UI/SemiControlledAutoComplete';
const gd: libGDevelop = global.gd;

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function BehaviorField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SemiControlledAutoCompleteInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata } = props;

  const [errorText, setErrorText] = React.useState<string | null | undefined>(null);
  const [behaviorNames, setBehaviorNames] = React.useState<Array<string>>([]);

  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  const longDescription = parameterMetadata
    ? parameterMetadata.getLongDescription()
    : undefined;

  const allowedBehaviorType = parameterMetadata
    ? parameterMetadata.getExtraInfo()
    : undefined;

  const updateBehaviorsList = React.useCallback(
    () => {
      const {
        instructionMetadata,
        instruction,
        expressionMetadata,
        expression,
        parameterIndex,
        globalObjectsContainer,
        objectsContainer,
      } = props;
      const objectName = getLastObjectParameterValue({
        instructionMetadata,
        instruction,
        expressionMetadata,
        expression,
        parameterIndex,
      });
      if (!objectName) return;

      const newBehaviorNames = gd
        .getBehaviorsOfObject(
          globalObjectsContainer,
          objectsContainer,
          objectName,
          true
        )
        .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'behaviorName' implicitly has an 'any' type.
        .filter(behaviorName => {
          return (
            (!allowedBehaviorType ||
              gd.getTypeOfBehavior(
                globalObjectsContainer,
                objectsContainer,
                behaviorName,
                false
              ) === allowedBehaviorType) &&
            (allowedBehaviorType ||
              !gd.isDefaultBehavior(
                globalObjectsContainer,
                objectsContainer,
                objectName,
                behaviorName,
                true
              ))
          );
        });

      setBehaviorNames(newBehaviorNames);
      if (!!props.value && newBehaviorNames.length === 0) {
        // Force emptying the current value if there is no behavior.
        // Useful when the object is changed to one without behaviors.
        props.onChange('');
      }
    },
    [props, allowedBehaviorType]
  );

  const getError = (value?: string) => {
    if (!value && !props.value) return null;

    const isValidChoice =
      behaviorNames.filter(choice => props.value === choice).length !== 0;

    if (!isValidChoice) return 'This behavior is not attached to the object';

    return null;
  };

  const doValidation = (value?: string) => {
    setErrorText(getError(value));
  };

  const forceChooseBehavior = React.useCallback(
    () => {
      // This is a bit hacky:
      // force the behavior selection if there is only one selectable behavior
      if (behaviorNames.length === 1) {
        if (props.value !== behaviorNames[0]) {
          props.onChange(behaviorNames[0]);
        }
      }
    },
    // Ensure that we re-run this function everytime the props change.
    // This allows to recalculate the behaviorNames based on the new object selected
    // (which is not in the props)
    [behaviorNames, props]
  );

  React.useEffect(
    () => {
      forceChooseBehavior();
    },
    [forceChooseBehavior]
  );

  React.useEffect(
    () => {
      updateBehaviorsList();
    },
    [updateBehaviorsList]
  );

  const noBehaviorErrorText =
    allowedBehaviorType !== '' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        The behavior is not attached to this object. Please select another
        object or add this behavior.
      </Trans>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
        This object has no behaviors: please add this behavior to the object
        first.
      </Trans>
    );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledAutoComplete
      margin={props.isInline ? 'none' : 'dense'}
      floatingLabelText={description}
      helperMarkdownText={longDescription}
      fullWidth
      errorText={!behaviorNames.length ? noBehaviorErrorText : errorText}
      value={props.value}
      onChange={props.onChange}
      onRequestClose={props.onRequestClose}
      onApply={props.onApply}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onBlur={event => {
        doValidation(event.currentTarget.value);
      }}
      dataSource={behaviorNames.map(behaviorName => ({
        text: behaviorName,
        value: behaviorName,
      }))}
      openOnFocus={!props.isInline}
      disabled={behaviorNames.length <= 1}
      ref={field}
    />
  );
});
