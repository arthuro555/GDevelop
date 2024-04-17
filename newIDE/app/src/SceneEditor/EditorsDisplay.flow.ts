import { I18n as I18nType } from '@lingui/core';

import {
  GroupWithContext,
  ObjectWithContext,
} from '../ObjectsList/EnumerateObjects';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import { InstancesEditorSettings } from '../InstancesEditor/InstancesEditorSettings';
import InstancesSelection from '../InstancesEditor/InstancesSelection';

import { ObjectEditorTab } from '../ObjectEditor/ObjectEditorDialog';

import { HistoryHandler } from '../VariablesList/VariablesList';

import { InstancesEditorShortcutsCallbacks } from '../InstancesEditor';

import { EditorId } from '.';
import Rectangle from '../Utils/Rectangle';
import ViewPosition from '../InstancesEditor/ViewPosition';
import { ObjectFolderOrObjectWithContext } from '../ObjectsList/EnumerateObjectFolderOrObject';

export type SceneEditorsDisplayProps = {
  project: gd.Project;
  layout: gd.Layout;
  initialInstances: gd.InitialInstancesContainer;
  instancesSelection: InstancesSelection;
  selectedLayer: string;
  onSelectInstances: (
    instances: Array<gd.InitialInstance>,
    multiSelect: boolean,
    targetPosition?: 'center' | 'upperCenter'
  ) => void;
  editInstanceVariables: (
    instance?: gd.InitialInstance | null | undefined
  ) => void;
  editObjectByName: (objectName: string, initialTab?: ObjectEditorTab) => void;
  onEditObject: (arg1: gd.Object) => void;
  selectedObjectFolderOrObjectsWithContext: ObjectFolderOrObjectWithContext[];
  onSelectLayer: (layerName: string) => void;
  editLayerEffects: (layer?: gd.Layer | null | undefined) => void;
  editLayer: (layer?: gd.Layer | null | undefined) => void;
  onRemoveLayer: (layerName: string, done: (arg1: boolean) => void) => void;
  onLayerRenamed: () => void;
  onObjectCreated: (arg1: gd.Object) => void;
  onObjectFolderOrObjectWithContextSelected: (
    arg1?: ObjectFolderOrObjectWithContext | null | undefined
  ) => void;
  onExportAssets: () => void;
  onDeleteObjects: (
    i18n: I18nType,
    objectsWithContext: ObjectWithContext[],
    cb: (arg1: boolean) => void
  ) => void;
  onAddObjectInstance: (
    objectName: string,
    targetPosition?: 'center' | 'upperCenter'
  ) => void;
  onRenameObjectFolderOrObjectWithContextFinish: (
    objectFolderOrObjectWithContext: ObjectFolderOrObjectWithContext,
    newName: string,
    done: (arg1: boolean) => void
  ) => void;
  onEditObjectGroup: (arg1?: gd.ObjectGroup | null | undefined) => void;
  onDeleteObjectGroup: (
    groupWithContext: GroupWithContext,
    done: (arg1: boolean) => void
  ) => void;
  onRenameObjectGroup: (
    groupWithContext: GroupWithContext,
    newName: string,
    done: (arg1: boolean) => void
  ) => void;
  getValidatedObjectOrGroupName: (
    newName: string,
    global: boolean,
    i18n: I18nType
  ) => string;
  canObjectOrGroupBeGlobal: (
    i18n: I18nType,
    objectOrGroupName: string
  ) => boolean;
  updateBehaviorsSharedData: () => void;
  onInstancesAdded: (arg1: Array<gd.InitialInstance>) => void;
  onInstancesSelected: (arg1: Array<gd.InitialInstance>) => void;
  onInstanceDoubleClicked: (arg1: gd.InitialInstance) => void;
  onInstancesMoved: (arg1: Array<gd.InitialInstance>) => void;
  onInstancesResized: (arg1: Array<gd.InitialInstance>) => void;
  onInstancesRotated: (arg1: Array<gd.InitialInstance>) => void;
  isInstanceOf3DObject: (arg1: gd.InitialInstance) => boolean;
  onSelectAllInstancesOfObjectInLayout: (arg1: string) => void;
  canInstallPrivateAsset: () => boolean;
  instancesEditorSettings: InstancesEditorSettings;
  onInstancesEditorSettingsMutated: (arg1: InstancesEditorSettings) => void;
  historyHandler: HistoryHandler;
  unsavedChanges?: UnsavedChanges | null | undefined;
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps;
  onContextMenu: (
    x: number,
    y: number,
    ignoreSelectedObjectsForContextMenu?: boolean
  ) => void;
  resourceManagementProps: ResourceManagementProps;
  isActive: boolean;
  instancesEditorShortcutsCallbacks: InstancesEditorShortcutsCallbacks;
  onOpenedEditorsChanged: () => void;
};

export type SceneEditorsDisplayInterface = {
  getName: () => 'mosaic' | 'swipeableDrawer';
  forceUpdateInstancesList: () => void;
  forceUpdateInstancesPropertiesEditor: () => void;
  forceUpdateObjectsList: () => void;
  forceUpdateObjectGroupsList: () => void;
  forceUpdateLayersList: () => void;
  openNewObjectDialog: () => void;
  toggleEditorView: (editorId: EditorId) => void;
  isEditorVisible: (editorId: EditorId) => boolean;
  renameObjectFolderOrObjectWithContext: (
    arg1: ObjectFolderOrObjectWithContext
  ) => void;
  viewControls: {
    zoomBy: (factor: number) => void;
    setZoomFactor: (factor: number) => void;
    zoomToInitialPosition: () => void;
    zoomToFitContent: () => void;
    zoomToFitSelection: (arg1: Array<gd.InitialInstance>) => void;
    centerViewOnLastInstance: (
      arg1: Array<gd.InitialInstance>,
      offset?: [number, number] | null | undefined
    ) => void;
    getLastCursorSceneCoordinates: () => [number, number];
    getLastContextMenuSceneCoordinates: () => [number, number];
    getViewPosition: () => ViewPosition | null | undefined;
  };
  startSceneRendering: (start: boolean) => void;
  instancesHandlers: {
    getSelectionAABB: () => Rectangle;
    addInstances: (
      pos: [number, number],
      objectNames: Array<string>,
      layer: string
    ) => Array<gd.InitialInstance>;
    clearHighlightedInstance: () => void;
    resetInstanceRenderersFor: (objectName: string) => void;
    forceRemountInstancesRenderers: () => void;
    addSerializedInstances: (arg1: {
      position: [number, number];
      copyReferential: [number, number];
      serializedInstances: Array<any>;
      preventSnapToGrid?: boolean;
      addInstancesInTheForeground?: boolean;
    }) => Array<gd.InitialInstance>;
  };
};
