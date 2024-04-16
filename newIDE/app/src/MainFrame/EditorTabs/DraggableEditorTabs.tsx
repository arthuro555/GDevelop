import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../../UI/DragAndDrop/DragSourceAndDropTarget';
import { ScreenTypeMeasurer } from '../../UI/Responsive/ScreenTypeMeasurer';
// @ts-expect-error - TS6142 - Module './DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorTabs/DropIndicator.tsx', but '--jsx' is not set.
import { ColumnDropIndicator } from './DropIndicator';
import {
  EditorTabsState,
  EditorTab,
  getEditors,
  getCurrentTabIndex,
  getCurrentTab,
} from './EditorTabsHandler';
import {
  ClosableTabs,
  ClosableTab,
  ClosableTabProps,
// @ts-expect-error - TS6142 - Module '../../UI/ClosableTabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ClosableTabs.tsx', but '--jsx' is not set.
} from '../../UI/ClosableTabs';

const DragSourceAndDropTarget = makeDragSourceAndDropTarget<EditorTab>('draggable-closable-tab');

type DraggableEditorTabsProps = {
  hideLabels?: boolean,
  editorTabs: EditorTabsState,
  onClickTab: (index: number) => void,
  onCloseTab: (editor: EditorTab) => void,
  onCloseOtherTabs: (editor: EditorTab) => void,
  onCloseAll: () => void,
  onTabActivated: (editor: EditorTab) => void,
  onDropTab: (fromIndex: number, toHoveredIndex: number) => void
};

const getTabId = (editorTab: EditorTab) =>
  `tab-${editorTab.key.replace(/\s/g, '-')}`;

export function DraggableEditorTabs({
  hideLabels,
  editorTabs,
  onClickTab,
  onCloseTab,
  onCloseOtherTabs,
  onCloseAll,
  onTabActivated,
  onDropTab,
}: DraggableEditorTabsProps) {
  let draggedTabIndex: number | null | undefined = null;

  const currentTab = getCurrentTab(editorTabs);

  React.useEffect(
    () => {
      if (!currentTab) return;
      const tabElement = document.getElementById(getTabId(currentTab));
      if (tabElement) {
        tabElement.scrollIntoView();
      }
    },
    [currentTab]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ClosableTabs hideLabels={hideLabels}>
      {getEditors(editorTabs).map((editorTab, id) => {
        const isCurrentTab = getCurrentTabIndex(editorTabs) === id;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DraggableClosableTab
            index={id}
            label={editorTab.label}
            icon={editorTab.icon}
            key={editorTab.key}
            id={getTabId(editorTab)}
            data={editorTab.tabOptions ? editorTab.tabOptions.data : undefined}
            active={isCurrentTab}
            onClick={() => onClickTab(id)}
            onClose={() => onCloseTab(editorTab)}
            onCloseOthers={() => onCloseOtherTabs(editorTab)}
            onCloseAll={onCloseAll}
            onActivated={() => onTabActivated(editorTab)}
            closable={editorTab.closable}
            onBeginDrag={() => {
              draggedTabIndex = id;
              return editorTab;
            }}
// @ts-expect-error - TS7006 - Parameter 'toHoveredIndex' implicitly has an 'any' type.
            onDrop={toHoveredIndex => {
              if (typeof draggedTabIndex === 'number') {
                onDropTab(draggedTabIndex, id);
                draggedTabIndex = null;
              }
            }}
          />
        );
      })}
    </ClosableTabs>
  );
}

type DraggableClosableTabProps = {
  index: number,
  onBeginDrag: () => EditorTab,
  onDrop: (toIndex: number) => void
} & (ClosableTabProps);

export function DraggableClosableTab({
  index,
  id,
  data,
  active,
  onClose,
  onCloseOthers,
  onCloseAll,
  label,
  icon,
  closable,
  onClick,
  onActivated,
  onBeginDrag,
  onDrop,
}: DraggableClosableTabProps) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ScreenTypeMeasurer>
      {screenType => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DragSourceAndDropTarget
          beginDrag={onBeginDrag}
          canDrag={() => {
            // On touchscreens, we disable drag and drop.
            if (screenType === 'touch') return false;
            // We want "Home" tab to stay on the left.
            return index !== 0;
          }}
          canDrop={() => true}
          drop={() => onDrop(index)}
        >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
          {({ connectDragSource, connectDropTarget, isOver, canDrop }) => {
            // Add an extra div because connectDropTarget/connectDragSource can
            // only be used on native elements.
            const dropTarget = connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div
                style={{
                  display: 'flex',
                  flexShrink: 0,
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ClosableTab
                  id={id}
                  data={data}
                  active={active}
                  onClose={onClose}
                  onCloseOthers={onCloseOthers}
                  onCloseAll={onCloseAll}
                  label={label}
                  icon={icon}
                  closable={closable}
                  onClick={onClick}
                  onActivated={onActivated}
                  key={id}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {isOver && <ColumnDropIndicator />}
              </div>
            );

            if (!dropTarget) return null;

            return connectDragSource(dropTarget);
          }}
        </DragSourceAndDropTarget>
      )}
    </ScreenTypeMeasurer>
  );
}
