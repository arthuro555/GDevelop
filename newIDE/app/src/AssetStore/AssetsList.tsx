// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
import capitalize from 'lodash/capitalize';
// @ts-expect-error - TS6142 - Module './AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from './AssetStoreContext';
import {
  AssetShortHeader,
  PublicAssetPack,
  Author,
  License,
  isAssetPackAudioOnly,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module './NoResultPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NoResultPlaceholder.tsx', but '--jsx' is not set.
import { NoResultPlaceholder } from './NoResultPlaceholder';
import GridList from '@material-ui/core/GridList';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView, { ScrollViewInterface } from '../UI/ScrollView';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { mergeArraysPerGroup } from '../Utils/Array';
import {
  AssetCardTile,
  AssetFolderTile,
  PrivateAssetPackTile,
  PrivateGameTemplateTile,
  PublicAssetPackTile,
// @ts-expect-error - TS6142 - Module './ShopTiles' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ShopTiles.tsx', but '--jsx' is not set.
} from './ShopTiles';
// @ts-expect-error - TS6142 - Module './PrivateAssets/PrivateAssetPackAudioFilesDownloadButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetPackAudioFilesDownloadButton.tsx', but '--jsx' is not set.
import PrivateAssetPackAudioFilesDownloadButton from './PrivateAssets/PrivateAssetPackAudioFilesDownloadButton';
// @ts-expect-error - TS6142 - Module '../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../UI/CorsAwareImage';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout, LineStackLayout } from '../UI/Layout';
import {
  getUserPublicProfile,
  UserPublicProfile,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS6142 - Module '../Profile/PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from '../Profile/PublicProfileDialog';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/Breadcrumbs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Breadcrumbs.tsx', but '--jsx' is not set.
import Breadcrumbs from '../UI/Breadcrumbs';
import { getFolderTagsFromAssetShortHeaders } from './TagsHelper';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from './PrivateGameTemplates/PrivateGameTemplateStoreContext';
import { AssetStorePageState } from './AssetStoreNavigator';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../UI/HelpIcon';
// @ts-expect-error - TS6142 - Module './ProductLicense/ProductLicenseOptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseOptions.tsx', but '--jsx' is not set.
import { OwnedProductLicense } from './ProductLicense/ProductLicenseOptions';
// @ts-expect-error - TS6142 - Module './ProductPageHelper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPageHelper.tsx', but '--jsx' is not set.
import { getUserProductPurchaseUsageType } from './ProductPageHelper';

const ASSETS_DISPLAY_LIMIT = 250;

const getAssetSize = (windowSize: WindowSizeType) => {
  switch (windowSize) {
    case 'small':
      return 80;
    case 'medium':
      return 120;
    case 'large':
    case 'xlarge':
      return 130;
    default:
      return 120;
  }
};

const getShopItemsColumns = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 3 : 1;
    case 'medium':
      return 2;
    case 'large':
      return 3;
    case 'xlarge':
      return 5;
    default:
      return 2;
  }
};

const getAssetFoldersColumns = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 2 : 1;
    case 'medium':
      return 1;
    case 'large':
    case 'xlarge':
      return 2;
    default:
      return 2;
  }
};

const getPageBreakAssetLowerIndex = (pageBreakIndex: number) =>
  ASSETS_DISPLAY_LIMIT * pageBreakIndex;
const getPageBreakAssetUpperIndex = (pageBreakIndex: number) =>
  ASSETS_DISPLAY_LIMIT * (pageBreakIndex + 1);

