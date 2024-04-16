import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../MainFrame/EditorContainers/HomePage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/index.tsx', but '--jsx' is not set.
import { HomePage } from '../../../MainFrame/EditorContainers/HomePage';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreStateProvider } from '../../../AssetStore/ExampleStore/ExampleStoreContext';
// @ts-expect-error - TS6142 - Module '../../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialStateProvider } from '../../../Tutorial/TutorialContext';
import PreferencesContext, {
  initialPreferences,
  InAppTutorialUserProgress,
// @ts-expect-error - TS6142 - Module '../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../../MainFrame/Preferences/PreferencesContext';
import { FileMetadataAndStorageProviderName } from '../../../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import AuthenticatedUserContext, {
  initialAuthenticatedUser,
  AuthenticatedUser,
} from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from '../../../ProjectsStorage/CloudStorageProvider';
import {
  fakeSilverAuthenticatedUser,
  fakeAuthenticatedUserLoggingIn,
  indieUserProfile,
} from '../../../fixtures/GDevelopServicesTestData';
import { GDevelopAssetApi } from '../../../Utils/GDevelopServices/ApiConfigs';
import InAppTutorialContext from '../../../InAppTutorial/InAppTutorialContext';
import fakeResourceManagementProps from '../../FakeResourceManagement';

const apiDataServerSideError = {
  mockData: [
    {
      url: `${GDevelopAssetApi.baseUrl}/tutorial`,
      method: 'GET',
      status: 500,
      response: { data: 'status' },
    },
  ],
} as const;

const getRecentProjectFiles = (count: number) =>
  new Array(count).fill(0).map((_, index) => ({
    fileMetadata: {
      fileIdentifier: `Users/me/Desktop/Gdevelop/project ${index}`,
      lastModifiedDate: Math.floor(Math.random() * 1656942410477) + 1,
    },
    storageProviderName: 'test',
  }));

const getPartiallySavedRecentProjectFiles = (count: number) =>
  new Array(count).fill(0).map((_, index) => ({
    fileMetadata: {
      fileIdentifier: `Users/Gdevelop/project ${index}`,
      lastModifiedDate:
        index % 3 === 0
          ? Math.floor(Math.random() * 1656942410477) + 1
          : undefined,
    },
    storageProviderName: 'test',
  }));

const WrappedHomePage = ({
  project,
  recentProjectFiles,
  tutorialProgress = undefined,
  inAppTutorialsFetchingError = null,
  user,
}: {
  project: gdProject | null | undefined,
  recentProjectFiles: FileMetadataAndStorageProviderName[],
  tutorialProgress?: InAppTutorialUserProgress,
  inAppTutorialsFetchingError?: string | null,
  user: AuthenticatedUser
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={1080}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <PreferencesContext.Provider
      value={{
        ...initialPreferences,
        getRecentProjectFiles: () => recentProjectFiles,
        getTutorialProgress: () => tutorialProgress,
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <InAppTutorialContext.Provider
        value={{
          inAppTutorialShortHeaders: [
            {
              id: 'flingGame',
              contentUrl: 'fakeUrl',
              availableLocales: ['en', 'fr-FR'],
            },
          ],
          getInAppTutorialShortHeader: (tutorialId: string) => ({
            id: 'flingGame',
            contentUrl: 'fakeUrl',
            availableLocales: ['en', 'fr-FR'],
          }),
          currentlyRunningInAppTutorial: null,
          startTutorial: async () => {
            action('start tutorial');
          },
          startProjectData: {},
          endTutorial: () => {
            action('end tutorial');
          },
          startStepIndex: 0,
          inAppTutorialsFetchingError,
          fetchInAppTutorials: async () => {
            action('fetch tutorials')();
          },
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AuthenticatedUserContext.Provider value={user}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExampleStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TutorialStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <HomePage
                project={project}
                fileMetadata={null}
                isActive={true}
                projectItemName={null}
                setToolbar={() => {}}
                canOpen={true}
                storageProviders={[CloudStorageProvider]}
                onChooseProject={() => action('onChooseProject')()}
                onOpenRecentFile={() => action('onOpenRecentFile')()}
                onOpenExampleStore={() => action('onOpenExampleStore')()}
                onSelectExampleShortHeader={() =>
                  action('onSelectExampleShortHeader')()
                }
                onPreviewPrivateGameTemplateListingData={() =>
                  action('onPreviewPrivateGameTemplateListingData')()
                }
                onOpenPrivateGameTemplateListingData={() =>
                  action('onOpenPrivateGameTemplateListingData')()
                }
                onOpenProjectManager={() => action('onOpenProjectManager')()}
                onOpenLanguageDialog={() => action('open language dialog')()}
                onOpenNewProjectSetupDialog={() =>
                  action('onOpenNewProjectSetupDialog')()
                }
                canSave={true}
                onSave={() => action('onSave')()}
                selectInAppTutorial={() => action('select in app tutorial')()}
                onOpenProfile={() => action('open profile')()}
                onOpenPreferences={() => action('open preferences')()}
                onOpenAbout={() => action('open about')()}
                resourceManagementProps={fakeResourceManagementProps}
                canInstallPrivateAsset={() => true}
              />
            </TutorialStateProvider>
          </ExampleStoreStateProvider>
        </AuthenticatedUserContext.Provider>
      </InAppTutorialContext.Provider>
    </PreferencesContext.Provider>
  </FixedHeightFlexContainer>
);

export default {
  title: 'HomePage',
  component: WrappedHomePage,
  decorators: [GDevelopJsInitializerDecorator],
};

export const BuildSectionLoading = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={null}
    recentProjectFiles={getRecentProjectFiles(5)}
    user={fakeAuthenticatedUserLoggingIn}
  />
);
export const NoProjectOpened = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={null}
    recentProjectFiles={getRecentProjectFiles(5)}
    user={fakeSilverAuthenticatedUser}
  />
);
export const ProjectOpened = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(5)}
    user={fakeSilverAuthenticatedUser}
  />
);
export const NoRecentFiles = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={[]}
    user={fakeSilverAuthenticatedUser}
  />
);
export const LotOfRecentFiles = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
  />
);
export const SomeRecentFilesNotSavedYet = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getPartiallySavedRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
  />
);

export const Connected = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
  />
);

export const ConnectedWithLongName = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={{
      ...fakeSilverAuthenticatedUser,
      profile: {
        ...indieUserProfile,
        username: 'This is a very long username that should be truncated',
      },
    }}
  />
);

export const NotConnected = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={initialAuthenticatedUser}
  />
);

export const ConnectedWithInAppTutorialProgress = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
    tutorialProgress={{
      step: 40,
      progress: [100, 25, 0],
      fileMetadataAndStorageProviderName: {
        storageProviderName: 'fakeStorageProviderName',
        fileMetadata: { fileIdentifier: 'fileIdentifier' },
      },
      projectData: {},
    }}
  />
);
export const ConnectedWithInAppTutorialLoadingError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
    tutorialProgress={undefined}
    inAppTutorialsFetchingError="fetching-error"
  />
);

export const ConnectedWithInAppTutorialCompleted = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
    tutorialProgress={{
      step: 40,
      progress: [100, 100, 100],
      fileMetadataAndStorageProviderName: {
        storageProviderName: 'fakeStorageProviderName',
        fileMetadata: { fileIdentifier: 'fileIdentifier' },
      },
      projectData: {},
    }}
  />
);

export const NetworkError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <WrappedHomePage
    project={testProject.project}
    recentProjectFiles={getRecentProjectFiles(20)}
    user={fakeSilverAuthenticatedUser}
  />
);
NetworkError.parameters = apiDataServerSideError;
