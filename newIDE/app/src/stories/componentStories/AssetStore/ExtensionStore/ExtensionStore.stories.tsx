import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExtensionStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/index.tsx', but '--jsx' is not set.
import { ExtensionStore } from '../../../../AssetStore/ExtensionStore';
// @ts-expect-error - TS6142 - Module '../../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExtensionStore/ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreStateProvider } from '../../../../AssetStore/ExtensionStore/ExtensionStoreContext';
// @ts-expect-error - TS6142 - Module '../../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../../GDevelopJsInitializerDecorator';
import { GDevelopAssetApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
import { fakeExtensionsRegistry } from '../../../../fixtures/GDevelopServicesTestData/FakeExtensionsRegistry';
import PreferencesContext, {
  initialPreferences,
  Preferences,
// @ts-expect-error - TS6142 - Module '../../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../../../MainFrame/Preferences/PreferencesContext';

export default {
  title: 'AssetStore/ExtensionStore',
  component: ExtensionStore,
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
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionStore
        project={testProject.project}
        isInstalling={false}
        onInstall={action('onInstall')}
        showOnlyWithBehaviors={false}
      />
    </ExtensionStoreStateProvider>
  </FixedHeightFlexContainer>
);
Default.parameters = apiDataFakeExtensions;

export const WithCommunityExtensions = () => {
  const [showCommunityExtensions, setShowCommunityExtensions] = React.useState(
    true
  );
  const preferences: Preferences = {
    ...initialPreferences,
    values: { ...initialPreferences.values, showCommunityExtensions },
    setShowCommunityExtensions,
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PreferencesContext.Provider value={preferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionStore
            project={testProject.project}
            isInstalling={false}
            onInstall={action('onInstall')}
            showOnlyWithBehaviors={false}
          />
        </ExtensionStoreStateProvider>
      </FixedHeightFlexContainer>
    </PreferencesContext.Provider>
  );
};
WithCommunityExtensions.parameters = apiDataFakeExtensions;

export const WithServerSideErrors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionStore
        project={testProject.project}
        isInstalling={false}
        onInstall={action('onInstall')}
        showOnlyWithBehaviors={false}
      />
    </ExtensionStoreStateProvider>
  </FixedHeightFlexContainer>
);
WithServerSideErrors.parameters = apiDataServerSideError;

export const ShowingAnAlreadyInstalledExtension = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionStoreStateProvider defaultSearchText="Fake installed">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionStore
        project={testProject.project}
        isInstalling={false}
        onInstall={action('onInstall')}
        showOnlyWithBehaviors={false}
      />
    </ExtensionStoreStateProvider>
  </FixedHeightFlexContainer>
);
ShowingAnAlreadyInstalledExtension.parameters = apiDataFakeExtensions;

export const ExtensionBeingInstalled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionStore
        project={testProject.project}
        isInstalling={true}
        onInstall={action('onInstall')}
        showOnlyWithBehaviors={false}
      />
    </ExtensionStoreStateProvider>
  </FixedHeightFlexContainer>
);
ExtensionBeingInstalled.parameters = apiDataFakeExtensions;

export const OnlyWithBehaviors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ExtensionStore
        project={testProject.project}
        isInstalling={false}
        onInstall={action('onInstall')}
        showOnlyWithBehaviors={true}
      />
    </ExtensionStoreStateProvider>
  </FixedHeightFlexContainer>
);
OnlyWithBehaviors.parameters = apiDataFakeExtensions;
