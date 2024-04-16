import * as React from 'react';

import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

const styles = {
  linearProgress: { flex: 1 },
} as const;

type Props = {
  expand?: boolean,
  value?: number | null | undefined
};

function ColoredLinearProgress(props: Props) {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const classes = makeStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: gdevelopTheme.paper.backgroundColor.medium,
    },
    bar: {
      borderRadius: 5,
      backgroundColor:
        props.value === 100
          ? gdevelopTheme.linearProgress.color.complete
          : gdevelopTheme.linearProgress.color.incomplete,
    },
  })();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MuiLinearProgress
      classes={classes}
      style={styles.linearProgress}
      variant="determinate"
// @ts-expect-error - TS2322 - Type 'number | null | undefined' is not assignable to type 'number | undefined'.
      value={props.value}
    />
  );
}

export default ColoredLinearProgress;
