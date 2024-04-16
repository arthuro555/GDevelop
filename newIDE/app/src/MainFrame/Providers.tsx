import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../Profile/AuthenticatedUserProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/AuthenticatedUserProvider.tsx', but '--jsx' is not set.
import AuthenticatedUserProvider from '../Profile/AuthenticatedUserProvider';
// @ts-expect-error - TS6142 - Module '../Profile/PublicProfileProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileProvider.tsx', but '--jsx' is not set.
import PublicProfileProvider from '../Profile/PublicProfileProvider';
import Authentication from '../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module './Preferences/PreferencesProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesProvider.tsx', but '--jsx' is not set.
import PreferencesProvider from './Preferences/PreferencesProvider';
// @ts-expect-error - TS6142 - Module './Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from './Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../Utils/i18n/GDI18nProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/i18n/GDI18nProvider.tsx', but '--jsx' is not set.
import GDI18nProvider from '../Utils/i18n/GDI18nProvider';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS6142 - Module '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider.tsx', but '--jsx' is not set.
import EventsFunctionsExtensionsProvider from '../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsProvider';
import {
  EventsFunctionCodeWriter,
  EventsFunctionCodeWriterCallbacks,
} from '../EventsFunctionsExtensionsLoader';
import {
  EventsFunctionsExtensionWriter,
  EventsFunctionsExtensionOpener,
} from '../EventsFunctionsExtensionsLoader/Storage';
// @ts-expect-error - TS6142 - Module './UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChangesContextProvider } from './UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../CommandPalette/CommandsContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommandPalette/CommandsContext.tsx', but '--jsx' is not set.
import { CommandsContextProvider } from '../CommandPalette/CommandsContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/ResourceStore/ResourceStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/ResourceStoreContext.tsx', but '--jsx' is not set.
import { ResourceStoreStateProvider } from '../AssetStore/ResourceStore/ResourceStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreStateProvider } from '../AssetStore/ExampleStore/ExampleStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreStateProvider } from '../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/ExtensionStore/ExtensionStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExtensionStore/ExtensionStoreContext.tsx', but '--jsx' is not set.
import { ExtensionStoreStateProvider } from '../AssetStore/ExtensionStore/ExtensionStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/BehaviorStore/BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { BehaviorStoreStateProvider } from '../AssetStore/BehaviorStore/BehaviorStoreContext';
// @ts-expect-error - TS6142 - Module '../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialStateProvider } from '../Tutorial/TutorialContext';
// @ts-expect-error - TS6142 - Module '../UI/Alert/AlertProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Alert/AlertProvider.tsx', but '--jsx' is not set.
import AlertProvider from '../UI/Alert/AlertProvider';
// @ts-expect-error - TS6142 - Module '../AnnouncementsFeed/AnnouncementsFeedContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AnnouncementsFeed/AnnouncementsFeedContext.tsx', but '--jsx' is not set.
import { AnnouncementsFeedStateProvider } from '../AnnouncementsFeed/AnnouncementsFeedContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/PrivateAssets/PrivateAssetsAuthorizationProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetsAuthorizationProvider.tsx', but '--jsx' is not set.
import PrivateAssetsAuthorizationProvider from '../AssetStore/PrivateAssets/PrivateAssetsAuthorizationProvider';
// @ts-expect-error - TS6142 - Module '../InAppTutorial/InAppTutorialProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/InAppTutorialProvider.tsx', but '--jsx' is not set.
import InAppTutorialProvider from '../InAppTutorial/InAppTutorialProvider';
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionProvider } from '../Profile/Subscription/SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module './RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import { RouterContextProvider } from './RouterContext';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';
// @ts-expect-error - TS6142 - Module '../UI/Theme/FullThemeProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Theme/FullThemeProvider.tsx', but '--jsx' is not set.
import { FullThemeProvider } from '../UI/Theme/FullThemeProvider';
import { useShopNavigation } from '../AssetStore/AssetStoreNavigator';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreStateProvider } from '../AssetStore/CreditsPackages/CreditsPackageStoreContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/ProductLicense/ProductLicenseStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseStoreContext.tsx', but '--jsx' is not set.
import { ProductLicenseStoreStateProvider } from '../AssetStore/ProductLicense/ProductLicenseStoreContext';
// @ts-expect-error - TS6142 - Module '../MarketingPlans/MarketingPlansStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/MarketingPlansStoreContext.tsx', but '--jsx' is not set.
import { MarketingPlansStoreStateProvider } from '../MarketingPlans/MarketingPlansStoreContext';
// @ts-expect-error - TS6142 - Module '../CommunityLeaderboards/CommunityLeaderboardsContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommunityLeaderboards/CommunityLeaderboardsContext.tsx', but '--jsx' is not set.
import { CommunityLeaderboardsStateProvider } from '../CommunityLeaderboards/CommunityLeaderboardsContext';

