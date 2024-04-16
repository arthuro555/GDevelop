import * as React from 'react';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
// @ts-expect-error - TS6142 - Module '../../UI/ColorField/ColorPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/ColorPicker.tsx', but '--jsx' is not set.
import ColorPicker from '../../UI/ColorField/ColorPicker';
import { rgbStringAndAlphaToRGBColor } from '../../Utils/ColorTransformer';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function ColorExpressionField(props: ParameterFieldProps, ref) {
  const field = React.useRef<GenericExpressionField | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GenericExpressionField
      expressionType="string"
      ref={field}
// @ts-expect-error - TS7031 - Binding element 'style' implicitly has an 'any' type. | TS7031 - Binding element 'onChange' implicitly has an 'any' type.
      renderExtraButton={({ style, onChange }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColorPicker
          style={style}
          disableAlpha
          color={rgbStringAndAlphaToRGBColor(props.value)}
// @ts-expect-error - TS7006 - Parameter 'color' implicitly has an 'any' type.
          onChangeComplete={color => {
            onChange(
              '"' + color.rgb.r + ';' + color.rgb.g + ';' + color.rgb.b + '"'
            );
          }}
        />
      )}
      onExtractAdditionalErrors={(
        expression: string,
        expressioNode: gdExpressionNode
      ) => {
        if (expression.trim().startsWith('"\\"')) {
          return 'A color is a text in the format R;G;B, like 100;200;180 (numbers going from 0 to 255). You need to surround the text with quotes, but the text itself should not contain a quote inside.';
        }

        return null;
      }}
      {...props}
    />
  );
});
