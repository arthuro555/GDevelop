import * as React from 'react';
// @ts-expect-error - TS6142 - Module './MainFrame' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/index.tsx', but '--jsx' is not set.
import MainFrame from './MainFrame';
import Window from './Utils/Window';
// @ts-expect-error - TS6142 - Module './ExportAndShare/ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
import ShareDialog from './ExportAndShare/ShareDialog';
import Authentication from './Utils/GDevelopServices/Authentication';
import './UI/icomoon-font.css'; // Styles for Icomoon font.

// Import for browser only IDE
// @ts-expect-error - TS6142 - Module './ResourcesList/BrowserResourceSources' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/BrowserResourceSources.tsx', but '--jsx' is not set.
import browserResourceSources from './ResourcesList/BrowserResourceSources';
import browserResourceExternalEditors from './ResourcesList/BrowserResourceExternalEditors';
// @ts-expect-error - TS6142 - Module './ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher/index.tsx', but '--jsx' is not set.
import BrowserS3PreviewLauncher from './ExportAndShare/BrowserExporters/BrowserS3PreviewLauncher';
import {
  browserAutomatedExporters,
  browserManualExporters,
  browserOnlineWebExporter,
} from './ExportAndShare/BrowserExporters';
import makeExtensionsLoader from './JsExtensionsLoader/BrowserJsExtensionsLoader';
import ObjectsEditorService from './ObjectEditor/ObjectsEditorService';
import ObjectsRenderingService from './ObjectsRendering/ObjectsRenderingService';
import { makeBrowserS3EventsFunctionCodeWriter } from './EventsFunctionsExtensionsLoader/CodeWriters/BrowserS3EventsFunctionCodeWriter';
// @ts-expect-error - TS6142 - Module './MainFrame/Providers' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Providers.tsx', but '--jsx' is not set.
import Providers from './MainFrame/Providers';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import ProjectStorageProviders from './ProjectsStorage/ProjectStorageProviders';
import UrlStorageProvider from './ProjectsStorage/UrlStorageProvider';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/GoogleDriveStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/GoogleDriveStorageProvider/index.tsx', but '--jsx' is not set.
import GoogleDriveStorageProvider from './ProjectsStorage/GoogleDriveStorageProvider';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/DownloadFileStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/DownloadFileStorageProvider/index.tsx', but '--jsx' is not set.
import DownloadFileStorageProvider from './ProjectsStorage/DownloadFileStorageProvider';
// @ts-expect-error - TS6142 - Module './ProjectsStorage/CloudStorageProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/index.tsx', but '--jsx' is not set.
import CloudStorageProvider from './ProjectsStorage/CloudStorageProvider';
import BrowserResourceMover from './ProjectsStorage/ResourceMover/BrowserResourceMover';
import BrowserResourceFetcher from './ProjectsStorage/ResourceFetcher/BrowserResourceFetcher';
import BrowserEventsFunctionsExtensionOpener from './EventsFunctionsExtensionsLoader/Storage/BrowserEventsFunctionsExtensionOpener';
import BrowserEventsFunctionsExtensionWriter from './EventsFunctionsExtensionsLoader/Storage/BrowserEventsFunctionsExtensionWriter';
import BrowserLoginProvider from './LoginProvider/BrowserLoginProvider';

export const create = (authentication: Authentication) => {
  Window.setUpContextMenu();
  const loginProvider = new BrowserLoginProvider(authentication.auth);
  authentication.setLoginProvider(loginProvider);

  let app = null;
  const appArguments = Window.getArguments();

  app = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Providers
      authentication={authentication}
      disableCheckForUpdates={!!appArguments['disable-update-check']}
      makeEventsFunctionCodeWriter={makeBrowserS3EventsFunctionCodeWriter}
      eventsFunctionsExtensionWriter={BrowserEventsFunctionsExtensionWriter}
      eventsFunctionsExtensionOpener={BrowserEventsFunctionsExtensionOpener}
    >
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ProjectStorageProviders
          appArguments={appArguments}
          storageProviders={[
            UrlStorageProvider,
            CloudStorageProvider,
            GoogleDriveStorageProvider,
            DownloadFileStorageProvider,
          ]}
          defaultStorageProvider={UrlStorageProvider}
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
// @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type. | TS7006 - Parameter 'ref' implicitly has an 'any' type.
              renderPreviewLauncher={(props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <BrowserS3PreviewLauncher {...props} ref={ref} />
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
                  automatedExporters={browserAutomatedExporters}
                  manualExporters={browserManualExporters}
                  onlineWebExporter={browserOnlineWebExporter}
                  allExportersRequireOnline
                  fileMetadata={props.fileMetadata}
                  storageProvider={props.storageProvider}
                  initialTab={props.initialTab}
                />
              )}
              storageProviders={storageProviders}
              resourceMover={BrowserResourceMover}
              resourceFetcher={BrowserResourceFetcher}
              getStorageProviderOperations={getStorageProviderOperations}
              getStorageProviderResourceOperations={
                getStorageProviderResourceOperations
              }
              getStorageProvider={getStorageProvider}
              resourceSources={browserResourceSources}
              resourceExternalEditors={browserResourceExternalEditors}
              extensionsLoader={makeExtensionsLoader({
                objectsEditorService: ObjectsEditorService,
                objectsRenderingService: ObjectsRenderingService,
                filterExamples: !Window.isDev(),
              })}
              initialFileMetadataToOpen={initialFileMetadataToOpen}
            />
          )}
        </ProjectStorageProviders>
      )}
    </Providers>
  );

  return app;
};
