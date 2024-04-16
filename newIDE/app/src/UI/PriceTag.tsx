import * as React from 'react';
import { makeStyles } from '@material-ui/core';

type Props = {
  label: React.ReactNode,
  /**
   * To be used when the component is over an element for which
   * we don't control the background (e.g. an image).
   */
  withOverlay?: boolean
};

const useStyles = makeStyles(theme => {
  /**
   * Customize component with overlay:
   * - for dark themes (light font color on dark background), theme values are used.
   * - for light themes, we want to keep the same principle (a light font color on
   *   a dark background) so we override Material UI behavior that would use a dark
   *   font on a light background.
   */
  return {
    container: {
      borderRadius: 4,
      padding: '2px 4px',
      backdropFilter: props =>
// @ts-expect-error - TS2339 - Property 'withOverlay' does not exist on type '{}'.
        props.withOverlay && theme.palette.type === 'light'
          ? 'brightness(40%)'
          : undefined,
      backgroundColor: props =>
// @ts-expect-error - TS2339 - Property 'withOverlay' does not exist on type '{}'.
        props.withOverlay && theme.palette.type === 'light'
          ? undefined
// @ts-expect-error - TS2339 - Property 'alternate' does not exist on type 'TypeBackground'.
          : theme.palette.background.alternate.startsWith('#')
// @ts-expect-error - TS2339 - Property 'alternate' does not exist on type 'TypeBackground'.
          ? theme.palette.background.alternate + 'BB' // manually add opacity to the background hex color
// @ts-expect-error - TS2339 - Property 'alternate' does not exist on type 'TypeBackground'.
          : theme.palette.background.alternate,
      color: props =>
// @ts-expect-error - TS2339 - Property 'withOverlay' does not exist on type '{}'.
        props.withOverlay && theme.palette.type === 'light'
          ? '#FAFAFA'
          : undefined,
    },
  };
});

function PriceTag({
  label,
  withOverlay,
}: Props) {
  const classes = useStyles({ withOverlay });

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <div className={classes.container}>{label}</div>;
}

export default PriceTag;
