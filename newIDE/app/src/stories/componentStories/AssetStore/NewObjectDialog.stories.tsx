import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/NewObjectDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NewObjectDialog.tsx', but '--jsx' is not set.
import NewObjectDialog from '../../../AssetStore/NewObjectDialog';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import fakeResourceManagementProps from '../../FakeResourceManagement';
import { useShopNavigation } from '../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/NewObjectDialog',
  component: NewObjectDialog,
  decorators: [paperDecorator],
};

export const Default = () => {
  const navigationState = useShopNavigation();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AssetStoreStateProvider shopNavigationState={navigationState}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
        {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <NewObjectDialog
            project={testProject.project}
            layout={testProject.testLayout}
            onClose={action('onClose')}
            onCreateNewObject={action('onCreateNewObject')}
            onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
            objectsContainer={testProject.testLayout}
            resourceManagementProps={fakeResourceManagementProps}
            canInstallPrivateAsset={() => false}
          />
        )}
      </I18n>
    </AssetStoreStateProvider>
  );
};
