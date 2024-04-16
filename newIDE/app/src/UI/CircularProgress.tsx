import * as React from 'react';

import MuiCircularProgress from '@material-ui/core/CircularProgress';

type Props = {
  variant?: 'indeterminate' | 'determinate',
  value?: number | null | undefined,
  size?: number,
  disableShrink?: boolean,
  style?: {
    height?: number,
    width?: number,
    marginLeft?: number,
    marginRight?: number,
    verticalAlign?: 'middle'
  }
};

function CircularProgress(props: Props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MuiCircularProgress
      color="secondary"
      style={props.style}
      size={props.size}
      disableShrink={props.disableShrink}
      variant={props.variant === 'determinate' ? 'static' : props.variant}
// @ts-expect-error - TS2322 - Type 'number | null | undefined' is not assignable to type 'number | undefined'.
      value={props.value}
    />
  );
}

export default CircularProgress;
