import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { List } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module './ItemRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/ItemRow.tsx', but '--jsx' is not set.
import ItemRow from './ItemRow';
// @ts-expect-error - TS6142 - Module '../ListCommonItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ListCommonItem.tsx', but '--jsx' is not set.
import { AddListItem } from '../ListCommonItem';
// @ts-expect-error - TS6142 - Module '../List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { listItemWith32PxIconHeight, listItemWithoutIconHeight } from '../List';
import {
  makeDragSourceAndDropTarget,
  DraggedItem,
// @ts-expect-error - TS6142 - Module '../DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
} from '../DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS6142 - Module './DropIndicator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SortableVirtualizedItemList/DropIndicator.tsx', but '--jsx' is not set.
import DropIndicator from './DropIndicator';
import { ResponsiveWindowMeasurer } from '../Responsive/ResponsiveWindowMeasurer';
import { ScreenTypeMeasurer } from '../Responsive/ScreenTypeMeasurer';
import { HTMLDataset } from '../../Utils/HTMLDataset';

const OVERSCAN_CELLS_COUNT = 20;

type Props<Item> = {
  height: number,
  width: number,
  fullList: Array<Item>,
  selectedItems: Array<Item>,
  onAddNewItem?: () => void,
  addNewItemLabel?: React.ReactNode | string,
  addNewItemId?: string,
  onRename: (arg1: Item, arg2: string) => void,
  renderItemLabel?: (arg1: Item) => React.ReactElement,
  getItemName: (arg1: Item) => string,
  getItemThumbnail?: (arg1: Item) => string,
  getItemId?: (arg1: Item, index: number) => string,
  getItemData?: (arg1: Item, index: number) => HTMLDataset,
  isItemBold?: (arg1: Item) => boolean,
  onItemSelected: (arg1?: Item | null | undefined) => void,
  onEditItem?: (arg1: Item) => void,
  renamedItem: Item | null | undefined,
  erroredItems?: {
    [key: string]: '' | 'error' | 'warning'
  },
  buildMenuTemplate: (arg1: Item, index: number) => any,
  onMoveSelectionToItem: (destinationItem: Item) => void,
  canMoveSelectionToItem?: (destinationItem: Item) => boolean | null | undefined,
  scaleUpItemIconWhenSelected?: boolean,
  reactDndType: string
};

export default class SortableVirtualizedItemList<Item> extends React.Component<Props<Item>> {
  _list: List | null | undefined;
  DragSourceAndDropTarget = makeDragSourceAndDropTarget<Item>(this.props.reactDndType);

  forceUpdateGrid() {
    if (this._list) this._list.forceUpdateGrid();
  }

  scrollToItem(item: Item) {
    const index = this.props.fullList.findIndex(
      listItem =>
        this.props.getItemName(listItem) === this.props.getItemName(item)
    );
    if (this._list && index !== -1) {
      this._list.scrollToRow(index);
    }
  }

