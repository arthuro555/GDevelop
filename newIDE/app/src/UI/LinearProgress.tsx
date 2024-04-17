import * as React from 'react';

import MuiLinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  variant?: 'indeterminate' | 'determinate';
  value?: number | null | undefined;
  style?: {
    height?: number;
    borderRadius?: number;
    width?: number;
  };
};

function LinearProgress(props: Props) {
  return (
    <MuiLinearProgress
      color="secondary"
      style={{ flex: 1, ...props.style }}
      variant={props.variant}
      // @ts-expect-error - TS2322 - Type 'number | null | undefined' is not assignable to type 'number | undefined'.
      value={props.value}
    />
  );
}

export default LinearProgress;
