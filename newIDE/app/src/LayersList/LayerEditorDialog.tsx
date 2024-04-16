// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/ColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ColorField/index.tsx', but '--jsx' is not set.
import ColorField from '../UI/ColorField';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../UI/InlineCheckbox';
import {
  rgbColorToRGBString,
  rgbStringAndAlphaToRGBColor,
} from '../Utils/ColorTransformer';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import useForceUpdate from '../Utils/UseForceUpdate';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import HotReloadPreviewButton, {
  HotReloadPreviewButtonProps,
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
} from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../EffectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EffectsList/index.tsx', but '--jsx' is not set.
import EffectsList from '../EffectsList';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  resourceManagementProps: ResourceManagementProps,
  layout: gdLayout,
  layer: gdLayer,
  initialInstances: gdInitialInstancesContainer,
  initialTab: 'properties' | 'effects',
  onClose: () => void,
  // Preview:
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps
};

const LayerEditorDialog = (props: Props) => {
  const {
    initialTab,
    layer,
    initialInstances,
    onClose,
    hotReloadPreviewButtonProps,
  } = props;
  const forceUpdate = useForceUpdate();
  const {
    onCancelChanges,
    notifyOfChange,
  } = useSerializableObjectCancelableEditor({
    serializableObject: layer,
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel: onClose,
  });
  const [
    camera3DFieldOfViewError,
    setCamera3DFieldOfViewError,
  ] = React.useState<React.ReactNode | null | undefined>(null);
  const [
    camera3DFarPlaneDistanceError,
    setCamera3DFarPlaneDistanceError,
  ] = React.useState<React.ReactNode | null | undefined>(null);
  const [
    camera3DNearPlaneDistanceError,
    setCamera3DNearPlaneDistanceError,
  ] = React.useState<React.ReactNode | null | undefined>(null);
  const [currentTab, setCurrentTab] = React.useState(initialTab);
  const { instancesCount, highestZOrder } = React.useMemo(
    () => {
      const zOrderFinder = new gd.HighestZOrderFinder();
      zOrderFinder.restrictSearchToLayer(layer.getName());

      initialInstances.iterateOverInstances(zOrderFinder);
      const instancesCount = zOrderFinder.getInstancesCount();
      const highestZOrder = zOrderFinder.getHighestZOrder();
      zOrderFinder.delete();
      return { instancesCount, highestZOrder };
    },
    [layer, initialInstances]
  );

  const onChangeCamera3DFieldOfView = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    value => {
      setCamera3DFieldOfViewError(null);
      const newValue = parseFloat(value) || 0;
      if (newValue <= 0 || newValue > 180) {
        setCamera3DFieldOfViewError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            The field of view cannot be lower than 0° or greater than 180°.
          </Trans>
        );
        return;
      }
      if (newValue === layer.getCamera3DFieldOfView()) return;
      layer.setCamera3DFieldOfView(newValue);
      forceUpdate();
      notifyOfChange();
    },
    [forceUpdate, layer, notifyOfChange]
  );

  const checkNearPlaneDistanceError = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    value => {
      setCamera3DNearPlaneDistanceError(null);
      const hasError =
        (value <= 0 && layer.getCameraType() !== 'orthographic') ||
        value >= layer.getCamera3DFarPlaneDistance();
      if (hasError) {
        setCamera3DNearPlaneDistanceError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            The near plane distance must be strictly greater than 0 and lower
            than the far plan distance.
          </Trans>
        );
      }
      return hasError;
    },
    [layer]
  );

  const onChangeCamera3DNearPlaneDistance = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    value => {
      const newValue = parseFloat(value) || 0;
      const hasError = checkNearPlaneDistanceError(newValue);
      if (hasError) {
        return;
      }
      if (newValue === layer.getCamera3DNearPlaneDistance()) return;
      layer.setCamera3DNearPlaneDistance(newValue);
      forceUpdate();
      notifyOfChange();
    },
    [checkNearPlaneDistanceError, forceUpdate, layer, notifyOfChange]
  );

  const onChangeCamera3DFarPlaneDistance = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
    value => {
      setCamera3DFarPlaneDistanceError(null);
      const newValue = parseFloat(value) || 0;
      if (newValue <= layer.getCamera3DNearPlaneDistance()) {
        setCamera3DFarPlaneDistanceError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            The far plane distance must be greater than the near plan distance.
          </Trans>
        );

        return;
      }
      if (newValue === layer.getCamera3DFarPlaneDistance()) return;
      layer.setCamera3DFarPlaneDistance(newValue);
      forceUpdate();
      notifyOfChange();
    },
    [forceUpdate, layer, notifyOfChange]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={
        layer.getName() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>{layer.getName()} properties</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Base layer properties</Trans>
        )
      }
      open
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton
          key="help"
          helpPagePath={'/interface/scene-editor/layer-effects' /* TODO */}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HotReloadPreviewButton
          key="hot-reload-preview-button"
          {...hotReloadPreviewButtonProps}
        />,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          onClick={onCancelChanges}
          key={'Cancel'}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary
          onClick={onClose}
          key={'Apply'}
        />,
      ]}
      onRequestClose={onCancelChanges}
      onApply={onClose}
      fullHeight
      flexColumnBody
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            {
              value: 'properties',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Properties</Trans>,
            },
            {
              value: 'effects',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Effects</Trans>,
            },
          ]}
        />
      }
    >
      {currentTab === 'properties' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
          {layer.isLightingLayer() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DismissableAlertMessage
              kind="info"
              identifier="lighting-layer-usage"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                The lighting layer renders an ambient light on the scene. All
                lights should be placed on this layer so that shadows are
                properly rendered. By default, the layer follows the base layer
                camera. Uncheck this if you want to manually move the camera
                using events.
              </Trans>
            </DismissableAlertMessage>
          ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              There are {instancesCount} instances of objects on this layer.
            </Trans>
          </Text>
          {!props.project.getUseDeprecatedZeroAsDefaultZOrder() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Objects created using events on this layer will be given a "Z
                order" of {highestZOrder + 1}, so that they appear in front of
                all objects of this layer. You can change this using the action
                to change an object Z order, after using an action to create it.
              </Trans>
            </Text>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Hide the layer</Trans>}
            checked={!layer.getVisibility()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
            onCheck={(e, checked) => {
              layer.setVisibility(!checked);
              forceUpdate();
              notifyOfChange();
            }}
            tooltipOrHelperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                This setting changes the visibility of the entire layer. Objects
                on the layer will not be treated as "hidden" for event
                conditions or actions.
              </Trans>
            }
          />
          {!layer.isLightingLayer() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>3D settings</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectField
                fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Rendering type</Trans>}
                value={layer.getRenderingType()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                onChange={(e, i, newValue: string) => {
                  layer.setRenderingType(newValue);
                  forceUpdate();
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value={''}
                  label={t`Display both 2D and 3D objects (default)`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value={'2d'}
                  label={t`Force display only 2D objects`}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value={'3d'}
                  label={t`Force display only 3D objects`}
                  disabled={layer.isLightingLayer()}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value={'2d+3d'}
                  label={t`Force display both 2D and 3D objects`}
                  disabled={layer.isLightingLayer()}
                />
              </SelectField>
              {layer.getRenderingType() !== '2d' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectField
                      fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      floatingLabelText={<Trans>Camera type</Trans>}
                      value={layer.getCameraType()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                      onChange={(e, i, newValue: string) => {
                        layer.setCameraType(newValue);
                        checkNearPlaneDistanceError(
                          layer.getCamera3DNearPlaneDistance()
                        );
                        forceUpdate();
                      }}
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectOption
                        value={'perspective'}
                        label={t`Perspective camera`}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <SelectOption
                        value={'orthographic'}
                        label={t`Orthographic camera`}
                      />
                    </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      fullWidth
                      errorText={camera3DFieldOfViewError}
                      onChange={onChangeCamera3DFieldOfView}
                      value={layer.getCamera3DFieldOfView().toString(10)}
                      floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Field of view (in degrees)</Trans>
                      }
                      floatingLabelFixed
                      disabled={layer.getCameraType() !== 'perspective'}
                    />
                  </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      fullWidth
                      errorText={camera3DNearPlaneDistanceError}
                      onChange={onChangeCamera3DNearPlaneDistance}
                      value={layer.getCamera3DNearPlaneDistance().toString(10)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      floatingLabelText={<Trans>Near plane distance</Trans>}
                      floatingLabelFixed
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SemiControlledTextField
                      commitOnBlur
                      fullWidth
                      errorText={camera3DFarPlaneDistanceError}
                      onChange={onChangeCamera3DFarPlaneDistance}
                      value={layer.getCamera3DFarPlaneDistance().toString(10)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      floatingLabelText={<Trans>Far plane distance</Trans>}
                      floatingLabelFixed
                    />
                  </ResponsiveLineStackLayout>
                </ColumnStackLayout>
              )}
            </ColumnStackLayout>
          )}
          {layer.isLightingLayer() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Lighting settings</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InlineCheckbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Automatically follow the base layer.</Trans>}
                checked={layer.isFollowingBaseLayerCamera()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                onCheck={(e, checked) => {
                  layer.setFollowBaseLayerCamera(checked);
                  forceUpdate();
                  notifyOfChange();
                }}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColorField
                fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Ambient light color</Trans>}
                disableAlpha
                color={rgbColorToRGBString({
                  r: layer.getAmbientLightColorRed(),
                  g: layer.getAmbientLightColorGreen(),
                  b: layer.getAmbientLightColorBlue(),
                })}
// @ts-expect-error - TS7006 - Parameter 'newColor' implicitly has an 'any' type.
                onChange={newColor => {
                  const currentRgbColor = {
                    r: layer.getAmbientLightColorRed(),
                    g: layer.getAmbientLightColorGreen(),
                    b: layer.getAmbientLightColorBlue(),
                  } as const;
                  const newRgbColor = rgbStringAndAlphaToRGBColor(newColor);
                  if (
                    newRgbColor &&
                    (newRgbColor.r !== currentRgbColor.r ||
                      newRgbColor.g !== currentRgbColor.g ||
                      newRgbColor.b !== currentRgbColor.b)
                  ) {
                    layer.setAmbientLightColor(
                      newRgbColor.r,
                      newRgbColor.g,
                      newRgbColor.b
                    );
                    forceUpdate();
                    notifyOfChange();
                  }
                }}
              />
            </React.Fragment>
          ) : (
            // Add some space to avoid a dialog to short that would show scrollbars
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
            </React.Fragment>
          )}
        </ColumnStackLayout>
      )}
      {currentTab === 'effects' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EffectsList
          target="layer"
          layerRenderingType={layer.getRenderingType()}
          project={props.project}
          resourceManagementProps={props.resourceManagementProps}
          effectsContainer={layer.getEffects()}
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
          onEffectsRenamed={(oldName, newName) =>
            gd.WholeProjectRefactorer.renameLayerEffect(
              props.project,
              props.layout,
              props.layer,
              oldName,
              newName
            )
          }
          onEffectsUpdated={() => {
            forceUpdate(); /*Force update to ensure dialog is properly positioned*/
            notifyOfChange();
          }}
        />
      )}
    </Dialog>
  );
};

export default LayerEditorDialog;
