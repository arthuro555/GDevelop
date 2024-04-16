import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import capitalize from 'lodash/capitalize';
import {
  PublicAssetPack,
  AssetShortHeader,
} from '../Utils/GDevelopServices/Asset';
import {
  PrivateAssetPackListingData,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../Utils/GDevelopServices/Shop';
import type { ExampleShortHeader } from '../Utils/GDevelopServices/Example';
import GridListTile from '@material-ui/core/GridListTile';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { shouldValidate } from '../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS6142 - Module '../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../UI/CorsAwareImage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './ProductPriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPriceTag.tsx', but '--jsx' is not set.
import ProductPriceTag, { renderProductPrice } from './ProductPriceTag';
// @ts-expect-error - TS6142 - Module './AssetCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetCard.tsx', but '--jsx' is not set.
import { AssetCard } from './AssetCard';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Folder'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Folder.js' implicitly has an 'any' type.
import FolderIcon from '../UI/CustomSvgIcons/Folder';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../UI/Layout';

const styles = {
  priceTagContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    cursor: 'default',
  },
  previewImage: {
    width: '100%',
    // Prevent cumulative layout shift by enforcing
    // the 16:9 ratio.
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    position: 'relative',
  },
  thumbnailContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  redeemableContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    backgroundColor: '#FF8569',
    color: '#1D1D26',
  },
  redeemableDiamondIcon: { height: 24 },
  promoImage: {
    width: '20%',
    minWidth: 200,
    margin: 4,
  },
  paper: {
    margin: 4,
    display: 'flex',
    flexDirection: 'column',
  },
  packTitle: {
    ...textEllipsisStyle,
    overflowWrap: 'break-word',
  },
  folderTitle: {
    marginLeft: 8,
  },
  folderPaper: {
    height: 55,
  },
  folderIcon: {
    width: 32,
    height: 32,
  },
  promoLineContainer: {
    borderRadius: 8,
    padding: 2,
    flex: 1,
  },
  promoImageContainer: {
    display: 'flex',
    flex: 0,
    justifyContent: 'center',
  },
} as const;

const useStylesForGridListItem = makeStyles(theme =>
  createStyles({
    root: {
      '&:focus': {
        outline: `1px solid ${theme.palette.primary.light}`,
      },
      '&:hover': {
        outline: `1px solid ${theme.palette.primary.light}`,
      },
    },
  })
);

export const AssetCardTile = ({
  assetShortHeader,
  onOpenDetails,
  size,
  margin,
}: {
  assetShortHeader: AssetShortHeader,
  onOpenDetails: () => void,
  size: number,
  margin?: number
}) => {
  const classesForGridListItem = useStylesForGridListItem();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onOpenDetails();
        }
      }}
      onClick={onOpenDetails}
      style={{
        margin,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetCard
        id={`asset-card-${assetShortHeader.name.replace(/\s/g, '-')}`}
        assetShortHeader={assetShortHeader}
        size={size}
      />
    </GridListTile>
  );
};

