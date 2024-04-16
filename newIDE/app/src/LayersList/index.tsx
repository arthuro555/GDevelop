// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
import newNameGenerator from '../Utils/NewNameGenerator';
import { mapReverseFor } from '../Utils/MapFor';
// @ts-expect-error - TS6142 - Module './LayerRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/LayerRow.tsx', but '--jsx' is not set.
import LayerRow, { styles } from './LayerRow';
// @ts-expect-error - TS6142 - Module './BackgroundColorRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/BackgroundColorRow.tsx', but '--jsx' is not set.
import BackgroundColorRow from './BackgroundColorRow';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../UI/FullSizeMeasurer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FullSizeMeasurer.tsx', but '--jsx' is not set.
import { FullSizeMeasurer } from '../UI/FullSizeMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButtonWithSplitMenu.tsx', but '--jsx' is not set.
import RaisedButtonWithSplitMenu from '../UI/RaisedButtonWithSplitMenu';
import useForceUpdate from '../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../UI/DragAndDrop/DropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DropTarget.tsx', but '--jsx' is not set.
import { makeDropTarget } from '../UI/DragAndDrop/DropTarget';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
import { addDefaultLightToLayer } from '../ProjectCreation/CreateProject';
// @ts-expect-error - TS6142 - Module '../EffectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EffectsList/index.tsx', but '--jsx' is not set.
import { getEffects2DCount, getEffects3DCount } from '../EffectsList';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

const gd: libGDevelop = global.gd;

const DropTarget = makeDropTarget('layers-list');

type LayersListBodyProps = {
  project: gdProject,
  layersContainer: gdLayout,
  selectedLayer: string,
  onSelectLayer: (arg1: string) => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  onRemoveLayer: (layerName: string, cb: (done: boolean) => void) => void,
  onLayerRenamed: () => void,
  onEditEffects: (layer?: gdLayer | null | undefined) => void,
  onEdit: (layer?: gdLayer | null | undefined) => void,
  width: number
};

const getEffectsCount = (platform: gdPlatform, layer: gdLayer) => {
  const effectsContainer = layer.getEffects();
  return layer.getRenderingType() === '2d'
    ? getEffects2DCount(platform, effectsContainer)
    : layer.getRenderingType() === '3d'
    ? getEffects3DCount(platform, effectsContainer)
    : effectsContainer.getEffectsCount();
};

