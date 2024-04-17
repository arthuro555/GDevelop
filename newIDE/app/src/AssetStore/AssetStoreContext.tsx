import * as React from 'react';

import { t } from '@lingui/macro';
import { Filters } from '../Utils/GDevelopServices/Filters';
import {
  AssetShortHeader,
  PublicAssetPacks,
  PublicAssetPack,
  Author,
  License,
  Environment,
  listAllPublicAssets,
  listAllAuthors,
  listAllLicenses,
} from '../Utils/GDevelopServices/Asset';
import {
  listListedPrivateAssetPacks,
  PrivateAssetPackListingData,
} from '../Utils/GDevelopServices/Shop';
import { useSearchItem, SearchFilter } from '../UI/Search/UseSearchItem';
import {
  TagAssetStoreSearchFilter,
  AnimatedAssetStoreSearchFilter,
  ObjectTypeAssetStoreSearchFilter,
  ColorAssetStoreSearchFilter,
  LicenseAssetStoreSearchFilter,
  DimensionAssetStoreSearchFilter,
  AssetPackTypeStoreSearchFilter,
} from './AssetStoreSearchFilter';
import {
  NavigationState,
  AssetStorePageState,
  assetStoreHomePageState,
} from './AssetStoreNavigator';

import { ChosenCategory } from '../UI/Search/FiltersChooser';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import {
  getAssetPackFromUserFriendlySlug,
  getPrivateAssetPackListingDataFromUserFriendlySlug,
} from './AssetStoreUtils';
import useAlertDialog from '../UI/Alert/useAlertDialog';

const defaultSearchText = '';

export type AssetFiltersState = {
  animatedFilter: AnimatedAssetStoreSearchFilter;
  setAnimatedFilter: (arg1: AnimatedAssetStoreSearchFilter) => void;
  viewpointFilter: TagAssetStoreSearchFilter;
  setViewpointFilter: (arg1: TagAssetStoreSearchFilter) => void;
  dimensionFilter: DimensionAssetStoreSearchFilter;
  setDimensionFilter: (arg1: DimensionAssetStoreSearchFilter) => void;
  objectTypeFilter: ObjectTypeAssetStoreSearchFilter;
  setObjectTypeFilter: (arg1: ObjectTypeAssetStoreSearchFilter) => void;
  colorFilter: ColorAssetStoreSearchFilter;
  setColorFilter: (arg1: ColorAssetStoreSearchFilter) => void;
  licenseFilter: LicenseAssetStoreSearchFilter;
  setLicenseFilter: (arg1: LicenseAssetStoreSearchFilter) => void;
};

export type AssetPackFiltersState = {
  typeFilter: AssetPackTypeStoreSearchFilter;
  setTypeFilter: (arg1: AssetPackTypeStoreSearchFilter) => void;
};

type AssetStoreState = {
  filters: Filters | null | undefined;
  publicAssetPacks: PublicAssetPacks | null | undefined;
  privateAssetPackListingDatas:
    | Array<PrivateAssetPackListingData>
    | null
    | undefined;
  authors: Array<Author> | null | undefined;
  licenses: Array<License> | null | undefined;
  environment: Environment;
  setEnvironment: (arg1: Environment) => void;
  assetShortHeadersSearchResults: Array<AssetShortHeader> | null | undefined;
  publicAssetPacksSearchResults: Array<PublicAssetPack> | null | undefined;
  privateAssetPackListingDatasSearchResults:
    | Array<PrivateAssetPackListingData>
    | null
    | undefined;
  fetchAssetsAndFilters: () => void;
  error: Error | null | undefined;
  searchText: string;
  setSearchText: (arg1: string) => void;
  assetFiltersState: AssetFiltersState;
  assetPackFiltersState: AssetPackFiltersState;
  clearAllFilters: () => void;
  shopNavigationState: NavigationState;
  currentPage: AssetStorePageState;
  useSearchItem: (
    searchText: string,
    chosenCategory: ChosenCategory | null | undefined,
    chosenFilters: Set<string> | null | undefined,
    searchFilters: Array<SearchFilter<AssetShortHeader>>
  ) => Array<AssetShortHeader> | null | undefined;
  setInitialPackUserFriendlySlug: (initialPackUserFriendlySlug: string) => void;
};

