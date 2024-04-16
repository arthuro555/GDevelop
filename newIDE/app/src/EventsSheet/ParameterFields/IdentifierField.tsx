import React from 'react';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
import { ExpressionAutocompletion } from '../../ExpressionAutocompletion';
import { getLastObjectParameterValue } from './ParameterMetadataTools';

const gd: libGDevelop = global.gd;

export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function IdentifierField(props, ref) {
  const {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'scope' does not exist on type 'ParameterFieldInterface'.
    scope,
// @ts-expect-error - TS2339 - Property 'instructionMetadata' does not exist on type 'ParameterFieldInterface'.
    instructionMetadata,
// @ts-expect-error - TS2339 - Property 'instruction' does not exist on type 'ParameterFieldInterface'.
    instruction,
// @ts-expect-error - TS2339 - Property 'expressionMetadata' does not exist on type 'ParameterFieldInterface'.
    expressionMetadata,
// @ts-expect-error - TS2339 - Property 'expression' does not exist on type 'ParameterFieldInterface'.
    expression,
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
    parameterIndex,
  } = props;
  const { layout } = scope;

  const objectName =
    getLastObjectParameterValue({
      instructionMetadata,
      instruction,
      expressionMetadata,
      expression,
      parameterIndex,
    }) || '';

  const autocompletionIdentifierNames: ExpressionAutocompletion[] = React.useMemo(
    () => {
      if (!parameterIndex) {
        return [];
      }
      const parameterMetadata = instructionMetadata
        ? instructionMetadata.getParameter(parameterIndex)
        : expressionMetadata
        ? expressionMetadata.getParameter(parameterIndex)
        : null;
      const identifierName = parameterMetadata
        ? parameterMetadata.getExtraInfo()
        : '';

      const allIdentifierExpressions =
        project && layout
          ? gd.EventsIdentifiersFinder.findAllIdentifierExpressions(
              project.getCurrentPlatform(),
              project,
              layout,
              identifierName,
              objectName
            )
              .toNewVectorString()
              .toJSArray()
          : [];

// @ts-expect-error - TS7006 - Parameter 'expression' implicitly has an 'any' type.
      return allIdentifierExpressions.map(expression => ({
        kind: 'FullExpression',
        completion: expression,
      }));
    },
    [
      project,
      layout,
      expressionMetadata,
      instructionMetadata,
      parameterIndex,
      // Users can change the objectName with other fields.
      objectName,
    ]
  );

  const field = React.useRef<GenericExpressionField | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  React.useEffect(() => {
    focus();
  }, []);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GenericExpressionField
      expressionType="string"
// @ts-expect-error - TS7006 - Parameter 'expression' implicitly has an 'any' type.
      onGetAdditionalAutocompletions={expression =>
        autocompletionIdentifierNames.filter(
          ({ completion }) => completion.indexOf(expression) === 0
        )
      }
      id={
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
        props.parameterIndex !== undefined
// @ts-expect-error - TS2339 - Property 'parameterIndex' does not exist on type 'ParameterFieldInterface'.
          ? `parameter-${props.parameterIndex}-identifier`
          : undefined
      }
      ref={field}
      {...props}
    />
  );
});
