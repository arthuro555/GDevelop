import * as React from 'react';

import GenericExpressionField from './GenericExpressionField';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ExpressionField(props: ParameterFieldProps, ref) {
    const field = React.useRef<GenericExpressionField>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    return (
      <GenericExpressionField
        expressionType="number"
        ref={field}
        id={
          props.parameterIndex !== undefined
            ? `parameter-${props.parameterIndex}-expression-field`
            : undefined
        }
        {...props}
      />
    );
  }
);
