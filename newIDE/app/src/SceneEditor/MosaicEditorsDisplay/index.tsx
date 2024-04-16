import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import EditorMosaic, {
  EditorMosaicInterface,
// @ts-expect-error - TS6142 - Module '../../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
} from '../../UI/EditorMosaic';
// @ts-expect-error - TS6142 - Module '../../InstancesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/index.tsx', but '--jsx' is not set.
import InstancesEditor from '../../InstancesEditor';
// @ts-expect-error - TS6142 - Module '../../LayersList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/index.tsx', but '--jsx' is not set.
import LayersList, { LayersListInterface } from '../../LayersList';
// @ts-expect-error - TS6142 - Module '../../InstancesEditor/FullSizeInstancesEditorWithScrollbars' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/FullSizeInstancesEditorWithScrollbars.tsx', but '--jsx' is not set.
import FullSizeInstancesEditorWithScrollbars from '../../InstancesEditor/FullSizeInstancesEditorWithScrollbars';
// @ts-expect-error - TS6142 - Module '../../UI/EditorMosaic/CloseButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/CloseButton.tsx', but '--jsx' is not set.
import CloseButton from '../../UI/EditorMosaic/CloseButton';
// @ts-expect-error - TS6142 - Module '../../ObjectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/index.tsx', but '--jsx' is not set.
import ObjectsList, { ObjectsListInterface } from '../../ObjectsList';
import ObjectGroupsList, {
  ObjectGroupsListInterface,
// @ts-expect-error - TS6142 - Module '../../ObjectGroupsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupsList/index.tsx', but '--jsx' is not set.
} from '../../ObjectGroupsList';
import InstancesList, {
  InstancesListInterface,
// @ts-expect-error - TS6142 - Module '../../InstancesEditor/InstancesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/InstancesList/index.tsx', but '--jsx' is not set.
} from '../../InstancesEditor/InstancesList';
import ObjectsRenderingService from '../../ObjectsRendering/ObjectsRenderingService';

import Rectangle from '../../Utils/Rectangle';
// @ts-expect-error - TS6142 - Module '..' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/index.tsx', but '--jsx' is not set.
import { EditorId } from '..';
import {
  SceneEditorsDisplayProps,
  SceneEditorsDisplayInterface,
} from '../EditorsDisplay.flow';
import CompactInstancePropertiesEditorContainer, {
  CompactInstancePropertiesEditorInterface,
// @ts-expect-error - TS6142 - Module '../../InstancesEditor/CompactInstancePropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/CompactInstancePropertiesEditor/index.tsx', but '--jsx' is not set.
} from '../../InstancesEditor/CompactInstancePropertiesEditor';

const initialMosaicEditorNodes = {
  direction: 'row',
  first: 'properties',
  splitPercentage: 23,
  second: {
    direction: 'row',
    first: 'instances-editor',
    second: 'objects-list',
    splitPercentage: 77,
  },
} as const;

const noop = () => {};

const defaultPanelConfigByEditor = {
  'objects-list': {
    position: 'end',
    splitPercentage: 75,
    direction: 'column',
  },
  properties: {
    position: 'start',
    splitPercentage: 25,
    direction: 'column',
  },
  'object-groups-list': {
    position: 'end',
    splitPercentage: 75,
    direction: 'column',
  },
  'instances-list': {
    position: 'end',
    splitPercentage: 75,
    direction: 'row',
  },
  'layers-list': {
    position: 'end',
    splitPercentage: 75,
    direction: 'row',
  },
} as const;

