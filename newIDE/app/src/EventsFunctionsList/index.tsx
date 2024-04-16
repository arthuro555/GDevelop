// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'react-virtualized'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/react-virtualized/dist/commonjs/index.js' implicitly has an 'any' type.
import { AutoSizer } from 'react-virtualized';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
import newNameGenerator from '../Utils/NewNameGenerator';
import TreeView, {
  TreeViewInterface,
  MenuButton,
// @ts-expect-error - TS6142 - Module '../UI/TreeView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TreeView/index.tsx', but '--jsx' is not set.
} from '../UI/TreeView';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
import useForceUpdate from '../Utils/UseForceUpdate';
import PreferencesContext, {
  Preferences,
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';
import { mapFor } from '../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
import KeyboardShortcuts from '../UI/KeyboardShortcuts';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';
import {
  EventsFunctionTreeViewItemContent,
  getEventsFunctionTreeViewItemId,
  canFunctionBeRenamed,
  EventFunctionCommonProps,
  EventsFunctionCallbacks,
  EventsFunctionCreationParameters,
// @ts-expect-error - TS6142 - Module './EventsFunctionTreeViewItemContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/EventsFunctionTreeViewItemContent.tsx', but '--jsx' is not set.
} from './EventsFunctionTreeViewItemContent';
import {
  EventsBasedBehaviorTreeViewItemContent,
  getEventsBasedBehaviorTreeViewItemId,
  EventsBasedBehaviorProps,
  EventsBasedBehaviorCallbacks,
// @ts-expect-error - TS6142 - Module './EventsBasedBehaviorTreeViewItemContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/EventsBasedBehaviorTreeViewItemContent.tsx', but '--jsx' is not set.
} from './EventsBasedBehaviorTreeViewItemContent';
import {
  EventsBasedObjectTreeViewItemContent,
  getObjectTreeViewItemId,
  EventsBasedObjectProps,
  EventsBasedObjectCallbacks,
// @ts-expect-error - TS6142 - Module './EventsBasedObjectTreeViewItemContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/EventsBasedObjectTreeViewItemContent.tsx', but '--jsx' is not set.
} from './EventsBasedObjectTreeViewItemContent';
import { HTMLDataset } from '../Utils/HTMLDataset';
import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { ShowConfirmDeleteDialogOptions } from '../UI/Alert/AlertContext';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import { GDevelopTheme } from '../UI/Theme';

const gd: libGDevelop = global.gd;

export const extensionObjectsRootFolderId = 'extension-objects';
export const extensionBehaviorsRootFolderId = 'extension-behaviors';
export const extensionFunctionsRootFolderId = 'extension-functions';
const extensionObjectsEmptyPlaceholderId = 'extension-objects-placeholder';
const extensionBehaviorsEmptyPlaceholderId = 'extension-behaviors-placeholder';
const extensionFunctionsEmptyPlaceholderId = 'extension-functions-placeholder';

const styles = {
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  autoSizerContainer: { flex: 1 },
  autoSizer: { width: '100%' },
} as const;

const extensionItemReactDndType = 'GD_EXTENSION_ITEM';

export interface TreeViewItemContent {
  getName(): string | React.ReactNode;
  getId(): string;
  getHtmlId(index: number): string | null | undefined;
  getThumbnail(): string | null | undefined;
  getDataset(): HTMLDataset | null | undefined;
  onSelect(): void;
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
  getEventsFunctionsContainer(): gdEventsFunctionsContainer | null | undefined;
  getEventsFunction(): gdEventsFunction | null | undefined;
  getEventsBasedBehavior(): gdEventsBasedBehavior | null | undefined;
  getEventsBasedObject(): gdEventsBasedObject | null | undefined;
  addFunctionAtSelection(): void;
}

interface TreeViewItem {
  isRoot?: boolean;
  isPlaceholder?: boolean;
  readonly content: TreeViewItemContent;
  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined;
}

export type TreeItemProps = {
  forceUpdate: () => void,
  forceUpdateList: () => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  forceUpdateEditor: () => void,
  preferences: Preferences,
  gdevelopTheme: GDevelopTheme,
  project: gdProject,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  editName: (itemId: string) => void,
  scrollToItem: (itemId: string) => void,
  showDeleteConfirmation: (options: ShowConfirmDeleteDialogOptions) => Promise<boolean>,
  selectedEventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  selectedEventsBasedObject: gdEventsBasedObject | null | undefined,
  selectedEventsFunction: gdEventsFunction | null | undefined
};

class EventsBasedObjectTreeViewItem implements TreeViewItem {
  content: EventsBasedObjectTreeViewItemContent;
  eventFunctionProps: EventFunctionCommonProps;

  constructor(
    object: gdEventsBasedObject,
    props: EventsBasedObjectProps,
    eventFunctionProps: EventFunctionCommonProps
  ) {
    this.content = new EventsBasedObjectTreeViewItemContent(object, props);
    this.eventFunctionProps = eventFunctionProps;
  }

  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
    const eventsBasedObject = this.content.eventsBasedObject;
    const eventsFunctionsContainer = eventsBasedObject.getEventsFunctions();
    const eventFunctionProps = {
      eventsBasedObject,
      eventsFunctionsContainer,
      ...this.eventFunctionProps,
    } as const;
    const functions = eventsBasedObject.getEventsFunctions();
    const functionsCount = functions.getEventsFunctionsCount();
    return functionsCount === 0
      ? [
          new PlaceHolderTreeViewItem(
            'events-object-functions-placeholder.' +
              eventsBasedObject.getName(),
            i18n._(t`Start by adding a new function.`)
          ),
        ]
      : mapFor(
          0,
          functions.getEventsFunctionsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
          i =>
            new LeafTreeViewItem(
              new EventsFunctionTreeViewItemContent(
                functions.getEventsFunctionAt(i),
                eventFunctionProps
              )
            )
        );
  }
}

