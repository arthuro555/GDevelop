// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
import newNameGenerator from '../Utils/NewNameGenerator';
import { enumerateGroups } from '../ObjectsList/EnumerateObjects';
import {
  GroupWithContextList,
  GroupWithContext,
} from '../ObjectsList/EnumerateObjects';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ResponsiveRaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveRaisedButton.tsx', but '--jsx' is not set.
import ResponsiveRaisedButton from '../UI/ResponsiveRaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS6142 - Module '../ObjectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/index.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../ObjectsList';
// @ts-expect-error - TS6142 - Module '../UI/TreeView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TreeView/index.tsx', but '--jsx' is not set.
import TreeView, { TreeViewInterface } from '../UI/TreeView';
import useForceUpdate from '../Utils/UseForceUpdate';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
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
  readonly label: string,
  readonly children: GroupWithContextList | Array<EmptyPlaceholder>,
  readonly isRoot: true,
  readonly id: string
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

const getGroupWithContextName = (groupWithContext: GroupWithContext): string => groupWithContext.group.getName();

const getTreeViewItemName = (item: TreeViewItem) =>
  item.isRoot || item.isPlaceholder ? item.label : item.group.getName();

const getTreeViewItemChildren = (item: TreeViewItem) =>
  item.isRoot ? item.children : null;

const getTreeViewItemId = (item: TreeViewItem) =>
  item.isRoot || item.isPlaceholder
    ? item.id
    : `group-item-${getGroupWithContextName(item)}`;

const isGroupWithContextGlobal = (groupWithContext: GroupWithContext) =>
  groupWithContext.global;

export type ObjectGroupsListInterface = {
  forceUpdate: () => void
};

type Props = {
  globalObjectGroups: gdObjectGroupsContainer,
  objectGroups: gdObjectGroupsContainer,
  onDeleteGroup: (groupWithContext: GroupWithContext, cb: any) => void,
  onEditGroup: (arg1: gdObjectGroup) => void,
  getValidatedObjectOrGroupName: (newName: string, global: boolean) => string,
  onRenameGroup: (groupWithContext: GroupWithContext, newName: string, cb: any) => void,
  beforeSetAsGlobalGroup?: (groupName: string) => boolean,
  onGroupAdded?: () => void,
  onGroupRemoved?: () => void,
  onGroupRenamed?: () => void,
  canSetAsGlobalGroup?: boolean,
  unsavedChanges?: UnsavedChanges | null | undefined
};

