import * as React from 'react';

import { I18n } from '@lingui/react';

import { Trans } from '@lingui/macro';
import TextField from '@material-ui/core/TextField';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import {
  AutocompletePaperComponent,
  autocompleteStyles,
} from './SemiControlledAutoComplete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { textEllipsisStyle } from './TextEllipsis';

import Text from './Text';

const renderItem = (
  option: AutocompleteOption,
  state: any
): React.ReactElement => (
  <ListItem dense component={'div'} style={autocompleteStyles.listItem}>
    <ListItemText
      style={autocompleteStyles.listItemText}
      primary={
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div title={option.value} style={textEllipsisStyle}>
          {option.text}
        </div>
      }
    />
  </ListItem>
);

const styles = {
  listbox: {
    maxHeight: 250,
    overflowY: 'scroll',
  },
} as const;

export type AutocompleteOption = {
  text: string; // The text displayed,
  value: string; // The internal value selected,
  disabled?: boolean; // If the option is disabled by default
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
  value: Array<AutocompleteOption>;
  onChange: (arg1: AutocompleteOption) => void;
  dataSource: DataSource;
  inputValue: string | null | undefined;
  onInputChange: (event: any, value: string, reason: string) => void;
  floatingLabelText?: React.ReactNode;
  hintText?: MessageDescriptor;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  error?: string | null | undefined;
  loading?: boolean;
  disabled?: boolean;
  optionsLimit?: number; // Allow limiting the number of options by disabling the autocomplete.,
  disableAutoTranslate?: boolean;
};

export type SemiControlledMultiAutoCompleteInterface = {
  focusInput: () => void;
};

const SemiControlledMultiAutoComplete = React.forwardRef<
  SemiControlledMultiAutoCompleteInterface,
  Props
>((props, ref) => {
  const chipStyles = useChipStyles();
  // @ts-expect-error - TS2749 - 'TextField' refers to a value, but is being used as a type here. Did you mean 'typeof TextField'?
  const inputRef = React.useRef<TextField | null | undefined>(null);

  React.useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return (
    <I18n>
      {({ i18n }) => (
        <Autocomplete
          multiple
          value={props.value}
          // @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          onChange={props.onChange}
          // @ts-expect-error - TS2339 - Property 'inputValue' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          inputValue={props.inputValue}
          onInputChange={props.onInputChange}
          // @ts-expect-error - TS2339 - Property 'dataSource' does not exist on type 'SemiControlledMultiAutoCompleteInterface'.
          options={props.dataSource}
          PaperComponent={AutocompletePaperComponent}
          renderOption={renderItem}
          getOptionLabel={(option: AutocompleteOption) => option.text}
          getOptionDisabled={(option: AutocompleteOption) =>
            option.disabled ||
            !!props.value.find(
              (element) => element && element.value === option.value
            ) ||
            (props.optionsLimit && props.value.length >= props.optionsLimit)
          }
          getOptionSelected={(option, value) => option.value === value.value}
          loading={props.loading}
          ListboxProps={{
            className: props.disableAutoTranslate ? 'notranslate' : '',
            style: {
              ...autocompleteStyles.listbox,
              ...styles.listbox,
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              InputProps={{
                ...params.InputProps,

                placeholder: props.hintText && i18n._(props.hintText),
              }}
              label={props.floatingLabelText}
              helperText={props.error || props.helperText}
              variant="filled"
              error={!!props.error}
              inputRef={inputRef}
              disabled={props.disabled || props.loading}
            />
          )}
          fullWidth={props.fullWidth}
          disabled={props.disabled || props.loading}
          noOptionsText={
            <Text noMargin>
              <Trans>No options</Trans>
            </Text>
          }
          loadingText={
            <Text noMargin>
              <Trans>Loading...</Trans>
            </Text>
          }
          ChipProps={{
            classes: chipStyles,

            className: props.disableAutoTranslate ? 'notranslate' : '',
          }}
        />
      )}
    </I18n>
  );
});

export default SemiControlledMultiAutoComplete;
