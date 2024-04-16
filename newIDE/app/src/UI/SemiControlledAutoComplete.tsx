import * as React from 'react';
import { useState } from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import TextField from '@material-ui/core/TextField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module './ListIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListIcon.tsx', but '--jsx' is not set.
import ListIcon from './ListIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// @ts-expect-error - TS6142 - Module './MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from './MarkdownText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ListItem from '@material-ui/core/ListItem';
// @ts-expect-error - TS6142 - Module './TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import { computeTextFieldStyleProps } from './TextField';
import { FieldFocusFunction } from '../EventsSheet/ParameterFields/ParameterFieldCommons';
import { makeStyles } from '@material-ui/core/styles';
import muiZIndex from '@material-ui/core/styles/zIndex';
import {
  shouldCloseOrCancel,
  shouldSubmit,
  shouldValidate,
} from './KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from './TextEllipsis';
// @ts-expect-error - TS6142 - Module './Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from './Paper';

export const AutocompletePaperComponent = (props: any) => (
  // Use light background so that it's in contrast with background that
  // is either dark or medium (in dialogs).
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Paper {...props} background="light" />
);

type Option = {
  type: 'separator'
} | {
  text: string // The text used for filtering. If empty, item is always shown.,
  value: string // The value to show on screen and to be selected,
  translatableValue?: MessageDescriptor,
  onClick?: () => undefined | Promise<undefined> // If defined, will be called when the item is clicked. onChange/onChoose won't be called.,
  renderIcon?: () => React.ReactElement<React.ComponentProps<typeof ListIcon | typeof SvgIcon>> | null | undefined
};

export type DataSource = Array<Option>;

type Props = {
  value: string,
  onChange: (arg1: string) => void,
  onChoose?: (arg1: string) => void,
  dataSource: DataSource,
  id?: string | null | undefined,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onClick?: (event: React.PointerEvent<HTMLInputElement>) => void,
  commitOnInputChange?: boolean,
  onRequestClose?: () => void,
  onApply?: () => void,
  errorText?: React.ReactNode,
  disabled?: boolean,
  floatingLabelText?: React.ReactNode,
  helperMarkdownText?: string | null | undefined,
  hintText?: MessageDescriptor | string,
  fullWidth?: boolean,
  margin?: 'none' | 'dense',
  textFieldStyle?: any,
  openOnFocus?: boolean,
  style?: any,
  inputStyle?: any
};

export type SemiControlledAutoCompleteInterface = {
  focus: FieldFocusFunction,
  forceInputValueTo: (newValue: string) => void
};

export const autocompleteStyles = {
  container: {
    position: 'relative',
    width: '100%',
  },
  listItem: {
    // Make the list items very dense:
    padding: 0,
    margin: 0,
  },
  listbox: { padding: 0, margin: 0 },
  listItemText: {
    margin: '1px 0',
  },
} as const;

const useStyles = makeStyles({
  option: {
    cursor: 'default',
  },
  listbox: autocompleteStyles.listbox,
  input: {
    width: 'auto',
    flexGrow: 1,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  popper: {
    zIndex: muiZIndex.tooltip + 100,
  },
});

const makeRenderItem = (i18n: I18nType) => (option: Option, state: any): React.ReactElement => {
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'. | TS2339 - Property 'type' does not exist on type 'Option'.
  if (option.type && option.type === 'separator') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ListItem
        divider
        disableGutters
        component={'div'}
        style={autocompleteStyles.listItem}
      />
    );
  }

// @ts-expect-error - TS2339 - Property 'translatableValue' does not exist on type 'Option'.
  const value = option.translatableValue
// @ts-expect-error - TS2339 - Property 'translatableValue' does not exist on type 'Option'.
    ? i18n._(option.translatableValue)
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
    : option.value;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ListItem
      dense={true}
      component={'div'}
      style={autocompleteStyles.listItem}
    >
{ /* @ts-expect-error - TS2339 - Property 'renderIcon' does not exist on type 'Option'. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'renderIcon' does not exist on type 'Option'. */}
      {option.renderIcon && <ListItemIcon>{option.renderIcon()}</ListItemIcon>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ListItemText
        style={autocompleteStyles.listItemText}
        primary={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div title={value} style={textEllipsisStyle}>
            {value}
          </div>
        }
      />
    </ListItem>
  );
};

const isOptionDisabled = (option: Option) =>
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
  option.type === 'separator' ? true : false;

