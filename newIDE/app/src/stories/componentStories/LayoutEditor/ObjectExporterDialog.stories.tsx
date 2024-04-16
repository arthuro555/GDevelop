import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/ObjectExporterDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/ObjectExporterDialog.tsx', but '--jsx' is not set.
import ObjectExporterDialog from '../../../ObjectEditor/ObjectExporterDialog';

export default {
  title: 'LayoutEditor/ObjectExporterDialog',
  component: ObjectExporterDialog,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ObjectExporterDialog
    project={testProject.project}
    layout={testProject.testLayout}
    onClose={() => action('Close the dialog')}
  />
);
