import * as React from 'react';
// @ts-expect-error - TS6142 - Module './RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton, { RaisedButtonProps } from './RaisedButton';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

/**
 * A button which hides its label on small screens.
 * Same interface as RaisedButton.
 */
const ResponsiveRaisedButton = (props: RaisedButtonProps) => {
  const { isMobile } = useResponsiveWindowSize();
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <RaisedButton {...props} label={isMobile ? '' : props.label} />;
};

export default ResponsiveRaisedButton;
