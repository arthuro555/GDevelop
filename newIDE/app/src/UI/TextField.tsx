import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import IconButton from '@material-ui/core/IconButton';
import MUITextField from '@material-ui/core/TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
import InputAdornment from '@material-ui/core/InputAdornment';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Visibility'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Visibility.js' implicitly has an 'any' type.
import Visibility from './CustomSvgIcons/Visibility';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module './MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from './MarkdownText';
import { useShouldAutofocusInput } from './Responsive/ScreenTypeMeasurer';
import { dataObjectToProps, HTMLDataset } from '../Utils/HTMLDataset';

type ValueProps = // Support "text", "password" and "email" type:
// "email" type is used to display appropriate keyboard on mobile.
// Support "number" type (note that onChange returns a string):
{
  type?: 'text' | 'password' | 'email',
  value: string,
  onChange?: (
    event: {
      target: {
        value: string
      }
    },
    text: string,
  ) => void
} | // Support an "uncontrolled" field:
{
  type: 'number',
  value: number | string,
  onChange?: (event: Record<any, any>, value: string) => void
} | // Support an empty field with just a hint text:
{
  defaultValue: string
} | {
  translatableHintText?: MessageDescriptor,
  hintText?: string
};

// We support a subset of the props supported by Material-UI v0.x TextField
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = // Value and change handling:
(ValueProps) & {
  // DOM events:
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
  // Advanced DOM events, for exceptional usage:
  onClick?: (event: React.PointerEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent) => void,
  onKeyUp?: (event: React.KeyboardEvent) => void,
  onKeyDown?: (event: React.KeyboardEvent) => void,
  stopContextMenuPropagation?: boolean,
  // Error handling/Validation:
  errorText?: React.ReactNode,
  required?: boolean,
  // Accessibility:
  disabled?: boolean,
  readOnly?: boolean,
  // Labels:
  floatingLabelFixed?: boolean,
  floatingLabelText?: React.ReactNode,
  name?: string,
  translatableHintText?: MessageDescriptor,
  hintText?: string,
  helperMarkdownText?: string | null | undefined,
  id?: string,
  dataset?: HTMLDataset,
  // Keyboard focus:
  autoFocus?: 'desktop' | 'desktopAndMobileDevices',
  // String text field:
  maxLength?: number,
  // Number text field:
  precision?: number,
  max?: number,
  min?: number,
  step?: number,
  // Support for multiline:
  multiline?: boolean,
  rows?: number,
  rowsMax?: number,
  // Support for adornments:
  endAdornment?: React.ReactNode | null | undefined,
  startAdornment?: React.ReactNode | null | undefined,
  // Styling:
  margin?: 'none' | 'dense',
  fullWidth?: boolean,
  style?: {
    fontSize?: 12 | 14 | 18 | '1.3em' | 'inherit' // 'inherit' should only be used on an event sheet where font size is adapted to zoom.,
    fontStyle?: 'normal' | 'italic',
    width?: number | '30%' | '70%' | '100%',
    flex?: 1,
    top?: number,
    padding?: number
  },
  inputStyle?: {
    // Allow to customize color (replace by color prop?) // TO VERIFY
    color?: string,
    WebkitTextFillColor?: string,
    fontSize?: '1em' | 14,
    // Allow to display monospaced font
    fontFamily?: '"Lucida Console", Monaco, monospace',
    padding?: 0
  },
  underlineShow?: boolean
};

