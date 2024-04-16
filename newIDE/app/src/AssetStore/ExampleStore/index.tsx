import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar, { SearchBarInterface } from '../../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { ExampleShortHeader } from '../../Utils/GDevelopServices/Example';
// @ts-expect-error - TS6142 - Module './ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreContext } from './ExampleStoreContext';
// @ts-expect-error - TS6142 - Module '../../UI/Search/ListSearchResults' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/ListSearchResults.tsx', but '--jsx' is not set.
import { ListSearchResults } from '../../UI/Search/ListSearchResults';
// @ts-expect-error - TS6142 - Module './ExampleListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleListItem.tsx', but '--jsx' is not set.
import ExampleListItem from './ExampleListItem';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
import {
  sendExampleDetailsOpened,
  sendGameTemplateInformationOpened,
} from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import { useShouldAutofocusInput } from '../../UI/Responsive/ScreenTypeMeasurer';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../PrivateGameTemplates/PrivateGameTemplateListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateListItem.tsx', but '--jsx' is not set.
import PrivateGameTemplateListItem from '../PrivateGameTemplates/PrivateGameTemplateListItem';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from '../PrivateGameTemplates/PrivateGameTemplateStoreContext';

const getItemUniqueId = (
  item: ExampleShortHeader | PrivateGameTemplateListingData
) => item.id;

type Props = {
  isOpening: boolean,
  onOpenNewProjectSetupDialog: () => void,
  focusOnMount?: boolean,
  selectedExampleShortHeader: ExampleShortHeader | null | undefined,
  onSelectExampleShortHeader: (arg1?: ExampleShortHeader | null | undefined) => void,
  selectedPrivateGameTemplateListingData: PrivateGameTemplateListingData | null | undefined,
  onSelectPrivateGameTemplateListingData: (arg1?: PrivateGameTemplateListingData | null | undefined) => void
};

