// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../../UI/Background';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../LayersList/EnumerateLayers'. '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/EnumerateLayers.js' implicitly has an 'any' type.
import enumerateLayers from '../../LayersList/EnumerateLayers';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import { Schema } from '../../PropertiesEditor';
import getObjectByName from '../../Utils/GetObjectByName';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
import EventsRootVariablesFinder from '../../Utils/EventsRootVariablesFinder';
import VariablesList, {
  HistoryHandler,
// @ts-expect-error - TS6142 - Module '../../VariablesList/VariablesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesList.tsx', but '--jsx' is not set.
} from '../../VariablesList/VariablesList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from '../../UI/CustomSvgIcons/ShareExternal';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module '../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../UI/ErrorBoundary';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  layout: gdLayout,
  instances: Array<gdInitialInstance>,
  onEditObjectByName: (arg1: string) => void,
  onInstancesModified?: (arg1: Array<gdInitialInstance>) => void,
  onGetInstanceSize: (arg1: gdInitialInstance) => [number, number, number],
  editInstanceVariables: (arg1: gdInitialInstance) => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  i18n: I18nType,
  historyHandler?: HistoryHandler
};

export type InstancePropertiesEditorInterface = {
  forceUpdate: () => void
};

const makeSchema = ({
// @ts-expect-error - TS7031 - Binding element 'is3DInstance' implicitly has an 'any' type.
  is3DInstance,
// @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type.
  i18n,
// @ts-expect-error - TS7031 - Binding element 'forceUpdate' implicitly has an 'any' type.
  forceUpdate,
// @ts-expect-error - TS7031 - Binding element 'onEditObjectByName' implicitly has an 'any' type.
  onEditObjectByName,
// @ts-expect-error - TS7031 - Binding element 'onGetInstanceSize' implicitly has an 'any' type.
  onGetInstanceSize,
// @ts-expect-error - TS7031 - Binding element 'layout' implicitly has an 'any' type.
  layout,
}) => {
  const getInstanceWidth = (instance: gdInitialInstance) =>
    instance.hasCustomSize()
      ? instance.getCustomWidth()
      : onGetInstanceSize(instance)[0];

  const getInstanceHeight = (instance: gdInitialInstance) =>
    instance.hasCustomSize()
      ? instance.getCustomHeight()
      : onGetInstanceSize(instance)[1];

  const getInstanceDepth = (instance: gdInitialInstance) =>
    instance.hasCustomDepth()
      ? instance.getCustomDepth()
      : onGetInstanceSize(instance)[2];

  return [
    {
      name: i18n._(t`Object`),
      getValue: (instance: gdInitialInstance) => instance.getObjectName(),
      nonFieldType: 'sectionTitle',
      defaultValue: i18n._(t`Different objects`),
    },
    {
      label: i18n._(t`Edit object`),
      disabled: 'onValuesDifferent',
      nonFieldType: 'button',
      getValue: (instance: gdInitialInstance) => instance.getObjectName(),
      onClick: (instance: gdInitialInstance) =>
        onEditObjectByName(instance.getObjectName()),
    },
    {
      name: i18n._(t`Instance`),
      nonFieldType: 'sectionTitle',
    },
    {
      name: 'Position',
      type: 'row',
      children: [
        {
          name: 'X',
          getLabel: () => i18n._(t`X`),
          valueType: 'number',
          getValue: (instance: gdInitialInstance) => instance.getX(),
          setValue: (instance: gdInitialInstance, newValue: number) =>
            instance.setX(newValue),
        },
        {
          name: 'Y',
          getLabel: () => i18n._(t`Y`),
          valueType: 'number',
          getValue: (instance: gdInitialInstance) => instance.getY(),
          setValue: (instance: gdInitialInstance, newValue: number) =>
            instance.setY(newValue),
        },
        is3DInstance
          ? {
              name: 'Z',
              getLabel: () => i18n._(t`Z`),
              valueType: 'number',
              getValue: (instance: gdInitialInstance) => instance.getZ(),
              setValue: (instance: gdInitialInstance, newValue: number) =>
                instance.setZ(newValue),
            }
          : null,
      ].filter(Boolean),
    },
    {
      name: 'Angles',
      type: 'row',
      children: [
        is3DInstance
          ? {
              name: 'RotationX',
              getLabel: () => i18n._(t`Rotation (X)`),
              valueType: 'number',
              getValue: (instance: gdInitialInstance) =>
                instance.getRotationX(),
              setValue: (instance: gdInitialInstance, newValue: number) =>
                instance.setRotationX(newValue),
            }
          : null,
        is3DInstance
          ? {
              name: 'RotationY',
              getLabel: () => i18n._(t`Rotation (Y)`),
              valueType: 'number',
              getValue: (instance: gdInitialInstance) =>
                instance.getRotationY(),
              setValue: (instance: gdInitialInstance, newValue: number) =>
                instance.setRotationY(newValue),
            }
          : null,
        {
          name: 'Angle',
          getLabel: () =>
            is3DInstance ? i18n._(t`Rotation (Z)`) : i18n._(t`Angle`),
          valueType: 'number',
          getValue: (instance: gdInitialInstance) => instance.getAngle(),
          setValue: (instance: gdInitialInstance, newValue: number) =>
            instance.setAngle(newValue),
        },
      ].filter(Boolean),
    },
    {
      name: 'Lock instance position angle',
      getLabel: () => i18n._(t`Lock position/angle in the editor`),
      valueType: 'boolean',
      getValue: (instance: gdInitialInstance) => instance.isLocked(),
      setValue: (instance: gdInitialInstance, newValue: boolean) => {
        instance.setLocked(newValue);
        if (!newValue) {
          instance.setSealed(newValue);
        }
      },
    },
    {
      name: 'Prevent instance selection',
      getLabel: () => i18n._(t`Prevent selection in the editor`),
      valueType: 'boolean',
      disabled: (instances: gdInitialInstance[]) => {
        return instances.some(instance => !instance.isLocked());
      },
      getValue: (instance: gdInitialInstance) => instance.isSealed(),
      setValue: (instance: gdInitialInstance, newValue: boolean) =>
        instance.setSealed(newValue),
    },
    !is3DInstance
      ? {
          name: 'Z Order',
          getLabel: () => i18n._(t`Z Order`),
          valueType: 'number',
          getValue: (instance: gdInitialInstance) => instance.getZOrder(),
          setValue: (instance: gdInitialInstance, newValue: number) =>
            instance.setZOrder(newValue),
        }
      : null,
    {
      name: 'Layer',
      getLabel: () => i18n._(t`Layer`),
      valueType: 'string',
      getChoices: () => enumerateLayers(layout),
      getValue: (instance: gdInitialInstance) => instance.getLayer(),
      setValue: (instance: gdInitialInstance, newValue: string) =>
        instance.setLayer(newValue),
    },
    {
      name: 'Custom size',
      getLabel: () => i18n._(t`Custom size`),
      valueType: 'boolean',
      getValue: (instance: gdInitialInstance) => instance.hasCustomSize(),
      setValue: (instance: gdInitialInstance, newValue: boolean) => {
        if (
          instance.getCustomHeight() === 0 &&
          instance.getCustomWidth() === 0 &&
          instance.getCustomDepth() === 0
        ) {
          // The instance custom dimensions have never been set before.
          // To avoid setting setting all the dimensions to 0 when enabling
          // the instance custom size flag, the current instance dimensions are used.
          instance.setCustomWidth(getInstanceWidth(instance));
          instance.setCustomHeight(getInstanceHeight(instance));
          instance.setCustomDepth(getInstanceDepth(instance));
        }
        instance.setHasCustomSize(newValue);
        instance.setHasCustomDepth(newValue);
        forceUpdate();
      },
    },
    {
      name: 'custom-size-row',
      type: 'row',
      children: [
        {
          name: 'Width',
          getLabel: () => i18n._(t`Width`),
          valueType: 'number',
          getValue: getInstanceWidth,
          setValue: (instance: gdInitialInstance, newValue: number) => {
            instance.setCustomWidth(Math.max(newValue, 0));
            instance.setCustomHeight(getInstanceHeight(instance));
            instance.setCustomDepth(getInstanceDepth(instance));

            // This must be done after reading the size.
            instance.setHasCustomSize(true);
            instance.setHasCustomDepth(true);
            forceUpdate();
          },
        },
        {
          name: 'Height',
          getLabel: () => i18n._(t`Height`),
          valueType: 'number',
          getValue: getInstanceHeight,
          setValue: (instance: gdInitialInstance, newValue: number) => {
            instance.setCustomWidth(getInstanceWidth(instance));
            instance.setCustomHeight(Math.max(newValue, 0));
            instance.setCustomDepth(getInstanceDepth(instance));

            // This must be done after reading the size.
            instance.setHasCustomSize(true);
            instance.setHasCustomDepth(true);
            forceUpdate();
          },
        },
        is3DInstance
          ? {
              name: 'Depth',
              getLabel: () => i18n._(t`Depth`),
              valueType: 'number',
              getValue: getInstanceDepth,
              setValue: (instance: gdInitialInstance, newValue: number) => {
                instance.setCustomWidth(getInstanceWidth(instance));
                instance.setCustomHeight(getInstanceHeight(instance));
                instance.setCustomDepth(Math.max(newValue, 0));

                // This must be done after reading the size.
                instance.setHasCustomSize(true);
                instance.setHasCustomDepth(true);
                forceUpdate();
              },
            }
          : null,
      ].filter(Boolean),
    },
  ].filter(Boolean);
};

