import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Search/FiltersChooser' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/FiltersChooser.tsx', but '--jsx' is not set.
import { FiltersState, useFilters } from '../../UI/Search/FiltersChooser';
import {
  Resource,
  Author,
  License,
  listAllAuthors,
  listAllLicenses,
  listAllResources,
} from '../../Utils/GDevelopServices/Asset';
import { Filters } from '../../Utils/GDevelopServices/Filters';
import { useSearchItem } from '../../UI/Search/UseSearchItem';
// @ts-expect-error - TS6142 - Module '../AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from '../AssetStoreContext';

const defaultSearchText = '';

type ResourceStoreState = {
  filters: Filters | null | undefined,
  authors: Array<Author> | null | undefined,
  licenses: Array<License> | null | undefined,
  searchResults: Array<Resource> | null | undefined,
  fetchResourcesAndFilters: () => void,
  error: Error | null | undefined,
  searchText: string,
  setSearchText: (arg1: string) => void,
  filtersState: FiltersState
};

export const ResourceStoreContext = React.createContext<ResourceStoreState>({
  filters: null,
  authors: null,
  licenses: null,
  searchResults: null,
  fetchResourcesAndFilters: () => {},
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

type ResourceStoreStateProviderProps = {
  children: React.ReactNode
};

const getResourceSearchTerms = (resource: Resource) => {
  return resource.name + '\n' + resource.tags.join(', ');
};

export const ResourceStoreStateProvider = ({
  children,
}: ResourceStoreStateProviderProps) => {
  const [resourcesByUrl, setResourcesByUrl] = React.useState<{
    [key: string]: Resource
  } | null | undefined>(null);
  const [filters, setFilters] = React.useState<Filters | null | undefined>(null);
  const [authors, setAuthors] = React.useState<Array<Author> | null | undefined>(null);
  const [licenses, setLicenses] = React.useState<Array<License> | null | undefined>(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const isLoading = React.useRef<boolean>(false);

  const [searchText, setSearchText] = React.useState(defaultSearchText);
  const filtersState = useFilters();

  const { environment } = React.useContext(AssetStoreContext);

  const fetchResourcesAndFilters = React.useCallback(
    () => {
      // Don't attempt to load again resources and filters if they
      // were loaded already.
      if (resourcesByUrl || isLoading.current) return;

      (async () => {
        setError(null);
        isLoading.current = true;

        try {
          const { resources, filters } = await listAllResources({
            environment,
          });
          const authors = await listAllAuthors({ environment });
          const licenses = await listAllLicenses({ environment });

          const resourcesByUrl: Record<string, any> = {};
          resources.forEach(resource => {
            resourcesByUrl[resource.url] = resource;
          });

          console.info(
            `Loaded ${
              resources ? resources.length : 0
            } resources from the asset store.`
          );
          setResourcesByUrl(resourcesByUrl);
          setFilters(filters);
          setAuthors(authors);
          setLicenses(licenses);
        } catch (error: any) {
          console.error(
            `Unable to load the assets from the asset store:`,
            error
          );
          setError(error);
        }

        isLoading.current = false;
      })();
    },
    [resourcesByUrl, isLoading, environment]
  );

  const { chosenCategory, chosenFilters } = filtersState;
  const searchResults: Array<Resource> | null | undefined = useSearchItem(
    resourcesByUrl,
    getResourceSearchTerms,
    searchText,
    chosenCategory,
    chosenFilters
  );

  const resourceStoreState = React.useMemo(
    () => ({
      searchResults,
      fetchResourcesAndFilters,
      filters,
      authors,
      licenses,
      error,
      searchText,
      setSearchText,
      filtersState,
    }),
    [
      searchResults,
      error,
      filters,
      authors,
      licenses,
      searchText,
      filtersState,
      fetchResourcesAndFilters,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ResourceStoreContext.Provider value={resourceStoreState}>
      {children}
    </ResourceStoreContext.Provider>
  );
};