class BehaviorTreeViewItem implements TreeViewItem {
  content: EventsBasedBehaviorTreeViewItemContent;
  eventFunctionProps: EventFunctionCommonProps;

  constructor(
    behavior: gdEventsBasedBehavior,
    props: EventsBasedBehaviorProps,
    eventFunctionProps: EventFunctionCommonProps
  ) {
    this.content = new EventsBasedBehaviorTreeViewItemContent(behavior, props);
    this.eventFunctionProps = eventFunctionProps;
  }

  getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
    const eventsBasedBehavior = this.content.eventsBasedBehavior;
    const eventsFunctionsContainer = eventsBasedBehavior.getEventsFunctions();
    const eventFunctionProps = {
      eventsBasedBehavior,
      eventsFunctionsContainer,
      ...this.eventFunctionProps,
    } as const;
    const functionsCount = eventsFunctionsContainer.getEventsFunctionsCount();
    return functionsCount === 0
      ? [
          new PlaceHolderTreeViewItem(
            'events-behavior-functions-placeholder.' +
              eventsBasedBehavior.getName(),
            i18n._(t`Start by adding a new function.`)
          ),
        ]
      : mapFor(
          0,
          eventsFunctionsContainer.getEventsFunctionsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
          i =>
            new LeafTreeViewItem(
              new EventsFunctionTreeViewItemContent(
                eventsFunctionsContainer.getEventsFunctionAt(i),
                eventFunctionProps
              )
            )
        );
  }
}

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
  buildMenuTemplateFunction: (i18n: I18nType, index: number) => Array<MenuItemTemplate>;
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

  getEventsFunctionsContainer(): gdEventsFunctionsContainer | null | undefined {
    return null;
  }

  getEventsFunction(): gdEventsFunction | null | undefined {
    return null;
  }

  getEventsBasedBehavior(): gdEventsBasedBehavior | null | undefined {
    return null;
  }

  getEventsBasedObject(): gdEventsBasedObject | null | undefined {
    return null;
  }

  getHtmlId(index: number): string | null | undefined {
    return null;
  }

  getThumbnail(): string | null | undefined {
    return null;
  }

  getDataset(): HTMLDataset | null | undefined {
    return null;
  }

  onSelect(): void {}

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

  addFunctionAtSelection(
    selectedEventsBasedBehavior?: gdEventsBasedBehavior | null,
    selectedEventsBasedObject?: gdEventsBasedObject | null,
    selectedEventsFunction?: gdEventsFunction | null,
  ): void {}
}

