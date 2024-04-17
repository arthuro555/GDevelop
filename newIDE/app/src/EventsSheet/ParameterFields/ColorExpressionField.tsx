import * as React from 'react';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

import GenericExpressionField from './GenericExpressionField';

import ColorPicker from '../../UI/ColorField/ColorPicker';
import { rgbStringAndAlphaToRGBColor } from '../../Utils/ColorTransformer';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function ColorExpressionField(props: ParameterFieldProps, ref) {
    const field = React.useRef<GenericExpressionField | null | undefined>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    return (
      <GenericExpressionField
        expressionType="string"
        ref={field}
        renderExtraButton={({ style, onChange }) => (
          <ColorPicker
            style={style}
            disableAlpha
            color={rgbStringAndAlphaToRGBColor(props.value)}
            onChangeComplete={(color) => {
              onChange(
                '"' + color.rgb.r + ';' + color.rgb.g + ';' + color.rgb.b + '"'
              );
            }}
          />
        )}
        onExtractAdditionalErrors={(
          expression: string,
          expressioNode: gd.ExpressionNode
        ) => {
          if (expression.trim().startsWith('"\\"')) {
            return 'A color is a text in the format R;G;B, like 100;200;180 (numbers going from 0 to 255). You need to surround the text with quotes, but the text itself should not contain a quote inside.';
          }

          return null;
        }}
        {...props}
      />
    );
  }
);