const LayersListBody = (props: LayersListBodyProps) => {
  const forceUpdate = useForceUpdate();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const [nameErrors, setNameErrors] = React.useState<{
    [key: string]: React.ReactNode
  }>({});
  const draggedLayerIndexRef = React.useRef<number | null>(null);

  const {
    project,
    layersContainer,
    onEditEffects,
    onEdit,
    width,
    onLayerRenamed,
    onRemoveLayer,
    unsavedChanges,
  } = props;

  const onLayerModified = React.useCallback(
    () => {
      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();
      forceUpdate();
    },
    [forceUpdate, unsavedChanges]
  );

  const onDropLayer = React.useCallback(
    (targetIndex: number) => {
      const { current: draggedLayerIndex } = draggedLayerIndexRef;
      if (draggedLayerIndex === null) return;

      if (targetIndex !== draggedLayerIndex) {
        layersContainer.moveLayer(
          draggedLayerIndex,
          targetIndex < draggedLayerIndex ? targetIndex + 1 : targetIndex
        );
        onLayerModified();
      }
      draggedLayerIndexRef.current = null;
    },
    [layersContainer, onLayerModified]
  );

  const layersCount = layersContainer.getLayersCount();
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  const containerLayersList = mapReverseFor(0, layersCount, i => {
    const layer = layersContainer.getLayerAt(i);
    const layerName = layer.getName();

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <LayerRow
        key={`layer-${layer.ptr}`}
        id={`layer-${i}`}
        layer={layer}
        isSelected={props.selectedLayer === layerName}
        onSelect={() => props.onSelectLayer(layerName)}
        nameError={nameErrors[layerName]}
        effectsCount={getEffectsCount(project.getCurrentPlatform(), layer)}
        onEditEffects={() => onEditEffects(layer)}
        onEdit={() => onEdit(layer)}
        onBeginDrag={() => {
          draggedLayerIndexRef.current = i;
        }}
        onDrop={() => onDropLayer(i)}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
        onBlur={newName => {
          setNameErrors(currentValue => ({
            ...currentValue,
            [layerName]: null,
          }));

          if (layerName === newName) return;

          const isNameAlreadyTaken = layersContainer.hasLayerNamed(newName);
          if (isNameAlreadyTaken) {
            setNameErrors(currentValue => ({
              ...currentValue,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              [layerName]: <Trans>The name {newName} is already taken</Trans>,
            }));
          } else {
            layersContainer.getLayer(layerName).setName(newName);
            gd.WholeProjectRefactorer.renameLayer(
              project,
              layersContainer,
              layerName,
              newName
            );
            onLayerRenamed();
            onLayerModified();
          }
        }}
        onRemove={() => {
          onRemoveLayer(layerName, doRemove => {
            if (!doRemove) return;

            layersContainer.removeLayer(layerName);
            onLayerModified();
          });
        }}
        isVisible={layer.getVisibility()}
// @ts-expect-error - TS7006 - Parameter 'visible' implicitly has an 'any' type.
        onChangeVisibility={visible => {
          layer.setVisibility(visible);
          onLayerModified();
        }}
        isLocked={layer.isLocked()}
// @ts-expect-error - TS7006 - Parameter 'isLocked' implicitly has an 'any' type.
        onChangeLockState={isLocked => {
          layer.setLocked(isLocked);
          onLayerModified();
        }}
        width={width}
      />
    );
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand>
      {containerLayersList}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DropTarget
        canDrop={() => true}
        drop={() => {
          onDropLayer(-1);
        }}
      >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. | TS7031 - Binding element 'canDrop' implicitly has an 'any' type. */}
        {({ connectDropTarget, isOver, canDrop }) =>
          connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div>
              {isOver && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div
                  style={{
                    ...styles.dropIndicator,
                    outlineColor: gdevelopTheme.dropIndicator.canDrop,
                  }}
                />
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <BackgroundColorRow
                layout={layersContainer}
                onBackgroundColorChanged={onLayerModified}
              />
            </div>
          )
        }
      </DropTarget>
    </Column>
  );
};

type Props = {
  project: gdProject,
  selectedLayer: string,
  onSelectLayer: (arg1: string) => void,
  layersContainer: gdLayout,
  onEditLayerEffects: (layer?: gdLayer | null | undefined) => void,
  onEditLayer: (layer?: gdLayer | null | undefined) => void,
  onRemoveLayer: (layerName: string, cb: (done: boolean) => void) => void,
  onLayerRenamed: () => void,
  onCreateLayer: () => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  // Preview:
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps
};

export type LayersListInterface = {
  forceUpdate: () => void
};

const hasLightingLayer = (layout: gdLayout) => {
  const layersCount = layout.getLayersCount();
  return (
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    mapReverseFor(0, layersCount, i =>
      layout.getLayerAt(i).isLightingLayer()
    ).filter(Boolean).length > 0
  );
};

