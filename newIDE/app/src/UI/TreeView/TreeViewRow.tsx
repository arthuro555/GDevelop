import * as React from 'react';

import DropIndicator from '../SortableVirtualizedItemList/DropIndicator';
import memoizeOne from 'memoize-one';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-window'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-window/dist/index.cjs.js' implicitly has an 'any' type.
import { areEqual } from 'react-window';

import IconButton from '../IconButton';

import ArrowHeadBottom from '../CustomSvgIcons/ArrowHeadBottom';

import ArrowHeadRight from '../CustomSvgIcons/ArrowHeadRight';

import Folder from '../CustomSvgIcons/Folder';

import ListIcon from '../ListIcon';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS2307 - Cannot find module './TreeView.module.css' or its corresponding type declarations.
import classes from './TreeView.module.css';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../KeyboardShortcuts/InteractionKeys';

import ThreeDotsMenu from '../CustomSvgIcons/ThreeDotsMenu';

import { ItemData, ItemBaseAttributes, navigationKeys } from '.';
import { useLongTouch } from '../../Utils/UseLongTouch';
import { dataObjectToProps } from '../../Utils/HTMLDataset';

import { DraggedItem } from '../DragAndDrop/DragSourceAndDropTarget';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';

const stopPropagation = (e: any) => e.stopPropagation();

const DELAY_BEFORE_OPENING_FOLDER_ON_DRAG_HOVER = 800;
const DELAY_BEFORE_OPENING_CONTEXT_MENU_ON_MOBILE = 1000;

const onInputKeyDown = (event: KeyboardEvent) => {
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type '"Enter" | "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight"'.
  if (navigationKeys.includes(event.key)) {
    // Prevent navigating in the tree view when renaming an item.
    event.stopPropagation();
  } else if (shouldCloseOrCancel(event)) {
    // Prevent closing dialog if TreeView is displayed in dialog.
    event.stopPropagation();
  }
};

const SemiControlledRowInput = ({
  initialValue,
  onEndRenaming,
  onBlur,
}: {
  initialValue: string;
  onEndRenaming: (newName: string) => void;
  onBlur: () => void;
}) => {
  const [value, setValue] = React.useState<string>(initialValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  /**
   * When mounting the component, select content.
   */
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }, []);

  /**
   * When unmounting the component, call onBlur. If props.onBlur is called
   * at the end of onKeyUp, focus might before the component is mounted.
   * This would trigger the blur callback on the input, calling onEndRenaming
   * with the current value, even if the user hit Escape key and expected the
   * initialValue to be set.
   */
  React.useEffect(() => {
    return onBlur;
  }, [onBlur]);

  return (
    <div className={classes.itemNameInputContainer}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        className={classes.itemNameInput}
        value={value}
        spellCheck={false}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        onClick={stopPropagation}
        onDoubleClick={stopPropagation}
        onBlur={() => {
          onEndRenaming(value);
        }}
        // @ts-expect-error - TS2322 - Type '(event: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLInputElement>'.
        onKeyDown={onInputKeyDown}
        onKeyUp={(e) => {
          if (shouldCloseOrCancel(e)) {
            // Prevent closing dialog if TreeView is displayed in dialog.
            e.preventDefault();
            onEndRenaming(initialValue);
          } else if (shouldValidate(e)) {
            onEndRenaming(value);
          }
        }}
      />
    </div>
  );
};

const memoized = memoizeOne((initialValue, getContainerYPosition) =>
  getContainerYPosition()
);

type Props<Item> = {
  index: number;
  style: any;
  data: ItemData<Item>;
  /** Used by react-window. */
  isScrolling?: boolean;
};

