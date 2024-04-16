import * as React from 'react';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import { createStyles, makeStyles } from '@material-ui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../UI/CustomSvgIcons/ChevronArrowRight';
import { shouldValidate } from '../KeyboardShortcuts/InteractionKeys';

const arrowWidth = 30;

const styles = {
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 4,
  },
} as const;

// We create the style outside of this component to avoid it
// being re-created at each render.
export const useStylesForArrowButtons = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        '&:hover': {
          filter:
            theme.palette.type === 'dark'
              ? 'brightness(130%)'
              : 'brightness(90%)',
        },
        '&:focus': {
          filter:
            theme.palette.type === 'dark'
              ? 'brightness(130%)'
              : 'brightness(90%)',
          outline: 'none',
        },
        transition: 'filter 100ms ease',
      },
    })
  )();

type SlideshowArrowProps = {
  onClick: () => void,
  position: 'left' | 'right',
  classes: any
};

const SlideshowArrow = ({
  onClick,
  position,
  classes,
}: SlideshowArrowProps) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      className={classes.root}
      style={{
        ...styles.arrowContainer,
        backgroundColor: gdevelopTheme.paper.backgroundColor.light,
        width: arrowWidth,
        height: arrowWidth,
        ...(position === 'left' ? { left: 5 } : { right: 5 }),
        zIndex: 3,
        top: `calc(50% - ${Math.floor(arrowWidth / 2)}px)`,
      }}
      onClick={onClick}
      tabIndex={0}
// @ts-expect-error - TS2322 - Type '(event: React.KeyboardEvent<HTMLLIElement>) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
      onKeyUp={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onClick();
          // Ensure we only trigger the arrow action, not the parent container's action.
          event.stopPropagation();
        }
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {position === 'left' ? <ChevronArrowLeft /> : <ChevronArrowRight />}
    </div>
  );
};

export default SlideshowArrow;
