import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:

import { testProject } from '../../GDevelopJsInitializerDecorator';

import paperDecorator from '../../PaperDecorator';

import alertDecorator from '../../AlertDecorator';

import ObjectGroupsList from '../../../ObjectGroupsList';

import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

import SerializedObjectDisplay from '../../SerializedObjectDisplay';

export default {
  title: 'LayoutEditor/ObjectGroupsList',
  component: ObjectGroupsList,
  decorators: [alertDecorator, paperDecorator],
};

export const Default = () => (
  <DragAndDropContextProvider>
    <SerializedObjectDisplay object={testProject.testLayout}>
      <div style={{ height: 250 }}>
        <ObjectGroupsList
// @ts-expect-error - TS2322 - Type '{ globalObjectGroups: any; objectGroups: any; onEditGroup: HandlerFunction; onRenameGroup: HandlerFunction; onDeleteGroup: HandlerFunction; getValidatedObjectOrGroupName: (newName: any) => any; }' is not assignable to type 'IntrinsicAttributes & ObjectGroupsListInterface & RefAttributes<Props>'.
          globalObjectGroups={testProject.project.getObjectGroups()}
          objectGroups={testProject.testLayout.getObjectGroups()}
          onEditGroup={action('onEditGroup')}
          onRenameGroup={action('onRenameGroup')}
          onDeleteGroup={action('onDeleteGroup')}
          // @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
          getValidatedObjectOrGroupName={(newName) => newName}
        />
      </div>
    </SerializedObjectDisplay>
  </DragAndDropContextProvider>
);
