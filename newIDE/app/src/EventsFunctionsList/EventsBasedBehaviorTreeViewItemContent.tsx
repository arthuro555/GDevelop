// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

import * as React from 'react';
import newNameGenerator from '../Utils/NewNameGenerator';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import { HTMLDataset } from '../Utils/HTMLDataset';
import {
  TreeViewItemContent,
  TreeItemProps,
  extensionBehaviorsRootFolderId,
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/index.tsx', but '--jsx' is not set.
} from '.';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOff from '../UI/CustomSvgIcons/VisibilityOff';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../UI/CustomSvgIcons/Add';

const EVENTS_BASED_BEHAVIOR_CLIPBOARD_KIND = 'Events Based Behavior';

const styles = {
  tooltip: { marginRight: 5, verticalAlign: 'bottom' },
} as const;

export const getEventsBasedBehaviorTreeViewItemId = (eventsBasedBehavior: gdEventsBasedBehavior): string => {
  // Pointers are used because they stay the same even when the names are
  // changed.
  return 'behavior-' + eventsBasedBehavior.ptr;
};

export type EventsBasedBehaviorCallbacks = {
  onSelectEventsBasedBehavior: (eventsBasedBehavior?: gdEventsBasedBehavior | null | undefined) => void,
  onDeleteEventsBasedBehavior: (eventsBasedBehavior: gdEventsBasedBehavior, cb: (arg1: boolean) => void) => void,
  onRenameEventsBasedBehavior: (
    eventsBasedBehavior: gdEventsBasedBehavior,
    newName: string,
    cb: (arg1: boolean) => void,
  ) => void,
  onEventsBasedBehaviorRenamed: (eventsBasedBehavior: gdEventsBasedBehavior) => void,
  onEventsBasedBehaviorPasted: (eventsBasedBehavior: gdEventsBasedBehavior, sourceExtensionName: string) => void
};

export type EventsBasedBehaviorProps = (TreeItemProps) & (EventsBasedBehaviorCallbacks) & {
  addNewEventsFunction: (
    arg1: {
      itemContent: TreeViewItemContent | null | undefined,
      eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
      eventsBasedObject: gdEventsBasedObject | null | undefined,
      index: number
    },
  ) => void,
  eventsBasedBehaviorsList: gdEventsBasedBehaviorsList
};