export const initialAssetStoreState: AssetStoreState = {
  filters: null,
  publicAssetPacks: null,
  privateAssetPackListingDatas: null,
  authors: null,
  licenses: null,
  environment: 'live',
  setEnvironment: () => {},
  assetShortHeadersSearchResults: null,
  publicAssetPacksSearchResults: null,
  privateAssetPackListingDatasSearchResults: null,
  fetchAssetsAndFilters: () => {},
  error: null,
  searchText: '',
  setSearchText: () => {},
  assetFiltersState: {
    animatedFilter: new AnimatedAssetStoreSearchFilter(),
    setAnimatedFilter: (filter) => {},
    viewpointFilter: new TagAssetStoreSearchFilter(),
    setViewpointFilter: (filter) => {},
    dimensionFilter: new DimensionAssetStoreSearchFilter(),
    setDimensionFilter: (filter) => {},
    objectTypeFilter: new ObjectTypeAssetStoreSearchFilter(),
    setObjectTypeFilter: (filter) => {},
    colorFilter: new ColorAssetStoreSearchFilter(),
    setColorFilter: (filter) => {},
    licenseFilter: new LicenseAssetStoreSearchFilter(),
    setLicenseFilter: (filter) => {},
  },
  assetPackFiltersState: {
    typeFilter: new AssetPackTypeStoreSearchFilter({}),
    setTypeFilter: (filter) => {},
  },
  clearAllFilters: () => {},
  shopNavigationState: {
    getCurrentPage: () => assetStoreHomePageState,
    backToPreviousPage: () => assetStoreHomePageState,
    openHome: () => assetStoreHomePageState,
    clearHistory: () => {},
    clearPreviousPageFromHistory: () => {},
    openSearchResultPage: () => {},
    openTagPage: (tag) => {},
    openShopCategoryPage: (category) => {},
    openPackPage: ({ assetPack, previousSearchText }) => {},
    openAssetDetailPage: ({ assetShortHeader, previousSearchText }) => {},
    openPrivateAssetPackInformationPage: ({
      privateAssetPackListingData,
      previousSearchText,
    }) => {},
    openPrivateGameTemplateInformationPage: ({
      privateGameTemplateListingData,
      previousSearchText,
    }) => {},
    navigateInsideFolder: (folder) => {},
    goBackToFolderIndex: (index) => {},
  },
  currentPage: assetStoreHomePageState,
  useSearchItem: (searchText, chosenCategory, chosenFilters, searchFilters) =>
    null,
  setInitialPackUserFriendlySlug: (initialPackUserFriendlySlug: string) => {},
};

export const AssetStoreContext = React.createContext<AssetStoreState>(
  initialAssetStoreState
);

type AssetStoreStateProviderProps = {
  shopNavigationState: NavigationState;
  children: React.ReactNode;
};

const getAssetShortHeaderSearchTerms = (assetShortHeader: AssetShortHeader) => {
  return (
    assetShortHeader.name +
    '\n' +
    assetShortHeader.shortDescription +
    '\n' +
    assetShortHeader.tags.join(', ')
  );
};

const getPublicAssetPackSearchTerms = (assetPack: PublicAssetPack) =>
  assetPack.name + '\n' + assetPack.tag;

const getPrivateAssetPackListingDataSearchTerms = (
  privateAssetPack: PrivateAssetPackListingData
) => privateAssetPack.name + '\n' + privateAssetPack.description;

