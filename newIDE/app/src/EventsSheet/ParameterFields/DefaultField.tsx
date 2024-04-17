import * as React from 'react';
import SemiControlledTextField, {
  SemiControlledTextFieldInterface,
} from '../../UI/SemiControlledTextField';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function DefaultField(props: ParameterFieldProps, ref) {
    const field = React.useRef<
      SemiControlledTextFieldInterface | null | undefined
    >(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const { parameterMetadata } = props;
    const description = parameterMetadata
      ? parameterMetadata.getDescription()
      : undefined;

    return (
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
  }
);

export const renderInlineDefaultField = ({
  value,
  expressionIsValid,
  parameterMetadata,
  InvalidParameterValue,
  MissingParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value && !parameterMetadata.isOptional()) {
    return <MissingParameterValue />;
  }
  if (!expressionIsValid) {
    return <InvalidParameterValue>{value}</InvalidParameterValue>;
  }
  return value;
};