const getTreeViewItemName = (item: TreeViewItem) => item.content.getName();
const getTreeViewItemId = (item: TreeViewItem) => item.content.getId();
const getTreeViewItemHtmlId = (item: TreeViewItem, index: number) =>
  item.content.getHtmlId(index);
const getTreeViewItemChildren = (i18n: I18nType) => (item: TreeViewItem) =>
  item.getChildren(i18n);
const getTreeViewItemThumbnail = (item: TreeViewItem) =>
  item.content.getThumbnail();
const getTreeViewItemData = (item: TreeViewItem) => item.content.getDataset();
const buildMenuTemplate = (i18n: I18nType) => (
  item: TreeViewItem,
  index: number
) => item.content.buildMenuTemplate(i18n, index);
const renderTreeViewItemRightComponent = (i18n: I18nType) => (
  item: TreeViewItem
) => item.content.renderRightComponent(i18n);
const renameItem = (item: TreeViewItem, newName: string) => {
  item.content.rename(newName);
};
const editItem = (item: TreeViewItem) => {
  item.content.edit();
};
const deleteItem = (item: TreeViewItem) => {
  item.content.delete();
};
const getTreeViewItemRightButton = (i18n: I18nType) => (item: TreeViewItem) =>
  item.content.getRightButton(i18n);

export type EventsFunctionsListInterface = {
  forceUpdateList: () => void
};

type Props = {
  project: gdProject,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  unsavedChanges?: UnsavedChanges | null | undefined,
  forceUpdateEditor: () => void,
  // Objects
  selectedEventsBasedObject: gdEventsBasedObject | null | undefined
} & (EventsBasedObjectCallbacks) & {
  // Behaviors
  selectedEventsBasedBehavior: gdEventsBasedBehavior | null | undefined
} & (EventsBasedBehaviorCallbacks) & {
  // Free functions
  selectedEventsFunction: gdEventsFunction | null | undefined
} & (EventsFunctionCallbacks);

