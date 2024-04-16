import * as React from 'react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/PanelSpriteEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/PanelSpriteEditor.tsx', but '--jsx' is not set.
import PanelSpriteEditor from '../../../ObjectEditor/Editors/PanelSpriteEditor';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/PanelSpriteEditor',
  component: PanelSpriteEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay
    object={testProject.panelSpriteObject.getConfiguration()}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <PanelSpriteEditor
      objectConfiguration={testProject.panelSpriteObject.getConfiguration()}
      project={testProject.project}
      layout={testProject.testLayout}
      resourceManagementProps={fakeResourceManagementProps}
      onSizeUpdated={() => {}}
      object={testProject.panelSpriteObject}
      objectName="FakeObjectName"
    />
  </SerializedObjectDisplay>
);
