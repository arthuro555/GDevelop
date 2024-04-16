import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-measure'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-measure/dist/index.cjs.js' implicitly has an 'any' type.
import Measure from 'react-measure';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
// @ts-expect-error - TS6142 - Module './CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from './CorsAwareImage';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from './Grid';
import { shouldValidate } from './KeyboardShortcuts/InteractionKeys';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from './Layout';

type MediaItem = {
  kind: 'audio' | 'image',
  url: string
};

const styles = {
  selectedMedia: {
    width: '100%',
    // Prevent cumulative layout shift by enforcing
    // the 16:9 ratio.
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    display: 'inline-block',
    outlineOffset: -1,
    borderRadius: 4,
  },
  imageCarouselItem: {
    height: 80,
    aspectRatio: '16 / 9',
    display: 'block',
    borderRadius: 4,
  },
  mobileImageCarouselItem: {
    aspectRatio: '16 / 9',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desktopGallery: {
    flex: 1,
    display: 'grid',
    grid: 'auto / auto-flow max-content',
    overflowX: 'scroll',
    gap: '8px',
  },
  mobileGrid: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    scrollSnapType: 'x mandatory',
  },
  flex: {
    display: 'flex',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  disabledText: { opacity: 0.6 },
} as const;

const GRID_SPACING = 1;

type Props = {
  mediaItems: Array<MediaItem>,
  /**
   * Alt text inserted for each image tag.
   * The string `{mediaIndex}` will be replaced with media actual index.
   * For instance: "Asset pack preview image {mediaIndex}"
   */
  altTextTemplate: string,
  horizontalOuterMarginToEatOnMobile?: number
};

const ResponsiveMediaGallery = ({
  mediaItems,
  altTextTemplate,
  horizontalOuterMarginToEatOnMobile,
}: Props) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = React.useState<number>(0);
  const { isMobile } = useResponsiveWindowSize();

  const mobileExtremeItemsPadding =
    isMobile && horizontalOuterMarginToEatOnMobile
      ? 2 * horizontalOuterMarginToEatOnMobile
      : 0;

  const classesForGridContainer = React.useMemo(
    () =>
      makeStyles({
        'spacing-xs-1': {
          margin: 0, // Prevent grid to apply negative margin, creating unwanted scroll bars.
          // Remove padding for first and last element to keep images aligned on component max width
          '& > .MuiGrid-item:first-child': {
            paddingLeft: mobileExtremeItemsPadding,
          },
          '& > .MuiGrid-item:last-child': {
            paddingRight: mobileExtremeItemsPadding,
          },
        },
// @ts-expect-error - TS2769 - No overload matches this call.
        root: isMobile
          ? {
              scrollbarHeight: 'none' /* For Firefox */,
              '-ms-overflow-style': 'none' /* For Internet Explorer and Edge */,
              '&::-webkit-scrollbar': {
                height: 0 /* For Chrome, Safari, and Opera */,
              },
            }
          : undefined,
      }),
    [mobileExtremeItemsPadding, isMobile]
  )();

  const [
    mobileGridClientWidth,
    setMobileGridClientWidth,
  ] = React.useState<number>(0);
  const [mobileGridScrollX, setMobileGridScrollX] = React.useState(0);
  const [
    currentlyViewedImageIndex,
    setCurrentlyViewedImageIndex,
  ] = React.useState<number>(0);

  const mobileImageWidth =
    Math.max(
      mobileGridClientWidth -
      30 - // Width kept for user to see that there's an image after or before
        (horizontalOuterMarginToEatOnMobile || 0),
      0
    ) || 320; // Set a default width if the component is not yet measured, to avoid layout shift and a scroll to trigger.

  React.useEffect(
    () => {
      if (mobileImageWidth && mobileGridScrollX) {
        const newCurrentlyViewedImageIndex = Math.round(
          mobileGridScrollX / (mobileImageWidth + GRID_SPACING)
        );
        setCurrentlyViewedImageIndex(newCurrentlyViewedImageIndex);
      }
    },
    [mobileImageWidth, mobileGridScrollX]
  );

  const selectedMedia = mediaItems[selectedMediaIndex];

  if (isMobile) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div
        style={{
          ...styles.flexColumn,
          marginLeft: horizontalOuterMarginToEatOnMobile
            ? -horizontalOuterMarginToEatOnMobile
            : 0,
          marginRight: horizontalOuterMarginToEatOnMobile
            ? -horizontalOuterMarginToEatOnMobile
            : 0,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Measure
          bounds
// @ts-expect-error - TS7006 - Parameter 'contentRect' implicitly has an 'any' type.
          onResize={contentRect => {
            setMobileGridClientWidth(contentRect.bounds.width);
          }}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'contentRect' implicitly has an 'any' type. | TS7031 - Binding element 'measureRef' implicitly has an 'any' type. */}
          {({ contentRect, measureRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.flex} ref={measureRef}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Grid
                classes={classesForGridContainer}
                container
                spacing={GRID_SPACING}
                wrap="nowrap"
                style={styles.mobileGrid}
                onScroll={(event: React.SyntheticEvent<HTMLDivElement>) =>
                  setMobileGridScrollX(event.currentTarget.scrollLeft)
                }
              >
                {mediaItems.map(({ kind, url }, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Grid
                    item
                    key={url}
                    style={{
                      scrollSnapAlign: horizontalOuterMarginToEatOnMobile
                        ? 'center'
                        : 'start',
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CardMedia>
                      {kind === 'image' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <CorsAwareImage
                          src={url}
                          style={{
                            ...styles.mobileImageCarouselItem,
                            height: mobileImageWidth / (16 / 9),
                          }}
                          alt={altTextTemplate.replace(
                            /{mediaIndex}/g,
                            String(selectedMediaIndex + 1)
                          )}
                        />
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <div style={styles.mobileImageCarouselItem}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <audio controls src={url}>
                            Audio preview is unsupported.
                          </audio>
                        </div>
                      )}
                    </CardMedia>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </Measure>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin size="body2" style={styles.disabledText}>
            {currentlyViewedImageIndex + 1}/{mediaItems.length}
          </Text>
        </Line>
      </div>
    );
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {selectedMedia.kind === 'image' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <CorsAwareImage
          style={styles.selectedMedia}
          src={selectedMedia.url}
          alt={altTextTemplate.replace(
            /{mediaIndex}/g,
            String(selectedMediaIndex + 1)
          )}
        />
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div style={styles.selectedMedia}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <audio controls src={selectedMedia.url}>
            Audio preview is unsupported.
          </audio>
        </div>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.desktopGallery}>
        {mediaItems.map(({ kind, url }, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            key={url}
            onClick={() => setSelectedMediaIndex(index)}
            tabIndex={0}
            style={{
              ...styles.carouselItem,
              outline:
                index === selectedMediaIndex ? 'solid 1px white' : undefined,
            }}
// @ts-expect-error - TS2322 - Type '(event: React.KeyboardEvent<HTMLLIElement>) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
            onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
              if (shouldValidate(event)) {
                setSelectedMediaIndex(index);
              }
            }}
          >
            {kind === 'image' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <CorsAwareImage
                src={url}
                style={styles.imageCarouselItem}
                alt={altTextTemplate.replace(
                  /{mediaIndex}/g,
                  (index + 1).toString()
                )}
              />
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <img
                src="res/audio-placeholder.jpg"
                style={styles.imageCarouselItem}
                alt="sound"
              />
            )}
          </div>
        ))}
      </div>
    </ColumnStackLayout>
  );
};

export default ResponsiveMediaGallery;
