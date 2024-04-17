import { Trans } from '@lingui/macro';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';

import { t } from '@lingui/macro';

import * as React from 'react';

import SearchBar, { SearchBarInterface } from '../UI/SearchBar';

import VariablesEditorDialog from '../VariablesList/VariablesEditorDialog';

import ProjectPropertiesDialog from './ProjectPropertiesDialog';
import newNameGenerator from '../Utils/NewNameGenerator';

import ExtensionsSearchDialog from '../AssetStore/ExtensionStore/ExtensionsSearchDialog';

import ScenePropertiesDialog from '../SceneEditor/ScenePropertiesDialog';

import SceneVariablesDialog from '../SceneEditor/SceneVariablesDialog';
import { isExtensionNameTaken } from './EventFunctionExtensionNameVerifier';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
import ProjectManagerCommands from './ProjectManagerCommands';

import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
import { ExtensionShortHeader } from '../Utils/GDevelopServices/Extension';
import EventsRootVariablesFinder from '../Utils/EventsRootVariablesFinder';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';

import InstalledExtensionDetails from './InstalledExtensionDetails';
import { useShouldAutofocusInput } from '../UI/Responsive/ScreenTypeMeasurer';
import { addDefaultLightToAllLayers } from '../ProjectCreation/CreateProject';

import ErrorBoundary from '../UI/ErrorBoundary';
import useForceUpdate from '../Utils/UseForceUpdate';
import useGamesList from '../GameDashboard/UseGamesList';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

import { GameDetailsDialog } from '../GameDashboard/GameDetailsDialog';

import { AutoSizer } from 'react-virtualized';

import Background from '../UI/Background';
import TreeView, { TreeViewInterface, MenuButton } from '../UI/TreeView';
import PreferencesContext, {
  Preferences,
} from '../MainFrame/Preferences/PreferencesContext';

import { Column } from '../UI/Grid';

import Add from '../UI/CustomSvgIcons/Add';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';
import { mapFor } from '../Utils/MapFor';

import { LineStackLayout } from '../UI/Layout';
import KeyboardShortcuts from '../UI/KeyboardShortcuts';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
import {
  SceneTreeViewItemContent,
  getSceneTreeViewItemId,
  SceneTreeViewItemProps,
  SceneTreeViewItemCallbacks,
} from './SceneTreeViewItemContent';
import {
  ExtensionTreeViewItemContent,
  getExtensionTreeViewItemId,
  ExtensionTreeViewItemProps,
  ExtensionTreeViewItemCallbacks,
} from './ExtensionTreeViewItemContent';
import {
  ExternalEventsTreeViewItemContent,
  getExternalEventsTreeViewItemId,
  ExternalEventsTreeViewItemProps,
  ExternalEventsTreeViewItemCallbacks,
} from './ExternalEventsTreeViewItemContent';
import {
  ExternalLayoutTreeViewItemContent,
  getExternalLayoutTreeViewItemId,
  ExternalLayoutTreeViewItemProps,
  ExternalLayoutTreeViewItemCallbacks,
} from './ExternalLayoutTreeViewItemContent';
import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { ShowConfirmDeleteDialogOptions } from '../UI/Alert/AlertContext';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import { GDevelopTheme } from '../UI/Theme';

import { ExtensionStoreContext } from '../AssetStore/ExtensionStore/ExtensionStoreContext';

export const getProjectManagerItemId = (identifier: string) =>
  `project-manager-tab-${identifier}`;

const gameSettingsRootFolderId = getProjectManagerItemId('game-settings');
const gamePropertiesItemId = getProjectManagerItemId('game-properties');
const gameIconsItemId = getProjectManagerItemId('game-icons');
const gameDashboardItemId = 'manage';
const projectSettingsRootFolderId = getProjectManagerItemId('project-settings');
const globalVariablesItemId = getProjectManagerItemId('global-variables');
const gameResourcesItemId = getProjectManagerItemId('game-resources');
export const scenesRootFolderId = getProjectManagerItemId('scenes');
export const extensionsRootFolderId = getProjectManagerItemId('extensions');
export const externalEventsRootFolderId =
  getProjectManagerItemId('external-events');
export const externalLayoutsRootFolderId =
  getProjectManagerItemId('external-layout');

const scenesEmptyPlaceholderId = 'scenes-placeholder';
const extensionsEmptyPlaceholderId = 'extensions-placeholder';
const externalEventsEmptyPlaceholderId = 'external-events-placeholder';
const externalLayoutEmptyPlaceholderId = 'external-layout-placeholder';

const styles = {
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 8px 8px 8px',
  },
  autoSizerContainer: { flex: 1 },
  autoSizer: { width: '100%' },
} as const;

const extensionItemReactDndType = 'GD_EXTENSION_ITEM';

export interface TreeViewItemContent {
  getName(): string | React.ReactNode;
  getId(): string;
  getHtmlId(index: number): string | null | undefined;
  getDataSet(): {
    [key: string]: string;
  };
  getThumbnail(): string | null | undefined;
  onClick(): void;
  buildMenuTemplate(i18n: I18nType, index: number): Array<MenuItemTemplate>;
  getRightButton(i18n: I18nType): MenuButton | null | undefined;
  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined;
  rename(newName: string): void;
  edit(): void;
  delete(): void;
  copy(): void;
  paste(): void;
  cut(): void;
  getIndex(): number;
  moveAt(destinationIndex: number): void;
  isDescendantOf(itemContent: TreeViewItemContent): boolean;
  getRootId(): string;
}

