import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-measure'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-measure/dist/index.cjs.js' implicitly has an 'any' type.
import Measure from 'react-measure';

const styles = {
  flexContainer: { display: 'flex', flex: 1, position: 'relative' },
} as const;

type Props = {
  children: (
    arg1: {
      width: number,
      height: number
    },
  ) => React.ReactElement
};

/**
 * Take a component and pass the maximum size that the component can take
 * as width and height props.
 */
export const FullSizeMeasurer = ({
  children,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Measure bounds>
{ /* @ts-expect-error - TS7031 - Binding element 'contentRect' implicitly has an 'any' type. | TS7031 - Binding element 'measureRef' implicitly has an 'any' type. */}
    {({ contentRect, measureRef }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