const TreeViewRow = <Item extends ItemBaseAttributes>(props: Props<Item>) => {
  const { data, index, style } = props;
  const {
    flattenedData,
    onOpen,
    onClick,
    onSelect,
    onBlurField,
    onEndRenaming,
    renamedItemId,
    onContextMenu,
    canDrop,
    onDrop,
    onEditItem,
    isMobile,
    DragSourceAndDropTarget,
    getItemHtmlId,
    forceDefaultDraggingPreview,
    shouldSelectUponContextMenuOpening,
  } = data;
  const node = flattenedData[index];
  const left = node.depth * 16;
  const forceUpdate = useForceUpdate();
  const isStayingOverRef = React.useRef<boolean>(false);
  const openWhenOverTimeoutId = React.useRef<number>(null);
  const [whereToDrop, setWhereToDrop] = React.useState<
    'before' | 'after' | 'inside'
  >('before');
  const containerRef = React.useRef<HTMLDivElement>(null);
  const openContextMenu = React.useCallback(
    ({ clientX, clientY }) => {
      onContextMenu({
        index: index,
        item: node.item,
        x: clientX,
        y: clientY,
      });
    },
    [onContextMenu, index, node.item]
  );

  const longTouchForContextMenuProps = useLongTouch(openContextMenu, {
    delay: DELAY_BEFORE_OPENING_CONTEXT_MENU_ON_MOBILE,
  });

  const onClickItem = React.useCallback(
    (event) => {
      if (!node || node.item.isPlaceholder) return;
      if (node.item.isRoot) {
        onOpen(node);
        return;
      }
      onSelect({ node, exclusive: !(event.metaKey || event.ctrlKey) });
      onClick(node);
    },
    [onClick, onSelect, node, onOpen]
  );

  const selectAndOpenContextMenu = React.useCallback(
    (event: MouseEvent) => {
      onClickItem(event);
      openContextMenu(event);
    },
    [onClickItem, openContextMenu]
  );

  const setIsStayingOver = React.useCallback(
    (active: boolean, canDrop: boolean) => {
      // Do not open folder if cannot drop into it. It's implied that if it
      // cannot be dropped in the folder, it cannot be dropped in any subfolders
      // of the folder.
      if (!canDrop && active) return;
      if (active !== isStayingOverRef.current) {
        isStayingOverRef.current = active;
        forceUpdate();
      }
    },
    [forceUpdate]
  );

  /**
   * Effect that opens the node if the user is dragging another node and stays
   * over the node.
   */
  React.useEffect(
    () => {
      if (
        isStayingOverRef.current &&
        !openWhenOverTimeoutId.current &&
        node.canHaveChildren &&
        node.collapsed
      ) {
        // @ts-expect-error - TS2322 - Type 'Timeout' is not assignable to type 'number'.
        openWhenOverTimeoutId.current = setTimeout(() => {
          onOpen(node);
        }, DELAY_BEFORE_OPENING_FOLDER_ON_DRAG_HOVER);
        return () => {
          // @ts-expect-error - TS2769 - No overload matches this call.
          clearTimeout(openWhenOverTimeoutId.current);
// @ts-expect-error - TS2540 - Cannot assign to 'current' because it is a read-only property.
          openWhenOverTimeoutId.current = null;
        };
      }
    },
    // We want to have isStayingOverRef.current as dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onOpen, node, forceUpdate, isStayingOverRef.current]
  );

  const endRenaming = React.useCallback(
    (newValue: string) => {
      onEndRenaming(node.item, newValue);
    },
    [onEndRenaming, node.item]
  );

  const getContainerYPosition = React.useCallback(() => {
    if (containerRef.current) {
      return containerRef.current.getBoundingClientRect().top;
    }
  }, []);

  const displayAsFolder = node.canHaveChildren;

  // Create an empty pixel image once to override the default drag preview of all items.
  const emptyImage = new Image();
  emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

  return (
    <div style={style} ref={containerRef}>
      <DragSourceAndDropTarget
        beginDrag={() => {
          if (!node.selected) onSelect({ node, exclusive: !node.selected });

          if (forceDefaultDraggingPreview) {
            return {};
          }

          // We return the item name and thumbnail to be used by the
          // drag preview if this is not a folder.
          // We can't use the item itself because it's not serializable.
          if (typeof node.name === 'string' && !displayAsFolder) {
            const draggedItem: DraggedItem = {
              name: node.name,
              thumbnail: node.thumbnailSrc || undefined,
            };
            return draggedItem;
          }

          // Otherwise, we let the default drag preview be displayed.
          return {};
        }}
        canDrag={() =>
          // Prevent dragging of root folder or placeholder.
          !node.item.isRoot &&
          !node.item.isPlaceholder &&
          // Prevent dragging of item whose name is edited, allowing to select text with click and drag on text.
          renamedItemId !== node.id
        }
        canDrop={canDrop ? () => canDrop(node.item, whereToDrop) : () => true}
        drop={() => {
          onDrop(node.item, whereToDrop);
        }}
        // @ts-expect-error - TS7006 - Parameter 'monitor' implicitly has an 'any' type.
        hover={(monitor) => {
          if (node.item.isRoot) {
            if (whereToDrop !== 'inside') setWhereToDrop('inside');
            return;
          }
          const { y } = monitor.getClientOffset();
          // Use a cached version of container position to avoid recomputing bounding rectangle.
          // Doing this, the position is computed every second the user hovers the target.
          const containerYPosition = memoized(
            Math.floor(Date.now() / 1000),
            getContainerYPosition
          );
          if (containerYPosition) {
            if (displayAsFolder) {
              if (node.collapsed) {
                setWhereToDrop(
                  y - containerYPosition <= 6
                    ? 'before'
                    : y - containerYPosition <= 26
                      ? 'inside'
                      : 'after'
                );
              } else {
                // If the folder is open, do not suggest to drop after as
                // the drop indicator can be misleading (displayed under the row
                // although dropping the element after would put it below the last
                // displayed child of the folder).
                setWhereToDrop(
                  y - containerYPosition <= 6 ? 'before' : 'inside'
                );
              }
            } else {
              setWhereToDrop(y - containerYPosition <= 16 ? 'before' : 'after');
            }
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
          setIsStayingOver(isOver, canDrop);

          let itemRow = (
            <div
              className={classNames(classes.rowContentSide, {
                [classes.rowContentSideLeft]: !node.item.isRoot,
                [classes.rowContentExtraPadding]: !displayAsFolder,
              })}
            >
              {displayAsFolder ? (
                <>
                  <IconButton
                    size="small"
                    // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpen(node);
                    }}
                    disabled={node.disableCollapse}
                  >
                    {node.collapsed ? (
                      <ArrowHeadRight fontSize="small" />
                    ) : (
                      <ArrowHeadBottom fontSize="small" />
                    )}
                  </IconButton>
                  {node.thumbnailSrc && node.thumbnailSrc !== 'FOLDER' ? (
                    <div className={classes.thumbnail}>
                      <ListIcon iconSize={20} src={node.thumbnailSrc} />
                    </div>
                  ) : (
                    !node.item.isRoot && (
                      // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Folder className={classes.folderIcon} />
                    )
                  )}
                </>
              ) : node.thumbnailSrc ? (
                <div className={classes.thumbnail}>
                  <ListIcon iconSize={20} src={node.thumbnailSrc} />
                </div>
              ) : null}
              {renamedItemId === node.id && typeof node.name === 'string' ? (
                <SemiControlledRowInput
                  initialValue={node.name}
                  onEndRenaming={endRenaming}
                  onBlur={onBlurField}
                />
              ) : (
                <span
                  className={classNames(
                    classes.itemName,
                    {
                      [classes.rootFolder]: node.item.isRoot,
                      [classes.placeholder]: node.item.isPlaceholder,
                    },
                    node.extraClass
                  )}
                >
                  {node.name}
                </span>
              )}
            </div>
          );

          // If this is an object, connect the drag preview with an empty image
          // to override the default drag preview.
          if (typeof node.name === 'string' && !displayAsFolder) {
            connectDragPreview(emptyImage);
          } else {
            // If not (folder for instance), just use the item row as drag preview.
            itemRow = connectDragPreview(itemRow);
          }

          const rightButton = node.rightButton;

          const shouldDisplayMenu =
            !node.shouldHideMenuIcon &&
            !isMobile &&
            !node.item.isRoot &&
            !node.item.isPlaceholder;

          const dragSource = connectDragSource(
            <div className={classes.fullSpaceContainer}>
              {isOver && whereToDrop === 'before' && (
                <DropIndicator canDrop={canDrop} />
              )}
              <div
                className={classes.rowContent}
                onDoubleClick={
                  onEditItem ? () => onEditItem(node.item) : undefined
                }
                // @ts-expect-error - TS2322 - Type '(event: MouseEvent) => void' is not assignable to type 'MouseEventHandler<HTMLDivElement>'.
                onContextMenu={
                  shouldSelectUponContextMenuOpening
                    ? selectAndOpenContextMenu
                    : openContextMenu
                }
                {...longTouchForContextMenuProps}
              >
                {itemRow}
                {(node.rightComponent || rightButton || shouldDisplayMenu) && (
                  <div
                    className={classNames(
                      classes.rowContentSide,
                      classes.rowContentSideRight
                    )}
                  >
                    {node.rightComponent}
                    {rightButton && (
                      <IconButton
                        id={rightButton.id}
                        size="small"
                        // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                        onClick={(e) => {
                          e.stopPropagation();
                          if (rightButton.click) {
                            rightButton.click();
                          }
                        }}
                      >
                        {rightButton.icon}
                      </IconButton>
                    )}
                    {shouldDisplayMenu && (
                      <IconButton
                        size="small"
                        // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type.
                        onClick={(e) => {
                          e.stopPropagation();
                          onContextMenu({
                            item: node.item,
                            index,
                            x: e.clientX,
                            y: e.clientY,
                          });
                        }}
                      >
                        <ThreeDotsMenu />
                      </IconButton>
                    )}
                  </div>
                )}
              </div>
              {isOver && whereToDrop === 'after' && (
                <DropIndicator canDrop={canDrop} />
              )}
            </div>
          );

          const shouldDisplayDropIndicator =
            isOver &&
            whereToDrop === 'inside' &&
            displayAsFolder &&
            !node.item.isRoot;
          const dropIndicatorClassName = shouldDisplayDropIndicator
            ? canDrop
              ? classes.withCanDropInsideIndicator
              : classes.withCannotDropInsideIndicator
            : null;

          const dropTarget = connectDropTarget(
            <div
// @ts-expect-error - TS2322 - Type 'string | null | undefined' is not assignable to type 'string | undefined'.
              id={getItemHtmlId ? getItemHtmlId(node.item, index) : undefined}
              onClick={onClickItem}
              className={classNames(
                classes.rowContainer,
                dropIndicatorClassName,
                {
                  [classes.selected]: node.selected,
                }
              )}
              aria-selected={node.selected}
              aria-expanded={displayAsFolder ? !node.collapsed : false}
              {...dataObjectToProps(node.dataset)}
            >
              {dragSource}
            </div>
          );

          return (
            <div
              style={{ paddingLeft: left }}
              className={classNames(classes.fullHeightFlexContainer, {
                [classes.withDivider]: node.item.isRoot && index > 0,
              })}
            >
              {dropTarget}
            </div>
          );
        }}
      </DragSourceAndDropTarget>
    </div>
  );
};

// @ts-expect-error - TS2314 - Generic type 'Props' requires 1 type argument(s).
export default React.memo<Props>(TreeViewRow, areEqual);
