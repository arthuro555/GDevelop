import * as React from 'react';

import paperDecorator from '../../PaperDecorator';

import EmptyEditor from '../../../ObjectEditor/Editors/EmptyEditor';

export default {
  title: 'ObjectEditor/EmptyEditor',
  component: EmptyEditor,
  decorators: [paperDecorator],
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <EmptyEditor renderObjectNameField={() => null} />;