// Forward ref to allow Scene editor to force update some editors
const MosaicEditorsDisplay = React.forwardRef<SceneEditorsDisplayProps, SceneEditorsDisplayInterface>((props, ref) => {
  const {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'SceneEditorsDisplayInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'layout' does not exist on type 'SceneEditorsDisplayInterface'.
    layout,
// @ts-expect-error - TS2339 - Property 'initialInstances' does not exist on type 'SceneEditorsDisplayInterface'.
    initialInstances,
// @ts-expect-error - TS2339 - Property 'selectedLayer' does not exist on type 'SceneEditorsDisplayInterface'.
    selectedLayer,
// @ts-expect-error - TS2339 - Property 'onSelectInstances' does not exist on type 'SceneEditorsDisplayInterface'.
    onSelectInstances,
  } = props;
  const { isMobile } = useResponsiveWindowSize();
  const {
    getDefaultEditorMosaicNode,
    setDefaultEditorMosaicNode,
  } = React.useContext(PreferencesContext);
// @ts-expect-error - TS2339 - Property 'instancesSelection' does not exist on type 'SceneEditorsDisplayInterface'.
  const selectedInstances = props.instancesSelection.getSelectedInstances();

  const instancesPropertiesEditorRef = React.useRef<CompactInstancePropertiesEditorInterface | null | undefined>(null);
  const layersListRef = React.useRef<LayersListInterface | null | undefined>(null);
  const instancesListRef = React.useRef<InstancesListInterface | null | undefined>(null);
  const editorRef = React.useRef<InstancesEditor | null | undefined>(null);
  const objectsListRef = React.useRef<ObjectsListInterface | null | undefined>(null);
  const editorMosaicRef = React.useRef<EditorMosaicInterface | null | undefined>(null);
  const objectGroupsListRef = React.useRef<ObjectGroupsListInterface | null | undefined>(null);

  const forceUpdateInstancesPropertiesEditor = React.useCallback(() => {
    if (instancesPropertiesEditorRef.current)
      instancesPropertiesEditorRef.current.forceUpdate();
  }, []);
  const forceUpdateInstancesList = React.useCallback(() => {
    if (instancesListRef.current) instancesListRef.current.forceUpdate();
  }, []);
  const forceUpdateObjectsList = React.useCallback(() => {
    if (objectsListRef.current) objectsListRef.current.forceUpdateList();
  }, []);
  const forceUpdateObjectGroupsList = React.useCallback(() => {
    if (objectGroupsListRef.current) objectGroupsListRef.current.forceUpdate();
  }, []);
  const forceUpdateLayersList = React.useCallback(() => {
    if (layersListRef.current) layersListRef.current.forceUpdate();
  }, []);
  const getInstanceSize = React.useCallback((instance: gdInitialInstance) => {
    if (!editorRef.current) return [0, 0, 0];

    return editorRef.current.getInstanceSize(instance);
  }, []);
  const openNewObjectDialog = React.useCallback(() => {
    if (!objectsListRef.current) return;

    objectsListRef.current.openNewObjectDialog();
  }, []);
  const toggleEditorView = React.useCallback((editorId: EditorId) => {
    if (!editorMosaicRef.current) return;
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'EditorId' can't be used to index type '{ readonly 'objects-list': { readonly position: "end"; readonly splitPercentage: 75; readonly direction: "column"; }; readonly properties: { readonly position: "start"; readonly splitPercentage: 25; readonly direction: "column"; }; readonly 'object-groups-list': { ...; }; readonly 'instances-list': { ...; }; readonl...'.
    const config = defaultPanelConfigByEditor[editorId];
    editorMosaicRef.current.toggleEditor(
      editorId,
      config.position,
      config.splitPercentage,
      config.direction
    );
  }, []);
  const isEditorVisible = React.useCallback((editorId: EditorId) => {
    if (!editorMosaicRef.current) return false;
    return editorMosaicRef.current.getOpenedEditorNames().includes(editorId);
  }, []);
  const renameObjectFolderOrObjectWithContext = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'objectWithContext' implicitly has an 'any' type.
    objectWithContext => {
      if (objectsListRef.current)
        objectsListRef.current.renameObjectFolderOrObjectWithContext(
          objectWithContext
        );
    },
    []
  );

  const startSceneRendering = React.useCallback((start: boolean) => {
    const editor = editorRef.current;
    if (!editor) return;

    if (start) editor.restartSceneRendering();
    else editor.pauseSceneRendering();
  }, []);

// @ts-expect-error - TS2345 - Argument of type '() => { getName: () => string; forceUpdateInstancesList: () => void; forceUpdateInstancesPropertiesEditor: () => void; forceUpdateObjectsList: () => void; forceUpdateObjectGroupsList: () => void; ... 7 more ...; instancesHandlers: { ...; }; }' is not assignable to parameter of type '() => SceneEditorsDisplayProps'.
  React.useImperativeHandle(ref, () => {
    const { current: editor } = editorRef;
    return {
      getName: () => 'mosaic',
      forceUpdateInstancesList,
      forceUpdateInstancesPropertiesEditor,
      forceUpdateObjectsList,
      forceUpdateObjectGroupsList,
      forceUpdateLayersList,
      openNewObjectDialog,
      toggleEditorView,
      isEditorVisible,
      startSceneRendering,
      renameObjectFolderOrObjectWithContext,
      viewControls: {
        zoomBy: editor ? editor.zoomBy : noop,
        setZoomFactor: editor ? editor.setZoomFactor : noop,
        zoomToInitialPosition: editor ? editor.zoomToInitialPosition : noop,
        zoomToFitContent: editor ? editor.zoomToFitContent : noop,
        zoomToFitSelection: editor ? editor.zoomToFitSelection : noop,
        centerViewOnLastInstance: editor
          ? editor.centerViewOnLastInstance
          : noop,
        getLastCursorSceneCoordinates: editor
          ? editor.getLastCursorSceneCoordinates
          : () => [0, 0],
        getLastContextMenuSceneCoordinates: editor
          ? editor.getLastContextMenuSceneCoordinates
          : () => [0, 0],
        getViewPosition: editor ? editor.getViewPosition : noop,
      },
      instancesHandlers: {
        getSelectionAABB: editor
          ? editor.selectedInstances.getSelectionAABB
          : () => new Rectangle(),
        addInstances: editor ? editor.addInstances : () => [],
        clearHighlightedInstance: editor
          ? editor.clearHighlightedInstance
          : noop,
        resetInstanceRenderersFor: editor
          ? editor.resetInstanceRenderersFor
          : noop,
        forceRemountInstancesRenderers: editor ? editor.forceRemount : noop,
        addSerializedInstances: editor
          ? editor.addSerializedInstances
          : () => [],
      },
    };
  });

  const selectInstances = React.useCallback(
    (instances: Array<gdInitialInstance>, multiSelect: boolean) => {
      onSelectInstances(instances, multiSelect);
      forceUpdateInstancesList();
      forceUpdateInstancesPropertiesEditor();
    },
    [
      forceUpdateInstancesList,
      forceUpdateInstancesPropertiesEditor,
      onSelectInstances,
    ]
  );

// @ts-expect-error - TS2339 - Property 'selectedObjectFolderOrObjectsWithContext' does not exist on type 'SceneEditorsDisplayInterface'.
  const selectedObjectNames = props.selectedObjectFolderOrObjectsWithContext
// @ts-expect-error - TS7006 - Parameter 'objectFolderOrObjectWithContext' implicitly has an 'any' type.
    .map(objectFolderOrObjectWithContext => {
      const { objectFolderOrObject } = objectFolderOrObjectWithContext;

      if (!objectFolderOrObject) return null; // Protect ourselves from an unexpected null value.

      if (objectFolderOrObject.isFolder()) return null;
      return objectFolderOrObject.getObject().getName();
    })
    .filter(Boolean);

  const editors = {
    properties: {
      type: 'secondary',
      title: t`Properties`,
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <CompactInstancePropertiesEditorContainer
              i18n={i18n}
              project={project}
              layout={layout}
              instances={selectedInstances}
// @ts-expect-error - TS2339 - Property 'editInstanceVariables' does not exist on type 'SceneEditorsDisplayInterface'.
              editInstanceVariables={props.editInstanceVariables}
// @ts-expect-error - TS2339 - Property 'editObjectByName' does not exist on type 'SceneEditorsDisplayInterface'.
              onEditObjectByName={props.editObjectByName}
              onInstancesModified={forceUpdateInstancesList}
              onGetInstanceSize={getInstanceSize}
              ref={instancesPropertiesEditorRef}
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'SceneEditorsDisplayInterface'.
              unsavedChanges={props.unsavedChanges}
// @ts-expect-error - TS2339 - Property 'historyHandler' does not exist on type 'SceneEditorsDisplayInterface'.
              historyHandler={props.historyHandler}
            />
          )}
        </I18n>
      ),
    },
    'layers-list': {
      type: 'secondary',
      title: t`Layers`,
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LayersList
          project={project}
          selectedLayer={selectedLayer}
// @ts-expect-error - TS2339 - Property 'onSelectLayer' does not exist on type 'SceneEditorsDisplayInterface'.
          onSelectLayer={props.onSelectLayer}
// @ts-expect-error - TS2339 - Property 'editLayerEffects' does not exist on type 'SceneEditorsDisplayInterface'.
          onEditLayerEffects={props.editLayerEffects}
// @ts-expect-error - TS2339 - Property 'editLayer' does not exist on type 'SceneEditorsDisplayInterface'.
          onEditLayer={props.editLayer}
// @ts-expect-error - TS2339 - Property 'onRemoveLayer' does not exist on type 'SceneEditorsDisplayInterface'.
          onRemoveLayer={props.onRemoveLayer}
// @ts-expect-error - TS2339 - Property 'onLayerRenamed' does not exist on type 'SceneEditorsDisplayInterface'.
          onLayerRenamed={props.onLayerRenamed}
          onCreateLayer={forceUpdateInstancesPropertiesEditor}
          layersContainer={layout}
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'SceneEditorsDisplayInterface'.
          unsavedChanges={props.unsavedChanges}
          ref={layersListRef}
// @ts-expect-error - TS2339 - Property 'hotReloadPreviewButtonProps' does not exist on type 'SceneEditorsDisplayInterface'.
          hotReloadPreviewButtonProps={props.hotReloadPreviewButtonProps}
        />
      ),
    },
    'instances-list': {
      type: 'secondary',
      title: t`Instances List`,
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InstancesList
          instances={initialInstances}
          selectedInstances={selectedInstances}
          onSelectInstances={selectInstances}
          ref={instancesListRef}
        />
      ),
    },
    'instances-editor': {
      type: 'primary',
      noTitleBar: true,
      noSoftKeyboardAvoidance: true,
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FullSizeInstancesEditorWithScrollbars
          project={project}
          layout={layout}
          selectedLayer={selectedLayer}
          initialInstances={initialInstances}
// @ts-expect-error - TS2339 - Property 'instancesEditorSettings' does not exist on type 'SceneEditorsDisplayInterface'.
          instancesEditorSettings={props.instancesEditorSettings}
          onInstancesEditorSettingsMutated={
// @ts-expect-error - TS2339 - Property 'onInstancesEditorSettingsMutated' does not exist on type 'SceneEditorsDisplayInterface'.
            props.onInstancesEditorSettingsMutated
          }
// @ts-expect-error - TS2339 - Property 'instancesSelection' does not exist on type 'SceneEditorsDisplayInterface'.
          instancesSelection={props.instancesSelection}
// @ts-expect-error - TS2339 - Property 'onInstancesAdded' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstancesAdded={props.onInstancesAdded}
// @ts-expect-error - TS2339 - Property 'onInstancesSelected' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstancesSelected={props.onInstancesSelected}
// @ts-expect-error - TS2339 - Property 'onInstanceDoubleClicked' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstanceDoubleClicked={props.onInstanceDoubleClicked}
// @ts-expect-error - TS2339 - Property 'onInstancesMoved' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstancesMoved={props.onInstancesMoved}
// @ts-expect-error - TS2339 - Property 'onInstancesResized' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstancesResized={props.onInstancesResized}
// @ts-expect-error - TS2339 - Property 'onInstancesRotated' does not exist on type 'SceneEditorsDisplayInterface'.
          onInstancesRotated={props.onInstancesRotated}
          selectedObjectNames={selectedObjectNames}
// @ts-expect-error - TS2339 - Property 'onContextMenu' does not exist on type 'SceneEditorsDisplayInterface'.
          onContextMenu={props.onContextMenu}
// @ts-expect-error - TS2339 - Property 'isInstanceOf3DObject' does not exist on type 'SceneEditorsDisplayInterface'.
          isInstanceOf3DObject={props.isInstanceOf3DObject}
          instancesEditorShortcutsCallbacks={
// @ts-expect-error - TS2339 - Property 'instancesEditorShortcutsCallbacks' does not exist on type 'SceneEditorsDisplayInterface'.
            props.instancesEditorShortcutsCallbacks
          }
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
          wrappedEditorRef={editor => {
            editorRef.current = editor;
          }}
// @ts-expect-error - TS2339 - Property 'isActive' does not exist on type 'SceneEditorsDisplayInterface'.
          pauseRendering={!props.isActive}
        />
      ),
    },
    'objects-list': {
      type: 'secondary',
      title: t`Objects`,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      toolbarControls: [<CloseButton key="close" />],
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ObjectsList
              getThumbnail={ObjectsRenderingService.getThumbnail.bind(
                ObjectsRenderingService
              )}
              project={project}
              objectsContainer={layout}
              layout={layout}
              initialInstances={initialInstances}
              onSelectAllInstancesOfObjectInLayout={
// @ts-expect-error - TS2339 - Property 'onSelectAllInstancesOfObjectInLayout' does not exist on type 'SceneEditorsDisplayInterface'.
                props.onSelectAllInstancesOfObjectInLayout
              }
// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'SceneEditorsDisplayInterface'.
              resourceManagementProps={props.resourceManagementProps}
              selectedObjectFolderOrObjectsWithContext={
// @ts-expect-error - TS2339 - Property 'selectedObjectFolderOrObjectsWithContext' does not exist on type 'SceneEditorsDisplayInterface'.
                props.selectedObjectFolderOrObjectsWithContext
              }
// @ts-expect-error - TS2339 - Property 'canInstallPrivateAsset' does not exist on type 'SceneEditorsDisplayInterface'.
              canInstallPrivateAsset={props.canInstallPrivateAsset}
// @ts-expect-error - TS2339 - Property 'onEditObject' does not exist on type 'SceneEditorsDisplayInterface'.
              onEditObject={props.onEditObject}
// @ts-expect-error - TS2339 - Property 'onExportAssets' does not exist on type 'SceneEditorsDisplayInterface'.
              onExportAssets={props.onExportAssets}
// @ts-expect-error - TS7006 - Parameter 'objectWithContext' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
              onDeleteObjects={(objectWithContext, cb) =>
// @ts-expect-error - TS2339 - Property 'onDeleteObjects' does not exist on type 'SceneEditorsDisplayInterface'.
                props.onDeleteObjects(i18n, objectWithContext, cb)
              }
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type. | TS7006 - Parameter 'global' implicitly has an 'any' type.
              getValidatedObjectOrGroupName={(newName, global) =>
// @ts-expect-error - TS2339 - Property 'getValidatedObjectOrGroupName' does not exist on type 'SceneEditorsDisplayInterface'.
                props.getValidatedObjectOrGroupName(newName, global, i18n)
              }
// @ts-expect-error - TS2339 - Property 'onObjectCreated' does not exist on type 'SceneEditorsDisplayInterface'.
              onObjectCreated={props.onObjectCreated}
              onObjectFolderOrObjectWithContextSelected={
// @ts-expect-error - TS2339 - Property 'onObjectFolderOrObjectWithContextSelected' does not exist on type 'SceneEditorsDisplayInterface'.
                props.onObjectFolderOrObjectWithContextSelected
              }
              onRenameObjectFolderOrObjectWithContextFinish={
// @ts-expect-error - TS2339 - Property 'onRenameObjectFolderOrObjectWithContextFinish' does not exist on type 'SceneEditorsDisplayInterface'.
                props.onRenameObjectFolderOrObjectWithContextFinish
              }
// @ts-expect-error - TS2339 - Property 'onAddObjectInstance' does not exist on type 'SceneEditorsDisplayInterface'.
              onAddObjectInstance={props.onAddObjectInstance}
// @ts-expect-error - TS2339 - Property 'updateBehaviorsSharedData' does not exist on type 'SceneEditorsDisplayInterface'.
              onObjectPasted={props.updateBehaviorsSharedData}
// @ts-expect-error - TS7006 - Parameter 'objectName' implicitly has an 'any' type.
              beforeSetAsGlobalObject={objectName =>
// @ts-expect-error - TS2339 - Property 'canObjectOrGroupBeGlobal' does not exist on type 'SceneEditorsDisplayInterface'.
                props.canObjectOrGroupBeGlobal(i18n, objectName)
              }
              ref={objectsListRef}
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'SceneEditorsDisplayInterface'.
              unsavedChanges={props.unsavedChanges}
// @ts-expect-error - TS2339 - Property 'hotReloadPreviewButtonProps' does not exist on type 'SceneEditorsDisplayInterface'.
              hotReloadPreviewButtonProps={props.hotReloadPreviewButtonProps}
            />
          )}
        </I18n>
      ),
    },
    'object-groups-list': {
      type: 'secondary',
      title: t`Object Groups`,
      renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ObjectGroupsList
              ref={objectGroupsListRef}
              globalObjectGroups={project.getObjectGroups()}
              objectGroups={layout.getObjectGroups()}
// @ts-expect-error - TS2339 - Property 'onEditObjectGroup' does not exist on type 'SceneEditorsDisplayInterface'.
              onEditGroup={props.onEditObjectGroup}
// @ts-expect-error - TS2339 - Property 'onDeleteObjectGroup' does not exist on type 'SceneEditorsDisplayInterface'.
              onDeleteGroup={props.onDeleteObjectGroup}
// @ts-expect-error - TS2339 - Property 'onRenameObjectGroup' does not exist on type 'SceneEditorsDisplayInterface'.
              onRenameGroup={props.onRenameObjectGroup}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type. | TS7006 - Parameter 'global' implicitly has an 'any' type.
              getValidatedObjectOrGroupName={(newName, global) =>
// @ts-expect-error - TS2339 - Property 'getValidatedObjectOrGroupName' does not exist on type 'SceneEditorsDisplayInterface'.
                props.getValidatedObjectOrGroupName(newName, global, i18n)
              }
// @ts-expect-error - TS7006 - Parameter 'groupName' implicitly has an 'any' type.
              beforeSetAsGlobalGroup={groupName =>
// @ts-expect-error - TS2339 - Property 'canObjectOrGroupBeGlobal' does not exist on type 'SceneEditorsDisplayInterface'.
                props.canObjectOrGroupBeGlobal(i18n, groupName)
              }
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'SceneEditorsDisplayInterface'.
              unsavedChanges={props.unsavedChanges}
            />
          )}
        </I18n>
      ),
    },
  } as const;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EditorMosaic
      editors={editors}
      limitToOneSecondaryEditor={isMobile}
      initialNodes={
        getDefaultEditorMosaicNode('scene-editor') || initialMosaicEditorNodes
      }
// @ts-expect-error - TS2339 - Property 'onOpenedEditorsChanged' does not exist on type 'SceneEditorsDisplayInterface'.
      onOpenedEditorsChanged={props.onOpenedEditorsChanged}
// @ts-expect-error - TS7006 - Parameter 'node' implicitly has an 'any' type.
      onPersistNodes={node => setDefaultEditorMosaicNode('scene-editor', node)}
      ref={editorMosaicRef}
    />
  );
});

export default MosaicEditorsDisplay;
