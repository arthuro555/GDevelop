import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExtensionStore/ExtensionInstallDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionInstallDialog.tsx', but '--jsx' is not set.
import ExtensionInstallDialog from '../../../../AssetStore/ExtensionStore/ExtensionInstallDialog';
import {
  fireBulletExtensionShortHeader,
  fireBulletExtensionHeader,
  communityTierExtensionShortHeader,
  communityTierExtensionHeader,
  uncompatibleFireBulletExtensionShortHeader,
  alreadyInstalledExtensionShortHeader,
  alreadyInstalledCommunityExtensionShortHeader,
  newerVersionExtensionShortHeader,
} from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'AssetStore/ExtensionStore/ExtensionInstallDialog',
  component: ExtensionInstallDialog,
  decorators: [paperDecorator],
};

const apiDataServerSideError = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/extensions/FireBullet-header.json`,
      method: 'GET',
      status: 500,
      response: { data: 'status' },
    },
  ],
} as const;

const apiDataFakeFireBulletExtension = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/extensions/FireBullet-header.json`,
      method: 'GET',
      status: 200,
      response: fireBulletExtensionHeader,
    },
  ],
} as const;

const apiDataFakeCommunityExtension = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/extensions/FakeCommunityExtension-header.json`,
      method: 'GET',
      status: 200,
      response: communityTierExtensionHeader,
    },
  ],
} as const;

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={fireBulletExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
Default.parameters = apiDataFakeFireBulletExtension;

export const BeingInstalled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={fireBulletExtensionShortHeader}
    isInstalling={true}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
Default.parameters = apiDataFakeFireBulletExtension;

export const IncompatibleGdevelopVersion = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={uncompatibleFireBulletExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
IncompatibleGdevelopVersion.parameters = apiDataFakeFireBulletExtension;

export const AlreadyInstalled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={alreadyInstalledExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
AlreadyInstalled.parameters = apiDataFakeFireBulletExtension;

export const Outdated = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={newerVersionExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
Outdated.parameters = apiDataFakeFireBulletExtension;

export const AlreadyInstalledCommunityExtension = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={alreadyInstalledCommunityExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
AlreadyInstalled.parameters = apiDataFakeFireBulletExtension;

export const WithServerSideError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={fireBulletExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
WithServerSideError.parameters = apiDataServerSideError;

export const CommunityExtension = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ExtensionInstallDialog
    project={testProject.project}
    extensionShortHeader={communityTierExtensionShortHeader}
    isInstalling={false}
    onClose={action('close')}
    onInstall={() => Promise.resolve()}
    onEdit={action('edit')}
  />
);
CommunityExtension.parameters = apiDataFakeCommunityExtension;
