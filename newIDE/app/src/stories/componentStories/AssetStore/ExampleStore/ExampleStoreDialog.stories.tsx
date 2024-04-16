import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreStateProvider } from '../../../../AssetStore/ExampleStore/ExampleStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore/ExampleStoreDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreDialog.tsx', but '--jsx' is not set.
import ExampleStoreDialog from '../../../../AssetStore/ExampleStore/ExampleStoreDialog';

export default {
  title: 'Project Creation/ExampleStoreDialog',
  component: ExampleStoreDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExampleStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExampleStoreDialog
      open
      isProjectOpening={false}
      onClose={action('onClose')}
      selectedExampleShortHeader={null}
      selectedPrivateGameTemplateListingData={null}
      onSelectExampleShortHeader={action('onSelectExampleShortHeader')}
      onSelectPrivateGameTemplateListingData={action(
        'onSelectPrivateGameTemplateListingData'
      )}
      onOpenNewProjectSetupDialog={action('onOpenNewProjectSetupDialog')}
    />
  </ExampleStoreStateProvider>
);
