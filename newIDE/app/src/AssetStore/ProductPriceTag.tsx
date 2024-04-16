import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS6142 - Module '../UI/PriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PriceTag.tsx', but '--jsx' is not set.
import PriceTag from '../UI/PriceTag';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
  CreditsPackageListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
import {
  shouldUseAppStoreProduct,
  getAppStoreProduct,
} from '../Utils/AppStorePurchases';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Credits/Icons/Coin'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/Coin.js' implicitly has an 'any' type.
import Coin from '../Credits/Icons/Coin';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';

const styles = {
  icon: {
    width: 12,
    height: 12,
  },
} as const;

type FormatProps = {
  productListingData: PrivateAssetPackListingData | PrivateGameTemplateListingData | CreditsPackageListingData,
  i18n: I18nType,
  usageType?: string,
  plainText?: boolean
};

export const renderProductPrice = (
  {
    i18n,
    productListingData,
    usageType,
    plainText,
  }: FormatProps,
): React.ReactElement => {
  // Only use the app store product if it's a credits package.
  if (
    shouldUseAppStoreProduct() &&
    productListingData.productType === 'CREDITS_PACKAGE'
  ) {
    const appStoreProduct = getAppStoreProduct(
      productListingData.appStoreProductId
    );
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return appStoreProduct ? appStoreProduct.price : '';
  }

  // If we're on mobile, only show credits prices for asset packs & game templates.
  if (
    shouldUseAppStoreProduct() &&
    productListingData.productType !== 'CREDITS_PACKAGE'
  ) {
    const creditPrices = productListingData.creditPrices;
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    if (!creditPrices) return '';
    const creditPrice = usageType
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
      ? creditPrices.find(price => price.usageType === usageType)
      : creditPrices.length > 0
      ? creditPrices[0]
      : null;

// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    if (!creditPrice) return '';
    return plainText ? (
      i18n._(t`${creditPrice.amount} credits`)
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Coin style={styles.icon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin size="sub-title" color="inherit">
          {creditPrice.amount}
        </Text>
      </LineStackLayout>
    );
  }

  const productPrices = productListingData.prices;
  const price = usageType
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
    ? productPrices.find(price => price.usageType === usageType)
    : // If no usage type is specified, use the first price.
    productPrices.length > 0
    ? productPrices[0]
    : null;
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
  if (!price) return '';

  const currencyCode = price.currency === 'USD' ? '$' : '€';
  const formattedPrice = `${currencyCode} ${i18n
    .number(price.value / 100, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/\D00$/, '')}`;

// @ts-expect-error - TS2322 - Type 'string | Element' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
  return plainText ? (
    formattedPrice
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Text noMargin size="sub-title" color="inherit">
      {formattedPrice}
    </Text>
  );
};

type ProductPriceOrOwnedProps = {
  productListingData: PrivateAssetPackListingData | PrivateGameTemplateListingData | CreditsPackageListingData,
  i18n: I18nType,
  usageType?: string,
  owned?: boolean
};

export const getProductPriceOrOwnedLabel = (
  {
    i18n,
    productListingData,
    usageType,
    owned,
  }: ProductPriceOrOwnedProps,
): React.ReactElement => {
  return owned ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text noMargin size="sub-title">
        ✅
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text noMargin size="sub-title" color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Owned</Trans>
      </Text>
    </LineStackLayout>
  ) : (
    renderProductPrice({ i18n, productListingData, usageType })
  );
};

type ProductPriceTagProps = {
  productListingData: PrivateAssetPackListingData | PrivateGameTemplateListingData | CreditsPackageListingData,
  usageType?: string,
  /**
   * To be used when the component is over an element for which
   * we don't control the background (e.g. an image).
   */
  withOverlay?: boolean,
  owned?: boolean
};

const ProductPriceTag = ({
  productListingData,
  usageType,
  withOverlay,
  owned,
}: ProductPriceTagProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => {
        const label = getProductPriceOrOwnedLabel({
          i18n,
          productListingData,
          usageType,
          owned,
        });

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        return <PriceTag withOverlay={withOverlay} label={label} />;
      }}
    </I18n>
  );
};

export default ProductPriceTag;
