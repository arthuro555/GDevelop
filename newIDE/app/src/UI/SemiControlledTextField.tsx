import * as React from 'react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module './TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from './TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';

type Props = {
  onChange: (arg1: string) => void,
  value: string,
  commitOnBlur?: boolean,
  onFocus?: (
    arg1: {
      currentTarget: {
        value: string
      },
      preventDefault: () => void
    },
  ) => void,
  onBlur?: (
    arg1: {
      currentTarget: {
        value: string
      }
    },
  ) => void,
  type?: 'text' | 'number',
  // Some TextField props that can be reused:
  onClick?: (event: React.PointerEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  margin?: 'none' | 'dense',
  disabled?: boolean,
  errorText?: React.ReactNode,
  floatingLabelFixed?: boolean,
  floatingLabelText?: React.ReactNode,
  fullWidth?: boolean,
  translatableHintText?: MessageDescriptor,
  hintText?: string,
  helperMarkdownText?: string | null | undefined,
  id?: string,
  inputStyle?: any,
  maxLength?: number,
  precision?: number,
  max?: number,
  min?: number,
  multiline?: boolean,
  name?: string,
  step?: number,
  style?: any,
  rows?: number,
  rowsMax?: number,
  autoFocus?: 'desktop' | 'desktopAndMobileDevices',
  endAdornment?: React.ReactNode
};

export type SemiControlledTextFieldInterface = {
  focus: FieldFocusFunction,
  forceSetValue: (text: string) => void,
  forceSetSelection: (start: number, end: number) => void,
  getInputNode: () => HTMLInputElement | null | undefined,
  getFieldWidth: () => number | null | undefined,
  getCaretPosition: () => number | null | undefined
};

/**
 * This component works like a material-ui TextField, except that
 * the value passed as props is not forced into the text field when the user
 * is typing. This is useful if the parent component can do modifications on the value:
 * the user won't be interrupted or have the value changed until he blurs the field.
 */
const SemiControlledTextField = React.forwardRef<Props, SemiControlledTextFieldInterface>((props, ref) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string | null | undefined>(null);
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(null);

  const forceSetValue = (text: string) => {
    setText(text);
  };

  const forceSetSelection = (selectionStart: number, selectionEnd: number) => {
    const input = getInputNode();
    if (input) {
      input.selectionStart = selectionStart;
      input.selectionEnd = selectionEnd;
    }
  };

  const focus: FieldFocusFunction = options => {
    if (textFieldRef.current) textFieldRef.current.focus(options);
  };

  const getInputNode = (): HTMLInputElement | null | undefined => {
    if (textFieldRef.current) return textFieldRef.current.getInputNode();
  };

  const getFieldWidth = () => {
    if (textFieldRef.current) return textFieldRef.current.getFieldWidth();
  };

  const getCaretPosition = () => {
    if (textFieldRef.current) return textFieldRef.current.getCaretPosition();
  };

// @ts-expect-error - TS2739 - Type '{ focus: FieldFocusFunction; getInputNode: () => HTMLInputElement | null | undefined; forceSetSelection: (selectionStart: number, selectionEnd: number) => void; forceSetValue: (text: string) => void; getFieldWidth: () => any; getCaretPosition: () => any; }' is missing the following properties from type 'Props': onChange, value
  React.useImperativeHandle(ref, () => ({
    focus,
    getInputNode,
    forceSetSelection,
    forceSetValue,
    getFieldWidth,
    getCaretPosition,
  }));

  const {
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SemiControlledTextFieldInterface'.
    value,
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SemiControlledTextFieldInterface'.
    onChange,
// @ts-expect-error - TS2339 - Property 'commitOnBlur' does not exist on type 'SemiControlledTextFieldInterface'.
    commitOnBlur,
// @ts-expect-error - TS2339 - Property 'onFocus' does not exist on type 'SemiControlledTextFieldInterface'.
    onFocus,
// @ts-expect-error - TS2339 - Property 'onBlur' does not exist on type 'SemiControlledTextFieldInterface'.
    onBlur,
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'SemiControlledTextFieldInterface'.
    type,
    ...otherProps
  } = props;

  return (
    // $FlowFixMe
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextField
      {...otherProps}
      type={type || 'text'}
      ref={textFieldRef}
      value={focused ? text : value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onFocus={event => {
        setFocused(true);
        setText(value);

        if (onFocus) onFocus(event);
      }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
      onChange={(event, newValue) => {
        setText(newValue);
        if (!commitOnBlur) onChange(newValue);
      }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
      onBlur={event => {
        onChange(event.currentTarget.value);
        setFocused(false);
        setText(null);

        if (onBlur) onBlur(event);
      }}
    />
  );
});

export default SemiControlledTextField;
