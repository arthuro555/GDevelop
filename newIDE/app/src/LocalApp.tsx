import React from 'react';
// @ts-expect-error - TS6142 - Module './MainFrame' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/index.tsx', but '--jsx' is not set.
import MainFrame from './MainFrame';
import Window from './Utils/Window';
// @ts-expect-error - TS6142 - Module './ExportAndShare/ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
import ShareDialog from './ExportAndShare/ShareDialog';
import Authentication from './Utils/GDevelopServices/Authentication';
import './UI/icomoon-font.css'; // Styles for Icomoon font.

// Import for Electron powered IDE.
// @ts-expect-error - TS6142 - Module './ResourcesList/LocalResourceSources' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/LocalResourceSources.tsx', but '--jsx' is not set.
import localResourceSources from './ResourcesList/LocalResourceSources';
import localResourceExternalEditors from './ResourcesList/LocalResourceExternalEditors';
// @ts-expect-error - TS6142 - Module './ExportAndShare/LocalExporters/LocalPreviewLauncher' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalPreviewLauncher/index.tsx', but '--jsx' is not set.
import LocalPreviewLauncher from './ExportAndShare/LocalExporters/LocalPreviewLauncher';
import {
  localAutomatedExporters,
  localManualExporters,
  localOnlineWebExporter,
} from './ExportAndShare/LocalExporters';
import ElectronMainMenu from './MainFrame/ElectronMainMenu';
import makeExtensionsLoader from './JsExtensionsLoader/LocalJsExtensionsLoader';
import { makeLocalEventsFunctionCodeWriter } from './EventsFunctionsExtensionsLoader/CodeWriters/LocalEventsFunctionCodeWriter';
import ObjectsEditorService from './ObjectEditor/ObjectsEditorService';
import ObjectsRenderingService from './ObjectsRendering/ObjectsRenderingService';
// @ts-expect-error - TS6142 - Module './MainFrame/Providers' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Providers.tsx', but '--jsx' is not set.
import Providers from './MainFrame/Providers';
import LocalEventsFunctionsExtensionWriter from './EventsFunctionsExtensionsLoader/Storage/LocalEventsFunctionsExtensionWriter';
import LocalEventsFunctionsExtensionOpener from './EventsFunctionsExtensionsLoader/Storage/LocalEventsFunctionsExtensionOpener';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import ProjectStorageProviders from './ProjectsStorage/ProjectStorageProviders';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/LocalFileStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/LocalFileStorageProvider/index.tsx', but '--jsx' is not set.
import LocalFileStorageProvider from './ProjectsStorage/LocalFileStorageProvider';
import { LocalGDJSDevelopmentWatcher } from './GameEngineFinder/LocalGDJSDevelopmentWatcher';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from './ProjectsStorage/CloudStorageProvider';
import UrlStorageProvider from './ProjectsStorage/UrlStorageProvider';
import LocalResourceMover from './ProjectsStorage/ResourceMover/LocalResourceMover';
import LocalResourceFetcher from './ProjectsStorage/ResourceFetcher/LocalResourceFetcher';
import LocalLoginProvider from './LoginProvider/LocalLoginProvider';

const gd: libGDevelop = global.gd;

export const create = (authentication: Authentication) => {
  Window.setUpContextMenu();
  const loginProvider = new LocalLoginProvider(authentication.auth);
  authentication.setLoginProvider(loginProvider);

  const appArguments = Window.getArguments();
  const isDev = Window.isDev();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Providers
      authentication={authentication}
      disableCheckForUpdates={!!appArguments['disable-update-check']}
      makeEventsFunctionCodeWriter={makeLocalEventsFunctionCodeWriter}
      eventsFunctionsExtensionWriter={LocalEventsFunctionsExtensionWriter}
      eventsFunctionsExtensionOpener={LocalEventsFunctionsExtensionOpener}
    >
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ProjectStorageProviders
          appArguments={appArguments}
          storageProviders={[
            LocalFileStorageProvider,
            UrlStorageProvider,
            CloudStorageProvider,
          ]}
          defaultStorageProvider={LocalFileStorageProvider}
        >
          {({
// @ts-expect-error - TS7031 - Binding element 'getStorageProviderOperations' implicitly has an 'any' type.
            getStorageProviderOperations,
// @ts-expect-error - TS7031 - Binding element 'getStorageProviderResourceOperations' implicitly has an 'any' type.
            getStorageProviderResourceOperations,
// @ts-expect-error - TS7031 - Binding element 'storageProviders' implicitly has an 'any' type.
            storageProviders,
// @ts-expect-error - TS7031 - Binding element 'initialFileMetadataToOpen' implicitly has an 'any' type.
            initialFileMetadataToOpen,
// @ts-expect-error - TS7031 - Binding element 'getStorageProvider' implicitly has an 'any' type.
            getStorageProvider,
          }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <MainFrame
              i18n={i18n}
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS7006 - Parameter 'callbacks' implicitly has an 'any' type. | TS7006 - Parameter 'extraCallbacks' implicitly has an 'any' type.
              renderMainMenu={(props, callbacks, extraCallbacks) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ElectronMainMenu
                  props={props}
                  callbacks={callbacks}
                  extraCallbacks={extraCallbacks}
                />
              )}
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS7006 - Parameter 'ref' implicitly has an 'any' type.
              renderPreviewLauncher={(props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <LocalPreviewLauncher {...props} ref={ref} />
              )}
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type.
              renderShareDialog={props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ShareDialog
                  project={props.project}
                  onSaveProject={props.onSaveProject}
                  isSavingProject={props.isSavingProject}
                  onChangeSubscription={props.onChangeSubscription}
                  onClose={props.onClose}
                  automatedExporters={localAutomatedExporters}
                  manualExporters={localManualExporters}
                  onlineWebExporter={localOnlineWebExporter}
                  fileMetadata={props.fileMetadata}
                  storageProvider={props.storageProvider}
                  initialTab={props.initialTab}
                />
              )}
              renderGDJSDevelopmentWatcher={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                isDev ? () => <LocalGDJSDevelopmentWatcher /> : null
              }
              storageProviders={storageProviders}
              resourceMover={LocalResourceMover}
              resourceFetcher={LocalResourceFetcher}
              getStorageProviderOperations={getStorageProviderOperations}
              getStorageProviderResourceOperations={
                getStorageProviderResourceOperations
              }
              getStorageProvider={getStorageProvider}
              resourceSources={localResourceSources}
              resourceExternalEditors={localResourceExternalEditors}
              extensionsLoader={makeExtensionsLoader({
                gd,
                objectsEditorService: ObjectsEditorService,
                objectsRenderingService: ObjectsRenderingService,
                filterExamples: !isDev,
              })}
              initialFileMetadataToOpen={initialFileMetadataToOpen}
            />
          )}
        </ProjectStorageProviders>
      )}
    </Providers>
  );
};
