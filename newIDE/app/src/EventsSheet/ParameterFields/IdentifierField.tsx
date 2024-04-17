import React from 'react';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

import GenericExpressionField from './GenericExpressionField';
import { ExpressionAutocompletion } from '../../ExpressionAutocompletion';
import { getLastObjectParameterValue } from './ParameterMetadataTools';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function IdentifierField(props, ref) {
    const {
      project,

      scope,

      instructionMetadata,

      instruction,

      expressionMetadata,

      expression,

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

    const autocompletionIdentifierNames: ExpressionAutocompletion[] =
      React.useMemo(() => {
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
        return allIdentifierExpressions.map((expression) => ({
          kind: 'FullExpression',
          completion: expression,
        }));
      }, [
        project,
        layout,
        expressionMetadata,
        instructionMetadata,
        parameterIndex,
        // Users can change the objectName with other fields.
        objectName,
      ]);

    const field = React.useRef<GenericExpressionField>(null);

    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    React.useEffect(() => {
      focus();
    }, []);

    return (
      <GenericExpressionField
        expressionType="string"
        onGetAdditionalAutocompletions={(expression) =>
          autocompletionIdentifierNames.filter(
            ({ completion }) => completion.indexOf(expression) === 0
          )
        }
        id={
          props.parameterIndex !== undefined
            ? `parameter-${props.parameterIndex}-identifier`
            : undefined
        }
        ref={field}
        {...props}
      />
    );
  }
);