export const getAssetShortHeadersToDisplay = (
  allAssetShortHeaders: AssetShortHeader[],
  selectedFolders: string[],
  pageBreakIndex: number = 0,
): AssetShortHeader[] => {
  let assetShortHeaders = allAssetShortHeaders.filter(assetShortHeader => {
    if (!selectedFolders.length) return true;
    const allAssetTags = assetShortHeader.tags;
    // Check that the asset has all the selected folders tags.
    return selectedFolders.every(folderTag => allAssetTags.includes(folderTag));
  });
  // Limit the number of displayed assets to avoid performance issues
  const pageBreakAssetLowerIndex = getPageBreakAssetLowerIndex(pageBreakIndex);
  const pageBreakAssetUpperIndex = Math.min(
    getPageBreakAssetUpperIndex(pageBreakIndex),
    assetShortHeaders.length
  );
  if (
    pageBreakAssetLowerIndex !== 0 ||
    pageBreakAssetUpperIndex !== assetShortHeaders.length
  ) {
    assetShortHeaders = assetShortHeaders.slice(
      pageBreakAssetLowerIndex,
      pageBreakAssetUpperIndex
    );
  }
  return assetShortHeaders;
};

const cellSpacing = 8;
const styles = {
  grid: {
    margin: '0 2px', // Remove the default margin of the grid but keep the horizontal padding for focus outline.
    // Remove the scroll capability of the grid, the scroll view handles it.
    overflow: 'unset',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
  },
  previewImageContainer: {
    display: 'flex',
    flex: 0.7,
    alignItems: 'flex-start',
  },
  previewImage: {
    width: '100%',
    // Prevent cumulative layout shift by enforcing
    // the 16:9 ratio.
    aspectRatio: '16 / 9',
    objectFit: 'contain',
    position: 'relative',
  },
  openProductContainer: {
    display: 'flex',
    paddingLeft: 32, // To align with licensing options.
    marginTop: 8,
    marginBottom: 8,
  },
} as const;

type PageBreakNavigationProps = {
  currentPage: AssetStorePageState,
  pageBreakIndex: number,
  setPageBreakIndex: (arg1: number) => void,
  assetShortHeaders: Array<AssetShortHeader>,
  scrollView: ScrollViewInterface | null | undefined
};

const PageBreakNavigation = ({
  currentPage,
  pageBreakIndex,
  setPageBreakIndex,
  assetShortHeaders,
  scrollView,
}: PageBreakNavigationProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
          key="previous-assets"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Show previous assets</Trans>}
          onClick={() => {
            currentPage.pageBreakIndex = Math.max(
              0,
              (currentPage.pageBreakIndex || 0) - 1
            );
            setPageBreakIndex(currentPage.pageBreakIndex);
            scrollView && scrollView.scrollToPosition(0);
          }}
          disabled={pageBreakIndex <= 0}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          key="next-assets"
          primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Show next assets</Trans>}
          onClick={() => {
            currentPage.pageBreakIndex = (currentPage.pageBreakIndex || 0) + 1;
            setPageBreakIndex(currentPage.pageBreakIndex);
            scrollView && scrollView.scrollToPosition(0);
          }}
          disabled={
            assetShortHeaders.length <
            getPageBreakAssetUpperIndex(pageBreakIndex)
          }
        />
      </LineStackLayout>
    </Column>
  );
};

export type AssetsListInterface = {
  getScrollPosition: () => number,
  scrollToPosition: (y: number) => void
};

type Props = {
  assetShortHeaders: Array<AssetShortHeader> | null | undefined,
  privateAssetPackListingDatas?: Array<PrivateAssetPackListingData> | null | undefined,
  privateGameTemplateListingDatas?: Array<PrivateGameTemplateListingData> | null | undefined,
  publicAssetPacks?: Array<PublicAssetPack> | null | undefined,
  onOpenDetails: (assetShortHeader: AssetShortHeader) => void,
  noResultsPlaceHolder?: React.ReactNode,
  error?: Error | null | undefined,
  onPrivateAssetPackSelection?: (
    privateAssetPackListingData: PrivateAssetPackListingData,
    options?: {
      forceProductPage?: boolean
    },
  ) => void,
  onPublicAssetPackSelection?: (assetPack: PublicAssetPack) => void,
  onPrivateGameTemplateSelection?: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void,
  onFolderSelection?: (folderTag: string) => void,
  onGoBackToFolderIndex?: (folderIndex: number) => void,
  noScroll?: boolean,
  // This component can either display the list of assets, packs, and game templates using the asset store navigator,
  // then currentPage is the current page of the navigator.
  // Or it can display arbitrary content, like the list of assets in a pack, or similar assets,
  // then currentPage is null.
  currentPage?: AssetStorePageState
};

