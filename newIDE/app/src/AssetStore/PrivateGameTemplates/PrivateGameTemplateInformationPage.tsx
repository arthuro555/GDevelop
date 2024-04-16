import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import {
  buyProductWithCredits,
  PrivateGameTemplateListingData,
  PrivateAssetPackListingData,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/Shop';
import {
  getPrivateGameTemplate,
  PrivateGameTemplate,
} from '../../Utils/GDevelopServices/Asset';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
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
import { sendGameTemplateBuyClicked } from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../UI/MarkdownText';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
import { shouldUseAppStoreProduct } from '../../Utils/AppStorePurchases';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from './PrivateGameTemplateStoreContext';
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
// @ts-expect-error - TS6142 - Module '../ProductLicense/ProductLicenseOptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseOptions.tsx', but '--jsx' is not set.
import ProductLicenseOptions from '../ProductLicense/ProductLicenseOptions';
// @ts-expect-error - TS6142 - Module '../../UI/HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from '../../UI/HelpIcon';
// @ts-expect-error - TS6142 - Module '../SecureCheckout/SecureCheckout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/SecureCheckout/SecureCheckout.tsx', but '--jsx' is not set.
import SecureCheckout from '../SecureCheckout/SecureCheckout';
// @ts-expect-error - TS6142 - Module '../CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../CreditsPackages/CreditsPackageStoreContext';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Play'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Play.js' implicitly has an 'any' type.
import Play from '../../UI/CustomSvgIcons/Play';
// @ts-expect-error - TS6142 - Module './PrivateGameTemplatePurchaseDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplatePurchaseDialog.tsx', but '--jsx' is not set.
import PrivateGameTemplatePurchaseDialog from './PrivateGameTemplatePurchaseDialog';

const cellSpacing = 8;

const getTemplateColumns = (
  windowSize: WindowSizeType,
  isLandscape: boolean
) => {
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
  playIcon: {
    width: 20,
    height: 20,
  },
} as const;

type Props = {
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  privateGameTemplateListingDatasFromSameCreator?: Array<PrivateGameTemplateListingData> | null | undefined,
  onGameTemplateOpen: (arg1: PrivateGameTemplateListingData) => void,
  onAssetPackOpen?: (arg1: PrivateAssetPackListingData) => void,
  onCreateWithGameTemplate: (arg1: PrivateGameTemplateListingData) => void,
  simulateAppStoreProduct?: boolean
};

const PrivateGameTemplateInformationPage = ({
  privateGameTemplateListingData,
  privateGameTemplateListingDatasFromSameCreator,
  onGameTemplateOpen,
  onAssetPackOpen,
  onCreateWithGameTemplate,
  simulateAppStoreProduct,
}: Props) => {
  const { id, name, sellerId } = privateGameTemplateListingData;
  const { privateGameTemplateListingDatas } = React.useContext(
    PrivateGameTemplateStoreContext
  );
  const {
    receivedGameTemplates,
    profile,
    limits,
    gameTemplatePurchases,
    getAuthorizationHeader,
    onOpenLoginDialog,
  } = React.useContext(AuthenticatedUserContext);
  const { openCreditsPackageDialog, openCreditsUsageDialog } = React.useContext(
    CreditsPackageStoreContext
  );
  const [gameTemplate, setGameTemplate] = React.useState<PrivateGameTemplate | null | undefined>(null);
  const [selectedUsageType, setSelectedUsageType] = React.useState<string>(privateGameTemplateListingData.prices[0].usageType);
  const [
    purchasingPrivateGameTemplateListingData,
    setPurchasingPrivateGameTemplateListingData,
  ] = React.useState<PrivateGameTemplateListingData | null | undefined>(null);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [
    openSellerPublicProfileDialog,
    setOpenSellerPublicProfileDialog,
  ] = React.useState<boolean>(false);
  const [
    sellerPublicProfile,
    setSellerPublicProfile,
  ] = React.useState<UserPublicProfile | null | undefined>(null);
  const [errorText, setErrorText] = React.useState<React.ReactNode | null | undefined>(null);
  const { windowSize, isLandscape, isMediumScreen } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const shouldUseOrSimulateAppStoreProduct =
    shouldUseAppStoreProduct() || simulateAppStoreProduct;

  const userGameTemplatePurchaseUsageType = React.useMemo(
    () =>
      getUserProductPurchaseUsageType({
        productId: privateGameTemplateListingData
          ? privateGameTemplateListingData.id
          : null,
        receivedProducts: receivedGameTemplates,
        productPurchases: gameTemplatePurchases,
        allProductListingDatas: privateGameTemplateListingDatas,
      }),
    [
      gameTemplatePurchases,
      privateGameTemplateListingData,
      privateGameTemplateListingDatas,
      receivedGameTemplates,
    ]
  );
  const isAlreadyReceived = !!userGameTemplatePurchaseUsageType;

  const templatesIncludedInBundleTiles = React.useMemo(
    () =>
      getProductsIncludedInBundleTiles({
        product: gameTemplate,
        productListingDatas: privateGameTemplateListingDatas,
        productListingData: privateGameTemplateListingData,
        receivedProducts: receivedGameTemplates,
        onProductOpen: onGameTemplateOpen,
      }),
    [
      gameTemplate,
      privateGameTemplateListingDatas,
      receivedGameTemplates,
      onGameTemplateOpen,
      privateGameTemplateListingData,
    ]
  );

  const bundlesContainingPackTiles = React.useMemo(
    () =>
      getBundlesContainingProductTiles({
        product: gameTemplate,
        productListingDatas: privateGameTemplateListingDatas,
        receivedProducts: receivedGameTemplates,
        onProductOpen: onGameTemplateOpen,
      }),
    [
      gameTemplate,
      privateGameTemplateListingDatas,
      receivedGameTemplates,
      onGameTemplateOpen,
    ]
  );

  const otherTemplatesFromTheSameAuthorTiles = React.useMemo(
    () =>
      getOtherProductsFromSameAuthorTiles({
        otherProductListingDatasFromSameCreator: privateGameTemplateListingDatasFromSameCreator,
        currentProductListingData: privateGameTemplateListingData,
        receivedProducts: receivedGameTemplates,
        onProductOpen: onGameTemplateOpen,
      }),
    [
      privateGameTemplateListingDatasFromSameCreator,
      privateGameTemplateListingData,
      receivedGameTemplates,
      onGameTemplateOpen,
    ]
  );

  React.useEffect(
    () => {
      (async () => {
        setIsFetching(true);
        try {
          const [gameTemplate, profile] = await Promise.all([
            getPrivateGameTemplate(id),
            getUserPublicProfile(sellerId),
          ]);

          setGameTemplate(gameTemplate);
          setSellerPublicProfile(profile);
        } catch (error: any) {
          const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
            error
          );
          if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
            setErrorText(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Game template not found - An error occurred, please try again
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
      if (!gameTemplate) return;
      if (isAlreadyReceived) {
        onCreateWithGameTemplate(privateGameTemplateListingData);
        return;
      }

      try {
        const price = privateGameTemplateListingData.prices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
          price => price.usageType === selectedUsageType
        );

        sendGameTemplateBuyClicked({
          gameTemplateId: gameTemplate.id,
          gameTemplateName: gameTemplate.name,
          gameTemplateTag: gameTemplate.tag,
          currency: price ? price.currency : undefined,
          usageType: selectedUsageType,
        });

        setPurchasingPrivateGameTemplateListingData(
          privateGameTemplateListingData
        );
      } catch (e: any) {
        console.warn('Unable to send event', e);
      }
    },
    [
      gameTemplate,
      privateGameTemplateListingData,
      isAlreadyReceived,
      onCreateWithGameTemplate,
      selectedUsageType,
    ]
  );

  const onClickBuyWithCredits = React.useCallback(
    async () => {
      if (!privateGameTemplateListingData || !gameTemplate) return;

      if (!profile || !limits) {
        // User not logged in, suggest to log in.
        onOpenLoginDialog();
        return;
      }

      if (isAlreadyReceived) {
        onCreateWithGameTemplate(privateGameTemplateListingData);
        return;
      }

      sendGameTemplateBuyClicked({
        gameTemplateId: gameTemplate.id,
        gameTemplateName: gameTemplate.name,
        gameTemplateTag: gameTemplate.tag,
        usageType: selectedUsageType,
        currency: 'CREDITS',
      });

      const currentCreditsAmount = limits.credits.userBalance.amount;
      const gameTemplatePriceForUsageType = privateGameTemplateListingData.creditPrices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
        price => price.usageType === selectedUsageType
      );
      if (!gameTemplatePriceForUsageType) {
        console.error(
          'Unable to find the price for the selected usage type',
          selectedUsageType
        );
        return;
      }
      const gameTemplateCreditsAmount = gameTemplatePriceForUsageType.amount;
      if (currentCreditsAmount < gameTemplateCreditsAmount) {
        openCreditsPackageDialog({
          missingCredits: gameTemplateCreditsAmount - currentCreditsAmount,
        });
        return;
      }

      openCreditsUsageDialog({
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title: <Trans>Purchase {gameTemplate.name}</Trans>,
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            You are about to use {gameTemplateCreditsAmount} credits to purchase
            the game template {gameTemplate.name}. Continue?
          </Trans>
        ),
        onConfirm: () =>
          buyProductWithCredits(getAuthorizationHeader, {
            productId: privateGameTemplateListingData.id,
            usageType: selectedUsageType,
            userId: profile.id,
          }),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        successMessage: <Trans>🎉 You can now use your template!</Trans>,
      });
    },
    [
      profile,
      limits,
      privateGameTemplateListingData,
      gameTemplate,
      onCreateWithGameTemplate,
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
        product: gameTemplate,
        productListingData: privateGameTemplateListingData,
        shouldSimulateAppStoreProduct: simulateAppStoreProduct,
      }),
    [gameTemplate, privateGameTemplateListingData, simulateAppStoreProduct]
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
          ) : gameTemplate && sellerPublicProfile ? (
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
                  useLargeSpacer
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.leftColumnContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ResponsiveMediaGallery
                      mediaItems={mediaItems}
                      altTextTemplate={`Game template ${name} preview image {mediaIndex}`}
                      horizontalOuterMarginToEatOnMobile={8}
                    />
                  </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div style={styles.rightColumnContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LineStackLayout
                        noMargin
                        alignItems="center"
                        justifyContent="space-between"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text noMargin size="title">
                          {gameTemplate.name}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LineStackLayout
                        noMargin
                        justifyContent="space-between"
                        alignItems="center"
                      >
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
                        {!isAlreadyReceived &&
                        !privateGameTemplateListingData.includedListableProductIds && ( // Bundles don't have a preview link.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <RaisedButton
                                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                label={<Trans>Try it online</Trans>}
                                onClick={() =>
                                  Window.openExternalURL(
                                    gameTemplate.gamePreviewLink
                                  )
                                }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                icon={<Play style={styles.playIcon} />}
                              />
                            </Column>
                          )}
                      </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ProductLicenseOptions
                        value={selectedUsageType}
                        onChange={setSelectedUsageType}
                        product={privateGameTemplateListingData}
                        ownedLicense={userGameTemplatePurchaseUsageType}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Spacer />
                      {isAlreadyReceived ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <OpenProductButton
                          productListingData={privateGameTemplateListingData}
                          onClick={() =>
                            onCreateWithGameTemplate(
                              privateGameTemplateListingData
                            )
                          }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          label={<Trans>Open template</Trans>}
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
                              productListingData={
                                privateGameTemplateListingData
                              }
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
                      source={gameTemplate.longDescription}
                      allowParagraphs
                    />
                  </Text>
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
                {templatesIncludedInBundleTiles && (
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
                        cols={getTemplateColumns(windowSize, isLandscape)}
                        cellHeight="auto"
                        spacing={cellSpacing / 2}
                        style={styles.grid}
                      >
                        {templatesIncludedInBundleTiles}
                      </GridList>
                    </Line>
                  </>
                )}
                {otherTemplatesFromTheSameAuthorTiles &&
                  otherTemplatesFromTheSameAuthorTiles.length > 0 && (
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
                          cols={getTemplateColumns(windowSize, isLandscape)}
                          cellHeight="auto"
                          spacing={cellSpacing / 2}
                          style={styles.grid}
                        >
                          {otherTemplatesFromTheSameAuthorTiles}
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
              onGameTemplateOpen={
                onGameTemplateOpen
                  ? (gameTemplate: PrivateGameTemplateListingData) => {
                      setOpenSellerPublicProfileDialog(false);
                      onGameTemplateOpen(gameTemplate);
                    }
                  : undefined
              }
              onAssetPackOpen={
                onAssetPackOpen
                  ? (assetPack: PrivateAssetPackListingData) => {
                      setOpenSellerPublicProfileDialog(false);
                      onAssetPackOpen(assetPack);
                    }
                  : undefined
              }
            />
          )}
          {!!purchasingPrivateGameTemplateListingData && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PrivateGameTemplatePurchaseDialog
              privateGameTemplateListingData={
                purchasingPrivateGameTemplateListingData
              }
              usageType={selectedUsageType}
              onClose={() => setPurchasingPrivateGameTemplateListingData(null)}
            />
          )}
        </>
      )}
    </I18n>
  );
};

export default PrivateGameTemplateInformationPage;
