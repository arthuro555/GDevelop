// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import TextField from '@material-ui/core/TextField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module './TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import { computeTextFieldStyleProps } from './TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module './MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from './MarkdownText';
import { makeStyles } from '@material-ui/core';

const INVALID_VALUE = '';
// @ts-expect-error - TS1005 - ',' expected. | TS7005 - Variable 'any' implicitly has an 'any' type. | TS1005 - ';' expected. | TS2532 - Object is possibly 'undefined'.
const stopPropagation = event: any => event.stopPropagation();

const useSelectStyles = textAlign: undefined | 'center' =>
  makeStyles({
    root: {
      textAlign: textAlign || 'left',
      cursor: 'default',
    },
  })();

export type SelectFieldInterface = {
  focus: FieldFocusFunction
};

type ValueProps = {
  value: number | string,
  // event and index should not be used, and be removed eventually
  onChange?: (
    event: {
      target: {
        value: string
      }
    },
    index: number,
    // Note that even for number values, a string is returned
    text: string,
  ) => void
};

// We support a subset of the props supported by Material-UI v0.x SelectField
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = (ValueProps) & {
  fullWidth?: boolean,
  children: React.ReactNode,
  disabled?: boolean,
  stopPropagationOnClick?: boolean,
  id?: string | null | undefined,
  style?: {
    flex?: 1,
    width?: 'auto'
  },
  inputStyle?: {
    fontSize?: 14,
    color?: string
  },
  margin?: 'none' | 'dense',
  disableUnderline?: true,
  textAlign?: 'center',
  floatingLabelText?: React.ReactNode,
  helperMarkdownText?: string | null | undefined,
  // If a hint text is specified, will be shown as an option for the empty
  // value (""), disabled.
  translatableHintText?: MessageDescriptor,
  errorText?: React.ReactNode
};

/**
 * A select field based on Material-UI select field.
 * To be used with `SelectOption`.
 */
const SelectField = React.forwardRef<Props, SelectFieldInterface>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (inputRef.current) inputRef.current.focus();
  };

// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'Props'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));
// @ts-expect-error - TS2339 - Property 'textAlign' does not exist on type 'SelectFieldInterface'.
  const selectStyles = useSelectStyles(props.textAlign);

// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SelectFieldInterface'.
  const onChange = props.onChange || undefined;

  // Dig into children props to see if the current value is valid or not.
  let hasValidValue = true;
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'SelectFieldInterface'.
  const childrenValues = React.Children.map(props.children, child => {
    if (child === null || !child.props) return null;

    return child.props.value;
  });
  if (!childrenValues) {
    console.error(
      'SelectField has been passed no or invalid children. Only SelectOption and null are supported.'
    );
  } else {
    hasValidValue =
// @ts-expect-error - TS7006 - Parameter 'childValue' implicitly has an 'any' type. | TS2339 - Property 'value' does not exist on type 'SelectFieldInterface'.
      childrenValues.filter(childValue => childValue === props.value)
        .length !== 0;
  }
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SelectFieldInterface'.
  const displayedValue = hasValidValue ? props.value : INVALID_VALUE;

// @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'SelectFieldInterface'.
  const helperText = props.errorText ? (
// @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'SelectFieldInterface'.
    props.errorText
// @ts-expect-error - TS2339 - Property 'helperMarkdownText' does not exist on type 'SelectFieldInterface'.
  ) : props.helperMarkdownText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'helperMarkdownText' does not exist on type 'SelectFieldInterface'.
    <MarkdownText source={props.helperMarkdownText} />
  ) : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <TextField
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'SelectFieldInterface'.
          id={props.id}
          select
          color="secondary"
          {...computeTextFieldStyleProps(props)}
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SelectFieldInterface'.
          disabled={props.disabled}
// @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type 'SelectFieldInterface'.
          fullWidth={props.fullWidth}
// @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type 'SelectFieldInterface'.
          label={props.floatingLabelText}
          helperText={helperText}
// @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'SelectFieldInterface'.
          error={!!props.errorText}
          value={displayedValue}
// @ts-expect-error - TS2339 - Property 'stopPropagationOnClick' does not exist on type 'SelectFieldInterface'.
          onClick={props.stopPropagationOnClick ? stopPropagation : undefined}
          onChange={
            onChange
              ? event: any => {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'value' does not exist on type 'EventTarget'.
                  onChange(event, -1, event.target.value);
                }
{ /* @ts-expect-error - TS1005 - '}' expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
              : undefined
          }
          InputProps={{
// @ts-expect-error - TS2339 - Property 'inputStyle' does not exist on type 'SelectFieldInterface'.
            style: props.inputStyle,
// @ts-expect-error - TS2339 - Property 'disableUnderline' does not exist on type 'SelectFieldInterface'.
            disableUnderline: !!props.disableUnderline,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          SelectProps={{
            native: true,
            classes: selectStyles,
          }}
{ /* @ts-expect-error - TS2339 - Property 'style' does not exist on type 'SelectFieldInterface'. */}
          style={props.style}
          inputRef={inputRef}
{ /* @ts-expect-error - TS1382 - Unexpected token. Did you mean `{'>'}` or `&gt;`? */}
        >
          {!hasValidValue ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <option value={INVALID_VALUE} disabled>
{ /* @ts-expect-error - TS2339 - Property 'translatableHintText' does not exist on type 'SelectFieldInterface'. */}
              {props.translatableHintText
                ? i18n._(props.translatableHintText)
                : i18n._(t`Choose an option`)}
            </option>
          ) : null}
{ /* @ts-expect-error - TS2339 - Property 'children' does not exist on type 'SelectFieldInterface'. */}
          {props.children}
{ /* @ts-expect-error - TS17002 - Expected corresponding JSX closing tag for 'I18n'. */}
        </TextField>
      )}
// @ts-expect-error - TS1005 - ',' expected.
    </I18n>
// @ts-expect-error - TS1109 - Expression expected.
  );
// @ts-expect-error - TS1128 - Declaration or statement expected. | TS1128 - Declaration or statement expected.
});

export default SelectField;