// @ts-expect-error - TS2345 - Argument of type '({ assetShortHeaders, onOpenDetails, noResultsPlaceHolder, privateAssetPackListingDatas, privateGameTemplateListingDatas, publicAssetPacks, onPrivateAssetPackSelection, onPublicAssetPackSelection, onPrivateGameTemplateSelection, onFolderSelection, onGoBackToFolderIndex, noScroll, currentPage, }: Props, ref: Forwarde...' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, AssetsListInterface>'.
const AssetsList = React.forwardRef<Props, AssetsListInterface>((
  {
    assetShortHeaders,
    onOpenDetails,
    noResultsPlaceHolder,
    privateAssetPackListingDatas,
    privateGameTemplateListingDatas,
    publicAssetPacks,
    onPrivateAssetPackSelection,
    onPublicAssetPackSelection,
    onPrivateGameTemplateSelection,
    onFolderSelection,
    onGoBackToFolderIndex,
    noScroll,
    currentPage,
  }: Props,
  ref
) => {
  const {
    error: assetStoreError,
    fetchAssetsAndFilters,
    clearAllFilters: clearAllAssetFilters,
    licenses,
    authors,
    assetFiltersState,
    assetPackFiltersState,
    privateAssetPackListingDatas: allPrivateAssetPackListingDatas,
  } = React.useContext(AssetStoreContext);
  const {
    error: gameTemplateStoreError,
    fetchGameTemplates,
  } = React.useContext(PrivateGameTemplateStoreContext);
  const {
    receivedAssetPacks,
    receivedGameTemplates,
    assetPackPurchases,
  } = React.useContext(AuthenticatedUserContext);
  const [
    authorPublicProfile,
    setAuthorPublicProfile,
  ] = React.useState<UserPublicProfile | null | undefined>(null);
  const [
    openAuthorPublicProfileDialog,
    setOpenAuthorPublicProfileDialog,
  ] = React.useState<boolean>(false);
  const [
    isNavigatingInsideFolder,
    setIsNavigatingInsideFolder,
  ] = React.useState<boolean>(false);
  const { openedAssetPack, selectedFolders } = React.useMemo(
    () => {
      if (!currentPage) {
        return { openedAssetPack: null, selectedFolders: [] };
      }
      return {
        openedAssetPack: currentPage.openedAssetPack,
        selectedFolders: currentPage.selectedFolders,
      };
    },
    [currentPage]
  );
  const { windowSize, isLandscape } = useResponsiveWindowSize();
  const scrollView = React.useRef<ScrollViewInterface | null | undefined>(null);
// @ts-expect-error - TS2739 - Type '{ getScrollPosition: () => any; scrollToPosition: (y: number) => void; }' is missing the following properties from type 'Props': assetShortHeaders, onOpenDetails
  React.useImperativeHandle(ref, () => ({
    getScrollPosition: () => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return 0;

      return scrollViewElement.getScrollPosition();
    },
    scrollToPosition: (y: number) => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      scrollViewElement.scrollToPosition(y);
    },
  }));

  const fetchAssetsAndGameTemplates = React.useCallback(
    () => {
      fetchAssetsAndFilters();
      fetchGameTemplates();
    },
    [fetchAssetsAndFilters, fetchGameTemplates]
  );

  const shopError = assetStoreError || gameTemplateStoreError;

  const hasAssetPackFiltersApplied = React.useMemo(
    // When a pack is opened, the asset pack filters are not hidden, but not relevant either.
    () => !openedAssetPack && assetPackFiltersState.typeFilter.hasFilters(),
    [assetPackFiltersState, openedAssetPack]
  );

  const hasAssetFiltersApplied = React.useMemo(
    () =>
      assetFiltersState.animatedFilter.hasFilters() ||
      assetFiltersState.viewpointFilter.hasFilters() ||
      assetFiltersState.colorFilter.hasFilters() ||
      assetFiltersState.dimensionFilter.hasFilters() ||
      assetFiltersState.licenseFilter.hasFilters() ||
      assetFiltersState.objectTypeFilter.hasFilters(),
    [assetFiltersState]
  );

  const hasOnlySelectedOwnedAssetPacks = React.useMemo(
    () =>
      // When a pack is opened, the asset pack filters are not hidden, but not relevant either.
      !openedAssetPack &&
      assetPackFiltersState.typeFilter.isOwned &&
      !assetPackFiltersState.typeFilter.isPremium &&
      !assetPackFiltersState.typeFilter.isFree &&
      !hasAssetFiltersApplied,
    [assetPackFiltersState, hasAssetFiltersApplied, openedAssetPack]
  );
  const noResultComponent = noResultsPlaceHolder ? (
    noResultsPlaceHolder
  ) : hasOnlySelectedOwnedAssetPacks ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NoResultPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      message={<Trans>You don't own any pack yet!</Trans>}
      onClear={clearAllAssetFilters}
    />
  ) : hasAssetPackFiltersApplied && hasAssetFiltersApplied ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NoResultPlaceholder
      message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          Cannot filter on both asset packs and assets at the same time. Try
          clearing one of the filters!
        </Trans>
      }
      onClear={clearAllAssetFilters}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <NoResultPlaceholder onClear={clearAllAssetFilters} />
  );

  // When selected folders change, set a flag to know that we are navigating inside a folder.
  // This allows showing a fake loading indicator.
  React.useEffect(
    () => {
      setIsNavigatingInsideFolder(true);
      const timeoutId = setTimeout(
        () => setIsNavigatingInsideFolder(false),
        100
      );
      return () => clearTimeout(timeoutId);
    },
    // Apply the effect only when the selected folders change.
    [selectedFolders]
  );

  const folderTags: Array<string> = React.useMemo(
    () => {
      // When inside an asset pack, it will automatically select a folder.
      // So if the list is empty or if the assets are not loaded, we don't load the tags.
      if (!selectedFolders.length || !assetShortHeaders) return [];
      return getFolderTagsFromAssetShortHeaders({
        assetShortHeaders,
        selectedFolders,
      });
    },
    [assetShortHeaders, selectedFolders]
  );

  const folderTiles = React.useMemo(
    () => {
      // Don't show folders if we are searching.
      if (!folderTags.length || !onFolderSelection) return [];
      return folderTags.map(folderTag => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AssetFolderTile
          tag={folderTag}
          key={folderTag}
          onSelect={() => {
            onFolderSelection(folderTag);
          }}
        />
      ));
    },
    [folderTags, onFolderSelection]
  );

  const selectedPrivateAssetPackListingData = React.useMemo(
    () => {
      if (
        !allPrivateAssetPackListingDatas ||
        !openedAssetPack ||
        // public pack selected.
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
        !openedAssetPack.id
      )
        return null;

      // As the list should already been fetched, we can find the selected pack
      // if it is a private pack.
      return allPrivateAssetPackListingDatas.find(
// @ts-expect-error - TS7006 - Parameter 'privateAssetPackListingData' implicitly has an 'any' type.
        privateAssetPackListingData =>
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
          privateAssetPackListingData.id === openedAssetPack.id
      );
    },
    [allPrivateAssetPackListingDatas, openedAssetPack]
  );

  const [pageBreakIndex, setPageBreakIndex] = React.useState<number>((currentPage && currentPage.pageBreakIndex) || 0);

  const assetTiles = React.useMemo(
    () => {
      // Loading
      if (!assetShortHeaders) return null;
      // Don't show assets if filtering on asset packs.)
      if (hasAssetPackFiltersApplied && !openedAssetPack) return [];

      return getAssetShortHeadersToDisplay(
        assetShortHeaders,
        selectedFolders,
        pageBreakIndex
      ).map(assetShortHeader => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AssetCardTile
          assetShortHeader={assetShortHeader}
          onOpenDetails={() => onOpenDetails(assetShortHeader)}
          size={getAssetSize(windowSize)}
          key={assetShortHeader.id}
          margin={cellSpacing / 2}
        />
      ));
    },
    [
      assetShortHeaders,
      hasAssetPackFiltersApplied,
      openedAssetPack,
      selectedFolders,
      pageBreakIndex,
      windowSize,
      onOpenDetails,
    ]
  );

  const publicPacksTiles: Array<React.ReactNode> = React.useMemo(
    () => {
      if (
        !publicAssetPacks ||
        !onPublicAssetPackSelection ||
        // Don't show public packs if filtering on assets.
        hasAssetFiltersApplied
      )
        return [];
      return publicAssetPacks.map((assetPack, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PublicAssetPackTile
          assetPack={assetPack}
          onSelect={() => onPublicAssetPackSelection(assetPack)}
          key={`${assetPack.tag}-${index}`}
        />
      ));
    },
    [publicAssetPacks, onPublicAssetPackSelection, hasAssetFiltersApplied]
  );

  const { allStandAlonePackTiles, allBundlePackTiles } = React.useMemo(
    () => {
      const privateAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackStandAloneTiles: Array<React.ReactNode> = [];
      const privateAssetPackBundleTiles: Array<React.ReactNode> = [];
      const privateOwnedAssetPackBundleTiles: Array<React.ReactNode> = [];

      if (
        !privateAssetPackListingDatas ||
        !receivedAssetPacks ||
        // Don't show private packs if filtering on assets.
        hasAssetFiltersApplied
      ) {
        return {
          allStandAlonePackTiles: [],
          allBundlePackTiles: [],
        };
      }

      !!onPrivateAssetPackSelection &&
        privateAssetPackListingDatas.forEach(assetPackListingData => {
          const isPackOwned =
            !!receivedAssetPacks &&
            !!receivedAssetPacks.find(
              pack => pack.id === assetPackListingData.id
            );
          const tile = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PrivateAssetPackTile
              assetPackListingData={assetPackListingData}
              onSelect={() => {
                onPrivateAssetPackSelection(assetPackListingData);
              }}
              owned={isPackOwned}
              key={assetPackListingData.id}
            />
          );
          if (
            assetPackListingData.includedListableProductIds &&
            !!assetPackListingData.includedListableProductIds.length
          ) {
            if (isPackOwned) {
              privateOwnedAssetPackBundleTiles.push(tile);
            } else {
              privateAssetPackBundleTiles.push(tile);
            }
          } else {
            if (isPackOwned) {
              privateOwnedAssetPackStandAloneTiles.push(tile);
            } else {
              privateAssetPackStandAloneTiles.push(tile);
            }
          }
        });

      const allBundlePackTiles = [
        ...privateOwnedAssetPackBundleTiles, // Display owned bundles first.
        ...privateAssetPackBundleTiles,
      ];

      const allStandAlonePackTiles = [
        ...privateOwnedAssetPackStandAloneTiles, // Display owned packs first.
        ...mergeArraysPerGroup(
          privateAssetPackStandAloneTiles,
          publicPacksTiles,
          2,
          1
        ),
      ];

      return { allStandAlonePackTiles, allBundlePackTiles };
    },
    [
      privateAssetPackListingDatas,
      onPrivateAssetPackSelection,
      publicPacksTiles,
      receivedAssetPacks,
      hasAssetFiltersApplied,
    ]
  );

  const gameTemplateTiles = React.useMemo(
    () => {
      if (
        !privateGameTemplateListingDatas ||
        !onPrivateGameTemplateSelection ||
        // Don't show private game templates if filtering on assets.
        hasAssetFiltersApplied ||
        // Don't show private game templates if filtering on asset packs.
        hasAssetPackFiltersApplied
      )
        return [];

      return privateGameTemplateListingDatas.map(
        (privateGameTemplateListingData, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateGameTemplateTile
            privateGameTemplateListingData={privateGameTemplateListingData}
            onSelect={() => {
              onPrivateGameTemplateSelection(privateGameTemplateListingData);
            }}
            owned={
              !!receivedGameTemplates &&
              !!receivedGameTemplates.find(
                pack => pack.id === privateGameTemplateListingData.id
              )
            }
            key={privateGameTemplateListingData.id}
          />
        )
      );
    },
    [
      privateGameTemplateListingDatas,
      onPrivateGameTemplateSelection,
      receivedGameTemplates,
      hasAssetFiltersApplied,
      hasAssetPackFiltersApplied,
    ]
  );

  const packMainImageUrl = openedAssetPack
