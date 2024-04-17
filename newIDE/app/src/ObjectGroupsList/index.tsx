import { Trans, t } from '@lingui/macro';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

import React from 'react';

import { AutoSizer } from 'react-virtualized';

import Background from '../UI/Background';

import SearchBar from '../UI/SearchBar';
import newNameGenerator from '../Utils/NewNameGenerator';
import { enumerateGroups } from '../ObjectsList/EnumerateObjects';
import {
  GroupWithContextList,
  GroupWithContext,
} from '../ObjectsList/EnumerateObjects';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';

import { Column, Line } from '../UI/Grid';

import ResponsiveRaisedButton from '../UI/ResponsiveRaisedButton';

import Add from '../UI/CustomSvgIcons/Add';

import { EmptyPlaceholder } from '../ObjectsList';

import TreeView, { TreeViewInterface } from '../UI/TreeView';
import useForceUpdate from '../Utils/UseForceUpdate';
import useAlertDialog from '../UI/Alert/useAlertDialog';

import ErrorBoundary from '../UI/ErrorBoundary';

export const groupWithContextReactDndType = 'GD_GROUP_WITH_CONTEXT';

const sceneGroupsRootFolderId = 'scene-groups';
const globalGroupsRootFolderId = 'global-groups';
const globalGroupsEmptyPlaceholderId = 'global-empty-placeholder';

const styles = {
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
} as const;

type RootFolder = {
  readonly label: string;
  readonly children: GroupWithContextList | Array<EmptyPlaceholder>;
  readonly isRoot: true;
  readonly id: string;
};

type TreeViewItem = GroupWithContext | RootFolder | EmptyPlaceholder;

const getGlobalGroupsEmptyPlaceholder = (i18n: I18nType): EmptyPlaceholder => ({
  label: i18n._(t`There is no global group yet.`),
  id: globalGroupsEmptyPlaceholderId,
  isPlaceholder: true,
});
const getSceneGroupsEmptyPlaceholder = (i18n: I18nType): EmptyPlaceholder => ({
  label: i18n._(t`Start by adding a new group.`),
  id: 'scene-empty-placeholder',
  isPlaceholder: true,
});

const getGroupWithContextName = (groupWithContext: GroupWithContext): string =>
  groupWithContext.group.getName();

const getTreeViewItemName = (item: TreeViewItem) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'. | TS2339 - Property 'label' does not exist on type 'TreeViewItem'. | TS2339 - Property 'group' does not exist on type 'TreeViewItem'.
  item.isRoot || item.isPlaceholder ? item.label : item.group.getName();

const getTreeViewItemChildren = (item: TreeViewItem) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'children' does not exist on type 'TreeViewItem'.
  item.isRoot ? item.children : null;

const getTreeViewItemId = (item: TreeViewItem) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
  item.isRoot || item.isPlaceholder
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
    ? item.id
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
    : `group-item-${getGroupWithContextName(item)}`;

const isGroupWithContextGlobal = (groupWithContext: GroupWithContext) =>
  groupWithContext.global;

export type ObjectGroupsListInterface = {
  forceUpdate: () => void;
};

type Props = {
  globalObjectGroups: gd.ObjectGroupsContainer;
  objectGroups: gd.ObjectGroupsContainer;
  onDeleteGroup: (groupWithContext: GroupWithContext, cb: any) => void;
  onEditGroup: (arg1: gd.ObjectGroup) => void;
  getValidatedObjectOrGroupName: (newName: string, global: boolean) => string;
  onRenameGroup: (
    groupWithContext: GroupWithContext,
    newName: string,
    cb: any
  ) => void;
  beforeSetAsGlobalGroup?: (groupName: string) => boolean;
  onGroupAdded?: () => void;
  onGroupRemoved?: () => void;
  onGroupRenamed?: () => void;
  canSetAsGlobalGroup?: boolean;
  unsavedChanges?: UnsavedChanges | null | undefined;
};

