import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module './ProductLicenseStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseStoreContext.tsx', but '--jsx' is not set.
import { ProductLicenseStoreContext } from './ProductLicenseStoreContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
import { selectMessageByLocale } from '../../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import {
  PrivateGameTemplateListingData,
  PrivateAssetPackListingData,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/Shop';
import { createStyles, makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import ButtonBase from '@material-ui/core/ButtonBase';
import { shouldValidate } from '../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../ProductPriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPriceTag.tsx', but '--jsx' is not set.
import { renderProductPrice } from '../ProductPriceTag';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../UI/CustomSvgIcons/CheckCircle';

const styles = {
  buttonBase: {
    borderRadius: 8,
    padding: 8,
    cursor: 'default',
    overflow: 'hidden',
    boxSizing: 'border-box',
    margin: 1, // For the outline to be visible.
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  radio: {
    padding: 0,
  },
  descriptionContainer: {
    paddingLeft: 32,
  },
} as const;

const ProductLicenseOptionContent = ({
  selected,
  onClick,
  name,
  description,
  formattedPrice,
  isLicenseOwned,
}: {
  selected: boolean,
  onClick?: () => void,
  name: string,
  description: string,
  formattedPrice?: React.ReactNode,
  isLicenseOwned: boolean
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin>
        {isLicenseOwned ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <CheckCircle />
        ) : onClick ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Radio
            color="secondary"
            checked={selected}
            onChange={onClick}
            style={styles.radio}
          />
        ) : null}
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout justifyContent="space-between" noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin size="sub-title">
          {name}
        </Text>
        {!isLicenseOwned && formattedPrice}
      </LineStackLayout>
    </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.descriptionContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin align="left">
          {description}
        </Text>
      </div>
    </Line>
  </ColumnStackLayout>
);

// Styles to give the impression of pressing an element.
const useStylesForButtonBase = (selected: boolean) =>
  makeStyles(theme =>
    createStyles({
      root: {
        outline: selected
          ? `2px solid ${theme.palette.secondary.dark}`
          : `1px solid ${theme.palette.text.disabled}`,
        '&:focus': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        transition: 'background-color 100ms ease',
      },
    })
  )();

const ProductLicenseOptionButton = ({
  id,
  onClick,
  selected,
  name,
  description,
  formattedPrice,
  ownedLicense,
  disabled,
}: {
  id: string,
  onClick: () => void,
  selected: boolean,
  name: string,
  description: string,
  formattedPrice: React.ReactNode,
  ownedLicense: string | null | undefined,
  disabled?: boolean
}) => {
  const classes = useStylesForButtonBase(selected);

  if (!!ownedLicense && ownedLicense !== id) {
    // A license is owned, but not this one, hide the option.
    return null;
  }

  const isLicenseOwned = ownedLicense === id;

  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      onClick={onClick}
      elevation={2}
      style={styles.buttonBase}
      classes={classes}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event) && !selected) {
          onClick();
        }
      }}
      disableTouchRipple={selected} // Avoid ripple effect even if already selected.
      disabled={disabled || isLicenseOwned}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.contentWrapper}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ProductLicenseOptionContent
          description={description}
          formattedPrice={formattedPrice}
          isLicenseOwned={isLicenseOwned}
          name={name}
          onClick={onClick}
          selected={selected}
        />
      </div>
    </ButtonBase>
  );
};

type Props = {
  value: string,
  onChange: (arg1: string) => void,
  product: PrivateGameTemplateListingData | PrivateAssetPackListingData,
  ownedLicense: string | null | undefined,
  disabled?: boolean
};

const ProductLicenseOptions = ({
  value,
  onChange,
  product,
  ownedLicense,
  disabled,
}: Props) => {
  const {
    gameTemplateLicenses,
    assetPackLicenses,
    error,
    fetchProductLicenses,
  } = React.useContext(ProductLicenseStoreContext);

  const productType =
    product.productType === 'GAME_TEMPLATE' ? 'game-template' : 'asset-pack';
  const productLicenses =
    productType === 'game-template' ? gameTemplateLicenses : assetPackLicenses;

  React.useEffect(
    () => {
      fetchProductLicenses({ productType });
    },
    [fetchProductLicenses, productType]
  );

  if (error) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PlaceholderError onRetry={() => fetchProductLicenses({ productType })}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          Can't load the licenses. Verify your internet connection or try again
          later.
        </Trans>
      </PlaceholderError>
    );
  }

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (!productLicenses) return <PlaceholderLoader />;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS7006 - Parameter 'license' implicitly has an 'any' type. */}
          {productLicenses.map(license => {
            const productPriceForLicense = product.prices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
              price => price.usageType === license.id
            );
            if (!productPriceForLicense) return null;
            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ProductLicenseOptionButton
                key={license.id}
                id={license.id}
                onClick={() => onChange(license.id)}
                selected={license.id === value}
                name={selectMessageByLocale(i18n, license.nameByLocale)}
                description={selectMessageByLocale(
                  i18n,
                  license.descriptionByLocale
                )}
                formattedPrice={renderProductPrice({
                  i18n,
                  productListingData: product,
                  usageType: license.id,
                })}
                ownedLicense={ownedLicense}
                disabled={disabled}
              />
            );
          })}
        </ColumnStackLayout>
      )}
    </I18n>
  );
};

export const OwnedProductLicense = ({
  ownedLicense,
  productType,
}: {
  ownedLicense: string | null | undefined,
  productType: 'game-template' | 'asset-pack'
}) => {
  const { gameTemplateLicenses, assetPackLicenses, error } = React.useContext(
    ProductLicenseStoreContext
  );

  const productLicenses =
    productType === 'game-template' ? gameTemplateLicenses : assetPackLicenses;

  if (error || !productLicenses) {
    return null;
  }

// @ts-expect-error - TS7006 - Parameter 'license' implicitly has an 'any' type.
  const license = productLicenses.find(license => license.id === ownedLicense);
  if (!license) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ProductLicenseOptionContent
          selected
          name={license.nameByLocale.en}
          description={license.descriptionByLocale.en}
          isLicenseOwned
        />
      )}
    </I18n>
  );
};

export default ProductLicenseOptions;
