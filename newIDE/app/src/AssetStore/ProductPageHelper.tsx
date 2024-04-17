import * as React from 'react';

import { I18n as I18nType } from '@lingui/core';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
  Purchase,
} from '../Utils/GDevelopServices/Shop';
import {
  PrivateAssetPack,
  PrivateGameTemplate,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackTile,
  PrivateGameTemplateTile,
  PromoBundleCard,
} from './ShopTiles';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { shouldUseAppStoreProduct } from '../Utils/AppStorePurchases';

import { LineStackLayout } from '../UI/Layout';

import RaisedButton from '../UI/RaisedButton';

import Text from '../UI/Text';

import Link from '../UI/Link';

import Coin from '../Credits/Icons/Coin';

import { renderProductPrice } from './ProductPriceTag';

import { Trans } from '@lingui/macro';

import FlatButton from '../UI/FlatButton';

import { Column } from '../UI/Grid';

export const getOtherProductsFromSameAuthorTiles = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
  U extends PrivateAssetPack | PrivateGameTemplate,
>({
  otherProductListingDatasFromSameCreator,
  currentProductListingData,
  receivedProducts,
  onProductOpen,
}: {
  otherProductListingDatasFromSameCreator: Array<T> | null | undefined;
  currentProductListingData: T;
  receivedProducts: Array<U> | null | undefined;
  onProductOpen: (product: T) => void;
}): Array<React.ReactNode> | null | undefined => {
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

      (product) => product.id !== currentProductListingData.id
    )
    .map((productListingDataFromSameCreator) => {
      const isProductOwned =
        !!receivedProducts &&
        !!receivedProducts.find(
          (product) => product.id === productListingDataFromSameCreator.id
        );

      if (productListingDataFromSameCreator.productType === 'GAME_TEMPLATE') {
        return (
          <PrivateGameTemplateTile
            privateGameTemplateListingData={productListingDataFromSameCreator}
            key={productListingDataFromSameCreator.id}
            onSelect={() => onProductOpen(productListingDataFromSameCreator)}
            owned={isProductOwned}
          />
        );
      }

      if (productListingDataFromSameCreator.productType === 'ASSET_PACK') {
        return (
          <PrivateAssetPackTile
            assetPackListingData={productListingDataFromSameCreator}
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

export const getBundlesContainingProductTiles = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
  U extends PrivateAssetPack | PrivateGameTemplate,
>({
  product,
  productListingDatas,
  receivedProducts,
  onProductOpen,
}: {
  product: U | null | undefined;
  productListingDatas: Array<T> | null | undefined;
  receivedProducts: Array<U> | null | undefined;
  onProductOpen: (product: T) => void;
}): Array<React.ReactNode> | null | undefined => {
  if (!product || !productListingDatas) return null;

  const bundlesContainingProduct = productListingDatas.filter(
    (productListingData) =>
      productListingData.includedListableProductIds &&
      productListingData.includedListableProductIds.includes(product.id)
  );

  if (!bundlesContainingProduct.length) return null;

  const ownedBundlesContainingProduct = bundlesContainingProduct.filter(
    (bundleContainingProduct) =>
      !!receivedProducts &&
      !!receivedProducts.find(
        (Product) => Product.id === bundleContainingProduct.id
      )
  );
  const notOwnedBundlesContainingProduct = bundlesContainingProduct.filter(
    (bundleContainingProduct) =>
      !ownedBundlesContainingProduct.find(
        (ownedBundleContainingProduct) =>
          ownedBundleContainingProduct.id === bundleContainingProduct.id
      )
  );

  const allTiles = ownedBundlesContainingProduct
    .map((bundleContainingProduct) => {
      return (
        <PromoBundleCard
          productListingData={bundleContainingProduct}
          onSelect={() => onProductOpen(bundleContainingProduct)}
          owned
          key={bundleContainingProduct.id}
        />
      );
    })
    .concat(
      notOwnedBundlesContainingProduct.map((bundleContainingProduct) => {
        return (
          <PromoBundleCard
            productListingData={bundleContainingProduct}
            onSelect={() => onProductOpen(bundleContainingProduct)}
            owned={false}
            key={bundleContainingProduct.id}
          />
        );
      })
    );

  return allTiles;
};

export const getProductsIncludedInBundleTiles = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
  U extends PrivateAssetPack | PrivateGameTemplate,
>({
  product,
  productListingDatas,
  productListingData,
  receivedProducts,
  onProductOpen,
}: {
  product: U | null | undefined;
  productListingDatas: Array<T> | null | undefined;
  productListingData: T;
  receivedProducts: Array<U> | null | undefined;
  onProductOpen: (product: T) => void;
}): Array<React.ReactNode> | null | undefined => {
  if (!product || !productListingDatas) return null;

  const includedProductIds = productListingData.includedListableProductIds;
  if (!includedProductIds) return null;

  return includedProductIds

    .map((includedProductId) => {
      const includedProductListingData = productListingDatas.find(
        (privateProductListingData) =>
          privateProductListingData.id === includedProductId
      );
      if (!includedProductListingData) {
        console.warn(`Included product ${includedProductId} not found`);
        return null;
      }

      const isProductOwned =
        !!receivedProducts &&
        !!receivedProducts.find(
          (product) => product.id === includedProductListingData.id
        );

      if (includedProductListingData.productType === 'GAME_TEMPLATE') {
        return (
          <PrivateGameTemplateTile
            privateGameTemplateListingData={includedProductListingData}
            key={includedProductListingData.id}
            onSelect={() => onProductOpen(includedProductListingData)}
            owned={isProductOwned}
          />
        );
      }

      if (includedProductListingData.productType === 'ASSET_PACK') {
        return (
          <PrivateAssetPackTile
            assetPackListingData={includedProductListingData}
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
export const getUserProductPurchaseUsageType = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
  U extends PrivateAssetPack | PrivateGameTemplate,
>({
  productId,
  receivedProducts,
  productPurchases,
  allProductListingDatas,
}: {
  productId: string | null | undefined;
  receivedProducts: Array<U> | null | undefined;
  productPurchases: Array<Purchase> | null | undefined;
  allProductListingDatas: Array<T> | null | undefined;
}): string | null | undefined => {
  // User is not authenticated or still loading.
  if (!receivedProducts || !productPurchases || !allProductListingDatas)
    return null;

  const currentReceivedProduct = receivedProducts.find(
    (receivedProduct) => receivedProduct.id === productId
  );
  // User does not own the product.
  if (!currentReceivedProduct) return null;

  const productPurchase = productPurchases.find(
    (productPurchase) => productPurchase.productId === currentReceivedProduct.id
  );
  if (!productPurchase) {
    // It is possible the user has the product as part of a bundle.
    const productBundleListingData = allProductListingDatas.find(
      (productListingData) =>
        productListingData.includedListableProductIds &&
        // @ts-expect-error - TS2339 - Property 'includedListableProductIds' does not exist on type 'T'.
        productListingData.includedListableProductIds.includes(productId)
    );
    if (productBundleListingData) {
      const receivedProductBundlePurchase = productPurchases.find(
        (productPurchase) =>
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

export const PurchaseProductButtons = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
>({
  productListingData,
  selectedUsageType,
  onUsageTypeChange,
  simulateAppStoreProduct,
  i18n,
  isAlreadyReceived,
  onClickBuy,
  onClickBuyWithCredits,
}: {
  productListingData: T;
  selectedUsageType: string;
  onUsageTypeChange: (usageType: string) => void;
  simulateAppStoreProduct?: boolean;
  i18n: I18nType;
  isAlreadyReceived: boolean;
  onClickBuy: () => Promise<void>;
  onClickBuyWithCredits: () => Promise<void>;
}) => {
  const { authenticated } = React.useContext(AuthenticatedUserContext);
  const shouldUseOrSimulateAppStoreProduct =
    simulateAppStoreProduct || shouldUseAppStoreProduct();

  const productType = productListingData.productType.toLowerCase();

  let creditPrice = productListingData.creditPrices.find(
    (price) => price.usageType === selectedUsageType
  );
  if (!creditPrice) {
    // We're probably switching from one product to another, and the usage type is not available.
    // Let's reset it.

    onUsageTypeChange(productListingData.prices[0].usageType);

    creditPrice = productListingData.creditPrices.find(
      (price) => price.usageType === productListingData.prices[0].usageType
    );
    if (!creditPrice) {
      console.error(
        `Unable to find a credit price for product ${productListingData.id}, usage type ${productListingData.prices[0].usageType}`
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
    <LineStackLayout>
      <RaisedButton
        primary
        label={<Trans>Buy for {formattedProductPriceText}</Trans>}
        onClick={onClickBuyWithCredits}
        id={`buy-${productType}-with-credits`}
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        icon={<Coin fontSize="small" />}
      />
      {!isAlreadyReceived && !authenticated && (
        <Text size="body-small">
          {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Link onClick={onClickBuy} href="">
            <Trans>Restore a previous purchase</Trans>
          </Link>
        </Text>
      )}
    </LineStackLayout>
  ) : (
    <LineStackLayout>
      <FlatButton
        primary
        label={<Trans>Buy for {creditPrice.amount} credits</Trans>}
        onClick={onClickBuyWithCredits}
        id={`buy-${productType}-with-credits`}
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        leftIcon={<Coin fontSize="small" />}
      />
      <RaisedButton
        primary
        label={<Trans>Buy for {formattedProductPriceText}</Trans>}
        onClick={onClickBuy}
        id={`buy-${productType}`}
      />
    </LineStackLayout>
  );
};

export const OpenProductButton = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
>({
  productListingData,
  onClick,
  label,
}: {
  productListingData: T;
  onClick: () => void;
  label: React.ReactNode;
}) => {
  if (
    productListingData.productType === 'GAME_TEMPLATE' &&
    productListingData.includedListableProductIds
  ) {
    // Template is a bundle and is owned, no button to display.
    return null;
  }

  const productType = productListingData.productType.toLowerCase();

  return (
    <Column noMargin alignItems="flex-end">
      <RaisedButton
        primary
        label={label}
        onClick={onClick}
        id={`open-${productType}`}
      />
    </Column>
  );
};

export const getProductMediaItems = <
  T extends PrivateAssetPackListingData | PrivateGameTemplateListingData,
  U extends PrivateAssetPack | PrivateGameTemplate,
>({
  productListingData,
  product,
  shouldSimulateAppStoreProduct,
}: {
  productListingData: T;
  product: U | null | undefined;
  shouldSimulateAppStoreProduct?: boolean;
}) => {
  if (!product) return [];

  const shouldUseOrSimulateAppStoreProduct =
    shouldSimulateAppStoreProduct || shouldUseAppStoreProduct();

  const mediaItems = [
    {
      kind: 'image',
      url:
        (shouldUseOrSimulateAppStoreProduct &&
          productListingData.appStoreThumbnailUrls &&
          productListingData.appStoreThumbnailUrls[0]) ||
        productListingData.thumbnailUrls[0],
    },
    ...product.previewImageUrls.map((url) => ({
      kind: 'image',
      url,
    })),
  ];

  // @ts-expect-error - TS2339 - Property 'previewSoundUrls' does not exist on type 'PrivateAssetPack | PrivateGameTemplate'.
  if (product.previewSoundUrls) {
    mediaItems.push(
      // @ts-expect-error - TS2339 - Property 'previewSoundUrls' does not exist on type 'PrivateAssetPack | PrivateGameTemplate'. | TS7006 - Parameter 'url' implicitly has an 'any' type.
      ...product.previewSoundUrls.map((url) => ({
        kind: 'audio',
        url,
      }))
    );
  }

  return mediaItems;
};
