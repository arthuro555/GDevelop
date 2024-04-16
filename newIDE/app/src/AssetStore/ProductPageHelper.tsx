import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
  Purchase,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
import {
  PrivateAssetPack,
  PrivateGameTemplate,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackTile,
  PrivateGameTemplateTile,
  PromoBundleCard,
// @ts-expect-error - TS6142 - Module './ShopTiles' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ShopTiles.tsx', but '--jsx' is not set.
} from './ShopTiles';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { shouldUseAppStoreProduct } from '../Utils/AppStorePurchases';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Credits/Icons/Coin'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/Coin.js' implicitly has an 'any' type.
import Coin from '../Credits/Icons/Coin';
// @ts-expect-error - TS6142 - Module './ProductPriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPriceTag.tsx', but '--jsx' is not set.
import { renderProductPrice } from './ProductPriceTag';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';

export const getOtherProductsFromSameAuthorTiles = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData, U extends PrivateAssetPack | PrivateGameTemplate>(
  {
    otherProductListingDatasFromSameCreator,
    currentProductListingData,
    receivedProducts,
    onProductOpen,
  }: {
    otherProductListingDatasFromSameCreator: Array<T> | null | undefined,
    currentProductListingData: T,
    receivedProducts: Array<U> | null | undefined,
    onProductOpen: (product: T) => void
  },
): Array<React.ReactNode> | null | undefined => {
  if (
    !otherProductListingDatasFromSameCreator ||
    // Only display products if there are at least 2. If there is only one,
    // it means it's the same as the one currently opened.
    otherProductListingDatasFromSameCreator.length < 2
  ) {
    return null;
  }

  return otherProductListingDatasFromSameCreator
    .filter(
      // Filter out the current product.
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'. | TS2339 - Property 'id' does not exist on type 'T'.
      product => product.id !== currentProductListingData.id
    )
    .map(productListingDataFromSameCreator => {
      const isProductOwned =
        !!receivedProducts &&
        !!receivedProducts.find(
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          product => product.id === productListingDataFromSameCreator.id
        );

// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
      if (productListingDataFromSameCreator.productType === 'GAME_TEMPLATE') {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateGameTemplateTile
            privateGameTemplateListingData={productListingDataFromSameCreator}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
            key={productListingDataFromSameCreator.id}
            onSelect={() => onProductOpen(productListingDataFromSameCreator)}
            owned={isProductOwned}
          />
        );
      }
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
      if (productListingDataFromSameCreator.productType === 'ASSET_PACK') {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateAssetPackTile
            assetPackListingData={productListingDataFromSameCreator}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
            key={productListingDataFromSameCreator.id}
            onSelect={() => onProductOpen(productListingDataFromSameCreator)}
            owned={isProductOwned}
          />
        );
      }

      console.error(
        'Unexpected product type:',
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
        productListingDataFromSameCreator.productType
      );
      return null;
    })
    .filter(Boolean);
};

export const getBundlesContainingProductTiles = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData, U extends PrivateAssetPack | PrivateGameTemplate>(
  {
    product,
    productListingDatas,
    receivedProducts,
    onProductOpen,
  }: {
    product: U | null | undefined,
    productListingDatas: Array<T> | null | undefined,
    receivedProducts: Array<U> | null | undefined,
    onProductOpen: (product: T) => void
  },
): Array<React.ReactNode> | null | undefined => {
  if (!product || !productListingDatas) return null;

  const bundlesContainingProduct = productListingDatas.filter(
    productListingData =>
// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
      productListingData.includedListableProductIds &&
// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
      productListingData.includedListableProductIds.includes(product.id)
  );

  if (!bundlesContainingProduct.length) return null;

  const ownedBundlesContainingProduct = bundlesContainingProduct.filter(
    bundleContainingProduct =>
      !!receivedProducts &&
      !!receivedProducts.find(
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
        Product => Product.id === bundleContainingProduct.id
      )
  );
  const notOwnedBundlesContainingProduct = bundlesContainingProduct.filter(
    bundleContainingProduct =>
      !ownedBundlesContainingProduct.find(
        ownedBundleContainingProduct =>
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'. | TS2339 - Property 'id' does not exist on type 'T'.
          ownedBundleContainingProduct.id === bundleContainingProduct.id
      )
  );

  const allTiles = ownedBundlesContainingProduct
    .map(bundleContainingProduct => {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PromoBundleCard
          productListingData={bundleContainingProduct}
          onSelect={() => onProductOpen(bundleContainingProduct)}
          owned
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          key={bundleContainingProduct.id}
        />
      );
    })
    .concat(
      notOwnedBundlesContainingProduct.map(bundleContainingProduct => {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PromoBundleCard
            productListingData={bundleContainingProduct}
            onSelect={() => onProductOpen(bundleContainingProduct)}
            owned={false}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
            key={bundleContainingProduct.id}
          />
        );
      })
    );

  return allTiles;
};