// @ts-expect-error - TS2339 - Property 'thumbnailUrl' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
    ? openedAssetPack.thumbnailUrl
// @ts-expect-error - TS2339 - Property 'thumbnailUrl' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
      ? openedAssetPack.thumbnailUrl
// @ts-expect-error - TS2339 - Property 'previewImageUrls' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
      : openedAssetPack.previewImageUrls
// @ts-expect-error - TS2339 - Property 'previewImageUrls' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
      ? openedAssetPack.previewImageUrls[0]
      : null
    : null;

  React.useEffect(
    () => {
      (async () => {
        if (!selectedPrivateAssetPackListingData) {
          setAuthorPublicProfile(null);
          return;
        }
        try {
          const authorProfile = await getUserPublicProfile(
            selectedPrivateAssetPackListingData.sellerId
          );

          setAuthorPublicProfile(authorProfile);
        } catch (error: any) {
          console.error(error);
          // Do not block the UI if the author profile can't be fetched.
        }
      })();
    },
    [selectedPrivateAssetPackListingData]
  );

  const publicAssetPackAuthors: Array<Author> | null | undefined = React.useMemo(
    () =>
// @ts-expect-error - TS2339 - Property 'authors' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
      openedAssetPack && authors && openedAssetPack.authors
// @ts-expect-error - TS2339 - Property 'authors' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
        ? openedAssetPack.authors
// @ts-expect-error - TS7006 - Parameter 'author' implicitly has an 'any' type.
            .map(author => {
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
              return authors.find(({ name }) => name === author.name);
            })
            .filter(Boolean)
        : [],
    [openedAssetPack, authors]
  );

  const publicAssetPackLicenses: Array<License> | null | undefined = React.useMemo(
    () =>
// @ts-expect-error - TS2339 - Property 'licenses' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
      openedAssetPack && licenses && openedAssetPack.licenses
// @ts-expect-error - TS2339 - Property 'licenses' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
        ? openedAssetPack.licenses
// @ts-expect-error - TS7006 - Parameter 'license' implicitly has an 'any' type.
            .map(license => {
// @ts-expect-error - TS7031 - Binding element 'name' implicitly has an 'any' type.
              return licenses.find(({ name }) => name === license.name);
            })
            .filter(Boolean)
        : [],
    [openedAssetPack, licenses]
  );

  const privateAssetPackLicense = React.useMemo(
    () =>
      getUserProductPurchaseUsageType({
        productId:
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'. | TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
          openedAssetPack && openedAssetPack.id ? openedAssetPack.id : null,
        receivedProducts: receivedAssetPacks,
        productPurchases: assetPackPurchases,
        allProductListingDatas: allPrivateAssetPackListingDatas,
      }),
    [
      assetPackPurchases,
      openedAssetPack,
      allPrivateAssetPackListingDatas,
      receivedAssetPacks,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ScrollView
      ref={scrollView}
      id="asset-store-listing"
      style={{
        ...styles.scrollView,
        ...(noScroll ? { overflow: 'hidden' } : {}),
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {!assetTiles && !shopError && <PlaceholderLoader />}
      {!assetTiles && shopError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderError onRetry={fetchAssetsAndGameTemplates}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Can't load the results. Verify your internet connection or retry
            later.
          </Trans>
        </PlaceholderError>
      )}
      {currentPage &&
        assetShortHeaders &&
        assetShortHeaders.length > getPageBreakAssetUpperIndex(0) &&
        pageBreakIndex > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PageBreakNavigation
            currentPage={currentPage}
            pageBreakIndex={pageBreakIndex}
            setPageBreakIndex={setPageBreakIndex}
            assetShortHeaders={assetShortHeaders}
            scrollView={scrollView.current}
          />
        )}
      {!openedAssetPack &&
      gameTemplateTiles.length &&
      pageBreakIndex === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <GridList
              cols={getShopItemsColumns(windowSize, isLandscape)}
              style={styles.grid}
              cellHeight="auto"
              spacing={cellSpacing / 2}
            >
              {gameTemplateTiles}
            </GridList>
          </Column>
        </Line>
      ) : null}
      {!openedAssetPack &&
      allBundlePackTiles.length &&
      pageBreakIndex === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <GridList
              cols={getShopItemsColumns(windowSize, isLandscape)}
              style={styles.grid}
              cellHeight="auto"
              spacing={cellSpacing / 2}
            >
              {allBundlePackTiles}
            </GridList>
          </Column>
        </Line>
      ) : null}
      {!openedAssetPack &&
      allStandAlonePackTiles.length &&
      pageBreakIndex === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <GridList
              cols={getShopItemsColumns(windowSize, isLandscape)}
              style={styles.grid}
              cellHeight="auto"
              spacing={cellSpacing / 2}
            >
              {allStandAlonePackTiles}
            </GridList>
          </Column>
        </Line>
      ) : null}
      {openedAssetPack && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout>
            {packMainImageUrl && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div style={styles.previewImageContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CorsAwareImage
                  key={openedAssetPack.name}
                  style={styles.previewImage}
                  src={
// @ts-expect-error - TS2339 - Property 'thumbnailUrl' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                    openedAssetPack.thumbnailUrl
// @ts-expect-error - TS2339 - Property 'thumbnailUrl' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                      ? openedAssetPack.thumbnailUrl
// @ts-expect-error - TS2339 - Property 'previewImageUrls' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                      : openedAssetPack.previewImageUrls
// @ts-expect-error - TS2339 - Property 'previewImageUrls' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                      ? openedAssetPack.previewImageUrls[0]
                      : ''
                  }
                  alt={`Preview image of asset pack ${openedAssetPack.name}`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LargeSpacer />
              </div>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin alignItems="flex-start" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="bold-title">{openedAssetPack.name}</Text>
              {!!publicAssetPackAuthors && publicAssetPackAuthors.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text size="body" displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>by</Trans>{' '}
                  {publicAssetPackAuthors.map((author, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment key={author.name}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      {index > 0 && <>, </>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Link
                        key={author.name}
                        href={author.website}
                        onClick={() => Window.openExternalURL(author.website)}
                      >
                        {author.name}
                      </Link>
                    </React.Fragment>
                  ))}
                </Text>
              )}

              {!!publicAssetPackLicenses &&
                publicAssetPackLicenses.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Text size="body">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Type of License:{' '}
                      {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Link
                          href={publicAssetPackLicenses[0].website}
                          onClick={() =>
                            Window.openExternalURL(
                              publicAssetPackLicenses[0].website
                            )
                          }
                        >
                          {publicAssetPackLicenses[0].name}
                        </Link>
                      }
                    </Trans>
                  </Text>
                )}
              {authorPublicProfile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text displayInlineAsSpan size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>by</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Link
                    onClick={() => setOpenAuthorPublicProfileDialog(true)}
                    href="#"
                  >
                    {authorPublicProfile.username || ''}
                  </Link>
                </Text>
              )}
              {privateAssetPackLicense && onPrivateAssetPackSelection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Licensing</Trans>
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <HelpIcon
                      size="small"
                      helpPagePath="https://gdevelop.io/page/asset-store-license-agreement"
                    />
                  </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <OwnedProductLicense
                    productType="asset-pack"
                    ownedLicense={privateAssetPackLicense}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.openProductContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Open in Store</Trans>}
                      onClick={() => {
                        // Ensure this is a private pack and we are on the store.
                        if (
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                          !openedAssetPack.id ||
                          !allPrivateAssetPackListingDatas ||
                          !currentPage
                        )
                          return;
                        const assetPackListingData = allPrivateAssetPackListingDatas.find(
// @ts-expect-error - TS7006 - Parameter 'listingData' implicitly has an 'any' type. | TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
                          listingData => listingData.id === openedAssetPack.id
                        );
                        if (!assetPackListingData) return;
                        onPrivateAssetPackSelection(assetPackListingData, {
                          forceProductPage: true,
                        });
                      }}
                      primary
                    />
                  </div>
                </Column>
              )}
            </Column>
          </ResponsiveLineStackLayout>
        </Column>
      )}
      {openedAssetPack &&
      (folderTiles.length || (assetTiles && assetTiles.length)) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Content</Trans>
          </Text>
        </Column>
      ) : null}
      {selectedFolders.length > 1 && onGoBackToFolderIndex ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Breadcrumbs
              steps={selectedFolders.map((folder, index) => {
                if (index === selectedFolders.length - 1) {
                  return {
                    label: capitalize(folder),
                  };
                }
                return {
                  label: capitalize(folder),
                  onClick: () => {
                    onGoBackToFolderIndex(index);
                  },
                  href: '#',
                };
              })}
            />
          </Line>
        </Column>
      ) : null}
      {openedAssetPack && folderTiles.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <GridList
            style={styles.grid}
            cellHeight="auto"
            cols={getAssetFoldersColumns(windowSize, isLandscape)}
            spacing={cellSpacing / 2}
          >
            {folderTiles}
          </GridList>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LargeSpacer />
        </Column>
      ) : null}
      {isNavigatingInsideFolder ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      ) : assetTiles && assetTiles.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GridList style={styles.grid} cellHeight="auto">
          {assetTiles}
        </GridList>
      ) : openedAssetPack &&
