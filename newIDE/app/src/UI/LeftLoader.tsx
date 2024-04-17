import * as React from 'react';

import CircularProgress from './CircularProgress';

const styles = {
  progress: { marginRight: 8, verticalAlign: 'middle' },
} as const;

const LeftLoader = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean | null | undefined;
}) => (
  <span>
    {isLoading && (
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
