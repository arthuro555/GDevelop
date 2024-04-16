import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetPackInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetPackInstallDialog.tsx', but '--jsx' is not set.
import AssetPackInstallDialog from '../../../../AssetStore/AssetPackInstallDialog';
import {
  fakeAsset1,
  fakePrivateAsset1,
  fakeAssetPacks,
  fakeAssetShortHeader1,
  fakeAssetShortHeader2,
  fakePrivateAssetShortHeader1,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../../GDevelopJsInitializerDecorator';
import PrivateAssetsAuthorizationContext from '../../../../AssetStore/PrivateAssets/PrivateAssetsAuthorizationContext';
import LocalEventsFunctionsExtensionWriter from '../../../../EventsFunctionsExtensionsLoader/Storage/LocalEventsFunctionsExtensionWriter';
import LocalEventsFunctionsExtensionOpener from '../../../../EventsFunctionsExtensionsLoader/Storage/LocalEventsFunctionsExtensionOpener';
import EventsFunctionsExtensionsContext from '../../../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
import fakeResourceManagementProps from '../../../FakeResourceManagement';
import { useShopNavigation } from '../../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/AssetStore/AssetPackInstallDialog',
  component: AssetPackInstallDialog,
  decorators: [paperDecorator],
};

const mockApiDataForPublicAssets = [
  // Mock a successful response for the first asset:
  {
    url: `https://api-dev.gdevelop.io/asset/asset/${
      fakeAssetShortHeader1.id
    }?environment=live`,
    method: 'GET',
    status: 200,
    response: {
      assetUrl: 'https://resources-fake.gdevelop.io/fake-asset-1',
    },
    delay: 250,
  },
  {
    url: `https://resources-fake.gdevelop.io/fake-asset-1`,
    method: 'GET',
    status: 200,
    response: fakeAsset1,
    delay: 250,
  },

  // Also mock a successful response for the second asset:
  {
    url: `https://api-dev.gdevelop.io/asset/asset/${
      fakeAssetShortHeader2.id
    }?environment=live`,
    method: 'GET',
    status: 200,
    response: {
      assetUrl: 'https://resources-fake.gdevelop.io/fake-asset-1',
    },
    delay: 250,
  },
];

const mockFailedApiDataForPublicAsset1 = [
  {
    url: `https://api-dev.gdevelop.io/asset/asset/${
      fakeAssetShortHeader1.id
    }?environment=live`,
    method: 'GET',
    status: 500,
    response: {
      assetUrl: 'https://resources-fake.gdevelop.io/fake-asset-1',
    },
    delay: 250,
  },
];

const fakeEventsFunctionsExtensionsContext = {
// @ts-expect-error - TS7006 - Parameter 'project' implicitly has an 'any' type.
  loadProjectEventsFunctionsExtensions: async project => {},
// @ts-expect-error - TS7006 - Parameter 'project' implicitly has an 'any' type.
  unloadProjectEventsFunctionsExtensions: project => {},
// @ts-expect-error - TS7006 - Parameter 'project' implicitly has an 'any' type. | TS7006 - Parameter 'extensionName' implicitly has an 'any' type.
  unloadProjectEventsFunctionsExtension: (project, extensionName) => {},
// @ts-expect-error - TS7006 - Parameter 'project' implicitly has an 'any' type.
  reloadProjectEventsFunctionsExtensions: async project => {},
// @ts-expect-error - TS7006 - Parameter 'project' implicitly has an 'any' type. | TS7006 - Parameter 'extension' implicitly has an 'any' type.
  reloadProjectEventsFunctionsExtensionMetadata: (project, extension) => {},
  getEventsFunctionsExtensionWriter: () => LocalEventsFunctionsExtensionWriter,
  getEventsFunctionsExtensionOpener: () => LocalEventsFunctionsExtensionOpener,
  ensureLoadFinished: async () => {},
  getIncludeFileHashs: () => ({}),
  eventsFunctionsExtensionsError: null,
} as const;

const Wrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigationState = useShopNavigation();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <EventsFunctionsExtensionsContext.Provider
      value={fakeEventsFunctionsExtensionsContext}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStoreStateProvider shopNavigationState={navigationState}>
        {children}
      </AssetStoreStateProvider>
    </EventsFunctionsExtensionsContext.Provider>
  );
};

export const LayoutPublicAssetInstallSuccess = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakeAssetShortHeader1]}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);
LayoutPublicAssetInstallSuccess.parameters = {
  mockData: mockApiDataForPublicAssets,
};