export class EventsBasedBehaviorTreeViewItemContent
  implements TreeViewItemContent {
  eventsBasedBehavior: gdEventsBasedBehavior;
  props: EventsBasedBehaviorProps;

  constructor(
    eventsBasedBehavior: gdEventsBasedBehavior,
    props: EventsBasedBehaviorProps
  ) {
    this.eventsBasedBehavior = eventsBasedBehavior;
    this.props = props;
  }

  getEventsFunctionsContainer(): gdEventsFunctionsContainer {
    return this.eventsBasedBehavior.getEventsFunctions();
  }

  getEventsFunction(): gdEventsFunction | null | undefined {
    return null;
  }

  getEventsBasedBehavior(): gdEventsBasedBehavior | null | undefined {
    return this.eventsBasedBehavior;
  }

  getEventsBasedObject(): gdEventsBasedObject | null | undefined {
    return null;
  }

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return itemContent.getId() === extensionBehaviorsRootFolderId;
  }

  getName(): string | React.ReactNode {
    return this.eventsBasedBehavior.getName();
  }

  getId(): string {
    return getEventsBasedBehaviorTreeViewItemId(this.eventsBasedBehavior);
  }

  getHtmlId(index: number): string | null | undefined {
    return `behavior-item-${index}`;
  }

  getThumbnail(): string | null | undefined {
    return 'res/functions/behavior_black.svg';
  }

  getDataset(): HTMLDataset | null | undefined {
    return null;
  }

  onSelect(): void {
    this.props.onSelectEventsBasedBehavior(this.eventsBasedBehavior);
  }

  rename(newName: string): void {
    if (this.eventsBasedBehavior.getName() === newName) return;

    this.props.onRenameEventsBasedBehavior(
      this.eventsBasedBehavior,
      newName,
// @ts-expect-error - TS7006 - Parameter 'doRename' implicitly has an 'any' type.
      doRename => {
        if (!doRename) return;

        this._onEventsBasedBehaviorModified();
        this.props.onEventsBasedBehaviorRenamed(this.eventsBasedBehavior);
      }
    );
  }

  edit(): void {
    this.props.editName(this.getId());
  }

  buildMenuTemplate(i18n: I18nType, index: number) {
    return [
      {
        label: i18n._(t`Add a function`),
        click: () => this.addFunctionAtSelection(),
      },
      {
        type: 'separator',
      },
      {
        label: i18n._(t`Rename`),
        click: () => this.edit(),
        accelerator: 'F2',
      },
      {
        label: i18n._(t`Delete`),
        click: () => this.delete(),
        accelerator: 'Backspace',
      },
      {
        label: this.eventsBasedBehavior.isPrivate()
          ? i18n._(t`Make public`)
          : i18n._(t`Make private`),
        click: () => this._togglePrivate(),
      },
      {
        type: 'separator',
      },
      {
        label: i18n._(t`Copy`),
        click: () => this.copy(),
        accelerator: 'CmdOrCtrl+C',
      },
      {
        label: i18n._(t`Cut`),
        click: () => this.cut(),
        accelerator: 'CmdOrCtrl+X',
      },
      {
        label: i18n._(t`Paste`),
        enabled: Clipboard.has(EVENTS_BASED_BEHAVIOR_CLIPBOARD_KIND),
        click: () => this.paste(),
        accelerator: 'CmdOrCtrl+V',
      },
    ];
  }

  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined {
    return this.eventsBasedBehavior.isPrivate() ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Tooltip
        title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>This behavior won't be visible in the events editor.</Trans>
        }
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <VisibilityOff
          fontSize="small"
          style={{
            ...styles.tooltip,
            color: this.props.gdevelopTheme.text.color.disabled,
          }}
        />
      </Tooltip>
    ) : null;
  }

  delete(): void {
    this._deleteEventsBasedBehavior({
      askForConfirmation: true,
    });
  }

  async _deleteEventsBasedBehavior(
    {
      askForConfirmation,
    }: {
      askForConfirmation: boolean
    },
  ): Promise<void> {
    const { eventsBasedBehaviorsList } = this.props;

    if (askForConfirmation) {
      const answer = await this.props.showDeleteConfirmation({
        title: t`Remove behavior`,
        message: t`Are you sure you want to remove this behavior? This can't be undone.`,
      });
      if (!answer) return;
    }

    this.props.onDeleteEventsBasedBehavior(
      this.eventsBasedBehavior,
// @ts-expect-error - TS7006 - Parameter 'doRemove' implicitly has an 'any' type.
      doRemove => {
        if (!doRemove) return;

        eventsBasedBehaviorsList.remove(this.eventsBasedBehavior.getName());
        this._onEventsBasedBehaviorModified();
      }
    );
  }

  _togglePrivate(): void {
    this.eventsBasedBehavior.setPrivate(!this.eventsBasedBehavior.isPrivate());
    this.props.forceUpdateEditor();
  }

  getIndex(): number {
    return this.props.eventsBasedBehaviorsList.getPosition(
      this.eventsBasedBehavior
    );
  }

  moveAt(destinationIndex: number): void {
    const originIndex = this.getIndex();
    this.props.eventsBasedBehaviorsList.move(
      originIndex,
      // When moving the item down, it must not be counted.
      destinationIndex + (destinationIndex <= originIndex ? 0 : -1)
    );
  }

  copy(): void {
    Clipboard.set(EVENTS_BASED_BEHAVIOR_CLIPBOARD_KIND, {
      eventsBasedBehavior: serializeToJSObject(this.eventsBasedBehavior),
      name: this.eventsBasedBehavior.getName(),
      extensionName: this.props.eventsFunctionsExtension.getName(),
    });
  }

  cut(): void {
    this.copy();
    this._deleteEventsBasedBehavior({
      askForConfirmation: false,
    });
  }

  paste(): void {
    if (!Clipboard.has(EVENTS_BASED_BEHAVIOR_CLIPBOARD_KIND)) return;

    const clipboardContent = Clipboard.get(
      EVENTS_BASED_BEHAVIOR_CLIPBOARD_KIND
    );
    const copiedEventsBasedBehavior = SafeExtractor.extractObjectProperty(
      clipboardContent,
      'eventsBasedBehavior'
    );
    const name = SafeExtractor.extractStringProperty(clipboardContent, 'name');
    if (!name || !copiedEventsBasedBehavior) return;

    const { project, eventsBasedBehaviorsList } = this.props;

    const newName = newNameGenerator(name, name =>
      eventsBasedBehaviorsList.has(name)
    );

    const newEventsBasedBehavior = eventsBasedBehaviorsList.insertNew(
      newName,
      this.getIndex() + 1
    );

    unserializeFromJSObject(
      newEventsBasedBehavior,
      copiedEventsBasedBehavior,
      'unserializeFrom',
      project
    );
    newEventsBasedBehavior.setName(newName);

    const sourceExtensionName = SafeExtractor.extractStringProperty(
      clipboardContent,
      'extensionName'
    );
    if (sourceExtensionName) {
      this.props.onEventsBasedBehaviorPasted(
        newEventsBasedBehavior,
        sourceExtensionName
      );
    }

    this._onEventsBasedBehaviorModified();
    this.props.onSelectEventsBasedBehavior(newEventsBasedBehavior);
    this.props.editName(
      getEventsBasedBehaviorTreeViewItemId(newEventsBasedBehavior)
    );
  }

  _addNewEventsBasedBehavior(): void {
    const { eventsBasedBehaviorsList } = this.props;

    const name = newNameGenerator('MyBehavior', name =>
      eventsBasedBehaviorsList.has(name)
    );
    const newEventsBasedBehavior = eventsBasedBehaviorsList.insertNew(
      name,
      eventsBasedBehaviorsList.getCount()
    );
    this._onEventsBasedBehaviorModified();

    const newEventsBasedBehaviorId = getEventsBasedBehaviorTreeViewItemId(
      newEventsBasedBehavior
    );
    // Scroll to the new behavior.
    // Ideally, we'd wait for the list to be updated to scroll, but
    // to simplify the code, we just wait a few ms for a new render
    // to be done.
    setTimeout(() => {
      this.props.scrollToItem(newEventsBasedBehaviorId);
    }, 100); // A few ms is enough for a new render to be done.

    // We focus it so the user can edit the name directly.
    this.props.onSelectEventsBasedBehavior(newEventsBasedBehavior);
    this.props.editName(newEventsBasedBehaviorId);
  }

  _onEventsBasedBehaviorModified(): void {
    if (this.props.unsavedChanges)
      this.props.unsavedChanges.triggerUnsavedChanges();
    this.props.forceUpdate();
  }

  getRightButton(i18n: I18nType) {
    return {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      icon: <Add />,
      label: i18n._(t`Add a function`),
      click: () => this.addFunctionAtSelection(),
    };
  }

  addFunctionAtSelection(): void {
    const { selectedEventsFunction, selectedEventsBasedBehavior } = this.props;
    const eventsFunctionsContainer = this.eventsBasedBehavior.getEventsFunctions();
    // When the selected item is inside the behavior, the new function is
    // added below it.
    const index =
      selectedEventsBasedBehavior === this.eventsBasedBehavior &&
      selectedEventsFunction
        ? eventsFunctionsContainer.getEventsFunctionPosition(
            selectedEventsFunction
          ) + 1
        : eventsFunctionsContainer.getEventsFunctionsCount();
    this.props.addNewEventsFunction({
      itemContent: this,
      eventsBasedBehavior: this.eventsBasedBehavior,
      eventsBasedObject: null,
      index,
    });
  }
}
