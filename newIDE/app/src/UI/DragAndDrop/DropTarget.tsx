import * as React from 'react';
import {
  DropTarget,
  DropTargetMonitor,
  DropTargetConnector,
  ConnectDropTarget,
} from 'react-dnd';

type Props<DraggedItemType> = {
  children: (
    arg1: {
      connectDropTarget: ConnectDropTarget,
      isOver: boolean,
      isOverLazy: boolean,
      canDrop: boolean
    },
  ) => React.ReactNode | null | undefined,
  canDrop: (item: DraggedItemType) => boolean,
  hover?: (monitor: DropTargetMonitor) => void,
  drop: (monitor: DropTargetMonitor) => void
};

export type DropTargetComponent<DraggedItemType> = (arg1: Props<DraggedItemType>) => React.ReactElement;

type DropTargetProps = {
  connectDropTarget: ConnectDropTarget,
  isOver: boolean,
  isOverLazy: boolean,
  canDrop: boolean
};

export const makeDropTarget = <DraggedItemType extends unknown>(reactDndType: string): DropTargetComponent<DraggedItemType> => {
  const targetSpec = {
    canDrop(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      const item = monitor.getItem();
      return item && props.canDrop(item);
    },
    hover(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      if (props.hover) props.hover(monitor);
    },
    drop(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      if (monitor.didDrop()) {
        return; // Drop already handled by another target
      }
      props.drop(monitor);
    },
  } as const;

  function targetCollect(connect: DropTargetConnector, monitor: DropTargetMonitor): DropTargetProps {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver({ shallow: true }),
      isOverLazy: monitor.isOver({ shallow: false }),
      canDrop: monitor.canDrop(),
    };
  }

  const InnerDropTarget = DropTarget(reactDndType, targetSpec, targetCollect)(
    ({ children, connectDropTarget, isOver, isOverLazy, canDrop }) => {
// @ts-expect-error - TS2349 - This expression is not callable.
      return children({
        connectDropTarget,
        isOver,
        isOverLazy,
        canDrop,
      });
    }
  );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: (arg1: { connectDropTarget: ConnectDropTarget; isOver: boolean; isOverLazy: boolean; canDrop: boolean; }) => ReactNode; canDrop: (item: DraggedItemType) => boolean; hover?: ((monitor: DropTargetMonitor) => void) | undefined; drop: (monitor: DropTargetMonitor) => void; }' is not assignable to type 'Readonly<Omit<never, "canDrop" | "connectDropTarget" | "isOver" | "isOverLazy">>'.
  return (props: Props<DraggedItemType>) => <InnerDropTarget {...props} />;
};
