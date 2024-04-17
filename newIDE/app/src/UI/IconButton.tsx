import * as React from 'react';
import MUIIconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { I18n } from '@lingui/react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import { adaptAcceleratorString } from '../UI/AcceleratorString';
import { tooltipEnterDelay } from './Tooltip';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
import { makeStyles } from '@material-ui/core/styles';

type IconProps = // Support a few specific icons from icomoon-font.css

    | {
        children: React.ReactNode;
      }
    | {
        className:
          | 'icon-youtube'
          | 'icon-twitter'
          | 'icon-facebook'
          | 'icon-discord'
          | 'icon-reddit';
      };

// We support a subset of the props supported by Material-UI v0.x IconButton
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = IconProps & {
  onClick?: (ev?: any) => undefined | Promise<undefined>;
  target?: string;
  onContextMenu?: () => void;
  disabled?: boolean;
  selected?: boolean;
  edge?: 'start' | 'end' | false;
  id?: string;
  style?: {
    padding?: number | string;
    width?: number;
    height?: number;
    cursor?: 'pointer';
    transform?: string;
    transition?: string;
    opacity?: number;
    readonly fontSize?: 'inherit';
    readonly borderRadius?: number;
    margin?: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
    marginBottom?: number;
    visibility?: 'visible' | 'hidden';
  };
  size?: 'small';
  tooltip?: MessageDescriptor;
  acceleratorString?: string;
  ['aria-label']?: string;
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  color?: 'default';
};

// @ts-expect-error - TS2769 - No overload matches this call.
const useStyles = makeStyles({
  root: (props) =>
    // @ts-expect-error - TS2339 - Property 'color' does not exist on type '{}'.
    props.color
      ? {
          // @ts-expect-error - TS2339 - Property 'color' does not exist on type '{}'.
          color: props.color,
        }
      : undefined,
  label: (props) =>
    // @ts-expect-error - TS2339 - Property 'backgroundColor' does not exist on type '{}'.
    props.backgroundColor
      ? {
          // @ts-expect-error - TS2339 - Property 'backgroundColor' does not exist on type '{}'.
          backgroundColor: props.backgroundColor,
          borderRadius: 4,
        }
      : undefined,
});

/**
 * A button showing just an icon, based on Material-UI icon button.
 * Supports displaying a tooltip.
 */

const IconButton = React.forwardRef<Props, Record<any, any>>(
  (props: Props, ref) => {
    const {
      selected,
      tooltip,
      acceleratorString,
      color,
      style,
      ...otherProps
    } = props;

    const gdevelopTheme = React.useContext(GDevelopThemeContext);
    const classes = useStyles({
      // Override Material-UI colors only when the button is selected.
      color: selected ? gdevelopTheme.iconButton.selectedColor : undefined,
      backgroundColor: selected
        ? gdevelopTheme.iconButton.selectedBackgroundColor
        : undefined,
    });

    const iconButton = (
      // @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <MUIIconButton
        {...otherProps}
        classes={classes}
        style={style}
        color={selected ? 'inherit' : color || 'secondary'}
        ref={ref}
      />
    );

    return tooltip && !props.disabled ? (
      <I18n>
        {({ i18n }) => (
          <Tooltip
            title={
              i18n._(tooltip) +
              (acceleratorString
                ? ' (' + adaptAcceleratorString(acceleratorString) + ')'
                : '')
            }
            placement="bottom"
            enterDelay={tooltipEnterDelay}
          >
            {iconButton}
          </Tooltip>
        )}
      </I18n>
    ) : (
      iconButton
    );
  }
);

export default IconButton;
