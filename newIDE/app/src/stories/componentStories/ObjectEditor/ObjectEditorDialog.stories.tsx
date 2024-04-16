import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/ObjectEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/ObjectEditorDialog.tsx', but '--jsx' is not set.
import ObjectEditorDialog from '../../../ObjectEditor/ObjectEditorDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/ObjectEditorDialog',
  component: ObjectEditorDialog,
};

export const CustomObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ObjectEditorDialog
      open={true}
      object={testProject.customObject}
      onApply={() => action('Apply changes')}
      onCancel={() => action('Cancel changes')}
      onRename={() => action('Rename object')}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
      getValidatedObjectOrGroupName={newName => newName}
      project={testProject.project}
      layout={testProject.testLayout}
      resourceManagementProps={fakeResourceManagementProps}
      onComputeAllVariableNames={() => []}
      onUpdateBehaviorsSharedData={() => {}}
      initialTab={null}
      hotReloadPreviewButtonProps={{
        hasPreviewsRunning: false,
        launchProjectDataOnlyPreview: () => action('Hot-reload'),
        launchProjectWithLoadingScreenPreview: () => action('Reload'),
      }}
      openBehaviorEvents={() => action('Open behavior events')}
    />
  </DragAndDropContextProvider>
);

export const StandardObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ObjectEditorDialog
      open={true}
      object={testProject.panelSpriteObject}
      onApply={() => action('Apply changes')}
      onCancel={() => action('Cancel changes')}
      onRename={() => action('Rename object')}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
      getValidatedObjectOrGroupName={newName => newName}
      project={testProject.project}
      layout={testProject.testLayout}
      resourceManagementProps={fakeResourceManagementProps}
      onComputeAllVariableNames={() => []}
      onUpdateBehaviorsSharedData={() => {}}
      initialTab={null}
      hotReloadPreviewButtonProps={{
        hasPreviewsRunning: false,
        launchProjectDataOnlyPreview: () => action('Hot-reload'),
        launchProjectWithLoadingScreenPreview: () => action('Reload'),
      }}
      openBehaviorEvents={() => action('Open behavior events')}
    />
  </DragAndDropContextProvider>
);
