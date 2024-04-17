
import {t} from '@lingui/macro';
import * as React from 'react';

import { I18n } from '@lingui/react';
import TextField from '@material-ui/core/TextField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';

import { computeTextFieldStyleProps } from './TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';

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
const SelectField = React.forwardRef<SelectFieldInterface, Props>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null | undefined>(null);

  const focus: FieldFocusFunction = options => {
    if (inputRef.current) inputRef.current.focus();
  };


  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const selectStyles = useSelectStyles(props.textAlign);


  const onChange = props.onChange || undefined;

  // Dig into children props to see if the current value is valid or not.
  let hasValidValue = true;

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

      childrenValues.filter(childValue => childValue === props.value)
        .length !== 0;
  }

  const displayedValue = hasValidValue ? props.value : INVALID_VALUE;


  const helperText = props.errorText ? (

    props.errorText

  ) : props.helperMarkdownText ? (

    <MarkdownText source={props.helperMarkdownText} />
  ) : null;

  return (

    <I18n>
      {({ i18n }) => (

        <TextField

          id={props.id}
          select
          color="secondary"
          {...computeTextFieldStyleProps(props)}

          disabled={props.disabled}

          fullWidth={props.fullWidth}

          label={props.floatingLabelText}
          helperText={helperText}

          error={!!props.errorText}
          value={displayedValue}

          onClick={props.stopPropagationOnClick ? stopPropagation : undefined}
          onChange={
            onChange
              ? event: any => {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'value' does not exist on type 'EventTarget'.
                  onChange(event, -1, event.target.value);
                }
{ }
              : undefined
          }
          InputProps={{

            style: props.inputStyle,

            disableUnderline: !!props.disableUnderline,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          SelectProps={{
            native: true,
            classes: selectStyles,
          }}
          style={props.style}
          inputRef={inputRef}
        >
          {!hasValidValue ? (

            <option value={INVALID_VALUE} disabled>
              {props.translatableHintText
                ? i18n._(props.translatableHintText)
                : i18n._(t`Choose an option`)}
            </option>
          ) : null}
          {props.children}
        </TextField>
      )}

    </I18n>

  );

});

export default SelectField;