type Props = {
  authentication: Authentication,
  disableCheckForUpdates: boolean,
  makeEventsFunctionCodeWriter: (arg1: EventsFunctionCodeWriterCallbacks) => EventsFunctionCodeWriter | null | undefined,
  eventsFunctionsExtensionWriter: EventsFunctionsExtensionWriter | null | undefined,
  eventsFunctionsExtensionOpener: EventsFunctionsExtensionOpener | null | undefined,
  children: (
    arg1: {
      i18n: I18nType
    },
  ) => React.ReactElement
};

/**
 * Wrap the children with Drag and Drop, Material UI theme and i18n React providers,
 * so that these modules can be used in the children.
 */
const Providers = ({
  disableCheckForUpdates,
  authentication,
  children,
  makeEventsFunctionCodeWriter,
  eventsFunctionsExtensionWriter,
  eventsFunctionsExtensionOpener,
}: Props) => {
  const shopNavigationState = useShopNavigation();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UnsavedChangesContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RouterContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PreferencesProvider disableCheckForUpdates={disableCheckForUpdates}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'values' implicitly has an 'any' type. */}
              {({ values }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GDI18nProvider language={values.language.replace('_', '-')}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FullThemeProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      componentTitle={<Trans>GDevelop app</Trans>}
                      scope="app"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <InAppTutorialProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <AlertProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <AuthenticatedUserProvider
                            authentication={authentication}
                          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <PublicProfileProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <I18n update>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
                                {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <EventsFunctionsExtensionsProvider
                                    i18n={i18n}
                                    makeEventsFunctionCodeWriter={
                                      makeEventsFunctionCodeWriter
                                    }
                                    eventsFunctionsExtensionWriter={
                                      eventsFunctionsExtensionWriter
                                    }
                                    eventsFunctionsExtensionOpener={
                                      eventsFunctionsExtensionOpener
                                    }
                                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <CommandsContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                        <AssetStoreStateProvider
                                          shopNavigationState={
                                            shopNavigationState
                                          }
                                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                          <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                            <ExampleStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                              <PrivateGameTemplateStoreStateProvider
                                                shopNavigationState={
                                                  shopNavigationState
                                                }
                                              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                <CreditsPackageStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                  <ProductLicenseStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                    <MarketingPlansStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                      <ExtensionStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                        <BehaviorStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                          <TutorialStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                            <AnnouncementsFeedStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                              <CommunityLeaderboardsStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                                                <PrivateAssetsAuthorizationProvider>
                                                                  {children({
                                                                    i18n,
                                                                  })}
                                                                </PrivateAssetsAuthorizationProvider>
                                                              </CommunityLeaderboardsStateProvider>
                                                            </AnnouncementsFeedStateProvider>
                                                          </TutorialStateProvider>
                                                        </BehaviorStoreStateProvider>
                                                      </ExtensionStoreStateProvider>
                                                    </MarketingPlansStoreStateProvider>
                                                  </ProductLicenseStoreStateProvider>
                                                </CreditsPackageStoreStateProvider>
                                              </PrivateGameTemplateStoreStateProvider>
                                            </ExampleStoreStateProvider>
                                          </ResourceStoreStateProvider>
                                        </AssetStoreStateProvider>
                                      </CommandsContextProvider>
                                    </SubscriptionSuggestionProvider>
                                  </EventsFunctionsExtensionsProvider>
                                )}
                              </I18n>
                            </PublicProfileProvider>
                          </AuthenticatedUserProvider>
                        </AlertProvider>
                      </InAppTutorialProvider>
                    </ErrorBoundary>
                  </FullThemeProvider>
                </GDI18nProvider>
              )}
            </PreferencesContext.Consumer>
          </PreferencesProvider>
        </RouterContextProvider>
      </UnsavedChangesContextProvider>
    </DragAndDropContextProvider>
  );
};

export default Providers;