/**
 * Compute the `variant`, `margin` and `hiddenLabel` props for a material-ui `TextField`
 * to give it the proper style according to its usage.
 *
 * 1. A traditional `TextField` is by default "filled"
 *    (see material-ui component doc: https://material-ui.com/components/text-fields/
 *     and [Material Design specification](https://material.io/components/text-fields/#specs)).
 *
 *   The filled background gives them more emphasize compared compared to a single underline
 *   (as done in previous GDevelop versions). They have a label indicating what they refer to.
 *
 * 2. Sometimes, a floating label would not provide more information and is considered to be
 *   obvious (thanks to the existing value, dialog title or button label).
 *
 *   In this case, not specifying a label is fine (`floatingLabelText` is undefined or empty).
 *   This will lead to a filled text field without the extra space for the label.
 *
 *   A `placeholder` should still be passed so that the user can know what the field is about
 *     when not filled.
 *   Example: this is particularly adapted to file/folder pickers (see `LocalFilePicker`,
 *     `LocalFolderPicker`) or a `SearchPanel`.
 *
 * 3. `TextField` in `MiniToolbar` are usually less changed by the user than other text fields
 *   (for example, they are the animation name or the object name in a Sprite editor.
 *   These are not changed a lot compared to behaviours or object properties).
 *
 *   They also are already in a MiniToolbar that has an "emphasis" with the slightly
 *   different background color of `MiniToolbar`. Finally, `MiniToolbar` is also small in height.
 *
 *   In these cases, use `none` for `margin`.
 *   This will generate a text field without filled background (just an underline).
 *
 * 4. `TextField` can be used with `margin="none"` and also the underline hidden,
 *   in the very special case of an embedded text field in another form control (like `SearchBar`).
 */
export const computeTextFieldStyleProps = (props: {
  margin?: 'none' | 'dense',
  floatingLabelText?: React.ReactNode
}) => {
  return {
    // Use "filled" variant by default, unless `margin` is "none" (see 1. and 2.)
    variant: props.margin === 'none' ? 'standard' : 'filled',
    // Use "dense" fields by default, unless `margin` is "none" (see 3.)
    margin: props.margin === 'none' ? 'none' : 'dense',
    // For variant "standard", if there is no label, no extra space is taken. For variant "filled",
    // even when no label is passed, there is a space for it. Remove this space if no
    // label is provided. (see 2.)
    hiddenLabel: props.margin !== 'none' && !props.floatingLabelText,
  };
};

export type TextFieldInterface = {
  focus: FieldFocusFunction,
  blur: () => void,
  getInputNode: () => HTMLInputElement | null | undefined,
  getFieldWidth: () => number | null | undefined,
  getCaretPosition: () => number | null | undefined
};

/**
 * A text field based on Material-UI text field.
 */
const TextField = React.forwardRef<Props, TextFieldInterface>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);
// @ts-expect-error - TS2749 - 'MUITextField' refers to a value, but is being used as a type here. Did you mean 'typeof MUITextField'?
  const muiTextFieldRef = React.useRef<MUITextField | null | undefined>(null);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

  const focus: FieldFocusFunction = options => {
    const { current: input } = inputRef;
    if (input) {
      input.focus();

      if (options && options.selectAll) {
        input.select();
      }

// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'TextFieldInterface'.
      if (options && options.caretPosition === 'end' && props.value) {
        input.setSelectionRange(
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'TextFieldInterface'.
          props.value.toString().length,
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'TextFieldInterface'.
          props.value.toString().length
        );
      }
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'TextFieldInterface'.
      if (options && Number.isInteger(options.caretPosition) && props.value) {
        const position = Number(options.caretPosition);
        input.setSelectionRange(position, position);
      }
    }
  };

  const blur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const getInputNode = (): HTMLInputElement | null | undefined => {
    if (inputRef.current) {
      return inputRef.current;
    }

    return null;
  };

  const getFieldWidth = () => {
    if (muiTextFieldRef.current) {
      return muiTextFieldRef.current.clientWidth;
    }
    return null;
  };

  const getCaretPosition = () => {
    if (inputRef.current) {
      return inputRef.current.selectionStart;
    }
    return null;
  };

// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; blur: () => void; getInputNode: () => HTMLInputElement | null | undefined; getFieldWidth: () => any; getCaretPosition: () => number | null; }' is not assignable to type '({ type?: "text" | "email" | "password" | undefined; value: string; onChange?: ((event: { target: { value: string; }; }, text: string) => void) | undefined; } & { onFocus?: ((arg1: { currentTarget: { ...; }; preventDefault: () => void; }) => void) | undefined; ... 33 more ...; underlineShow?: boolean | undefined; })...'.
  React.useImperativeHandle(ref, () => ({
    focus,
    blur,
    getInputNode,
    getFieldWidth,
    getCaretPosition,
  }));

// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'TextFieldInterface'.
  const onChange = props.onChange || undefined;

// @ts-expect-error - TS2339 - Property 'helperMarkdownText' does not exist on type 'TextFieldInterface'.
  const helperText = props.helperMarkdownText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'helperMarkdownText' does not exist on type 'TextFieldInterface'.
    <MarkdownText source={props.helperMarkdownText} />
  ) : null;

  const shouldAutofocusInput = useShouldAutofocusInput();
