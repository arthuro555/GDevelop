import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/EmptyEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/EmptyEditor.tsx', but '--jsx' is not set.
import EmptyEditor from '../../../ObjectEditor/Editors/EmptyEditor';

export default {
  title: 'ObjectEditor/EmptyEditor',
  component: EmptyEditor,
  decorators: [paperDecorator],
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <EmptyEditor renderObjectNameField={() => null} />;