export const LayoutPublicAssetInstallFailure = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakeAssetShortHeader1]}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);
LayoutPublicAssetInstallFailure.parameters = {
  mockData: mockFailedApiDataForPublicAsset1,
};

export const LayoutPublicAssetAllAlreadyInstalled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakeAssetShortHeader1]}
      addedAssetIds={new Set([fakeAssetShortHeader1.id])}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);

export const LayoutPublicAssetSomeAlreadyInstalled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakeAssetShortHeader1, fakeAssetShortHeader2]}
      addedAssetIds={new Set([fakeAssetShortHeader1.id])}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);
LayoutPublicAssetSomeAlreadyInstalled.parameters = {
  mockData: mockApiDataForPublicAssets,
};

export const LayoutPrivateAssetInstallSuccess = () => {
  const navigationState = useShopNavigation();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PrivateAssetsAuthorizationContext.Provider
      value={{
        authorizationToken: null,
        updateAuthorizationToken: async () => {},
        fetchPrivateAsset: async () => fakePrivateAsset1,
        installPrivateAsset: async () => ({
          // Mock a successful installation
          createdObjects: [],
        }),
        getPrivateAssetPackAudioArchiveUrl: async () =>
          'https://resources.gevelop.io/path/to/audio/archive',
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStoreStateProvider shopNavigationState={navigationState}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AssetPackInstallDialog
          assetPack={fakeAssetPacks.starterPacks[0]}
          assetShortHeaders={[fakePrivateAssetShortHeader1]}
          addedAssetIds={new Set<string>()}
          onClose={action('onClose')}
          onAssetsAdded={action('onAssetsAdded')}
          project={testProject.project}
          objectsContainer={testProject.testLayout}
          onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
          resourceManagementProps={fakeResourceManagementProps}
          canInstallPrivateAsset={() => true}
        />
      </AssetStoreStateProvider>
    </PrivateAssetsAuthorizationContext.Provider>
  );
};

export const LayoutPrivateAssetInstallFailure = () => {
  const navigationState = useShopNavigation();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PrivateAssetsAuthorizationContext.Provider
      value={{
        authorizationToken: null,
        updateAuthorizationToken: async () => {},
        fetchPrivateAsset: async () => fakePrivateAsset1,
        // Mock an error
        installPrivateAsset: async () => {
          throw new Error('Fake error during installation of a private asset.');
        },
        getPrivateAssetPackAudioArchiveUrl: async () =>
          'https://resources.gevelop.io/path/to/audio/archive',
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStoreStateProvider shopNavigationState={navigationState}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AssetPackInstallDialog
          assetPack={fakeAssetPacks.starterPacks[0]}
          assetShortHeaders={[fakePrivateAssetShortHeader1]}
          addedAssetIds={new Set<string>()}
          onClose={action('onClose')}
          onAssetsAdded={action('onAssetsAdded')}
          project={testProject.project}
          objectsContainer={testProject.testLayout}
          onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
          resourceManagementProps={fakeResourceManagementProps}
          canInstallPrivateAsset={() => true}
        />
      </AssetStoreStateProvider>
    </PrivateAssetsAuthorizationContext.Provider>
  );
};

export const LayoutPrivateAssetButCantInstall = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakePrivateAssetShortHeader1]}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => false}
    />
  </Wrapper>
);

export const LayoutPrivateAssetButInstallingTooMany = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={Array.from(
        { length: 120 },
        (_, index) => fakePrivateAssetShortHeader1
      )}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={testProject.testLayout}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);

export const NoObjectsContainerPublicAssetInstallSuccess = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakeAssetShortHeader1, fakeAssetShortHeader2]}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={null}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => true}
    />
  </Wrapper>
);
NoObjectsContainerPublicAssetInstallSuccess.parameters = {
  mockData: mockApiDataForPublicAssets,
};

export const NoObjectsContainerPrivateAssetButCantInstall = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetPackInstallDialog
      assetPack={fakeAssetPacks.starterPacks[0]}
      assetShortHeaders={[fakePrivateAssetShortHeader1]}
      addedAssetIds={new Set<string>()}
      onClose={action('onClose')}
      onAssetsAdded={action('onAssetsAdded')}
      project={testProject.project}
      objectsContainer={null}
      onObjectsAddedFromAssets={action('onObjectsAddedFromAssets')}
      resourceManagementProps={fakeResourceManagementProps}
      canInstallPrivateAsset={() => false}
    />
  </Wrapper>
);