const ObjectGroupsList = React.forwardRef<Props, ObjectGroupsListInterface>((props, ref) => {
  const {
// @ts-expect-error - TS2339 - Property 'globalObjectGroups' does not exist on type 'ObjectGroupsListInterface'.
    globalObjectGroups,
// @ts-expect-error - TS2339 - Property 'objectGroups' does not exist on type 'ObjectGroupsListInterface'.
    objectGroups,
// @ts-expect-error - TS2339 - Property 'onGroupAdded' does not exist on type 'ObjectGroupsListInterface'.
    onGroupAdded,
// @ts-expect-error - TS2339 - Property 'onDeleteGroup' does not exist on type 'ObjectGroupsListInterface'.
    onDeleteGroup,
// @ts-expect-error - TS2339 - Property 'onGroupRemoved' does not exist on type 'ObjectGroupsListInterface'.
    onGroupRemoved,
// @ts-expect-error - TS2339 - Property 'getValidatedObjectOrGroupName' does not exist on type 'ObjectGroupsListInterface'.
    getValidatedObjectOrGroupName,
// @ts-expect-error - TS2339 - Property 'onRenameGroup' does not exist on type 'ObjectGroupsListInterface'.
    onRenameGroup,
// @ts-expect-error - TS2339 - Property 'onGroupRenamed' does not exist on type 'ObjectGroupsListInterface'.
    onGroupRenamed,
// @ts-expect-error - TS2339 - Property 'beforeSetAsGlobalGroup' does not exist on type 'ObjectGroupsListInterface'.
    beforeSetAsGlobalGroup,
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'ObjectGroupsListInterface'.
    unsavedChanges,
// @ts-expect-error - TS2339 - Property 'onEditGroup' does not exist on type 'ObjectGroupsListInterface'.
    onEditGroup,
// @ts-expect-error - TS2339 - Property 'canSetAsGlobalGroup' does not exist on type 'ObjectGroupsListInterface'.
    canSetAsGlobalGroup,
  } = props;
  const [
    selectedGroupWithContext,
    setSelectedGroupWithContext,
  ] = React.useState<GroupWithContext | null | undefined>(null);
  const [searchText, setSearchText] = React.useState<string>('');
  const treeViewRef = React.useRef<TreeViewInterface<TreeViewItem> | null | undefined>(null);
  const forceUpdate = useForceUpdate();
  const {
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
    showDeleteConfirmation,
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
    showConfirmation,
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
    showAlert,
  } = useAlertDialog();

// @ts-expect-error - TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': globalObjectGroups, objectGroups, onDeleteGroup, onEditGroup, and 2 more.
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

  const onObjectGroupModified = React.useCallback(
    () => {
      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();
      forceUpdate();
    },
    [unsavedChanges, forceUpdate]
  );

  const addGroup = React.useCallback(
    () => {
      const name = newNameGenerator(
        'Group',
        name => objectGroups.has(name) || globalObjectGroups.has(name)
      );

      const newObjectGroup = objectGroups.insertNew(
        name,
        objectGroups.count()
      );
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
    },
    [
      globalObjectGroups,
      objectGroups,
      onGroupAdded,
      onEditName,
      onObjectGroupModified,
      scrollToItem,
    ]
  );

  const onDelete = React.useCallback(
    async (groupWithContext: GroupWithContext) => {
      const { group, global } = groupWithContext;

      const answer = await showDeleteConfirmation({
        title: t`Remove group`,
        message: t`Are you sure you want to remove this group? This can't be undone.`,
      });
      if (!answer) return;

// @ts-expect-error - TS7006 - Parameter 'doRemove' implicitly has an 'any' type.
      onDeleteGroup(groupWithContext, doRemove => {
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
// @ts-expect-error - TS2355 - A function whose declared type is neither 'void' nor 'any' must return a value.
    (groupWithContext: GroupWithContext): GroupWithContext | null | undefined => {
      const { group, global } = groupWithContext;

      const newName = newNameGenerator(
        group.getName(),
        name => objectGroups.has(name) || globalObjectGroups.has(name),
        ''
      );

      const container: gdObjectGroupsContainer = global
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
      onRenameGroup(groupWithContext, validatedNewName, doRename => {
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
      if (destinationItem.isRoot) return false;
      if (!selectedGroupWithContext) return false;
      if (destinationItem.isPlaceholder) {
        if (
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
        selectedGroupWithContext.global === destinationItem.global ||
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
      if (destinationItem.isRoot) return false;
      if (!selectedGroupWithContext) return;

      if (destinationItem.isPlaceholder) {
        if (
          destinationItem.id === globalGroupsEmptyPlaceholderId &&
          !selectedGroupWithContext.global
        ) {
          await setAsGlobalGroup(selectedGroupWithContext, 0);
        }
        return;
      }

      let container: gdObjectGroupsContainer;
      let fromIndex: number;
      let toIndex: number;

      const areSelectedAndTargetItemsFromSameContext =
        selectedGroupWithContext.global === destinationItem.global;

      if (areSelectedAndTargetItemsFromSameContext) {
        container = selectedGroupWithContext.global
          ? globalObjectGroups
          : objectGroups;

        fromIndex = container.getPosition(
          selectedGroupWithContext.group.getName()
        );
        toIndex = container.getPosition(destinationItem.group.getName());
      } else if (!selectedGroupWithContext.global && destinationItem.global) {
        const destinationIndex = globalObjectGroups.getPosition(
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
      if (item.isRoot || item.isPlaceholder) return;
      onEditGroup(item.group);
    },
    [onEditGroup]
  );

  const renderGroupMenuTemplate = React.useCallback(
    (i18n: I18nType) => (item: TreeViewItem, index: number) =>
      item.isRoot || item.isPlaceholder
        ? []
        : [
            {
              label: i18n._(t`Duplicate`),
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
              click: () => onEditName(item),
            },
            {
              label: i18n._(t`Set as global group`),
              enabled: !isGroupWithContextGlobal(item),
              click: () => setAsGlobalGroup(item),
              visible: canSetAsGlobalGroup !== false,
            },
            {
              label: i18n._(t`Delete`),
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
      ).map(group => ({ group, global: false }));
      const globalObjectGroupsList: GroupWithContextList = enumerateGroups(
        globalObjectGroups
      ).map(group => ({ group, global: true }));

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

      return treeViewItems;
    },
    [globalObjectGroups, objectGroups]
  );

  // Force List component to be mounted again if globalObjectGroups or objectGroups
  // has been changed. Avoid accessing to invalid objects that could
  // crash the app.
  const listKey = objectGroups.ptr + ';' + globalObjectGroups.ptr;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SearchBar
            value={searchText}
            onRequestSearch={() => {}}
            onChange={setSearchText}
            placeholder={t`Search object groups`}
          />
        </Column>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.listContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => {
            const treeViewData = getTreeViewData(i18n);
            const globalRootItem = treeViewData[0];
            const initiallyOpenedNodeIds = [
              globalRootItem.isRoot &&
              globalRootItem.children.length === 1 &&
              globalRootItem.children[0].isPlaceholder
                ? null
                : globalGroupsRootFolderId,
              sceneGroupsRootFolderId,
            ].filter(Boolean);

            return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div style={{ flex: 1 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <AutoSizer style={{ width: '100%' }} disableWidth>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. */}
                  {({ height }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <TreeView
                      key={listKey}
                      ref={treeViewRef}
                      items={treeViewData}
                      height={height}
                      searchText={searchText}
                      getItemName={getTreeViewItemName}
                      getItemChildren={getTreeViewItemChildren}
                      multiSelect={false}
                      getItemId={getTreeViewItemId}
                      onEditItem={editItem}
                      selectedItems={
                        selectedGroupWithContext
                          ? [selectedGroupWithContext]
                          : []
                      }
// @ts-expect-error - TS7006 - Parameter 'items' implicitly has an 'any' type.
                      onSelectItems={items => {
                        if (!items) setSelectedGroupWithContext(null);
                        const itemToSelect = items[0];
                        if (itemToSelect.isRoot || itemToSelect.isPlaceholder)
                          return;
                        setSelectedGroupWithContext(itemToSelect || null);
                      }}
                      onRenameItem={onRename}
                      buildMenuTemplate={renderGroupMenuTemplate(i18n)}
                      onMoveSelectionToItem={moveSelectionTo}
                      canMoveSelectionToItem={canMoveSelectionTo}
                      reactDndType={groupWithContextReactDndType}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveRaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add a new group</Trans>}
            primary
            onClick={addGroup}
            id="add-new-group-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add />}
          />
        </Column>
      </Line>
    </Background>
  );
});

const arePropsEqual = (prevProps: Props, nextProps: Props): boolean => // The component is costly to render, so avoid any re-rendering as much
// as possible.
// We make the assumption that no changes to groups list is made outside
// from the component.
// If a change is made, the component won't notice it: you have to manually
// call forceUpdate.
prevProps.globalObjectGroups === nextProps.globalObjectGroups ||
prevProps.objectGroups === nextProps.objectGroups;

// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
const MemoizedObjectGroupsList = React.memo<Props, ObjectGroupsListInterface>(ObjectGroupsList, arePropsEqual);

const ObjectGroupsListWithErrorBoundary = React.forwardRef<Props, ObjectGroupsListInterface>((props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Object groups list</Trans>}
    scope="scene-editor-object-groups-list"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ forceUpdate: () => void; ref: ForwardedRef<Props>; }' is not assignable to type 'IntrinsicAttributes & Props'. */}
    <MemoizedObjectGroupsList ref={ref} {...props} />
  </ErrorBoundary>
));

export default ObjectGroupsListWithErrorBoundary;
