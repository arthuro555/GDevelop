import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import {
  buyProductWithCredits,
  redeemPrivateAssetPack,
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
  getCalloutToGetSubscriptionOrClaimAssetPack,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/Shop';
import {
  getPrivateAssetPack,
  PrivateAssetPack,
} from '../../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import GridList from '@material-ui/core/GridList';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
import {
  ResponsiveLineStackLayout,
  LineStackLayout,
  ColumnStackLayout,
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line, Spacer } from '../../UI/Grid';
import {
  getUserPublicProfile,
  UserPublicProfile,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../../Profile/PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from '../../Profile/PublicProfileDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
// @ts-expect-error - TS6142 - Module '../../UI/ResponsiveMediaGallery' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveMediaGallery.tsx', but '--jsx' is not set.
import ResponsiveMediaGallery from '../../UI/ResponsiveMediaGallery';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from '../../UI/Responsive/ResponsiveWindowMeasurer';
import { sendAssetPackBuyClicked } from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
import { shouldUseAppStoreProduct } from '../../Utils/AppStorePurchases';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from '../AssetStoreContext';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';
import {
  getBundlesContainingProductTiles,
  getOtherProductsFromSameAuthorTiles,
  getProductMediaItems,
  getProductsIncludedInBundleTiles,
  getUserProductPurchaseUsageType,
  OpenProductButton,
  PurchaseProductButtons,
// @ts-expect-error - TS6142 - Module '../ProductPageHelper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPageHelper.tsx', but '--jsx' is not set.
} from '../ProductPageHelper';
// @ts-expect-error - TS6142 - Module '../CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../CreditsPackages/CreditsPackageStoreContext';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../SecureCheckout/SecureCheckout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/SecureCheckout/SecureCheckout.tsx', but '--jsx' is not set.
import SecureCheckout from '../SecureCheckout/SecureCheckout';
// @ts-expect-error - TS6142 - Module '../ProductLicense/ProductLicenseOptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseOptions.tsx', but '--jsx' is not set.
import ProductLicenseOptions from '../ProductLicense/ProductLicenseOptions';
// @ts-expect-error - TS6142 - Module '../../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../../UI/HelpIcon';
import Avatar from '@material-ui/core/Avatar';
// @ts-expect-error - TS6142 - Module '../../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from '../../Profile/Subscription/SubscriptionSuggestionContext';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../PasswordPromptDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PasswordPromptDialog.tsx', but '--jsx' is not set.
import PasswordPromptDialog from '../PasswordPromptDialog';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './PrivateAssetPackPurchaseDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetPackPurchaseDialog.tsx', but '--jsx' is not set.
import PrivateAssetPackPurchaseDialog from './PrivateAssetPackPurchaseDialog';

const cellSpacing = 8;

const getPackColumns = (windowSize: WindowSizeType, isLandscape: boolean) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 2;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'xlarge':
      return 5;
    default:
      return 3;
  }
};

const sortedContentType = [
  'sprite',
  '9patch',
  'tiled',
  'particleEmitter',
  'font',
  'audio',
  'Scene3D::Model3DObject',
  'partial',
];

const contentTypeToMessageDescriptor = {
  sprite: t`Sprites`,
  '9patch': t`Panel sprites`,
  tiled: t`Tiled sprites`,
  'Scene3D::Model3DObject': t`3D model`,
  particleEmitter: t`Particle emitters`,
  font: t`Fonts`,
  audio: t`Audios`,
  partial: t`Other`,
} as const;

const styles = {
  disabledText: { opacity: 0.6 },
  scrollview: { overflowX: 'hidden' },
  grid: {
    margin: '0 2px', // Remove the default margin of the grid but keep the horizontal padding for focus outline.
  },
  leftColumnContainer: {
    flex: 3,
    minWidth: 0, // This is needed for the container to take the right size.
  },
  rightColumnContainer: {
    flex: 2,
  },
  avatar: {
    width: 20,
    height: 20,
  },
  ownedTag: {
    padding: '4px 8px',
    borderRadius: 4,
    color: 'black',
  },
  redeemConditionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 8px',
    backgroundColor: '#FF8569',
    color: '#1D1D26',
  },
  redeemDiamondIcon: { height: 24 },
} as const;

type Props = {
  privateAssetPackListingData: PrivateAssetPackListingData,
  privateAssetPackListingDatasFromSameCreator?: Array<PrivateAssetPackListingData> | null | undefined,
  onAssetPackOpen: (
    privateAssetPackListingData: PrivateAssetPackListingData,
    options?: {
      forceProductPage?: boolean
    },
  ) => void,
  onGameTemplateOpen: (
    privateGameTemplateListingData: PrivateGameTemplateListingData,
    options?: {
      forceProductPage?: boolean
    },
  ) => void,
  simulateAppStoreProduct?: boolean
};

