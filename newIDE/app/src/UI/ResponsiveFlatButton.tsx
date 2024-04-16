import * as React from 'react';
// @ts-expect-error - TS6142 - Module './FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton, { FlatButtonProps } from './FlatButton';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

/**
 * A button which hides its label on small screens.
 * Same interface as FlatButton.
 */
const ResponsiveFlatButton = (props: FlatButtonProps) => {
  const { isMobile } = useResponsiveWindowSize();
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <FlatButton {...props} label={isMobile ? '' : props.label} />;
};

export default ResponsiveFlatButton;
