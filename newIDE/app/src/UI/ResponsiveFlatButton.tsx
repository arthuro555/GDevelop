import * as React from 'react';

import FlatButton, { FlatButtonProps } from './FlatButton';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';

/**
 * A button which hides its label on small screens.
 * Same interface as FlatButton.
 */
const ResponsiveFlatButton = (props: FlatButtonProps) => {
  const { isMobile } = useResponsiveWindowSize();

  return <FlatButton {...props} label={isMobile ? '' : props.label} />;
};

export default ResponsiveFlatButton;