const filterFunction = (options: DataSource, state: any, value: string): DataSource => {
  const lowercaseInputValue = value.toLowerCase();
  const optionList = options.filter(option => {
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
    if (option.type === 'separator') return true;
// @ts-expect-error - TS2339 - Property 'text' does not exist on type 'Option'.
    if (!option.text) return true;
// @ts-expect-error - TS2339 - Property 'text' does not exist on type 'Option'.
    return option.text.toLowerCase().indexOf(lowercaseInputValue) !== -1;
  });

  if (
    !optionList.filter(
      option =>
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
        option.type !== 'separator' &&
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'. | TS2339 - Property 'translatableValue' does not exist on type 'Option'.
        (option.value || option.translatableValue)
    ).length
  )
    return [];

  // Remove divider(s) if they are at the start or end of array
  while (
    optionList[optionList.length - 1] !== undefined &&
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
    optionList[optionList.length - 1].type !== undefined
  )
    optionList.pop();
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
  while (optionList[0] !== undefined && optionList[0].type !== undefined)
    optionList.shift();

  return optionList;
};

const handleChange = (input: HTMLInputElement, option: Option, props: Props): void => {
// @ts-expect-error - TS2339 - Property 'type' does not exist on type 'Option'.
  if (option.type === 'separator') return;
// @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'Option'. | TS2339 - Property 'onClick' does not exist on type 'Option'.
  else if (option.onClick) option.onClick();
  else {
    // Force the input to the selected value. We do this, bypassing inputValue state,
    // because the change could be immediately followed by a blur, in which case the blur
    // must have the updated value.
    // Search for "blur-value" in this file for the rest of this "workaround".
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
    input.value = option.value;

    // Call the props to notify of the change. Note that if the component is blurred just after,
    // onChange could be called again. Hence why we immediately set the input.value below.
    // Search for "blur-value" in this file for the rest of this "workaround".
    if (props.onChoose) {
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
      props.onChoose(option.value);
    } else {
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'.
      props.onChange(option.value);
    }

    // Call onApply (if specified) as an option was chosen.
    if (props.onApply) props.onApply();
    else if (props.onRequestClose) props.onRequestClose();
  }
};

const getDefaultStylingProps = (params: any, props: Props): any => {
  const { InputProps, inputProps, InputLabelProps, ...other } = params;
  return {
    ...other,
    InputProps: {
      ...InputProps,
      className: null,
      endAdornment: null,
      style: props.inputStyle,
    },
    inputProps: {
      ...inputProps,
      className: null,
      disabled: props.disabled,
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (shouldCloseOrCancel(event)) {
          if (props.onRequestClose) props.onRequestClose();
        } else if (shouldSubmit(event)) {
          // Make sure the current value is reported to the parent before
          // calling onApply (or onRequestClose), otherwise the parent would only
          // know about the previous value.
          props.onChange(event.currentTarget.value);

          if (props.onApply) props.onApply();
          else if (props.onRequestClose) props.onRequestClose();
        } else if (shouldValidate(event)) {
          // Make sure the current value is reported to the parent.
          // Otherwise a parent like an InlineParameterEditor would close when detecting
          // the validation (Enter key pressed) without having the latest value.
          props.onChange(event.currentTarget.value);
        }
      },
    },
  };
};

// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'Option'. | TS2339 - Property 'value' does not exist on type 'Option'.
const getOptionLabel = (option: Option, value: string): string => option.value ? option.value : value;