interface TreeViewItem {
  isRoot?: boolean;
  isPlaceholder?: boolean;
  readonly content: TreeViewItemContent;
  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined;
}

export type TreeItemProps = {
  forceUpdate: () => void;
  forceUpdateList: () => void;
  unsavedChanges?: UnsavedChanges | null | undefined;
  preferences: Preferences;
  gdevelopTheme: GDevelopTheme;
  project: gd.Project;
  editName: (itemId: string) => void;
  scrollToItem: (itemId: string) => void;
  showDeleteConfirmation: (
    options: ShowConfirmDeleteDialogOptions
  ) => Promise<boolean>;
};

class LeafTreeViewItem implements TreeViewItem {
  content: TreeViewItemContent;

  constructor(content: TreeViewItemContent) {
    this.content = content;
  }

  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
    return null;
  }
}

class PlaceHolderTreeViewItem implements TreeViewItem {
  isPlaceholder = true;
  content: TreeViewItemContent;

  constructor(id: string, label: string | React.ReactNode) {
    this.content = new LabelTreeViewItemContent(id, label);
  }

  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
    return null;
  }
}

class LabelTreeViewItemContent implements TreeViewItemContent {
  id: string;
  label: string | React.ReactNode;
  // @ts-expect-error - TS2564 - Property 'dataSet' has no initializer and is not definitely assigned in the constructor.
  dataSet: {
    [key: string]: string;
  };
  buildMenuTemplateFunction: (
    i18n: I18nType,
    index: number
  ) => Array<MenuItemTemplate>;
  rightButton: MenuButton | null | undefined;

  constructor(
    id: string,
    label: string | React.ReactNode,
    rightButton?: MenuButton
  ) {
    this.id = id;
    this.label = label;
    this.buildMenuTemplateFunction = (i18n: I18nType, index: number) =>
      rightButton
        ? [
            {
              id: rightButton.id,
              label: rightButton.label,
              click: rightButton.click,
            },
          ]
        : [];
    this.rightButton = rightButton;
  }

  getName(): string | React.ReactNode {
    return this.label;
  }

  getId(): string {
    return this.id;
  }

  getRightButton(i18n: I18nType): MenuButton | null | undefined {
    return this.rightButton;
  }

  getHtmlId(index: number): string | null | undefined {
    return this.id;
  }

  getDataSet(): {
    [key: string]: string;
  } {
    return {};
  }

  getThumbnail(): string | null | undefined {
    return null;
  }

  onClick(): void {}

  buildMenuTemplate(i18n: I18nType, index: number) {
    return this.buildMenuTemplateFunction(i18n, index);
  }

  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined {
    return null;
  }

  rename(newName: string): void {}

  edit(): void {}

  delete(): void {}

  copy(): void {}

  paste(): void {}

  cut(): void {}

  getIndex(): number {
    return 0;
  }

  moveAt(destinationIndex: number): void {}

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return false;
  }

  getRootId(): string {
    return '';
  }
}

class ActionTreeViewItemContent implements TreeViewItemContent {
  id: string;
  label: string | React.ReactNode;
  buildMenuTemplateFunction: (
    i18n: I18nType,
    index: number
  ) => Array<MenuItemTemplate>;
  thumbnail: string | null | undefined;
  onClickCallback: () => void;

  constructor(
    id: string,
    label: string | React.ReactNode,
    onClickCallback: () => void,
    thumbnail?: string
  ) {
    this.id = id;
    this.label = label;
    this.onClickCallback = onClickCallback;
    this.thumbnail = thumbnail;
    this.buildMenuTemplateFunction = (i18n: I18nType, index: number) => [];
  }

  getName(): string | React.ReactNode {
    return this.label;
  }

  getId(): string {
    return this.id;
  }

  getRightButton(i18n: I18nType): MenuButton | null | undefined {
    return null;
  }

  getEventsFunctionsContainer():
    | gd.EventsFunctionsContainer
    | null
    | undefined {
    return null;
  }

  getHtmlId(index: number): string | null | undefined {
    return this.id;
  }

  getDataSet(): {
    [key: string]: string;
  } {
    return {};
  }

  getThumbnail(): string | null | undefined {
    return this.thumbnail;
  }

  onClick(): void {
    this.onClickCallback();
  }

  buildMenuTemplate(i18n: I18nType, index: number) {
    return this.buildMenuTemplateFunction(i18n, index);
  }

  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined {
    return null;
  }

  rename(newName: string): void {}

  edit(): void {}

  delete(): void {}

  copy(): void {}

  paste(): void {}

  cut(): void {}

  getIndex(): number {
    return 0;
  }

  moveAt(destinationIndex: number): void {}

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return false;
  }

  getRootId(): string {
    return '';
  }
}

const getTreeViewItemName = (item: TreeViewItem) => item.content.getName();
const getTreeViewItemId = (item: TreeViewItem) => item.content.getId();
const getTreeViewItemHtmlId = (item: TreeViewItem, index: number) =>
  item.content.getHtmlId(index);
const getTreeViewItemChildren = (i18n: I18nType) => (item: TreeViewItem) =>
  item.getChildren(i18n);
const getTreeViewItemThumbnail = (item: TreeViewItem) =>
  item.content.getThumbnail();
const getTreeViewItemDataSet = (item: TreeViewItem) =>
  item.content.getDataSet();
const buildMenuTemplate =
  (i18n: I18nType) => (item: TreeViewItem, index: number) =>
    item.content.buildMenuTemplate(i18n, index);
