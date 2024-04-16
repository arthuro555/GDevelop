import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, marginsSize } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
// @ts-expect-error - TS6142 - Module './SlideshowArrow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Slideshow/SlideshowArrow.tsx', but '--jsx' is not set.
import SlideshowArrow, { useStylesForArrowButtons } from './SlideshowArrow';
import { useScreenType } from '../Responsive/ScreenTypeMeasurer';
import { shouldValidate } from '../KeyboardShortcuts/InteractionKeys';
import useOnResize from '../../Utils/UseOnResize';
import useForceUpdate from '../../Utils/UseForceUpdate';

const styles = {
  skeletonContainer: {
    display: 'flex',
    flex: 1,
  },
  itemSkeleton: { borderRadius: 6 },
  slidesContainer: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 6,
  },
  slideImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 6,
    transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out',
  },
} as const;

const shouldGoLeft = (event: React.KeyboardEvent<HTMLLIElement>) => {
  return event.key === 'ArrowLeft';
};

const shouldGoRight = (event: React.KeyboardEvent<HTMLLIElement>) => {
  return event.key === 'ArrowRight';
};

const getItemLineHeight = ({
  useMobileImage,
  componentWidth,
  itemDesktopRatio,
  itemMobileRatio,
}: {
  useMobileImage: boolean,
  componentWidth: number,
  itemDesktopRatio: number,
  itemMobileRatio: number
}) => {
  const containerWidth = componentWidth - 2 * marginsSize;
  const lineHeight = useMobileImage
    ? containerWidth / itemMobileRatio
    : containerWidth / itemDesktopRatio;

  return lineHeight;
};

const useStylesForContainer = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        '&:hover img': {
          transform: 'scale(1.02)',
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus img': {
          transform: 'scale(1.02)',
          outline: 'none',
        },
      },
    })
  )();

type SlideshowProps = {
  items: Array<{
    id: string,
    imageUrl: string,
    mobileImageUrl: string,
    onClick: () => void | null | undefined
  }> | null | undefined,
  itemDesktopRatio: number,
  itemMobileRatio: number,
  additionalMarginForWidthCalculation?: number
};

