import * as React from 'react';
import {
  AssetShortHeader,
  isPixelArt,
  isPrivateAsset,
} from '../Utils/GDevelopServices/Asset';
import { getPixelatedImageRendering } from '../Utils/CssHelpers';

import Text from '../UI/Text';

import { CorsAwareImage } from '../UI/CorsAwareImage';

import CheckeredBackground from '../ResourcesList/CheckeredBackground';

import AuthorizedAssetImage from './PrivateAssets/AuthorizedAssetImage';

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
  id?: string;
  size: number;
  assetShortHeader: AssetShortHeader;
};

export const AssetCard = ({ id, assetShortHeader, size }: Props) => {
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
    <div id={id} style={{ ...styles.cardContainer, width: size, height: size }}>
      <div style={{ ...styles.previewContainer, width: size, height: size }}>
        <CheckeredBackground />
        {isPrivate ? (
          <AuthorizedAssetImage
            key={previewImageUrl}
            style={style}
            url={previewImageUrl}
            alt={assetShortHeader.name}
          />
        ) : (
          <CorsAwareImage
            key={previewImageUrl}
            style={style}
            src={previewImageUrl}
            alt={assetShortHeader.name}
          />
        )}
      </div>
      <div
        style={{
          ...styles.titleContainer,
          height: assetShortHeader.shortDescription ? 40 : 20,
        }}
      >
{ /* @ts-expect-error - TS2322 - Type '{ readonly overflowWrap: "break-word"; readonly overflow: string; readonly whiteSpace: string; readonly textOverflow: string; }' is not assignable to type '{ marginLeft?: number | undefined; marginRight?: number | undefined; overflow?: "hidden" | undefined; overflowWrap?: "anywhere" | "break-word" | undefined; whiteSpace?: "nowrap" | "pre-wrap" | undefined; ... 6 more ...; maxHeight?: number | undefined; }'. */}
        <Text noMargin style={styles.title} color="inherit">
          {assetShortHeader.name}
        </Text>
        {assetShortHeader.shortDescription && (
// @ts-expect-error - TS2322 - Type '{ readonly overflowWrap: "break-word"; readonly overflow: string; readonly whiteSpace: string; readonly textOverflow: string; }' is not assignable to type '{ marginLeft?: number | undefined; marginRight?: number | undefined; overflow?: "hidden" | undefined; overflowWrap?: "anywhere" | "break-word" | undefined; whiteSpace?: "nowrap" | "pre-wrap" | undefined; ... 6 more ...; maxHeight?: number | undefined; }'.
          <Text noMargin style={styles.title} size="body2" color="inherit">
            {assetShortHeader.shortDescription}
          </Text>
        )}
      </div>
    </div>
  );
};
