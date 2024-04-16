import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../AlertDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectsList/index.tsx', but '--jsx' is not set.
import ObjectsList from '../../../ObjectsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'LayoutEditor/ObjectsList',
  component: ObjectsList,
  decorators: [alertDecorator, paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div style={{ height: 400 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ObjectsList
        getThumbnail={() => 'res/unknown32.png'}
        project={testProject.project}
        objectsContainer={testProject.testLayout}
        layout={testProject.testLayout}
        resourceManagementProps={fakeResourceManagementProps}
        onEditObject={action('On edit object')}
        onExportAssets={action('On export assets')}
        onAddObjectInstance={action('On add instance to the scene')}
        onObjectCreated={action('On object created')}
        selectedObjectFolderOrObjectsWithContext={[]}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
        getValidatedObjectOrGroupName={newName => newName}
// @ts-expect-error - TS7006 - Parameter 'objectsWithContext' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
        onDeleteObjects={(objectsWithContext, cb) => cb(true)}
        onRenameObjectFolderOrObjectWithContextFinish={(
// @ts-expect-error - TS7006 - Parameter 'objectWithContext' implicitly has an 'any' type.
          objectWithContext,
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
          newName,
// @ts-expect-error - TS7006 - Parameter 'cb' implicitly has an 'any' type.
          cb
        ) => cb(true)}
        onObjectFolderOrObjectWithContextSelected={() => {}}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        canInstallPrivateAsset={() => false}
      />
    </div>
  </DragAndDropContextProvider>
);

export const WithSerializedObjectView = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SerializedObjectDisplay object={testProject.testLayout}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ height: 250 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ObjectsList
          getThumbnail={() => 'res/unknown32.png'}
          project={testProject.project}
          objectsContainer={testProject.testLayout}
          layout={testProject.testLayout}
          resourceManagementProps={fakeResourceManagementProps}
          onEditObject={action('On edit object')}
          onExportAssets={action('On export assets')}
          onAddObjectInstance={action('On add instance to the scene')}
          onObjectCreated={action('On object created')}
          selectedObjectFolderOrObjectsWithContext={[]}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
          getValidatedObjectOrGroupName={newName => newName}
// @ts-expect-error - TS7006 - Parameter 'objectsWithContext' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
          onDeleteObjects={(objectsWithContext, cb) => cb(true)}
          onRenameObjectFolderOrObjectWithContextFinish={(
// @ts-expect-error - TS7006 - Parameter 'objectWithContext' implicitly has an 'any' type.
            objectWithContext,
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
            newName,
// @ts-expect-error - TS7006 - Parameter 'cb' implicitly has an 'any' type.
            cb
          ) => cb(true)}
          onObjectFolderOrObjectWithContextSelected={() => {}}
          hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
          canInstallPrivateAsset={() => false}
        />
      </div>
    </SerializedObjectDisplay>
  </DragAndDropContextProvider>
);
