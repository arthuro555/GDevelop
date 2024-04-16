// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
// @ts-expect-error - TS6142 - Module '../AssetStore/NewObjectDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NewObjectDialog.tsx', but '--jsx' is not set.
import NewObjectDialog from '../AssetStore/NewObjectDialog';
import newNameGenerator from '../Utils/NewNameGenerator';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import Window from '../Utils/Window';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import { showWarningBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../ObjectEditor/ObjectEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/ObjectEditorDialog.tsx', but '--jsx' is not set.
import { ObjectEditorTab } from '../ObjectEditor/ObjectEditorDialog';
import type { ObjectWithContext } from '../ObjectsList/EnumerateObjects';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './ClipboardKind'. '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/ClipboardKind.js' implicitly has an 'any' type.
import { CLIPBOARD_KIND } from './ClipboardKind';
// @ts-expect-error - TS6142 - Module '../UI/TreeView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TreeView/index.tsx', but '--jsx' is not set.
import TreeView, { TreeViewInterface } from '../UI/TreeView';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
import { getInstanceCountInLayoutForObject } from '../Utils/Layout';
import useForceUpdate from '../Utils/UseForceUpdate';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { getShortcutDisplayName } from '../KeyboardShortcuts';
import defaultShortcuts from '../KeyboardShortcuts/DefaultShortcuts';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ResponsiveRaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveRaisedButton.tsx', but '--jsx' is not set.
import ResponsiveRaisedButton from '../UI/ResponsiveRaisedButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';
import {
  enumerateFoldersInContainer,
  enumerateFoldersInFolder,
  enumerateObjectsInFolder,
  getFoldersAscendanceWithoutRootFolder,
  getObjectFolderOrObjectUnifiedName,
  ObjectFolderOrObjectWithContext,
} from './EnumerateObjectFolderOrObject';
import { mapFor } from '../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/AddFolder'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AddFolder.js' implicitly has an 'any' type.
import AddFolder from '../UI/CustomSvgIcons/AddFolder';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
import KeyboardShortcuts from '../UI/KeyboardShortcuts';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import { getHelpLink } from '../Utils/HelpLink';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

const gd: libGDevelop = global.gd;
const sceneObjectsRootFolderId = 'scene-objects';
const globalObjectsRootFolderId = 'global-objects';
const globalObjectsEmptyPlaceholderId = 'global-empty-placeholder';
const sceneObjectsEmptyPlaceholderId = 'scene-empty-placeholder';

const globalObjectsWikiLink = getHelpLink(
  '/interface/scene-editor/global-objects/',
  ':~:text=Global%20objects%20are%20objects%20which,are%20usable%20by%20all%20Scenes'
);

const styles = {
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  autoSizerContainer: { flex: 1 },
  autoSizer: { width: '100%' },
} as const;

export type EmptyPlaceholder = {
  readonly label: string,
  readonly isPlaceholder: true,
  readonly id: string
};

type RootFolder = {
  readonly label: string,
  readonly children: Array<EmptyPlaceholder> | null | undefined,
  readonly objectFolderOrObject: gdObjectFolderOrObject,
  readonly global: boolean,
  readonly isRoot: true,
  readonly id: string
};

type TreeViewItem = ObjectFolderOrObjectWithContext | RootFolder | EmptyPlaceholder;

const objectTypeToDefaultName = {
  Sprite: 'NewSprite',
  'TiledSpriteObject::TiledSprite': 'NewTiledSprite',
  'ParticleSystem::ParticleEmitter': 'NewParticlesEmitter',
  'PanelSpriteObject::PanelSprite': 'NewPanelSprite',
  'PrimitiveDrawing::Drawer': 'NewShapePainter',
  'TextObject::Text': 'NewText',
  'BBText::BBText': 'NewBBText',
  'BitmapText::BitmapTextObject': 'NewBitmapText',
  'TextEntryObject::TextEntry': 'NewTextEntry',
  'TileMap::TileMap': 'NewTileMap',
  'TileMap::CollisionMask': 'NewTileMapMask',
  'MyDummyExtension::DummyObject': 'NewDummyObject',
  'Lighting::LightObject': 'NewLight',
  'TextInput::TextInputObject': 'NewTextInput',
  'Scene3D::Model3DObject': 'New3DModel',
  'Scene3D::Cube3DObject': 'New3DBox',
  'SpineObject::SpineObject': 'NewSpine',
  'Video::VideoObject': 'NewVideo',
} as const;

export const objectWithContextReactDndType = 'GD_OBJECT_WITH_CONTEXT';

const getTreeViewItemName = (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'. | TS2339 - Property 'label' does not exist on type 'TreeViewItem'.
  if (item.isRoot || item.isPlaceholder) return item.label;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
  return getObjectFolderOrObjectUnifiedName(item.objectFolderOrObject);
};

const getTreeViewItemId = (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'. | TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
  if (item.isRoot || item.isPlaceholder) return item.id;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
  const { objectFolderOrObject } = item;
  if (objectFolderOrObject.isFolder()) {
    // Use the ptr as id since two folders can have the same name.
    // If using folder name, this would need for methods when renaming
    // the folder to keep it open.
    return `object-folder-${objectFolderOrObject.ptr}`;
  }
  const object = objectFolderOrObject.getObject();
  // Use the ptr to avoid display bugs in the rare case a user set an object
  // as global although another layout has an object with the same name,
  // and ignored the warning.
  return `${object.getName()}-${object.ptr}`;
};

const getTreeViewItemHtmlId = (item: TreeViewItem, index: number) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
  item.isRoot || item.isPlaceholder ? undefined : `object-item-${index}`;

const getTreeViewItemChildren = (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
  if (item.isPlaceholder) return null;
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'children' does not exist on type 'TreeViewItem'. | TS2339 - Property 'children' does not exist on type 'TreeViewItem'.
  if (item.isRoot && item.children) return item.children;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'. | TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
  const { objectFolderOrObject, global } = item;
  if (!objectFolderOrObject.isFolder()) return null;
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  return mapFor(0, objectFolderOrObject.getChildrenCount(), i => ({
    objectFolderOrObject: objectFolderOrObject.getChildAt(i),
    global,
  }));
};
const getTreeViewItemData = (item: TreeViewItem) =>
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'. | TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
  item.isRoot || item.isPlaceholder || item.objectFolderOrObject.isFolder()
    ? undefined
    : {
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
        objectName: item.objectFolderOrObject.getObject().getName(),
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
        global: item.global.toString(),
      };

const isObjectFolderOrObjectWithContextGlobal = (
  objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext
) => objectFolderOrObjectWithContext.global;

const getPasteLabel = (
  i18n: I18nType,
  {
    isGlobalObject,
    isFolder,
  }: {
    isGlobalObject: boolean,
    isFolder: boolean
  }
) => {
  let translation = t`Paste`;
  if (Clipboard.has(CLIPBOARD_KIND)) {
    const clipboardContent = Clipboard.get(CLIPBOARD_KIND);
    const clipboardObjectName =
      SafeExtractor.extractStringProperty(clipboardContent, 'name') || '';
    translation = isGlobalObject
      ? isFolder
        ? t`Paste ${clipboardObjectName} as a Global Object inside folder`
        : t`Paste ${clipboardObjectName} as a Global Object`
      : isFolder
      ? t`Paste ${clipboardObjectName} inside folder`
      : t`Paste ${clipboardObjectName}`;
  }
  return i18n._(translation);
};

export type ObjectsListInterface = {
  forceUpdateList: () => void,
  openNewObjectDialog: () => void,
  closeNewObjectDialog: () => void,
  renameObjectFolderOrObjectWithContext: (arg1: ObjectFolderOrObjectWithContext) => void
};

type Props = {
  project: gdProject,
  layout: gdLayout | null | undefined,
  initialInstances?: gdInitialInstancesContainer,
  objectsContainer: gdObjectsContainer,
  onSelectAllInstancesOfObjectInLayout?: (arg1: string) => void,
  resourceManagementProps: ResourceManagementProps,
  onDeleteObjects: (objectWithContext: ObjectWithContext[], cb: (arg1: boolean) => void) => void,
  onRenameObjectFolderOrObjectWithContextFinish: (
    objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
    newName: string,
    cb: (arg1: boolean) => void,
  ) => void,
  selectedObjectFolderOrObjectsWithContext: Array<ObjectFolderOrObjectWithContext>,
  canInstallPrivateAsset: () => boolean,
  beforeSetAsGlobalObject?: (groupName: string) => boolean,
  canSetAsGlobalObject?: boolean,
  onEditObject: (object: gdObject, initialTab?: ObjectEditorTab | null | undefined) => void,
  onExportAssets: () => void,
  onObjectCreated: (arg1: gdObject) => void,
  onObjectFolderOrObjectWithContextSelected: (arg1?: ObjectFolderOrObjectWithContext | null | undefined) => void,
  onObjectPasted?: (arg1: gdObject) => void,
  getValidatedObjectOrGroupName: (newName: string, global: boolean) => string,
  onAddObjectInstance: (objectName: string) => void,
  getThumbnail: (project: gdProject, objectConfiguration: gdObjectConfiguration) => string,
  unsavedChanges?: UnsavedChanges | null | undefined,
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps
};

// @ts-expect-error - TS2345 - Argument of type '({ project, layout, initialInstances, objectsContainer, resourceManagementProps, onSelectAllInstancesOfObjectInLayout, onDeleteObjects, onRenameObjectFolderOrObjectWithContextFinish, selectedObjectFolderOrObjectsWithContext, canInstallPrivateAsset, beforeSetAsGlobalObject, canSetAsGlobalObject, onEditObject, onExpor...' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, ObjectsListInterface>'.
const ObjectsList = React.forwardRef<Props, ObjectsListInterface>((
  {
    project,
    layout,
    initialInstances,
    objectsContainer,
    resourceManagementProps,
    onSelectAllInstancesOfObjectInLayout,
    onDeleteObjects,
    onRenameObjectFolderOrObjectWithContextFinish,
    selectedObjectFolderOrObjectsWithContext,
    canInstallPrivateAsset,
    beforeSetAsGlobalObject,
    canSetAsGlobalObject,
    onEditObject,
    onExportAssets,
    onObjectCreated,
    onObjectFolderOrObjectWithContextSelected,
    onObjectPasted,
    getValidatedObjectOrGroupName,
    onAddObjectInstance,
    getThumbnail,
    unsavedChanges,
    hotReloadPreviewButtonProps,
  }: Props,
  ref
) => {
  const preferences = React.useContext(PreferencesContext);
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
  const { showDeleteConfirmation } = useAlertDialog();
  const treeViewRef = React.useRef<TreeViewInterface<TreeViewItem> | null | undefined>(null);
  const forceUpdate = useForceUpdate();
  const { isMobile } = useResponsiveWindowSize();

  const forceUpdateList = React.useCallback(
    () => {
      forceUpdate();
      if (treeViewRef.current) treeViewRef.current.forceUpdateList();
    },
    [forceUpdate]
  );

  const [newObjectDialogOpen, setNewObjectDialogOpen] = React.useState<{
    from: ObjectFolderOrObjectWithContext | null
  } | null>(null);

// @ts-expect-error - TS2740 - Type '{ forceUpdateList: () => void; openNewObjectDialog: () => void; closeNewObjectDialog: () => void; renameObjectFolderOrObjectWithContext: (objectFolderOrObjectWithContext: any) => void; }' is missing the following properties from type 'Props': project, layout, objectsContainer, resourceManagementProps, and 12 more.
  React.useImperativeHandle(ref, () => ({
    forceUpdateList: () => {
      forceUpdate();
      if (treeViewRef.current) treeViewRef.current.forceUpdateList();
    },
    openNewObjectDialog: () => {
      setNewObjectDialogOpen({ from: null });
    },
    closeNewObjectDialog: () => {
      setNewObjectDialogOpen(null);
    },
// @ts-expect-error - TS7006 - Parameter 'objectFolderOrObjectWithContext' implicitly has an 'any' type.
    renameObjectFolderOrObjectWithContext: objectFolderOrObjectWithContext => {
      if (treeViewRef.current)
        treeViewRef.current.renameItem(objectFolderOrObjectWithContext);
    },
  }));

  const [searchText, setSearchText] = React.useState('');

  const addObject = React.useCallback(
    (objectType: string) => {
      const defaultName = project.hasEventsBasedObject(objectType)
        ? 'New' + project.getEventsBasedObject(objectType).getDefaultName()
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly Sprite: "NewSprite"; readonly 'TiledSpriteObject::TiledSprite': "NewTiledSprite"; readonly 'ParticleSystem::ParticleEmitter': "NewParticlesEmitter"; readonly 'PanelSpriteObject::PanelSprite': "NewPanelSprite"; ... 13 more ...; readonly 'Video::VideoObject': "NewVideo"; }'.
        : objectTypeToDefaultName[objectType] || 'NewObject';
      const name = newNameGenerator(
        defaultName,
        name =>
          objectsContainer.hasObjectNamed(name) ||
          project.hasObjectNamed(name)
      );

      let object;
// @ts-expect-error - TS7034 - Variable 'objectFolderOrObjectWithContext' implicitly has type 'any' in some locations where its type cannot be determined.
      let objectFolderOrObjectWithContext;
      if (
        newObjectDialogOpen &&
        newObjectDialogOpen.from &&
        !newObjectDialogOpen.from.global
      ) {
        const selectedItem = newObjectDialogOpen.from.objectFolderOrObject;
        const parentFolder = selectedItem.isFolder()
          ? selectedItem
          : selectedItem.getParent();
        const insertionIndex = selectedItem.isFolder()
          ? parentFolder.getChildrenCount()
          : parentFolder.getChildPosition(selectedItem) + 1;

        // If a scene folder is selected, insert object in the folder.
        object = objectsContainer.insertNewObjectInFolder(
          project,
          objectType,
          name,
          parentFolder,
          insertionIndex
        );
        objectFolderOrObjectWithContext = {
          objectFolderOrObject: parentFolder.getObjectChild(name),
          global: false,
        };

        if (treeViewRef.current) {
          treeViewRef.current.openItems([
            getTreeViewItemId({
              objectFolderOrObject: parentFolder,
              global: false,
            }),
          ]);
        }
      } else {
        object = objectsContainer.insertNewObject(
          project,
          objectType,
          name,
          objectsContainer.getObjectsCount()
        );
        objectFolderOrObjectWithContext = {
          objectFolderOrObject: objectsContainer
            .getRootFolder()
            .getObjectChild(name),
          global: false,
        };
      }

      if (treeViewRef.current)
        treeViewRef.current.openItems([sceneObjectsRootFolderId]);

      // Scroll to the new object.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
// @ts-expect-error - TS7005 - Variable 'objectFolderOrObjectWithContext' implicitly has an 'any' type.
        scrollToItem(objectFolderOrObjectWithContext);
      }, 100); // A few ms is enough for a new render to be done.

      setNewObjectDialogOpen(null);
      // TODO Should it be called later?
      if (onEditObject) {
        onEditObject(object);
        onObjectCreated(object);
        onObjectFolderOrObjectWithContextSelected(
          objectFolderOrObjectWithContext
        );
      }
    },
    [
      project,
      newObjectDialogOpen,
      onEditObject,
      objectsContainer,
      onObjectCreated,
      onObjectFolderOrObjectWithContextSelected,
    ]
  );

  const onObjectsAddedFromAssets = React.useCallback(
    (objects: Array<gdObject>) => {
      objects.forEach(object => {
        onObjectCreated(object);
      });
      if (treeViewRef.current)
        treeViewRef.current.openItems([sceneObjectsRootFolderId]);

      const lastObject = objects[objects.length - 1];
      const objectFolderOrObjectWithContext = {
        // A new object is always added to the scene (layout) by default.
        objectFolderOrObject: objectsContainer
          .getRootFolder()
          .getObjectChild(lastObject.getName()),
        global: false,
      } as const;

      // Scroll to the new object.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        scrollToItem(objectFolderOrObjectWithContext);
      }, 100); // A few ms is enough for a new render to be done.
    },
    [onObjectCreated, objectsContainer]
  );

  const onAddNewObject = React.useCallback(
    (item: ObjectFolderOrObjectWithContext | null) => {
      setNewObjectDialogOpen({ from: item });
    },
    []
  );

  const onObjectModified = React.useCallback(
    (shouldForceUpdateList: boolean) => {
      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();

      if (shouldForceUpdateList) forceUpdateList();
      else forceUpdate();
    },
    [forceUpdate, forceUpdateList, unsavedChanges]
  );

  const selectObjectFolderOrObjectWithContext = React.useCallback(
    (objectFolderOrObjectWithContext?: ObjectFolderOrObjectWithContext | null) => {
      onObjectFolderOrObjectWithContextSelected(
        objectFolderOrObjectWithContext
      );
    },
    [onObjectFolderOrObjectWithContextSelected]
  );

  const deleteObjectFolderOrObjectWithContext = React.useCallback(
    async (
      objectFolderOrObjectWithContext?: ObjectFolderOrObjectWithContext | null
    ) => {
      if (!objectFolderOrObjectWithContext) return;
      const {
        objectFolderOrObject,
        global,
      } = objectFolderOrObjectWithContext;

      let objectsToDelete: gdObject[];
      let folderToDelete: gdObjectFolderOrObject | null | undefined = null;
      let message: MessageDescriptor;
      let title: MessageDescriptor;

      if (objectFolderOrObject.isFolder()) {
        objectsToDelete = enumerateObjectsInFolder(objectFolderOrObject);
        if (objectsToDelete.length === 0) {
          // Folder is empty or contains only empty folders.
          selectObjectFolderOrObjectWithContext(null);
          objectFolderOrObject
            .getParent()
            .removeFolderChild(objectFolderOrObject);
          forceUpdateList();
          return;
        }

        folderToDelete = objectFolderOrObject;
        if (objectsToDelete.length === 1) {
          message = t`Are you sure you want to remove this folder and with it the object ${objectsToDelete[0].getName()}? This can't be undone.`;
          title = t`Remove folder and object`;
        } else {
          message = t`Are you sure you want to remove this folder and all its content (objects ${objectsToDelete
            .map(object => object.getName())
            .join(', ')})? This can't be undone.`;
          title = t`Remove folder and objects`;
        }
      } else {
        objectsToDelete = [objectFolderOrObject.getObject()];
        message = t`Are you sure you want to remove this object? This can't be undone.`;
        title = t`Remove object`;
      }

      const answer = await showDeleteConfirmation({ message, title });
      if (!answer) return;

      const objectsWithContext = objectsToDelete.map(object => ({
        object,
        global,
      }));

      // TODO: Change selectedObjectFolderOrObjectWithContext so that it's easy
      // to remove an item using keyboard only and to navigate with the arrow
      // keys right after deleting it.
      selectObjectFolderOrObjectWithContext(null);

      // It's important to call onDeleteObjects, because the parent might
      // have to do some refactoring/clean up work before the object is deleted
      // (typically, the SceneEditor will remove instances referring to the object,
      // leading to the removal of their renderer - which can keep a reference to
      // the object).
      onDeleteObjects(objectsWithContext, doRemove => {
        if (!doRemove) return;
        const container = global ? project : objectsContainer;
        objectsToDelete.forEach(object => {
          container.removeObject(object.getName());
        });

        if (folderToDelete) {
          folderToDelete.getParent().removeFolderChild(folderToDelete);
          forceUpdateList();
        }

        onObjectModified(false);
      });
    },
    [
      objectsContainer,
      onDeleteObjects,
      onObjectModified,
      project,
      forceUpdateList,
      selectObjectFolderOrObjectWithContext,
      showDeleteConfirmation,
    ]
  );

  // Initialize keyboard shortcuts as empty.
  // onDelete callback is set outside because it deletes the selected
  // item (that is a props). As it is stored in a ref, the keyboard shortcut
  // instance does not update with selectedObjectFolderOrObjectsWithContext changes.
  const keyboardShortcutsRef = React.useRef<KeyboardShortcuts>(new KeyboardShortcuts({
    shortcutCallbacks: {},
  }));
  React.useEffect(
    () => {
      if (keyboardShortcutsRef.current) {
// @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onDelete', () => {
          deleteObjectFolderOrObjectWithContext(
            selectedObjectFolderOrObjectsWithContext[0]
          );
        });
      }
    },
    [
      selectedObjectFolderOrObjectsWithContext,
      deleteObjectFolderOrObjectWithContext,
    ]
  );

  const copyObjectFolderOrObjectWithContext = React.useCallback(
    (objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext) => {
      const { objectFolderOrObject } = objectFolderOrObjectWithContext;
      if (objectFolderOrObject.isFolder()) return;
      const object = objectFolderOrObject.getObject();
      Clipboard.set(CLIPBOARD_KIND, {
        type: object.getType(),
        name: object.getName(),
        object: serializeToJSObject(object),
      });
    },
    []
  );

  const cutObjectFolderOrObjectWithContext = React.useCallback(
    (objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext) => {
      copyObjectFolderOrObjectWithContext(objectFolderOrObjectWithContext);
      deleteObjectFolderOrObjectWithContext(objectFolderOrObjectWithContext);
    },
    [
      copyObjectFolderOrObjectWithContext,
      deleteObjectFolderOrObjectWithContext,
    ]
  );

  const addSerializedObjectToObjectsContainer = React.useCallback(
    (
      {
        objectName,
        positionObjectFolderOrObjectWithContext,
        objectType,
        serializedObject,
        addInsideFolder,
      }: {
        objectName: string,
        positionObjectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
        objectType: string,
        serializedObject: any,
        addInsideFolder?: boolean
      },
    ): ObjectWithContext => {
      const newName = newNameGenerator(
        objectName,
        name =>
          objectsContainer.hasObjectNamed(name) ||
          project.hasObjectNamed(name),
        ''
      );

      const {
        objectFolderOrObject,
        global,
      } = positionObjectFolderOrObjectWithContext;
      let positionFolder, positionInFolder;
      if (addInsideFolder && objectFolderOrObject.isFolder()) {
        positionFolder = objectFolderOrObject;
        positionInFolder = objectFolderOrObject.getChildrenCount();
      } else {
        positionFolder = objectFolderOrObject.getParent();
        positionInFolder = positionFolder.getChildPosition(
          objectFolderOrObject
        );
      }

      const newObject = global
        ? project.insertNewObjectInFolder(
            project,
            objectType,
            newName,
            positionFolder,
            positionInFolder + 1
          )
        : objectsContainer.insertNewObjectInFolder(
            project,
            objectType,
            newName,
            positionFolder,
            positionInFolder + 1
          );

      unserializeFromJSObject(
        newObject,
        serializedObject,
        'unserializeFrom',
        project
      );
      newObject.setName(newName); // Unserialization has overwritten the name.

      return { object: newObject, global };
    },
    [objectsContainer, project]
  );

  const paste = React.useCallback(
    (
      objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
      addInsideFolder?: boolean
    ) => {
      if (!Clipboard.has(CLIPBOARD_KIND)) return;

      const clipboardContent = Clipboard.get(CLIPBOARD_KIND);
      const copiedObject = SafeExtractor.extractObjectProperty(
        clipboardContent,
        'object'
      );
      const name = SafeExtractor.extractStringProperty(
        clipboardContent,
        'name'
      );
      const type = SafeExtractor.extractStringProperty(
        clipboardContent,
        'type'
      );
      if (!name || !type || !copiedObject) return;

      const newObjectWithContext = addSerializedObjectToObjectsContainer({
        objectName: name,
        positionObjectFolderOrObjectWithContext: objectFolderOrObjectWithContext,
        objectType: type,
        serializedObject: copiedObject,
        addInsideFolder,
      });

      onObjectModified(false);
      if (onObjectPasted) onObjectPasted(newObjectWithContext.object);
      if (addInsideFolder && treeViewRef.current)
        treeViewRef.current.openItems([
          getTreeViewItemId(objectFolderOrObjectWithContext),
        ]);
    },
    [addSerializedObjectToObjectsContainer, onObjectModified, onObjectPasted]
  );

  const editName = React.useCallback(
    (objectFolderOrObjectWithContext?: ObjectFolderOrObjectWithContext | null) => {
      if (!objectFolderOrObjectWithContext) return;
      const treeView = treeViewRef.current;
      if (treeView) {
        if (isMobile) {
          // Position item at top of the screen to make sure it will be visible
          // once the keyboard is open.
          treeView.scrollToItem(objectFolderOrObjectWithContext, 'start');
        }
        treeView.renameItem(objectFolderOrObjectWithContext);
      }
    },
    [isMobile]
  );

  const duplicateObject = React.useCallback(
    (
      objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
      duplicateInScene?: boolean
    ) => {
      const {
        objectFolderOrObject,
        global,
      } = objectFolderOrObjectWithContext;
      if (objectFolderOrObject.isFolder()) return;

      const object = objectFolderOrObject.getObject();
      const type = object.getType();
      const name = object.getName();
      const serializedObject = serializeToJSObject(object);

      const newObjectWithContext = addSerializedObjectToObjectsContainer({
        objectName: name,
        positionObjectFolderOrObjectWithContext: objectFolderOrObjectWithContext,
        objectType: type,
        serializedObject,
      });

      const newObjectFolderOrObjectWithContext = {
        objectFolderOrObject: objectFolderOrObject
          .getParent()
          .getObjectChild(newObjectWithContext.object.getName()),
        global,
      } as const;

      forceUpdateList();
      editName(newObjectFolderOrObjectWithContext);
      selectObjectFolderOrObjectWithContext(
        newObjectFolderOrObjectWithContext
      );
    },
    [
      addSerializedObjectToObjectsContainer,
      editName,
      forceUpdateList,
      selectObjectFolderOrObjectWithContext,
    ]
  );

  const rename = React.useCallback(
    (item: TreeViewItem, newName: string) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (item.isRoot || item.isPlaceholder) return;
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'. | TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
      const { global, objectFolderOrObject } = item;

      if (
        getObjectFolderOrObjectUnifiedName(objectFolderOrObject) === newName
      )
        return;

      const validatedNewName = objectFolderOrObject.isFolder()
        ? newName
        : getValidatedObjectOrGroupName(newName, global);
      onRenameObjectFolderOrObjectWithContextFinish(
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
        item,
        validatedNewName,
        doRename => {
          if (!doRename) return;

          onObjectModified(false);
        }
      );
    },
    [
      getValidatedObjectOrGroupName,
      onObjectModified,
      onRenameObjectFolderOrObjectWithContextFinish,
    ]
  );

  const editItem = React.useCallback(
    (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (item.isRoot || item.isPlaceholder) return;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
      const { objectFolderOrObject } = item;
      if (objectFolderOrObject.isFolder()) return;

      onEditObject(objectFolderOrObject.getObject());
    },
    [onEditObject]
  );

  const scrollToItem = (
    objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext
  ) => {
    if (treeViewRef.current) {
      treeViewRef.current.scrollToItem(objectFolderOrObjectWithContext);
    }
  };

  const getClosestVisibleParent = (objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext): ObjectFolderOrObjectWithContext | null | undefined => {
    const treeView = treeViewRef.current;
    if (!treeView) return null;
    const { objectFolderOrObject, global } = objectFolderOrObjectWithContext;
    const topToBottomAscendanceWithContext = getFoldersAscendanceWithoutRootFolder(
      objectFolderOrObject
    )
      .reverse()
      .map(parent => ({ objectFolderOrObject: parent, global }));
    const topToBottomAscendanceOpenness = treeView.areItemsOpen(
      topToBottomAscendanceWithContext
    );
    const firstClosedFolderIndex = topToBottomAscendanceOpenness.indexOf(
      false
    );
    if (firstClosedFolderIndex === -1) {
      // If all parents are open, return the objectFolderOrObject given as input.
      return objectFolderOrObjectWithContext;
    }
    return topToBottomAscendanceWithContext[firstClosedFolderIndex];
  };

  const projectRootFolder = project.getRootFolder();
  const containerRootFolder = objectsContainer.getRootFolder();
  const getTreeViewData = React.useCallback(
    (i18n: I18nType): Array<TreeViewItem> => {
      const treeViewItems = [
        {
          label: i18n._(t`Global Objects`),
          children:
            projectRootFolder.getChildrenCount() === 0
              ? [
                  {
                    label: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        There is no{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Link
                          href={globalObjectsWikiLink}
                          onClick={() =>
                            Window.openExternalURL(globalObjectsWikiLink)
                          }
                        >
                          global object
                        </Link>{' '}
                        yet.
                      </Trans>
                    ),
                    id: globalObjectsEmptyPlaceholderId,
                    isPlaceholder: true,
                  },
                ]
              : null,
          objectFolderOrObject: projectRootFolder,
          global: true,
          isRoot: true,
          id: globalObjectsRootFolderId,
        },
        {
          label: i18n._(t`Scene Objects`),
          children:
            containerRootFolder.getChildrenCount() === 0
              ? [
                  {
                    label: i18n._(t`Start by adding a new object.`),
                    id: sceneObjectsEmptyPlaceholderId,
                    isPlaceholder: true,
                  },
                ]
              : null,
          objectFolderOrObject: containerRootFolder,
          global: false,
          isRoot: true,
          id: sceneObjectsRootFolderId,
        },
      ];
      return treeViewItems;
    },
    [projectRootFolder, containerRootFolder]
  );

  const canMoveSelectionTo = React.useCallback(
    (destinationItem: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
      if (destinationItem.isRoot) return false;
// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (destinationItem.isPlaceholder) {
        if (
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
          destinationItem.id === globalObjectsEmptyPlaceholderId &&
          selectedObjectFolderOrObjectsWithContext.length === 1 &&
          !selectedObjectFolderOrObjectsWithContext[0].global
        ) {
          // In that case, the user is drag n dropping a scene object on the
          // empty placeholder of the global objects section.
          return !selectedObjectFolderOrObjectsWithContext[0].objectFolderOrObject.isFolder();
        }
        return false;
      }
      // Check if at least one element in the selection can be moved.
      if (
        selectedObjectFolderOrObjectsWithContext.every(
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
          selectedObject => selectedObject.global === destinationItem.global
        )
      ) {
        if (
          selectedObjectFolderOrObjectsWithContext[0] &&
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
          destinationItem.objectFolderOrObject.isADescendantOf(
            selectedObjectFolderOrObjectsWithContext[0].objectFolderOrObject
          )
        ) {
          return false;
        }
        return true;
      } else if (
        selectedObjectFolderOrObjectsWithContext.length === 1 &&
        selectedObjectFolderOrObjectsWithContext.every(
          selectedObject => selectedObject.global === false
        ) &&
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
        destinationItem.global === true
      ) {
        return !selectedObjectFolderOrObjectsWithContext[0].objectFolderOrObject.isFolder();
      }

      return false;
    },
    [selectedObjectFolderOrObjectsWithContext]
  );

  const setAsGlobalObject = React.useCallback(
    ({
      i18n,
      objectFolderOrObjectWithContext,
      index,
      folder,
    }: {
      i18n: I18nType,
      objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
      index?: number,
      folder?: gdObjectFolderOrObject
    }) => {
      const { objectFolderOrObject } = objectFolderOrObjectWithContext;
      const destinationFolder =
        folder && folder.isFolder() ? folder : project.getRootFolder();
      if (objectFolderOrObject.isFolder()) return;
      const object = objectFolderOrObject.getObject();

      const objectName: string = object.getName();
      if (!objectsContainer.hasObjectNamed(objectName)) return;

      if (project.hasObjectNamed(objectName)) {
        showWarningBox(
          i18n._(
            t`A global object with this name already exists. Please change the object name before setting it as a global object`
          ),
          { delayToNextTick: true }
        );
        return;
      }

      if (beforeSetAsGlobalObject && !beforeSetAsGlobalObject(objectName)) {
        return;
      }

      const answer = Window.showConfirmDialog(
        i18n._(
          t`Global elements help to manage objects across multiple scenes and it is recommended for the most used objects. This action cannot be undone.

          Do you want to set as global object?`
        )
      );
      if (!answer) return;

      // It's safe to call moveObjectFolderOrObjectToAnotherContainerInFolder because
      // it does not invalidate the references to the object in memory - so other editors
      // like InstancesRenderer can continue to work.
      objectsContainer.moveObjectFolderOrObjectToAnotherContainerInFolder(
        objectFolderOrObject,
        project,
        destinationFolder,
        typeof index === 'number' ? index : project.getObjectsCount()
      );
      onObjectModified(true);

      const newObjectFolderOrObjectWithContext = {
        objectFolderOrObject,
        global: true,
      } as const;
      selectObjectFolderOrObjectWithContext(
        newObjectFolderOrObjectWithContext
      );

      // Scroll to the moved object.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        scrollToItem(newObjectFolderOrObjectWithContext);
      }, 100); // A few ms is enough for a new render to be done.
    },
    [
      objectsContainer,
      onObjectModified,
      project,
      beforeSetAsGlobalObject,
      selectObjectFolderOrObjectWithContext,
    ]
  );

  const moveSelectionTo = React.useCallback(
    (
      i18n: I18nType,
      destinationItem: TreeViewItem,
      where: 'before' | 'inside' | 'after'
    ) => {
      if (
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
        destinationItem.isRoot ||
        selectedObjectFolderOrObjectsWithContext.length !== 1
      )
        return;

// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (destinationItem.isPlaceholder) {
        if (
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
          destinationItem.id === globalObjectsEmptyPlaceholderId &&
          selectedObjectFolderOrObjectsWithContext.length === 1 &&
          !selectedObjectFolderOrObjectsWithContext[0].global
        ) {
          const selectedObjectFolderOrObjectWithContext =
            selectedObjectFolderOrObjectsWithContext[0];

          setAsGlobalObject({
            i18n,
            objectFolderOrObjectWithContext: selectedObjectFolderOrObjectWithContext,
          });
        }
        return;
      }

      const selectedObjectFolderOrObjectWithContext =
        selectedObjectFolderOrObjectsWithContext[0];

      if (
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
        destinationItem.objectFolderOrObject ===
        selectedObjectFolderOrObjectWithContext.objectFolderOrObject
      ) {
        return;
      }

      if (
        selectedObjectFolderOrObjectWithContext.global === false &&
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
        destinationItem.global === true
      ) {
        let parent, index;
        if (
          where === 'inside' &&
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
          destinationItem.objectFolderOrObject.isFolder()
        ) {
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
          parent = destinationItem.objectFolderOrObject;
          index = 0;
        } else {
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
          parent = destinationItem.objectFolderOrObject.getParent();
          index =
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
            parent.getChildPosition(destinationItem.objectFolderOrObject) +
            (where === 'after' ? 1 : 0);
        }
        setAsGlobalObject({
          i18n,
          objectFolderOrObjectWithContext: selectedObjectFolderOrObjectWithContext,
          folder: parent,
          index,
        });
        return;
      }

      // At this point, the move is done from within the same container.
      if (
        selectedObjectFolderOrObjectWithContext.global ===
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
        destinationItem.global
      ) {
        const selectedObjectFolderOrObject =
          selectedObjectFolderOrObjectWithContext.objectFolderOrObject;
        const destinationObjectFolderOrObject =
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
          destinationItem.objectFolderOrObject;
        let parent;

        if (
          where === 'inside' &&
          destinationObjectFolderOrObject.isFolder()
        ) {
          parent = destinationObjectFolderOrObject;
        } else {
          parent = destinationObjectFolderOrObject.getParent();
        }
        const selectedObjectFolderOrObjectParent = selectedObjectFolderOrObject.getParent();
        if (parent === selectedObjectFolderOrObjectParent) {
          const fromIndex = selectedObjectFolderOrObjectParent.getChildPosition(
            selectedObjectFolderOrObject
          );
          let toIndex = selectedObjectFolderOrObjectParent.getChildPosition(
            destinationObjectFolderOrObject
          );
          if (toIndex > fromIndex) toIndex -= 1;
          if (where === 'after') toIndex += 1;
          selectedObjectFolderOrObjectParent.moveChild(fromIndex, toIndex);
        } else {
          if (
            destinationObjectFolderOrObject.isADescendantOf(
              selectedObjectFolderOrObject
            )
          ) {
            return;
          }
          const position =
            where === 'inside'
              ? 0
              : parent.getChildPosition(destinationObjectFolderOrObject) +
                (where === 'after' ? 1 : 0);
          selectedObjectFolderOrObjectParent.moveObjectFolderOrObjectToAnotherFolder(
            selectedObjectFolderOrObject,
            parent,
            position
          );
          const treeView = treeViewRef.current;
          if (treeView) {
            const closestVisibleParent = getClosestVisibleParent({
              objectFolderOrObject: parent,
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
              global: destinationItem.global,
            });
            if (closestVisibleParent) {
              treeView.animateItem(closestVisibleParent);
            }
          }
        }
      } else {
        return;
      }
      onObjectModified(true);
    },
    [
      onObjectModified,
      selectedObjectFolderOrObjectsWithContext,
      setAsGlobalObject,
    ]
  );

  const getTreeViewItemThumbnail = React.useCallback(
    (item: TreeViewItem) => {
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'. | TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (item.isRoot || item.isPlaceholder) return null;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
      const { objectFolderOrObject } = item;
      if (objectFolderOrObject.isFolder()) return 'FOLDER';
      return getThumbnail(
        project,
        objectFolderOrObject.getObject().getConfiguration()
      );
    },
    [getThumbnail, project]
  );

  const addFolder = React.useCallback(
    (items: Array<ObjectFolderOrObjectWithContext>) => {
// @ts-expect-error - TS7034 - Variable 'newObjectFolderOrObjectWithContext' implicitly has type 'any' in some locations where its type cannot be determined.
      let newObjectFolderOrObjectWithContext;
      if (items.length === 1) {
        const {
          objectFolderOrObject: selectedObjectFolderOrObject,
          global,
        } = items[0];
        if (selectedObjectFolderOrObject.isFolder()) {
          const newFolder = selectedObjectFolderOrObject.insertNewFolder(
            'NewFolder',
            0
          );
          newObjectFolderOrObjectWithContext = {
            objectFolderOrObject: newFolder,
            global,
          };
          if (treeViewRef.current) {
            treeViewRef.current.openItems([getTreeViewItemId(items[0])]);
          }
        } else {
          const parentFolder = selectedObjectFolderOrObject.getParent();
          const newFolder = parentFolder.insertNewFolder(
            'NewFolder',
            parentFolder.getChildPosition(selectedObjectFolderOrObject)
          );
          newObjectFolderOrObjectWithContext = {
            objectFolderOrObject: newFolder,
            global,
          };
        }
      } else {
        const rootFolder = objectsContainer.getRootFolder();
        const newFolder = rootFolder.insertNewFolder('NewFolder', 0);
        newObjectFolderOrObjectWithContext = {
          objectFolderOrObject: newFolder,
          global: false,
        };
      }
      selectObjectFolderOrObjectWithContext(
        newObjectFolderOrObjectWithContext
      );
      const itemsToOpen = getFoldersAscendanceWithoutRootFolder(
        newObjectFolderOrObjectWithContext.objectFolderOrObject
      ).map(folder =>
        getTreeViewItemId({
          objectFolderOrObject: folder,
// @ts-expect-error - TS7005 - Variable 'newObjectFolderOrObjectWithContext' implicitly has an 'any' type.
          global: newObjectFolderOrObjectWithContext.global,
        })
      );
      itemsToOpen.push(
        newObjectFolderOrObjectWithContext.global
          ? globalObjectsRootFolderId
          : sceneObjectsRootFolderId
      );
      if (treeViewRef.current) treeViewRef.current.openItems(itemsToOpen);

      editName(newObjectFolderOrObjectWithContext);
      forceUpdateList();
    },
    [
      forceUpdateList,
      objectsContainer,
      selectObjectFolderOrObjectWithContext,
      editName,
    ]
  );

  /**
   * Unselect item if one of the parent is collapsed (folded) so that the item
   * does not stay selected and not visible to the user.
   */
  const onCollapseItem = React.useCallback(
    (item: TreeViewItem) => {
      if (
        !selectedObjectFolderOrObjectsWithContext ||
        selectedObjectFolderOrObjectsWithContext.length !== 1 ||
// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
        item.isPlaceholder
      )
        return;
// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'.
      const { objectFolderOrObject: potentialParent } = item;
      const {
        objectFolderOrObject: selectedObjectFolderOrObject,
      } = selectedObjectFolderOrObjectsWithContext[0];
      if (!potentialParent || !selectedObjectFolderOrObject) return;
      if (selectedObjectFolderOrObject.isADescendantOf(potentialParent)) {
        selectObjectFolderOrObjectWithContext(null);
      }
    },
    [
      selectObjectFolderOrObjectWithContext,
      selectedObjectFolderOrObjectsWithContext,
    ]
  );

  const moveObjectFolderOrObjectToAnotherFolderInSameContainer = React.useCallback(
    (
      objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
      folder: gdObjectFolderOrObject
    ) => {
      const {
        objectFolderOrObject,
        global,
      } = objectFolderOrObjectWithContext;
      if (folder === objectFolderOrObject.getParent()) return;
      objectFolderOrObject
        .getParent()
        .moveObjectFolderOrObjectToAnotherFolder(
          objectFolderOrObject,
          folder,
          0
        );
      const treeView = treeViewRef.current;
      if (treeView) {
        const closestVisibleParent = getClosestVisibleParent({
          objectFolderOrObject: folder,
          global,
        });
        if (closestVisibleParent) {
          treeView.animateItem(closestVisibleParent);
        }
      }
      onObjectModified(true);
    },
    [onObjectModified]
  );

  const renderObjectMenuTemplate = React.useCallback(
    (i18n: I18nType) => (item: TreeViewItem, index: number) => {
// @ts-expect-error - TS2339 - Property 'isPlaceholder' does not exist on type 'TreeViewItem'.
      if (item.isPlaceholder) {
        return [];
      }
// @ts-expect-error - TS2339 - Property 'isRoot' does not exist on type 'TreeViewItem'.
      if (item.isRoot) {
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'TreeViewItem'.
        if (item.id === 'scene-objects') {
          return [
            {
              label: i18n._(t`Export as assets`),
              click: () => onExportAssets(),
            },
          ];
        }
        return [];
      }

// @ts-expect-error - TS2339 - Property 'objectFolderOrObject' does not exist on type 'TreeViewItem'. | TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
      const { objectFolderOrObject, global } = item;

      const container = global ? project : objectsContainer;
      const folderAndPathsInContainer = enumerateFoldersInContainer(
        container
      );
      folderAndPathsInContainer.unshift({
        path: i18n._(t`Root folder`),
        folder: container.getRootFolder(),
      });
      if (objectFolderOrObject.isFolder()) {
        const filteredFolderAndPathsInContainer = folderAndPathsInContainer.filter(
          folderAndPath =>
            !folderAndPath.folder.isADescendantOf(objectFolderOrObject) &&
            folderAndPath.folder !== objectFolderOrObject
        );
        return [
          {
            label: getPasteLabel(i18n, {
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
              isGlobalObject: item.global,
              isFolder: true,
            }),
            enabled: Clipboard.has(CLIPBOARD_KIND),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
            click: () => paste(item, true),
          },
          {
            label: i18n._(t`Rename`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext | null | undefined'.
            click: () => editName(item),
            accelerator: getShortcutDisplayName(
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
              preferences.values.userShortcutMap['RENAME_SCENE_OBJECT'] ||
                defaultShortcuts.RENAME_SCENE_OBJECT
            ),
          },
          {
            label: i18n._(t`Delete`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext | null | undefined'.
            click: () => deleteObjectFolderOrObjectWithContext(item),
            accelerator: 'Backspace',
          },
          {
            label: i18n._('Move to folder'),
            submenu: filteredFolderAndPathsInContainer.map(
              ({ folder, path }) => ({
                label: path,
                enabled: folder !== objectFolderOrObject.getParent(),
                click: () =>
                  moveObjectFolderOrObjectToAnotherFolderInSameContainer(
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
                    item,
                    folder
                  ),
              })
            ),
          },
          { type: 'separator' },
          {
            label: i18n._(t`Add a new object`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext | null'.
            click: () => onAddNewObject(item),
          },
          {
            label: i18n._(t`Add a new folder`),
            click: () =>
              addFolder(
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem[]' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext[]'. | TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
                selectedObjectFolderOrObjectsWithContext.includes(item)
                  ? selectedObjectFolderOrObjectsWithContext
                  : [item]
              ),
          },
          { type: 'separator' },
          {
            label: i18n._(t`Expand all sub folders`),
            click: () => {
              const subFoldersAndPaths = enumerateFoldersInFolder(
                objectFolderOrObject
              ).map(folderAndPath => folderAndPath.folder);
              if (treeViewRef.current)
                treeViewRef.current.openItems(
                  [objectFolderOrObject, ...subFoldersAndPaths].map(folder =>
                    getTreeViewItemId({
                      objectFolderOrObject: folder,
                      global,
                    })
                  )
                );
            },
          },
        ];
      }

      const object = objectFolderOrObject.getObject();
      const instanceCountOnScene = initialInstances
        ? getInstanceCountInLayoutForObject(
            initialInstances,
            object.getName()
          )
        : undefined;
      const objectMetadata = gd.MetadataProvider.getObjectMetadata(
        project.getCurrentPlatform(),
        object.getType()
      );
      return [
        {
          label: i18n._(t`Copy`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
          click: () => copyObjectFolderOrObjectWithContext(item),
        },
        {
          label: i18n._(t`Cut`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
          click: () => cutObjectFolderOrObjectWithContext(item),
        },
        {
          label: getPasteLabel(i18n, {
// @ts-expect-error - TS2339 - Property 'global' does not exist on type 'TreeViewItem'.
            isGlobalObject: item.global,
            isFolder: false,
          }),
          enabled: Clipboard.has(CLIPBOARD_KIND),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
          click: () => paste(item),
        },
        {
          label: i18n._(t`Duplicate`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
          click: () => duplicateObject(item),
        },
        {
          label: i18n._(t`Rename`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext | null | undefined'.
          click: () => editName(item),
          accelerator: getShortcutDisplayName(
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
            preferences.values.userShortcutMap['RENAME_SCENE_OBJECT'] ||
              defaultShortcuts.RENAME_SCENE_OBJECT
          ),
        },
        {
          label: i18n._(t`Delete`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext | null | undefined'.
          click: () => deleteObjectFolderOrObjectWithContext(item),
          accelerator: 'Backspace',
        },
        { type: 'separator' },
        {
          label: i18n._(t`Edit object`),
          click: () => onEditObject(object),
        },
        {
          label: i18n._(t`Edit object variables`),
          click: () => onEditObject(object, 'variables'),
        },
        {
          label: i18n._(t`Edit behaviors`),
          click: () => onEditObject(object, 'behaviors'),
        },
        {
          label: i18n._(t`Edit effects`),
          click: () => onEditObject(object, 'effects'),
          enabled: objectMetadata.hasDefaultBehavior(
            'EffectCapability::EffectBehavior'
          ),
        },
        { type: 'separator' },
        {
          label: i18n._(t`Set as global object`),
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
          enabled: !isObjectFolderOrObjectWithContextGlobal(item),
          click: () => {
            selectObjectFolderOrObjectWithContext(null);
            setAsGlobalObject({
              i18n,
// @ts-expect-error - TS2322 - Type 'TreeViewItem' is not assignable to type 'ObjectFolderOrObjectWithContext'.
              objectFolderOrObjectWithContext: item,
            });
          },
          visible: canSetAsGlobalObject !== false,
        },
        {
          label: i18n._('Move to folder'),
          submenu: folderAndPathsInContainer.map(({ folder, path }) => ({
            label: path,
            enabled: folder !== objectFolderOrObject.getParent(),
            click: () =>
              moveObjectFolderOrObjectToAnotherFolderInSameContainer(
// @ts-expect-error - TS2345 - Argument of type 'TreeViewItem' is not assignable to parameter of type 'ObjectFolderOrObjectWithContext'.
                item,
                folder
              ),
          })),
        },
        { type: 'separator' },
        {
          label: i18n._(t`Add instance to the scene`),
          click: () => onAddObjectInstance(object.getName()),
        },
        instanceCountOnScene !== undefined &&
        onSelectAllInstancesOfObjectInLayout
          ? {
              label: i18n._(
                t`Select instances on scene (${instanceCountOnScene})`
              ),
              click: () =>
                onSelectAllInstancesOfObjectInLayout(object.getName()),
              enabled: instanceCountOnScene > 0,
            }
          : undefined,
      ].filter(Boolean);
    },
    [
      project,
      objectsContainer,
      initialInstances,
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      preferences.values.userShortcutMap,
      canSetAsGlobalObject,
      onSelectAllInstancesOfObjectInLayout,
      paste,
      editName,
      deleteObjectFolderOrObjectWithContext,
      moveObjectFolderOrObjectToAnotherFolderInSameContainer,
      onAddNewObject,
      addFolder,
      selectedObjectFolderOrObjectsWithContext,
      copyObjectFolderOrObjectWithContext,
      cutObjectFolderOrObjectWithContext,
      duplicateObject,
      onEditObject,
      onExportAssets,
      selectObjectFolderOrObjectWithContext,
      setAsGlobalObject,
      onAddObjectInstance,
    ]
  );

  // Force List component to be mounted again if project or objectsContainer
  // has been changed. Avoid accessing to invalid objects that could
  // crash the app.
  const listKey = project.ptr + ';' + objectsContainer.ptr;
  const initiallyOpenedNodeIds = [
    projectRootFolder.getChildrenCount() === 0
      ? null
      : globalObjectsRootFolderId,
    sceneObjectsRootFolderId,
  ].filter(Boolean);

  const arrowKeyNavigationProps = React.useMemo(
    () => ({
// @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type.
      onGetItemInside: item => {
        if (item.isPlaceholder || item.isRoot) return null;
        if (!item.objectFolderOrObject.isFolder()) return null;
        else {
          if (item.objectFolderOrObject.getChildrenCount() === 0) return null;
          return {
            objectFolderOrObject: item.objectFolderOrObject.getChildAt(0),
            global: item.global,
          };
        }
      },
// @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type.
      onGetItemOutside: item => {
        if (item.isPlaceholder || item.isRoot) return null;
        const parent = item.objectFolderOrObject.getParent();
        if (parent.isRootFolder()) return null;
        return {
          objectFolderOrObject: parent,
          global: item.global,
        };
      },
    }),
    []
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background maxWidth>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBar
              value={searchText}
              onRequestSearch={() => {}}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
              onChange={text => setSearchText(text)}
              placeholder={t`Search objects`}
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton
              size="small"
              onClick={() =>
                addFolder(selectedObjectFolderOrObjectsWithContext)
              }
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AddFolder />
            </IconButton>
          </Column>
        </LineStackLayout>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={styles.listContainer}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
        onKeyDown={keyboardShortcutsRef.current.onKeyDown}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
        onKeyUp={keyboardShortcutsRef.current.onKeyUp}
        id="objects-list"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.autoSizerContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AutoSizer style={styles.autoSizer} disableWidth>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. */}
                {({ height }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <TreeView
                    key={listKey}
                    ref={treeViewRef}
                    items={getTreeViewData(i18n)}
                    height={height}
                    forceAllOpened={!!currentlyRunningInAppTutorial}
                    searchText={searchText}
                    getItemName={getTreeViewItemName}
                    getItemThumbnail={getTreeViewItemThumbnail}
                    getItemChildren={getTreeViewItemChildren}
                    multiSelect={false}
                    getItemId={getTreeViewItemId}
                    getItemHtmlId={getTreeViewItemHtmlId}
                    getItemDataset={getTreeViewItemData}
                    onEditItem={editItem}
                    onCollapseItem={onCollapseItem}
                    selectedItems={selectedObjectFolderOrObjectsWithContext}
// @ts-expect-error - TS7006 - Parameter 'items' implicitly has an 'any' type.
                    onSelectItems={items => {
                      if (!items) selectObjectFolderOrObjectWithContext(null);
                      const itemToSelect = items[0];
                      if (itemToSelect.isRoot) return;
                      selectObjectFolderOrObjectWithContext(
                        itemToSelect || null
                      );
                    }}
                    onRenameItem={rename}
                    buildMenuTemplate={renderObjectMenuTemplate(i18n)}
// @ts-expect-error - TS7006 - Parameter 'destinationItem' implicitly has an 'any' type. | TS7006 - Parameter 'where' implicitly has an 'any' type.
                    onMoveSelectionToItem={(destinationItem, where) =>
                      moveSelectionTo(i18n, destinationItem, where)
                    }
                    canMoveSelectionToItem={canMoveSelectionTo}
                    reactDndType={objectWithContextReactDndType}
                    initiallyOpenedNodeIds={initiallyOpenedNodeIds}
                    arrowKeyNavigationProps={arrowKeyNavigationProps}
                    shouldSelectUponContextMenuOpening
                  />
                )}
              </AutoSizer>
            </div>
          )}
        </I18n>
      </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveRaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add a new object</Trans>}
            primary
            onClick={() =>
              onAddNewObject(selectedObjectFolderOrObjectsWithContext[0])
            }
            id="add-new-object-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add />}
          />
        </Column>
      </Line>
      {newObjectDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <NewObjectDialog
          onClose={() => setNewObjectDialogOpen(null)}
          onCreateNewObject={addObject}
          onObjectsAddedFromAssets={onObjectsAddedFromAssets}
          project={project}
          layout={layout}
          objectsContainer={objectsContainer}
          resourceManagementProps={resourceManagementProps}
          canInstallPrivateAsset={canInstallPrivateAsset}
        />
      )}
    </Background>
  );
});

const arePropsEqual = (prevProps: Props, nextProps: Props): boolean => // The component is costly to render, so avoid any re-rendering as much
// as possible.
// We make the assumption that no changes to objects list is made outside
// from the component.
// If a change is made, the component won't notice it: you have to manually
// call forceUpdate.
prevProps.selectedObjectFolderOrObjectsWithContext ===
  nextProps.selectedObjectFolderOrObjectsWithContext &&
prevProps.project === nextProps.project &&
prevProps.objectsContainer === nextProps.objectsContainer;

// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
const MemoizedObjectsList = React.memo<Props, ObjectsListInterface>(ObjectsList, arePropsEqual);

const ObjectsListWithErrorBoundary = React.forwardRef<Props, ObjectsListInterface>((props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Objects list</Trans>}
    scope="scene-editor-objects-list"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ forceUpdateList: () => void; openNewObjectDialog: () => void; closeNewObjectDialog: () => void; renameObjectFolderOrObjectWithContext: (arg1: ObjectFolderOrObjectWithContext) => void; ref: ForwardedRef<...>; }' is not assignable to type 'IntrinsicAttributes & Props'. */}
    <MemoizedObjectsList ref={ref} {...props} />
  </ErrorBoundary>
));

export default ObjectsListWithErrorBoundary;
