import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import CompactPropertiesEditor, {
  Separator,
// @ts-expect-error - TS6142 - Module '../../CompactPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CompactPropertiesEditor/index.tsx', but '--jsx' is not set.
} from '../../CompactPropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../CompactPropertiesEditor/PropertiesMapToCompactSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CompactPropertiesEditor/PropertiesMapToCompactSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../CompactPropertiesEditor/PropertiesMapToCompactSchema';
// @ts-expect-error - TS6142 - Module '../../CompactPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CompactPropertiesEditor/index.tsx', but '--jsx' is not set.
import { Schema } from '../../CompactPropertiesEditor';
import getObjectByName from '../../Utils/GetObjectByName';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column, Spacer } from '../../UI/Grid';
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
import {
  makeSchema,
  reorderInstanceSchemaForCustomProperties,
// @ts-expect-error - TS6142 - Module './CompactPropertiesSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/CompactInstancePropertiesEditor/CompactPropertiesSchema.tsx', but '--jsx' is not set.
} from './CompactPropertiesSchema';

export const styles = {
  paper: {
    display: 'flex',
    flex: 1,
    minWidth: 0,
    flexDirection: 'column',
  },
  icon: {
    fontSize: 18,
  },
} as const;

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

export type CompactInstancePropertiesEditorInterface = {
  forceUpdate: () => void
};

const CompactInstancePropertiesEditor = ({
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

  const { object, instanceSchema } = React.useMemo<{
    object?: gdObject,
    instanceSchema?: Schema
  }>(() => {
    if (!instance) return { object: undefined, instanceSchema: undefined };

    const associatedObjectName = instance.getObjectName();
    const object = getObjectByName(project, layout, associatedObjectName);
    const properties = instance.getCustomProperties(project, layout);
    if (!object) return { object: undefined, instanceSchema: undefined };

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

    const reorderedInstanceSchemaForCustomProperties = reorderInstanceSchemaForCustomProperties(
      instanceSchemaForCustomProperties,
      i18n
    );
    return {
      object,
      instanceSchema: is3DInstance
        ? schemaFor3D.concat(reorderedInstanceSchemaForCustomProperties)
        : schemaFor2D.concat(reorderedInstanceSchemaForCustomProperties),
    };
  }, [project, layout, instance, schemaFor2D, schemaFor3D, i18n]);

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
            <CompactPropertiesEditor
              unsavedChanges={unsavedChanges}
              schema={instanceSchema}
              instances={instances}
              onInstancesModified={onInstancesModified}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Separator />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="center" justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="sub-title" noMargin>
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
                <ShareExternal style={styles.icon} />
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
              toolbarIconStyle={styles.icon}
            />
          ) : null}
        </Column>
      </ScrollView>
    </ErrorBoundary>
  );
};

const CompactInstancePropertiesEditorContainer = React.forwardRef<Props, CompactInstancePropertiesEditorInterface>((props, ref) => {
  const forceUpdate = useForceUpdate();
// @ts-expect-error - TS2740 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, layout, instances, onEditObjectByName, and 3 more.
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper background="dark" square style={styles.paper}>
{ /* @ts-expect-error - TS2339 - Property 'instances' does not exist on type 'CompactInstancePropertiesEditorInterface'. | TS2339 - Property 'instances' does not exist on type 'CompactInstancePropertiesEditorInterface'. */}
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
        <CompactInstancePropertiesEditor {...props} />
      )}
    </Paper>
  );
});

export default CompactInstancePropertiesEditorContainer;