const LayersList = React.forwardRef<Props, LayersListInterface>((props, ref) => {
  const forceUpdate = useForceUpdate();

// @ts-expect-error - TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, selectedLayer, onSelectLayer, layersContainer, and 6 more.
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  const addLayer = () => {
// @ts-expect-error - TS2339 - Property 'layersContainer' does not exist on type 'LayersListInterface'.
    const { layersContainer } = props;
    const name = newNameGenerator('Layer', name =>
      layersContainer.hasLayerNamed(name)
    );
    layersContainer.insertNewLayer(name, layersContainer.getLayersCount());
    const newLayer = layersContainer.getLayer(name);
    addDefaultLightToLayer(newLayer);

    onLayerModified();
// @ts-expect-error - TS2339 - Property 'onCreateLayer' does not exist on type 'LayersListInterface'.
    props.onCreateLayer();
  };

  const addLightingLayer = () => {
// @ts-expect-error - TS2339 - Property 'layersContainer' does not exist on type 'LayersListInterface'.
    const { layersContainer } = props;
    const name = newNameGenerator('Lighting', name =>
      layersContainer.hasLayerNamed(name)
    );
    layersContainer.insertNewLayer(name, layersContainer.getLayersCount());
    const layer = layersContainer.getLayer(name);
    layer.setLightingLayer(true);
    layer.setFollowBaseLayerCamera(true);
    layer.setAmbientLightColor(200, 200, 200);
    onLayerModified();
// @ts-expect-error - TS2339 - Property 'onCreateLayer' does not exist on type 'LayersListInterface'.
    props.onCreateLayer();
  };

  const onLayerModified = () => {
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'LayersListInterface'. | TS2339 - Property 'unsavedChanges' does not exist on type 'LayersListInterface'.
    if (props.unsavedChanges) props.unsavedChanges.triggerUnsavedChanges();
    forceUpdate();
  };

  // Force the list to be mounted again if layersContainer
  // has been changed. Avoid accessing to invalid objects that could
  // crash the app.
// @ts-expect-error - TS2339 - Property 'layersContainer' does not exist on type 'LayersListInterface'.
  const listKey = props.layersContainer.ptr;
// @ts-expect-error - TS2339 - Property 'layersContainer' does not exist on type 'LayersListInterface'.
  const isLightingLayerPresent = hasLightingLayer(props.layersContainer);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView autoHideScrollbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FullSizeMeasurer>
{ /* @ts-expect-error - TS7031 - Binding element 'width' implicitly has an 'any' type. */}
          {({ width }) => (
            // TODO: The list is costly to render when there are many layers, consider
            // using SortableVirtualizedItemList.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LayersListBody
              key={listKey}
// @ts-expect-error - TS2339 - Property 'selectedLayer' does not exist on type 'LayersListInterface'.
              selectedLayer={props.selectedLayer}
// @ts-expect-error - TS2339 - Property 'onSelectLayer' does not exist on type 'LayersListInterface'.
              onSelectLayer={props.onSelectLayer}
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'LayersListInterface'.
              project={props.project}
// @ts-expect-error - TS2339 - Property 'layersContainer' does not exist on type 'LayersListInterface'.
              layersContainer={props.layersContainer}
// @ts-expect-error - TS2339 - Property 'onEditLayerEffects' does not exist on type 'LayersListInterface'.
              onEditEffects={props.onEditLayerEffects}
// @ts-expect-error - TS2339 - Property 'onEditLayer' does not exist on type 'LayersListInterface'.
              onEdit={props.onEditLayer}
// @ts-expect-error - TS2339 - Property 'onRemoveLayer' does not exist on type 'LayersListInterface'.
              onRemoveLayer={props.onRemoveLayer}
// @ts-expect-error - TS2339 - Property 'onLayerRenamed' does not exist on type 'LayersListInterface'.
              onLayerRenamed={props.onLayerRenamed}
// @ts-expect-error - TS2339 - Property 'unsavedChanges' does not exist on type 'LayersListInterface'.
              unsavedChanges={props.unsavedChanges}
              width={width}
            />
          )}
        </FullSizeMeasurer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="flex-end" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButtonWithSplitMenu
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Add a layer</Trans>}
              id="add-layer-button"
              primary
              onClick={addLayer}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Add />}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
              buildMenuTemplate={i18n => [
                {
                  label: i18n._(t`Add lighting layer`),
                  enabled: !isLightingLayerPresent,
                  click: addLightingLayer,
                },
              ]}
            />
          </Line>
        </Column>
      </ScrollView>
    </Background>
  );
});

const LayersListWithErrorBoundary = React.forwardRef<Props, LayersListInterface>((props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Layers list</Trans>}
    scope="scene-editor-layers-list"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <LayersList ref={ref} {...props} />
  </ErrorBoundary>
));

export default LayersListWithErrorBoundary;
