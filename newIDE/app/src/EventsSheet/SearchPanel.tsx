// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from '../UI/TextField';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import {
  SearchInEventsInputs,
  ReplaceInEventsInputs,
} from './EventsSearcher';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
import {
  shouldBrowsePrevious,
  shouldCloseOrCancel,
  shouldValidate,
} from '../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../UI/CustomSvgIcons/Cross';
import { useShouldAutofocusInput } from '../UI/Responsive/ScreenTypeMeasurer';

type Props = {
  onSearchInEvents: (arg1: SearchInEventsInputs) => void,
  onReplaceInEvents: (arg1: ReplaceInEventsInputs) => void,
  onCloseSearchPanel: () => void,
  resultsCount: number | null | undefined,
  hasEventSelected: boolean,
  onGoToPreviousSearchResult: () => gdBaseEvent | null | undefined,
  onGoToNextSearchResult: () => gdBaseEvent | null | undefined,
  searchFocusOffset: number | null | undefined
};

export type SearchPanelInterface = {
  focus: () => void,
  markSearchResultsDirty: () => void,
  isSearchOngoing: () => boolean
};

const SearchPanel = (
  {
    onSearchInEvents,
    onReplaceInEvents,
    onCloseSearchPanel,
    resultsCount,
    hasEventSelected,
    onGoToPreviousSearchResult,
    onGoToNextSearchResult,
    searchFocusOffset,
  }: Props,
  ref: ((arg1: null | SearchPanelInterface) => unknown) | {
    current: null | SearchPanelInterface
  }
) => {
  const { isMobile } = useResponsiveWindowSize();
  const searchTextField = React.useRef<TextFieldInterface | null | undefined>(null);
  const replaceTextField = React.useRef<TextFieldInterface | null | undefined>(null);

  const [searchText, setSearchText] = React.useState<string>('');
  const [replaceText, setReplaceText] = React.useState<string>('');
  const [matchCase, setMatchCase] = React.useState<boolean>(false);
  const [searchInActions, setSearchInActions] = React.useState<boolean>(true);
  const [searchInConditions, setSearchInConditions] = React.useState<boolean>(true);
  const [
    searchInEventStrings,
    setSearchInEventStrings,
  ] = React.useState<boolean>(true);
  // eslint-disable-next-line no-unused-vars
  const [searchInSelection, setSearchInSelection] = React.useState<boolean>(false);
  const [searchResultsDirty, setSearchResultsDirty] = React.useState<boolean>(false);
  const [currentTab, setCurrentTab] = React.useState<'search-and-replace' | 'search-in-event-sentences'>('search-and-replace');

  const isSearchOngoing = React.useCallback(
    (): boolean => {
      return !!searchText && !searchResultsDirty;
    },
    [searchText, searchResultsDirty]
  );

  const shouldAutofocusInput = useShouldAutofocusInput();

  const focusSearchField = React.useCallback((): void => {
    if (searchTextField.current) searchTextField.current.focus();
  }, []);
  const focusReplaceField = React.useCallback((): void => {
    if (replaceTextField.current) replaceTextField.current.focus();
  }, []);

  const markSearchResultsDirty = React.useCallback((): void => {
    setSearchResultsDirty(true);
  }, []);

  React.useImperativeHandle(ref, () => ({
    isSearchOngoing,
    focus: focusSearchField,
    markSearchResultsDirty,
  }));

  React.useEffect(
    () => {
      setSearchResultsDirty(true);
    },
    [
      searchText,
      searchInActions,
      searchInConditions,
      searchInEventStrings,
      matchCase,
    ]
  );

  React.useEffect(
    () => {
      if (shouldAutofocusInput) focusSearchField();
    },
    [currentTab, focusSearchField, shouldAutofocusInput]
  );
  React.useEffect(markSearchResultsDirty, [currentTab, markSearchResultsDirty]);

  const launchSearch = () => {
    onSearchInEvents({
      searchInSelection,
      searchText,
      matchCase,
      searchInActions,
      searchInConditions,
      searchInEventStrings,
      searchInEventSentences: !isSearchAndReplaceTab(),
    });
  };

  const launchReplace = () => {
    onReplaceInEvents({
      searchInSelection,
      searchText,
      replaceText,
      matchCase,
      searchInActions,
      searchInConditions,
      searchInEventStrings,
    });
  };

  const launchSearchIfResultsDirty = () => {
    if (searchResultsDirty) {
      launchSearch();
      setSearchResultsDirty(false);
    }
  };

  const isSearchAndReplaceTab = React.useCallback(
    (): boolean => currentTab === 'search-and-replace',
    [currentTab]
  );

  const shouldDisableSearch = !searchText;
  const shouldDisableReplace =
    !searchText || (!hasEventSelected && searchInSelection);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background noFullHeight noExpand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Tabs
              value={currentTab}
              onChange={setCurrentTab}
              options={[
                {
                  value: 'search-and-replace',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Search and replace in parameters</Trans>,
                },
                {
                  value: 'search-in-event-sentences',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Search in event sentences</Trans>,
                },
              ]}
              // Enforce scroll on very small screens, because the tabs have long names.
              variant={isMobile ? 'scrollable' : undefined}
            />
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout alignItems="baseline" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                ref={searchTextField}
                margin="dense"
                endAdornment={
                  searchText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <IconButton
                      onClick={() => {
                        setSearchText('');
                        if (shouldAutofocusInput) focusSearchField();
                      }}
                      edge="end"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Cross fontSize="small" />
                    </IconButton>
                  ) : null
                }
                translatableHintText={
                  isSearchAndReplaceTab()
                    ? t`Text to search in parameters`
                    : t`Text to search in event sentences`
                }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'searchText' implicitly has an 'any' type.
                onChange={(e, searchText) => {
                  setSearchText(searchText);
                }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                onKeyPress={event => {
                  if (shouldBrowsePrevious(event)) {
                    onGoToPreviousSearchResult();
                  } else if (shouldValidate(event)) {
                    if (!searchResultsDirty) {
                      onGoToNextSearchResult();
                    } else {
                      if (!shouldDisableSearch) launchSearchIfResultsDirty();
                    }
                  }
                }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                onKeyUp={event => {
                  if (shouldCloseOrCancel(event)) {
                    onCloseSearchPanel();
                  }
                }}
                value={searchText}
                fullWidth
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
                disabled={shouldDisableSearch}
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Search</Trans>}
                onClick={() => {
                  if (!searchResultsDirty) {
                    onGoToNextSearchResult();
                  } else {
                    launchSearchIfResultsDirty();
                  }
                }}
              />
            </LineStackLayout>
            {isSearchAndReplaceTab() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout alignItems="baseline" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TextField
                  margin="dense"
                  ref={replaceTextField}
                  endAdornment={
                    replaceText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        onClick={() => {
                          setReplaceText('');
                          if (shouldAutofocusInput) focusReplaceField();
                        }}
                        edge="end"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Cross fontSize="small" />
                      </IconButton>
                    ) : null
                  }
                  translatableHintText={t`Text to replace in parameters`}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'replaceText' implicitly has an 'any' type.
                  onChange={(e, replaceText) => {
                    setReplaceText(replaceText);
                  }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                  onKeyPress={event => {
                    if (shouldValidate(event)) {
                      if (!shouldDisableReplace) launchReplace();
                    }
                  }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                  onKeyUp={event => {
                    if (shouldCloseOrCancel(event)) {
                      onCloseSearchPanel();
                    }
                  }}
                  value={replaceText}
                  fullWidth
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
                  disabled={shouldDisableReplace}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Replace</Trans>}
                  onClick={launchReplace}
                />
              </LineStackLayout>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout
              noMargin
              alignItems="center"
              justifyContent="space-between"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Case insensitive</Trans>}
                    checked={!matchCase}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      setMatchCase(!checked);
                    }}
                  />
                  {!isMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Search in:</Trans>
                    </Text>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Conditions</Trans>}
                    checked={searchInConditions}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      setSearchInConditions(checked);
                    }}
                  />
                </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Actions</Trans>}
                    checked={searchInActions}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      setSearchInActions(checked);
                    }}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Texts</Trans>}
                    checked={searchInEventStrings}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                    onCheck={(e, checked) => {
                      setSearchInEventStrings(checked);
                    }}
                  />
                  {/* <InlineCheckbox //TODO: Implement search/replace in selection
                label={<Trans>Replace in selection</Trans>}
                checked={searchInSelection}
                onCheck={(e, checked) =>
                  this.setState({ searchInSelection: checked })}
              /> */}
                </Line>
              </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin alignItems="center" justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
                  {resultsCount === null || resultsCount === undefined ? (
                    ''
                  ) : resultsCount === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>No results</Trans>
                  ) : searchFocusOffset === null ||
                    searchFocusOffset === undefined ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>{resultsCount} results</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Showing {searchFocusOffset + 1} of {resultsCount}
                    </Trans>
                  )}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  disabled={!resultsCount}
                  onClick={() => {
                    onGoToPreviousSearchResult();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ChevronArrowLeft />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  disabled={!resultsCount}
                  onClick={() => {
                    onGoToNextSearchResult();
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ChevronArrowRight />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <FlatButton
                  key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Close</Trans>}
                  primary={false}
                  onClick={() => {
                    onCloseSearchPanel();
                  }}
                />
              </Line>
            </ResponsiveLineStackLayout>
          </ColumnStackLayout>
        </Line>
      </Column>
    </Background>
  );
};

// @ts-expect-error - TS2345 - Argument of type '({ onSearchInEvents, onReplaceInEvents, onCloseSearchPanel, resultsCount, hasEventSelected, onGoToPreviousSearchResult, onGoToNextSearchResult, searchFocusOffset, }: Props, ref: { current: null | SearchPanelInterface; } | ((arg1: null | SearchPanelInterface) => unknown)) => React.JSX.Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, SearchPanelInterface>'.
export default React.forwardRef<Props, SearchPanelInterface>(SearchPanel);
