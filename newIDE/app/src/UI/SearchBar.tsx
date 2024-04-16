// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module './TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from './TextField';
import Collapse from '@material-ui/core/Collapse';
import MuiTextField from '@material-ui/core/TextField';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import { useShouldAutofocusInput } from './Responsive/ScreenTypeMeasurer';
import { shouldValidate } from './KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module './TagChips' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TagChips.tsx', but '--jsx' is not set.
import TagChips from './TagChips';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { useDebounce } from '../Utils/UseDebounce';
// @ts-expect-error - TS6142 - Module './SearchBarContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBarContainer.tsx', but '--jsx' is not set.
import SearchBarContainer from './SearchBarContainer';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

type TagsHandler = {
  remove: (arg1: string) => void,
  add: (arg1: string) => void,
  chosenTags: Set<string>
};

type Props = {
  id?: string,
  /** Disables text field. */
  disabled?: boolean,
  /** Sets placeholder for the embedded text field. */
  placeholder?: MessageDescriptor,
  /** Fired when the text value changes. */
  onChange?: (arg1: string) => void,
  /** Fired when the search icon is clicked. */
  onRequestSearch: (arg1: string) => void,
  /** Set if rounding should be applied or not. */
  aspect?: 'integrated-search-bar',
  /** The value of the text field. */
  value: string,
  /** The functions needed to interact with the list of tags displayed below search bar. */
  tagsHandler?: TagsHandler,
  /** Used to display matching tags in dropdown below search bar. */
  tags?: Array<string> | null | undefined,
  /** The function to generate the optional menu. */
  buildMenuTemplate?: () => any,
  /** If defined, a help icon button redirecting to this page will be shown. */
  helpPagePath?: string | null | undefined,
  autoFocus?: 'desktop' | 'desktopAndMobileDevices'
};

export type SearchBarInterface = {
  focus: () => void,
  blur: () => void
};

const noop = () => {};

/**
 * Material design search bar,
 * inspired from https://github.com/TeamWertarbyte/material-ui-search-bar
 *
 * Customized to add optional menu button and chips corresponding to tags.
 */