export const ExampleStore = ({
  isOpening,
  onOpenNewProjectSetupDialog,
  focusOnMount,

  // The example store is "controlled" by the parent. Useful as selected items are
  // needed in MainFrame, to display them in NewProjectSetupDialog.
  selectedExampleShortHeader,

  onSelectExampleShortHeader,
  selectedPrivateGameTemplateListingData,
  onSelectPrivateGameTemplateListingData,
}: Props) => {
  const { receivedGameTemplates } = React.useContext(AuthenticatedUserContext);
  const {
    exampleFilters,
    exampleShortHeadersSearchResults,
    error: exampleStoreError,
    fetchExamplesAndFilters,
    filtersState: exampleStoreFiltersState,
    searchText,
    setSearchText: setExampleStoreSearchText,
  } = React.useContext(ExampleStoreContext);
  const {
    gameTemplateFilters,
    error: gameTemplateStoreError,
    fetchGameTemplates,
    exampleStore: {
      privateGameTemplateListingDatasSearchResults,
      filtersState: gameTemplateStoreFiltersState,
      setSearchText: setGameTemplateStoreSearchText,
    },
  } = React.useContext(PrivateGameTemplateStoreContext);

  const shouldAutofocusSearchbar = useShouldAutofocusInput();
  const searchBarRef = React.useRef<SearchBarInterface | null | undefined>(null);

  React.useEffect(
    () => {
      if (focusOnMount && shouldAutofocusSearchbar && searchBarRef.current)
        searchBarRef.current.focus();
    },
    [shouldAutofocusSearchbar, focusOnMount]
  );

  // Tags are applied to both examples and game templates.
  const tagsHandler = React.useMemo(
    () => ({
      add: (tag: string) => {
        exampleStoreFiltersState.addFilter(tag);
        gameTemplateStoreFiltersState.addFilter(tag);
      },
      remove: (tag: string) => {
        exampleStoreFiltersState.removeFilter(tag);
        gameTemplateStoreFiltersState.removeFilter(tag);
      },
      // We use the same tags for both examples and game templates, so we can
      // use the tags from either store.
      chosenTags: exampleStoreFiltersState.chosenFilters,
    }),
    [exampleStoreFiltersState, gameTemplateStoreFiltersState]
  );

  // We search in both examples and game templates stores.
  const setSearchText = React.useCallback(
    (searchText: string) => {
      setExampleStoreSearchText(searchText);
      setGameTemplateStoreSearchText(searchText);
    },
    [setExampleStoreSearchText, setGameTemplateStoreSearchText]
  );

  const fetchGameTemplatesAndExamples = React.useCallback(
    () => {
      fetchGameTemplates();
      fetchExamplesAndFilters();
    },
    [fetchGameTemplates, fetchExamplesAndFilters]
  );

  // Load examples and game templates on mount.
  React.useEffect(
    () => {
      fetchGameTemplatesAndExamples();
    },
    [fetchGameTemplatesAndExamples]
  );

  const getExampleShortHeaderMatches = (exampleShortHeader: ExampleShortHeader): SearchMatch[] => {
    if (!exampleShortHeadersSearchResults) return [];
    const exampleMatches = exampleShortHeadersSearchResults.find(
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
      result => result.item.id === exampleShortHeader.id
    );
    return exampleMatches ? exampleMatches.matches : [];
  };

  const getPrivateAssetPackListingDataMatches = (privateGameTemplateListingData: PrivateGameTemplateListingData): SearchMatch[] => {
    if (!privateGameTemplateListingDatasSearchResults) return [];
    const gameTemplateMatches = privateGameTemplateListingDatasSearchResults.find(
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
      result => result.item.id === privateGameTemplateListingData.id
    );
    return gameTemplateMatches ? gameTemplateMatches.matches : [];
  };

  const searchItems: ExampleShortHeader | PrivateGameTemplateListingData[] = React.useMemo(
    () => {
      const searchItems: Array<ExampleShortHeader | PrivateGameTemplateListingData> = [];
      const privateGameTemplateItems = privateGameTemplateListingDatasSearchResults
// @ts-expect-error - TS7031 - Binding element 'item' implicitly has an 'any' type.
        ? privateGameTemplateListingDatasSearchResults.map(({ item }) => item)
        : [];
      const exampleShortHeaderItems = exampleShortHeadersSearchResults
// @ts-expect-error - TS7031 - Binding element 'item' implicitly has an 'any' type.
        ? exampleShortHeadersSearchResults.map(({ item }) => item)
        : [];

      if (searchText || tagsHandler.chosenTags.size > 0) {
        return [...privateGameTemplateItems, ...exampleShortHeaderItems];
      }

      for (let i = 0; i < exampleShortHeaderItems.length; ++i) {
        searchItems.push(exampleShortHeaderItems[i]);
        if (i % 2 === 1 && privateGameTemplateItems.length > 0) {
          const nextPrivateGameTemplateIndex = Math.floor(i / 2);
          if (nextPrivateGameTemplateIndex < privateGameTemplateItems.length)
            searchItems.push(
              privateGameTemplateItems[nextPrivateGameTemplateIndex]
            );
        }
      }

      return searchItems;
    },
    [
      exampleShortHeadersSearchResults,
      privateGameTemplateListingDatasSearchResults,
      searchText,
      tagsHandler,
    ]
  );

  const defaultTags = React.useMemo(
    () => {
      const allDefaultTags = [
        ...(exampleFilters ? exampleFilters.defaultTags : []),
        ...(gameTemplateFilters ? gameTemplateFilters.defaultTags : []),
      ];
      const uniqueTags = new Set(allDefaultTags);
      return Array.from(uniqueTags);
    },
    [exampleFilters, gameTemplateFilters]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand noMargin useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBar
              value={searchText}
              onChange={setSearchText}
              onRequestSearch={() => {}}
              tagsHandler={tagsHandler}
              tags={defaultTags}
              ref={searchBarRef}
              placeholder={t`Search examples`}
            />
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line
          expand
          overflow={
            'hidden' /* Somehow required on Chrome/Firefox to avoid children growing (but not on Safari) */
          }
          noMargin
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ListSearchResults
            disableAutoTranslate // Search results text highlighting conflicts with dom handling by browser auto-translations features. Disables auto translation to prevent crashes.
            onRetry={fetchGameTemplatesAndExamples}
            error={gameTemplateStoreError || exampleStoreError}
            searchItems={searchItems}
            getSearchItemUniqueId={getItemUniqueId}
// @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type. | TS7006 - Parameter 'onHeightComputed' implicitly has an 'any' type.
            renderSearchItem={(item, onHeightComputed) => {
              if (item.authorIds) {
                // This is an ExampleShortHeader.
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ExampleListItem
                    isOpening={isOpening}
                    onHeightComputed={onHeightComputed}
                    exampleShortHeader={item}
                    matches={getExampleShortHeaderMatches(item)}
                    onChoose={() => {
                      sendExampleDetailsOpened(item.slug);
                      onSelectExampleShortHeader(item);
                    }}
                    onOpen={() => {
                      onSelectExampleShortHeader(item);
                      onOpenNewProjectSetupDialog();
                    }}
                  />
                );
              }
              if (item.listing) {
                // This is a PrivateGameTemplateListingData.
                const isTemplateOwned =
                  !!receivedGameTemplates &&
                  !!receivedGameTemplates.find(
                    template => template.id === item.id
                  );
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <PrivateGameTemplateListItem
                    isOpening={isOpening}
                    onHeightComputed={onHeightComputed}
                    privateGameTemplateListingData={item}
                    matches={getPrivateAssetPackListingDataMatches(item)}
                    onChoose={() => {
                      onSelectPrivateGameTemplateListingData(item);
                      sendGameTemplateInformationOpened({
                        gameTemplateName: item.name,
                        gameTemplateId: item.id,
                        source: 'examples-list',
                      });
                    }}
                    owned={isTemplateOwned}
                  />
                );
              }
              return null; // Should not happen.
            }}
          />
        </Line>
      </Column>
    </React.Fragment>
  );
};
