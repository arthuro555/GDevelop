import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../ProjectManager' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectManager/index.tsx', but '--jsx' is not set.
import ProjectManager from '../../../ProjectManager';
import fakeResourceManagementProps from '../../FakeResourceManagement';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../../GDevelopJsInitializerDecorator';
import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';

export default {
  title: 'Project Creation/ProjectManager',
  component: ProjectManager,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};
export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ProjectManager
        project={testProject.project}
        onSaveProjectProperties={async () => true}
        onChangeProjectName={action('onChangeProjectName')}
        onOpenExternalEvents={action('onOpenExternalEvents')}
        onOpenLayout={action('onOpenLayout')}
        onOpenExternalLayout={action('onOpenExternalLayout')}
        onOpenEventsFunctionsExtension={action(
          'onOpenEventsFunctionsExtension'
        )}
        onInstallExtension={action('onInstallExtension')}
        onDeleteLayout={action('onDeleteLayout')}
        onDeleteExternalLayout={action('onDeleteExternalLayout')}
        onDeleteEventsFunctionsExtension={action(
          'onDeleteEventsFunctionsExtension'
        )}
        onDeleteExternalEvents={action('onDeleteExternalEvents')}
        onRenameLayout={action('onRenameLayout')}
        onRenameExternalLayout={action('onRenameExternalLayout')}
        onRenameEventsFunctionsExtension={action(
          'onRenameEventsFunctionsExtension'
        )}
        onRenameExternalEvents={action('onRenameExternalEvents')}
        onOpenResources={action('onOpenResources')}
        onOpenPlatformSpecificAssets={action('onOpenPlatformSpecificAssets')}
        eventsFunctionsExtensionsError={null}
        onReloadEventsFunctionsExtensions={action(
          'onReloadEventsFunctionsExtensions'
        )}
        onShareProject={action('onShareProject')}
        freezeUpdate={false}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        resourceManagementProps={fakeResourceManagementProps}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const ErrorsInFunctions = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ProjectManager
        project={testProject.project}
        onSaveProjectProperties={async () => true}
        onChangeProjectName={action('onChangeProjectName')}
        onOpenExternalEvents={action('onOpenExternalEvents')}
        onOpenLayout={action('onOpenLayout')}
        onOpenExternalLayout={action('onOpenExternalLayout')}
        onOpenEventsFunctionsExtension={action(
          'onOpenEventsFunctionsExtension'
        )}
        onInstallExtension={action('onInstallExtension')}
        onDeleteLayout={action('onDeleteLayout')}
        onDeleteExternalLayout={action('onDeleteExternalLayout')}
        onDeleteEventsFunctionsExtension={action(
          'onDeleteEventsFunctionsExtension'
        )}
        onDeleteExternalEvents={action('onDeleteExternalEvents')}
        onRenameLayout={action('onRenameLayout')}
        onRenameExternalLayout={action('onRenameExternalLayout')}
        onRenameEventsFunctionsExtension={action(
          'onRenameEventsFunctionsExtension'
        )}
        onRenameExternalEvents={action('onRenameExternalEvents')}
        onOpenResources={action('onOpenResources')}
        onOpenPlatformSpecificAssets={action('onOpenPlatformSpecificAssets')}
        eventsFunctionsExtensionsError={
          new Error('Fake error during code generation')
        }
        onReloadEventsFunctionsExtensions={action(
          'onReloadEventsFunctionsExtensions'
        )}
        onShareProject={action('onShareProject')}
        freezeUpdate={false}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        resourceManagementProps={fakeResourceManagementProps}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);
