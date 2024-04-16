import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourceSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelector.tsx', but '--jsx' is not set.
import ResourceSelector from '../../../ResourcesList/ResourceSelector';
import fakeResourceExternalEditors from '../../FakeResourceExternalEditors';
import ResourcesLoader from '../../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourceSelectorWithThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceSelectorWithThumbnail.tsx', but '--jsx' is not set.
import ResourceSelectorWithThumbnail from '../../../ResourcesList/ResourceSelectorWithThumbnail';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import { emptyStorageProvider } from '../../../ProjectsStorage/ProjectStorageProviders';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ResourcesList/ResourceSelector',
  component: ResourceSelector,
  decorators: [paperDecorator],
};

export const ImageNotSelected = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName=""
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const ImageSelected = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="icon128.png"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const ImageWithMultipleExternalEditors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={{
      getStorageProvider: () => emptyStorageProvider,
      onFetchNewlyAddedResources: async () => {},
      resourceSources: [],
      onChooseResource: () => Promise.reject('Unimplemented'),
      resourceExternalEditors: [
        ...fakeResourceExternalEditors,
        {
          name: 'fake-image-editor-2',
          createDisplayName: 'Create with Super Image Editor 2',
          editDisplayName: 'Edit with Super Image Editor 2',
          kind: 'image',
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type.
          edit: async options => {
            console.log('Open the image editor with these options:', options);
            return null;
          },
        },
      ],
      getStorageProviderResourceOperations: () => null,
    }}
    initialResourceName=""
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const NotExisting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="resource-that-does-not-exists-in-the-project"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const ImageNoMargin = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    margin="none"
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="icon128.png"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const ImageWithThumbnail = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelectorWithThumbnail
    resourceKind="image"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    resourceName="icon128.png"
    onChange={action('on change')}
  />
);

export const Audio = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    resourceKind="audio"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="fake-audio1.mp3"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const FontWithResetButton = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    canBeReset
    resourceKind="font"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="font.otf"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);

export const FontNoMarginWithResetButton = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ResourceSelector
    canBeReset
    margin="none"
    resourceKind="font"
    project={testProject.project}
    resourceManagementProps={fakeResourceManagementProps}
    initialResourceName="font.otf"
    onChange={action('on change')}
    resourcesLoader={ResourcesLoader}
  />
);
