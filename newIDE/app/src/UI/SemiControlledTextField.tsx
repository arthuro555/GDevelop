import * as React from 'react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

import TextField, { TextFieldInterface } from './TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';

type Props = {
  onChange: (arg1: string) => void;
  value: string;
  commitOnBlur?: boolean;
  onFocus?: (arg1: {
    currentTarget: {
      value: string;
    };
    preventDefault: () => void;
  }) => void;
  onBlur?: (arg1: {
    currentTarget: {
      value: string;
    };
  }) => void;
  type?: 'text' | 'number';
  // Some TextField props that can be reused:
  onClick?: (event: React.PointerEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  margin?: 'none' | 'dense';
  disabled?: boolean;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  translatableHintText?: MessageDescriptor;
  hintText?: string;
  helperMarkdownText?: string | null | undefined;
  id?: string;
  inputStyle?: any;
  maxLength?: number;
  precision?: number;
  max?: number;
  min?: number;
  multiline?: boolean;
  name?: string;
  step?: number;
  style?: any;
  rows?: number;
  rowsMax?: number;
  autoFocus?: 'desktop' | 'desktopAndMobileDevices';
  endAdornment?: React.ReactNode;
};

export type SemiControlledTextFieldInterface = {
  focus: FieldFocusFunction;
  forceSetValue: (text: string) => void;
  forceSetSelection: (start: number, end: number) => void;
  getInputNode: () => HTMLInputElement | null | undefined;
  getFieldWidth: () => number | null | undefined;
  getCaretPosition: () => number | null | undefined;
};

/**
 * This component works like a material-ui TextField, except that
 * the value passed as props is not forced into the text field when the user
 * is typing. This is useful if the parent component can do modifications on the value:
 * the user won't be interrupted or have the value changed until he blurs the field.
 */
const SemiControlledTextField = React.forwardRef<
  SemiControlledTextFieldInterface,
  Props
>((props, ref) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string | null | undefined>(null);
  const textFieldRef = React.useRef<TextFieldInterface | null | undefined>(
    null
  );

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

  const focus: FieldFocusFunction = (options) => {
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

  React.useImperativeHandle(ref, () => ({
    focus,
    getInputNode,
    forceSetSelection,
    forceSetValue,
    getFieldWidth,
    getCaretPosition,
  }));

  const {
    value,

    onChange,

    commitOnBlur,

    onFocus,

    onBlur,

    type,
    ...otherProps
  } = props;

  return (
    // $FlowFixMe

    <TextField
      {...otherProps}
// @ts-expect-error - TS2322 - Type '"number" | "text"' is not assignable to type '"number"'.
      type={type || 'text'}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<TextFieldInterface | null | undefined>' is not assignable to type 'Ref<TextFieldInterface> | undefined'.
      ref={textFieldRef}
// @ts-expect-error - TS2322 - Type 'string | null | undefined' is not assignable to type 'string | number'.
      value={focused ? text : value}
      onFocus={(event) => {
        setFocused(true);
        setText(value);

        if (onFocus) onFocus(event);
      }}
      // @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
      onChange={(event, newValue) => {
        setText(newValue);
        if (!commitOnBlur) onChange(newValue);
      }}
      onBlur={(event) => {
        onChange(event.currentTarget.value);
        setFocused(false);
        setText(null);

        if (onBlur) onBlur(event);
      }}
    />
  );
});

export default SemiControlledTextField;
