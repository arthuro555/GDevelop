import * as React from 'react';
// @ts-expect-error - TS6142 - Module './CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from './CircularProgress';

const styles = {
  progress: { marginLeft: 8, verticalAlign: 'middle' },
} as const;

const RightLoader = ({
  children,
  isLoading,
}: {
  children: React.ReactNode,
  isLoading: boolean | null | undefined
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <span>
    {children}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    {isLoading && <CircularProgress size={20} style={styles.progress} />}
  </span>
);

export default RightLoader;
