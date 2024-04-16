import * as React from 'react';
import MuiChip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    cursor: 'default',
  },
  deleteIcon: {
    cursor: 'default', // Hover is enough, no need for a different cursor.
  },
});

type Props = {
  label?: string | React.ReactNode | undefined,
  color?: 'default' | 'primary' | 'secondary',
  icon?: React.ReactNode,
  size?: 'small' | 'medium',
  variant?: 'default' | 'outlined',
  avatar?: React.ReactNode,
  style?: any,
  onClick?: (() => void) | null,
  onBlur?: (() => void) | null,
  onFocus?: (() => void) | null,
  onDelete?: ((event?: any) => void) | null,
  disableAutoTranslate?: boolean
};

type ChipInterface = {
  focus: () => void
};

const Chip = React.forwardRef<Props, ChipInterface>((props, ref) => {
  const chipRef = React.useRef<HTMLDivElement | null | undefined>(null);
  const focus = () => {
    if (chipRef.current) {
      chipRef.current.focus();
    }
  };
// @ts-expect-error - TS2559 - Type '{ focus: () => void; }' has no properties in common with type 'Props'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MuiChip
// @ts-expect-error - TS2339 - Property 'label' does not exist on type 'ChipInterface'.
      label={props.label}
// @ts-expect-error - TS2339 - Property 'icon' does not exist on type 'ChipInterface'.
      icon={props.icon}
// @ts-expect-error - TS2339 - Property 'size' does not exist on type 'ChipInterface'.
      size={props.size}
// @ts-expect-error - TS2339 - Property 'variant' does not exist on type 'ChipInterface'.
      variant={props.variant}
// @ts-expect-error - TS2339 - Property 'avatar' does not exist on type 'ChipInterface'.
      avatar={props.avatar}
// @ts-expect-error - TS2339 - Property 'style' does not exist on type 'ChipInterface'.
      style={props.style}
// @ts-expect-error - TS2339 - Property 'onClick' does not exist on type 'ChipInterface'.
      onClick={props.onClick}
// @ts-expect-error - TS2339 - Property 'onBlur' does not exist on type 'ChipInterface'.
      onBlur={props.onBlur}
// @ts-expect-error - TS2551 - Property 'onFocus' does not exist on type 'ChipInterface'. Did you mean 'focus'?
      onFocus={props.onFocus}
// @ts-expect-error - TS2339 - Property 'onDelete' does not exist on type 'ChipInterface'.
      onDelete={props.onDelete}
      classes={useStyles()}
// @ts-expect-error - TS2339 - Property 'disableAutoTranslate' does not exist on type 'ChipInterface'.
      className={props.disableAutoTranslate ? 'notranslate' : ''}
      ref={chipRef}
// @ts-expect-error - TS2339 - Property 'color' does not exist on type 'ChipInterface'.
      color={props.color}
    />
  );
});

export default Chip;