const renderTreeViewItemRightComponent =
  (i18n: I18nType) => (item: TreeViewItem) =>
    item.content.renderRightComponent(i18n);
const renameItem = (item: TreeViewItem, newName: string) => {
  item.content.rename(newName);
};
const onClickItem = (item: TreeViewItem) => {
  item.content.onClick();
};
const editItem = (item: TreeViewItem) => {
  item.content.edit();
};
const deleteItem = (item: TreeViewItem) => {
  item.content.delete();
};
const getTreeViewItemRightButton = (i18n: I18nType) => (item: TreeViewItem) =>
  item.content.getRightButton(i18n);

export type ProjectManagerInterface = {
  forceUpdateList: () => void;
  focusSearchBar: () => void;
};

type Props = {
  project: gd.Project;
  onChangeProjectName: (arg1: string) => Promise<void>;
  onSaveProjectProperties: (options: { newName?: string }) => Promise<boolean>;
} & SceneTreeViewItemCallbacks &
  ExtensionTreeViewItemCallbacks &
  ExternalEventsTreeViewItemCallbacks &
  ExternalLayoutTreeViewItemCallbacks & {
    onOpenResources: () => void;
    onOpenPlatformSpecificAssets: () => void;
    eventsFunctionsExtensionsError: Error | null | undefined;
    onReloadEventsFunctionsExtensions: () => void;
    freezeUpdate: boolean;
    unsavedChanges?: UnsavedChanges;
    hotReloadPreviewButtonProps: HotReloadPreviewButtonProps;
    onInstallExtension: (arg1: ExtensionShortHeader) => void;
    onShareProject: () => void;
    // For resources:
    resourceManagementProps: ResourceManagementProps;
  };

