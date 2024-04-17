import { Trans } from '@lingui/macro';

import { I18n as I18nType } from '@lingui/core';

import { t } from '@lingui/macro';

import * as React from 'react';

import Background from '../../UI/Background';

import enumerateLayers from '../../LayersList/EnumerateLayers';

import EmptyMessage from '../../UI/EmptyMessage';

import PropertiesEditor from '../../PropertiesEditor';

import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';

import { Schema } from '../../PropertiesEditor';
import getObjectByName from '../../Utils/GetObjectByName';

import IconButton from '../../UI/IconButton';

import { Line, Column } from '../../UI/Grid';

import Text from '../../UI/Text';

import { UnsavedChanges } from '../../MainFrame/UnsavedChangesContext';

import ScrollView from '../../UI/ScrollView';
import EventsRootVariablesFinder from '../../Utils/EventsRootVariablesFinder';
import VariablesList, {
  HistoryHandler,
} from '../../VariablesList/VariablesList';

import ShareExternal from '../../UI/CustomSvgIcons/ShareExternal';
import useForceUpdate from '../../Utils/UseForceUpdate';

import ErrorBoundary from '../../UI/ErrorBoundary';

type Props = {
  project: gd.Project;
  layout: gd.Layout;
  instances: Array<gd.InitialInstance>;
  onEditObjectByName: (arg1: string) => void;
  onInstancesModified?: (arg1: Array<gd.InitialInstance>) => void;
  onGetInstanceSize: (arg1: gd.InitialInstance) => [number, number, number];
  editInstanceVariables: (arg1: gd.InitialInstance) => void;
  unsavedChanges?: UnsavedChanges | null | undefined;
  i18n: I18nType;
  historyHandler?: HistoryHandler;
};

