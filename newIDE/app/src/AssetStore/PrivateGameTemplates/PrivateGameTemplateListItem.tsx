import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Search/HighlightedText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Search/HighlightedText.tsx', but '--jsx' is not set.
import HighlightedText from '../../UI/Search/HighlightedText';
import { SearchMatch } from '../../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { iconWithBackgroundStyle } from '../../UI/IconContainer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Lightning'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Lightning.js' implicitly has an 'any' type.
import Lightning from '../../UI/CustomSvgIcons/Lightning';
// @ts-expect-error - TS6142 - Module '../../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../../UI/CorsAwareImage';
import { shouldUseAppStoreProduct } from '../../Utils/AppStorePurchases';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import { capitalize } from 'lodash';
// @ts-expect-error - TS6142 - Module '../../UI/Chip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Chip.tsx', but '--jsx' is not set.
import Chip from '../../UI/Chip';
// @ts-expect-error - TS6142 - Module '../ProductPriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPriceTag.tsx', but '--jsx' is not set.
import ProductPriceTag from '../ProductPriceTag';

const styles = {
  container: {
    display: 'flex',
    overflow: 'hidden',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  button: {
    alignItems: 'flex-start',
    textAlign: 'left',
    flex: 1,
  },
  iconBackground: {
    flex: 0,
    display: 'flex',
    justifyContent: 'left',
  },
  icon: {
    ...iconWithBackgroundStyle,
    padding: 1,
    aspectRatio: '16 / 9',
  },
  priceTagContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    cursor: 'default',
  },
  chip: {
    marginRight: 2,
    marginBottom: 2,
  },
} as const;

type Props = {
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  matches: Array<SearchMatch> | null | undefined,
  isOpening: boolean,
  onChoose: () => void,
  onHeightComputed: (arg1: number) => void,
  owned: boolean
};

const PrivateGameTemplateListItem = ({
  privateGameTemplateListingData,
  matches,
  isOpening,
  onChoose,
  onHeightComputed,
  owned,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  // Report the height of the item once it's known.
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  React.useLayoutEffect(() => {
    if (containerRef.current)
      onHeightComputed(containerRef.current.getBoundingClientRect().height);
  });

  const renderGameTemplateField = (field: 'description' | 'name') => {
    const originalField = privateGameTemplateListingData[field];

    if (!matches) return originalField;
    const nameMatches = matches.filter(match => match.key === field);
    if (nameMatches.length === 0) return originalField;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <HighlightedText
        text={originalField}
        matchesCoordinates={nameMatches[0].indices}
      />
    );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
    <div style={styles.container} ref={containerRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ButtonBase style={styles.button} onClick={onChoose} focusRipple>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout noMargin expand>
            {!!privateGameTemplateListingData.thumbnailUrls.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CorsAwareImage
                  style={{
                    ...styles.icon,
                    height: isMobile ? undefined : 120,
                    width: isMobile ? '100%' : undefined,
                  }}
                  src={
                    (shouldUseAppStoreProduct() &&
                      privateGameTemplateListingData.appStoreThumbnailUrls &&
                      privateGameTemplateListingData
                        .appStoreThumbnailUrls[0]) ||
                    privateGameTemplateListingData.thumbnailUrls[0]
                  }
                  alt={privateGameTemplateListingData.name}
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
              </Column>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin>{renderGameTemplateField('name')} </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={{ flexWrap: 'wrap' }}>
                  {privateGameTemplateListingData.isSellerGDevelop && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Chip
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      icon={<Lightning />}
                      variant="outlined"
                      color="secondary"
                      size="small"
                      style={styles.chip}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Ready-made</Trans>}
                      key="premium"
                    />
                  )}
{ /* @ts-expect-error - TS7006 - Parameter 'category' implicitly has an 'any' type. */}
                  {privateGameTemplateListingData.categories.map(category => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Chip
                      size="small"
                      style={styles.chip}
                      label={capitalize(category)}
                      key={category}
                    />
                  ))}
                </div>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text
                noMargin
                size="body2"
                displayInlineAsSpan // Important to avoid the text to use a "p" which causes crashes with automatic translation tools with the highlighted text.
              >
                {renderGameTemplateField('description')}
              </Text>
            </Column>
          </ResponsiveLineStackLayout>
        </ButtonBase>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Open</Trans>}
              disabled={isOpening}
              onClick={onChoose}
            />
          </Line>
        </Column>
      </ResponsiveLineStackLayout>
    </div>
  );
};

export default PrivateGameTemplateListItem;
