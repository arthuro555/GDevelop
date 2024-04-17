import * as React from 'react';

import { FiltersState, useFilters } from '../../UI/Search/FiltersChooser';
import {
  getExtensionsRegistry,
  ExtensionsRegistry,
  ExtensionShortHeader,
} from '../../Utils/GDevelopServices/Extension';
import { Filters } from '../../Utils/GDevelopServices/Filters';
import {
  useSearchStructuredItem,
  SearchMatch,
} from '../../UI/Search/UseSearchStructuredItem';

import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import { EXTENSIONS_FETCH_TIMEOUT } from '../../Utils/GlobalFetchTimeouts';

const emptySearchText = '';

const noExcludedTiers = new Set();
const excludedCommunityTiers = new Set(['community']);

type ExtensionStoreState = {
  filters: Filters | null | undefined;
  searchResults:
    | Array<{
        item: ExtensionShortHeader;
        matches: SearchMatch[];
      }>
    | null
    | undefined;
  fetchExtensionsAndFilters: () => void;
  error: Error | null | undefined;
  searchText: string;
  setSearchText: (arg1: string) => void;
  allCategories: string[];
  chosenCategory: string;
  setChosenCategory: (arg1: string) => void;
  extensionShortHeadersByName: {
    [name: string]: ExtensionShortHeader;
  };
  filtersState: FiltersState;
  hasExtensionNamed: (extensionName: string) => boolean;
};

export const ExtensionStoreContext = React.createContext<ExtensionStoreState>({
  filters: null,
  searchResults: null,
  fetchExtensionsAndFilters: () => {},
  error: null,
  searchText: '',
  setSearchText: () => {},
  allCategories: [],
  // '' means all categories.
  chosenCategory: '',
  setChosenCategory: () => {},
  extensionShortHeadersByName: {},
  filtersState: {
    chosenFilters: new Set(),
    addFilter: () => {},
    removeFilter: () => {},
    chosenCategory: null,
    setChosenCategory: () => {},
  },
  hasExtensionNamed: () => false,
});

type ExtensionStoreStateProviderProps = {
  children: React.ReactNode;
  defaultSearchText?: string;
};