const SearchBar = React.forwardRef<Props, SearchBarInterface>((
  {
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'SearchBarInterface'.
    id,
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'SearchBarInterface'.
    disabled,
// @ts-expect-error - TS2339 - Property 'placeholder' does not exist on type 'SearchBarInterface'.
    placeholder,
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'SearchBarInterface'.
    onChange,
// @ts-expect-error - TS2339 - Property 'onRequestSearch' does not exist on type 'SearchBarInterface'.
    onRequestSearch,
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'SearchBarInterface'.
    value: parentValue,
// @ts-expect-error - TS2339 - Property 'aspect' does not exist on type 'SearchBarInterface'.
    aspect,
// @ts-expect-error - TS2339 - Property 'tagsHandler' does not exist on type 'SearchBarInterface'.
    tagsHandler,
// @ts-expect-error - TS2339 - Property 'tags' does not exist on type 'SearchBarInterface'.
    tags,
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'SearchBarInterface'.
    buildMenuTemplate,
// @ts-expect-error - TS2339 - Property 'helpPagePath' does not exist on type 'SearchBarInterface'.
    helpPagePath,
// @ts-expect-error - TS2339 - Property 'autoFocus' does not exist on type 'SearchBarInterface'.
    autoFocus,
  },
  ref
) => {
// @ts-expect-error - TS2739 - Type '{ focus: () => void; blur: () => void; }' is missing the following properties from type 'Props': onRequestSearch, value
  React.useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));
  const focus = () => {
    if (textField.current) {
      textField.current.focus();
    }
  };
  const blur = () => {
    if (textField.current) {
      textField.current.blur();
    }
  };
  const { isMobile } = useResponsiveWindowSize();

  const [isInputFocused, setIsInputFocused] = React.useState(false);

  // This variable represents the content of the input (text field)
  const [value, setValue] = React.useState<string>(parentValue);
  // This variable represents the value of the autocomplete, used to
  // highlight an option and to determine if an option is selectable, or
  // if an event should be fired when an option is selected.
  const [autocompleteValue, setAutocompleteValue] = React.useState<string>(parentValue);

  const textField = React.useRef<TextFieldInterface | null | undefined>(null);

  const nonEmpty = !!value && value.length > 0;
  const debouncedOnChange = useDebounce(onChange ? onChange : noop, 250);

  const changeValueDebounced = React.useCallback(
    (newValue: string) => {
      setValue(newValue);
      debouncedOnChange(newValue);
    },
    [debouncedOnChange, setValue]
  );

  const changeValueImmediately = React.useCallback(
    (newValue: string) => {
      setValue(newValue);
      onChange && onChange(newValue);
    },
    [onChange, setValue]
  );

  React.useEffect(
    () => {
      // The value given by the parent has priority: if it changes,
      // the search bar must display it.
      setValue(parentValue);
    },
    [parentValue]
  );

  const shouldAutofocusSearchbar = useShouldAutofocusInput();
  const shouldAutoFocusTextField = !autoFocus
    ? false
    : autoFocus === 'desktopAndMobileDevices'
    ? true
    : shouldAutofocusSearchbar;
  const previousChosenTagsCount = React.useRef<number>(tagsHandler ? tagsHandler.chosenTags.size : 0);
  React.useEffect(
    () => {
      // Used to focus search bar when all tags have been removed.
      // It is convenient when using keyboard to remove all tags and
      // quickly get back to the text field.
      if (
        shouldAutoFocusTextField &&
        tagsHandler &&
        tagsHandler.chosenTags.size === 0 &&
        previousChosenTagsCount.current > 0
      )
        focus();
    },
    [tagsHandler, shouldAutoFocusTextField]
  );

  const handleBlur = () => {
    setIsInputFocused(false);
    if (!value || value.trim() === '') {
      changeValueImmediately('');
    }
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleInput = (e: {
    target: {
      value: string
    }
  }) => {
    changeValueDebounced(e.target.value);
  };

  const handleCancel = () => {
    changeValueImmediately('');
    if (!isMobile) focus();
  };

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    if (shouldValidate(event)) {
      onRequestSearch(value);
    }
  };

  // --- Autocomplete-specific handlers ---

  const handleAutocompleteInput = (
    event: any,
    newValue: string | null | undefined,
    reason: 'create-option' | 'select-option' | 'remove-option' | 'blur' | 'clear'
  ) => {
    // Called when the value of the autocomplete changes.
    if (reason === 'select-option') {
      tagsHandler && tagsHandler.add(newValue || '');

      // Clear the value that was entered as an option was selected.
      changeValueImmediately('');

      // Clear this value to make sure the autocomplete doesn't keep the
      // last typed value in memory.
      setAutocompleteValue('');
    } else {
      changeValueImmediately(newValue || '');
    }
  };

  const handleAutocompleteInputChange = (
    event: any,
    newValue: string | null | undefined,
    reason: 'reset' | 'input' | 'clear'
  ) => {
    // Called when the value of the input within the autocomplete changes.
    if (reason === 'reset') {
      // Happens when user selects an option. Do as for 'select-option':
      // Clear the value that was entered as an option was selected.
      changeValueImmediately('');

      // Clear this value to make sure the autocomplete doesn't keep the
      // last typed value in memory.
      setAutocompleteValue('');
    } else {
      changeValueDebounced(newValue || '');
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SearchBarContainer
          onCancel={handleCancel}
          isFocused={isInputFocused}
          disabled={disabled}
          isSearchBarEmpty={!nonEmpty}
          helpPagePath={helpPagePath}
          aspect={aspect}
          buildMenuTemplate={buildMenuTemplate}
          renderSubLine={
            tagsHandler
              ? () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Collapse in={tagsHandler.chosenTags.size > 0}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TagChips
                      tags={Array.from(tagsHandler.chosenTags)}
// @ts-expect-error - TS7006 - Parameter 'tag' implicitly has an 'any' type.
                      onRemove={tag => {
                        if (tagsHandler.chosenTags.size === 1) {
                          // If the last tag is removed, focus the search bar.
                          focus();
                        }
                        tagsHandler.remove(tag);
                      }}
                    />
                  </Collapse>
                )
              : null
          }
// @ts-expect-error - TS7031 - Binding element 'inputStyle' implicitly has an 'any' type. | TS7031 - Binding element 'popperContainerStyle' implicitly has an 'any' type.
          renderContent={({ inputStyle, popperContainerStyle }) =>
            tags ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Autocomplete
                id={id}
                options={tags}
                freeSolo
                fullWidth
                defaultValue=""
                inputValue={value}
                value={autocompleteValue}
                onChange={handleAutocompleteInput}
                onInputChange={handleAutocompleteInputChange}
                onKeyPress={handleKeyPressed}
                onBlur={handleBlur}
                onFocus={handleFocus}
                getOptionDisabled={option =>
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'string'.
                  option.disabled ||
                  (!!tagsHandler && !!tagsHandler.chosenTags.has(option))
                }
                getOptionSelected={(option, _) =>
                  !!tagsHandler && tagsHandler.chosenTags.has(option)
                }
                PopperComponent={props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'ReactNode | ((props: { placement: PopperPlacementType; TransitionProps?: { in: boolean; onEnter: () => {}; onExited: () => {}; } | undefined; }) => ReactNode)' is not assignable to type 'ReactNode'.
                  <div style={popperContainerStyle}>{props.children}</div>
                )}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                renderOption={option => <Text noMargin>{option}</Text>}
                renderInput={params => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <MuiTextField
                    margin="none"
                    {...params}
                    autoFocus={shouldAutoFocusTextField}
                    inputRef={textField}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      endAdornment: null,
                      placeholder: i18n._(placeholder || t`Search`),
                      style: inputStyle,
                    }}
                  />
                )}
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TextField
                id={id}
                margin="none"
                dataset={{ searchBar: 'true' }}
                translatableHintText={placeholder || t`Search`}
                onBlur={handleBlur}
                value={value}
                onChange={handleInput}
                onKeyUp={handleKeyPressed}
                fullWidth
                underlineShow={false}
                disabled={disabled}
                ref={textField}
                inputStyle={inputStyle}
                onFocus={handleFocus}
                autoFocus={autoFocus}
              />
            )
          }
        />
      )}
    </I18n>
  );
});

export default SearchBar;