const PrivateAssetPackInformationPage = ({
  privateAssetPackListingData,
  privateAssetPackListingDatasFromSameCreator,
  onAssetPackOpen,
  onGameTemplateOpen,
  simulateAppStoreProduct,
}: Props) => {
  const { id, name, sellerId } = privateAssetPackListingData;
  const { privateAssetPackListingDatas } = React.useContext(AssetStoreContext);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const {
    receivedAssetPacks,
    profile,
    limits,
    assetPackPurchases,
    getAuthorizationHeader,
    onOpenLoginDialog,
    subscription,
    onPurchaseSuccessful,
    onRefreshAssetPackPurchases,
  } = React.useContext(AuthenticatedUserContext);
  const { openCreditsPackageDialog, openCreditsUsageDialog } = React.useContext(
    CreditsPackageStoreContext
  );
  const [selectedUsageType, setSelectedUsageType] = React.useState<string>(privateAssetPackListingData.prices[0].usageType);
  const [
    purchasingPrivateAssetPackListingData,
    setPurchasingPrivateAssetPackListingData,
  ] = React.useState<PrivateAssetPackListingData | null | undefined>(null);
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
  const [assetPack, setAssetPack] = React.useState<PrivateAssetPack | null | undefined>(null);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [isRedeemingProduct, setIsRedeemingProduct] = React.useState<boolean>(false);
  const [
    openSellerPublicProfileDialog,
    setOpenSellerPublicProfileDialog,
  ] = React.useState<boolean>(false);
  const [
    sellerPublicProfile,
    setSellerPublicProfile,
  ] = React.useState<UserPublicProfile | null | undefined>(null);
  const [
    displayPasswordPrompt,
    setDisplayPasswordPrompt,
  ] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>('');
  const [errorText, setErrorText] = React.useState<React.ReactNode | null | undefined>(null);
  const { isLandscape, isMediumScreen, windowSize } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const shouldUseOrSimulateAppStoreProduct =
    shouldUseAppStoreProduct() || simulateAppStoreProduct;

  const userAssetPackPurchaseUsageType = React.useMemo(
    () =>
      getUserProductPurchaseUsageType({
        productId: privateAssetPackListingData
          ? privateAssetPackListingData.id
          : null,
        receivedProducts: receivedAssetPacks,
        productPurchases: assetPackPurchases,
        allProductListingDatas: privateAssetPackListingDatas,
      }),
    [
      assetPackPurchases,
      privateAssetPackListingData,
      privateAssetPackListingDatas,
      receivedAssetPacks,
    ]
  );
  const isAlreadyReceived = !!userAssetPackPurchaseUsageType;

  const packsIncludedInBundleTiles = React.useMemo(
    () =>
      getProductsIncludedInBundleTiles({
        product: assetPack,
        productListingDatas: privateAssetPackListingDatas,
        productListingData: privateAssetPackListingData,
        receivedProducts: receivedAssetPacks,
// @ts-expect-error - TS7006 - Parameter 'product' implicitly has an 'any' type.
        onProductOpen: product =>
          onAssetPackOpen(product, { forceProductPage: true }),
      }),
    [
      assetPack,
      privateAssetPackListingDatas,
      receivedAssetPacks,
      onAssetPackOpen,
      privateAssetPackListingData,
    ]
  );

  const bundlesContainingPackTiles = React.useMemo(
    () =>
      getBundlesContainingProductTiles({
        product: assetPack,
        productListingDatas: privateAssetPackListingDatas,
        receivedProducts: receivedAssetPacks,
// @ts-expect-error - TS7006 - Parameter 'product' implicitly has an 'any' type.
        onProductOpen: product =>
          onAssetPackOpen(product, { forceProductPage: true }),
      }),
    [
      assetPack,
      privateAssetPackListingDatas,
      receivedAssetPacks,
      onAssetPackOpen,
    ]
  );

  const otherPacksFromTheSameAuthorTiles = React.useMemo(
    () =>
      getOtherProductsFromSameAuthorTiles({
        otherProductListingDatasFromSameCreator: privateAssetPackListingDatasFromSameCreator,
        currentProductListingData: privateAssetPackListingData,
        receivedProducts: receivedAssetPacks,
// @ts-expect-error - TS7006 - Parameter 'product' implicitly has an 'any' type.
        onProductOpen: product =>
          onAssetPackOpen(product, { forceProductPage: true }),
      }),
    [
      privateAssetPackListingData,
      privateAssetPackListingDatasFromSameCreator,
      onAssetPackOpen,
      receivedAssetPacks,
    ]
  );

  const onWillRedeemAssetPack = () => {
    // Password is required in dev environment only so that one cannot freely claim asset packs.
    if (Window.isDev()) setDisplayPasswordPrompt(true);
    else onRedeemAssetPack();
  };

  const onRedeemAssetPack = React.useCallback(
    async () => {
      if (!profile || isRedeemingProduct) return;
      setIsRedeemingProduct(true);
      try {
        await redeemPrivateAssetPack({
          privateAssetPackListingData,
          getAuthorizationHeader,
          userId: profile.id,
          password,
        });
        await Promise.all([
          onRefreshAssetPackPurchases(),
          onPurchaseSuccessful(),
        ]);
      } catch (error: any) {
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (
          extractedStatusAndCode &&
          extractedStatusAndCode.status === 402 &&
          extractedStatusAndCode.code ===
            'product-redemption/old-redeemed-subscription'
        ) {
          await showAlert({
            title: t`Error when claiming asset pack`,
            message: t`The monthly free asset pack perk was not part of your plan at the time you got your subscription to GDevelop. To enjoy this perk, please purchase a new subscription.`,
          });
        } else {
          console.error(
            'An error occurred when claiming the asset pack:',
            extractedStatusAndCode
          );
          await showAlert({
            title: t`Error when claiming asset pack`,
            message: t`Something wrong happened when claiming the asset pack. Please check your internet connection or try again later.`,
          });
        }
      } finally {
        setIsRedeemingProduct(false);
      }
    },
    [
      privateAssetPackListingData,
      getAuthorizationHeader,
      profile,
      showAlert,
      password,
      onPurchaseSuccessful,
      isRedeemingProduct,
      onRefreshAssetPackPurchases,
    ]
  );

  React.useEffect(
    () => {
      (async () => {
        setIsFetching(true);
        try {
          const [assetPack, profile] = await Promise.all([
            getPrivateAssetPack(id),
            getUserPublicProfile(sellerId),
          ]);

          setAssetPack(assetPack);
          setSellerPublicProfile(profile);
        } catch (error: any) {
          const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
            error
          );
          if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
            setErrorText(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Asset pack not found - An error occurred, please try again
                later.
              </Trans>
            );
          } else {
            setErrorText(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>An error occurred, please try again later.</Trans>
            );
          }
        } finally {
          setIsFetching(false);
        }
      })();
    },
    [id, sellerId]
  );

  const onClickBuy = React.useCallback(
    async () => {
      if (!assetPack) return;
      if (isAlreadyReceived) {
        onAssetPackOpen(privateAssetPackListingData);
        return;
      }

      try {
        const price = privateAssetPackListingData.prices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
          price => price.usageType === selectedUsageType
        );
        sendAssetPackBuyClicked({
          assetPackId: assetPack.id,
          assetPackName: assetPack.name,
          assetPackTag: assetPack.tag,
          assetPackKind: 'private',
          usageType: selectedUsageType,
          currency: price ? price.currency : undefined,
        });

        setPurchasingPrivateAssetPackListingData(privateAssetPackListingData);
      } catch (e: any) {
        console.warn('Unable to send event', e);
      }
    },
    [
      assetPack,
      privateAssetPackListingData,
      isAlreadyReceived,
      onAssetPackOpen,
      selectedUsageType,
    ]
  );

  const onClickBuyWithCredits = React.useCallback(
    async () => {
      if (!privateAssetPackListingData || !assetPack) return;

      if (!profile || !limits) {
        // User not logged in, suggest to log in.
        onOpenLoginDialog();
        return;
      }

      if (isAlreadyReceived) {
        onAssetPackOpen(privateAssetPackListingData);
        return;
      }

      sendAssetPackBuyClicked({
        assetPackId: assetPack.id,
        assetPackName: assetPack.name,
        assetPackTag: assetPack.tag,
        assetPackKind: 'private',
        currency: 'CREDITS',
        usageType: selectedUsageType,
      });

      const currentCreditsAmount = limits.credits.userBalance.amount;
      const assetPackPriceForUsageType = privateAssetPackListingData.creditPrices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
        price => price.usageType === selectedUsageType
      );
      if (!assetPackPriceForUsageType) {
        console.error(
          'Unable to find the price for the selected usage type',
          selectedUsageType
        );
        return;
      }
      const assetPackCreditsAmount = assetPackPriceForUsageType.amount;
      if (currentCreditsAmount < assetPackCreditsAmount) {
        openCreditsPackageDialog({
          missingCredits: assetPackCreditsAmount - currentCreditsAmount,
        });
        return;
      }

      openCreditsUsageDialog({
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title: <Trans>Purchase {assetPack.name}</Trans>,
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            You are about to use {assetPackCreditsAmount} credits to purchase
            the asset pack {assetPack.name}. Continue?
          </Trans>
        ),
        onConfirm: () =>
          buyProductWithCredits(getAuthorizationHeader, {
            productId: privateAssetPackListingData.id,
            usageType: selectedUsageType,
            userId: profile.id,
          }),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        successMessage: <Trans>🎉 You can now use your assets!</Trans>,
      });
    },
    [
      profile,
      limits,
      privateAssetPackListingData,
      assetPack,
      onAssetPackOpen,
      isAlreadyReceived,
      openCreditsPackageDialog,
      selectedUsageType,
      openCreditsUsageDialog,
      getAuthorizationHeader,
      onOpenLoginDialog,
    ]
  );

  const mediaItems = React.useMemo(
    () =>
      getProductMediaItems({
        product: assetPack,
        productListingData: privateAssetPackListingData,
        shouldSimulateAppStoreProduct: simulateAppStoreProduct,
      }),
    [assetPack, privateAssetPackListingData, simulateAppStoreProduct]
  );

  const calloutToGetSubscriptionOrClaimAssetPack = getCalloutToGetSubscriptionOrClaimAssetPack(
    { subscription, privateAssetPackListingData, isAlreadyReceived }
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
          {errorText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line alignItems="center" justifyContent="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AlertMessage kind="error">{errorText}</AlertMessage>
            </Line>
          ) : isFetching ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <PlaceholderLoader />
            </Column>
          ) : assetPack && sellerPublicProfile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noOverflowParent expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ScrollView autoHideScrollbar style={styles.scrollview}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout
                  noColumnMargin
                  noMargin
                  // Force the columns to wrap on tablets and small screens.
                  forceMobileLayout={isMediumScreen}
                  // Prevent it to wrap when in landscape mode on small screens.
                  noResponsiveLandscape
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.leftColumnContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ResponsiveMediaGallery
                      mediaItems={mediaItems}
                      altTextTemplate={`Asset pack ${name} preview image or sound {mediaIndex}`}
                      horizontalOuterMarginToEatOnMobile={8}
                    />
                  </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.rightColumnContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LineStackLayout
                        noMargin
                        alignItems="center"
                        justifyContent="space-between"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text noMargin size="title">
                          {assetPack.name}
                        </Text>
                        {isAlreadyReceived && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <div
                            style={{
                              ...styles.ownedTag,
                              backgroundColor:
                                gdevelopTheme.statusIndicator.success,
                            }}
                          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Text color="inherit" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Trans>OWNED</Trans>
                            </Text>
                          </div>
                        )}
                      </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Avatar
                          src={sellerPublicProfile.iconUrl}
                          style={styles.avatar}
                        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text displayInlineAsSpan size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Link
                            onClick={() =>
                              setOpenSellerPublicProfileDialog(true)
                            }
                            href="#"
                          >
                            {sellerPublicProfile.username || ''}
                          </Link>
                        </Text>
                      </LineStackLayout>
                      {calloutToGetSubscriptionOrClaimAssetPack && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <div style={styles.redeemConditionsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <img
                              src="res/small-diamond.svg"
                              style={styles.redeemDiamondIcon}
                              alt="diamond"
                            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Text color="inherit" noMargin>
                              {calloutToGetSubscriptionOrClaimAssetPack.message}
                            </Text>
                          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Spacer />
                          {calloutToGetSubscriptionOrClaimAssetPack.actionLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <div style={{ flexShrink: 0 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <RaisedButton
                                primary
                                label={
                                  isRedeemingProduct ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <Trans>Please wait</Trans>
                                  ) : (
                                    calloutToGetSubscriptionOrClaimAssetPack.actionLabel
                                  )
                                }
                                disabled={isRedeemingProduct}
                                onClick={
                                  calloutToGetSubscriptionOrClaimAssetPack.canRedeemAssetPack
                                    ? onWillRedeemAssetPack
                                    : () =>
                                        openSubscriptionDialog({
                                          analyticsMetadata: {
                                            reason: 'Claim asset pack',
                                          },
                                          filter: 'individual',
                                        })
                                }
                              />
                            </div>
                          )}
                        </div>
                      )}
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
                      <ProductLicenseOptions
                        value={selectedUsageType}
                        onChange={setSelectedUsageType}
                        product={privateAssetPackListingData}
                        ownedLicense={userAssetPackPurchaseUsageType}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Spacer />
                      {isAlreadyReceived ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <OpenProductButton
                          productListingData={privateAssetPackListingData}
                          onClick={() =>
                            onAssetPackOpen(privateAssetPackListingData)
                          }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          label={<Trans>Browse assets</Trans>}
                        />
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <>
                          {!shouldUseOrSimulateAppStoreProduct && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <SecureCheckout />
                          )}
                          {!errorText && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <PurchaseProductButtons
                              i18n={i18n}
                              productListingData={privateAssetPackListingData}
                              selectedUsageType={selectedUsageType}
                              onUsageTypeChange={setSelectedUsageType}
                              simulateAppStoreProduct={simulateAppStoreProduct}
                              isAlreadyReceived={isAlreadyReceived}
                              onClickBuy={onClickBuy}
                              onClickBuyWithCredits={onClickBuyWithCredits}
                            />
                          )}
                        </>
                      )}
                    </ColumnStackLayout>
                  </div>
                </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body2" displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <MarkdownText
                      source={assetPack.longDescription}
                      allowParagraphs
                    />
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Content</Trans>
                  </Text>
                  {sortedContentType.map(type => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<PrivateAssetPackAssetType, number>>'.
                    if (assetPack.content[type]) {
                      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <li key={type}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text displayInlineAsSpan noMargin>
{ /* @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<PrivateAssetPackAssetType, number>>'. */}
                            {assetPack.content[type]}{' '}
{ /* @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly sprite: any; readonly '9patch': any; readonly tiled: any; readonly 'Scene3D::Model3DObject': any; readonly particleEmitter: any; readonly font: any; readonly audio: any; readonly partial: any; }'. */}
                            {i18n._(contentTypeToMessageDescriptor[type])}
                          </Text>
                        </li>
                      );
                    }
                    return null;
                  })}
                </Column>
                {bundlesContainingPackTiles &&
                bundlesContainingPackTiles.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LargeSpacer />
                      {bundlesContainingPackTiles}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LargeSpacer />
                    </ColumnStackLayout>
                  </>
                ) : null}
                {packsIncludedInBundleTiles && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Included in this bundle</Trans>
                      </Text>
                    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <GridList
                        cols={getPackColumns(windowSize, isLandscape)}
                        cellHeight="auto"
                        spacing={cellSpacing / 2}
                        style={styles.grid}
                      >
                        {packsIncludedInBundleTiles}
                      </GridList>
                    </Line>
                  </>
                )}
                {otherPacksFromTheSameAuthorTiles &&
                  otherPacksFromTheSameAuthorTiles.length > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>From the same author</Trans>
                        </Text>
                      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <GridList
                          cols={getPackColumns(windowSize, isLandscape)}
                          cellHeight="auto"
                          spacing={cellSpacing / 2}
                          style={styles.grid}
                        >
                          {otherPacksFromTheSameAuthorTiles}
                        </GridList>
                      </Line>
                    </>
                  )}
              </ScrollView>
            </Column>
          ) : null}
          {openSellerPublicProfileDialog && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PublicProfileDialog
              userId={sellerId}
              onClose={() => setOpenSellerPublicProfileDialog(false)}
// @ts-expect-error - TS7006 - Parameter 'assetPackListingData' implicitly has an 'any' type.
              onAssetPackOpen={assetPackListingData => {
                onAssetPackOpen(assetPackListingData);
                setOpenSellerPublicProfileDialog(false);
              }}
// @ts-expect-error - TS7006 - Parameter 'gameTemplateListingData' implicitly has an 'any' type.
              onGameTemplateOpen={gameTemplateListingData => {
                onGameTemplateOpen(gameTemplateListingData);
                setOpenSellerPublicProfileDialog(false);
              }}
            />
          )}
          {displayPasswordPrompt && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PasswordPromptDialog
              onApply={onRedeemAssetPack}
              onClose={() => setDisplayPasswordPrompt(false)}
              passwordValue={password}
              setPasswordValue={setPassword}
            />
          )}
          {!!purchasingPrivateAssetPackListingData && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PrivateAssetPackPurchaseDialog
              privateAssetPackListingData={
                purchasingPrivateAssetPackListingData
              }
              usageType={selectedUsageType}
              onClose={() => setPurchasingPrivateAssetPackListingData(null)}
            />
          )}
        </>
      )}
    </I18n>
  );
};

export default PrivateAssetPackInformationPage;
