import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function MouseField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SelectFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata, value } = props;
  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SelectField
      margin={props.isInline ? 'none' : 'dense'}
      fullWidth
      floatingLabelText={description}
      helperMarkdownText={
        parameterMetadata ? parameterMetadata.getLongDescription() : undefined
      }
      value={value}
      ref={field}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
      onChange={(e, i, value) => props.onChange(value)}
      translatableHintText={t`Choose a mouse button`}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SelectOption value="Left" label={t`Left (primary)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SelectOption value="Right" label={t`Right (secondary)`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SelectOption
        value="Middle"
        label={t`Middle (Auxiliary button, usually the wheel button)`}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SelectOption
        value="Back"
        label={t`Back (Additional button, typically the Browser Back button)`}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SelectOption
        value="Forward"
        label={t`Forward (Additional button, typically the Browser Forward button)`}
      />
    </SelectField>
  );
});

export const renderInlineMouse = ({
  value,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  return value ? (
    value
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <InvalidParameterValue isEmpty>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>Choose a mouse button</Trans>
    </InvalidParameterValue>
  );
};
