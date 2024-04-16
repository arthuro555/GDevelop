import * as React from 'react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectGroupEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupEditor/index.tsx', but '--jsx' is not set.
import ObjectGroupEditor from '../../../ObjectGroupEditor';

export default {
  title: 'LayoutEditor/ObjectGroupEditor',
  component: ObjectGroupEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ObjectGroupEditor
    project={testProject.project}
    globalObjectsContainer={testProject.project}
    objectsContainer={testProject.testLayout}
    group={testProject.group2}
  />
);

export const WithLongObjectNames = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ObjectGroupEditor
    project={testProject.project}
    globalObjectsContainer={testProject.project}
    objectsContainer={testProject.testLayout}
    group={testProject.group4WithLongsNames}
  />
);
