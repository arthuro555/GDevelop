import * as React from 'react';
import { instructionInvalidParameter } from './ClassNames';

type Props = {
  children: React.ReactNode,
  isEmpty?: boolean
};

/**
 * Displayed when a parameter is invalid
 */
const InvalidParameterValue = ({
  children,
  isEmpty,
}: Props) =>
  isEmpty ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <span className={instructionInvalidParameter}>&lt; {children} &gt;</span>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <span className={instructionInvalidParameter}>{children}</span>
  );

export default InvalidParameterValue;
