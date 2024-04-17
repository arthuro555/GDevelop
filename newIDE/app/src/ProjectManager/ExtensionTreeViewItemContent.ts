import { I18n as I18nType } from '@lingui/core';

import { t } from '@lingui/macro';

import * as React from 'react';
import newNameGenerator from '../Utils/NewNameGenerator';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import { TreeViewItemContent, TreeItemProps, extensionsRootFolderId } from '.';
import { isExtensionNameTaken } from './EventFunctionExtensionNameVerifier';

const EVENTS_FUNCTIONS_EXTENSION_CLIPBOARD_KIND = 'Events Functions Extension';

export type ExtensionTreeViewItemCallbacks = {
  onDeleteEventsFunctionsExtension: (arg1: gd.EventsFunctionsExtension) => void;
  onRenameEventsFunctionsExtension: (arg1: string, arg2: string) => void;
  onOpenEventsFunctionsExtension: (arg1: string) => void;
  onReloadEventsFunctionsExtensions: () => void;
};

export type ExtensionTreeViewItemCommonProps = TreeItemProps &
  ExtensionTreeViewItemCallbacks;

export type ExtensionTreeViewItemProps = ExtensionTreeViewItemCommonProps & {
  project: gd.Project;
  onEditEventsFunctionExtensionOrSeeDetails: (
    eventsFunctionsExtension: gd.EventsFunctionsExtension
  ) => void;
};

export const getExtensionTreeViewItemId = (
  eventsFunctionsExtension: gd.EventsFunctionsExtension
): string => {
  // Pointers are used because they stay the same even when the names are
  // changed.
  return `extension-${eventsFunctionsExtension.ptr}`;
};

export class ExtensionTreeViewItemContent implements TreeViewItemContent {
  eventsFunctionsExtension: gd.EventsFunctionsExtension;
  props: ExtensionTreeViewItemProps;

  constructor(
    eventsFunctionsExtension: gd.EventsFunctionsExtension,
    props: ExtensionTreeViewItemProps
  ) {
    this.eventsFunctionsExtension = eventsFunctionsExtension;
    this.props = props;
  }

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return itemContent.getId() === extensionsRootFolderId;
  }

  getRootId(): string {
    return extensionsRootFolderId;
  }

  getName(): string | React.ReactNode {
    return this.eventsFunctionsExtension.getName();
  }

  getId(): string {
    return getExtensionTreeViewItemId(this.eventsFunctionsExtension);
  }

  getHtmlId(index: number): string | null | undefined {
    return `extension-item-${index}`;
  }

  getDataSet(): {
    [key: string]: string;
  } {
    return {
      extension: this.eventsFunctionsExtension.getName(),
    };
  }

  getThumbnail(): string | null | undefined {
    return (
      this.eventsFunctionsExtension.getIconUrl() ||
      'res/functions/extension_black.svg'
    );
  }

  onClick(): void {
    this.props.onEditEventsFunctionExtensionOrSeeDetails(
      this.eventsFunctionsExtension
    );
  }

  rename(newName: string): void {
    const oldName = this.eventsFunctionsExtension.getName();
    if (oldName === newName) {
      return;
    }
    this.props.onRenameEventsFunctionsExtension(oldName, newName);
  }

  edit(): void {
    this.props.editName(this.getId());
  }

  buildMenuTemplate(i18n: I18nType, index: number) {
    return [
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
        enabled: Clipboard.has(EVENTS_FUNCTIONS_EXTENSION_CLIPBOARD_KIND),
        click: () => this.paste(),
        accelerator: 'CmdOrCtrl+V',
      },
      {
        label: i18n._(t`Duplicate`),
        click: () => this._duplicate(),
      },
    ];
  }

  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined {
    return null;
  }

  delete(): void {
    this.props.onDeleteEventsFunctionsExtension(this.eventsFunctionsExtension);
  }

  getIndex(): number {
    return this.props.project.getEventsFunctionsExtensionPosition(
      this.eventsFunctionsExtension.getName()
    );
  }

  moveAt(destinationIndex: number): void {
    const originIndex = this.getIndex();
    if (destinationIndex !== originIndex) {
      this.props.project.moveEventsFunctionsExtension(
        originIndex,
        // When moving the item down, it must not be counted.
        destinationIndex + (destinationIndex <= originIndex ? 0 : -1)
      );
      this._onProjectItemModified();
    }
  }

  copy(): void {
    Clipboard.set(EVENTS_FUNCTIONS_EXTENSION_CLIPBOARD_KIND, {
      eventsFunctionsExtension: serializeToJSObject(
        this.eventsFunctionsExtension
      ),
      name: this.eventsFunctionsExtension.getName(),
    });
  }

  cut(): void {
    this.copy();
    this.delete();
  }

  paste(): void {
    if (!Clipboard.has(EVENTS_FUNCTIONS_EXTENSION_CLIPBOARD_KIND)) return;

    const clipboardContent = Clipboard.get(
      EVENTS_FUNCTIONS_EXTENSION_CLIPBOARD_KIND
    );
    const copiedEventsFunctionsExtension = SafeExtractor.extractObjectProperty(
      clipboardContent,
      'eventsFunctionsExtension'
    );
    const name = SafeExtractor.extractStringProperty(clipboardContent, 'name');
    if (!name || !copiedEventsFunctionsExtension) return;

    const project = this.props.project;
    const newName = newNameGenerator(name, (name) =>
      isExtensionNameTaken(name, project)
    );

    const newEventsFunctionsExtension =
      project.insertNewEventsFunctionsExtension(newName, this.getIndex() + 1);

    unserializeFromJSObject(
      newEventsFunctionsExtension,
      copiedEventsFunctionsExtension,
      'unserializeFrom',
      project
    );
    newEventsFunctionsExtension.setName(newName); // Unserialization has overwritten the name.

    this._onProjectItemModified();
    this.props.onReloadEventsFunctionsExtensions();
    this.props.editName(
      getExtensionTreeViewItemId(newEventsFunctionsExtension)
    );
  }

  _duplicate(): void {
    this.copy();
    this.paste();
  }

  _onProjectItemModified() {
    if (this.props.unsavedChanges)
      this.props.unsavedChanges.triggerUnsavedChanges();
    this.props.forceUpdate();
  }

  getRightButton(i18n: I18nType) {
    return null;
  }
}
