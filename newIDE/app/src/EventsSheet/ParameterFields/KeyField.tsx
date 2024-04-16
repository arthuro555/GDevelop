// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import * as React from 'react';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
import SemiControlledAutoComplete, {
  SemiControlledAutoCompleteInterface,
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from '../../UI/SemiControlledAutoComplete';

const keyNames = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'Num0',
  'Num1',
  'Num2',
  'Num3',
  'Num4',
  'Num5',
  'Num6',
  'Num7',
  'Num8',
  'Num9',
  'Numpad0',
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'LShift',
  'RShift',
  'LControl',
  'RControl',
  'LAlt',
  'RAlt',
  'LSystem',
  'RSystem',
  'SemiColon',
  'Comma',
  'Period',
  'Quote',
  'Slash',
  'BackSlash',
  'Tilde',
  'Equal',
  'Dash',
  'Space',
  'Back',
  'Tab',
  'Delete',
  'Insert',
  'Escape',
  'PageUp',
  'PageDown',
  'End',
  'Home',
  'Return',
  'NumpadPageUp',
  'NumpadPageDown',
  'NumpadEnd',
  'NumpadHome',
  'NumpadReturn',
  'Add',
  'Subtract',
  'Multiply',
  'Divide',
  'NumpadAdd',
  'NumpadSubtract',
  'NumpadMultiply',
  'NumpadDivide',
  'Left',
  'Up',
  'Right',
  'Down',
  'NumpadLeft',
  'NumpadUp',
  'NumpadRight',
  'NumpadDown',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'Pause',
];

const isKeyValid = (key: string) => keyNames.indexOf(key) !== -1;

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function KeyField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SemiControlledAutoCompleteInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const {
    value,
    onChange,
    isInline,
    parameterMetadata,
    onRequestClose,
    onApply,
  } = props;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SemiControlledAutoComplete
      margin={props.isInline ? 'none' : 'dense'}
      floatingLabelText={
        parameterMetadata ? parameterMetadata.getDescription() : undefined
      }
      helperMarkdownText={
        parameterMetadata ? parameterMetadata.getLongDescription() : undefined
      }
      fullWidth
      value={value}
      onChange={onChange}
      dataSource={keyNames.map(keyName => ({
        text: keyName,
        value: keyName,
      }))}
      openOnFocus={!isInline}
      onRequestClose={onRequestClose}
      onApply={onApply}
      ref={field}
      errorText={
        !value ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>You must select a key.</Trans>
        ) : !isKeyValid(value) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>You must select a valid key. "{value}" is not valid.</Trans>
        ) : (
          undefined
        )
      }
    />
  );
});

export const renderInlineKey = ({
  value,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <InvalidParameterValue isEmpty>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Choose a key</Trans>
      </InvalidParameterValue>
    );
  }

  return isKeyValid(value) ? (
    value
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <InvalidParameterValue>{value}</InvalidParameterValue>
  );
};
