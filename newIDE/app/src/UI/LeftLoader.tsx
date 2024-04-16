import * as React from 'react';
// @ts-expect-error - TS6142 - Module './CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from './CircularProgress';

const styles = {
  progress: { marginRight: 8, verticalAlign: 'middle' },
} as const;

const LeftLoader = ({
  children,
  isLoading,
}: {
  children: React.ReactNode,
  isLoading: boolean | null | undefined
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <span>
    {isLoading && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CircularProgress
        // From size 20, this component applied to a Dialog button triggers glitches
        // when rotating: the scrollbar appears and disappears each time the diagonal
        // of the square box containing the round SVG is vertical.
        size={18}
        style={styles.progress}
      />
    )}
    {children}
  </span>
);

export default LeftLoader;
