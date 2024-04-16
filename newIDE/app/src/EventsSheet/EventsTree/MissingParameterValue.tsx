import * as React from 'react';
import { instructionMissingParameter } from './ClassNames';

/**
 * Displayed when a parameter is missing (i.e: empty and not optional)
 */
const MissingParameterValue = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <span className={instructionMissingParameter}>
    {/* If span is empty, the browser renders the span with an unwanted vertical offset. */}
    &nbsp;
  </span>
);

export default MissingParameterValue;