const ProjectManager = React.forwardRef<ProjectManagerInterface, Props>(
  (
    {
      project,

      onChangeProjectName,

      onSaveProjectProperties,

      onDeleteLayout,

      onDeleteExternalEvents,

      onDeleteExternalLayout,

      onDeleteEventsFunctionsExtension,

      onRenameLayout,

      onRenameExternalEvents,

      onRenameExternalLayout,

      onRenameEventsFunctionsExtension,

      onOpenLayout,

      onOpenExternalEvents,

      onOpenExternalLayout,

      onOpenEventsFunctionsExtension,

      onOpenResources,

      onOpenPlatformSpecificAssets,

      eventsFunctionsExtensionsError,

      onReloadEventsFunctionsExtensions,

      freezeUpdate,

      unsavedChanges,

      hotReloadPreviewButtonProps,

      onInstallExtension,

      onShareProject,

      resourceManagementProps,
    },
    ref
  ) => {
    const [selectedItems, setSelectedItems] = React.useState<
      Array<TreeViewItem>
    >([]);

    const preferences = React.useContext(PreferencesContext);
    const gdevelopTheme = React.useContext(GDevelopThemeContext);
    const { currentlyRunningInAppTutorial } =
      React.useContext(InAppTutorialContext);
    const treeViewRef = React.useRef<
      TreeViewInterface<TreeViewItem> | null | undefined
    >(null);
    const forceUpdate = useForceUpdate();
    const { isMobile } = useResponsiveWindowSize();
    // @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
    const { showDeleteConfirmation } = useAlertDialog();

    const forceUpdateList = React.useCallback(() => {
      forceUpdate();
      if (treeViewRef.current) treeViewRef.current.forceUpdateList();
    }, [forceUpdate]);

    const [searchText, setSearchText] = React.useState('');

    const scrollToItem = React.useCallback((itemId: string) => {
      if (treeViewRef.current) {
        treeViewRef.current.scrollToItemFromId(itemId);
      }
    }, []);

    const [projectPropertiesDialogOpen, setProjectPropertiesDialogOpen] =
      React.useState(false);
    const [
      projectPropertiesDialogInitialTab,
      setProjectPropertiesDialogInitialTab,
    ] = React.useState('properties');
    const openProjectProperties = React.useCallback(() => {
      setProjectPropertiesDialogOpen(true);
      setProjectPropertiesDialogInitialTab('properties');
    }, []);
    const openProjectLoadingScreen = React.useCallback(() => {
      setProjectPropertiesDialogOpen(true);
      setProjectPropertiesDialogInitialTab('loading-screen');
    }, []);
    const onProjectPropertiesApplied = React.useCallback(
      (options: { newName?: string }) => {
        if (unsavedChanges) {
          unsavedChanges.triggerUnsavedChanges();
        }

        if (options.newName) {
          onChangeProjectName(options.newName);
        }
        setProjectPropertiesDialogOpen(false);
      },
      [unsavedChanges, onChangeProjectName]
    );

    const [openGameDetails, setOpenGameDetails] =
      React.useState<boolean>(false);
    const projectUuid = project.getProjectUuid();
    const { games, fetchGames } = useGamesList();
    const { profile } = React.useContext(AuthenticatedUserContext);
    const userId = profile ? profile.id : null;
    React.useEffect(() => {
      fetchGames();
    }, [fetchGames, userId]);
    const gameMatchingProjectUuid = games
      ? games.find((game) => game.id === projectUuid)
      : null;
    const onOpenGamesDashboardDialog = React.useCallback(
      () => setOpenGameDetails(true),
      []
    );

    const [projectVariablesEditorOpen, setProjectVariablesEditorOpen] =
      React.useState(false);
    const openProjectVariables = React.useCallback(() => {
      setProjectVariablesEditorOpen(true);
    }, []);

    const [editedPropertiesLayout, setEditedPropertiesLayout] =
      React.useState<any>(null);
    const [editedVariablesLayout, setEditedVariablesLayout] =
      React.useState<any>(null);
    const onOpenLayoutProperties = React.useCallback(
      (layout?: gd.Layout | null) => {
        setEditedPropertiesLayout(layout);
      },
      []
    );
    const onOpenLayoutVariables = React.useCallback(
      (layout?: gd.Layout | null) => {
        setEditedVariablesLayout(layout);
      },
      []
    );

    const [extensionsSearchDialogOpen, setExtensionsSearchDialogOpen] =
      React.useState(false);
    const openSearchExtensionDialog = React.useCallback(() => {
      setExtensionsSearchDialogOpen(true);
    }, []);
    const [openedExtensionShortHeader, setOpenedExtensionShortHeader] =
      React.useState<any>(null);
    const [openedExtensionName, setOpenedExtensionName] =
      React.useState<any>(null);

    const searchBarRef = React.useRef<SearchBarInterface | null | undefined>(
      null
    );

    React.useImperativeHandle(ref, () => ({
      forceUpdateList: () => {
        forceUpdate();
        if (treeViewRef.current) treeViewRef.current.forceUpdateList();
      },
      focusSearchBar: () => {
        if (searchBarRef.current) searchBarRef.current.focus();
      },
    }));

    const onProjectItemModified = React.useCallback(() => {
      forceUpdate();
      if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();
    }, [forceUpdate, unsavedChanges]);

    const editName = React.useCallback(
      (itemId: string) => {
        const treeView = treeViewRef.current;
        if (treeView) {
          if (isMobile) {
            // Position item at top of the screen to make sure it will be visible
            // once the keyboard is open.
            treeView.scrollToItemFromId(itemId, 'start');
          }
          treeView.renameItemFromId(itemId);
        }
      },
      [isMobile]
    );

    const addNewScene = React.useCallback(
      (index: number, i18n: I18nType) => {
        const newName = newNameGenerator(i18n._(t`Untitled scene`), (name) =>
          project.hasLayoutNamed(name)
        );
        const newScene = project.insertNewLayout(newName, index + 1);
        newScene.setName(newName);
        newScene.updateBehaviorsSharedData(project);
        addDefaultLightToAllLayers(newScene);

        onProjectItemModified();

        const sceneItemId = getSceneTreeViewItemId(newScene);
        if (treeViewRef.current) {
          treeViewRef.current.openItems([sceneItemId, scenesRootFolderId]);
        }
        // Scroll to the new behavior.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          scrollToItem(sceneItemId);
        }, 100); // A few ms is enough for a new render to be done.

        // We focus it so the user can edit the name directly.
        editName(sceneItemId);
      },
      [project, onProjectItemModified, editName, scrollToItem]
    );

    const onCreateNewExtension = React.useCallback(
      (project: gd.Project, i18n: I18nType) => {
        const newName = newNameGenerator(i18n._(t`UntitledExtension`), (name) =>
          isExtensionNameTaken(name, project)
        );
        const eventsFunctionsExtension =
          project.insertNewEventsFunctionsExtension(
            newName,
            project.getEventsFunctionsExtensionsCount()
          );
        setExtensionsSearchDialogOpen(false);
        onProjectItemModified();

        const extensionItemId = getExtensionTreeViewItemId(
          eventsFunctionsExtension
        );
        if (treeViewRef.current) {
          treeViewRef.current.openItems([
            extensionItemId,
            extensionsRootFolderId,
          ]);
        }
        // Scroll to the new behavior.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          scrollToItem(extensionItemId);
        }, 100); // A few ms is enough for a new render to be done.

        // We focus it so the user can edit the name directly.
        editName(extensionItemId);
      },
      [editName, onProjectItemModified, scrollToItem]
    );

    const { extensionShortHeadersByName } = React.useContext(
      ExtensionStoreContext
    );

    const onEditEventsFunctionExtensionOrSeeDetails = React.useCallback(
      (eventsFunctionsExtension: gd.EventsFunctionsExtension) => {
        const name = eventsFunctionsExtension.getName();
        // If the extension is coming from the store, open its details.
        // If that's not the case, or if it cannot be found in the store, edit it directly.
        const originName = eventsFunctionsExtension.getOriginName();
        if (originName !== 'gdevelop-extension-store') {
          onOpenEventsFunctionsExtension(name);
          return;
        }
        const originIdentifier = eventsFunctionsExtension.getOriginIdentifier();
        const extensionShortHeader =
          extensionShortHeadersByName[originIdentifier];
        if (!extensionShortHeader) {
          console.warn(
            `This extension was downloaded from the store but its reference ${originIdentifier} couldn't be found in the store. Opening the extension in the editor...`
          );
          onOpenEventsFunctionsExtension(name);
          return;
        }
        setOpenedExtensionShortHeader(extensionShortHeader);
        setOpenedExtensionName(name);
      },
      [extensionShortHeadersByName, onOpenEventsFunctionsExtension]
    );

    const addExternalEvents = React.useCallback(
      (index: number, i18n: I18nType) => {
        const newName = newNameGenerator(
          i18n._(t`Untitled external events`),
          (name) => project.hasExternalEventsNamed(name)
        );
        const newExternalEvents = project.insertNewExternalEvents(
          newName,
          index + 1
        );
        onProjectItemModified();

        const externalEventsItemId =
          getExternalEventsTreeViewItemId(newExternalEvents);
        if (treeViewRef.current) {
          treeViewRef.current.openItems([
            externalEventsItemId,
            externalEventsRootFolderId,
          ]);
        }
        // Scroll to the new behavior.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          scrollToItem(externalEventsItemId);
        }, 100); // A few ms is enough for a new render to be done.

        // We focus it so the user can edit the name directly.
        editName(externalEventsItemId);
      },
      [project, onProjectItemModified, editName, scrollToItem]
    );

    const addExternalLayout = React.useCallback(
      (index: number, i18n: I18nType) => {
        const newName = newNameGenerator(
          i18n._(t`Untitled external layout`),
          (name) => project.hasExternalLayoutNamed(name)
        );
        const newExternalLayout = project.insertNewExternalLayout(
          newName,
          index + 1
        );
        onProjectItemModified();

        const externalLayoutItemId =
          getExternalLayoutTreeViewItemId(newExternalLayout);
        if (treeViewRef.current) {
          treeViewRef.current.openItems([
            externalLayoutItemId,
            externalLayoutsRootFolderId,
          ]);
        }
        // Scroll to the new behavior.
        // Ideally, we'd wait for the list to be updated to scroll, but
        // to simplify the code, we just wait a few ms for a new render
        // to be done.
        setTimeout(() => {
          scrollToItem(externalLayoutItemId);
        }, 100); // A few ms is enough for a new render to be done.

        // We focus it so the user can edit the name directly.
        editName(externalLayoutItemId);
      },
      [project, onProjectItemModified, editName, scrollToItem]
    );

    const onTreeModified = React.useCallback(
      (shouldForceUpdateList: boolean) => {
        if (unsavedChanges) unsavedChanges.triggerUnsavedChanges();

        if (shouldForceUpdateList) forceUpdateList();
        else forceUpdate();
      },
      [forceUpdate, forceUpdateList, unsavedChanges]
    );

    // Initialize keyboard shortcuts as empty.
    // onDelete callback is set outside because it deletes the selected
    // item (that is a props). As it is stored in a ref, the keyboard shortcut
    // instance does not update with selectedItems changes.
    const keyboardShortcutsRef = React.useRef<KeyboardShortcuts>(
      new KeyboardShortcuts({
        shortcutCallbacks: {},
      })
    );
    React.useEffect(() => {
      if (keyboardShortcutsRef.current) {
        // @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onDelete', () => {
          if (selectedItems.length > 0) {
            deleteItem(selectedItems[0]);
          }
        });
        // @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onRename', () => {
          if (selectedItems.length > 0) {
            editName(selectedItems[0].content.getId());
          }
        });
        // @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onCopy', () => {
          if (selectedItems.length > 0) {
            selectedItems[0].content.copy();
          }
        });
        // @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onPaste', () => {
          if (selectedItems.length > 0) {
            selectedItems[0].content.paste();
          }
        });
        // @ts-expect-error - TS2345 - Argument of type '() => void' is not assignable to parameter of type '() => Promise<undefined> | undefined'.
        keyboardShortcutsRef.current.setShortcutCallback('onCut', () => {
          if (selectedItems.length > 0) {
            selectedItems[0].content.cut();
          }
        });
      }
    }, [editName, selectedItems]);

    const sceneTreeViewItemProps = React.useMemo<SceneTreeViewItemProps>(
      () => ({
        project,
        unsavedChanges,
        preferences,
        gdevelopTheme,
        forceUpdate,
        forceUpdateList,
        showDeleteConfirmation,
        editName,
        scrollToItem,
        onDeleteLayout,
        onRenameLayout,
        onOpenLayout,
        onOpenLayoutProperties,
        onOpenLayoutVariables,
      }),
      [
        project,
        unsavedChanges,
        preferences,
        gdevelopTheme,
        forceUpdate,
        forceUpdateList,
        showDeleteConfirmation,
        editName,
        scrollToItem,
        onDeleteLayout,
        onRenameLayout,
        onOpenLayout,
        onOpenLayoutProperties,
        onOpenLayoutVariables,
      ]
    );

    const extensionTreeViewItemProps =
      React.useMemo<ExtensionTreeViewItemProps>(
        () => ({
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteEventsFunctionsExtension,
          onRenameEventsFunctionsExtension,
          onOpenEventsFunctionsExtension,
          onReloadEventsFunctionsExtensions,
          onEditEventsFunctionExtensionOrSeeDetails,
        }),
        [
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteEventsFunctionsExtension,
          onRenameEventsFunctionsExtension,
          onOpenEventsFunctionsExtension,
          onReloadEventsFunctionsExtensions,
          onEditEventsFunctionExtensionOrSeeDetails,
        ]
      );

    const externalEventsTreeViewItemProps =
      React.useMemo<ExternalEventsTreeViewItemProps>(
        () => ({
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteExternalEvents,
          onRenameExternalEvents,
          onOpenExternalEvents,
        }),
        [
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteExternalEvents,
          onRenameExternalEvents,
          onOpenExternalEvents,
        ]
      );

    const externalLayoutTreeViewItemProps =
      React.useMemo<ExternalLayoutTreeViewItemProps>(
        () => ({
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteExternalLayout,
          onRenameExternalLayout,
          onOpenExternalLayout,
        }),
        [
          project,
          unsavedChanges,
          preferences,
          gdevelopTheme,
          forceUpdate,
          forceUpdateList,
          showDeleteConfirmation,
          editName,
          scrollToItem,
          onDeleteExternalLayout,
          onRenameExternalLayout,
          onOpenExternalLayout,
        ]
      );

    const getTreeViewData = React.useCallback(
      (i18n: I18nType): Array<TreeViewItem> => {
        return [
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              gameSettingsRootFolderId,
              i18n._(t`Game settings`)
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              return [
                new LeafTreeViewItem(
                  new ActionTreeViewItemContent(
                    gamePropertiesItemId,
                    i18n._(t`Properties`),
                    openProjectProperties,
                    'res/icons_default/properties_black.svg'
                  )
                ),
                new LeafTreeViewItem(
                  new ActionTreeViewItemContent(
                    gameIconsItemId,
                    i18n._(t`Icons and thumbnail`),
                    onOpenPlatformSpecificAssets,
                    'res/icons_default/picture_black.svg'
                  )
                ),
                new LeafTreeViewItem(
                  new ActionTreeViewItemContent(
                    gameDashboardItemId,
                    i18n._(t`Game Dashboard`),
                    onOpenGamesDashboardDialog,
                    'res/icons_default/graphs_black.svg'
                  )
                ),
              ];
            },
          },
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              projectSettingsRootFolderId,
              i18n._(t`Project settings`)
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              return [
                new LeafTreeViewItem(
                  new ActionTreeViewItemContent(
                    globalVariablesItemId,
                    i18n._(t`Global variables`),
                    openProjectVariables,
                    'res/icons_default/publish_black.svg'
                  )
                ),
                new LeafTreeViewItem(
                  new ActionTreeViewItemContent(
                    gameResourcesItemId,
                    i18n._(t`Resources`),
                    onOpenResources,
                    'res/icons_default/project_resources_black.svg'
                  )
                ),
              ];
            },
          },
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              scenesRootFolderId,
              i18n._(t`Scenes`),
              {
                icon: <Add />,
                label: i18n._(t`Add a scene`),
                click: () => {
                  // TODO Add after selected scene?
                  const index = project.getLayoutsCount() - 1;
                  addNewScene(index, i18n);
                },
                id: 'add-new-scene-button',
              }
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              if (project.getLayoutsCount() === 0) {
                return [
                  new PlaceHolderTreeViewItem(
                    scenesEmptyPlaceholderId,
                    i18n._(t`Start by adding a new scene.`)
                  ),
                ];
              }
              return mapFor(
                0,
                project.getLayoutsCount(),

                (i) =>
                  new LeafTreeViewItem(
                    new SceneTreeViewItemContent(
                      project.getLayoutAt(i),
                      sceneTreeViewItemProps
                    )
                  )
              );
            },
          },
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              extensionsRootFolderId,
              i18n._(t`Extensions`),
              {
                icon: <Add />,
                label: i18n._(t`Create or search for new extensions`),
                click: openSearchExtensionDialog,
                id: 'project-manager-extension-search-or-create',
              }
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              if (project.getEventsFunctionsExtensionsCount() === 0) {
                return [
                  new PlaceHolderTreeViewItem(
                    extensionsEmptyPlaceholderId,
                    i18n._(t`Start by adding a new function.`)
                  ),
                ];
              }
              return mapFor(
                0,
                project.getEventsFunctionsExtensionsCount(),

                (i) =>
                  new LeafTreeViewItem(
                    new ExtensionTreeViewItemContent(
                      project.getEventsFunctionsExtensionAt(i),
                      extensionTreeViewItemProps
                    )
                  )
              );
            },
          },
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              externalEventsRootFolderId,
              i18n._(t`External events`),
              {
                icon: <Add />,
                label: i18n._(t`Add external events`),
                click: () => {
                  // TODO Add after selected scene?
                  const index = project.getExternalEventsCount() - 1;
                  addExternalEvents(index, i18n);
                },
                id: 'add-new-external-events-button',
              }
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              if (project.getExternalEventsCount() === 0) {
                return [
                  new PlaceHolderTreeViewItem(
                    externalEventsEmptyPlaceholderId,
                    i18n._(t`Start by adding new external events.`)
                  ),
                ];
              }
              return mapFor(
                0,
                project.getExternalEventsCount(),

                (i) =>
                  new LeafTreeViewItem(
                    new ExternalEventsTreeViewItemContent(
                      project.getExternalEventsAt(i),
                      externalEventsTreeViewItemProps
                    )
                  )
              );
            },
          },
          {
            isRoot: true,
            content: new LabelTreeViewItemContent(
              externalLayoutsRootFolderId,
              i18n._(t`External layouts`),
              {
                icon: <Add />,
                label: i18n._(t`Add an external layout`),
                click: () => {
                  // TODO Add after selected scene?
                  const index = project.getExternalLayoutsCount() - 1;
                  addExternalLayout(index, i18n);
                },
                id: 'add-new-external-layout-button',
              }
            ),
            getChildren(
              i18n: I18nType
            ): Array<TreeViewItem> | null | undefined {
              if (project.getExternalLayoutsCount() === 0) {
                return [
                  new PlaceHolderTreeViewItem(
                    externalLayoutEmptyPlaceholderId,
                    i18n._(t`Start by adding new a external layout.`)
                  ),
                ];
              }
              return mapFor(
                0,
                project.getExternalLayoutsCount(),

                (i) =>
                  new LeafTreeViewItem(
                    new ExternalLayoutTreeViewItemContent(
                      project.getExternalLayoutAt(i),
                      externalLayoutTreeViewItemProps
                    )
                  )
              );
            },
          },
        ];
      },
      [
        addExternalEvents,
        addExternalLayout,
        addNewScene,
        extensionTreeViewItemProps,
        externalEventsTreeViewItemProps,
        externalLayoutTreeViewItemProps,
        onOpenGamesDashboardDialog,
        onOpenPlatformSpecificAssets,
        onOpenResources,
        openProjectProperties,
        openProjectVariables,
        openSearchExtensionDialog,
        project,
        sceneTreeViewItemProps,
      ]
    );

    const canMoveSelectionTo = React.useCallback(
      (destinationItem: TreeViewItem, where: 'before' | 'inside' | 'after') =>
        selectedItems.every((item) => {
          return (
            // Project and game settings children `getRootId` return an empty string.
            item.content.getRootId().length > 0 &&
            item.content.getRootId() === destinationItem.content.getRootId()
          );
        }),
      [selectedItems]
    );

    const moveSelectionTo = React.useCallback(
      (
        i18n: I18nType,
        destinationItem: TreeViewItem,
        where: 'before' | 'inside' | 'after'
      ) => {
        if (selectedItems.length === 0) {
          return;
        }
        const selectedItem = selectedItems[0];
        selectedItem.content.moveAt(
          destinationItem.content.getIndex() + (where === 'after' ? 1 : 0)
        );
        onTreeModified(true);
      },
      [onTreeModified, selectedItems]
    );

    /**
     * Unselect item if one of the parent is collapsed (folded) so that the item
     * does not stay selected and not visible to the user.
     */
    const onCollapseItem = React.useCallback(
      (item: TreeViewItem) => {
        if (selectedItems.length !== 1 || item.isPlaceholder) {
          return;
        }
        if (selectedItems[0].content.isDescendantOf(item.content)) {
          setSelectedItems([]);
        }
      },
      [selectedItems]
    );

    // Force List component to be mounted again if project
    // has been changed. Avoid accessing to invalid objects that could
    // crash the app.
    const listKey = project.ptr;
    const initiallyOpenedNodeIds = [
      gameSettingsRootFolderId,
      projectSettingsRootFolderId,
      scenesRootFolderId,
      extensionsRootFolderId,
      externalEventsRootFolderId,
      externalLayoutsRootFolderId,
    ];

    return (
      <Background maxWidth>
        <ProjectManagerCommands
          project={project}
          onOpenProjectProperties={openProjectProperties}
          onOpenProjectLoadingScreen={openProjectLoadingScreen}
          onOpenProjectVariables={openProjectVariables}
          onOpenResourcesDialog={onOpenResources}
          onOpenPlatformSpecificAssetsDialog={onOpenPlatformSpecificAssets}
          onOpenSearchExtensionDialog={openSearchExtensionDialog}
        />
        <Column>
          <LineStackLayout>
            <Column expand noMargin>
              <SearchBar
                ref={searchBarRef}
                value={searchText}
                onRequestSearch={() => {}}
                onChange={setSearchText}
                placeholder={t`Search in project`}
              />
            </Column>
          </LineStackLayout>
        </Column>
        <div
          style={styles.listContainer}
          // @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
          onKeyDown={keyboardShortcutsRef.current.onKeyDown}
          // @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
          onKeyUp={keyboardShortcutsRef.current.onKeyUp}
          id="project-manager"
        >
          <I18n>
            {({ i18n }) => (
              <>
                <div style={styles.autoSizerContainer}>
                  <AutoSizer style={styles.autoSizer} disableWidth>
                    {({ height }) => (
                      <TreeView
                        key={listKey}
                        ref={treeViewRef}
                        items={getTreeViewData(i18n)}
                        height={height}
                        forceAllOpened={!!currentlyRunningInAppTutorial}
                        searchText={searchText}
                        getItemName={getTreeViewItemName}
                        getItemThumbnail={getTreeViewItemThumbnail}
                        getItemChildren={getTreeViewItemChildren(i18n)}
                        multiSelect={false}
                        getItemId={getTreeViewItemId}
                        getItemHtmlId={getTreeViewItemHtmlId}
                        getItemDataset={getTreeViewItemDataSet}
                        onEditItem={editItem}
                        onCollapseItem={onCollapseItem}
                        selectedItems={selectedItems}
                        onSelectItems={(items) => {
                          const itemToSelect = items[0];
                          if (!itemToSelect) return;
                          if (itemToSelect.isRoot) return;
                          setSelectedItems(items);
                        }}
                        onClickItem={onClickItem}
                        onRenameItem={renameItem}
                        buildMenuTemplate={buildMenuTemplate(i18n)}
                        getItemRightButton={getTreeViewItemRightButton(i18n)}
                        renderRightComponent={renderTreeViewItemRightComponent(
                          i18n
                        )}
                        onMoveSelectionToItem={(destinationItem, where) =>
                          moveSelectionTo(i18n, destinationItem, where)
                        }
                        canMoveSelectionToItem={canMoveSelectionTo}
                        reactDndType={extensionItemReactDndType}
                        initiallyOpenedNodeIds={initiallyOpenedNodeIds}
                        forceDefaultDraggingPreview
                        // @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type.
                        shouldHideMenuIcon={(item) => !item.content.getRootId()}
                      />
                    )}
                  </AutoSizer>
                </div>
                {projectPropertiesDialogOpen && (
                  <ProjectPropertiesDialog
                    open
                    initialTab={projectPropertiesDialogInitialTab}
                    project={project}
                    onClose={() => setProjectPropertiesDialogOpen(false)}
                    onApply={onSaveProjectProperties}
                    onPropertiesApplied={onProjectPropertiesApplied}
                    resourceManagementProps={resourceManagementProps}
                    hotReloadPreviewButtonProps={hotReloadPreviewButtonProps}
                    i18n={i18n}
                  />
                )}
                {projectVariablesEditorOpen && (
                  <VariablesEditorDialog
                    project={project}
                    title={<Trans>Global Variables</Trans>}
                    open
                    variablesContainer={project.getVariables()}
                    onCancel={() => setProjectVariablesEditorOpen(false)}
                    onApply={() => {
                      if (unsavedChanges)
                        unsavedChanges.triggerUnsavedChanges();
                      setProjectVariablesEditorOpen(false);
                    }}
                    emptyPlaceholderTitle={
                      <Trans>Add your first global variable</Trans>
                    }
                    emptyPlaceholderDescription={
                      <Trans>
                        These variables hold additional information on a
                        project.
                      </Trans>
                    }
                    helpPagePath={'/all-features/variables/global-variables'}
                    hotReloadPreviewButtonProps={hotReloadPreviewButtonProps}
                    onComputeAllVariableNames={() =>
                      EventsRootVariablesFinder.findAllGlobalVariables(
                        project.getCurrentPlatform(),
                        project
                      )
                    }
                  />
                )}
                {openGameDetails && (
                  <GameDetailsDialog
                    project={project}
                    analyticsSource="projectManager"
                    game={gameMatchingProjectUuid}
                    onClose={() => setOpenGameDetails(false)}
                    onGameDeleted={() => {
                      setOpenGameDetails(false);
                      fetchGames();
                    }}
                    onGameUpdated={fetchGames}
                    onShareProject={onShareProject}
                  />
                )}
                {!!editedPropertiesLayout && (
                  <ScenePropertiesDialog
                    open
                    layout={editedPropertiesLayout}
                    project={project}
                    onApply={() => {
                      if (unsavedChanges)
                        unsavedChanges.triggerUnsavedChanges();
                      onOpenLayoutProperties(null);
                    }}
                    onClose={() => onOpenLayoutProperties(null)}
                    onEditVariables={() => {
                      onOpenLayoutVariables(editedPropertiesLayout);
                      onOpenLayoutProperties(null);
                    }}
                    resourceManagementProps={resourceManagementProps}
                  />
                )}
                {!!editedVariablesLayout && (
                  <SceneVariablesDialog
                    open
                    project={project}
                    layout={editedVariablesLayout}
                    onClose={() => onOpenLayoutVariables(null)}
                    onApply={() => {
                      if (unsavedChanges)
                        unsavedChanges.triggerUnsavedChanges();
                      onOpenLayoutVariables(null);
                    }}
                    hotReloadPreviewButtonProps={hotReloadPreviewButtonProps}
                  />
                )}
                {extensionsSearchDialogOpen && (
                  <ExtensionsSearchDialog
                    project={project}
                    onClose={() => setExtensionsSearchDialogOpen(false)}
                    onInstallExtension={onInstallExtension}
                    onCreateNew={() => {
                      onCreateNewExtension(project, i18n);
                    }}
                  />
                )}
                {openedExtensionShortHeader && openedExtensionName && (
                  <InstalledExtensionDetails
                    project={project}
                    onClose={() => {
                      setOpenedExtensionShortHeader(null);
                      setOpenedExtensionName(null);
                    }}
                    onOpenEventsFunctionsExtension={
                      onOpenEventsFunctionsExtension
                    }
                    extensionShortHeader={openedExtensionShortHeader}
                    extensionName={openedExtensionName}
                    onInstallExtension={onInstallExtension}
                  />
                )}
              </>
            )}
          </I18n>
        </div>
      </Background>
    );
  }
);

