import * as React from 'react';

import { UnsavedChanges } from '../UnsavedChangesContext';
import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';
import type { StorageProvider } from '../../ProjectsStorage';
import { PreviewDebuggerServer } from '../../ExportAndShare/PreviewLauncher.flow';

import { HotReloadPreviewButtonProps } from '../../HotReload/HotReloadPreviewButton';
import {
  FileMetadataAndStorageProviderName,
  FileMetadata,
} from '../../ProjectsStorage';
import { ExampleShortHeader } from '../../Utils/GDevelopServices/Example';

import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';

export type EditorContainerExtraProps = {
  // Events function extension editor
  initiallyFocusedFunctionName?: string | null | undefined;
  initiallyFocusedBehaviorName?: string | null | undefined;
  // Homepage
  storageProviders?: Array<StorageProvider>;
};

export type RenderEditorContainerProps = {
  isActive: boolean;
  projectItemName: string | null | undefined;
  project: gd.Project | null | undefined;
  fileMetadata: FileMetadata | null | undefined;
  storageProvider: StorageProvider;
  setToolbar: (arg1?: React.ReactNode | null | undefined) => void;
  // Some optional extra props to pass to the rendered editor
  extraEditorProps: EditorContainerExtraProps | null | undefined;
  // Resources:
  resourceManagementProps: ResourceManagementProps;
  unsavedChanges: UnsavedChanges | null | undefined;
  // Preview:
  setPreviewedLayout: (
    layoutName?: string | null | undefined,
    externalLayoutName?: string | null | undefined
  ) => void;
  previewDebuggerServer: PreviewDebuggerServer | null | undefined;
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps;
  // Opening other editors:
  onOpenExternalEvents: (arg1: string) => void;
  onOpenLayout: (arg1: string) => void;
  onOpenEvents: (sceneName: string) => void;
  openInstructionOrExpression: (
    extension: gd.PlatformExtension,
    type: string
  ) => void;
  // Events function management:
  onLoadEventsFunctionsExtensions: () => Promise<void>;
  onReloadEventsFunctionsExtensionMetadata: (
    extension: gd.EventsFunctionsExtension
  ) => void;
  onCreateEventsFunction: (
    extensionName: string,
    eventsFunction: gd.EventsFunction,
    editorIdentifier:
      | 'scene-events-editor'
      | 'extension-events-editor'
      | 'external-events-editor'
  ) => void;
  // Project opening
  canOpen: boolean;
  onChooseProject: () => void;
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>;
  onOpenProjectManager: () => void;
  onCloseProject: () => Promise<boolean>;
  // Other dialogs opening:
  onOpenExampleStore: () => void;
  onSelectExampleShortHeader: (arg1: ExampleShortHeader) => void;
  onPreviewPrivateGameTemplateListingData: (
    arg1: PrivateGameTemplateListingData
  ) => void;
  onOpenPrivateGameTemplateListingData: (
    privateGameTemplateListingData: PrivateGameTemplateListingData
  ) => void;
  onOpenLanguageDialog: () => void;
  selectInAppTutorial: (tutorialId: string) => void;
  onOpenProfile: () => void;
  onOpenPreferences: () => void;
  onOpenAbout: () => void;
  // Resources handling
  onDeleteResource: (
    resource: gd.Resource,
    cb: (arg1: boolean) => void
  ) => void;
  onRenameResource: (
    resource: gd.Resource,
    newName: string,
    cb: (arg1: boolean) => void
  ) => void;
  canInstallPrivateAsset: () => boolean;
  // Project creation
  onOpenNewProjectSetupDialog: () => void;
  // Project save
  onSave: () => Promise<void>;
  canSave: boolean;
  // Object editing
  openBehaviorEvents: (extensionName: string, behaviorName: string) => void;
};

export type RenderEditorContainerPropsWithRef = {
  ref: (arg1?: any) => any; // TODO - improve the typing of this ref.
} & RenderEditorContainerProps;
