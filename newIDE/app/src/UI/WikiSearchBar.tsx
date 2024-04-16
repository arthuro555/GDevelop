import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import MuiTextField from '@material-ui/core/TextField';
import { indexName, searchClient } from '../Utils/AlgoliaSearch';
import {
  InstantSearch,
  useInstantSearch,
  useSearchBox,
} from 'react-instantsearch-hooks';
// @ts-expect-error - TS6142 - Module './SearchBarContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBarContainer.tsx', but '--jsx' is not set.
import SearchBarContainer from './SearchBarContainer';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import { useDebounce } from '../Utils/UseDebounce';
import { GoToWikiCommand } from '../CommandPalette/CommandManager';
import Window from '../Utils/Window';
import { AlgoliaSearchHit as AlgoliaSearchHitType } from '../Utils/AlgoliaSearch';
// @ts-expect-error - TS6142 - Module '../CommandPalette/CommandPalette/AutocompletePicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommandPalette/CommandPalette/AutocompletePicker.tsx', but '--jsx' is not set.
import { AlgoliaSearchHit } from '../CommandPalette/CommandPalette/AutocompletePicker';

type Props = {
  id?: string
};

const WikiSearchBar = ({
  id,
}: Props) => {
  const [autocompleteValue, setAutocompleteValue] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);
  const handleBlur = () => {
    setIsInputFocused(false);
    if (!value || value.trim() === '') {
      setValue('');
    }
  };
  const [
    algoliaSearchStableStatus,
    setAlgoliaSearchStableStatus,
  ] = React.useState<'error' | 'ok'>('ok');

  const { results, status } = useInstantSearch();
  const { refine } = useSearchBox();

  React.useEffect(
    () => {
      if (algoliaSearchStableStatus === 'ok' && status === 'error') {
        setAlgoliaSearchStableStatus('error');
      } else if (algoliaSearchStableStatus === 'error' && status === 'idle') {
        setAlgoliaSearchStableStatus('ok');
      }
    },
    [status, algoliaSearchStableStatus]
  );

  const launchSearch = useDebounce(() => {
    if (value) {
      refine(value);
    }
  }, 200);

  React.useEffect(launchSearch, [value, launchSearch]);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const nonEmpty = !!value && value.length > 0;

// @ts-expect-error - TS2322 - Type 'GoToWikiCommand[] | { hit: { content: Element; objectID: string; url: string; hierarchy: { lvl0: string; }; }; handler: () => void; }[]' is not assignable to type 'GoToWikiCommand[]'.
  const commands: Array<GoToWikiCommand> = React.useMemo(
    () => {
      if (!value) return [];
      if (results.hits.length === 0)
        return [
          {
            hit: {
              content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  No results found. The search is only available in English at
                  the moment.
                </Trans>
              ),
              objectID: 'no-result',
              url: 'https://wiki.gdevelop.io',
              hierarchy: { lvl0: '' },
            },
            handler: () => {},
          },
        ];
      if (algoliaSearchStableStatus === 'error')
        return [
          {
            hit: {
              content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  An error occurred while searching for a result. Please try
                  again later.
                </Trans>
              ),
              objectID: 'error',
              url: 'https://wiki.gdevelop.io',
              hierarchy: { lvl0: '' },
            },
            handler: () => {},
          },
        ];

// @ts-expect-error - TS2322 - Type '{ hit: AlgoliaSearchHit; handler: () => void; }[]' is not assignable to type 'GoToWikiCommand[]'.
      const algoliaCommands: Array<GoToWikiCommand> = results.hits.map(
        (hit: AlgoliaSearchHitType) => {
          return {
            hit,
            handler: () => Window.openExternalURL(hit.url),
          };
        }
      );
      return algoliaCommands;
    },
    [results.hits, value, algoliaSearchStableStatus]
  );

  const handleAutocompleteInput = (
    event: any,
    newValue: GoToWikiCommand | null | undefined,
    reason: 'create-option' | 'select-option' | 'remove-option' | 'blur' | 'clear'
  ) => {
    // Called when the value of the autocomplete changes.
    if (reason === 'select-option' && newValue) {
      newValue.handler();
      // Clear the value that was entered as an option was selected.
      setAutocompleteValue('');
    } else {
      setAutocompleteValue('');
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
      setValue('');
    } else {
      setValue(newValue || '');
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SearchBarContainer
          isFocused={isInputFocused}
          isSearchBarEmpty={!nonEmpty}
          onCancel={() => setValue('')}
// @ts-expect-error - TS7031 - Binding element 'inputStyle' implicitly has an 'any' type. | TS7031 - Binding element 'popperContainerStyle' implicitly has an 'any' type.
          renderContent={({ inputStyle, popperContainerStyle }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Autocomplete
              id={id}
              options={commands}
              freeSolo
              fullWidth
              defaultValue=""
              inputValue={value}
              value={autocompleteValue}
// @ts-expect-error - TS2322 - Type '(event: any, newValue: GoToWikiCommand | null | undefined, reason: 'create-option' | 'select-option' | 'remove-option' | 'blur' | 'clear') => void' is not assignable to type '(event: ChangeEvent<{}>, value: string | GoToWikiCommand | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<GoToWikiCommand> | undefined) => void'.
              onChange={handleAutocompleteInput}
              onInputChange={handleAutocompleteInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              filterOptions={options => options}
              PopperComponent={props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'ReactNode | ((props: { placement: PopperPlacementType; TransitionProps?: { in: boolean; onEnter: () => {}; onExited: () => {}; } | undefined; }) => ReactNode)' is not assignable to type 'ReactNode'.
                <div style={popperContainerStyle}>{props.children}</div>
              )}
              getOptionLabel={() => ''}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              renderOption={({ hit }) => <AlgoliaSearchHit hit={hit} />}
              renderInput={params => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <MuiTextField
                  margin="none"
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    endAdornment: null,
                    placeholder: i18n._(t`Search GDevelop wiki`),
                    style: inputStyle,
                  }}
                />
              )}
            />
          )}
        />
      )}
    </I18n>
  );
};

const WikiSearchBarWithAlgoliaSearch = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <InstantSearch searchClient={searchClient} indexName={indexName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WikiSearchBar {...props} />
  </InstantSearch>
);

export default WikiSearchBarWithAlgoliaSearch;
