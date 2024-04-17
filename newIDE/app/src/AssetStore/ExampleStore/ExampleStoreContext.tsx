import * as React from 'react';

import { FiltersState, useFilters } from '../../UI/Search/FiltersChooser';
import {
  ExampleShortHeader,
  listAllExamples,
} from '../../Utils/GDevelopServices/Example';
import { Filters } from '../../Utils/GDevelopServices/Filters';
import {
  useSearchStructuredItem,
  SearchMatch,
} from '../../UI/Search/UseSearchStructuredItem';
import { EXAMPLES_FETCH_TIMEOUT } from '../../Utils/GlobalFetchTimeouts';

const defaultSearchText = '';
const excludedTiers = new Set(); // No tiers for examples.
const firstExampleIds: Array<string> = [];

type ExampleStoreState = {
  exampleFilters: Filters | null | undefined;
  exampleShortHeadersSearchResults:
    | Array<{
        item: ExampleShortHeader;
        matches: SearchMatch[];
      }>
    | null
    | undefined;
  fetchExamplesAndFilters: () => void;
  exampleShortHeaders: Array<ExampleShortHeader> | null | undefined;
  error: Error | null | undefined;
  searchText: string;
  setSearchText: (arg1: string) => void;
  filtersState: FiltersState;
};

export const ExampleStoreContext = React.createContext<ExampleStoreState>({
  exampleFilters: null,
  exampleShortHeadersSearchResults: null,
  fetchExamplesAndFilters: () => {},
  exampleShortHeaders: null,
  error: null,
  searchText: '',
  setSearchText: () => {},
  filtersState: {
    chosenFilters: new Set(),
    addFilter: () => {},
    removeFilter: () => {},
    chosenCategory: null,
    setChosenCategory: () => {},
  },
});

type ExampleStoreStateProviderProps = {
  children: React.ReactNode;
};

export const ExampleStoreStateProvider = ({
  children,
}: ExampleStoreStateProviderProps) => {
  const [exampleShortHeadersById, setExampleShortHeadersById] = React.useState<
    | {
        [key: string]: ExampleShortHeader;
      }
    | null
    | undefined
  >(null);
  const [exampleFilters, setExampleFilters] = React.useState<
    Filters | null | undefined
  >(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [exampleShortHeaders, setExampleShortHeaders] = React.useState<
    Array<ExampleShortHeader> | null | undefined
  >(null);

  const isLoading = React.useRef<boolean>(false);

  const [searchText, setSearchText] = React.useState(defaultSearchText);
  const filtersState = useFilters();

  const fetchExamplesAndFilters = React.useCallback(() => {
    // Don't attempt to load again resources and filters if they
    // were loaded already.
    if (exampleShortHeadersById || isLoading.current) return;

    (async () => {
      setError(null);
      isLoading.current = true;

      try {
        const fetchedAllExamples = await listAllExamples();
        const {
          exampleShortHeaders: fetchedExampleShortHeaders,
          filters: fetchedFilters,
        } = fetchedAllExamples;

        console.info(
          `Loaded ${
            fetchedExampleShortHeaders ? fetchedExampleShortHeaders.length : 0
          } examples from the example store.`
        );

        setExampleShortHeaders(fetchedExampleShortHeaders);
        setExampleFilters(fetchedFilters);

        const exampleShortHeadersById: Record<string, any> = {};
        fetchedExampleShortHeaders.forEach((exampleShortHeader) => {
          exampleShortHeadersById[exampleShortHeader.id] = exampleShortHeader;
        });
        setExampleShortHeadersById(exampleShortHeadersById);
      } catch (error) {
        console.error(
          `Unable to load the examples from the example store:`,
          error
        );
        setError(error);
      }

      isLoading.current = false;
    })();
  }, [exampleShortHeadersById, isLoading]);

  React.useEffect(() => {
    // Don't attempt to load again examples and filters if they
    // were loaded already.
    if (exampleShortHeadersById || isLoading.current) return;

    const timeoutId = setTimeout(() => {
      console.info('Pre-fetching examples from the example store...');
      fetchExamplesAndFilters();
    }, EXAMPLES_FETCH_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [fetchExamplesAndFilters, exampleShortHeadersById, isLoading]);

  const { chosenCategory, chosenFilters } = filtersState;
  const exampleShortHeadersSearchResults:
    | Array<{
        item: ExampleShortHeader;
        matches: SearchMatch[];
      }>
    | null
    | undefined = useSearchStructuredItem(exampleShortHeadersById, {
    searchText,
    chosenCategory,
    chosenFilters,
    // @ts-expect-error - TS2322 - Type 'Set<unknown>' is not assignable to type 'Set<string>'.
    excludedTiers,
    defaultFirstSearchItemIds: firstExampleIds,
    shuffleResults: false,
  });

  const exampleStoreState = React.useMemo(
    () => ({
      exampleShortHeadersSearchResults,
      fetchExamplesAndFilters,
      exampleShortHeaders,
      exampleFilters,
      error,
      searchText,
      setSearchText,
      filtersState,
    }),
    [
      exampleShortHeadersSearchResults,
      exampleShortHeaders,
      error,
      exampleFilters,
      searchText,
      filtersState,
      fetchExamplesAndFilters,
    ]
  );

  return (
    <ExampleStoreContext.Provider value={exampleStoreState}>
      {children}
    </ExampleStoreContext.Provider>
  );
};