export const getProductsIncludedInBundleTiles = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData, U extends PrivateAssetPack | PrivateGameTemplate>(
  {
    product,
    productListingDatas,
    productListingData,
    receivedProducts,
    onProductOpen,
  }: {
    product: U | null | undefined,
    productListingDatas: Array<T> | null | undefined,
    productListingData: T,
    receivedProducts: Array<U> | null | undefined,
    onProductOpen: (product: T) => void
  },
): Array<React.ReactNode> | null | undefined => {
  if (!product || !productListingDatas) return null;

// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
  const includedProductIds = productListingData.includedListableProductIds;
  if (!includedProductIds) return null;

  return includedProductIds
// @ts-expect-error - TS7006 - Parameter 'includedProductId' implicitly has an 'any' type.
    .map(includedProductId => {
      const includedProductListingData = productListingDatas.find(
        privateProductListingData =>
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          privateProductListingData.id === includedProductId
      );
      if (!includedProductListingData) {
        console.warn(`Included product ${includedProductId} not found`);
        return null;
      }

      const isProductOwned =
        !!receivedProducts &&
        !!receivedProducts.find(
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          product => product.id === includedProductListingData.id
        );

// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
      if (includedProductListingData.productType === 'GAME_TEMPLATE') {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateGameTemplateTile
            privateGameTemplateListingData={includedProductListingData}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
            key={includedProductListingData.id}
            onSelect={() => onProductOpen(includedProductListingData)}
            owned={isProductOwned}
          />
        );
      }

// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
      if (includedProductListingData.productType === 'ASSET_PACK') {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PrivateAssetPackTile
            assetPackListingData={includedProductListingData}
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
            key={includedProductListingData.id}
            onSelect={() => onProductOpen(includedProductListingData)}
            owned={isProductOwned}
          />
        );
      }

      console.error(
        'Unexpected product type:',
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
        includedProductListingData.productType
      );
      return null;
    })
    .filter(Boolean);
};

// A product can be purchased directly or as part of a bundle.
// We consider both the same way for the moment and use either
// the product purchase usage type or the bundle purchase usage type.
// In case the user has both, we consider the product purchase as the
// most important one.
export const getUserProductPurchaseUsageType = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData, U extends PrivateAssetPack | PrivateGameTemplate>(
  {
    productId,
    receivedProducts,
    productPurchases,
    allProductListingDatas,
  }: {
    productId: string | null | undefined,
    receivedProducts: Array<U> | null | undefined,
    productPurchases: Array<Purchase> | null | undefined,
    allProductListingDatas: Array<T> | null | undefined
  },
): string | null | undefined => {
  // User is not authenticated or still loading.
  if (!receivedProducts || !productPurchases || !allProductListingDatas)
    return null;

  const currentReceivedProduct = receivedProducts.find(
    receivedProduct => receivedProduct.id === productId
  );
  // User does not own the product.
  if (!currentReceivedProduct) return null;

  const productPurchase = productPurchases.find(
    productPurchase => productPurchase.productId === currentReceivedProduct.id
  );
  if (!productPurchase) {
    // It is possible the user has the product as part of a bundle.
    const productBundleListingData = allProductListingDatas.find(
      productListingData =>
// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
        productListingData.includedListableProductIds &&
// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
        productListingData.includedListableProductIds.includes(productId)
    );
    if (productBundleListingData) {
      const receivedProductBundlePurchase = productPurchases.find(
        productPurchase =>
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          productPurchase.productId === productBundleListingData.id
      );
      if (receivedProductBundlePurchase) {
        return receivedProductBundlePurchase.usageType;
      }
    }

    return null;
  }

  return productPurchase.usageType;
};

