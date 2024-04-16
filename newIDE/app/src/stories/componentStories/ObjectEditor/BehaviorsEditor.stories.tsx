import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../BehaviorsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/index.tsx', but '--jsx' is not set.
import BehaviorsEditor from '../../../BehaviorsEditor';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/BehaviorsEditor',
  component: BehaviorsEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectWithBehaviors}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BehaviorsEditor
      project={testProject.project}
      object={testProject.spriteObjectWithBehaviors}
      resourceManagementProps={fakeResourceManagementProps}
      onUpdateBehaviorsSharedData={() => {}}
      openBehaviorEvents={() => action('Open behavior events')}
      onBehaviorsUpdated={() => {}}
    />
  </SerializedObjectDisplay>
);

export const WithoutAnyBehaviors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectWithoutBehaviors}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BehaviorsEditor
      project={testProject.project}
      object={testProject.spriteObjectWithoutBehaviors}
      resourceManagementProps={fakeResourceManagementProps}
      onUpdateBehaviorsSharedData={() => {}}
      openBehaviorEvents={() => action('Open behavior events')}
      onBehaviorsUpdated={() => {}}
    />
  </SerializedObjectDisplay>
);