export default React.forwardRef<Props, SemiControlledAutoCompleteInterface>(function SemiControlledAutoComplete(props, ref) {
  const input = React.useRef((null as HTMLInputElement | null | undefined));
  const [inputValue, setInputValue] = useState((null as string | null));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStyles();

  const focus: FieldFocusFunction = options => {
    const inputElement = input.current;
    if (inputElement) {
      inputElement.focus();
      if (options && options.selectAll) {
        inputElement.select();
      }
    }
  };

// @ts-expect-error - TS2739 - Type '{ focus: FieldFocusFunction; forceInputValueTo: (newValue: string) => void; }' is missing the following properties from type 'Props': value, onChange, dataSource
  React.useImperativeHandle(ref, () => ({
    focus,
    forceInputValueTo: (newValue: string) => {
      if (inputValue !== null) setInputValue(newValue);
    },
  }));

// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SemiControlledAutoCompleteInterface'.
  const currentInputValue = inputValue !== null ? inputValue : props.value;

// @ts-expect-error - TS2339 - Property 'helperMarkdownText' does not exist on type 'SemiControlledAutoCompleteInterface'.
  const helperText = props.helperMarkdownText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'helperMarkdownText' does not exist on type 'SemiControlledAutoCompleteInterface'.
    <MarkdownText source={props.helperMarkdownText} />
  ) : null;

  const handleInputChange = (
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string,
    reason: string,
  ): void => {
    setInputValue(value);
    if (!isMenuOpen) setIsMenuOpen(true);
// @ts-expect-error - TS2339 - Property 'commitOnInputChange' does not exist on type 'SemiControlledAutoCompleteInterface'. | TS2339 - Property 'onChange' does not exist on type 'SemiControlledAutoCompleteInterface'.
    if (props.commitOnInputChange) props.onChange(value);
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Autocomplete
          freeSolo
          classes={classes}
// @ts-expect-error - TS2322 - Type '(event: React.KeyboardEvent<HTMLInputElement>, option: Option | null) => void' is not assignable to type '(event: ChangeEvent<{}>, value: string | Option | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<Option> | undefined) => void'.
          onChange={(
            event: React.KeyboardEvent<HTMLInputElement>,
            option: Option | null
          ) => {
            if (option === null || !input.current) return;

// @ts-expect-error - TS2345 - Argument of type 'SemiControlledAutoCompleteInterface' is not assignable to parameter of type 'Props'.
            handleChange(input.current, option, props);
            setInputValue(null);
            setIsMenuOpen(false);
          }}
          open={isMenuOpen}
          style={{
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'SemiControlledAutoCompleteInterface'.
            ...props.style,
            ...autocompleteStyles.container,
          }}
          inputValue={currentInputValue}
          value={currentInputValue}
// @ts-expect-error - TS2322 - Type '(event: React.KeyboardEvent<HTMLInputElement>, value: string, reason: string) => void' is not assignable to type '(event: ChangeEvent<{}>, value: string, reason: AutocompleteInputChangeReason) => void'.
          onInputChange={handleInputChange}
          PaperComponent={AutocompletePaperComponent}
// @ts-expect-error - TS2339 - Property 'dataSource' does not exist on type 'SemiControlledAutoCompleteInterface'.
          options={props.dataSource}
          renderOption={makeRenderItem(i18n)}
          getOptionDisabled={isOptionDisabled}
          getOptionLabel={(option: Option) =>
            getOptionLabel(option, currentInputValue)
          }
          filterOptions={(options: DataSource, state) =>
            filterFunction(options, state, currentInputValue)
          }
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'SemiControlledAutoCompleteInterface'.
          id={props.id}
          renderInput={params => {
            const {
              InputProps,
              inputProps,
              ...otherStylingProps
// @ts-expect-error - TS2345 - Argument of type 'SemiControlledAutoCompleteInterface' is not assignable to parameter of type 'Props'.
            } = getDefaultStylingProps(params, props);
            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TextField
                color="secondary"
                InputProps={{
                  ...InputProps,
                  placeholder:
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                    typeof props.hintText === 'string'
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                      ? props.hintText
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                      : i18n._(props.hintText),
                }}
                inputProps={{
                  ...inputProps,
// @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'SemiControlledAutoCompleteInterface'.
                  onClick: props.onClick,
                  onFocus: (event: React.FocusEvent<HTMLInputElement>): void => {
                    setIsMenuOpen(true);
                    if (input.current)
                      input.current.selectionStart =
                        input.current.value.length;
                  },
                  // Redefine onBlur to call onChange when the component is blurred.
                  // We do this because the default behavior of the Autocomplete is not
                  // to call onChange when blurred (though it should according to the docs?).
                  onBlur: (event: React.FocusEvent<HTMLInputElement>): void => {
                    setInputValue(null);
                    setIsMenuOpen(false);

                    // Use the value of the input, rather than inputValue
                    // that could be not updated.
                    // Search for "blur-value" in this file for the rest of this "workaround".
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SemiControlledAutoCompleteInterface'.
                    props.onChange(event.currentTarget.value);

// @ts-expect-error - TS2339 - Property 'onBlur' does not exist on type 'SemiControlledAutoCompleteInterface'. | TS2339 - Property 'onBlur' does not exist on type 'SemiControlledAutoCompleteInterface'.
                    if (props.onBlur) props.onBlur(event);
                  },
                  onMouseDown: (event: React.MouseEvent<HTMLInputElement>): void => {
                    // Toggle the menu when clicked and empty
                    if (input.current && !input.current.value.length)
                      setIsMenuOpen(!isMenuOpen);
                  },
                }}
                {...otherStylingProps}
                {...computeTextFieldStyleProps(props)}
// @ts-expect-error - TS2339 - Property 'textFieldStyle' does not exist on type 'SemiControlledAutoCompleteInterface'.
                style={props.textFieldStyle}
// @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                label={props.floatingLabelText}
                inputRef={input}
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SemiControlledAutoCompleteInterface'.
                disabled={props.disabled}
// @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                error={!!props.errorText}
// @ts-expect-error - TS2339 - Property 'errorText' does not exist on type 'SemiControlledAutoCompleteInterface'.
                helperText={helperText || props.errorText}
// @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type 'SemiControlledAutoCompleteInterface'.
                fullWidth={props.fullWidth}
              />
            );
          }}
        />
      )}
    </I18n>
  );
});
