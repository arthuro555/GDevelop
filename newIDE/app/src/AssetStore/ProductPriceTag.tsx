import * as React from 'react';

import { Trans, t } from '@lingui/macro';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

import PriceTag from '../UI/PriceTag';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
  CreditsPackageListingData,
} from '../Utils/GDevelopServices/Shop';
import {
  shouldUseAppStoreProduct,
  getAppStoreProduct,
} from '../Utils/AppStorePurchases';

import Coin from '../Credits/Icons/Coin';

import { LineStackLayout } from '../UI/Layout';

import Text from '../UI/Text';

const styles = {
  icon: {
    width: 12,
    height: 12,
  },
} as const;

type FormatProps = {
  productListingData:
    | PrivateAssetPackListingData
    | PrivateGameTemplateListingData
    | CreditsPackageListingData;
  i18n: I18nType;
  usageType?: string;
  plainText?: boolean;
};

export const renderProductPrice = ({
  i18n,
  productListingData,
  usageType,
  plainText,
}: FormatProps): React.ReactElement => {
  // Only use the app store product if it's a credits package.
  if (
    shouldUseAppStoreProduct() &&
// @ts-expect-error - TS2367 - This condition will always return 'false' since the types '"ASSET_PACK" | "GAME_TEMPLATE"' and '"CREDITS_PACKAGE"' have no overlap.
    productListingData.productType === 'CREDITS_PACKAGE'
  ) {
    const appStoreProduct = getAppStoreProduct(
// @ts-expect-error - TS2339 - Property 'appStoreProductId' does not exist on type 'never'.
      productListingData.appStoreProductId
    );
    // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return appStoreProduct ? appStoreProduct.price : '';
  }

  // If we're on mobile, only show credits prices for asset packs & game templates.
  if (
    shouldUseAppStoreProduct() &&
// @ts-expect-error - TS2367 - This condition will always return 'true' since the types '"ASSET_PACK" | "GAME_TEMPLATE"' and '"CREDITS_PACKAGE"' have no overlap.
    productListingData.productType !== 'CREDITS_PACKAGE'
  ) {
    const creditPrices = productListingData.creditPrices;
    // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    if (!creditPrices) return '';
    const creditPrice = usageType
      ? creditPrices.find((price) => price.usageType === usageType)
      : creditPrices.length > 0
        ? creditPrices[0]
        : null;

    // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    if (!creditPrice) return '';
// @ts-expect-error - TS2322 - Type 'string | Element' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return plainText ? (
      i18n._(t`${creditPrice.amount} credits`)
    ) : (
      <LineStackLayout noMargin alignItems="center">
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Coin style={styles.icon} />
        <Text noMargin size="sub-title" color="inherit">
          {creditPrice.amount}
        </Text>
      </LineStackLayout>
    );
  }

  const productPrices = productListingData.prices;
  const price = usageType
    ? productPrices.find((price) => price.usageType === usageType)
    : // If no usage type is specified, use the first price.
      productPrices.length > 0
      ? productPrices[0]
      : null;
  // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
  if (!price) return '';

  const currencyCode = price.currency === 'USD' ? '$' : '€';
  const formattedPrice = `${currencyCode} ${i18n
// @ts-expect-error - TS2339 - Property 'number' does not exist on type 'I18n'.
    .number(price.value / 100, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/\D00$/, '')}`;

  // @ts-expect-error - TS2322 - Type 'string | Element' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
  return plainText ? (
    formattedPrice
  ) : (
    <Text noMargin size="sub-title" color="inherit">
      {formattedPrice}
    </Text>
  );
};

type ProductPriceOrOwnedProps = {
  productListingData:
    | PrivateAssetPackListingData
    | PrivateGameTemplateListingData
    | CreditsPackageListingData;
  i18n: I18nType;
  usageType?: string;
  owned?: boolean;
};

export const getProductPriceOrOwnedLabel = ({
  i18n,
  productListingData,
  usageType,
  owned,
}: ProductPriceOrOwnedProps): React.ReactElement => {
  return owned ? (
    <LineStackLayout noMargin alignItems="center">
      <Text noMargin size="sub-title">
        ✅
      </Text>
      <Text noMargin size="sub-title" color="inherit">
        <Trans>Owned</Trans>
      </Text>
    </LineStackLayout>
  ) : (
    renderProductPrice({ i18n, productListingData, usageType })
  );
};

type ProductPriceTagProps = {
  productListingData:
    | PrivateAssetPackListingData
    | PrivateGameTemplateListingData
    | CreditsPackageListingData;
  usageType?: string;
  /**
   * To be used when the component is over an element for which
   * we don't control the background (e.g. an image).
   */
  withOverlay?: boolean;
  owned?: boolean;
};

const ProductPriceTag = ({
  productListingData,
  usageType,
  withOverlay,
  owned,
}: ProductPriceTagProps) => {
  return (
    <I18n>
      {({ i18n }) => {
        const label = getProductPriceOrOwnedLabel({
          i18n,
          productListingData,
          usageType,
          owned,
        });

        return <PriceTag withOverlay={withOverlay} label={label} />;
      }}
    </I18n>
  );
};

export default ProductPriceTag;
