import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../AlertDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectGroupsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupsList/index.tsx', but '--jsx' is not set.
import ObjectGroupsList from '../../../ObjectGroupsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';

export default {
  title: 'LayoutEditor/ObjectGroupsList',
  component: ObjectGroupsList,
  decorators: [alertDecorator, paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SerializedObjectDisplay object={testProject.testLayout}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ height: 250 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ObjectGroupsList
          globalObjectGroups={testProject.project.getObjectGroups()}
          objectGroups={testProject.testLayout.getObjectGroups()}
          onEditGroup={action('onEditGroup')}
          onRenameGroup={action('onRenameGroup')}
          onDeleteGroup={action('onDeleteGroup')}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
          getValidatedObjectOrGroupName={newName => newName}
        />
      </div>
    </SerializedObjectDisplay>
  </DragAndDropContextProvider>
);
