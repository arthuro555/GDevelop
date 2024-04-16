import * as React from 'react';
import MuiBadge from '@material-ui/core/Badge';
import { createStyles, makeStyles } from '@material-ui/core';

type BadgeColor = 'secondary' | 'primary' | 'error' | 'success';

const useStyles = (color: BadgeColor) =>
  makeStyles(theme =>
// @ts-expect-error - TS2345 - Argument of type '{ dot?: { backgroundColor: string; } | undefined; root: { flexDirection: "column"; }; anchorOriginTopRightCircle: { top: string; right: string; }; }' is not assignable to parameter of type 'StyleRules<{}, "root" | "dot" | "anchorOriginTopRightCircle">'.
    createStyles({
      root: { flexDirection: 'column' },
      anchorOriginTopRightCircle: {
        top: '8%',
        right: '8%',
      },
      ...(color === 'success'
        ? { dot: { backgroundColor: theme.palette.success.main } }
        : {}),
    })
  )();

type Props = {
  children: React.ReactNode,
  invisible?: boolean,
  overlap?: 'circle',
  /**
   * MuiBadge only allows 'secondary' | 'primary' | 'error' | 'default' as color.
   * In order to use 'success' as color, we use undefined for the color, and
   * override the dot style to use the success color.
   * If you need to use another color, you can do the same.
   */
  color?: 'secondary' | 'primary' | 'error' | 'success'
};

const DotBadge = ({
  children,
  invisible,
  overlap,
  color = 'secondary',
}: Props) => {
  const classes = useStyles(color);
  const colorForBadge = color === 'success' ? undefined : color;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MuiBadge
      color={colorForBadge}
      variant="dot"
      classes={classes}
      invisible={invisible}
      overlap={overlap}
      children={children}
    />
  );
};

export default DotBadge;
