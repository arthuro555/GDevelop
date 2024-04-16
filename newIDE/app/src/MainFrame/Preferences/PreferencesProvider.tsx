import * as React from 'react';
import PreferencesContext, {
  initialPreferences,
  Preferences,
  AlertMessageIdentifier,
// @ts-expect-error - TS6142 - Module './PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from './PreferencesContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import { getIDEVersion } from '../../Version';
import {
  PreferencesValues,
  EditorMosaicName,
// @ts-expect-error - TS6142 - Module './PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from './PreferencesContext';
import type {
  ResourceKind,
  ResourceImportationBehavior,
} from '../../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import { EditorMosaicNode } from '../../UI/EditorMosaic';
import { FileMetadataAndStorageProviderName } from '../../ProjectsStorage';
import defaultShortcuts from '../../KeyboardShortcuts/DefaultShortcuts';
import { CommandName } from '../../CommandPalette/CommandsList';
import { EditorTabsPersistedState } from '../EditorTabs/EditorTabsHandler';
import {
  getBrowserLanguageOrLocale,
  setLanguageInDOM,
  selectLanguageOrLocale,
} from '../../Utils/Language';
import { CHECK_APP_UPDATES_TIMEOUT } from '../../Utils/GlobalFetchTimeouts';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;

type Props = {
  children: React.ReactNode,
  disableCheckForUpdates: boolean
};

type State = Preferences;

const localStorageItem = 'gd-preferences';
const MAX_RECENT_FILES_COUNT = 20;

export const loadPreferencesFromLocalStorage = (): PreferencesValues | null | undefined => {
  try {
    const persistedState = localStorage.getItem(localStorageItem);
    if (!persistedState) return null;

    const values = JSON.parse(persistedState);

    // "Migrate" non existing properties to their default values
    // (useful when upgrading the preferences to a new version where
    // a new preference was added).
    for (const key in initialPreferences.values) {
      if (
        initialPreferences.values.hasOwnProperty(key) &&
        typeof values[key] === 'undefined'
      ) {
        values[key] = initialPreferences.values[key];
      }
    }

    // Migrate renamed themes.
    if (values.themeName === 'GDevelop default') {
      values.themeName = 'GDevelop default Light';
    } else if (values.themeName === 'Dark') {
      values.themeName = 'Blue Dark';
    }

    return values;
  } catch (e: any) {
    return null;
  }
};

export const getInitialPreferences = () => {
  let languageOrLocale = 'en';
  const browserLanguageOrLocale = getBrowserLanguageOrLocale();
  if (browserLanguageOrLocale)
    languageOrLocale = selectLanguageOrLocale(
      browserLanguageOrLocale,
      languageOrLocale
    );

  return { ...initialPreferences.values, language: languageOrLocale };
};

const getPreferences = () => {
  const preferences =
    loadPreferencesFromLocalStorage() || getInitialPreferences();
  setLanguageInDOM(preferences.language);
  return preferences;
};

export default class PreferencesProvider extends React.Component<Props, State> {
// @ts-expect-error - TS7022 - 'state' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  state = {
    values: getPreferences(),
    setLanguage: this._setLanguage.bind(this),
    setThemeName: this._setThemeName.bind(this),
    setCodeEditorThemeName: this._setCodeEditorThemeName.bind(this),
    setAutoDownloadUpdates: this._setAutoDownloadUpdates.bind(this),
    checkUpdates: this._checkUpdates.bind(this),
    setAutoDisplayChangelog: this._setAutoDisplayChangelog.bind(this),
    showAlertMessage: this._showAlertMessage.bind(this),
    showAllAlertMessages: this._showAllAlertMessages.bind(this),
    showTutorialHint: this._showTutorialHint.bind(this),
    showAllTutorialHints: this._showAllTutorialHints.bind(this),
    showAnnouncement: this._showAnnouncement.bind(this),
    showAllAnnouncements: this._showAllAnnouncements.bind(this),
    verifyIfIsNewVersion: this._verifyIfIsNewVersion.bind(this),
    setEventsSheetShowObjectThumbnails: this._setEventsSheetShowObjectThumbnails.bind(
      this
    ),
    setAutosaveOnPreview: this._setAutosaveOnPreview.bind(this),
    setUseGDJSDevelopmentWatcher: this._setUseGDJSDevelopmentWatcher.bind(this),
    setEventsSheetUseAssignmentOperators: this._setEventsSheetUseAssignmentOperators.bind(
      this
    ),
    setEventsSheetZoomLevel: this._setEventsSheetZoomLevel.bind(this),
    setShowEffectParameterNames: this._setShowEffectParameterNames.bind(this),
    getLastUsedPath: this._getLastUsedPath.bind(this),
    setLastUsedPath: this._setLastUsedPath.bind(this),
    getDefaultEditorMosaicNode: this._getDefaultEditorMosaicNode.bind(this),
    setDefaultEditorMosaicNode: this._setDefaultEditorMosaicNode.bind(this),
    getRecentProjectFiles: this._getRecentProjectFiles.bind(this),
    insertRecentProjectFile: this._insertRecentProjectFile.bind(this),
    removeRecentProjectFile: this._removeRecentProjectFile.bind(this),
    getAutoOpenMostRecentProject: this._getAutoOpenMostRecentProject.bind(this),
    setAutoOpenMostRecentProject: this._setAutoOpenMostRecentProject.bind(this),
    hadProjectOpenedDuringLastSession: this._hadProjectOpenedDuringLastSession.bind(
      this
    ),
    setHasProjectOpened: this._setHasProjectOpened.bind(this),
    setShortcutForCommand: this._setShortcutForCommand.bind(this),
    resetShortcutsToDefault: this._resetShortcutsToDefault.bind(this),
    getNewObjectDialogDefaultTab: this._getNewObjectDialogDefaultTab.bind(this),
    setNewObjectDialogDefaultTab: this._setNewObjectDialogDefaultTab.bind(this),
    getShareDialogDefaultTab: this._getShareDialogDefaultTab.bind(this),
    setShareDialogDefaultTab: this._setShareDialogDefaultTab.bind(this),
    getIsMenuBarHiddenInPreview: this._getIsMenuBarHiddenInPreview.bind(this),
    setIsMenuBarHiddenInPreview: this._setIsMenuBarHiddenInPreview.bind(this),
    setBackdropClickBehavior: this._setBackdropClickBehavior.bind(this),
    setResourcesImporationBehavior: this._setResourcesImporationBehavior.bind(
      this
    ),
    getIsAlwaysOnTopInPreview: this._getIsAlwaysOnTopInPreview.bind(this),
    setIsAlwaysOnTopInPreview: this._setIsAlwaysOnTopInPreview.bind(this),
    setEventsSheetCancelInlineParameter: this._setEventsSheetCancelInlineParameter.bind(
      this
    ),
    setShowCommunityExtensions: this._setShowCommunityExtensions.bind(this),
    setShowGetStartedSectionByDefault: this._setShowGetStartedSection.bind(
      this
    ),
    setShowEventBasedObjectsEditor: this._setShowEventBasedObjectsEditor.bind(
      this
    ),
    getShowEventBasedObjectsEditor: this._getShowEventBasedObjectsEditor.bind(
      this
    ),
    setShowDeprecatedInstructionWarning: this._setShowDeprecatedInstructionWarning.bind(
      this
    ),
    getShowDeprecatedInstructionWarning: this._getShowDeprecatedInstructionWarning.bind(
      this
    ),
    setUse3DEditor: this._setUse3DEditor.bind(this),
    getUse3DEditor: this._getUse3DEditor.bind(this),
    saveTutorialProgress: this._saveTutorialProgress.bind(this),
    getTutorialProgress: this._getTutorialProgress.bind(this),
    setNewProjectsDefaultFolder: this._setNewProjectsDefaultFolder.bind(this),
    setNewProjectsDefaultStorageProviderName: this._setNewProjectsDefaultStorageProviderName.bind(
      this
    ),
    setUseShortcutToClosePreviewWindow: this._setUseShortcutToClosePreviewWindow.bind(
      this
    ),
    setWatchProjectFolderFilesForLocalProjects: this._setWatchProjectFolderFilesForLocalProjects.bind(
      this
    ),
    setNewFeaturesAcknowledgements: this._setNewFeaturesAcknowledgements.bind(
      this
    ),
    getEditorStateForProject: this._getEditorStateForProject.bind(this),
    setEditorStateForProject: this._setEditorStateForProject.bind(this),
  };

  componentDidMount() {
    setTimeout(() => this._checkUpdates(), CHECK_APP_UPDATES_TIMEOUT);
  }

  _setLanguage(language: string) {
    setLanguageInDOM(language);
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          language,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setEventsSheetShowObjectThumbnails(
    eventsSheetShowObjectThumbnails: boolean
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          eventsSheetShowObjectThumbnails,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setAutosaveOnPreview(autosaveOnPreview: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          autosaveOnPreview,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _saveTutorialProgress({
    tutorialId,
    userId,
    ...tutorialProgress
  }: {
    tutorialId: string,
    userId: string | null | undefined,
    step: number,
    progress: number,
    fileMetadataAndStorageProviderName: FileMetadataAndStorageProviderName,
    projectData: {
      [key: string]: string
    }
  }) {
    const userIdKey: string = userId || 'anonymous';
    this.setState(
// @ts-expect-error - TS7031 - Binding element 'values' implicitly has an 'any' type.
      ({ values }) => {
        return {
          values: {
            ...values,
            inAppTutorialsProgress: {
              ...values.inAppTutorialsProgress,
              [tutorialId]: {
                ...values.inAppTutorialsProgress[tutorialId],
                [userIdKey]: tutorialProgress,
              },
            },
          },
        };
      },
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getTutorialProgress({
    tutorialId,
    userId,
  }: {
    tutorialId: string,
    userId: string | null | undefined
  }) {
    const userIdKey: string = userId || 'anonymous';
    const tutorialProgresses = this.state.values.inAppTutorialsProgress[
      tutorialId
    ];
    if (!tutorialProgresses) return undefined;
    return tutorialProgresses[userIdKey];
  }

  _setUseGDJSDevelopmentWatcher(useGDJSDevelopmentWatcher: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          useGDJSDevelopmentWatcher,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setEventsSheetUseAssignmentOperators(
    eventsSheetUseAssignmentOperators: boolean
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          eventsSheetUseAssignmentOperators,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setEventsSheetZoomLevel(eventsSheetZoomLevel: number) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          eventsSheetZoomLevel,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setShowEffectParameterNames(showEffectParameterNames: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          showEffectParameterNames,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setShowGetStartedSection(showGetStartedSectionByDefault: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          showGetStartedSectionByDefault,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setThemeName(themeName: string) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          themeName,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setCodeEditorThemeName(codeEditorThemeName: string) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          codeEditorThemeName,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setAutoDownloadUpdates(autoDownloadUpdates: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          autoDownloadUpdates,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setAutoDisplayChangelog(autoDisplayChangelog: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          autoDisplayChangelog,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setEventsSheetCancelInlineParameter(
    eventsSheetCancelInlineParameter: 'apply' | 'cancel'
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          eventsSheetCancelInlineParameter,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setUseShortcutToClosePreviewWindow(
    useShortcutToClosePreviewWindow: boolean
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          useShortcutToClosePreviewWindow,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setShowCommunityExtensions(showCommunityExtensions: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          showCommunityExtensions,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setShowEventBasedObjectsEditor(showEventBasedObjectsEditor: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          showEventBasedObjectsEditor,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getShowEventBasedObjectsEditor() {
    return this.state.values.showEventBasedObjectsEditor;
  }

  _setShowDeprecatedInstructionWarning(
    showDeprecatedInstructionWarning: boolean
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          showDeprecatedInstructionWarning,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getShowDeprecatedInstructionWarning() {
    return this.state.values.showDeprecatedInstructionWarning;
  }

  _setUse3DEditor(use3DEditor: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          use3DEditor,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getUse3DEditor() {
    return this.state.values.use3DEditor;
  }

  _checkUpdates(forceDownload?: boolean) {
    // Checking for updates is only done on Electron.
    // Note: This could be abstracted away later if other updates mechanisms
    // should be supported.
    const { disableCheckForUpdates } = this.props;
    if (!ipcRenderer || disableCheckForUpdates) return;

    if (!!forceDownload || this.state.values.autoDownloadUpdates) {
      ipcRenderer.send('updates-check-and-download');
    } else {
      ipcRenderer.send('updates-check');
    }
  }

  _verifyIfIsNewVersion() {
    const currentVersion = getIDEVersion();
    const { lastLaunchedVersion } = this.state.values;
    if (lastLaunchedVersion === currentVersion) {
      // This is not a new version
      return false;
    }

    // This is a new version: store the version number
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          lastLaunchedVersion: currentVersion,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );

    if (lastLaunchedVersion === undefined) {
      // This is the first time GDevelop is launched, don't
      // warn about this version being new.
      return false;
    }

    return true;
  }

  _showAlertMessage(identifier: AlertMessageIdentifier, show: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenAlertMessages: {
            ...state.values.hiddenAlertMessages,
            // $FlowFixMe - Flow won't typecheck this because of https://medium.com/flow-type/spreads-common-errors-fixes-9701012e9d58
            [identifier]: !show,
          },
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _showAllAlertMessages() {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenAlertMessages: {},
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _showTutorialHint(identifier: string, show: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenTutorialHints: {
            ...state.values.hiddenTutorialHints,
            [identifier]: !show,
          },
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _showAllTutorialHints() {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenTutorialHints: {},
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _showAnnouncement(identifier: string, show: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenAnnouncements: {
            ...state.values.hiddenAnnouncements,
            [identifier]: !show,
          },
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _showAllAnnouncements() {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hiddenAnnouncements: {},
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _persistValuesToLocalStorage(preferences: Preferences) {
    try {
      localStorage.setItem(
        localStorageItem,
        JSON.stringify(preferences.values)
      );
    } catch (e: any) {
      console.warn('Unable to persist preferences', e);
    }

    return preferences;
  }

  _getLastUsedPath(project: gdProject, kind: ResourceKind) {
    const projectPath = project.getProjectFile();
// @ts-expect-error - TS7022 - 'values' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
    const { values } = this.state;
// @ts-expect-error - TS7022 - 'projectPaths' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
    const projectPaths = values.projectLastUsedPaths[projectPath];
    if (projectPaths && projectPaths[kind]) {
      return projectPaths[kind];
    }
    if (!projectPath) return null;
  }

  _setLastUsedPath(project: gdProject, kind: ResourceKind, latestPath: string) {
    const projectPath = project.getProjectFile();

    const { values } = this.state;
    const newProjectLastUsedPaths =
      values.projectLastUsedPaths[projectPath] || {};
    newProjectLastUsedPaths[kind] = latestPath;

    this.setState(
      {
        values: {
          ...values,
          projectLastUsedPaths: {
            ...values.projectLastUsedPaths,
            [projectPath]: newProjectLastUsedPaths,
          },
        },
      },
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getDefaultEditorMosaicNode(name: EditorMosaicName) {
    return this.state.values.defaultEditorMosaicNodes[name] || null;
  }

  _setDefaultEditorMosaicNode(name: EditorMosaicName, node?: EditorMosaicNode | null) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          defaultEditorMosaicNodes: {
            ...state.values.defaultEditorMosaicNodes,
            // $FlowFixMe - Flow errors on unions in computed properties
            [name]: node,
          },
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getRecentProjectFiles() {
    return this.state.values.recentProjectFiles;
  }

  _setRecentProjectFiles(recents: Array<FileMetadataAndStorageProviderName>) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          recentProjectFiles: recents,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _insertRecentProjectFile(newRecentFile: FileMetadataAndStorageProviderName) {
    // Do not store recent project in preferences as they will be accessible only from user account.
    if (newRecentFile.storageProviderName === 'Cloud') return;

    let recentProjectFiles = this._getRecentProjectFiles();
    const isNotNewRecentFile = recentFile: FileMetadataAndStorageProviderName =>
      recentFile.fileMetadata.fileIdentifier !==
      newRecentFile.fileMetadata.fileIdentifier;
    this._setRecentProjectFiles(
      [newRecentFile, ...recentProjectFiles.filter(isNotNewRecentFile)].slice(
        0,
        MAX_RECENT_FILES_COUNT
      )
    );
  }

  _removeRecentProjectFile(recentFile: FileMetadataAndStorageProviderName) {
    const isNotRemovedRecentFile = recentFileItem: FileMetadataAndStorageProviderName =>
      recentFileItem.fileMetadata.fileIdentifier !==
      recentFile.fileMetadata.fileIdentifier;
    this._setRecentProjectFiles(
      [...this._getRecentProjectFiles().filter(isNotRemovedRecentFile)].slice(
        0,
        MAX_RECENT_FILES_COUNT
      )
    );
  }

  _getAutoOpenMostRecentProject() {
    return this.state.values.autoOpenMostRecentProject;
  }

  _setAutoOpenMostRecentProject(enabled: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          autoOpenMostRecentProject: enabled,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _hadProjectOpenedDuringLastSession() {
    return this.state.values.hasProjectOpened;
  }

  _setHasProjectOpened(enabled: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          hasProjectOpened: enabled,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _resetShortcutsToDefault() {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, userShortcutMap: {} },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setShortcutForCommand(commandName: CommandName, shortcutString: string) {
    const defaultShortcut = defaultShortcuts[commandName] || '';
    const setToDefault = defaultShortcut === shortcutString;

    const updatedShortcutMap = { ...this.state.values.userShortcutMap } as const;
    if (setToDefault) delete updatedShortcutMap[commandName];
    else updatedShortcutMap[commandName] = shortcutString;

    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, userShortcutMap: updatedShortcutMap },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getNewObjectDialogDefaultTab() {
    return this.state.values.newObjectDialogDefaultTab;
  }

  _setNewObjectDialogDefaultTab(
    newObjectDialogDefaultTab: 'asset-store' | 'new-object'
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, newObjectDialogDefaultTab },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getShareDialogDefaultTab() {
    return this.state.values.shareDialogDefaultTab;
  }

  _setShareDialogDefaultTab(shareDialogDefaultTab: 'invite' | 'publish') {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, shareDialogDefaultTab },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getIsMenuBarHiddenInPreview() {
    return this.state.values.isMenuBarHiddenInPreview;
  }

  _setIsMenuBarHiddenInPreview(enabled: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          isMenuBarHiddenInPreview: enabled,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setBackdropClickBehavior(
    backdropClickBehavior: 'nothing' | 'apply' | 'cancel'
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, backdropClickBehavior },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setResourcesImporationBehavior(
    resourcesImporationBehavior: ResourceImportationBehavior
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: { ...state.values, resourcesImporationBehavior },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getIsAlwaysOnTopInPreview() {
    return this.state.values.isAlwaysOnTopInPreview;
  }

  _setIsAlwaysOnTopInPreview(enabled: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          isAlwaysOnTopInPreview: enabled,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setNewProjectsDefaultFolder(newProjectsDefaultFolder: string) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          newProjectsDefaultFolder,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setNewProjectsDefaultStorageProviderName(newStorageProviderName: string) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          newProjectsDefaultStorageProviderName: newStorageProviderName,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setWatchProjectFolderFilesForLocalProjects(enable: boolean) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          watchProjectFolderFilesForLocalProjects: enable,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _setNewFeaturesAcknowledgements(newFeaturesAcknowledgements: {
    [featureId: string]: {
      dates: [number]
    }
  }) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          newFeaturesAcknowledgements,
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  _getEditorStateForProject(projectId: string) {
    return this.state.values.editorStateByProject[projectId];
  }

  _setEditorStateForProject(
    projectId: string,
    editorState?: {
      editorTabs: EditorTabsPersistedState
    }
  ) {
    this.setState(
// @ts-expect-error - TS7006 - Parameter 'state' implicitly has an 'any' type.
      state => ({
        values: {
          ...state.values,
          editorStateByProject: {
            ...state.values.editorStateByProject,
            [projectId]: editorState,
          },
        },
      }),
      () => this._persistValuesToLocalStorage(this.state)
    );
  }

  render() {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PreferencesContext.Provider value={this.state}>
        {this.props.children}
      </PreferencesContext.Provider>
    );
  }
}
