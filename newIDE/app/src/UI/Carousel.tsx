import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';

import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from './Grid';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module './FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from './FlatButton';
import { shouldValidate } from './KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module './AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from './AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module './CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from './CorsAwareImage';
import { useIsMounted } from '../Utils/UseIsMounted';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from './CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from './CustomSvgIcons/ChevronArrowRight';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

type OverlayTextPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type CarouselThumbnail = {
  id: string,
  title: string,
  thumbnailUrl: string,
  overlayText?: React.ReactNode,
  overlayTextPosition?: OverlayTextPosition,
  readonly link?: string,
  readonly onClick?: () => void
};

type SkeletonThumbnail = (CarouselThumbnail) & {
  skeleton: boolean
};

type Props<ThumbnailType> = {
  title: React.ReactNode,
  items: Array<ThumbnailType> | null | undefined,
  additionalAction?: React.ReactNode,
  onBrowseAllClick?: () => void,
  browseAllLink?: string,
  browseAllLabel: React.ReactNode,
  browseAllIcon: React.ReactNode,
  displayItemTitles?: boolean,
  error?: React.ReactNode,
  roundedImages?: boolean,
  displayArrowsOnDesktop?: boolean
};

const referenceSizesByWindowSize = {
  imageHeight: {
    small: 80,
    medium: 130,
    large: 150,
    xlarge: 170,
  },
} as const;

const cellSpacing = 12;
const titleHeight = 24;
const spacerSize = 4;
const focusItemBorderWidth = 2;
const skeletonNumber = 6;
const randomNumbers = Array(skeletonNumber)
  .fill(0)
  .map(e => Math.random());

const styles = {
  itemTitle: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    overflowWrap: 'break-word',
    whiteSpace: 'nowrap',
  },
  gridList: { position: 'relative' },
  image: {
    display: 'block',
    objectFit: 'cover',
    border: '1px solid lightgrey',
    boxSizing: 'border-box', // Take border in account for sizing to avoid cumulative layout shift.
    // Prevent cumulative layout shift by enforcing
    // the 16:9 ratio.
    aspectRatio: '16 / 9',
    transition: 'opacity 0.3s ease-in-out',
  },
  error: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  itemTitleContainer: { height: titleHeight },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 4,
  },
  container: { display: 'flex', position: 'relative' },
  overlay: {
    position: 'absolute',
    borderRadius: 4,
    padding: '2px 4px',
    backdropFilter: 'brightness(40%)',
    color: 'white', // Same color for all themes.
  },
} as const;

const useStylesForArrowButtons = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        '&:hover': {
          filter:
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
            theme.palette.type === 'dark'
              ? 'brightness(130%)'
              : 'brightness(90%)',
        },
        transition: 'filter 100ms ease',
      },
    })
  )();

const useStylesForGridList = makeStyles({
  root: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    flexWrap: 'nowrap',
    scrollbarWidth: 'none' /* For modern browsers */,
    '-ms-overflow-style': 'none' /* For Internet Explorer and Edge */,
    '&::-webkit-scrollbar': {
      height: 0 /* For old hrome, Safari, and Opera */,
    },
  },
});

