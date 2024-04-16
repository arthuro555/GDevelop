import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from './Grid';
import {
  useResponsiveWindowSize,
  WindowSizeType,
} from './Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module './CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from './CorsAwareImage';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { shortenString } from '../Utils/StringHelpers';
import useForceUpdate from '../Utils/UseForceUpdate';
import { useIsMounted } from '../Utils/UseIsMounted';

const MAX_TILE_SIZE = 300;
const SPACING = 8;

const styles = {
  buttonStyle: {
    textAlign: 'left',
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 4,
    padding: '2px 6px',
  },
  overlayText: {
    color: 'white', // Same color for all themes.
    marginTop: 0,
    marginBottom: 0,
  },
  titleContainerWithMinHeight: {
    // Fix min height to ensure the content stays aligned.
    // 2 line heights (20) + 2 text paddings (6)
    minHeight: 2 * 20 + 2 * 6,
  },
  thumbnailImageWithDescription: {
    display: 'block', // Display as a block to prevent cumulative layout shift.
    objectFit: 'cover',
    verticalAlign: 'middle',
    width: '100%',
    borderRadius: 8,
    border: '1px solid lightgrey',
    boxSizing: 'border-box', // Take border in account for sizing to avoid cumulative layout shift.
    // Prevent cumulative layout shift by enforcing
    // the 16:9 ratio.
    aspectRatio: '16 / 9',
    transition: 'opacity 0.3s ease-in-out',
  },
  dataLoadingSkeleton: {
    // Display a skeleton with the same aspect and border as the images:
    borderRadius: 8,
    aspectRatio: '16 / 9',
  },
  imageLoadingSkeleton: {
    // Display a skeleton with the same aspect and border as the images,
    // and with absolute positioning so that it stays behind the image (until it's loaded).
    position: 'absolute',
    borderRadius: 8,
    aspectRatio: '16 / 9',
  },
} as const;

// Styles to give a visible hover for the mouse cursor.
const useStylesForTileHover = makeStyles(theme =>
  createStyles({
    tile: {
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
  })
);

type OverlayTextPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

const ImageOverlay = ({
  content,
  position,
}: {
  content: React.ReactNode,
  position: OverlayTextPosition
}) => {
  const positionStyles = {
    top: position === 'topLeft' || position === 'topRight' ? 8 : undefined,
    bottom:
      position === 'bottomLeft' || position === 'bottomRight' ? 8 : undefined,
    left: position === 'topLeft' || position === 'bottomLeft' ? 8 : undefined,
    right:
      position === 'topRight' || position === 'bottomRight' ? 8 : undefined,
  } as const;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      style={{
        ...styles.overlay,
        ...positionStyles,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Typography variant="body1" style={styles.overlayText}>
        {content}
      </Typography>
    </div>
  );
};

export type ImageTileComponent = {
  onClick: () => void,
  imageUrl: string,
  title?: string,
  description?: string,
  overlayText?: string | React.ReactNode,
  overlayTextPosition?: OverlayTextPosition
};

type ImageTileGridProps = {
  items: Array<ImageTileComponent>,
  isLoading?: boolean,
  getColumnsFromWindowSize: (windowSize: WindowSizeType, isLandscape: boolean) => number,
  getLimitFromWindowSize?: (windowSize: WindowSizeType, isLandscape: boolean) => number
};

const ImageTileGrid = ({
  items,
  isLoading,
  getColumnsFromWindowSize,
  getLimitFromWindowSize,
}: ImageTileGridProps) => {
  const { windowSize, isLandscape } = useResponsiveWindowSize();
  const tileClasses = useStylesForTileHover();
  const MAX_COLUMNS = getColumnsFromWindowSize('xlarge', isLandscape);
  const limit = getLimitFromWindowSize
    ? getLimitFromWindowSize(windowSize, isLandscape)
    : undefined;
  const itemsToDisplay = limit ? items.slice(0, limit) : items;
  const forceUpdate = useForceUpdate();
  const isMounted = useIsMounted();

  const loadedImageUrls = React.useRef<Set<string>>(new Set<string>());
  const setImageLoaded = React.useCallback(
    (loadedImageUrl: string) => {
      // Give a bit of time to an image to fully render before revealing it.
      setTimeout(() => {
        if (!isMounted) return; // Avoid warnings if the component was removed in the meantime.

        loadedImageUrls.current.add(loadedImageUrl);
        forceUpdate();
      }, 50);
    },
    [forceUpdate, isMounted]
  );

  const columns = getColumnsFromWindowSize(windowSize, isLandscape);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GridList
        cols={columns}
        style={{
          flex: 1,
          maxWidth: (MAX_TILE_SIZE + 2 * SPACING) * MAX_COLUMNS, // Avoid tiles taking too much space on large screens.
        }}
        cellHeight="auto"
        spacing={SPACING * 2}
      >
        {isLoading
          ? new Array(columns).fill(0).map((_, index) => (
              // Display tiles but with skeletons while the data is loading.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GridListTile key={index} classes={tileClasses}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Skeleton
                  variant="rect"
                  width="100%"
                  height="100%"
                  style={styles.dataLoadingSkeleton}
                />
              </GridListTile>
            ))
          : itemsToDisplay.map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GridListTile key={index} classes={tileClasses}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ButtonBase
                  style={styles.buttonStyle}
                  onClick={item.onClick}
                  tabIndex={0}
                  focusRipple
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <div style={styles.imageContainer}>
                      {!loadedImageUrls.current.has(item.imageUrl) ? (
                        // Display a skeleton behind the image while it's loading.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Skeleton
                          variant="rect"
                          width="100%"
                          height="100%"
                          style={styles.imageLoadingSkeleton}
                        />
                      ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CorsAwareImage
                        style={{
                          // Once ready, animate the image display.
                          opacity: loadedImageUrls.current.has(item.imageUrl)
                            ? 1
                            : 0,
                          ...styles.thumbnailImageWithDescription,
                        }}
                        src={item.imageUrl}
                        alt={`thumbnail ${index}`}
                        onLoad={() => setImageLoaded(item.imageUrl)}
                      />
                      {item.overlayText && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <ImageOverlay
                          content={item.overlayText}
                          position={item.overlayTextPosition || 'bottomRight'}
                        />
                      )}
                    </div>
                    {item.title && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <div
                        style={
                          columns === 1
                            ? undefined
                            : styles.titleContainerWithMinHeight
                        }
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text size="sub-title">{item.title}</Text>
                      </div>
                    )}
                    {item.description && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Text size="body" color="secondary">
                        {shortenString(item.description, 120)}
                      </Text>
                    )}
                  </Column>
                </ButtonBase>
              </GridListTile>
            ))}
      </GridList>
    </Line>
  );
};

export default ImageTileGrid;
