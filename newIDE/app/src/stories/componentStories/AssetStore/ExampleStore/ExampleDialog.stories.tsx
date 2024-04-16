import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore/ExampleDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleDialog.tsx', but '--jsx' is not set.
import { ExampleDialog } from '../../../../AssetStore/ExampleStore/ExampleDialog';
import { exampleFromFutureVersion } from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'AssetStore/ExampleStore/ExampleDialog',
  component: ExampleDialog,
  decorators: [paperDecorator],
};

export const FutureVersion = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExampleDialog
    exampleShortHeader={exampleFromFutureVersion}
    onOpen={action('onOpen')}
    isOpening={false}
    onClose={action('onClose')}
  />
);