export const AssetFolderTile = ({
  tag,
  onSelect,
  style,
}: {
  tag: string,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin id={`asset-folder-${tag.replace(/\s/g, '-')}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FolderIcon style={styles.folderIcon} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin style={styles.folderTitle} size="sub-title">
            {capitalize(tag)}
          </Text>
        </Line>
      </Column>
    </GridListTile>
  );
};

export const PublicAssetPackTile = ({
  assetPack,
  onSelect,
  style,
}: {
  assetPack: PublicAssetPack,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper
        id={`asset-pack-${assetPack.tag.replace(/\s/g, '-')}`}
        elevation={2}
        style={styles.paper}
        background="light"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CorsAwareImage
          key={assetPack.name}
          style={styles.previewImage}
          src={assetPack.thumbnailUrl}
          alt={`Preview image of asset pack ${assetPack.name}`}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="space-between" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} size="body2">
              {assetPack.name}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} color="primary" size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>{assetPack.assetsCount} Assets</Trans>
              {assetPack.userFriendlyPrice
                ? ' - ' + assetPack.userFriendlyPrice
                : null}
            </Text>
          </Line>
        </Column>
      </Paper>
    </GridListTile>
  );
};

export const PrivateAssetPackTile = ({
  assetPackListingData,
  onSelect,
  style,
  owned,
}: {
  assetPackListingData: PrivateAssetPackListingData,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any,
  owned: boolean
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper elevation={2} style={styles.paper} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.thumbnailContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CorsAwareImage
            key={assetPackListingData.name}
            style={styles.previewImage}
            src={assetPackListingData.thumbnailUrls[0]}
            alt={`Preview image of asset pack ${assetPackListingData.name}`}
          />
          {assetPackListingData.redeemConditions && !owned && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.redeemableContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <img
                src="res/small-diamond.svg"
                style={styles.redeemableDiamondIcon}
                alt="diamond"
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text color="inherit" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Claim this pack</Trans>
              </Text>
            </div>
          )}
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.priceTagContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ProductPriceTag
            productListingData={assetPackListingData}
            withOverlay
            owned={owned}
          />
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="space-between" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} size="body2">
              {assetPackListingData.name}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} color="primary" size="body2">
              {assetPackListingData.description}
            </Text>
          </Line>
        </Column>
      </Paper>
    </GridListTile>
  );
};

export const PromoBundleCard = ({
  productListingData,
  onSelect,
  owned,
}: {
  productListingData: PrivateAssetPackListingData | PrivateGameTemplateListingData,
  onSelect: () => void,
  owned: boolean
}) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
            style={{
              ...styles.promoLineContainer,
              border: `2px solid ${gdevelopTheme.palette.secondary}`,
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <div style={styles.promoImageContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CorsAwareImage
                  key={productListingData.name}
                  style={{
                    ...styles.previewImage,
                    ...styles.promoImage,
                  }}
                  src={productListingData.thumbnailUrls[0]}
                  alt={`Preview image of bundle ${productListingData.name}`}
                />
              </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand alignItems="flex-start" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text color="primary" size="section-title">
                  {!owned ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Get {productListingData.description}!</Trans>
                  ) : productListingData.productType === 'ASSET_PACK' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>You already own this pack!</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>You already own this template!</Trans>
                  )}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text color="primary" size="body2">
                  {!owned ? (
                    productListingData.productType === 'ASSET_PACK' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        This pack is included in this bundle for{' '}
                        {renderProductPrice({
                          i18n,
                          productListingData,
                          plainText: true,
                        })}
                        !
                      </Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        This template is included in this bundle for{' '}
                        {renderProductPrice({
                          i18n,
                          productListingData,
                          plainText: true,
                        })}
                        !
                      </Trans>
                    )
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      It is included in the bundle {productListingData.name}.
                    </Trans>
                  )}
                </Text>
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="center">
                  {!owned ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>See this bundle</Trans>}
                      onClick={onSelect}
                      primary
                    />
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>See this bundle</Trans>}
                      onClick={onSelect}
                      primary
                    />
                  )}
                </Line>
              </Column>
            </ResponsiveLineStackLayout>
          </div>
        </Line>
      )}
    </I18n>
  );
};

export const CategoryTile = ({
  id,
  title,
  imageSource,
  imageAlt,
  onSelect,
  style,
}: {
  id: string,
  title: React.ReactNode,
  imageSource: string,
  imageAlt: string,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper id={id} elevation={2} style={styles.paper} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CorsAwareImage
          style={{
            ...styles.previewImage,
            background: gdevelopTheme.palette.primary,
          }}
          src={imageSource}
          alt={imageAlt}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} size="sub-title">
              {title}
            </Text>
          </Line>
        </Column>
      </Paper>
    </GridListTile>
  );
};

export const PrivateGameTemplateTile = ({
  privateGameTemplateListingData,
  onSelect,
  style,
  owned,
}: {
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any,
  owned: boolean
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper elevation={2} style={styles.paper} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CorsAwareImage
          key={privateGameTemplateListingData.name}
          style={styles.previewImage}
          src={privateGameTemplateListingData.thumbnailUrls[0]}
          alt={`Preview image of game template ${
            privateGameTemplateListingData.name
          }`}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.priceTagContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ProductPriceTag
            productListingData={privateGameTemplateListingData}
            withOverlay
            owned={owned}
          />
        </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} size="body2">
              {privateGameTemplateListingData.name}
            </Text>
          </Line>
        </Column>
      </Paper>
    </GridListTile>
  );
};

export const ExampleTile = ({
  exampleShortHeader,
  onSelect,
  style,
}: {
  exampleShortHeader: ExampleShortHeader,
  onSelect: () => void,
  /** Props needed so that GridList component can adjust tile size */
  style?: any
}) => {
  const classesForGridListItem = useStylesForGridListItem();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <GridListTile
      classes={classesForGridListItem}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onSelect();
        }
      }}
      style={style}
      onClick={onSelect}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper elevation={2} style={styles.paper} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CorsAwareImage
          key={exampleShortHeader.name}
          style={styles.previewImage}
          src={
            exampleShortHeader.previewImageUrls
              ? exampleShortHeader.previewImageUrls[0]
              : ''
          }
          alt={`Preview image of example ${exampleShortHeader.name}`}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text style={styles.packTitle} size="body2">
              {exampleShortHeader.name}
            </Text>
          </Line>
        </Column>
      </Paper>
    </GridListTile>
  );
};
