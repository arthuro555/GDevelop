import * as React from 'react';
import MuiBadge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  children: React.ReactNode,
  badgeContent?: React.ReactNode,
  color?: 'error' | 'primary' | 'secondary' | 'default',
  variant?: 'dot',
  forcedColor?: string,
  invisible?: boolean,
  overlap?: 'circle'
};

const Badge = ({
  forcedColor,
  ...otherProps
}: Props) => {
  const stylesForBadge = React.useMemo(
    () =>
      forcedColor
        ? makeStyles({
            badge: { backgroundColor: forcedColor },
          })
        : () => {},
    [forcedColor]
  );
  const classes = stylesForBadge();
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call.
  return <MuiBadge {...otherProps} classes={classes} />;
};

export default Badge;
