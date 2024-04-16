import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../UI/DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DropTarget.tsx', but '--jsx' is not set.
import { makeDropTarget } from '../UI/DragAndDrop/DropTarget';

type Props = Record<any, any>;

const DragSourceAndDropTarget = makeDragSourceAndDropTarget<{
  someData: string
}>('dnd-type1');

const DragSourceAndDropTargetBox = ({
  name,
}: {
  name: string
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragSourceAndDropTarget
    beginDrag={() => {
      console.log(
        'Begin dragging' + name + ', which should be added to the selection'
      );

      return { someData: name };
    }}
    canDrop={() => name.indexOf('cant-drop-here') === -1}
    drop={() => {
      console.log('Selection to be dropped on' + name);
    }}
  >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
    {({ connectDragSource, connectDropTarget, isOver, canDrop }) => {
      const connectedDragSource = connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          style={{
            backgroundColor: 'blue',
            color: 'white',
            height: 100,
            width: 100,
            margin: 20,
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          This is a box called {name}.{isOver && <div>Hovered</div>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {canDrop && <div>Can drop here</div>}
        </div>
      );

      return connectedDragSource
        ? connectDropTarget(connectedDragSource)
        : null;
    }}
  </DragSourceAndDropTarget>
);

const DropTarget = makeDropTarget<{
  someData: string
}>('dnd-type1');

const DropTargetBox = ({
  name,
}: {
  name: string
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DropTarget
    canDrop={() => name.indexOf('cant-drop-here') === -1}
    drop={() => {
      console.log('Selection to be dropped on' + name);
    }}
  >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
    {({ connectDropTarget, isOver, canDrop }) =>
      connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            height: 100,
            width: 100,
            margin: 20,
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          This is a box called {name}.{isOver && <div>Hovered</div>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {canDrop && <div>Can drop here</div>}
        </div>
      )
    }
  </DropTarget>
);

export default (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragSourceAndDropTargetBox name="box1" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragSourceAndDropTargetBox name="box2, cant-drop-here" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragSourceAndDropTargetBox name="box3" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DropTargetBox name="box4, drop target only" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DropTargetBox name="box5, drop target but cant-drop-here" />
  </div>
);