  _renderItemRow(item: Item, index: number, isMobile: boolean) {
    const {
      selectedItems,
      getItemThumbnail,
      erroredItems,
      isItemBold,
      onEditItem,
      renamedItem,
      getItemName,
      getItemId,
      getItemData,
      renderItemLabel,
      scaleUpItemIconWhenSelected,
    } = this.props;

    const nameBeingEdited = renamedItem === item;
    const itemName = getItemName(item);

    const selected =
      selectedItems.findIndex(item => getItemName(item) === itemName) !== -1;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ItemRow
        item={item}
        itemName={itemName}
        id={getItemId ? getItemId(item, index) : undefined}
        data={getItemData ? getItemData(item, index) : undefined}
        renderItemLabel={
          renderItemLabel ? () => renderItemLabel(item) : undefined
        }
        isBold={isItemBold ? isItemBold(item) : false}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
        onRename={newName => this.props.onRename(item, newName)}
        editingName={nameBeingEdited}
        getThumbnail={
          getItemThumbnail ? () => getItemThumbnail(item) : undefined
        }
        selected={selected}
        onItemSelected={this.props.onItemSelected}
        errorStatus={erroredItems ? erroredItems[itemName] || '' : ''}
        buildMenuTemplate={() => this.props.buildMenuTemplate(item, index)}
        onEdit={onEditItem}
        hideMenuButton={isMobile}
        scaleUpItemIconWhenSelected={scaleUpItemIconWhenSelected}
      />
    );
  }

  render() {
    const {
      height,
      width,
      fullList,
      addNewItemLabel,
      addNewItemId,
      renamedItem,
      getItemThumbnail,
      getItemName,
      onAddNewItem,
      onMoveSelectionToItem,
      canMoveSelectionToItem,
      selectedItems,
    } = this.props;
    const { DragSourceAndDropTarget } = this;

    // Create an empty pixel image once to override the default drag preview of all items.
    const emptyImage = new Image();
    emptyImage.src =
      'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResponsiveWindowMeasurer>
        {({ isMobile }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ScreenTypeMeasurer>
            {screenType => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <List
// @ts-expect-error - TS7006 - Parameter 'list' implicitly has an 'any' type.
                ref={list => (this._list = list)}
                // We override this function to avoid a bug in react-virtualized
                // where the overscanCellsCount is not taken into account after a scroll
                // see https://github.com/bvaughn/react-virtualized/issues/1582#issuecomment-785073746
                overscanIndicesGetter={({
// @ts-expect-error - TS7031 - Binding element 'cellCount' implicitly has an 'any' type.
                  cellCount,
// @ts-expect-error - TS7031 - Binding element 'overscanCellsCount' implicitly has an 'any' type.
                  overscanCellsCount,
// @ts-expect-error - TS7031 - Binding element 'startIndex' implicitly has an 'any' type.
                  startIndex,
// @ts-expect-error - TS7031 - Binding element 'stopIndex' implicitly has an 'any' type.
                  stopIndex,
                }) => ({
                  overscanStartIndex: Math.max(
                    0,
                    startIndex - OVERSCAN_CELLS_COUNT
                  ),
                  overscanStopIndex: Math.min(
                    cellCount - 1,
                    stopIndex + OVERSCAN_CELLS_COUNT
                  ),
                })}
                height={height}
                rowCount={fullList.length + (onAddNewItem ? 1 : 0)}
                rowHeight={
                  getItemThumbnail
                    ? listItemWith32PxIconHeight
                    : listItemWithoutIconHeight
                }
                rowRenderer={({
                  index,
                  key,
                  style,
                }: {
                  index: number,
                  key: string,
                  style: any
                }) => {
                  if (index >= fullList.length) {
                    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <div style={style} key={key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <AddListItem
                          onClick={onAddNewItem}
                          primaryText={width < 200 ? '' : addNewItemLabel}
                          id={addNewItemId}
                        />
                      </div>
                    );
                  }

                  const item = fullList[index];
                  const nameBeingEdited = renamedItem === item;
                  const isSelected =
                    selectedItems.findIndex(
                      selectedItem =>
                        getItemName(selectedItem) === getItemName(item)
                    ) !== -1;
                  // If on a touch screen, we only allow dragging if the item is selected.
                  const canDrag =
                    !nameBeingEdited && (screenType !== 'touch' || isSelected);

                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <div style={style} key={key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <DragSourceAndDropTarget
                        beginDrag={() => {
                          // This is a hack for touch screens. We need to prevent the react-dnd list from scrolling
                          // at the same time as the drag is happening.
                          // react-dnd does not work well with react-virtualized.
                          // Find the React-Virtualized list and prevent it from scrolling whilst dragging
                          // by setting the overflow to 'hidden' and then back to 'auto' when the drag is finished.
                          if (screenType === 'touch') {
                            if (this._list) {
                              this._list.props.style.overflow = 'hidden';
                            }
                          }

                          // Ensure we reselect the item even if it's already selected.
                          // This prevents a bug where the connected preview is not
                          // updated when the item is already selected.
                          this.props.onItemSelected(item);

                          // We return the item name and thumbnail to be used by the
                          // drag preview. We can't use the item itself because it's
                          // not serializable and breaks react-dnd.
                          const draggedItem: DraggedItem = {
                            name: getItemName(item),
                            thumbnail:
                              this.props.reactDndType ===
                                'GD_OBJECT_WITH_CONTEXT' && getItemThumbnail
                                ? getItemThumbnail(item)
                                : undefined,
                          };
                          return draggedItem;
                        }}
                        canDrag={() => canDrag}
                        canDrop={() =>
                          canMoveSelectionToItem
                            ? canMoveSelectionToItem(item)
                            : true
                        }
                        drop={() => {
                          onMoveSelectionToItem(item);
                        }}
                        endDrag={() => {
                          // Re-enable scrolling on touch screens.
                          if (screenType !== 'touch') return;
                          if (this._list) {
                            this._list.props.style.overflow = 'auto';
                            this.forceUpdate();
                          }
                        }}
                      >
                        {({
// @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type.
                          connectDragSource,
// @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type.
                          connectDropTarget,
// @ts-expect-error - TS7031 - Binding element 'connectDragPreview' implicitly has an 'any' type.
                          connectDragPreview,
// @ts-expect-error - TS7031 - Binding element 'isOver' implicitly has an 'any' type.
                          isOver,
// @ts-expect-error - TS7031 - Binding element 'canDrop' implicitly has an 'any' type.
                          canDrop,
                        }) => {
                          // Connect the drag preview with an empty image to override the default
                          // drag preview.
                          connectDragPreview(emptyImage);

                          // Add an extra div because connectDropTarget/connectDragSource can
                          // only be used on native elements
                          const dropTarget = connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              {isOver && <DropIndicator canDrop={canDrop} />}
                              {this._renderItemRow(item, index, isMobile)}
                            </div>
                          );

                          if (!dropTarget) return null;

                          return connectDragSource(dropTarget);
                        }}
                      </DragSourceAndDropTarget>
                    </div>
                  );
                }}
                width={width}
              />
            )}
          </ScreenTypeMeasurer>
        )}
      </ResponsiveWindowMeasurer>
    );
  }
}
