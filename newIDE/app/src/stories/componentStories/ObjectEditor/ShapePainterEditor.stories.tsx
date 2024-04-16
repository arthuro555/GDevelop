import * as React from 'react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/ShapePainterEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/ShapePainterEditor.tsx', but '--jsx' is not set.
import ShapePainterEditor from '../../../ObjectEditor/Editors/ShapePainterEditor';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/ShapePainterEditor',
  component: ShapePainterEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.shapePainterObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ShapePainterEditor
      objectConfiguration={testProject.shapePainterObjectConfiguration}
      project={testProject.project}
      layout={testProject.testLayout}
      resourceManagementProps={fakeResourceManagementProps}
      onSizeUpdated={() => {}}
      // It would be used for refactoring but this kind of object has none.
      object={testProject.spriteObject}
      objectName="FakeObjectName"
    />
  </SerializedObjectDisplay>
);