// @ts-expect-error - TS2339 - Property 'autoFocus' does not exist on type 'TextFieldInterface'.
  const shouldAutoFocusTextField = !props.autoFocus
    ? false
// @ts-expect-error - TS2339 - Property 'autoFocus' does not exist on type 'TextFieldInterface'.
    : props.autoFocus === 'desktopAndMobileDevices'
    ? true
    : shouldAutofocusInput;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MUITextField
          ref={muiTextFieldRef}
          color="secondary"
          // Value and change handling:
          type={
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'TextFieldInterface'.
            props.type !== undefined
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'TextFieldInterface'.
              ? props.type === 'password'
                ? isPasswordVisible
                  ? 'text'
                  : 'password'
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'TextFieldInterface'.
                : props.type
              : undefined
          }
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'value' does not exist on type 'TextFieldInterface'.
          value={props.value !== undefined ? props.value : undefined}
          defaultValue={
// @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'defaultValue' does not exist on type 'TextFieldInterface'.
            props.defaultValue !== undefined ? props.defaultValue : undefined
          }
// @ts-expect-error - TS2322 - Type 'Event | ((any: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any) | undefined' is not assignable to type 'ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined'.
          onChange={
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'value' does not exist on type 'EventTarget'. | TS1005 - '}' expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
            onChange ? event: any => onChange(event, event.target.value) : undefined
          }
          onContextMenu={
// @ts-expect-error - TS2339 - Property 'stopContextMenuPropagation' does not exist on type 'TextFieldInterface'.
            props.stopContextMenuPropagation
              ? e: any => e.stopPropagation()
{ /* @ts-expect-error - TS1005 - '}' expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
              : undefined
          }
          // Error handling:
{ /* @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'TextFieldInterface'. */}
          error={!!props.errorText}
{ /* @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'TextFieldInterface'. */}
          helperText={props.errorText || helperText}
{ /* @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'TextFieldInterface'. */}
          disabled={props.disabled}
{ /* @ts-expect-error - TS2339 - Property 'required' does not exist on type 'TextFieldInterface'. */}
          required={props.required}
          InputLabelProps={{
// @ts-expect-error - TS2339 - Property 'floatingLabelFixed' does not exist on type 'TextFieldInterface'.
            shrink: props.floatingLabelFixed ? true : undefined,
          }}
{ /* @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type 'TextFieldInterface'. */}
          label={props.floatingLabelText}
{ /* @ts-expect-error - TS2339 - Property 'name' does not exist on type 'TextFieldInterface'. */}
          name={props.name}
          placeholder={
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'TextFieldInterface'.
            props.hintText
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'TextFieldInterface'.
              ? props.hintText
// @ts-expect-error - TS2339 - Property 'translatableHintText' does not exist on type 'TextFieldInterface'.
              : props.translatableHintText
              ? i18n._(props.translatableHintText)
              : undefined
          }
{ /* @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TextFieldInterface'. */}
          id={props.id}
          // Keyboard focus:
          autoFocus={shouldAutoFocusTextField}
          // Multiline:
{ /* @ts-expect-error - TS2339 - Property 'multiline' does not exist on type 'TextFieldInterface'. */}
          multiline={props.multiline}
{ /* @ts-expect-error - TS2339 - Property 'rows' does not exist on type 'TextFieldInterface'. */}
          rows={props.rows}
{ /* @ts-expect-error - TS2339 - Property 'rowsMax' does not exist on type 'TextFieldInterface'. */}
          rowsMax={props.rowsMax}
          // Styling:
{ /* @ts-expect-error - TS2609 - JSX spread child must be an array type. | TS2559 - Type 'TextFieldInterface' has no properties in common with type '{ margin?: "none" | "dense" | undefined; floatingLabelText?: ReactNode; }'. */}
          {...computeTextFieldStyleProps(props)}
{ /* @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type 'TextFieldInterface'. */}
          fullWidth={props.fullWidth}
          InputProps={{
            disableUnderline:
// @ts-expect-error - TS2339 - Property 'underlineShow' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'underlineShow' does not exist on type 'TextFieldInterface'.
              props.underlineShow === undefined ? false : !props.underlineShow,
            style: {
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
              fontSize: props.style ? props.style.fontSize : undefined,
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
              fontStyle: props.style ? props.style.fontStyle : undefined,
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
              padding: props.style ? props.style.padding : undefined,
            },
// @ts-expect-error - TS2339 - Property 'readOnly' does not exist on type 'TextFieldInterface'.
            readOnly: props.readOnly,
            inputProps: {
// @ts-expect-error - TS2339 - Property 'onKeyPress' does not exist on type 'TextFieldInterface'.
              onKeyPress: props.onKeyPress,
// @ts-expect-error - TS2339 - Property 'onKeyUp' does not exist on type 'TextFieldInterface'.
              onKeyUp: props.onKeyUp,
// @ts-expect-error - TS2339 - Property 'onKeyDown' does not exist on type 'TextFieldInterface'.
              onKeyDown: props.onKeyDown,
// @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'TextFieldInterface'.
              onClick: props.onClick,
              // String field props:
// @ts-expect-error - TS2339 - Property 'maxLength' does not exist on type 'TextFieldInterface'.
              maxLength: props.maxLength,
              // Number field props:
// @ts-expect-error - TS2339 - Property 'max' does not exist on type 'TextFieldInterface'.
              max: props.max,
// @ts-expect-error - TS2339 - Property 'min' does not exist on type 'TextFieldInterface'.
              min: props.min,
// @ts-expect-error - TS2339 - Property 'step' does not exist on type 'TextFieldInterface'.
              step: props.step,
              autoCapitalize: 'off', // For Safari iOS, avoid auto-capitalization
// @ts-expect-error - TS2339 - Property 'inputStyle' does not exist on type 'TextFieldInterface'.
              style: props.inputStyle,
// @ts-expect-error - TS2339 - Property 'dataset' does not exist on type 'TextFieldInterface'.
              ...dataObjectToProps(props.dataset),
            },
            // Input adornment:
            endAdornment:
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'TextFieldInterface'. | TS2339 - Property 'type' does not exist on type 'TextFieldInterface'.
              props.type !== undefined && props.type === 'password' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <InputAdornment position="end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    size="small"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Visibility />
                  </IconButton>
                </InputAdornment>
// @ts-expect-error - TS2339 - Property 'endAdornment' does not exist on type 'TextFieldInterface'.
              ) : props.endAdornment ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <InputAdornment
                  position="end"
// @ts-expect-error - TS2339 - Property 'multiline' does not exist on type 'TextFieldInterface'.
                  style={props.multiline ? { marginTop: -17 } : undefined}
                >
{ /* @ts-expect-error - TS2339 - Property 'endAdornment' does not exist on type 'TextFieldInterface'. */}
                  {props.endAdornment}
                </InputAdornment>
              ) : (
                undefined
              ),
// @ts-expect-error - TS2339 - Property 'startAdornment' does not exist on type 'TextFieldInterface'.
            startAdornment: props.startAdornment ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <InputAdornment position="start">
{ /* @ts-expect-error - TS2339 - Property 'startAdornment' does not exist on type 'TextFieldInterface'. */}
                {props.startAdornment}
              </InputAdornment>
            ) : (
              undefined
            ),
          }}
          style={
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
            props.style
              ? {
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
                  width: props.style.width || undefined,
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
                  flex: props.style.flex || undefined,
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'TextFieldInterface'.
                  top: props.style.top || undefined,
                }
              : undefined
          }
{ /* @ts-expect-error - TS2551 - Property 'onFocus' does not exist on type 'TextFieldInterface'. Did you mean 'focus'? */}
          onFocus={props.onFocus}
{ /* @ts-expect-error - TS2551 - Property 'onBlur' does not exist on type 'TextFieldInterface'. Did you mean 'blur'? */}
          onBlur={props.onBlur}
          inputRef={inputRef}
{ /* @ts-expect-error - TS1382 - Unexpected token. Did you mean `{'>'}` or `&gt;`? | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
          spellCheck="false"
        />
      )}
    </I18n>
  );
});

export default TextField;

// The "top" offset to add to the position of the TextField when
// it's used inside a ListItem "primaryText"
export const noMarginTextFieldInListItemTopOffset = 0;
