import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/index.tsx', but '--jsx' is not set.
import ResourcesList from '../../../ResourcesList';
import ValueStateHolder from '../../ValueStateHolder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'ResourcesList/ResourcesList',
  component: ResourcesList,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div style={{ height: 200 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ValueStateHolder
        initialValue={null}
        render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResourcesList
            onSelectResource={onChange}
            selectedResource={value}
            onDeleteResource={action('onDeleteResource')}
            onRenameResource={action('onRenameResource')}
            project={testProject.project}
            onRemoveUnusedResources={action('onRemoveUnusedResources')}
            onRemoveAllResourcesWithInvalidPath={action(
              'onRemoveAllResourcesWithInvalidPath'
            )}
            fileMetadata={null}
          />
        )}
      />
    </div>
  </DragAndDropContextProvider>
);
