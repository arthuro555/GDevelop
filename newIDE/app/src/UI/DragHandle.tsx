import React from 'react';
import MUIDragHandleIcon from '@material-ui/icons/DragHandle';
import { SortableHandle } from 'react-sortable-hoc';

const styles = {
  handle: {
    display: 'flex',
    cursor: 'move',
  },
  disabledHandle: {
    display: 'flex',
    opacity: 0.4,
  },
  handleColor: '#DDD',
} as const;

type Props = {
  disabled?: boolean,
  color?: string
};

export const DragHandleIcon = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <span style={props.disabled ? styles.disabledHandle : styles.handle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <MUIDragHandleIcon htmlColor={props.color || styles.handleColor} />
  </span>
);

const DragHandle = SortableHandle(DragHandleIcon);

export default DragHandle;
