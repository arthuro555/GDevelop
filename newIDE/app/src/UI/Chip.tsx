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
  label?: string | React.ReactNode | undefined;
  color?: 'default' | 'primary' | 'secondary';
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  variant?: 'default' | 'outlined';
  avatar?: React.ReactNode;
  style?: any;
  onClick?: (() => void) | null;
  onBlur?: (() => void) | null;
  onFocus?: (() => void) | null;
  onDelete?: ((event?: any) => void) | null;
  disableAutoTranslate?: boolean;
};

export type ChipInterface = {
  focus: () => void;
};

const Chip = React.forwardRef<ChipInterface, Props>((props, ref) => {
  const chipRef = React.useRef<HTMLDivElement>(null);
  const focus = () => {
    if (chipRef.current) {
      chipRef.current.focus();
    }
  };

  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  return (
    //@ts-ignore TODO
    <MuiChip
      label={props.label}
      icon={props.icon}
      size={props.size}
      variant={props.variant}
      avatar={props.avatar}
      style={props.style}
      onClick={props.onClick}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onDelete={props.onDelete}
      classes={useStyles()}
      className={props.disableAutoTranslate ? 'notranslate' : ''}
      ref={chipRef}
      color={props.color}
    />
  );
});

export default Chip;
