import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/index.tsx', but '--jsx' is not set.
import { ExampleStore } from '../../../../AssetStore/ExampleStore';
// @ts-expect-error - TS6142 - Module '../../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreStateProvider } from '../../../../AssetStore/ExampleStore/ExampleStoreContext';

export default {
  title: 'AssetStore/ExampleStore',
  component: ExampleStore,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExampleStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExampleStore
        isOpening={false}
        onOpenNewProjectSetupDialog={action('onOpenNewProjectSetupDialog')}
        onSelectExampleShortHeader={action('onSelectExampleShortHeader')}
        onSelectPrivateGameTemplateListingData={action(
          'onSelectPrivateGameTemplateListingData'
        )}
        selectedExampleShortHeader={null}
        selectedPrivateGameTemplateListingData={null}
      />
    </ExampleStoreStateProvider>
  </FixedHeightFlexContainer>
);
