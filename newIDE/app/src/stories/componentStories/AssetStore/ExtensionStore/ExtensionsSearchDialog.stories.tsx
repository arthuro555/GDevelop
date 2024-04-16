import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExtensionStore/ExtensionsSearchDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionsSearchDialog.tsx', but '--jsx' is not set.
import ExtensionsSearchDialog from '../../../../AssetStore/ExtensionStore/ExtensionsSearchDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../../../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider.tsx', but '--jsx' is not set.
import EventsFunctionsExtensionsProvider from '../../../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExtensionStore/ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreStateProvider } from '../../../../AssetStore/ExtensionStore/ExtensionStoreContext';
// @ts-expect-error - TS6142 - Module '../../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../../GDevelopJsInitializerDecorator';
import { GDevelopAssetApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
import { fakeExtensionsRegistry } from '../../../../fixtures/GDevelopServicesTestData/FakeExtensionsRegistry';

export default {
  title: 'AssetStore/ExtensionStore/ExtensionSearchDialog',
  component: ExtensionsSearchDialog,
  decorators: [paperDecorator],
};

const apiDataServerSideError = {
  mockData: [
    {
      url: `${GDevelopAssetApi.baseUrl}/extensions-registry`,
      method: 'GET',
      status: 500,
      response: { data: 'status' },
    },
  ],
} as const;

const apiDataFakeExtensions = {
  mockData: [
    {
      url: `${GDevelopAssetApi.baseUrl}/extensions-registry`,
      method: 'GET',
      status: 200,
      response: fakeExtensionsRegistry,
    },
  ],
} as const;

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EventsFunctionsExtensionsProvider
        i18n={i18n}
        makeEventsFunctionCodeWriter={() => null}
        eventsFunctionsExtensionWriter={null}
        eventsFunctionsExtensionOpener={null}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionsSearchDialog
            project={testProject.project}
            onClose={action('onClose')}
            onInstallExtension={action('onInstallExtension')}
            onCreateNew={action('onCreateNew')}
          />
        </ExtensionStoreStateProvider>
      </EventsFunctionsExtensionsProvider>
    )}
  </I18n>
);
Default.parameters = apiDataFakeExtensions;

export const WithServerSideError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EventsFunctionsExtensionsProvider
        i18n={i18n}
        makeEventsFunctionCodeWriter={() => null}
        eventsFunctionsExtensionWriter={null}
        eventsFunctionsExtensionOpener={null}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionsSearchDialog
            project={testProject.project}
            onClose={action('onClose')}
            onInstallExtension={action('onInstallExtension')}
            onCreateNew={action('onCreateNew')}
          />
        </ExtensionStoreStateProvider>
      </EventsFunctionsExtensionsProvider>
    )}
  </I18n>
);
WithServerSideError.parameters = apiDataServerSideError;