const InstancePropertiesEditor = ({
  instances,
  i18n,
  project,
  layout,
  unsavedChanges,
  historyHandler,
  onEditObjectByName,
  onGetInstanceSize,
  editInstanceVariables,
  onInstancesModified,
}: Props) => {
  const forceUpdate = useForceUpdate();

  const schemaFor2D: Schema = React.useMemo(
    () =>
      makeSchema({
        i18n,
        is3DInstance: false,
        onGetInstanceSize,
        onEditObjectByName,
        layout,
        forceUpdate,
      }),
    [i18n, onGetInstanceSize, onEditObjectByName, layout, forceUpdate]
  );

  const schemaFor3D: Schema = React.useMemo(
    () =>
      makeSchema({
        i18n,
        is3DInstance: true,
        onGetInstanceSize,
        onEditObjectByName,
        layout,
        forceUpdate,
      }),
    [i18n, onGetInstanceSize, onEditObjectByName, layout, forceUpdate]
  );

  // TODO: multiple instances support.
  const instance = instances[0];

  const { object, instanceSchema } = React.useMemo(
    () => {
      if (!instance) return {};

      const associatedObjectName = instance.getObjectName();
      const object = getObjectByName(project, layout, associatedObjectName);
      const properties = instance.getCustomProperties(project, layout);
      if (!object) return {};

      const is3DInstance = gd.MetadataProvider.getObjectMetadata(
        project.getCurrentPlatform(),
        object.getType()
      ).isRenderedIn3D();
      const instanceSchemaForCustomProperties = propertiesMapToSchema(
        properties,
        (instance: gdInitialInstance) =>
          instance.getCustomProperties(project, layout),
        (instance: gdInitialInstance, name, value) =>
          instance.updateCustomProperty(name, value, project, layout)
      );
      return {
        object,
        instanceSchema: is3DInstance
          ? schemaFor3D.concat(instanceSchemaForCustomProperties)
          : schemaFor2D.concat(instanceSchemaForCustomProperties),
      };
    },
    [project, layout, instance, schemaFor2D, schemaFor3D]
  );

  if (!object || !instance || !instanceSchema) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      componentTitle={<Trans>Instance properties</Trans>}
      scope="scene-editor-instance-properties"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView
        autoHideScrollbar
        key={instances
          .map((instance: gdInitialInstance) => '' + instance.ptr)
          .join(';')}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noMargin id="instance-properties-editor">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PropertiesEditor
              unsavedChanges={unsavedChanges}
              schema={instanceSchema}
              instances={instances}
              onInstancesModified={onInstancesModified}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="center" justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Instance Variables</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                size="small"
                onClick={() => {
                  editInstanceVariables(instance);
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ShareExternal />
              </IconButton>
            </Line>
          </Column>
          {object ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <VariablesList
              directlyStoreValueChangesWhileEditing
              inheritedVariablesContainer={object.getVariables()}
              variablesContainer={instance.getVariables()}
              size="small"
              onComputeAllVariableNames={() =>
                object
                  ? EventsRootVariablesFinder.findAllObjectVariables(
                      project.getCurrentPlatform(),
                      project,
                      layout,
                      object
                    )
                  : []
              }
              historyHandler={historyHandler}
            />
          ) : null}
        </Column>
      </ScrollView>
    </ErrorBoundary>
  );
};

const InstancePropertiesEditorContainer = React.forwardRef<Props, InstancePropertiesEditorInterface>((props, ref) => {
  const forceUpdate = useForceUpdate();
// @ts-expect-error - TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, layout, instances, onEditObjectByName, and 3 more.
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background>
{ /* @ts-expect-error - TS2339 - Property 'instances' does not exist on type 'InstancePropertiesEditorInterface'. | TS2339 - Property 'instances' does not exist on type 'InstancePropertiesEditorInterface'. */}
      {!props.instances || !props.instances.length ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Click on an instance in the scene to display its properties
          </Trans>
        </EmptyMessage>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, layout, instances, onEditObjectByName, and 3 more.
        <InstancePropertiesEditor {...props} />
      )}
    </Background>
  );
});

export default InstancePropertiesEditorContainer;
