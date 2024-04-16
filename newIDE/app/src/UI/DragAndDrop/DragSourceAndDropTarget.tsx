import * as React from 'react';
import {
  DragSource,
  DragSourceMonitor,
  DragSourceConnector,
  ConnectDragSource,
  DropTarget,
  DropTargetMonitor,
  DropTargetConnector,
  ConnectDropTarget,
  ConnectDragPreview,
} from 'react-dnd';
import { hapticFeedback } from '../../Utils/Haptic';

type Props<DraggedItemType> = {
  children: (
    arg1: {
      connectDragSource: ConnectDragSource,
      connectDropTarget: ConnectDropTarget,
      connectDragPreview: ConnectDragPreview,
      isOver: boolean,
      isOverLazy: boolean,
      canDrop: boolean
    },
  ) => React.ReactNode | null | undefined,
  beginDrag: () => DraggedItemType,
  canDrag?: (item: DraggedItemType) => boolean,
  canDrop: (item: DraggedItemType) => boolean,
  drop: () => void,
  endDrag?: () => void,
  hover?: (monitor: DropTargetMonitor) => void
};

type DragSourceProps = {
  connectDragSource: ConnectDragSource,
  connectDragPreview: ConnectDragPreview,
  isDragging: boolean
};

type DropTargetProps = {
  connectDropTarget: ConnectDropTarget,
  isOver: boolean,
  isOverLazy: boolean,
  canDrop: boolean
};

type InnerDragSourceAndDropTargetProps<DraggedItemType> = (Props<DraggedItemType>) & (DragSourceProps) & (DropTargetProps);

// For some reason, defining this type in the `CustomDragLayer` component
// creates a circular dependency, so we define it here instead.
export type DraggedItem = {
  name: string,
  thumbnail?: string
};

type Options = {
  vibrate?: number
};

export const makeDragSourceAndDropTarget = <DraggedItemType extends unknown>(reactDndType: string, options?: Options | null): (arg1: Props<DraggedItemType>) => React.ReactElement => {
  const sourceSpec = {
    canDrag(props: Props<DraggedItemType>, monitor: DragSourceMonitor) {
      const item = monitor.getItem();
      const canDrag = props.canDrag || null;
      if (canDrag) return canDrag(item);
      return true;
    },
    beginDrag(props: InnerDragSourceAndDropTargetProps<DraggedItemType>) {
// @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead?
      if (hapticFeedback && options && options.vibrate) {
        hapticFeedback({ durationInMs: options.vibrate });
      }
      return props.beginDrag();
    },
    endDrag(props: Props<DraggedItemType>, monitor: DragSourceMonitor) {
      if (props.endDrag) props.endDrag();
    },
  } as const;

  function sourceCollect(connect: DragSourceConnector, monitor: DragSourceMonitor): DragSourceProps {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    };
  }

  const targetSpec = {
    canDrop(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      const item = monitor.getItem();
      return item && props.canDrop(item);
    },
    drop(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      if (monitor.didDrop()) {
        return; // Drop already handled by another target
      }
      props.drop();
    },
    hover(props: Props<DraggedItemType>, monitor: DropTargetMonitor) {
      if (props.hover) props.hover(monitor);
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

  const InnerDragSourceAndDropTarget = DragSource(
    reactDndType,
    sourceSpec,
    sourceCollect
  )(
    DropTarget(reactDndType, targetSpec, targetCollect)(
      ({
        children,
        connectDragSource,
        connectDropTarget,
        connectDragPreview,
        isDragging,
        isOver,
        isOverLazy,
        canDrop,
      }) => {
// @ts-expect-error - TS2349 - This expression is not callable.
        return children({
          connectDragSource,
          connectDropTarget,
          connectDragPreview,
          isDragging,
          isOver,
          isOverLazy,
          canDrop,
        });
      }
    )
  );

  return (props: Props<DraggedItemType>) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: (arg1: { connectDragSource: ConnectDragSource; connectDropTarget: ConnectDropTarget; connectDragPreview: ConnectDragPreview; isOver: boolean; isOverLazy: boolean; canDrop: boolean; }) => ReactNode; ... 5 more ...; hover?: ((monitor: DropTargetMonitor) => void) | undefined; }' is not assignable to type 'Readonly<Omit<Omit<never, "canDrop" | "connectDropTarget" | "isOver" | "isOverLazy">, "connectDragSource" | "connectDragPreview" | "isDragging">>'.
    <InnerDragSourceAndDropTarget {...props} />
  );
};
