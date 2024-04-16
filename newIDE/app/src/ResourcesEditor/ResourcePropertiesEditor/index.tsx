// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../../UI/Background';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import PropertiesEditor from '../../PropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../ResourcesList/ResourcePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/index.tsx', but '--jsx' is not set.
import ResourcePreview from '../../ResourcesList/ResourcePreview';
import ResourcesLoader from '../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor/PropertiesMapToSchema' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/PropertiesMapToSchema.tsx', but '--jsx' is not set.
import propertiesMapToSchema from '../../PropertiesEditor/PropertiesMapToSchema';
// @ts-expect-error - TS6142 - Module '../../PropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/PropertiesEditor/index.tsx', but '--jsx' is not set.
import { Schema } from '../../PropertiesEditor';

import {
  ResourceSource,
  ResourceManagementProps,
} from '../../ResourcesList/ResourceSource';
import useForceUpdate from '../../Utils/UseForceUpdate';
// @ts-expect-error - TS6142 - Module './EmbeddedResourcesMappingTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesEditor/ResourcePropertiesEditor/EmbeddedResourcesMappingTable.tsx', but '--jsx' is not set.
import { EmbeddedResourcesMappingTable } from './EmbeddedResourcesMappingTable';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';

type Props = {
  project: gdProject,
  resourcesLoader: typeof ResourcesLoader,
  resources: Array<gdResource>,
  onResourcePathUpdated: () => void,
  resourceManagementProps: ResourceManagementProps
};

export type ResourcePropertiesEditorInterface = {
  forceUpdate: () => void
};

const renderEmpty = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>
        Resources are automatically added to your project whenever you add an
        image, a font or a video to an object or when you choose an audio file
        in events. Choose a resource to display its properties.
      </Trans>
    </EmptyMessage>
  );
};

const ResourcePropertiesEditor = React.forwardRef<Props, ResourcePropertiesEditorInterface>((
  {
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ResourcePropertiesEditorInterface'.
    project,
// @ts-expect-error - TS2339 - Property 'resourcesLoader' does not exist on type 'ResourcePropertiesEditorInterface'.
    resourcesLoader,
// @ts-expect-error - TS2339 - Property 'resources' does not exist on type 'ResourcePropertiesEditorInterface'.
    resources,
// @ts-expect-error - TS2339 - Property 'onResourcePathUpdated' does not exist on type 'ResourcePropertiesEditorInterface'.
    onResourcePathUpdated,
// @ts-expect-error - TS2339 - Property 'resourceManagementProps' does not exist on type 'ResourcePropertiesEditorInterface'.
    resourceManagementProps,
  },
  ref
) => {
  const forceUpdate = useForceUpdate();
// @ts-expect-error - TS2739 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, resourcesLoader, resources, onResourcePathUpdated, resourceManagementProps
  React.useImperativeHandle(ref, () => ({ forceUpdate }));

  const chooseResourcePath = React.useCallback(
    async (resourceSource: ResourceSource) => {
      const resource = resources[0];

      const newResources = await resourceManagementProps.onChooseResource({
        initialSourceName: resourceSource.name,
        multiSelection: false,
        resourceKind: resource.getKind(),
      });
      if (!newResources.length) return; // No path was chosen by the user.
      resource.setFile(newResources[0].getFile());

      // Important, we are responsible for deleting the resources that were given to us.
      // Otherwise we have a memory leak.
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
      newResources.forEach(resource => resource.delete());

      onResourcePathUpdated();
      forceUpdate();

      await resourceManagementProps.onFetchNewlyAddedResources();
    },
    [resourceManagementProps, resources, onResourcePathUpdated, forceUpdate]
  );

  const schema: Schema = React.useMemo(
    () => [
      {
        name: 'Resource name',
        valueType: 'string',
        disabled: true,
        getValue: (resource: gdResource) => resource.getName(),
        setValue: (resource: gdResource, newValue: string) =>
          resource.setName(newValue),
      },
      {
        name: 'File',
        valueType: 'string',
        getValue: (resource: gdResource) => resource.getFile(),
        setValue: (resource: gdResource, newValue: string) =>
          resource.setFile(newValue),
        onEditButtonClick: () => {
          const storageProvider = resourceManagementProps.getStorageProvider();
          const resourceSources = resourceManagementProps.resourceSources
// @ts-expect-error - TS7006 - Parameter 'source' implicitly has an 'any' type.
            .filter(source => source.kind === resources[0].getKind())
            .filter(
// @ts-expect-error - TS7031 - Binding element 'onlyForStorageProvider' implicitly has an 'any' type.
              ({ onlyForStorageProvider }) =>
                !onlyForStorageProvider ||
                onlyForStorageProvider === storageProvider.internalName
            );

          const firstResourceSource = resourceSources[0];
          if (firstResourceSource) chooseResourcePath(firstResourceSource);
        },
        onEditButtonBuildMenuTemplate: (i18n: I18nType) => {
          const storageProvider = resourceManagementProps.getStorageProvider();
          return resourceManagementProps.resourceSources
// @ts-expect-error - TS7006 - Parameter 'source' implicitly has an 'any' type.
            .filter(source => source.kind === resources[0].getKind())
            .filter(
// @ts-expect-error - TS7031 - Binding element 'onlyForStorageProvider' implicitly has an 'any' type.
              ({ onlyForStorageProvider }) =>
                !onlyForStorageProvider ||
                onlyForStorageProvider === storageProvider.internalName
            )
// @ts-expect-error - TS7006 - Parameter 'source' implicitly has an 'any' type.
            .map(source => ({
              label: i18n._(source.displayName),
              click: () => chooseResourcePath(source),
            }));
        },
      },
    ],
    [resourceManagementProps, resources, chooseResourcePath]
  );

  const renderResourcesProperties = React.useCallback(
    () => {
      //TODO: Multiple resources support
      const properties = resources[0].getProperties();
      const resourceSchema = propertiesMapToSchema(
        properties,
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
        resource => resource.getProperties(),
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type. | TS7006 - Parameter 'name' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        (resource, name, value) => {
          resource.updateProperty(name, value);
          forceUpdate();
        }
      );

      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PropertiesEditor
          schema={schema.concat(resourceSchema)}
          instances={resources}
        />
      );
    },
    [resources, schema, forceUpdate]
  );

  const renderPreview = () => {
    if (!resources || !resources.length) return;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResourcePreview
        resourceName={resources[0].getName()}
        resourcesLoader={resourcesLoader}
        project={project}
      />
    );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background maxWidth>
      {renderPreview()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout
          expand
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
          key={resources.map(resource => '' + resource.ptr).join(';')}
        >
          {!resources || !resources.length
            ? renderEmpty()
            : renderResourcesProperties()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EmbeddedResourcesMappingTable resources={resources} />
        </ColumnStackLayout>
      </ScrollView>
    </Background>
  );
});

export default ResourcePropertiesEditor;
