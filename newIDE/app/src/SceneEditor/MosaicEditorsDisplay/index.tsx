import * as React from 'react';

import { t } from '@lingui/macro';

import { I18n } from '@lingui/react';

import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';

import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import EditorMosaic, { EditorMosaicInterface } from '../../UI/EditorMosaic';

import InstancesEditor from '../../InstancesEditor';

import LayersList, { LayersListInterface } from '../../LayersList';

import FullSizeInstancesEditorWithScrollbars from '../../InstancesEditor/FullSizeInstancesEditorWithScrollbars';

import CloseButton from '../../UI/EditorMosaic/CloseButton';

import ObjectsList, { ObjectsListInterface } from '../../ObjectsList';
import ObjectGroupsList, {
  ObjectGroupsListInterface,
} from '../../ObjectGroupsList';
import InstancesList, {
  InstancesListInterface,
} from '../../InstancesEditor/InstancesList';
import ObjectsRenderingService from '../../ObjectsRendering/ObjectsRenderingService';

import Rectangle from '../../Utils/Rectangle';

import { EditorId } from '..';
import {
  SceneEditorsDisplayProps,
  SceneEditorsDisplayInterface,
} from '../EditorsDisplay.flow';
import CompactInstancePropertiesEditorContainer, {
  CompactInstancePropertiesEditorInterface,
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
const MosaicEditorsDisplay = React.forwardRef<
  SceneEditorsDisplayInterface,
  SceneEditorsDisplayProps
>((props, ref) => {
  const {
    project,

    layout,

    initialInstances,

    selectedLayer,

    onSelectInstances,
  } = props;
  const { isMobile } = useResponsiveWindowSize();
  const { getDefaultEditorMosaicNode, setDefaultEditorMosaicNode } =
    React.useContext(PreferencesContext);

  const selectedInstances = props.instancesSelection.getSelectedInstances();

  const instancesPropertiesEditorRef = React.useRef<
    CompactInstancePropertiesEditorInterface | null | undefined
  >(null);
  const layersListRef = React.useRef<LayersListInterface | null | undefined>(
    null
  );
  const instancesListRef = React.useRef<
    InstancesListInterface | null | undefined
  >(null);
  const editorRef = React.useRef<InstancesEditor>(null);
  const objectsListRef = React.useRef<ObjectsListInterface | null | undefined>(
    null
  );
  const editorMosaicRef = React.useRef<
    EditorMosaicInterface | null | undefined
  >(null);
  const objectGroupsListRef = React.useRef<
    ObjectGroupsListInterface | null | undefined
  >(null);

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
  const getInstanceSize = React.useCallback((instance: gd.InitialInstance) => {
    if (!editorRef.current) return [0, 0, 0];

    return editorRef.current.getInstanceSize(instance);
  }, []);
  const openNewObjectDialog = React.useCallback(() => {
    if (!objectsListRef.current) return;

    objectsListRef.current.openNewObjectDialog();
  }, []);
  const toggleEditorView = React.useCallback((editorId: EditorId) => {
    if (!editorMosaicRef.current) return;

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
    (objectWithContext) => {
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
    (instances: Array<gd.InitialInstance>, multiSelect: boolean) => {
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

  const selectedObjectNames = props.selectedObjectFolderOrObjectsWithContext

    .map((objectFolderOrObjectWithContext) => {
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
        <I18n>
          {({ i18n }) => (
            <CompactInstancePropertiesEditorContainer
              i18n={i18n}
              project={project}
              layout={layout}
              instances={selectedInstances}
              editInstanceVariables={props.editInstanceVariables}
              onEditObjectByName={props.editObjectByName}
              onInstancesModified={forceUpdateInstancesList}
              onGetInstanceSize={getInstanceSize}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<CompactInstancePropertiesEditorInterface | null | undefined>' is not assignable to type 'Ref<Props> | undefined'.
              ref={instancesPropertiesEditorRef}
              unsavedChanges={props.unsavedChanges}
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
        <LayersList
          project={project}
          selectedLayer={selectedLayer}
          onSelectLayer={props.onSelectLayer}
          onEditLayerEffects={props.editLayerEffects}
          onEditLayer={props.editLayer}
          onRemoveLayer={props.onRemoveLayer}
          onLayerRenamed={props.onLayerRenamed}
          onCreateLayer={forceUpdateInstancesPropertiesEditor}
          layersContainer={layout}
          unsavedChanges={props.unsavedChanges}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<LayersListInterface | null | undefined>' is not assignable to type 'Ref<Props> | undefined'.
          ref={layersListRef}
          hotReloadPreviewButtonProps={props.hotReloadPreviewButtonProps}
        />
      ),
    },
    'instances-list': {
      type: 'secondary',
      title: t`Instances List`,
      renderEditor: () => (
        <InstancesList
          instances={initialInstances}
          selectedInstances={selectedInstances}
          onSelectInstances={selectInstances}
// @ts-expect-error - TS2322 - Type 'MutableRefObject<InstancesListInterface | null | undefined>' is not assignable to type 'Ref<InstancesListInterface> | undefined'.
          ref={instancesListRef}
        />
      ),
    },
    'instances-editor': {
      type: 'primary',
      noTitleBar: true,
      noSoftKeyboardAvoidance: true,
      renderEditor: () => (
        <FullSizeInstancesEditorWithScrollbars
          project={project}
          layout={layout}
          selectedLayer={selectedLayer}
          initialInstances={initialInstances}
          instancesEditorSettings={props.instancesEditorSettings}
          onInstancesEditorSettingsMutated={
            props.onInstancesEditorSettingsMutated
          }
          instancesSelection={props.instancesSelection}
          onInstancesAdded={props.onInstancesAdded}
          onInstancesSelected={props.onInstancesSelected}
          onInstanceDoubleClicked={props.onInstanceDoubleClicked}
          onInstancesMoved={props.onInstancesMoved}
          onInstancesResized={props.onInstancesResized}
          onInstancesRotated={props.onInstancesRotated}
          selectedObjectNames={selectedObjectNames}
          onContextMenu={props.onContextMenu}
          isInstanceOf3DObject={props.isInstanceOf3DObject}
          instancesEditorShortcutsCallbacks={
            props.instancesEditorShortcutsCallbacks
          }
          wrappedEditorRef={(editor) => {
// @ts-expect-error - TS2540 - Cannot assign to 'current' because it is a read-only property.
            editorRef.current = editor;
          }}
          pauseRendering={!props.isActive}
        />
      ),
    },
    'objects-list': {
      type: 'secondary',
      title: t`Objects`,

      toolbarControls: [<CloseButton key="close" />],
      renderEditor: () => (
        <I18n>
          {({ i18n }) => (
            <ObjectsList
              getThumbnail={ObjectsRenderingService.getThumbnail.bind(
                ObjectsRenderingService
              )}
              project={project}
              objectsContainer={layout}
              layout={layout}
              initialInstances={initialInstances}
              onSelectAllInstancesOfObjectInLayout={
                props.onSelectAllInstancesOfObjectInLayout
              }
              resourceManagementProps={props.resourceManagementProps}
              selectedObjectFolderOrObjectsWithContext={
                props.selectedObjectFolderOrObjectsWithContext
              }
              canInstallPrivateAsset={props.canInstallPrivateAsset}
              onEditObject={props.onEditObject}
              onExportAssets={props.onExportAssets}
              onDeleteObjects={(objectWithContext, cb) =>
                props.onDeleteObjects(i18n, objectWithContext, cb)
              }
              getValidatedObjectOrGroupName={(newName, global) =>
                props.getValidatedObjectOrGroupName(newName, global, i18n)
              }
              onObjectCreated={props.onObjectCreated}
              onObjectFolderOrObjectWithContextSelected={
                props.onObjectFolderOrObjectWithContextSelected
              }
              onRenameObjectFolderOrObjectWithContextFinish={
                props.onRenameObjectFolderOrObjectWithContextFinish
              }
              onAddObjectInstance={props.onAddObjectInstance}
              onObjectPasted={props.updateBehaviorsSharedData}
              beforeSetAsGlobalObject={(objectName) =>
                props.canObjectOrGroupBeGlobal(i18n, objectName)
              }
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ObjectsListInterface | null | undefined>' is not assignable to type 'Ref<ObjectsListInterface> | undefined'.
              ref={objectsListRef}
              unsavedChanges={props.unsavedChanges}
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
        <I18n>
          {({ i18n }) => (
            <ObjectGroupsList
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ObjectGroupsListInterface | null | undefined>' is not assignable to type 'Ref<Props> | undefined'.
              ref={objectGroupsListRef}
              globalObjectGroups={project.getObjectGroups()}
              objectGroups={layout.getObjectGroups()}
              onEditGroup={props.onEditObjectGroup}
              onDeleteGroup={props.onDeleteObjectGroup}
              onRenameGroup={props.onRenameObjectGroup}
              // @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type. | TS7006 - Parameter 'global' implicitly has an 'any' type.
              getValidatedObjectOrGroupName={(newName, global) =>
                props.getValidatedObjectOrGroupName(newName, global, i18n)
              }
              // @ts-expect-error - TS7006 - Parameter 'groupName' implicitly has an 'any' type.
              beforeSetAsGlobalGroup={(groupName) =>
                props.canObjectOrGroupBeGlobal(i18n, groupName)
              }
              unsavedChanges={props.unsavedChanges}
            />
          )}
        </I18n>
      ),
    },
  } as const;
  return (
    <EditorMosaic
// @ts-expect-error - TS2322 - Type '{ readonly properties: { readonly type: "secondary"; readonly title: MessageDescriptor; readonly renderEditor: () => JSX.Element; }; readonly 'layers-list': { readonly type: "secondary"; readonly title: MessageDescriptor; readonly renderEditor: () => JSX.Element; }; readonly 'instances-list': { ...; }; readonly 'ins...' is not assignable to type '{ [key: string]: Editor; }'.
      editors={editors}
      limitToOneSecondaryEditor={isMobile}
      initialNodes={
        getDefaultEditorMosaicNode('scene-editor') || initialMosaicEditorNodes
      }
      onOpenedEditorsChanged={props.onOpenedEditorsChanged}
      onPersistNodes={(node) =>
        setDefaultEditorMosaicNode('scene-editor', node)
      }
// @ts-expect-error - TS2322 - Type 'MutableRefObject<EditorMosaicInterface | null | undefined>' is not assignable to type 'Ref<EditorMosaicInterface> | undefined'.
      ref={editorMosaicRef}
    />
  );
});

export default MosaicEditorsDisplay;
