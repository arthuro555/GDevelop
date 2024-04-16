import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Tune'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Tune.js' implicitly has an 'any' type.
import Tune from '../UI/CustomSvgIcons/Tune';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../UI/ScrollView';
import Window from '../Utils/Window';
import {
  sendAssetOpened,
  sendAssetPackInformationOpened,
  sendAssetPackOpened,
  sendGameTemplateInformationOpened,
} from '../Utils/Analytics/EventSender';
import {
  AssetShortHeader,
  PublicAssetPack,
  PublicAssetPacks,
  PrivateAssetPack,
  doesAssetPackContainAudio,
  isAssetPackAudioOnly,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import { SearchBarInterface } from '../UI/SearchBar';
// @ts-expect-error - TS6142 - Module './AssetStoreFilterPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreFilterPanel.tsx', but '--jsx' is not set.
import { AssetStoreFilterPanel } from './AssetStoreFilterPanel';
// @ts-expect-error - TS6142 - Module './AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from './AssetStoreContext';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
import { useShouldAutofocusInput } from '../UI/Responsive/ScreenTypeMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/Subheader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Subheader.tsx', but '--jsx' is not set.
import Subheader from '../UI/Subheader';
// @ts-expect-error - TS6142 - Module './AssetsHome' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetsHome.tsx', but '--jsx' is not set.
import { AssetsHome, AssetsHomeInterface } from './AssetsHome';
// @ts-expect-error - TS6142 - Module '../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../UI/TextButton';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module './AssetDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetDetails.tsx', but '--jsx' is not set.
import { AssetDetails, AssetDetailsInterface } from './AssetDetails';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Home'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Home.js' implicitly has an 'any' type.
import Home from '../UI/CustomSvgIcons/Home';
// @ts-expect-error - TS6142 - Module './PrivateAssets/PrivateAssetPackInformationPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetPackInformationPage.tsx', but '--jsx' is not set.
import PrivateAssetPackInformationPage from './PrivateAssets/PrivateAssetPackInformationPage';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
import {
  isHomePage,
  isSearchResultPage,
  AssetStorePageState,
} from './AssetStoreNavigator';
// @ts-expect-error - TS6142 - Module '../UI/ResponsivePaperOrDrawer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsivePaperOrDrawer.tsx', but '--jsx' is not set.
import { ResponsivePaperOrDrawer } from '../UI/ResponsivePaperOrDrawer';
// @ts-expect-error - TS6142 - Module './AssetsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetsList.tsx', but '--jsx' is not set.
import AssetsList, { AssetsListInterface } from './AssetsList';
// @ts-expect-error - TS6142 - Module './PrivateAssets/PrivateAssetPackAudioFilesDownloadButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetPackAudioFilesDownloadButton.tsx', but '--jsx' is not set.
import PrivateAssetPackAudioFilesDownloadButton from './PrivateAssets/PrivateAssetPackAudioFilesDownloadButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import { capitalize } from 'lodash';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplates/PrivateGameTemplateInformationPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationPage.tsx', but '--jsx' is not set.
import PrivateGameTemplateInformationPage from './PrivateGameTemplates/PrivateGameTemplateInformationPage';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from './PrivateGameTemplates/PrivateGameTemplateStoreContext';

type Props = {
  hideGameTemplates?: boolean // TODO: if we add more options, use an array instead.,
  displayPromotions?: boolean,
  onOpenPrivateGameTemplateListingData?: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void
};

export type AssetStoreInterface = {
  onClose: () => void
};

const identifyAssetPackKind = ({
  privateAssetPackListingDatas,
  publicAssetPacks,
  assetPack,
}: {
  privateAssetPackListingDatas: Array<PrivateAssetPackListingData> | null | undefined,
  publicAssetPacks: PublicAssetPacks | null | undefined,
  assetPack: PrivateAssetPack | PublicAssetPack | null
}) => {
  if (!assetPack) return 'unknown';

  // We could simplify this if the asset packs have a "kind" or "type" in the future.
  // For now, we check their presence in the lists to ensure adding fields in the backend
  // won't break this detection in the future (for example, if public asset packs get an `id`,
  // this won't break).
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
  return assetPack.id &&
    privateAssetPackListingDatas &&
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'PublicAssetPack | PrivateAssetPack'.
    !!privateAssetPackListingDatas.find(({ id }) => id === assetPack.id)
    ? 'private'
    : publicAssetPacks &&
      publicAssetPacks.starterPacks.find(({ tag }) => tag === assetPack.tag)
    ? 'public'
    : 'unknown';
};

// @ts-expect-error - TS2345 - Argument of type '({ hideGameTemplates, displayPromotions, onOpenPrivateGameTemplateListingData, }: Props, ref: ForwardedRef<Props>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, AssetStoreInterface>'.
export const AssetStore = React.forwardRef<Props, AssetStoreInterface>((
  {
    hideGameTemplates,
    displayPromotions,
    onOpenPrivateGameTemplateListingData,
  }: Props,
  ref
) => {
  const {
    assetShortHeadersSearchResults,
    publicAssetPacksSearchResults,
    privateAssetPackListingDatasSearchResults,
    publicAssetPacks,
    privateAssetPackListingDatas,
    error: assetStoreError,
    fetchAssetsAndFilters,
    shopNavigationState,
    searchText,
    setSearchText: setAssetStoreSearchText,
    clearAllFilters: clearAllAssetStoreFilters,
  } = React.useContext(AssetStoreContext);
  const {
    privateGameTemplateListingDatas,
    error: privateGameTemplateStoreError,
    fetchGameTemplates,
    shop: {
      privateGameTemplateListingDatasSearchResults,
      setSearchText: setPrivateGameTemplateSearchText,
    },
  } = React.useContext(PrivateGameTemplateStoreContext);
  const currentPage = shopNavigationState.getCurrentPage();
  const {
    openedAssetPack,
    openedAssetShortHeader,
    openedShopCategory,
    openedPrivateAssetPackListingData,
    openedPrivateGameTemplateListingData,
    filtersState, // how to have a filtersstate for both store?
  } = currentPage;
  const isOnHomePage = isHomePage(currentPage);
  const isOnSearchResultPage = isSearchResultPage(currentPage);
  const searchBar = React.useRef<SearchBarInterface | null | undefined>(null);
  const shouldAutofocusSearchbar = useShouldAutofocusInput();

  const { isMobile } = useResponsiveWindowSize();

  // Don't open the filters panel automatically.
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = React.useState(false);
  const openFiltersPanelIfAppropriate = React.useCallback(
    () => {
      if (isMobile) {
        // Never open automatically the filters on small screens
        return;
      }

      setIsFiltersPanelOpen(true);
    },
    [isMobile]
  );

  const { receivedAssetPacks, receivedGameTemplates } = React.useContext(
    AuthenticatedUserContext
  );

  // The saved scroll position must not be reset by a scroll event until it
  // has been applied.
  const hasAppliedSavedScrollPosition = React.useRef<boolean>(false);
  const isAssetDetailLoading = React.useRef<boolean>(openedAssetShortHeader != null);
  const setScrollUpdateIsNeeded = React.useCallback(
    (page: AssetStorePageState) => {
      hasAppliedSavedScrollPosition.current = false;
      isAssetDetailLoading.current = page.openedAssetShortHeader !== null;
    },
    []
  );

  // We search in both the asset store and the game templates stores.
  const setSearchText = React.useCallback(
    (newSearchText: string) => {
      setAssetStoreSearchText(newSearchText);
      setPrivateGameTemplateSearchText(newSearchText);
    },
    [setAssetStoreSearchText, setPrivateGameTemplateSearchText]
  );

  const fetchAssetsAndGameTemplates = React.useCallback(
    () => {
      fetchAssetsAndFilters();
      fetchGameTemplates();
    },
    [fetchAssetsAndFilters, fetchGameTemplates]
  );

  const storeError = assetStoreError || privateGameTemplateStoreError;

  const reApplySearchTextIfNeeded = React.useCallback(
    (page: AssetStorePageState): boolean => {
      const previousSearchText = page.searchText || '';
      if (searchText !== previousSearchText) {
        setSearchText(previousSearchText);
        return true;
      }
      return false;
    },
    [searchText, setSearchText]
  );

  const canShowFiltersPanel =
    !openedAssetShortHeader && // Don't show filters on asset page.
    !openedPrivateAssetPackListingData && // Don't show filters on private asset pack information page.
    !openedPrivateGameTemplateListingData && // Don't show filters on private game template information page.
    !(
      openedAssetPack &&
      openedAssetPack.content &&
      // Don't show filters if opened asset pack contains audio only.
      isAssetPackAudioOnly(openedAssetPack)
    );
  const assetsHome = React.useRef<AssetsHomeInterface | null | undefined>(null);
  const assetDetails = React.useRef<AssetDetailsInterface | null | undefined>(null);
  const assetsList = React.useRef<AssetsListInterface | null | undefined>(null);
  const getScrollView = React.useCallback(() => {
    return assetsHome.current || assetDetails.current || assetsList.current;
  }, []);
  const saveScrollPosition = React.useCallback(
    () => {
      const scrollView = getScrollView();
      if (!scrollView) {
        return;
      }
      currentPage.scrollPosition = scrollView.getScrollPosition();
    },
    [getScrollView, currentPage]
  );
  // This is also called when the asset detail page has loaded.
  const applyBackScrollPosition = React.useCallback(
    (page: AssetStorePageState) => {
      if (hasAppliedSavedScrollPosition.current) {
        return;
      }
      const scrollView = getScrollView();
      if (!scrollView) {
        return;
      }
      const scrollPosition = page.scrollPosition;
      if (scrollPosition) scrollView.scrollToPosition(scrollPosition);
      // If no saved scroll position, force scroll to 0 in case the displayed component
      // is the same as the previous page so the scroll is naturally kept between pages
      // although the user navigated and the scroll should be reset.
      else scrollView.scrollToPosition(0);
      hasAppliedSavedScrollPosition.current = true;
    },
    [getScrollView]
  );

  React.useLayoutEffect(
    () => {
      // When going back to the homepage from a page where the asset filters
      // were open, we must first close the panel and then apply the scroll position.
      const applyEffect = async () => {
        if (isOnHomePage) {
          clearAllAssetStoreFilters();
          await setIsFiltersPanelOpen(false);
        }
        if (!isAssetDetailLoading.current) {
          applyBackScrollPosition(currentPage);
        }
      };
      applyEffect();
    },
    // clearAllFilters is not stable, so don't list it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOnHomePage, applyBackScrollPosition, currentPage]
  );

// @ts-expect-error - TS2559 - Type '{ onClose: () => void; }' has no properties in common with type 'Props'.
  React.useImperativeHandle(ref, () => ({
    onClose: saveScrollPosition,
  }));

  const onOpenDetails = React.useCallback(
    (assetShortHeader: AssetShortHeader) => {
      const assetPackName = openedAssetPack ? openedAssetPack.name : null;
      const assetPackTag = openedAssetPack ? openedAssetPack.tag : null;
      const assetPackId =
        openedAssetPack && openedAssetPack.id ? openedAssetPack.id : null;
      const assetPackKind = identifyAssetPackKind({
        assetPack: openedAssetPack,
        publicAssetPacks,
        privateAssetPackListingDatas,
      });
      sendAssetOpened({
        id: assetShortHeader.id,
        name: assetShortHeader.name,
        assetPackName,
        assetPackTag,
        assetPackId,
        assetPackKind,
      });
      saveScrollPosition();
      const previousSearchText = searchText;
      // Don't reset search text when opening an asset as the search bar is not active.
      // This helps speeding up the navigation when going back to the results page.
      shopNavigationState.openAssetDetailPage({
        assetShortHeader,
        previousSearchText,
      });
    },
    [
      openedAssetPack,
      publicAssetPacks,
      privateAssetPackListingDatas,
      saveScrollPosition,
      shopNavigationState,
      searchText,
    ]
  );

  // When a pack is selected from the home page,
  // we set it as the chosen category and open the filters panel.
  const selectPublicAssetPack = React.useCallback(
    (assetPack: PublicAssetPack) => {
      sendAssetPackOpened({
        assetPackTag: assetPack.tag,
        assetPackId: null,
        assetPackName: assetPack.name,
        assetPackKind: 'public',
        source: 'store-home',
      });

      if (assetPack.externalWebLink) {
        Window.openExternalURL(assetPack.externalWebLink);
      } else {
        saveScrollPosition();
        const previousSearchText = searchText;
        setSearchText(''); // Reset search text when opening a pack.
        shopNavigationState.openPackPage({ assetPack, previousSearchText });
        openFiltersPanelIfAppropriate();
      }
    },
    [
      shopNavigationState,
      searchText,
      saveScrollPosition,
      setSearchText,
      openFiltersPanelIfAppropriate,
    ]
  );

  // When a private pack is selected from the home page,
  // if the user owns it, we set it as the chosen category,
  // otherwise we open the page to buy it.
  const selectPrivateAssetPack = React.useCallback(
    (
      privateAssetPackListingData: PrivateAssetPackListingData,
      options?: {
        forceProductPage?: boolean
      }
    ) => {
      const receivedAssetPack = receivedAssetPacks
        ? receivedAssetPacks.find(
            pack => pack.id === privateAssetPackListingData.id
          )
        : null;

      if (!receivedAssetPack || (options && options.forceProductPage)) {
        // The user has not received the pack, open the page to buy it.
        sendAssetPackInformationOpened({
          assetPackName: privateAssetPackListingData.name,
          assetPackId: privateAssetPackListingData.id,
          assetPackKind: 'private',
        });
        saveScrollPosition();
        const previousSearchText = searchText;
        setSearchText(''); // Reset search text when opening a pack.
        shopNavigationState.openPrivateAssetPackInformationPage({
          privateAssetPackListingData,
          previousSearchText,
        });
        return;
      }

      // The user has received the pack, open it.
      sendAssetPackOpened({
        assetPackName: privateAssetPackListingData.name,
        assetPackId: privateAssetPackListingData.id,
        assetPackTag: null,
        assetPackKind: 'private',
        source: 'store-home',
      });
      saveScrollPosition();
      const previousSearchText = searchText;
      setSearchText(''); // Reset search text when opening a pack.
      shopNavigationState.openPackPage({
        assetPack: receivedAssetPack,
        previousSearchText,
      });
      openFiltersPanelIfAppropriate();
    },
    [
      receivedAssetPacks,
      saveScrollPosition,
      shopNavigationState,
      setSearchText,
      openFiltersPanelIfAppropriate,
      searchText,
    ]
  );

  const selectFolder = React.useCallback(
    (folderTag: string) => {
      shopNavigationState.navigateInsideFolder(folderTag);
    },
    [shopNavigationState]
  );

  const goBackToFolderIndex = React.useCallback(
    (folderIndex: number) => {
      shopNavigationState.goBackToFolderIndex(folderIndex);
    },
    [shopNavigationState]
  );

  const selectPrivateGameTemplate = React.useCallback(
    (privateGameTemplateListingData: PrivateGameTemplateListingData) => {
      sendGameTemplateInformationOpened({
        gameTemplateName: privateGameTemplateListingData.name,
        gameTemplateId: privateGameTemplateListingData.id,
        source: 'store',
      });
      saveScrollPosition();
      const previousSearchText = searchText;
      setSearchText(''); // Reset search text when opening a template.
      shopNavigationState.openPrivateGameTemplateInformationPage({
        privateGameTemplateListingData,
        previousSearchText,
      });
    },
    [saveScrollPosition, setSearchText, searchText, shopNavigationState]
  );

  const selectShopCategory = React.useCallback(
    (category: string) => {
      saveScrollPosition();
      shopNavigationState.openShopCategoryPage(category);
    },
    [shopNavigationState, saveScrollPosition]
  );

  // When a tag is selected from the asset details page,
  // first determine if it's a public or private pack,
  // then set it as the chosen category, clear old filters and open the filters panel.
  const selectTag = React.useCallback(
    (tag: string) => {
      const privateAssetPack =
        receivedAssetPacks &&
        receivedAssetPacks.find(pack => pack.tag === tag);
      const publicAssetPack =
        publicAssetPacks &&
// @ts-expect-error - TS7006 - Parameter 'pack' implicitly has an 'any' type.
        publicAssetPacks.starterPacks.find(pack => pack.tag === tag);
      saveScrollPosition();
      setSearchText('');
      if (privateAssetPack) {
        shopNavigationState.openPackPage({
          assetPack: privateAssetPack,
          previousSearchText: '', // We were on an asset page.
        });
      } else if (publicAssetPack) {
        shopNavigationState.openPackPage({
          assetPack: publicAssetPack,
          previousSearchText: '', // We were on an asset page.
        });
      } else {
        shopNavigationState.openTagPage(tag);
      }
      clearAllAssetStoreFilters();
      openFiltersPanelIfAppropriate();
    },
    [
      setSearchText,
      receivedAssetPacks,
      publicAssetPacks,
      saveScrollPosition,
      clearAllAssetStoreFilters,
      shopNavigationState,
      openFiltersPanelIfAppropriate,
    ]
  );

  React.useEffect(
    () => {
      if (shouldAutofocusSearchbar && searchBar.current) {
        searchBar.current.focus();
      }
    },
    [shouldAutofocusSearchbar]
  );

  const privateAssetPackListingDatasFromSameCreator: Array<PrivateAssetPackListingData> | null | undefined = React.useMemo(
    () => {
      if (
        !openedPrivateAssetPackListingData ||
        !privateAssetPackListingDatas ||
        !receivedAssetPacks
      )
        return null;

      const receivedAssetPackIds = receivedAssetPacks.map(pack => pack.id);

      return privateAssetPackListingDatas
        .filter(
// @ts-expect-error - TS7006 - Parameter 'pack' implicitly has an 'any' type.
          pack =>
            pack.sellerId === openedPrivateAssetPackListingData.sellerId &&
            !receivedAssetPackIds.includes(pack.sellerId)
        )
// @ts-expect-error - TS7006 - Parameter 'pack1' implicitly has an 'any' type. | TS7006 - Parameter 'pack2' implicitly has an 'any' type.
        .sort((pack1, pack2) => pack1.name.localeCompare(pack2.name));
    },
    [
      openedPrivateAssetPackListingData,
      privateAssetPackListingDatas,
      receivedAssetPacks,
    ]
  );

  const privateGameTemplateListingDatasFromSameCreator: Array<PrivateGameTemplateListingData> | null | undefined = React.useMemo(
    () => {
      if (
        !openedPrivateGameTemplateListingData ||
        !privateGameTemplateListingDatas ||
        !receivedGameTemplates
      )
        return null;

      const receivedGameTemplateIds = receivedGameTemplates.map(
        template => template.id
      );

      return privateGameTemplateListingDatas
        .filter(
// @ts-expect-error - TS7006 - Parameter 'template' implicitly has an 'any' type.
          template =>
            template.sellerId ===
              openedPrivateGameTemplateListingData.sellerId &&
            !receivedGameTemplateIds.includes(template.sellerId)
        )
// @ts-expect-error - TS7006 - Parameter 'template1' implicitly has an 'any' type. | TS7006 - Parameter 'template2' implicitly has an 'any' type.
        .sort((template1, template2) =>
          template1.name.localeCompare(template2.name)
        );
    },
    [
      openedPrivateGameTemplateListingData,
      privateGameTemplateListingDatas,
      receivedGameTemplates,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand noMargin useFullHeight noOverflowParent id="asset-store">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          id="home-button"
          key="back-discover"
          tooltip={t`Back to discover`}
          onClick={() => {
            setSearchText('');
            const page = shopNavigationState.openHome();
            setScrollUpdateIsNeeded(page);
            clearAllAssetStoreFilters();
            setIsFiltersPanelOpen(false);
          }}
          size="small"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Home />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand useFullHeight noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SearchBar
            placeholder={
              hideGameTemplates ? t`Search assets` : `Search the shop`
            }
            value={searchText}
            onChange={
              isOnSearchResultPage
                ? // An existing search is already being done: just update the
                  // search text and the store will update the search results.
                  setSearchText
                : (newValue: string) => {
                    setSearchText(newValue);

                    // A new search is being initiated: navigate to the search page,
                    // and clear the history as a new search was launched.
                    if (!!newValue) {
                      shopNavigationState.clearHistory();
                      shopNavigationState.openSearchResultPage();
                      openFiltersPanelIfAppropriate();
                    }
                  }
            }
            onRequestSearch={() => {}}
            ref={searchBar}
            id="asset-store-search-bar"
          />
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          onClick={() => setIsFiltersPanelOpen(!isFiltersPanelOpen)}
          disabled={!canShowFiltersPanel}
          selected={canShowFiltersPanel && isFiltersPanelOpen}
          size="small"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Tune />
        </IconButton>
      </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="space-between" noMargin alignItems="center">
          {(!isOnHomePage || !!openedShopCategory) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand alignItems="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TextButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon={<ChevronArrowLeft />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Back</Trans>}
                  onClick={async () => {
                    const page = shopNavigationState.backToPreviousPage();
                    const isUpdatingSearchtext = reApplySearchTextIfNeeded(
                      page
                    );
                    if (isUpdatingSearchtext) {
                      // Updating the search is not instant, so we cannot apply the scroll position
                      // right away. We force a wait as there's no easy way to know when results are completely updated.
                      await new Promise(resolve: (result: Promise<undefined> | undefined) => void => setTimeout(resolve, 500));
                      setScrollUpdateIsNeeded(page);
                      applyBackScrollPosition(page); // We apply it manually, because the layout effect won't be called again.
                    } else {
                      setScrollUpdateIsNeeded(page);
                    }
                  }}
                />
              </Column>
              {(openedAssetPack ||
                openedPrivateAssetPackListingData ||
                filtersState.chosenCategory) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <>
                  {!openedAssetPack && !openedPrivateAssetPackListingData && (
                    // Only show the category name if we're not on an asset pack page.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Column expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="block-title" noMargin>
                        {filtersState.chosenCategory
                          ? capitalize(filtersState.chosenCategory.node.name)
                          : ''}
                      </Text>
                    </Column>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column
                    expand
                    alignItems="flex-end"
                    noMargin
                    justifyContent="center"
                  >
                    {openedAssetPack &&
                    openedAssetPack.content &&
                    doesAssetPackContainAudio(openedAssetPack) &&
                    !isAssetPackAudioOnly(openedAssetPack) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <PrivateAssetPackAudioFilesDownloadButton
                        assetPack={openedAssetPack}
                      />
                    ) : null}
                  </Column>
                </>
              )}
            </>
          )}
        </Line>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line
        expand
        noMargin
        overflow={
          'hidden' /* Somehow required on Chrome/Firefox to avoid children growing (but not on Safari) */
        }
      >
        {isOnHomePage ? (
          storeError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PlaceholderError onRetry={fetchAssetsAndGameTemplates}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  An error occurred when fetching the store content. Please
                  try again later.
                </Trans>
              </AlertMessage>
            </PlaceholderError>
          ) : publicAssetPacks &&
            privateAssetPackListingDatas &&
            privateGameTemplateListingDatas ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AssetsHome
              ref={assetsHome}
              publicAssetPacks={publicAssetPacks}
              privateAssetPackListingDatas={privateAssetPackListingDatas}
              privateGameTemplateListingDatas={
                privateGameTemplateListingDatas
              }
              onPublicAssetPackSelection={selectPublicAssetPack}
              onPrivateAssetPackSelection={selectPrivateAssetPack}
              onPrivateGameTemplateSelection={selectPrivateGameTemplate}
              onCategorySelection={selectShopCategory}
              openedShopCategory={openedShopCategory}
              hideGameTemplates={hideGameTemplates}
              displayPromotions={displayPromotions}
            />
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PlaceholderLoader />
          )
        ) : isOnSearchResultPage ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AssetsList
            publicAssetPacks={publicAssetPacksSearchResults}
            privateAssetPackListingDatas={
              privateAssetPackListingDatasSearchResults
            }
            privateGameTemplateListingDatas={
              privateGameTemplateListingDatasSearchResults
            }
            assetShortHeaders={assetShortHeadersSearchResults}
            ref={assetsList}
            error={storeError}
            onOpenDetails={onOpenDetails}
            onPrivateAssetPackSelection={selectPrivateAssetPack}
            onPublicAssetPackSelection={selectPublicAssetPack}
            onPrivateGameTemplateSelection={selectPrivateGameTemplate}
            onFolderSelection={selectFolder}
            onGoBackToFolderIndex={goBackToFolderIndex}
            currentPage={shopNavigationState.getCurrentPage()}
          />
        ) : openedAssetShortHeader ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AssetDetails
            ref={assetDetails}
            onTagSelection={selectTag}
            assetShortHeader={openedAssetShortHeader}
            onOpenDetails={onOpenDetails}
            onAssetLoaded={() => applyBackScrollPosition(currentPage)}
            onPrivateAssetPackSelection={selectPrivateAssetPack}
            onPrivateGameTemplateSelection={selectPrivateGameTemplate}
          />
        ) : !!openedPrivateAssetPackListingData ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateAssetPackInformationPage
            privateAssetPackListingData={openedPrivateAssetPackListingData}
            onAssetPackOpen={selectPrivateAssetPack}
            onGameTemplateOpen={selectPrivateGameTemplate}
            privateAssetPackListingDatasFromSameCreator={
              privateAssetPackListingDatasFromSameCreator
            }
          />
        ) : !!openedPrivateGameTemplateListingData ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateGameTemplateInformationPage
            privateGameTemplateListingData={
              openedPrivateGameTemplateListingData
            }
            onCreateWithGameTemplate={() => {
              onOpenPrivateGameTemplateListingData &&
                onOpenPrivateGameTemplateListingData(
                  openedPrivateGameTemplateListingData
                );
            }}
            onAssetPackOpen={selectPrivateAssetPack}
            onGameTemplateOpen={selectPrivateGameTemplate}
            privateGameTemplateListingDatasFromSameCreator={
              privateGameTemplateListingDatasFromSameCreator
            }
          />
        ) : null}
        {canShowFiltersPanel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsivePaperOrDrawer
            onClose={() => setIsFiltersPanelOpen(false)}
            open={isFiltersPanelOpen}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Tune />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Subheader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Object filters</Trans>
                    </Subheader>
                  </Line>
                </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <AssetStoreFilterPanel />
                </Line>
              </Column>
            </ScrollView>
          </ResponsivePaperOrDrawer>
        )}
      </Line>
    </Column>
  );
});
