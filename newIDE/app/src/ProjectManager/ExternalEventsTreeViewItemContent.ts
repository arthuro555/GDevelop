import { I18n as I18nType } from '@lingui/core';

import { t } from '@lingui/macro';

import * as React from 'react';
import newNameGenerator from '../Utils/NewNameGenerator';
import Clipboard, { SafeExtractor } from '../Utils/Clipboard';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../Utils/Serializer';
import {
  TreeViewItemContent,
  TreeItemProps,
  externalEventsRootFolderId,
} from '.';

const EXTERNAL_EVENTS_CLIPBOARD_KIND = 'External events';

export type ExternalEventsTreeViewItemCallbacks = {
  onDeleteExternalEvents: (arg1: gd.ExternalEvents) => void;
  onRenameExternalEvents: (arg1: string, arg2: string) => void;
  onOpenExternalEvents: (arg1: string) => void;
};

export type ExternalEventsTreeViewItemCommonProps = TreeItemProps &
  ExternalEventsTreeViewItemCallbacks;

export type ExternalEventsTreeViewItemProps =
  ExternalEventsTreeViewItemCommonProps & {
    project: gd.Project;
  };

export const getExternalEventsTreeViewItemId = (
  externalEvents: gd.ExternalEvents
): string => {
  // Pointers are used because they stay the same even when the names are
  // changed.
  return `external-events-${externalEvents.ptr}`;
};

export class ExternalEventsTreeViewItemContent implements TreeViewItemContent {
  externalEvents: gd.ExternalEvents;
  props: ExternalEventsTreeViewItemProps;

  constructor(
    externalEvents: gd.ExternalEvents,
    props: ExternalEventsTreeViewItemProps
  ) {
    this.externalEvents = externalEvents;
    this.props = props;
  }

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return itemContent.getId() === externalEventsRootFolderId;
  }

  getRootId(): string {
    return externalEventsRootFolderId;
  }

  getName(): string | React.ReactNode {
    return this.externalEvents.getName();
  }

  getId(): string {
    return getExternalEventsTreeViewItemId(this.externalEvents);
  }

  getHtmlId(index: number): string | null | undefined {
    return `external-events-item-${index}`;
  }

  getDataSet(): {
    [key: string]: string;
  } {
    return {
      'external-events': this.externalEvents.getName(),
    };
  }

  getThumbnail(): string | null | undefined {
    return 'res/icons_default/external_events_black.svg';
  }

  onClick(): void {
    this.props.onOpenExternalEvents(this.externalEvents.getName());
  }

  rename(newName: string): void {
    const oldName = this.externalEvents.getName();
    if (oldName === newName) {
      return;
    }
    this.props.onRenameExternalEvents(oldName, newName);
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
        enabled: Clipboard.has(EXTERNAL_EVENTS_CLIPBOARD_KIND),
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
    this.props.onDeleteExternalEvents(this.externalEvents);
  }

  getIndex(): number {
    return this.props.project.getExternalEventsPosition(
      this.externalEvents.getName()
    );
  }

  moveAt(destinationIndex: number): void {
    const originIndex = this.getIndex();
    if (destinationIndex !== originIndex) {
      this.props.project.moveExternalEvents(
        originIndex,
        // When moving the item down, it must not be counted.
        destinationIndex + (destinationIndex <= originIndex ? 0 : -1)
      );
      this._onProjectItemModified();
    }
  }

  copy(): void {
    Clipboard.set(EXTERNAL_EVENTS_CLIPBOARD_KIND, {
      externalEvents: serializeToJSObject(this.externalEvents),
      name: this.externalEvents.getName(),
    });
  }

  cut(): void {
    this.copy();
    this.delete();
  }

  paste(): void {
    if (!Clipboard.has(EXTERNAL_EVENTS_CLIPBOARD_KIND)) return;

    const clipboardContent = Clipboard.get(EXTERNAL_EVENTS_CLIPBOARD_KIND);
    const copiedExternalEvents = SafeExtractor.extractObjectProperty(
      clipboardContent,
      'externalEvents'
    );
    const name = SafeExtractor.extractStringProperty(clipboardContent, 'name');
    if (!name || !copiedExternalEvents) return;

    const project = this.props.project;
    const newName = newNameGenerator(name, (name) =>
      project.hasExternalEventsNamed(name)
    );

    const newExternalEvents = project.insertNewExternalEvents(
      newName,
      this.getIndex() + 1
    );

    unserializeFromJSObject(
      newExternalEvents,
      copiedExternalEvents,
      'unserializeFrom',
      project
    );
    // Unserialization has overwritten the name.
    newExternalEvents.setName(newName);

    this._onProjectItemModified();
    this.props.editName(getExternalEventsTreeViewItemId(newExternalEvents));
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