const EventsFunctionsList = React.forwardRef<Props, EventsFunctionsListInterface>((
  {
    project,
    eventsFunctionsExtension,
    unsavedChanges,
    onSelectEventsFunction,
    onDeleteEventsFunction,
    onRenameEventsFunction,
    onAddEventsFunction,
    onEventsFunctionAdded,
    onSelectEventsBasedBehavior,
    onDeleteEventsBasedBehavior,
    onRenameEventsBasedBehavior,
    onEventsBasedBehaviorRenamed,
    onEventsBasedBehaviorPasted,
    onSelectEventsBasedObject,
    onDeleteEventsBasedObject,
    onRenameEventsBasedObject,
    onEventsBasedObjectRenamed,
    selectedEventsFunction,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    forceUpdateEditor,
  }: Props,
  ref
) => {
  const [selectedItems, setSelectedItems] = React.useState<Array<TreeViewItem>>([]);

  const preferences = React.useContext(PreferencesContext);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
// @ts-expect-error - TS2339 - Property 'getShowEventBasedObjectsEditor' does not exist on type 'unknown'.
  const { getShowEventBasedObjectsEditor } = preferences;
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
  const treeViewRef = React.useRef<TreeViewInterface<TreeViewItem> | null | undefined>(null);
  const forceUpdate = useForceUpdate();
  const { isMobile } = useResponsiveWindowSize();
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'.
  const { showDeleteConfirmation } = useAlertDialog();

  const forceUpdateList = React.useCallback(
    () => {
      forceUpdate();
      if (treeViewRef.current) treeViewRef.current.forceUpdateList();
    },
    [forceUpdate]
  );

  React.useImperativeHandle(ref, () => ({
    forceUpdateList: () => {
      forceUpdate();
      if (treeViewRef.current) treeViewRef.current.forceUpdateList();
    },
  }));

  const [searchText, setSearchText] = React.useState('');

  const scrollToItem = React.useCallback((itemId: string) => {
    if (treeViewRef.current) {
      treeViewRef.current.scrollToItemFromId(itemId);
    }
  }, []);

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

  const addNewEventsFunction = React.useCallback(
    ({
      itemContent,
      eventsBasedBehavior,
      eventsBasedObject,
      index,
    }: {
      itemContent: TreeViewItemContent | null | undefined,
      eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
      eventsBasedObject: gdEventsBasedObject | null | undefined,
      index: number
    }) => {
      const eventBasedEntity = eventsBasedBehavior || eventsBasedObject;
      const eventsFunctionsContainer = eventBasedEntity
        ? eventBasedEntity.getEventsFunctions()
        : eventsFunctionsExtension;

      // Let EventsFunctionsExtensionEditor know if the function is:
      // a free function, a behavior one or an object one.
      // It shows a different dialog according to this.
      if (eventsBasedBehavior) {
        onSelectEventsBasedBehavior(eventsBasedBehavior);
      }
      if (eventsBasedObject) {
        onSelectEventsBasedObject(eventsBasedObject);
      }

      onAddEventsFunction(
        eventsBasedBehavior,
        eventsBasedObject,
        (parameters?: EventsFunctionCreationParameters | null) => {
          if (!parameters) {
            return;
          }

          const eventsFunctionName =
            parameters.name ||
            newNameGenerator('Function', name =>
              eventsFunctionsContainer.hasEventsFunctionNamed(name)
            );

          const eventsFunction = eventsFunctionsContainer.insertNewEventsFunction(
            eventsFunctionName,
            index || eventsFunctionsContainer.getEventsFunctionsCount()
          );
          eventsFunction.setFunctionType(parameters.functionType);

          if (
            eventsFunction.isCondition() &&
            !eventsFunction.isExpression()
          ) {
            gd.PropertyFunctionGenerator.generateConditionSkeleton(
              project,
              eventsFunction
            );
          }

          const functionItemId = getEventsFunctionTreeViewItemId(
            eventsFunction
          );

          if (treeViewRef.current) {
            treeViewRef.current.openItems([
              itemContent
                ? itemContent.getId()
                : extensionFunctionsRootFolderId,
            ]);
          }
          // Scroll to the new function.
          // Ideally, we'd wait for the list to be updated to scroll, but
          // to simplify the code, we just wait a few ms for a new render
          // to be done.
          setTimeout(() => {
            scrollToItem(functionItemId);
          }, 100); // A few ms is enough for a new render to be done.

          onEventsFunctionAdded(eventsFunction);
          if (unsavedChanges) {
            unsavedChanges.triggerUnsavedChanges();
          }
          forceUpdate();

          // We focus it so the user can edit the name directly.
          onSelectEventsFunction(
            eventsFunction,
            eventsBasedBehavior,
            eventsBasedObject
          );
          if (
            canFunctionBeRenamed(
              eventsFunction,
              eventsBasedBehavior
                ? 'behavior'
                : eventsBasedObject
                ? 'object'
                : 'extension'
            )
          ) {
            editName(functionItemId);
          }
        }
      );
    },
    [
      editName,
      eventsFunctionsExtension,
      forceUpdate,
      onAddEventsFunction,
      onEventsFunctionAdded,
      onSelectEventsBasedBehavior,
      onSelectEventsBasedObject,
      project,
      onSelectEventsFunction,
      scrollToItem,
      unsavedChanges,
    ]
  );

  const addNewEventsBehavior = React.useCallback(
    () => {
      const eventBasedBehaviors = eventsFunctionsExtension.getEventsBasedBehaviors();

      const name = newNameGenerator('MyBehavior', name =>
        eventBasedBehaviors.has(name)
      );
      const newEventsBasedBehavior = eventBasedBehaviors.insertNew(
        name,
        eventBasedBehaviors.getCount()
      );
      if (unsavedChanges) {
        unsavedChanges.triggerUnsavedChanges();
      }
      forceUpdate();

      const behaviorItemId = getEventsBasedBehaviorTreeViewItemId(
        newEventsBasedBehavior
      );

      if (treeViewRef.current) {
        treeViewRef.current.openItems([
          behaviorItemId,
          extensionBehaviorsRootFolderId,
        ]);
      }
      // Scroll to the new behavior.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        scrollToItem(behaviorItemId);
      }, 100); // A few ms is enough for a new render to be done.

      // We focus it so the user can edit the name directly.
      onSelectEventsBasedBehavior(newEventsBasedBehavior);
      editName(behaviorItemId);
    },
    [
      editName,
      eventsFunctionsExtension,
      forceUpdate,
      scrollToItem,
      onSelectEventsBasedBehavior,
      unsavedChanges,
    ]
  );

  const addNewEventsBasedObject = React.useCallback(
    () => {
      const eventBasedObjects = eventsFunctionsExtension.getEventsBasedObjects();

      const name = newNameGenerator('MyObject', name =>
        eventBasedObjects.has(name)
      );
      const newEventsBasedObject = eventBasedObjects.insertNew(
        name,
        eventBasedObjects.getCount()
      );
      if (unsavedChanges) {
        unsavedChanges.triggerUnsavedChanges();
      }
      forceUpdate();

      const objectItemId = getObjectTreeViewItemId(newEventsBasedObject);

      if (treeViewRef.current) {
        treeViewRef.current.openItems([
          objectItemId,
          extensionObjectsRootFolderId,
        ]);
      }
      // Scroll to the new function.
      // Ideally, we'd wait for the list to be updated to scroll, but
      // to simplify the code, we just wait a few ms for a new render
      // to be done.
      setTimeout(() => {
        scrollToItem(objectItemId);
      }, 100); // A few ms is enough for a new render to be done.

      // We focus it so the user can edit the name directly.
      onSelectEventsBasedObject(newEventsBasedObject);
      editName(objectItemId);
    },
    [
      editName,
      eventsFunctionsExtension,
      forceUpdate,
      scrollToItem,
      onSelectEventsBasedObject,
      unsavedChanges,
    ]
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
  const keyboardShortcutsRef = React.useRef<KeyboardShortcuts>(new KeyboardShortcuts({
    shortcutCallbacks: {},
  }));
  React.useEffect(
    () => {
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
    },
    [editName, selectedItems]
  );

  const eventFunctionCommonProps = React.useMemo<EventFunctionCommonProps>(() => ({
    project,
    eventsFunctionsExtension,
    unsavedChanges,
    preferences,
    forceUpdateEditor,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsFunction,
    onDeleteEventsFunction,
    onRenameEventsFunction,
    onAddEventsFunction,
    onEventsFunctionAdded,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  }), [
    project,
    eventsFunctionsExtension,
    unsavedChanges,
    preferences,
    forceUpdateEditor,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsFunction,
    onDeleteEventsFunction,
    onRenameEventsFunction,
    onAddEventsFunction,
    onEventsFunctionAdded,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  ]);

  const eventBasedBehaviors = eventsFunctionsExtension.getEventsBasedBehaviors();

  const eventBasedBehaviorProps = React.useMemo<EventsBasedBehaviorProps>(() => ({
    project,
    eventsFunctionsExtension,
    eventsBasedBehaviorsList: eventBasedBehaviors,
    unsavedChanges,
    forceUpdateEditor,
    preferences,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsBasedBehavior,
    onDeleteEventsBasedBehavior,
    onRenameEventsBasedBehavior,
    onEventsBasedBehaviorRenamed,
    onEventsBasedBehaviorPasted,
    addNewEventsFunction,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  }), [
    project,
    eventsFunctionsExtension,
    eventBasedBehaviors,
    unsavedChanges,
    forceUpdateEditor,
    preferences,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsBasedBehavior,
    onDeleteEventsBasedBehavior,
    onRenameEventsBasedBehavior,
    onEventsBasedBehaviorRenamed,
    onEventsBasedBehaviorPasted,
    addNewEventsFunction,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  ]);

  const eventBasedObjects = eventsFunctionsExtension.getEventsBasedObjects();

  const eventsBasedObjectProps = React.useMemo<EventsBasedObjectProps>(() => ({
    project,
    eventsFunctionsExtension,
    eventsBasedObjectsList: eventBasedObjects,
    unsavedChanges,
    preferences,
    forceUpdateEditor,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsBasedObject,
    onDeleteEventsBasedObject,
    onRenameEventsBasedObject,
    onEventsBasedObjectRenamed,
    addNewEventsFunction,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  }), [
    project,
    eventsFunctionsExtension,
    eventBasedObjects,
    unsavedChanges,
    preferences,
    forceUpdateEditor,
    gdevelopTheme,
    forceUpdate,
    forceUpdateList,
    showDeleteConfirmation,
    editName,
    scrollToItem,
    onSelectEventsBasedObject,
    onDeleteEventsBasedObject,
    onRenameEventsBasedObject,
    onEventsBasedObjectRenamed,
    addNewEventsFunction,
    selectedEventsBasedBehavior,
    selectedEventsBasedObject,
    selectedEventsFunction,
  ]);

  const objectTreeViewItems = mapFor(
    0,
    eventBasedObjects.size(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    i =>
      new EventsBasedObjectTreeViewItem(
        eventBasedObjects.at(i),
        eventsBasedObjectProps,
        eventFunctionCommonProps
      )
  );
  const behaviorTreeViewItems = mapFor(
    0,
    eventBasedBehaviors.size(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    i =>
      new BehaviorTreeViewItem(
        eventBasedBehaviors.at(i),
        eventBasedBehaviorProps,
        eventFunctionCommonProps
      )
  );
  const getTreeViewData = React.useCallback(
    (i18n: I18nType): Array<TreeViewItem> => {
      return [
        getShowEventBasedObjectsEditor()
          ? {
              isRoot: true,
              content: new LabelTreeViewItemContent(
                extensionObjectsRootFolderId,
                i18n._(t`Objects`),
                {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  icon: <Add />,
                  label: i18n._(t`Add an object`),
                  click: addNewEventsBasedObject,
                }
              ),
              getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
                return objectTreeViewItems.length === 0
                  ? [
                      new PlaceHolderTreeViewItem(
                        extensionObjectsEmptyPlaceholderId,
                        i18n._(t`Start by adding a new object.`)
                      ),
                    ]
                  : objectTreeViewItems;
              },
            }
          : null,
        {
          isRoot: true,
          content: new LabelTreeViewItemContent(
            extensionBehaviorsRootFolderId,
            i18n._(t`Behaviors`),
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon: <Add />,
              label: i18n._(t`Add a behavior`),
              click: addNewEventsBehavior,
            }
          ),
          getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
            return behaviorTreeViewItems.length === 0
              ? [
                  new PlaceHolderTreeViewItem(
                    extensionBehaviorsEmptyPlaceholderId,
                    i18n._(t`Start by adding a new behavior.`)
                  ),
                ]
              : behaviorTreeViewItems;
          },
        },
        {
          isRoot: true,
          content: new LabelTreeViewItemContent(
            extensionFunctionsRootFolderId,
            i18n._(t`Functions`),
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon: <Add />,
              label: i18n._(t`Add a function`),
              click: () => {
                const index =
                  !selectedEventsBasedBehavior &&
                  !selectedEventsBasedObject &&
                  selectedEventsFunction
                    ? eventsFunctionsExtension.getEventsFunctionPosition(
                        selectedEventsFunction
                      ) + 1
                    : eventsFunctionsExtension.getEventsFunctionsCount();
                addNewEventsFunction({
                  itemContent: null,
                  eventsBasedBehavior: null,
                  eventsBasedObject: null,
                  index,
                });
              },
            }
          ),
          getChildren(i18n: I18nType): Array<TreeViewItem> | null | undefined {
            if (eventsFunctionsExtension.getEventsFunctionsCount() === 0) {
              return [
                new PlaceHolderTreeViewItem(
                  extensionFunctionsEmptyPlaceholderId,
                  i18n._(t`Start by adding a new function.`)
                ),
              ];
            }
            const freeFunctionProps = {
              eventsFunctionsContainer: eventsFunctionsExtension,
              ...eventFunctionCommonProps,
            } as const;
            return mapFor(
              0,
              eventsFunctionsExtension.getEventsFunctionsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
              i =>
                new LeafTreeViewItem(
                  new EventsFunctionTreeViewItemContent(
                    eventsFunctionsExtension.getEventsFunctionAt(i),
                    freeFunctionProps
                  )
                )
            );
          },
        },
      ].filter(Boolean);
    },
    [
      getShowEventBasedObjectsEditor,
      addNewEventsBasedObject,
      addNewEventsBehavior,
      objectTreeViewItems,
      behaviorTreeViewItems,
      selectedEventsBasedBehavior,
      selectedEventsBasedObject,
      selectedEventsFunction,
      eventsFunctionsExtension,
      addNewEventsFunction,
      eventFunctionCommonProps,
    ]
  );

  const canMoveSelectionTo = React.useCallback(
    (destinationItem: TreeViewItem, where: 'before' | 'inside' | 'after') =>
      selectedItems.every(item => {
        if (item.content.getEventsFunction()) {
          // Functions from the same container
          return (
            destinationItem.content.getEventsFunction() &&
            item.content.getEventsFunctionsContainer() ===
              destinationItem.content.getEventsFunctionsContainer()
          );
        }
        // Behaviors or Objects
        return (
          !destinationItem.content.getEventsFunction() &&
          where !== 'inside' &&
          ((item.content.getEventsBasedBehavior() &&
            destinationItem.content.getEventsBasedBehavior()) ||
            (item.content.getEventsBasedObject() &&
              destinationItem.content.getEventsBasedObject()))
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
        onSelectEventsFunction(null, null, null);
      }
    },
    [selectedItems, onSelectEventsFunction]
  );

  // Force List component to be mounted again if project or objectsContainer
  // has been changed. Avoid accessing to invalid objects that could
  // crash the app.
  const listKey = project.ptr + ';' + eventsFunctionsExtension.ptr;
  const initiallyOpenedNodeIds = [
    extensionObjectsRootFolderId,
    extensionBehaviorsRootFolderId,
    extensionFunctionsRootFolderId,
// @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type.
    ...objectTreeViewItems.map(item => item.content.getId()),
// @ts-expect-error - TS7006 - Parameter 'item' implicitly has an 'any' type.
    ...behaviorTreeViewItems.map(item => item.content.getId()),
  ];

  React.useEffect(
    () => {
      // TODO Use a map from itemId to item to avoid to rebuild the item.
      if (selectedEventsFunction) {
        const eventsBasedEntity =
          selectedEventsBasedBehavior || selectedEventsBasedObject;
        const eventsFunctionsContainer = eventsBasedEntity
          ? eventsBasedEntity.getEventsFunctions()
          : eventsFunctionsExtension;
        const eventFunctionProps = {
          eventsBasedBehavior: selectedEventsBasedBehavior,
          eventsBasedObject: selectedEventsBasedObject,
          eventsFunctionsContainer,
          ...eventFunctionCommonProps,
        } as const;
        setSelectedItems([
          new LeafTreeViewItem(
            new EventsFunctionTreeViewItemContent(
              selectedEventsFunction,
              eventFunctionProps
            )
          ),
        ]);
      } else if (selectedEventsBasedBehavior) {
        setSelectedItems([
          new BehaviorTreeViewItem(
            selectedEventsBasedBehavior,
            eventBasedBehaviorProps,
            eventFunctionCommonProps
          ),
        ]);
      } else if (selectedEventsBasedObject) {
        setSelectedItems([
          new EventsBasedObjectTreeViewItem(
            selectedEventsBasedObject,
            eventsBasedObjectProps,
            eventFunctionCommonProps
          ),
        ]);
      } else {
        setSelectedItems([]);
      }
    },
    [
      eventBasedBehaviorProps,
      eventFunctionCommonProps,
      eventsBasedObjectProps,
      eventsFunctionsExtension,
      selectedEventsBasedBehavior,
      selectedEventsBasedObject,
      selectedEventsFunction,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background maxWidth>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SearchBar
              value={searchText}
              onRequestSearch={() => {}}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
              onChange={text => setSearchText(text)}
              placeholder={t`Search functions`}
            />
          </Column>
        </LineStackLayout>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={styles.listContainer}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
        onKeyDown={keyboardShortcutsRef.current.onKeyDown}
// @ts-expect-error - TS2322 - Type '(evt: KeyboardEvent) => void' is not assignable to type 'KeyboardEventHandler<HTMLDivElement>'.
        onKeyUp={keyboardShortcutsRef.current.onKeyUp}
        id="events-function-list"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
          {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={styles.autoSizerContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AutoSizer style={styles.autoSizer} disableWidth>
{ /* @ts-expect-error - TS7031 - Binding element 'height' implicitly has an 'any' type. */}
                {({ height }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
                    getItemDataset={getTreeViewItemData}
                    onEditItem={editItem}
                    onCollapseItem={onCollapseItem}
                    selectedItems={selectedItems}
// @ts-expect-error - TS7006 - Parameter 'items' implicitly has an 'any' type.
                    onSelectItems={items => {
                      const itemToSelect = items[0];
                      if (!itemToSelect) return;
                      if (itemToSelect.isRoot) return;
                      itemToSelect.content.onSelect();
                      setSelectedItems(items);
                    }}
                    onRenameItem={renameItem}
                    buildMenuTemplate={buildMenuTemplate(i18n)}
                    getItemRightButton={getTreeViewItemRightButton(i18n)}
                    renderRightComponent={renderTreeViewItemRightComponent(
                      i18n
                    )}
// @ts-expect-error - TS7006 - Parameter 'destinationItem' implicitly has an 'any' type. | TS7006 - Parameter 'where' implicitly has an 'any' type.
                    onMoveSelectionToItem={(destinationItem, where) =>
                      moveSelectionTo(i18n, destinationItem, where)
                    }
                    canMoveSelectionToItem={canMoveSelectionTo}
                    reactDndType={extensionItemReactDndType}
                    initiallyOpenedNodeIds={initiallyOpenedNodeIds}
                    forceDefaultDraggingPreview
                    shouldHideMenuIcon={() => true}
                  />
                )}
              </AutoSizer>
            </div>
          )}
        </I18n>
      </div>
    </Background>
  );
});

const arePropsEqual = (prevProps: Props, nextProps: Props): boolean => // The component is costly to render, so avoid any re-rendering as much
// as possible.
// We make the assumption that no changes to the tree is made outside
// from the component.
// If a change is made, the component won't notice it: you have to manually
// call forceUpdate.
prevProps.selectedEventsFunction === nextProps.selectedEventsFunction &&
prevProps.project === nextProps.project &&
prevProps.eventsFunctionsExtension === nextProps.eventsFunctionsExtension;

// @ts-expect-error - TS2558 - Expected 1 type arguments, but got 2.
const MemoizedObjectsList = React.memo<Props, EventsFunctionsListInterface>(EventsFunctionsList, arePropsEqual);

const EventsFunctionsListWithErrorBoundary = React.forwardRef<Props, EventsFunctionsListInterface>((props, ref) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Objects list</Trans>}
    scope="scene-editor-objects-list"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <MemoizedObjectsList ref={ref} {...props} />
  </ErrorBoundary>
));

export default EventsFunctionsListWithErrorBoundary;
