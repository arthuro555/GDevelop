import * as React from 'react';
import { dropIndicator, cantDropIndicator } from './ClassNames';

/**
 * A Drop indicator line for the events sheet
 */
export default function DropIndicator({
 canDrop,
}: {
 canDrop: boolean
}) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <div className={canDrop ? dropIndicator : cantDropIndicator} />;
}