export const ExtensionStoreStateProvider = ({
  children,
  defaultSearchText,
}: ExtensionStoreStateProviderProps) => {
  const [extensionShortHeadersByName, setExtensionShortHeadersByName] =
    React.useState<{
      [key: string]: ExtensionShortHeader;
    }>({});
  const preferences = React.useContext(PreferencesContext);

  const { showCommunityExtensions } = preferences.values;
  const [firstExtensionIds, setFirstExtensionIds] = React.useState<
    Array<string>
  >([]);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const isLoading = React.useRef<boolean>(false);

  const [searchText, setSearchText] = React.useState(
    defaultSearchText || emptySearchText
  );
  const [chosenCategory, setChosenCategory] = React.useState('');
  const filtersState = useFilters();

  const fetchExtensionsAndFilters = React.useCallback(() => {
    // Don't attempt to load again resources and filters if they
    // were loaded already.
    if (Object.keys(extensionShortHeadersByName).length || isLoading.current)
      return;

    (async () => {
      setError(null);
      isLoading.current = true;

      try {
        const extensionRegistry: ExtensionsRegistry =
          await getExtensionsRegistry();
        const { headers } = extensionRegistry;

        const extensionShortHeadersByName: Record<string, any> = {};
        headers.forEach((extension) => {
          extensionShortHeadersByName[extension.name] = extension;
        });

        console.info(
          `Loaded ${
            headers ? headers.length : 0
          } extensions from the extension store.`
        );
        setExtensionShortHeadersByName(extensionShortHeadersByName);
        setFirstExtensionIds(extensionRegistry.views.default.firstIds);
      } catch (error) {
        console.error(
          `Unable to load the extensions from the extension store:`,
          error
        );
// @ts-expect-error - TS2345 - Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<Error | null | undefined>'.
        setError(error);
      }

      isLoading.current = false;
    })();
  }, [extensionShortHeadersByName, isLoading]);

  React.useEffect(() => {
    // Don't attempt to load again extensions and filters if they
    // were loaded already.
    if (Object.keys(extensionShortHeadersByName).length || isLoading.current)
      return;

    const timeoutId = setTimeout(() => {
      console.info('Pre-fetching extensions from extension store...');
      fetchExtensionsAndFilters();
    }, EXTENSIONS_FETCH_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [fetchExtensionsAndFilters, extensionShortHeadersByName, isLoading]);

  const allCategories = React.useMemo(() => {
    const categoriesSet = new Set();
    for (const name in extensionShortHeadersByName) {
      categoriesSet.add(extensionShortHeadersByName[name].category);
    }
    const sortedCategories = [...categoriesSet].sort((tag1, tag2) =>
// @ts-expect-error - TS2571 - Object is of type 'unknown'. | TS2571 - Object is of type 'unknown'.
      tag1.toLowerCase().localeCompare(tag2.toLowerCase())
    );
    return sortedCategories;
  }, [extensionShortHeadersByName]);

  const filters = React.useMemo(() => {
    const tagsSet = new Set();
    for (const name in extensionShortHeadersByName) {
      extensionShortHeadersByName[name].tags.forEach((tag) => tagsSet.add(tag));
    }
    const sortedTags = [...tagsSet].sort((tag1, tag2) =>
// @ts-expect-error - TS2571 - Object is of type 'unknown'. | TS2571 - Object is of type 'unknown'.
      tag1.toLowerCase().localeCompare(tag2.toLowerCase())
    );
    return {
      allTags: sortedTags,
      defaultTags: sortedTags,
      tagsTree: [],
    };
  }, [extensionShortHeadersByName]);

  const searchResults:
    | Array<{
        item: ExtensionShortHeader;
        matches: SearchMatch[];
      }>
    | null
    | undefined = useSearchStructuredItem(extensionShortHeadersByName, {
    searchText,
    chosenItemCategory: chosenCategory,
    chosenCategory: filtersState.chosenCategory,
    chosenFilters: filtersState.chosenFilters,
    // @ts-expect-error - TS2322 - Type 'Set<unknown>' is not assignable to type 'Set<string>'.
    excludedTiers: showCommunityExtensions
      ? noExcludedTiers
      : excludedCommunityTiers,
    defaultFirstSearchItemIds: firstExtensionIds,
  });

  const hasExtensionNamed = React.useCallback(
    (extensionName: string) => {
      return !!extensionShortHeadersByName[extensionName];
    },
    [extensionShortHeadersByName]
  );

  const extensionStoreState = React.useMemo(
    () => ({
      searchResults,
      fetchExtensionsAndFilters,
      filters,
      allCategories,
      chosenCategory,
      setChosenCategory,
      error,
      searchText,
      setSearchText,
      extensionShortHeadersByName,
      filtersState,
      hasExtensionNamed,
    }),
    [
      searchResults,
      error,
      filters,
      allCategories,
      chosenCategory,
      setChosenCategory,
      searchText,
      extensionShortHeadersByName,
      filtersState,
      fetchExtensionsAndFilters,
      hasExtensionNamed,
    ]
  );

  return (
// @ts-expect-error - TS2322 - Type '{ searchResults: { item: ExtensionShortHeader; matches: SearchMatch[]; }[] | null | undefined; fetchExtensionsAndFilters: () => void; filters: { allTags: unknown[]; defaultTags: unknown[]; tagsTree: never[]; }; ... 8 more ...; hasExtensionNamed: (extensionName: string) => boolean; }' is not assignable to type 'ExtensionStoreState'.
    <ExtensionStoreContext.Provider value={extensionStoreState}>
      {children}
    </ExtensionStoreContext.Provider>
  );
};
