// @flow
import * as React from 'react';
import { type AssetShortHeader } from '../Utils/GDevelopServices/Asset';
import ButtonBase from '@material-ui/core/ButtonBase';
import Text from '../UI/Text';
import { CorsAwareImage } from '../UI/CorsAwareImage';

const paddingSize = 10;
const styles = {
  previewBackground: {
    background: 'url("res/transparentback.png") repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    objectFit: 'contain',
    verticalAlign: 'middle',
    pointerEvents: 'none',
  },
  icon: {
    color: '#fff',
  },
  cardContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: 'rgb(0,0,0,0.5)',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

type Props = {|
  size: number,
  assetShortHeader: AssetShortHeader,
  onOpenDetails: () => void,
|};

export const AssetCard = ({ assetShortHeader, onOpenDetails, size }: Props) => {
  return (
    <ButtonBase onClick={onOpenDetails} focusRipple>
      <div style={{ ...styles.cardContainer, width: size, height: size }}>
        <div style={{ ...styles.previewBackground, width: size, height: size }}>
          <CorsAwareImage
            key={assetShortHeader.previewImageUrls[0]}
            style={{
              ...styles.previewImage,
              maxWidth: 128 - 2 * paddingSize,
              maxHeight: 128 - 2 * paddingSize,
            }}
            src={assetShortHeader.previewImageUrls[0]}
            alt={assetShortHeader.name}
          />
        </div>
        <div style={styles.titleContainer}>
          <Text noMargin style={styles.title}>
            {assetShortHeader.name}
          </Text>
          <Text noMargin style={styles.title} size="body2">
            {assetShortHeader.shortDescription}
          </Text>
        </div>
      </div>
    </ButtonBase>
  );
};
