import * as React from 'react';
import SemiControlledTextField, {
  SemiControlledTextFieldInterface,
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
} from '../../UI/SemiControlledTextField';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function DefaultField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SemiControlledTextFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata } = props;
  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledTextField
      margin={props.isInline ? 'none' : 'dense'}
      commitOnBlur
      value={props.value}
      floatingLabelText={description}
      helperMarkdownText={
        parameterMetadata ? parameterMetadata.getLongDescription() : undefined
      }
      onChange={(text: string) => props.onChange(text)}
      ref={field}
      fullWidth
    />
  );
});

export const renderInlineDefaultField = ({
  value,
  expressionIsValid,
  parameterMetadata,
  InvalidParameterValue,
  MissingParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value && !parameterMetadata.isOptional()) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <MissingParameterValue />;
  }
  if (!expressionIsValid) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <InvalidParameterValue>{value}</InvalidParameterValue>;
  }
  return value;
};