export const PurchaseProductButtons = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData>(
  {
    productListingData,
    selectedUsageType,
    onUsageTypeChange,
    simulateAppStoreProduct,
    i18n,
    isAlreadyReceived,
    onClickBuy,
    onClickBuyWithCredits,
  }: {
    productListingData: T,
    selectedUsageType: string,
    onUsageTypeChange: (usageType: string) => void,
    simulateAppStoreProduct?: boolean,
    i18n: I18nType,
    isAlreadyReceived: boolean,
    onClickBuy: () => Promise<void>,
    onClickBuyWithCredits: () => Promise<void>
  },
) => {
  const { authenticated } = React.useContext(AuthenticatedUserContext);
  const shouldUseOrSimulateAppStoreProduct =
    simulateAppStoreProduct || shouldUseAppStoreProduct();
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
  const productType = productListingData.productType.toLowerCase();

// @ts-expect-error - TS2339 - Property 'creditPrices' does not exist on type 'T'.
  let creditPrice = productListingData.creditPrices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
    price => price.usageType === selectedUsageType
  );
  if (!creditPrice) {
    // We're probably switching from one product to another, and the usage type is not available.
    // Let's reset it.
// @ts-expect-error - TS2339 - Property 'prices' does not exist on type 'T'.
    onUsageTypeChange(productListingData.prices[0].usageType);
// @ts-expect-error - TS2339 - Property 'creditPrices' does not exist on type 'T'.
    creditPrice = productListingData.creditPrices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type. | TS2339 - Property 'prices' does not exist on type 'T'.
      price => price.usageType === productListingData.prices[0].usageType
    );
    if (!creditPrice) {
      console.error(
        `Unable to find a credit price for product ${
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'T'.
          productListingData.id
// @ts-expect-error - TS2339 - Property 'prices' does not exist on type 'T'.
        }, usage type ${productListingData.prices[0].usageType}`
      );
      return null;
    }
  }

  const formattedProductPriceText = renderProductPrice({
    i18n,
    usageType: selectedUsageType,
    productListingData: productListingData,
    plainText: true,
  });

  return shouldUseOrSimulateAppStoreProduct ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Buy for {formattedProductPriceText}</Trans>}
        onClick={onClickBuyWithCredits}
        id={`buy-${productType}-with-credits`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        icon={<Coin fontSize="small" />}
      />
      {!isAlreadyReceived && !authenticated && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Text size="body-small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Link onClick={onClickBuy} href="">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Restore a previous purchase</Trans>
          </Link>
        </Text>
      )}
    </LineStackLayout>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButton
        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Buy for {creditPrice.amount} credits</Trans>}
        onClick={onClickBuyWithCredits}
        id={`buy-${productType}-with-credits`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        leftIcon={<Coin fontSize="small" />}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Buy for {formattedProductPriceText}</Trans>}
        onClick={onClickBuy}
        id={`buy-${productType}`}
      />
    </LineStackLayout>
  );
};

export const OpenProductButton = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData>(
  {
    productListingData,
    onClick,
    label,
  }: {
    productListingData: T,
    onClick: () => void,
    label: React.ReactNode
  },
) => {
  if (
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
    productListingData.productType === 'GAME_TEMPLATE' &&
// @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
    productListingData.includedListableProductIds
  ) {
    // Template is a bundle and is owned, no button to display.
    return null;
  }
// @ts-expect-error - TS2339 - Property 'productType' does not exist on type 'T'.
  const productType = productListingData.productType.toLowerCase();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin alignItems="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
        primary
        label={label}
        onClick={onClick}
        id={`open-${productType}`}
      />
    </Column>
  );
};

export const getProductMediaItems = <T extends PrivateAssetPackListingData | PrivateGameTemplateListingData, U extends PrivateAssetPack | PrivateGameTemplate>(
  {
    productListingData,
    product,
    shouldSimulateAppStoreProduct,
  }: {
    productListingData: T,
    product: U | null | undefined,
    shouldSimulateAppStoreProduct?: boolean
  },
) => {
  if (!product) return [];

  const shouldUseOrSimulateAppStoreProduct =
    shouldSimulateAppStoreProduct || shouldUseAppStoreProduct();

  const mediaItems = [
    {
      kind: 'image',
      url:
        (shouldUseOrSimulateAppStoreProduct &&
// @ts-expect-error - TS2339 - Property 'appStoreThumbnailUrls' does not exist on type 'T'.
          productListingData.appStoreThumbnailUrls &&
// @ts-expect-error - TS2339 - Property 'appStoreThumbnailUrls' does not exist on type 'T'.
          productListingData.appStoreThumbnailUrls[0]) ||
// @ts-expect-error - TS2339 - Property 'thumbnailUrls' does not exist on type 'T'.
        productListingData.thumbnailUrls[0],
    },
    ...product.previewImageUrls.map(url => ({
      kind: 'image',
      url,
    })),
  ];

// @ts-expect-error - TS2339 - Property 'previewSoundUrls' does not exist on type 'PrivateAssetPack | PrivateGameTemplate'.
  if (product.previewSoundUrls) {
    mediaItems.push(
// @ts-expect-error - TS2339 - Property 'previewSoundUrls' does not exist on type 'PrivateAssetPack | PrivateGameTemplate'. | TS7006 - Parameter 'url' implicitly has an 'any' type.
      ...product.previewSoundUrls.map(url => ({
        kind: 'audio',
        url,
      }))
    );
  }

  return mediaItems;
};