const useStylesForGridListItem = makeStyles(theme =>
  createStyles({
    root: {
      width: 'unset !important',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      '&:focus': {
        transform: 'scale(1.02)',
        outline: 'none',
      },
    },
    tile: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

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
      {content}
    </div>
  );
};

const Carousel = <ThumbnailType extends CarouselThumbnail>(
  {
    title,
    items,
    additionalAction,
    browseAllLink,
    onBrowseAllClick,
    browseAllLabel,
    browseAllIcon,
    error,
    displayItemTitles = true,
    roundedImages = false,
    displayArrowsOnDesktop = false,
  }: Props<ThumbnailType>,
) => {
  const [
    shouldDisplayLeftArrow,
    setShouldDisplayLeftArrow,
  ] = React.useState<boolean>(false);
  const [
    shouldDisplayRightArrow,
    setShouldDisplayRightArrow,
  ] = React.useState<boolean>(displayArrowsOnDesktop);
  const [
    isMouseOverContainer,
    setIsMouseOverContainer,
  ] = React.useState<boolean>(false);
  const { windowSize, isMobile } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const classesForArrowButtons = useStylesForArrowButtons();
  const classesForGridList = useStylesForGridList();
  const classesForGridListItem = useStylesForGridListItem();
  const scrollView = React.useRef<HTMLUListElement | null | undefined>(null);
  const [hoveredElement, setHoveredElement] = React.useState<HTMLElement | null | undefined>(null);
  const areItemsSet = items && items.length > 0;
  const itemsToDisplay =
    items && items.length > 0
      ? items
      : Array(skeletonNumber)
          .fill({
            skeleton: true,
            title: '',
            thumbnail: '',
          })
          .map((item, index) => ({ ...item, id: `skeleton${index}` }));

  const isMounted = useIsMounted();
  const forceUpdate = useForceUpdate();

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

  const imageHeight = referenceSizesByWindowSize.imageHeight[windowSize];
  const arrowWidth = 30;
  const cellWidth = (16 / 9) * imageHeight;
  const widthUnit = cellWidth + cellSpacing;

  const cellHeight =
    imageHeight +
    (displayItemTitles ? titleHeight + spacerSize : 2 * focusItemBorderWidth); // Take focus border into account to make sure it is not cut (box-sizing: content-box not working)

  const renderImage = React.useCallback(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    (item: ThumbnailType | SkeletonThumbnail): React.ReactElement => <CorsAwareImage
      src={item.thumbnailUrl}
      style={{
        ...styles.image,
        // Once ready, animate the image display.
        opacity: loadedImageUrls.current.has(item.thumbnailUrl) ? 1 : 0,
        height: imageHeight,
        minHeight: imageHeight,
        width: cellWidth,
        borderRadius: roundedImages ? 8 : 0,
      }}
      alt={item.title}
      title={item.title}
      onLoad={() => setImageLoaded(item.thumbnailUrl)}
    />,
    [cellWidth, imageHeight, roundedImages, setImageLoaded]
  );

  const openLinkCallback = (link: string): () => void => (): void => {
    Window.openExternalURL(link);
  };

  const renderThumbnail = React.useCallback(
    (item: ThumbnailType | SkeletonThumbnail): React.ReactNode | null | undefined => {
// @ts-expect-error - TS2339 - Property 'skeleton' does not exist on type 'SkeletonThumbnail | ThumbnailType'.
      if (!item.skeleton && !item.link && !item.thumbnailUrl) return null;
      if (item.thumbnailUrl || item.link) {
        return renderImage(item);
      }
// @ts-expect-error - TS2339 - Property 'skeleton' does not exist on type 'SkeletonThumbnail | ThumbnailType'.
      if (item.skeleton) {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Skeleton
            variant="rect"
            height={imageHeight}
            width={cellWidth}
            style={{
              borderRadius: roundedImages ? 8 : 0,
            }}
          />
        );
      }
    },
    [renderImage, cellWidth, imageHeight, roundedImages]
  );

  const renderItemTitle = React.useCallback(
    (item: ThumbnailType | SkeletonThumbnail, index: number): React.ReactNode | null | undefined => {
      if (!displayItemTitles) return null;
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Spacer />
          {item.title ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={{ ...styles.itemTitleContainer, width: cellWidth }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin style={styles.itemTitle}>
                {item.title}
              </Text>
            </div>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Skeleton
              variant="rect"
              height={titleHeight}
              width={(cellWidth / 3) * (1 + 2 * randomNumbers[index])} // Make rectangles of different lengths so that the UI feels more "alive".
            />
          )}
        </>
      );
    },
    [cellWidth, displayItemTitles]
  );

  const roundScroll = React.useCallback(
    (value: number): number => {
      return Math.round(value / widthUnit) * widthUnit;
    },
    [widthUnit]
  );

  const getVisibleThumbnailsCount = React.useCallback(
    (element: HTMLElement): number => Math.max(Math.floor(element.offsetWidth / widthUnit), 1),
    [widthUnit]
  );

  const computeScroll = React.useCallback(
    (direction: 'left' | 'right', scrollViewElement: HTMLUListElement): number => {
      const visibleThumbnailsCount = getVisibleThumbnailsCount(
        scrollViewElement
      );
      const scale = visibleThumbnailsCount * widthUnit;

      const currentScroll = scrollViewElement.scrollLeft;
      const currentFirstVisibleItemIndex = Math.round(
        currentScroll / widthUnit
      );

      if (
        direction === 'right' &&
        currentFirstVisibleItemIndex >
          itemsToDisplay.length - visibleThumbnailsCount - 1
      )
        return 0;

      return roundScroll(
        scrollViewElement.scrollLeft + scale * (direction === 'left' ? -1 : 1)
      );
    },
    [widthUnit, itemsToDisplay, roundScroll, getVisibleThumbnailsCount]
  );

  const onClickArrow = React.useCallback(
    (direction: 'left' | 'right'): void => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;
      const newScrollPosition = computeScroll(direction, scrollViewElement);

      scrollViewElement.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    },
    [computeScroll]
  );

  const handleScroll = React.useCallback(
    (): void => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;
      if (!displayArrowsOnDesktop) return;

      const isScrollAtStart = scrollViewElement.scrollLeft === 0;
      const isScrollAtEnd =
        scrollViewElement.scrollLeft >=
        scrollViewElement.scrollWidth -
          scrollViewElement.clientWidth -
          // margin to avoid having the arrow flickering when the tile is scaling on hover.
          5;
      const shouldToggleLeftArrowVisibility =
        isScrollAtStart === shouldDisplayLeftArrow;
      const shouldToggleRightArrowVisibility =
        isScrollAtEnd === shouldDisplayRightArrow;
      if (shouldToggleLeftArrowVisibility)
        setShouldDisplayLeftArrow(!shouldDisplayLeftArrow);
      if (shouldToggleRightArrowVisibility)
        setShouldDisplayRightArrow(!shouldDisplayRightArrow);
    },
    [shouldDisplayLeftArrow, shouldDisplayRightArrow, displayArrowsOnDesktop]
  );

  const handleScrollEnd = React.useCallback(
    (): void => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      scrollViewElement.scrollTo({
        left: roundScroll(scrollViewElement.scrollLeft),
        behavior: 'smooth',
      });
    },
    [roundScroll]
  );

  const onFocusItem = React.useCallback(
    (event: React.FocusEvent<HTMLLIElement>, index: number): void => {
      // Clicked element receives focus before click event is triggered.
      // If a scroll occurs before onmouseup event and the element is scrolled out
      // of the cursor, the click of the user is logically but wrongly ignored.
      if (event.currentTarget !== hoveredElement) {
        const element = event.currentTarget;
        const parent = element.offsetParent;
        if (!parent || !(parent instanceof HTMLElement)) return;

        const visibleThumbnailsCount = getVisibleThumbnailsCount(parent);

        // Browsers handle differently a focus on an out-of-sight element.
        // To ensure the behavior is the same across all browsers, we compute
        // the scroll value to reach to make the tab navigation pleasant.
        const elementBoundingRect = element.getBoundingClientRect();
        const parentBoundingRect = parent.getBoundingClientRect();
        const isHiddenLeft =
          Math.round(elementBoundingRect.left - parentBoundingRect.left) < 0;
        const isHiddenRight =
          Math.round(elementBoundingRect.right - parentBoundingRect.right) >= 0;
        if (isHiddenLeft)
          parent.scroll({
            left: element.offsetLeft,
          });
        else if (isHiddenRight)
          parent.scroll({
            left: widthUnit * (index - visibleThumbnailsCount + 1),
          });
      }
    },
    [getVisibleThumbnailsCount, hoveredElement, widthUnit]
  );

  React.useEffect(
    () => {
      const scrollViewElement = scrollView.current;
      if (!scrollViewElement) return;

      // Add event listeners on component mount. There is no need to
      // remove them with a cleanup function because scrollview element
      // does not change and they will be destroyed when the element is
      // removed from the DOM.
      scrollViewElement.addEventListener('scroll', handleScroll);
      scrollViewElement.addEventListener('touchend', handleScrollEnd);
      scrollViewElement.addEventListener('touchleave', handleScrollEnd);
    },
    [handleScroll, handleScrollEnd]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="section-title">{title}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
          {additionalAction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
              {additionalAction}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
            </>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            onClick={
              onBrowseAllClick ||
              (browseAllLink ? openLinkCallback(browseAllLink) : () => {})
            }
            label={
              isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Browse</Trans> // Short label on mobile.
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                browseAllLabel || <Trans>Browse all</Trans>
              )
            }
            leftIcon={browseAllIcon}
          />
        </Line>
      </Line>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={styles.container}
        onMouseEnter={() => setIsMouseOverContainer(true)}
        onMouseLeave={() => setIsMouseOverContainer(false)}
      >
        {displayArrowsOnDesktop &&
          isMouseOverContainer &&
          !isMobile &&
          shouldDisplayLeftArrow &&
          areItemsSet && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div
              className={classesForArrowButtons.root}
              style={{
                ...styles.arrowContainer,
                backgroundColor: gdevelopTheme.paper.backgroundColor.light,
                width: arrowWidth,
                height: arrowWidth,
                left: 5,
                zIndex: 1,
                top: `calc(50% - ${Math.floor(arrowWidth / 2)}px)`,
              }}
              onClick={() => onClickArrow('left')}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ChevronArrowLeft />
            </div>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div
          style={{
            width: '100%',
          }}
        >
          {error ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={{ ...styles.error, height: cellHeight }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AlertMessage kind="warning">{error}</AlertMessage>
            </div>
          ) : (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <GridList
              classes={classesForGridList}
              cols={itemsToDisplay.length}
              cellHeight={cellHeight}
              spacing={cellSpacing}
              style={styles.gridList}
              ref={scrollView}
            >
              {itemsToDisplay.map((item, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GridListTile
                  classes={classesForGridListItem}
                  key={item.id}
                  tabIndex={0}
                  onFocus={event => onFocusItem(event, index)}
                  onMouseEnter={event => setHoveredElement(event.currentTarget)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
                    if (shouldValidate(event)) {
                      if (item.link) openLinkCallback(item.link)();
                      if (item.onClick) item.onClick();
                    }
                  }}
                  onClick={
                    item.link
                      ? openLinkCallback(item.link)
                      : item.onClick
                      ? item.onClick
                      : null
                  }
                >
                  {renderThumbnail(item)}
                  {item.overlayText &&
                    loadedImageUrls.current.has(item.thumbnailUrl) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ImageOverlay
                        content={item.overlayText}
                        position={item.overlayTextPosition || 'bottomRight'}
                      />
                    )}
                  {renderItemTitle(item, index)}
                </GridListTile>
              ))}
            </GridList>
          )}
        </div>
        {displayArrowsOnDesktop &&
          isMouseOverContainer &&
          !isMobile &&
          shouldDisplayRightArrow &&
          areItemsSet && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div
              className={classesForArrowButtons.root}
              style={{
                ...styles.arrowContainer,
                backgroundColor: gdevelopTheme.paper.backgroundColor.light,
                width: arrowWidth,
                height: arrowWidth,
                right: 0,
                top: `calc(50% - ${Math.floor(arrowWidth / 2)}px)`,
              }}
              onClick={() => onClickArrow('right')}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ChevronArrowRight />
            </div>
          )}
      </div>
    </Column>
  );
};

export default Carousel;