export const AssetStoreStateProvider = ({
  shopNavigationState,
  children,
}: AssetStoreStateProviderProps) => {
  const [assetShortHeadersById, setAssetShortHeadersById] = React.useState<
    | {
        [key: string]: AssetShortHeader;
      }
    | null
    | undefined
  >(null);
  const [publicAssetShortHeaders, setPublicAssetShortHeaders] = React.useState<
    Array<AssetShortHeader> | null | undefined
  >(null);
  const { receivedAssetShortHeaders, receivedAssetPacks } = React.useContext(
    AuthenticatedUserContext
  );
  const [filters, setFilters] = React.useState<Filters | null | undefined>(
    null
  );
  const [publicAssetPacks, setPublicAssetPacks] = React.useState<
    PublicAssetPacks | null | undefined
  >(null);
  const [privateAssetPackListingDatas, setPrivateAssetPackListingDatas] =
    React.useState<Array<PrivateAssetPackListingData> | null | undefined>(null);
  const [authors, setAuthors] = React.useState<
    Array<Author> | null | undefined
  >(null);
  const [licenses, setLicenses] = React.useState<
    Array<License> | null | undefined
  >(null);
  const [environment, setEnvironment] = React.useState<Environment>('live');
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [initialPackUserFriendlySlug, setInitialPackUserFriendlySlug] =
    React.useState<string | null | undefined>(null);
  const initialPackOpened = React.useRef<boolean>(false);
  // @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const [searchText, setSearchText] = React.useState(defaultSearchText);

  const [animatedFilter, setAnimatedFilter] =
    React.useState<AnimatedAssetStoreSearchFilter>(
      new AnimatedAssetStoreSearchFilter()
    );
  const [viewpointFilter, setViewpointFilter] =
    React.useState<TagAssetStoreSearchFilter>(new TagAssetStoreSearchFilter());
  const [dimensionFilter, setDimensionFilter] =
    React.useState<DimensionAssetStoreSearchFilter>(
      new DimensionAssetStoreSearchFilter()
    );
  const [objectTypeFilter, setObjectTypeFilter] =
    React.useState<ObjectTypeAssetStoreSearchFilter>(
      new ObjectTypeAssetStoreSearchFilter()
    );
  const [colorFilter, setColorFilter] =
    React.useState<ColorAssetStoreSearchFilter>(
      new ColorAssetStoreSearchFilter()
    );
  const [licenseFilter, setLicenseFilter] =
    React.useState<LicenseAssetStoreSearchFilter>(
      new LicenseAssetStoreSearchFilter()
    );
  // When one of the filter change, we need to rebuild the array
  // for the search.
  const assetSearchFilters = React.useMemo<
    Array<SearchFilter<AssetShortHeader>>
  >(
    () => [
      animatedFilter,
      viewpointFilter,
      dimensionFilter,
      objectTypeFilter,
      colorFilter,
      licenseFilter,
    ],
    [
      animatedFilter,
      viewpointFilter,
      dimensionFilter,
      objectTypeFilter,
      colorFilter,
      licenseFilter,
    ]
  );

  const [assetPackTypeFilter, setAssetPackTypeFilter] =
    React.useState<AssetPackTypeStoreSearchFilter>(
      new AssetPackTypeStoreSearchFilter({ receivedAssetPacks })
    );
  const assetPackSearchFilters = React.useMemo<
    Array<SearchFilter<PublicAssetPack | PrivateAssetPackListingData>>
  >(() => [assetPackTypeFilter], [assetPackTypeFilter]);

  const fetchAssetsAndFilters = React.useCallback(() => {
    (async () => {
      setError(null);

      try {
        const {
          publicAssetShortHeaders: fetchedPublicAssetShortHeaders,
          publicFilters: fetchedPublicFilters,
          publicAssetPacks: fetchedPublicAssetPacks,
        } = await listAllPublicAssets({ environment });
        const fetchedAuthors = await listAllAuthors({ environment });
        const fetchedLicenses = await listAllLicenses({ environment });
        const fetchedPrivateAssetPackListingDatas =
          await listListedPrivateAssetPacks();

        console.info(
          `Loaded ${
            fetchedPublicAssetShortHeaders
              ? fetchedPublicAssetShortHeaders.length
              : 0
          } assets from the asset store.`
        );
        setPublicAssetPacks(fetchedPublicAssetPacks);
        setPublicAssetShortHeaders(fetchedPublicAssetShortHeaders);
        setFilters(fetchedPublicFilters);
        setAuthors(fetchedAuthors);
        setLicenses(fetchedLicenses);
        setPrivateAssetPackListingDatas(fetchedPrivateAssetPackListingDatas);
      } catch (error) {
        console.error(`Unable to load the assets from the asset store:`, error);
        setError(error);
      }
    })();
  }, [environment]);

  // When the public assets or the private assets are loaded, regenerate the
  // list of all assets by ids.
  React.useEffect(() => {
    const assetShortHeadersById: Record<string, any> = {};
    if (publicAssetShortHeaders) {
      publicAssetShortHeaders.forEach((assetShortHeader) => {
        assetShortHeadersById[assetShortHeader.id] = assetShortHeader;
      });
    }
    if (receivedAssetShortHeaders) {
      receivedAssetShortHeaders.forEach((assetShortHeader) => {
        assetShortHeadersById[assetShortHeader.id] = assetShortHeader;
      });
    }
    if (Object.keys(assetShortHeadersById).length > 0) {
      setAssetShortHeadersById(assetShortHeadersById);
    }
  }, [publicAssetShortHeaders, receivedAssetShortHeaders]);

  // When the asset packs (public and received private packs) are loaded,
  // open the asset pack with the slug that was asked to be initially loaded.
  React.useEffect(() => {
    if (!initialPackUserFriendlySlug || initialPackOpened.current) {
      // If there is no initial pack or
      // if the pack was already opened, don't re-open it again even
      // if the effect run again.
      return;
    }

    if (
      publicAssetPacks &&
      receivedAssetPacks &&
      privateAssetPackListingDatas &&
      initialPackUserFriendlySlug
    ) {
      initialPackOpened.current = true;

      // Try to first find a public or received asset pack.
      const assetPack = getAssetPackFromUserFriendlySlug({
        publicAssetPacks,
        receivedAssetPacks,
        userFriendlySlug: initialPackUserFriendlySlug,
      });

      if (assetPack) {
        shopNavigationState.openPackPage({
          assetPack,
          previousSearchText: searchText,
        });
        initialPackOpened.current = false; // Allow to open the pack again if the effect run again.
        setInitialPackUserFriendlySlug(null);
        return;
      }

      // Otherwise, try to open the information page of a pack not yet bought.
      const privateAssetPackListingData =
        getPrivateAssetPackListingDataFromUserFriendlySlug({
          privateAssetPackListingDatas,
          userFriendlySlug: initialPackUserFriendlySlug,
        });

      if (privateAssetPackListingData) {
        shopNavigationState.openPrivateAssetPackInformationPage({
          privateAssetPackListingData,
          previousSearchText: searchText,
        });
        initialPackOpened.current = false; // Allow to open the pack again if the effect run again.
        setInitialPackUserFriendlySlug(null);
        return;
      }

      showAlert({
        title: t`Asset pack not found`,
        message: t`The link to the asset pack you've followed seems outdated. Why not take a look at the other packs in the asset store?`,
      });
    }
  }, [
    publicAssetPacks,
    receivedAssetPacks,
    privateAssetPackListingDatas,
    shopNavigationState,
    showAlert,
    initialPackUserFriendlySlug,
    searchText,
  ]);

  React.useEffect(() => {
    // the callback fetchAssetsAndFilters depends on the environment,
    // so it will be called again if the environment changes.
    fetchAssetsAndFilters();
  }, [fetchAssetsAndFilters]);

  const publicAssetPacksByTag = React.useMemo(() => {
    if (!publicAssetPacks || !publicAssetPacks.starterPacks) {
      return null;
    }
    const publicAssetPacksByTag: Record<string, any> = {};
    publicAssetPacks.starterPacks.forEach((assetPack) => {
      const tag = assetPack.tag;
      if (
        publicAssetPacksByTag[tag] &&
        !assetPack.externalWebLink // Don't warn for external web links, as they can be used multiple times.
      ) {
        console.warn(`Multiple public asset packs with the same tag: ${tag}`);
      }
      publicAssetPacksByTag[tag] = assetPack;
    });
    return publicAssetPacksByTag;
  }, [publicAssetPacks]);

  const privateAssetPackListingDatasById = React.useMemo(() => {
    if (!privateAssetPackListingDatas) {
      return null;
    }
    const privateAssetPackListingDatasById: Record<string, any> = {};
    privateAssetPackListingDatas.forEach((privateAssetPackListingData) => {
      const id = privateAssetPackListingData.id;
      if (privateAssetPackListingDatasById[id]) {
        console.warn(`Multiple private asset packs with the same id: ${id}`);
      }
      privateAssetPackListingDatasById[id] = privateAssetPackListingData;
    });
    return privateAssetPackListingDatasById;
  }, [privateAssetPackListingDatas]);

  const currentPage = shopNavigationState.getCurrentPage();
  const { chosenCategory, chosenFilters } = currentPage.filtersState;
  const assetShortHeadersSearchResults:
    | Array<AssetShortHeader>
    | null
    | undefined = useSearchItem(
    assetShortHeadersById,
    getAssetShortHeaderSearchTerms,
    searchText,
    chosenCategory,
    chosenFilters,
    assetSearchFilters
  );

  const publicAssetPacksSearchResults:
    | Array<PublicAssetPack>
    | null
    | undefined = useSearchItem(
    publicAssetPacksByTag,
    getPublicAssetPackSearchTerms,
    searchText,
    chosenCategory,
    null,
    // $FlowFixMe - this filter works for both public and private packs
    assetPackSearchFilters
  );

  const privateAssetPackListingDatasSearchResults:
    | Array<PrivateAssetPackListingData>
    | null
    | undefined = useSearchItem(
    privateAssetPackListingDatasById,
    getPrivateAssetPackListingDataSearchTerms,
    searchText,
    chosenCategory,
    null,
    // $FlowFixMe - this filter works for both public and private packs
    assetPackSearchFilters
  );

  const assetFiltersState: AssetFiltersState = React.useMemo(
    () => ({
      animatedFilter,
      setAnimatedFilter,
      viewpointFilter,
      setViewpointFilter,
      dimensionFilter,
      setDimensionFilter,
      objectTypeFilter,
      setObjectTypeFilter,
      colorFilter,
      setColorFilter,
      licenseFilter,
      setLicenseFilter,
    }),
    [
      animatedFilter,
      setAnimatedFilter,
      viewpointFilter,
      setViewpointFilter,
      dimensionFilter,
      setDimensionFilter,
      objectTypeFilter,
      setObjectTypeFilter,
      colorFilter,
      setColorFilter,
      licenseFilter,
      setLicenseFilter,
    ]
  );

  const assetPackFiltersState: AssetPackFiltersState = React.useMemo(
    () => ({
      typeFilter: assetPackTypeFilter,
      setTypeFilter: setAssetPackTypeFilter,
    }),
    [assetPackTypeFilter, setAssetPackTypeFilter]
  );

  const clearAllFilters = React.useCallback(() => {
    assetFiltersState.setAnimatedFilter(new AnimatedAssetStoreSearchFilter());
    assetFiltersState.setViewpointFilter(new TagAssetStoreSearchFilter());
    assetFiltersState.setDimensionFilter(new DimensionAssetStoreSearchFilter());
    assetFiltersState.setObjectTypeFilter(
      new ObjectTypeAssetStoreSearchFilter()
    );
    assetFiltersState.setColorFilter(new ColorAssetStoreSearchFilter());
    assetFiltersState.setLicenseFilter(new LicenseAssetStoreSearchFilter());
    assetPackFiltersState.setTypeFilter(new AssetPackTypeStoreSearchFilter({}));
  }, [assetFiltersState, assetPackFiltersState]);

  const assetStoreState = React.useMemo(
    () => ({
      assetShortHeadersSearchResults,
      publicAssetPacksSearchResults,
      privateAssetPackListingDatasSearchResults,
      fetchAssetsAndFilters,
      filters,
      publicAssetPacks,
      privateAssetPackListingDatas,
      authors,
      licenses,
      environment,
      setEnvironment,
      error,
      shopNavigationState,
      currentPage,
      searchText,
      setSearchText,
      assetFiltersState,
      assetPackFiltersState,
      clearAllFilters,
      useSearchItem: (
        // @ts-expect-error - TS7006 - Parameter 'searchText' implicitly has an 'any' type.
        searchText,
        // @ts-expect-error - TS7006 - Parameter 'chosenCategory' implicitly has an 'any' type.
        chosenCategory,
        // @ts-expect-error - TS7006 - Parameter 'chosenFilters' implicitly has an 'any' type.
        chosenFilters,
        // @ts-expect-error - TS7006 - Parameter 'searchFilters' implicitly has an 'any' type.
        searchFilters
      ) =>
        useSearchItem(
          assetShortHeadersById,
          getAssetShortHeaderSearchTerms,
          searchText,
          chosenCategory,
          chosenFilters,
          searchFilters
        ),
      setInitialPackUserFriendlySlug,
    }),
    [
      assetShortHeadersSearchResults,
      publicAssetPacksSearchResults,
      privateAssetPackListingDatasSearchResults,
      fetchAssetsAndFilters,
      filters,
      publicAssetPacks,
      privateAssetPackListingDatas,
      authors,
      licenses,
      environment,
      setEnvironment,
      error,
      shopNavigationState,
      currentPage,
      searchText,
      assetFiltersState,
      assetPackFiltersState,
      clearAllFilters,
      assetShortHeadersById,
      setInitialPackUserFriendlySlug,
    ]
  );

  return (
    <AssetStoreContext.Provider value={assetStoreState}>
      {children}
    </AssetStoreContext.Provider>
  );
};
