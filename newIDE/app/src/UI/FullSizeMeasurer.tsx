import * as React from 'react';

import Measure from 'react-measure';

const styles = {
  flexContainer: { display: 'flex', flex: 1, position: 'relative' },
} as const;

type Props = {
  children: (arg1: { width: number; height: number }) => React.ReactElement;
};

/**
 * Take a component and pass the maximum size that the component can take
 * as width and height props.
 */
export const FullSizeMeasurer = ({ children }: Props) => (
  <Measure bounds>
    {({ contentRect, measureRef }) => (
      <div style={styles.flexContainer} ref={measureRef}>
        {!!contentRect &&
          !!contentRect.bounds &&
          children({
            width: contentRect.bounds.width,
            height: contentRect.bounds.height,
          })}
      </div>
    )}
  </Measure>
);
