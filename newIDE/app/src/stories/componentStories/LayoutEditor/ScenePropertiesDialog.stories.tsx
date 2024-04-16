import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../SceneEditor/ScenePropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/ScenePropertiesDialog.tsx', but '--jsx' is not set.
import ScenePropertiesDialog from '../../../SceneEditor/ScenePropertiesDialog';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'LayoutEditor/ScenePropertiesDialog',
  component: ScenePropertiesDialog,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ScenePropertiesDialog
    open
    project={testProject.project}
    layout={testProject.testLayout}
    onClose={() => action('Close the dialog')}
    onApply={() => action('Apply changes')}
    onEditVariables={() => action('Edit variables')}
    resourceManagementProps={fakeResourceManagementProps}
  />
);

export const MoreSettings = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ScenePropertiesDialog
    open
    project={testProject.project}
    layout={testProject.testLayout}
    onClose={() => action('Close the dialog')}
    onApply={() => action('Apply changes')}
    onEditVariables={() => action('Edit variables')}
    onOpenMoreSettings={() => action('Open more settings')}
    resourceManagementProps={fakeResourceManagementProps}
  />
);
