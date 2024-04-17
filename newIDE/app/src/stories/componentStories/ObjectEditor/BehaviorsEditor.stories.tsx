import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:

import { testProject } from '../../GDevelopJsInitializerDecorator';

import paperDecorator from '../../PaperDecorator';

import BehaviorsEditor from '../../../BehaviorsEditor';

import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/BehaviorsEditor',
  component: BehaviorsEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
  <SerializedObjectDisplay object={testProject.spriteObjectWithBehaviors}>
    <BehaviorsEditor
      project={testProject.project}
      object={testProject.spriteObjectWithBehaviors}
      resourceManagementProps={fakeResourceManagementProps}
      onUpdateBehaviorsSharedData={() => {}}
// @ts-expect-error - TS2739 - Type 'HandlerFunction' is missing the following properties from type 'Promise<void>': then, catch, finally, [Symbol.toStringTag]
      openBehaviorEvents={() => action('Open behavior events')}
      onBehaviorsUpdated={() => {}}
    />
  </SerializedObjectDisplay>
);

export const WithoutAnyBehaviors = () => (
  <SerializedObjectDisplay object={testProject.spriteObjectWithoutBehaviors}>
    <BehaviorsEditor
      project={testProject.project}
      object={testProject.spriteObjectWithoutBehaviors}
      resourceManagementProps={fakeResourceManagementProps}
      onUpdateBehaviorsSharedData={() => {}}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type 'Promise<void>'.
      openBehaviorEvents={() => action('Open behavior events')}
      onBehaviorsUpdated={() => {}}
    />
  </SerializedObjectDisplay>
);