// @ts-expect-error - TS2339 - Property 'content' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
        openedAssetPack.content &&
// @ts-expect-error - TS2345 - Argument of type 'PublicAssetPack | PrivateAssetPack' is not assignable to parameter of type 'PrivateAssetPack'.
        isAssetPackAudioOnly(openedAssetPack) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PrivateAssetPackAudioFilesDownloadButton
          assetPack={openedAssetPack}
        />
      ) : null}
      {// loading is finished.
      assetTiles &&
        // No assets to show.
        !assetTiles.length &&
        // No bundles to show.
        !allBundlePackTiles.length &&
        // No packs to show.
        !allStandAlonePackTiles.length &&
        // no templates to show.
        !gameTemplateTiles.length &&
        (!openedAssetPack ||
// @ts-expect-error - TS2339 - Property 'content' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
          !openedAssetPack.content ||
          // It's not an audio pack.
// @ts-expect-error - TS2345 - Argument of type 'PublicAssetPack | PrivateAssetPack' is not assignable to parameter of type 'PrivateAssetPack'.
          !isAssetPackAudioOnly(openedAssetPack)) &&
        noResultComponent}
      {onPrivateAssetPackSelection &&
        onPrivateGameTemplateSelection &&
        openAuthorPublicProfileDialog &&
        authorPublicProfile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PublicProfileDialog
            userId={authorPublicProfile.id}
            onClose={() => setOpenAuthorPublicProfileDialog(false)}
// @ts-expect-error - TS7006 - Parameter 'assetPackListingData' implicitly has an 'any' type.
            onAssetPackOpen={assetPackListingData => {
              onPrivateAssetPackSelection(assetPackListingData);
              setOpenAuthorPublicProfileDialog(false);
              setAuthorPublicProfile(null);
            }}
// @ts-expect-error - TS7006 - Parameter 'gameTemplateListingData' implicitly has an 'any' type.
            onGameTemplateOpen={gameTemplateListingData => {
              onPrivateGameTemplateSelection(gameTemplateListingData);
              setOpenAuthorPublicProfileDialog(false);
              setAuthorPublicProfile(null);
            }}
          />
        )}

      {currentPage &&
        assetShortHeaders &&
        assetShortHeaders.length > getPageBreakAssetUpperIndex(0) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PageBreakNavigation
            currentPage={currentPage}
            pageBreakIndex={pageBreakIndex}
            setPageBreakIndex={setPageBreakIndex}
            assetShortHeaders={assetShortHeaders}
            scrollView={scrollView.current}
          />
        )}
    </ScrollView>
  );
});

export default AssetsList;