const arePropsEqual = (
  prevProps: Props,
  nextProps: Props
): boolean => // The component is costly to render, so avoid any re-rendering as much
  // as possible.
  // We make the assumption that no changes to the tree is made outside
  // from the component.
  // If a change is made, the component won't notice it: you have to manually
  // call forceUpdate.
  nextProps.freezeUpdate;

// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
const MemoizedProjectManager = React.memo<Props, ProjectManagerInterface>(
  ProjectManager,
  arePropsEqual
);

const ProjectManagerWithErrorBoundary = React.forwardRef<
  ProjectManagerInterface,
  Props
>((props, outerRef) => {
  const projectManagerRef = React.useRef<
    ProjectManagerInterface | null | undefined
  >(null);
  const shouldAutofocusInput = useShouldAutofocusInput();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (
        !props.freezeUpdate &&
        shouldAutofocusInput &&
        projectManagerRef.current
      ) {
        projectManagerRef.current.focusSearchBar();
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [props.freezeUpdate, shouldAutofocusInput]);

  return (
    <ErrorBoundary
      componentTitle={<Trans>Project manager</Trans>}
      scope="project-manager"
    >
      <MemoizedProjectManager
        // @ts-expect-error - TS7006 - Parameter 'ref' implicitly has an 'any' type.
        ref={(ref) => {
          projectManagerRef.current = ref;
          if (typeof outerRef === 'function') outerRef(ref);
          else if (outerRef !== null) outerRef.current = ref;
        }}
        {...props}
      />
    </ErrorBoundary>
  );
});

export default ProjectManagerWithErrorBoundary;
