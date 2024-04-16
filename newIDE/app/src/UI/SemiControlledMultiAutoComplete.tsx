import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import TextField from '@material-ui/core/TextField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import {
  AutocompletePaperComponent,
  autocompleteStyles,
// @ts-expect-error - TS6142 - Module './SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
} from './SemiControlledAutoComplete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from './TextEllipsis';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
const renderItem = (option: AutocompleteOption, state: any): React.ReactElement => <ListItem dense component={'div'} style={autocompleteStyles.listItem}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
  <ListItemText
    style={autocompleteStyles.listItemText}
    primary={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div title={option.value} style={textEllipsisStyle}>
        {option.text}
      </div>
    }
  />
</ListItem>;

const styles = {
  listbox: {
    maxHeight: 250,
    overflowY: 'scroll',
  },
} as const;

export type AutocompleteOption = {
  text: string // The text displayed,
  value: string // The internal value selected,
  disabled?: boolean // If the option is disabled by default
};

export type DataSource = Array<AutocompleteOption | null | undefined>;

const useChipStyles = makeStyles({
  root: {
    height: 25, // Make the chips smaller to fit the input.
  },
  deleteIcon: {
    cursor: 'default', // Hover is enough, no need for a different cursor.
  },
});

type Props = {
  value: Array<AutocompleteOption>,
  onChange: (arg1: AutocompleteOption) => void,
  dataSource: DataSource,
  inputValue: string | null | undefined,
  onInputChange: (event: any, value: string, reason: string) => void,
  floatingLabelText?: React.ReactNode,
  hintText?: MessageDescriptor,
  helperText?: React.ReactNode,
  fullWidth?: boolean,
  error?: string | null | undefined,
  loading?: boolean,
  disabled?: boolean,
  optionsLimit?: number // Allow limiting the number of options by disabling the autocomplete.,
  disableAutoTranslate?: boolean
};

export type SemiControlledMultiAutoCompleteInterface = {
  focusInput: () => void
};

const SemiControlledMultiAutoComplete = React.forwardRef<Props, SemiControlledMultiAutoCompleteInterface>((props, ref) => {
  const chipStyles = useChipStyles();
// @ts-expect-error - TS2749 - 'TextField' refers to a value, but is being used as a type here. Did you mean 'typeof TextField'?
  const inputRef = React.useRef<TextField | null | undefined>(null);

// @ts-expect-error - TS2739 - Type '{ focusInput: () => void; }' is missing the following properties from type 'Props': value, onChange, dataSource, inputValue, onInputChange
  React.useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Autocomplete
          multiple
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          value={props.value}
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          onChange={props.onChange}
// @ts-expect-error - TS2339 - Property 'inputValue' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          inputValue={props.inputValue}
// @ts-expect-error - TS2339 - Property 'onInputChange' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          onInputChange={props.onInputChange}
// @ts-expect-error - TS2339 - Property 'dataSource' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          options={props.dataSource}
          PaperComponent={AutocompletePaperComponent}
          renderOption={renderItem}
          getOptionLabel={(option: AutocompleteOption) => option.text}
          getOptionDisabled={(option: AutocompleteOption) =>
            option.disabled ||
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
            !!props.value.find(
// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
              element => element && element.value === option.value
            ) ||
// @ts-expect-error - TS2339 - Property 'optionsLimit' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'value' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'optionsLimit' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
            (props.optionsLimit && props.value.length >= props.optionsLimit)
          }
          getOptionSelected={(option, value) => option.value === value.value}
// @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          loading={props.loading}
          ListboxProps={{
// @ts-expect-error - TS2339 - Property 'disableAutoTranslate' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
            className: props.disableAutoTranslate ? 'notranslate' : '',
            style: {
              ...autocompleteStyles.listbox,
              ...styles.listbox,
            },
          }}
          renderInput={params => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <TextField
              {...params}
              color="secondary"
              InputProps={{
                ...params.InputProps,
// @ts-expect-error - TS2339 - Property 'hintText' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'hintText' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
                placeholder: props.hintText && i18n._(props.hintText),
              }}
// @ts-expect-error - TS2339 - Property 'floatingLabelText' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
              label={props.floatingLabelText}
// @ts-expect-error - TS2339 - Property 'error' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'helperText' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
              helperText={props.error || props.helperText}
              variant="filled"
// @ts-expect-error - TS2339 - Property 'error' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
              error={!!props.error}
              inputRef={inputRef}
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'loading' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
              disabled={props.disabled || props.loading}
            />
          )}
// @ts-expect-error - TS2339 - Property 'fullWidth' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          fullWidth={props.fullWidth}
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SemiControlledMultiAutoCompleteInterface'. | TS2339 - Property 'loading' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          disabled={props.disabled || props.loading}
          noOptionsText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>No options</Trans>
            </Text>
          }
          loadingText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Loading...</Trans>
            </Text>
          }
          ChipProps={{
            classes: chipStyles,
// @ts-expect-error - TS2339 - Property 'disableAutoTranslate' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
            className: props.disableAutoTranslate ? 'notranslate' : '',
          }}
        />
      )}
    </I18n>
  );
});

export default SemiControlledMultiAutoComplete;