const Slideshow = ({
  items,
  itemDesktopRatio,
  itemMobileRatio,

  // The slideshow bases its width on the full window width, so if used in a
  // container, use this prop to calculate the width accurately.
  additionalMarginForWidthCalculation,
}: SlideshowProps) => {
  // Ensure the component is re-rendered when the window is resized.
  useOnResize(useForceUpdate());
  const windowInnerWidth = window.innerWidth;

  const classesForArrowButtons = useStylesForArrowButtons();

  const { isMobile, isLandscape } = useResponsiveWindowSize();
  const shouldUseMobileImage = isMobile && !isLandscape;

  const screenType = useScreenType();
  const isTouchScreen = screenType === 'touch';
  const itemLineHeight = getItemLineHeight({
    useMobileImage: shouldUseMobileImage,
    componentWidth:
      windowInnerWidth - (additionalMarginForWidthCalculation || 0),
    itemDesktopRatio,
    itemMobileRatio,
  });
  const classesForContainer = useStylesForContainer();
  const [isFocusingOrOverContainer, setIsFocusingContainer] = React.useState(
    false
  );
  const leftImageRecentlyTimeoutId = React.useRef(null);
  const nextSlideTimeoutId = React.useRef(null);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleLeftArrowClick = React.useCallback(
    () => {
      if (!items || items.length === 1) return;

      // Clear the timeout to avoid changing the slide while the user
      // is interacting with the slideshow.
      if (nextSlideTimeoutId.current) {
        clearTimeout(nextSlideTimeoutId.current);
        nextSlideTimeoutId.current = null;
      }

      setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1);
    },
    [items, currentSlide]
  );

  const handleRightArrowClick = React.useCallback(
    () => {
      if (!items || items.length === 1) return;

      // Clear the timeout to avoid changing the slide while the user
      // is interacting with the slideshow.
      if (nextSlideTimeoutId.current) {
        clearTimeout(nextSlideTimeoutId.current);
        nextSlideTimeoutId.current = null;
      }

      setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1);
    },
    [items, currentSlide]
  );

  React.useEffect(
    () => {
// @ts-expect-error - TS2322 - Type 'Timeout' is not assignable to type 'null'.
      nextSlideTimeoutId.current = setTimeout(() => {
        handleRightArrowClick();
      }, 5000);
      return () => {
// @ts-expect-error - TS2769 - No overload matches this call.
        clearTimeout(nextSlideTimeoutId.current);
        nextSlideTimeoutId.current = null;
      };
    },
    // The function depends on the currentSlide,
    // which allows to restart the timeout when the slide changes.
    [handleRightArrowClick]
  );

  const handleOverOrFocusContainer = React.useCallback(
    () => {
      // If the user was going out just before, cancel the timeout.
      if (leftImageRecentlyTimeoutId.current) {
        clearTimeout(leftImageRecentlyTimeoutId.current);
        leftImageRecentlyTimeoutId.current = null;
      }
      if (isFocusingOrOverContainer) return;
      setIsFocusingContainer(true);
    },
    [isFocusingOrOverContainer]
  );

  const handleLeaveOrBlurContainer = React.useCallback(
    () => {
      // If this event is triggered multiple times, there already is a timeout
      // so just return.
      if (!isFocusingOrOverContainer || leftImageRecentlyTimeoutId.current)
        return;
// @ts-expect-error - TS2322 - Type 'Timeout' is not assignable to type 'null'.
      leftImageRecentlyTimeoutId.current = setTimeout(() => {
        setIsFocusingContainer(false);
      }, 1000);
    },
    [isFocusingOrOverContainer]
  );

  if (!items) {
    // If they're loading, display a skeleton so that it doesn't jump when loaded.
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Paper square background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Skeleton
              variant="rect"
              height={itemLineHeight}
              style={styles.itemSkeleton}
            />
          </Column>
        </Line>
      </Paper>
    );
  }

  if (!items.length) return null;

  const shouldDisplayArrows =
    items.length > 1 &&
    (isFocusingOrOverContainer || isMobile || isTouchScreen);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper square background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.slidesContainer,
          height: itemLineHeight,
        }}
        onPointerOver={handleOverOrFocusContainer}
        onPointerLeave={handleLeaveOrBlurContainer}
        tabIndex={0}
// @ts-expect-error - TS2322 - Type '(event: React.KeyboardEvent<HTMLLIElement>) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
        onKeyUp={(event: React.KeyboardEvent<HTMLLIElement>): void => {
          if (shouldValidate(event)) {
            const item = items[currentSlide];
            if (item && item.onClick) item.onClick();
          } else if (shouldGoLeft(event)) {
            handleLeftArrowClick();
          } else if (shouldGoRight(event)) {
            handleRightArrowClick();
          }
        }}
        onFocus={handleOverOrFocusContainer}
        onBlur={handleLeaveOrBlurContainer}
        className={classesForContainer.root}
      >
        {shouldDisplayArrows && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SlideshowArrow
            onClick={handleLeftArrowClick}
            position="left"
            classes={classesForArrowButtons}
          />
        )}
        {items.map((item, index) => {
          return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <img
              src={shouldUseMobileImage ? item.mobileImageUrl : item.imageUrl}
              alt={`Slideshow item for ${item.id}`}
              style={{
                ...styles.slideImage,
                aspectRatio: shouldUseMobileImage
                  ? itemMobileRatio
                  : itemDesktopRatio,
                ...(index === currentSlide
                  ? { opacity: 1, zIndex: 2 } // Update the opacity for the transition effect.
                  : { opacity: 0, zIndex: 1 }), // Update the z-index so it's on top of the other images, useful for keyboard navigation and hover.
              }}
              key={item.id}
              onClick={item.onClick}
            />
          );
        })}
        {shouldDisplayArrows && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SlideshowArrow
            onClick={handleRightArrowClick}
            position="right"
            classes={classesForArrowButtons}
          />
        )}
      </div>
    </Paper>
  );
};

export default Slideshow;
