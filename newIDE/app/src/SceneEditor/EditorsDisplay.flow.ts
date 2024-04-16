// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';

import {
  GroupWithContext,
  ObjectWithContext,
} from '../ObjectsList/EnumerateObjects';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { InstancesEditorSettings } from '../InstancesEditor/InstancesEditorSettings';
import InstancesSelection from '../InstancesEditor/InstancesSelection';
// @ts-expect-error - TS6142 - Module '../ObjectEditor/ObjectEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/ObjectEditorDialog.tsx', but '--jsx' is not set.
import { ObjectEditorTab } from '../ObjectEditor/ObjectEditorDialog';
// @ts-expect-error - TS6142 - Module '../VariablesList/VariablesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesList.tsx', but '--jsx' is not set.
import { HistoryHandler } from '../VariablesList/VariablesList';
// @ts-expect-error - TS6142 - Module '../InstancesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/index.tsx', but '--jsx' is not set.
import { InstancesEditorShortcutsCallbacks } from '../InstancesEditor';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/index.tsx', but '--jsx' is not set.
import { EditorId } from '.';
import Rectangle from '../Utils/Rectangle';
import ViewPosition from '../InstancesEditor/ViewPosition';
import { ObjectFolderOrObjectWithContext } from '../ObjectsList/EnumerateObjectFolderOrObject';

export type SceneEditorsDisplayProps = {
  project: gdProject,
  layout: gdLayout,
  initialInstances: gdInitialInstancesContainer,
  instancesSelection: InstancesSelection,
  selectedLayer: string,
  onSelectInstances: (
    instances: Array<gdInitialInstance>,
    multiSelect: boolean,
    targetPosition?: 'center' | 'upperCenter',
  ) => void,
  editInstanceVariables: (instance?: gdInitialInstance | null | undefined) => void,
  editObjectByName: (objectName: string, initialTab?: ObjectEditorTab) => void,
  onEditObject: (arg1: gdObject) => void,
  selectedObjectFolderOrObjectsWithContext: ObjectFolderOrObjectWithContext[],
  onSelectLayer: (layerName: string) => void,
  editLayerEffects: (layer?: gdLayer | null | undefined) => void,
  editLayer: (layer?: gdLayer | null | undefined) => void,
  onRemoveLayer: (layerName: string, done: (arg1: boolean) => void) => void,
  onLayerRenamed: () => void,
  onObjectCreated: (arg1: gdObject) => void,
  onObjectFolderOrObjectWithContextSelected: (arg1?: ObjectFolderOrObjectWithContext | null | undefined) => void,
  onExportAssets: () => void,
  onDeleteObjects: (
    i18n: I18nType,
    objectsWithContext: ObjectWithContext[],
    cb: (arg1: boolean) => void,
  ) => void,
  onAddObjectInstance: (objectName: string, targetPosition?: 'center' | 'upperCenter') => void,
  onRenameObjectFolderOrObjectWithContextFinish: (
    objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
    newName: string,
    done: (arg1: boolean) => void,
  ) => void,
  onEditObjectGroup: (arg1?: gdObjectGroup | null | undefined) => void,
  onDeleteObjectGroup: (groupWithContext: GroupWithContext, done: (arg1: boolean) => void) => void,
  onRenameObjectGroup: (
    groupWithContext: GroupWithContext,
    newName: string,
    done: (arg1: boolean) => void,
  ) => void,
  getValidatedObjectOrGroupName: (newName: string, global: boolean, i18n: I18nType) => string,
  canObjectOrGroupBeGlobal: (i18n: I18nType, objectOrGroupName: string) => boolean,
  updateBehaviorsSharedData: () => void,
  onInstancesAdded: (arg1: Array<gdInitialInstance>) => void,
  onInstancesSelected: (arg1: Array<gdInitialInstance>) => void,
  onInstanceDoubleClicked: (arg1: gdInitialInstance) => void,
  onInstancesMoved: (arg1: Array<gdInitialInstance>) => void,
  onInstancesResized: (arg1: Array<gdInitialInstance>) => void,
  onInstancesRotated: (arg1: Array<gdInitialInstance>) => void,
  isInstanceOf3DObject: (arg1: gdInitialInstance) => boolean,
  onSelectAllInstancesOfObjectInLayout: (arg1: string) => void,
  canInstallPrivateAsset: () => boolean,
  instancesEditorSettings: InstancesEditorSettings,
  onInstancesEditorSettingsMutated: (arg1: InstancesEditorSettings) => void,
  historyHandler: HistoryHandler,
  unsavedChanges?: UnsavedChanges | null | undefined,
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps,
  onContextMenu: (x: number, y: number, ignoreSelectedObjectsForContextMenu?: boolean) => void,
  resourceManagementProps: ResourceManagementProps,
  isActive: boolean,
  instancesEditorShortcutsCallbacks: InstancesEditorShortcutsCallbacks,
  onOpenedEditorsChanged: () => void
};

export type SceneEditorsDisplayInterface = {
  getName: () => 'mosaic' | 'swipeableDrawer',
  forceUpdateInstancesList: () => void,
  forceUpdateInstancesPropertiesEditor: () => void,
  forceUpdateObjectsList: () => void,
  forceUpdateObjectGroupsList: () => void,
  forceUpdateLayersList: () => void,
  openNewObjectDialog: () => void,
  toggleEditorView: (editorId: EditorId) => void,
  isEditorVisible: (editorId: EditorId) => boolean,
  renameObjectFolderOrObjectWithContext: (arg1: ObjectFolderOrObjectWithContext) => void,
  viewControls: {
    zoomBy: (factor: number) => void,
    setZoomFactor: (factor: number) => void,
    zoomToInitialPosition: () => void,
    zoomToFitContent: () => void,
    zoomToFitSelection: (arg1: Array<gdInitialInstance>) => void,
    centerViewOnLastInstance: (
      arg1: Array<gdInitialInstance>,
      offset?: [number, number] | null | undefined,
    ) => void,
    getLastCursorSceneCoordinates: () => [number, number],
    getLastContextMenuSceneCoordinates: () => [number, number],
    getViewPosition: () => ViewPosition | null | undefined
  },
  startSceneRendering: (start: boolean) => void,
  instancesHandlers: {
    getSelectionAABB: () => Rectangle,
    addInstances: (pos: [number, number], objectNames: Array<string>, layer: string) => Array<gdInitialInstance>,
    clearHighlightedInstance: () => void,
    resetInstanceRenderersFor: (objectName: string) => void,
    forceRemountInstancesRenderers: () => void,
    addSerializedInstances: (
      arg1: {
        position: [number, number],
        copyReferential: [number, number],
        serializedInstances: Array<any>,
        preventSnapToGrid?: boolean,
        addInstancesInTheForeground?: boolean
      },
    ) => Array<gdInitialInstance>
  }
};
