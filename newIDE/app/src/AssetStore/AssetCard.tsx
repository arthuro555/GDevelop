import * as React from 'react';
import {
  AssetShortHeader,
  isPixelArt,
  isPrivateAsset,
} from '../Utils/GDevelopServices/Asset';
import { getPixelatedImageRendering } from '../Utils/CssHelpers';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../UI/CorsAwareImage';
// @ts-expect-error - TS6142 - Module '../ResourcesList/CheckeredBackground' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/CheckeredBackground.tsx', but '--jsx' is not set.
import CheckeredBackground from '../ResourcesList/CheckeredBackground';
// @ts-expect-error - TS6142 - Module './PrivateAssets/AuthorizedAssetImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/AuthorizedAssetImage.tsx', but '--jsx' is not set.
import AuthorizedAssetImage from './PrivateAssets/AuthorizedAssetImage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';

const paddingSize = 10;
const styles = {
  previewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    position: 'relative',
    objectFit: 'contain',
    verticalAlign: 'middle',
    pointerEvents: 'none',
  },
  previewImagePixelated: {
    width: '100%',
    imageRendering: getPixelatedImageRendering(),
    padding: 15,
  },
  icon: {
    color: '#fff',
  },
  cardContainer: {
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 8,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    color: '#fff',
    backgroundColor: 'rgb(0,0,0,0.5)',
    display: 'inline-block', // Necessary to have the text ellipsis working.
    textAlign: 'center',
    flexDirection: 'column',
  },
  title: {
    ...textEllipsisStyle,
    overflowWrap: 'break-word',
  },
} as const;

type Props = {
  id?: string,
  size: number,
  assetShortHeader: AssetShortHeader
};

export const AssetCard = ({
  id,
  assetShortHeader,
  size,
}: Props) => {
  const previewImageUrl = assetShortHeader.previewImageUrls[0];
  const isPrivate = isPrivateAsset(assetShortHeader);
  const style = {
    maxWidth: 128 - 2 * paddingSize,
    maxHeight: 128 - 2 * paddingSize,
    ...styles.previewImage,
    ...(isPixelArt(assetShortHeader)
      ? styles.previewImagePixelated
      : undefined),
  } as const;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div id={id} style={{ ...styles.cardContainer, width: size, height: size }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ ...styles.previewContainer, width: size, height: size }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CheckeredBackground />
        {isPrivate ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <AuthorizedAssetImage
            key={previewImageUrl}
            style={style}
            url={previewImageUrl}
            alt={assetShortHeader.name}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <CorsAwareImage
            key={previewImageUrl}
            style={style}
            src={previewImageUrl}
            alt={assetShortHeader.name}
          />
        )}
      </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.titleContainer,
          height: assetShortHeader.shortDescription ? 40 : 20,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin style={styles.title} color="inherit">
          {assetShortHeader.name}
        </Text>
        {assetShortHeader.shortDescription && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Text noMargin style={styles.title} size="body2" color="inherit">
            {assetShortHeader.shortDescription}
          </Text>
        )}
      </div>
    </div>
  );
};
