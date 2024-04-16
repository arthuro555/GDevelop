import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from './Paper';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  maxWidth: {
    maxWidth: '100%',
  },
} as const;

type Props = {
  children: React.ReactNode,
  maxWidth?: boolean,
  width?: number | string,
  /** Sometimes required on Safari */
  noFullHeight?: boolean,
  noExpand?: boolean
};

/**
 * This is the component to be used to display the standard
 * background of editor/windows/dialogs.
 */
const Background = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Paper
    square
    style={{
      ...styles.container,
      height: props.noFullHeight ? undefined : '100%',
      width: props.width ? props.width : undefined,
      flex: props.noExpand ? undefined : 1,
      ...(props.maxWidth ? styles.maxWidth : undefined),
    }}
    background="dark"
  >
    {props.children}
  </Paper>
);

export default Background;