const ObjectGroupsList = React.forwardRef<ObjectGroupsListInterface, Props>(
  (props, ref) => {
    const {
      globalObjectGroups,

      objectGroups,

      onGroupAdded,

      onDeleteGroup,

      onGroupRemoved,

      getValidatedObjectOrGroupName,

      onRenameGroup,

      onGroupRenamed,

      beforeSetAsGlobalGroup,

      unsavedChanges,

      onEditGroup,

      canSetAsGlobalGroup,
    } = props;
    const [selectedGroupWithContext, setSelectedGroupWithContext] =
      React.useState<GroupWithContext | null | undefined>(null);
    const [searchText, setSearchText] = React.useState<string>('');
    const treeViewRef = React.useRef<
      TreeViewInterface<TreeViewItem> | null | undefined
    >(null);
    const forceUpdate = useForceUpdate();
    const {
      showDeleteConfirmation,

      showConfirmation,

      showAlert,
    } = useAlertDialog();

    React.useImperativeHandle(ref, () => ({ forceUpdate }));

    const scrollToItem = React.useCallback(
      (groupWithContext: GroupWithContext) => {
        if (treeViewRef.current) {
          treeViewRef.current.scrollToItem(groupWithContext);
        }
      },
      []
    );

    const onEditName = React.useCallback(
      (groupWithContext: GroupWithContext) => {
        if (treeViewRef.current)
          treeViewRef.current.renameItem(groupWithContext);
      },
      []
    );

    const onObjectGroupModified = React.useCallback(() => {
      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();
      forceUpdate();
    }, [unsavedChanges, forceUpdate]);

    const addGroup = React.useCallback(() => {
      const name = newNameGenerator(
        'Group',
        (name) => objectGroups.has(name) || globalObjectGroups.has(name)
      );

      const newObjectGroup = objectGroups.insertNew(name, objectGroups.count());
      onObjectGroupModified();

      if (onGroupAdded) {
        onGroupAdded();
      }

      const groupWithContext: GroupWithContext = {
        group: newObjectGroup,
        global: false, // A new group is not global by default.
      };

      if (treeViewRef.current)
        treeViewRef.current.openItems([sceneGroupsRootFolderId]);

      // Scroll to the new group.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        scrollToItem(groupWithContext);
      }, 100); // A few ms is enough for a new render to be done.

      // We focus it so the user can edit the name directly.
      onEditName(groupWithContext);
    }, [
      globalObjectGroups,
      objectGroups,
      onGroupAdded,
      onEditName,
      onObjectGroupModified,
      scrollToItem,
    ]);

    const onDelete = React.useCallback(
      async (groupWithContext: GroupWithContext) => {
        const { group, global } = groupWithContext;

        const answer = await showDeleteConfirmation({
          title: t`Remove group`,
          message: t`Are you sure you want to remove this group? This can't be undone.`,
        });
        if (!answer) return;

        // @ts-expect-error - TS7006 - Parameter 'doRemove' implicitly has an 'any' type.
        onDeleteGroup(groupWithContext, (doRemove) => {
          if (!doRemove) return;

          if (global) {
            globalObjectGroups.remove(group.getName());
          } else {
            objectGroups.remove(group.getName());
          }

          onObjectGroupModified();
          if (onGroupRemoved) {
            onGroupRemoved();
          }
        });
      },
      [
        globalObjectGroups,
        objectGroups,
        onDeleteGroup,
        onGroupRemoved,
        onObjectGroupModified,
        showDeleteConfirmation,
      ]
    );

    const onDuplicate = React.useCallback(
      (
        groupWithContext: GroupWithContext
// @ts-expect-error - TS2355 - A function whose declared type is neither 'void' nor 'any' must return a value.
      ): GroupWithContext | null | undefined => {
        const { group, global } = groupWithContext;

        const newName = newNameGenerator(
          group.getName(),
          (name) => objectGroups.has(name) || globalObjectGroups.has(name),
          ''
        );

        const container: gd.ObjectGroupsContainer = global
          ? globalObjectGroups
          : objectGroups;

        const serializedDuplicatedGroup = serializeToJSObject(group);
        const newGroup = container.insertNew(
          newName,
          container.getPosition(group.getName()) + 1
        );

        unserializeFromJSObject(
          newGroup,
          serializedDuplicatedGroup,
          'unserializeFrom'
        );
        newGroup.setName(newName); // Unserialization has overwritten the name.

        onObjectGroupModified();
      },
      [globalObjectGroups, objectGroups, onObjectGroupModified]
    );

    const onRename = React.useCallback(
      (groupWithContext: GroupWithContext, newName: string) => {
        const { group, global } = groupWithContext;

        if (group.getName() === newName) return;

        const validatedNewName = getValidatedObjectOrGroupName(newName, global);
        // @ts-expect-error - TS7006 - Parameter 'doRename' implicitly has an 'any' type.
        onRenameGroup(groupWithContext, validatedNewName, (doRename) => {
          if (!doRename) return;

          group.setName(validatedNewName);

          onObjectGroupModified();
          if (onGroupRenamed) {
            onGroupRenamed();
          }
        });
      },
      [
        getValidatedObjectOrGroupName,
        onObjectGroupModified,
        onRenameGroup,
        onGroupRenamed,
      ]
    );

    const setAsGlobalGroup = React.useCallback(
      async (groupWithContext: GroupWithContext, index?: number) => {
        const { group } = groupWithContext;

        const groupName = group.getName();

        if (globalObjectGroups.has(groupName)) {
          await showAlert({
            title: t`Set as global group`,
            message: t`A global object with this name already exists. Please change the group name before setting it as a global group`,
          });
          return;
        }

        if (beforeSetAsGlobalGroup && !beforeSetAsGlobalGroup(groupName)) {
          return;
        }

        const answer = await showConfirmation({
          title: t`Set as global group`,
          message: t`Global elements help to manage objects across multiple scenes and it is recommended for the most used objects.
        This action cannot be undone.
        Do you want to set as global group?`,
          confirmButtonLabel: t`Set as global`,
        });
        if (!answer) return;

        if (treeViewRef.current)
          treeViewRef.current.openItems([globalGroupsRootFolderId]);
        globalObjectGroups.insert(
          group,
          typeof index === 'number' ? index : globalObjectGroups.count()
        );
        objectGroups.remove(groupName);
        onObjectGroupModified();
        // Scroll to the moved group.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          scrollToItem(groupWithContext);
        }, 100); // A few ms is enough for a new render to be done.
      },
      [
        globalObjectGroups,
        objectGroups,
        onObjectGroupModified,
        beforeSetAsGlobalGroup,
        scrollToItem,
        showConfirmation,
        showAlert,
      ]
    );

    const canMoveSelectionTo = React.useCallback(
      (destinationItem: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
        if (destinationItem.isRoot) return false;
        if (!selectedGroupWithContext) return false;
// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
        if (destinationItem.isPlaceholder) {
          if (
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
            destinationItem.id === globalGroupsEmptyPlaceholderId &&
            !selectedGroupWithContext.global
          ) {
            // In that case, the user is drag n dropping a scene group on the
            // empty placeholder of the global groups section.
            return true;
          }
          return false;
        }

        if (
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
          selectedGroupWithContext.global === destinationItem.global ||
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
          (!selectedGroupWithContext.global && destinationItem.global)
        ) {
          return true;
        }

        return false;
      },
      [selectedGroupWithContext]
    );

    const moveSelectionTo = React.useCallback(
      async (
        destinationItem: TreeViewItem,
        where: 'before' | 'inside' | 'after'
      ) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
        if (destinationItem.isRoot) return false;
        if (!selectedGroupWithContext) return;

// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
        if (destinationItem.isPlaceholder) {
          if (
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
            destinationItem.id === globalGroupsEmptyPlaceholderId &&
            !selectedGroupWithContext.global
          ) {
            await setAsGlobalGroup(selectedGroupWithContext, 0);
          }
          return;
        }

        let container: gd.ObjectGroupsContainer;
        let fromIndex: number;
        let toIndex: number;

        const areSelectedAndTargetItemsFromSameContext =
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
          selectedGroupWithContext.global === destinationItem.global;

        if (areSelectedAndTargetItemsFromSameContext) {
          container = selectedGroupWithContext.global
            ? globalObjectGroups
            : objectGroups;

          fromIndex = container.getPosition(
            selectedGroupWithContext.group.getName()
          );
// @ts-expect-error - TS2339 - Property 'group' does not exist on type 'TreeViewItem'.
          toIndex = container.getPosition(destinationItem.group.getName());
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
        } else if (!selectedGroupWithContext.global && destinationItem.global) {
          const destinationIndex = globalObjectGroups.getPosition(
// @ts-expect-error - TS2339 - Property 'group' does not exist on type 'TreeViewItem'.
            destinationItem.group.getName()
          );
          await setAsGlobalGroup(selectedGroupWithContext, destinationIndex);
          return;
        } else {
          return;
        }
        if (toIndex > fromIndex) toIndex -= 1;
        if (where === 'after') toIndex += 1;

        container.move(fromIndex, toIndex);
        onObjectGroupModified();
        if (treeViewRef.current) treeViewRef.current.forceUpdateList();
      },
      [
        globalObjectGroups,
        objectGroups,
        onObjectGroupModified,
        selectedGroupWithContext,
        setAsGlobalGroup,
      ]
    );

    const editItem = React.useCallback(
      (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
        if (item.isRoot || item.isPlaceholder) return;
// @ts-expect-error - TS2339 - Property 'group' does not exist on type 'TreeViewItem'.
        onEditGroup(item.group);
      },
      [onEditGroup]
    );

    const renderGroupMenuTemplate = React.useCallback(
      (i18n: I18nType) => (item: TreeViewItem, index: number) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
        item.isRoot || item.isPlaceholder
          ? []
          : [
              {
                label: i18n._(t`Duplicate`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
                click: () => onDuplicate(item),
              },
              { type: 'separator' },
              {
                label: i18n._(t`Edit group`),
                click: () => editItem(item),
              },
              { type: 'separator' },
              {
                label: i18n._(t`Rename`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
                click: () => onEditName(item),
              },
              {
                label: i18n._(t`Set as global group`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
                enabled: !isGroupWithContextGlobal(item),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
                click: () => setAsGlobalGroup(item),
                visible: canSetAsGlobalGroup !== false,
              },
              {
                label: i18n._(t`Delete`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'GroupWithContext'.
                click: () => onDelete(item),
              },
              { type: 'separator' },
              {
                label: i18n._(t`Add a new group...`),
                click: addGroup,
              },
            ],
      [
        addGroup,
        onEditName,
        editItem,
        onDelete,
        onDuplicate,
        canSetAsGlobalGroup,
        setAsGlobalGroup,
      ]
    );

    const getTreeViewData = React.useCallback(
      (i18n: I18nType): Array<TreeViewItem> => {
        const objectGroupsList: GroupWithContextList = enumerateGroups(
          objectGroups
        ).map((group) => ({ group, global: false }));
        const globalObjectGroupsList: GroupWithContextList = enumerateGroups(
          globalObjectGroups
        ).map((group) => ({ group, global: true }));

        const treeViewItems = [
          {
            label: i18n._(t`Global Groups`),
            children:
              globalObjectGroupsList.length > 0
                ? globalObjectGroupsList
                : // $FlowFixMe
                  [getGlobalGroupsEmptyPlaceholder(i18n)],
            isRoot: true,
            id: globalGroupsRootFolderId,
          },
          {
            label: i18n._(t`Scene Groups`),
            children:
              objectGroupsList.length > 0
                ? objectGroupsList
                : // $FlowFixMe
                  [getSceneGroupsEmptyPlaceholder(i18n)],
            isRoot: true,
            id: sceneGroupsRootFolderId,
          },
        ];

// @ts-expect-error - TS2322 - Type '{ label: string; children: GroupWithContextList | EmptyPlaceholder[]; isRoot: boolean; id: string; }[]' is not assignable to type 'TreeViewItem[]'.
        return treeViewItems;
      },
      [globalObjectGroups, objectGroups]
    );

    // Force List component to be mounted again if globalObjectGroups or objectGroups
    // has been changed. Avoid accessing to invalid objects that could
    // crash the app.
    const listKey = objectGroups.ptr + ';' + globalObjectGroups.ptr;

    return (
      <Background>
        <Line>
          <Column expand>
            <SearchBar
              value={searchText}
              onRequestSearch={() => {}}
              onChange={setSearchText}
              placeholder={t`Search object groups`}
            />
          </Column>
        </Line>
        <div style={styles.listContainer}>
          <I18n>
            {({ i18n }) => {
              const treeViewData = getTreeViewData(i18n);
              const globalRootItem = treeViewData[0];
              const initiallyOpenedNodeIds = [
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
                globalRootItem.isRoot &&
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'TreeViewItem'.
                globalRootItem.children.length === 1 &&
// @ts-expect-error - TS2339 - Property 'children' does not exist on type 'TreeViewItem'.
                globalRootItem.children[0].isPlaceholder
                  ? null
                  : globalGroupsRootFolderId,
                sceneGroupsRootFolderId,
              ].filter(Boolean);

              return (
                <div style={{ flex: 1 }}>
                  <AutoSizer style={{ width: '100%' }} disableWidth>
                    {({ height }) => (
                      <TreeView
                        key={listKey}
                        ref={treeViewRef}
// @ts-expect-error - TS2322 - Type 'TreeViewItem[]' is not assignable to type 'ItemBaseAttributes[]'.
                        items={treeViewData}
                        height={height}
                        searchText={searchText}
// @ts-expect-error - TS2322 - Type '(item: TreeViewItem) => any' is not assignable to type '(arg1: ItemBaseAttributes) => ReactNode'.
                        getItemName={getTreeViewItemName}
// @ts-expect-error - TS2322 - Type '(item: TreeViewItem) => any' is not assignable to type '(arg1: ItemBaseAttributes) => ItemBaseAttributes[] | null | undefined'.
                        getItemChildren={getTreeViewItemChildren}
                        multiSelect={false}
// @ts-expect-error - TS2322 - Type '(item: TreeViewItem) => any' is not assignable to type '(arg1: ItemBaseAttributes) => string'.
                        getItemId={getTreeViewItemId}
// @ts-expect-error - TS2322 - Type '(item: TreeViewItem) => void' is not assignable to type '(arg1: ItemBaseAttributes) => void'.
                        onEditItem={editItem}
// @ts-expect-error - TS2322 - Type 'GroupWithContext[]' is not assignable to type 'readonly ItemBaseAttributes[]'.
                        selectedItems={
                          selectedGroupWithContext
                            ? [selectedGroupWithContext]
                            : []
                        }
                        onSelectItems={(items) => {
                          if (!items) setSelectedGroupWithContext(null);
                          const itemToSelect = items[0];
                          if (itemToSelect.isRoot || itemToSelect.isPlaceholder)
                            return;
// @ts-expect-error - TS2345 - Argument of type 'ItemBaseAttributes' is not assignable to parameter of type 'SetStateAction<GroupWithContext | null | undefined>'.
                          setSelectedGroupWithContext(itemToSelect || null);
                        }}
// @ts-expect-error - TS2322 - Type '(groupWithContext: GroupWithContext, newName: string) => void' is not assignable to type '(arg1: ItemBaseAttributes, newName: string) => void'.
                        onRenameItem={onRename}
// @ts-expect-error - TS2322 - Type '(item: TreeViewItem, index: number) => ({ type: string; label?: undefined; click?: undefined; enabled?: undefined; visible?: undefined; } | { label: string; click: () => void; type?: undefined; enabled?: undefined; visible?: undefined; } | { ...; })[]' is not assignable to type '(arg1: ItemBaseAttributes, index: number) => any'.
                        buildMenuTemplate={renderGroupMenuTemplate(i18n)}
// @ts-expect-error - TS2322 - Type '(destinationItem: TreeViewItem, where: 'before' | 'inside' | 'after') => Promise<false | undefined>' is not assignable to type '(destinationItem: ItemBaseAttributes, where: "inside" | "after" | "before") => void'.
                        onMoveSelectionToItem={moveSelectionTo}
// @ts-expect-error - TS2322 - Type '(destinationItem: TreeViewItem) => boolean' is not assignable to type '(destinationItem: ItemBaseAttributes, where: "inside" | "after" | "before") => boolean | null | undefined'.
                        canMoveSelectionToItem={canMoveSelectionTo}
                        reactDndType={groupWithContextReactDndType}
// @ts-expect-error - TS2322 - Type '(string | null)[]' is not assignable to type 'string[]'.
                        initiallyOpenedNodeIds={initiallyOpenedNodeIds}
                        shouldSelectUponContextMenuOpening
                      />
                    )}
                  </AutoSizer>
                </div>
              );
            }}
          </I18n>
        </div>
        <Line>
          <Column expand>
            <ResponsiveRaisedButton
              label={<Trans>Add a new group</Trans>}
              primary
              onClick={addGroup}
              id="add-new-group-button"
              icon={<Add />}
            />
          </Column>
        </Line>
      </Background>
    );
  }
);

const arePropsEqual = (
  prevProps: Props,
  nextProps: Props
): boolean => // The component is costly to render, so avoid any re-rendering as much
  // as possible.
  // We make the assumption that no changes to groups list is made outside
  // from the component.
  // If a change is made, the component won't notice it: you have to manually
  // call forceUpdate.
  prevProps.globalObjectGroups === nextProps.globalObjectGroups ||
  prevProps.objectGroups === nextProps.objectGroups;

// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
const MemoizedObjectGroupsList = React.memo<Props, ObjectGroupsListInterface>(
  ObjectGroupsList,
  arePropsEqual
);

const ObjectGroupsListWithErrorBoundary = React.forwardRef<
  Props,
  ObjectGroupsListInterface
>((props, ref) => (
  <ErrorBoundary
    componentTitle={<Trans>Object groups list</Trans>}
    scope="scene-editor-object-groups-list"
  >
    {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ forceUpdate: () => void; ref: ForwardedRef<Props>; }' is not assignable to type 'IntrinsicAttributes & Props'. */}
    <MemoizedObjectGroupsList ref={ref} {...props} />
  </ErrorBoundary>
));

export default ObjectGroupsListWithErrorBoundary;