export type InstancePropertiesEditorInterface = {
  forceUpdate: () => void;
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
  const getInstanceWidth = (instance: gd.InitialInstance) =>
    instance.hasCustomSize()
      ? instance.getCustomWidth()
      : onGetInstanceSize(instance)[0];

  const getInstanceHeight = (instance: gd.InitialInstance) =>
    instance.hasCustomSize()
      ? instance.getCustomHeight()
      : onGetInstanceSize(instance)[1];

  const getInstanceDepth = (instance: gd.InitialInstance) =>
    instance.hasCustomDepth()
      ? instance.getCustomDepth()
      : onGetInstanceSize(instance)[2];

  return [
    {
      name: i18n._(t`Object`),
      getValue: (instance: gd.InitialInstance) => instance.getObjectName(),
      nonFieldType: 'sectionTitle',
      defaultValue: i18n._(t`Different objects`),
    },
    {
      label: i18n._(t`Edit object`),
      disabled: 'onValuesDifferent',
      nonFieldType: 'button',
      getValue: (instance: gd.InitialInstance) => instance.getObjectName(),
      onClick: (instance: gd.InitialInstance) =>
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
          getValue: (instance: gd.InitialInstance) => instance.getX(),
          setValue: (instance: gd.InitialInstance, newValue: number) =>
            instance.setX(newValue),
        },
        {
          name: 'Y',
          getLabel: () => i18n._(t`Y`),
          valueType: 'number',
          getValue: (instance: gd.InitialInstance) => instance.getY(),
          setValue: (instance: gd.InitialInstance, newValue: number) =>
            instance.setY(newValue),
        },
        is3DInstance
          ? {
              name: 'Z',
              getLabel: () => i18n._(t`Z`),
              valueType: 'number',
              getValue: (instance: gd.InitialInstance) => instance.getZ(),
              setValue: (instance: gd.InitialInstance, newValue: number) =>
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
              getValue: (instance: gd.InitialInstance) =>
                instance.getRotationX(),
              setValue: (instance: gd.InitialInstance, newValue: number) =>
                instance.setRotationX(newValue),
            }
          : null,
        is3DInstance
          ? {
              name: 'RotationY',
              getLabel: () => i18n._(t`Rotation (Y)`),
              valueType: 'number',
              getValue: (instance: gd.InitialInstance) =>
                instance.getRotationY(),
              setValue: (instance: gd.InitialInstance, newValue: number) =>
                instance.setRotationY(newValue),
            }
          : null,
        {
          name: 'Angle',
          getLabel: () =>
            is3DInstance ? i18n._(t`Rotation (Z)`) : i18n._(t`Angle`),
          valueType: 'number',
          getValue: (instance: gd.InitialInstance) => instance.getAngle(),
          setValue: (instance: gd.InitialInstance, newValue: number) =>
            instance.setAngle(newValue),
        },
      ].filter(Boolean),
    },
    {
      name: 'Lock instance position angle',
      getLabel: () => i18n._(t`Lock position/angle in the editor`),
      valueType: 'boolean',
      getValue: (instance: gd.InitialInstance) => instance.isLocked(),
      setValue: (instance: gd.InitialInstance, newValue: boolean) => {
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
      disabled: (instances: gd.InitialInstance[]) => {
        return instances.some((instance) => !instance.isLocked());
      },
      getValue: (instance: gd.InitialInstance) => instance.isSealed(),
      setValue: (instance: gd.InitialInstance, newValue: boolean) =>
        instance.setSealed(newValue),
    },
    !is3DInstance
      ? {
          name: 'Z Order',
          getLabel: () => i18n._(t`Z Order`),
          valueType: 'number',
          getValue: (instance: gd.InitialInstance) => instance.getZOrder(),
          setValue: (instance: gd.InitialInstance, newValue: number) =>
            instance.setZOrder(newValue),
        }
      : null,
    {
      name: 'Layer',
      getLabel: () => i18n._(t`Layer`),
      valueType: 'string',
      getChoices: () => enumerateLayers(layout),
      getValue: (instance: gd.InitialInstance) => instance.getLayer(),
      setValue: (instance: gd.InitialInstance, newValue: string) =>
        instance.setLayer(newValue),
    },
    {
      name: 'Custom size',
      getLabel: () => i18n._(t`Custom size`),
      valueType: 'boolean',
      getValue: (instance: gd.InitialInstance) => instance.hasCustomSize(),
      setValue: (instance: gd.InitialInstance, newValue: boolean) => {
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
          setValue: (instance: gd.InitialInstance, newValue: number) => {
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
          setValue: (instance: gd.InitialInstance, newValue: number) => {
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
              setValue: (instance: gd.InitialInstance, newValue: number) => {
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

  const { object, instanceSchema } = React.useMemo(() => {
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
      (instance: gd.InitialInstance) =>
        instance.getCustomProperties(project, layout),
      (instance: gd.InitialInstance, name, value) =>
        instance.updateCustomProperty(name, value, project, layout)
    );
    return {
      object,
      instanceSchema: is3DInstance
        ? schemaFor3D.concat(instanceSchemaForCustomProperties)
        : schemaFor2D.concat(instanceSchemaForCustomProperties),
    };
  }, [project, layout, instance, schemaFor2D, schemaFor3D]);

  if (!object || !instance || !instanceSchema) return null;

  return (
    <ErrorBoundary
      componentTitle={<Trans>Instance properties</Trans>}
      scope="scene-editor-instance-properties"
    >
      <ScrollView
        autoHideScrollbar
        key={instances
          .map((instance: gd.InitialInstance) => '' + instance.ptr)
          .join(';')}
      >
        <Column expand noMargin id="instance-properties-editor">
          <Column>
            <PropertiesEditor
              unsavedChanges={unsavedChanges}
              schema={instanceSchema}
              instances={instances}
              onInstancesModified={onInstancesModified}
            />
            <Line alignItems="center" justifyContent="space-between">
              <Text>
                <Trans>Instance Variables</Trans>
              </Text>
              <IconButton
                size="small"
                onClick={() => {
                  editInstanceVariables(instance);
                }}
              >
                <ShareExternal />
              </IconButton>
            </Line>
          </Column>
          {object ? (
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

const InstancePropertiesEditorContainer = React.forwardRef<
  Props,
  InstancePropertiesEditorInterface
>((props, ref) => {
  const forceUpdate = useForceUpdate();
  // @ts-expect-error - TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, layout, instances, onEditObjectByName, and 3 more.
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  return (
    <Background>
      {/* @ts-expect-error - TS2339 - Property 'instances' does not exist on type 'InstancePropertiesEditorInterface'. | TS2339 - Property 'instances' does not exist on type 'InstancePropertiesEditorInterface'. */}
      {!props.instances || !props.instances.length ? (
        <EmptyMessage>
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
