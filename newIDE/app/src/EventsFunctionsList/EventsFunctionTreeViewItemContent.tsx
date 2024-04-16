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
  extensionFunctionsRootFolderId,
  extensionBehaviorsRootFolderId,
  extensionObjectsRootFolderId,
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/index.tsx', but '--jsx' is not set.
} from '.';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/VisibilityOff'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/VisibilityOff.js' implicitly has an 'any' type.
import VisibilityOff from '../UI/CustomSvgIcons/VisibilityOff';
import AsyncIcon from '@material-ui/icons/SyncAlt';

const gd: libGDevelop = global.gd;

const EVENTS_FUNCTION_CLIPBOARD_KIND = 'Events Function';

const styles = {
  tooltip: { marginRight: 5, verticalAlign: 'bottom' },
} as const;

export type EventsFunctionCreationParameters = {
  functionType: 0 | 1 | 2,
  name: string | null | undefined
};

export type EventsFunctionCallbacks = {
  onSelectEventsFunction: (
    selectedEventsFunction?: gdEventsFunction | null | undefined,
    selectedEventsBasedBehavior?: gdEventsBasedBehavior | null | undefined,
    selectedEventsBasedObject?: gdEventsBasedObject | null | undefined,
  ) => void,
  onDeleteEventsFunction: (eventsFunction: gdEventsFunction, cb: (arg1: boolean) => void) => void,
  onRenameEventsFunction: (
    eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
    eventsBasedObject: gdEventsBasedObject | null | undefined,
    eventsFunction: gdEventsFunction,
    newName: string,
    cb: (arg1: boolean) => void,
  ) => void,
  onAddEventsFunction: (
    eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
    eventsBasedObject: gdEventsBasedObject | null | undefined,
    arg3: (parameters?: EventsFunctionCreationParameters | null | undefined) => void,
  ) => void,
  onEventsFunctionAdded: (eventsFunction: gdEventsFunction) => void
};

export type EventFunctionCommonProps = (TreeItemProps) & (EventsFunctionCallbacks);

export type EventsFunctionProps = (EventFunctionCommonProps) & {
  eventsFunctionsContainer: gdEventsFunctionsContainer,
  eventsBasedBehavior?: gdEventsBasedBehavior | null | undefined,
  eventsBasedObject?: gdEventsBasedObject | null | undefined
};

export const getEventsFunctionTreeViewItemId = (eventFunction: gdEventsFunction): string => {
  // Pointers are used because they stay the same even when the names are
  // changed.
  return `function-${eventFunction.ptr}`;
};

export const canFunctionBeRenamed = (
  eventsFunction: gdEventsFunction,
  containerType: 'extension' | 'behavior' | 'object'
) => {
  const name = eventsFunction.getName();
  if (containerType === 'behavior') {
    return !gd.MetadataDeclarationHelper.isBehaviorLifecycleEventsFunction(
      name
    );
  }
  if (containerType === 'object') {
    return !gd.MetadataDeclarationHelper.isObjectLifecycleEventsFunction(name);
  }
  return !gd.MetadataDeclarationHelper.isExtensionLifecycleEventsFunction(name);
};

export class EventsFunctionTreeViewItemContent implements TreeViewItemContent {
  eventsFunction: gdEventsFunction;
  props: EventsFunctionProps;

  constructor(eventsFunction: gdEventsFunction, props: EventsFunctionProps) {
    this.eventsFunction = eventsFunction;
    this.props = props;
  }

  getEventsFunctionsContainer(): gdEventsFunctionsContainer {
    return this.props.eventsFunctionsContainer;
  }

  getEventsFunction(): gdEventsFunction | null | undefined {
    return this.eventsFunction;
  }

  getEventsBasedBehavior(): gdEventsBasedBehavior | null | undefined {
    return this.props.eventsBasedBehavior;
  }

  getEventsBasedObject(): gdEventsBasedObject | null | undefined {
    return this.props.eventsBasedObject;
  }

  isDescendantOf(itemContent: TreeViewItemContent): boolean {
    return (
      itemContent.getEventsFunction() === null &&
      (this.getEventsBasedBehavior() === itemContent.getEventsBasedBehavior() ||
        this.getEventsBasedObject() === itemContent.getEventsBasedObject() ||
        (this.getEventsBasedBehavior() &&
          itemContent.getId() === extensionBehaviorsRootFolderId) ||
        (this.getEventsBasedObject() &&
          itemContent.getId() === extensionObjectsRootFolderId) ||
        itemContent.getId() === extensionFunctionsRootFolderId)
    );
  }

  getName(): string | React.ReactNode {
    return this.eventsFunction.getName();
  }

  getId(): string {
    return getEventsFunctionTreeViewItemId(this.eventsFunction);
  }

  getHtmlId(index: number): string | null | undefined {
    return `function-item-${index}`;
  }

  getThumbnail(): string | null | undefined {
    switch (this.eventsFunction.getFunctionType()) {
      default:
        return 'res/functions/function.svg';
      case gd.EventsFunction.Action:
      case gd.EventsFunction.ActionWithOperator:
        switch (this.eventsFunction.getName()) {
          default:
            return 'res/functions/action.svg';

          case 'onSceneUnloading':
          case 'onDestroy':
            return 'res/functions/destroy.svg';

          case 'onSceneResumed':
          case 'onActivate':
            return 'res/functions/activate.svg';

          case 'onScenePaused':
          case 'onDeActivate':
            return 'res/functions/deactivate.svg';

          case 'onScenePreEvents':
          case 'onScenePostEvents':
          case 'doStepPreEvents':
          case 'doStepPostEvents':
            return 'res/functions/step.svg';

          case 'onSceneLoaded':
          case 'onFirstSceneLoaded':
          case 'onCreated':
            return 'res/functions/create.svg';

          case 'onHotReloading':
            return 'res/functions/reload.svg';
        }
      case gd.EventsFunction.Condition:
        return 'res/functions/condition.svg';
      case gd.EventsFunction.Expression:
      case gd.EventsFunction.ExpressionAndCondition:
        return 'res/functions/expression.svg';
    }
  }

  getDataset(): HTMLDataset | null | undefined {
    return null;
  }

  onSelect(): void {
    this.props.onSelectEventsFunction(
      this.eventsFunction,
      this.props.eventsBasedBehavior,
      this.props.eventsBasedObject
    );
  }

  rename(newName: string): void {
    if (this.eventsFunction.getName() === newName) return;

    this.props.onRenameEventsFunction(
      this.props.eventsBasedBehavior,
      this.props.eventsBasedObject,
      this.eventsFunction,
      newName,
// @ts-expect-error - TS7006 - Parameter 'doRename' implicitly has an 'any' type.
      doRename => {
        if (!doRename) return;
        this._onEventsFunctionModified();
      }
    );
  }

  edit(): void {
    if (this.canBeRenamed()) {
      this.props.editName(this.getId());
    }
  }

  canBeRenamed() {
    return canFunctionBeRenamed(
      this.eventsFunction,
      this.getEventsBasedBehavior()
        ? 'behavior'
        : this.getEventsBasedObject()
        ? 'object'
        : 'extension'
    );
  }

  buildMenuTemplate(i18n: I18nType, index: number) {
    return [
      {
        label: i18n._(t`Rename`),
        click: () => this.edit(),
        enabled: this.canBeRenamed(),
        accelerator: 'F2',
      },
      {
        label: this.eventsFunction.isPrivate()
          ? i18n._(t`Make public`)
          : i18n._(t`Make private`),
        click: () => this._togglePrivate(),
      },
      {
        label: this.eventsFunction.isAsync()
          ? i18n._(t`Make synchronous`)
          : i18n._(t`Make asynchronous`),
        click: () => this._toggleAsync(),
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
        enabled: Clipboard.has(EVENTS_FUNCTION_CLIPBOARD_KIND),
        click: () => this.paste(),
        accelerator: 'CmdOrCtrl+V',
      },
      {
        label: i18n._(t`Duplicate`),
        click: () => this._duplicateEventsFunction(),
      },
    ];
  }

  renderRightComponent(i18n: I18nType): React.ReactNode | null | undefined {
    const icons: Array<React.ReactElement<any>> = [];
    if (this.eventsFunction.isPrivate()) {
      icons.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          key="visibility"
          title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>This function won't be visible in the events editor.</Trans>
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
      );
    }
    if (this.eventsFunction.isAsync()) {
      icons.push(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          key="async"
          title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              This function is asynchronous - it will only allow subsequent
              events to run after calling the action "End asynchronous task"
              within the function.
            </Trans>
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AsyncIcon
            fontSize="small"
            style={{
              ...styles.tooltip,
              color: this.props.gdevelopTheme.text.color.disabled,
            }}
          />
        </Tooltip>
      );
    }
    return icons.length > 0 ? icons : null;
  }

  _togglePrivate(): void {
    this.eventsFunction.setPrivate(!this.eventsFunction.isPrivate());
    this.props.forceUpdateEditor();
  }

  _toggleAsync(): void {
    this.eventsFunction.setAsync(!this.eventsFunction.isAsync());
    this.props.forceUpdateEditor();
  }

  delete(): void {
    this._deleteEventsFunction({
      askForConfirmation: true,
    });
  }

  async _deleteEventsFunction(
    {
      askForConfirmation,
    }: {
      askForConfirmation: boolean
    },
  ): Promise<void> {
    const { eventsFunctionsContainer } = this.props;

    if (askForConfirmation) {
      const answer = await this.props.showDeleteConfirmation({
        title: t`Remove function`,
        message: t`Are you sure you want to remove this function? This can't be undone.`,
      });
      if (!answer) return;
    }

// @ts-expect-error - TS7006 - Parameter 'doRemove' implicitly has an 'any' type.
    this.props.onDeleteEventsFunction(this.eventsFunction, doRemove => {
      if (!doRemove) return;

      eventsFunctionsContainer.removeEventsFunction(
        this.eventsFunction.getName()
      );
      this._onEventsFunctionModified();
    });
  }

  getIndex(): number {
    return this.props.eventsFunctionsContainer.getEventsFunctionPosition(
      this.eventsFunction
    );
  }

  moveAt(destinationIndex: number): void {
    const originIndex = this.getIndex();
    this.props.eventsFunctionsContainer.moveEventsFunction(
      originIndex,
      // When moving the item down, it must not be counted.
      destinationIndex + (destinationIndex <= originIndex ? 0 : -1)
    );
  }

  copy(): void {
    Clipboard.set(EVENTS_FUNCTION_CLIPBOARD_KIND, {
      eventsFunction: serializeToJSObject(this.eventsFunction),
      name: this.eventsFunction.getName(),
    });
  }

  cut(): void {
    this.copy();
    this._deleteEventsFunction({ askForConfirmation: false });
  }

  paste(): void {
    if (!Clipboard.has(EVENTS_FUNCTION_CLIPBOARD_KIND)) return;

    const clipboardContent = Clipboard.get(EVENTS_FUNCTION_CLIPBOARD_KIND);
    const copiedEventsFunction = SafeExtractor.extractObjectProperty(
      clipboardContent,
      'eventsFunction'
    );
    const name = SafeExtractor.extractStringProperty(clipboardContent, 'name');
    if (!name || !copiedEventsFunction) return;

    const { project, eventsFunctionsContainer } = this.props;

    const newName = newNameGenerator(name, name =>
      eventsFunctionsContainer.hasEventsFunctionNamed(name)
    );

    const newEventsFunction = eventsFunctionsContainer.insertNewEventsFunction(
      newName,
      this.getIndex() + 1
    );

    unserializeFromJSObject(
      newEventsFunction,
      copiedEventsFunction,
      'unserializeFrom',
      project
    );
    newEventsFunction.setName(newName);
    this.props.onEventsFunctionAdded(newEventsFunction);

    this._onEventsFunctionModified();
    this.props.onSelectEventsFunction(
      newEventsFunction,
      this.props.eventsBasedBehavior,
      this.props.eventsBasedObject
    );
    this.props.editName(getEventsFunctionTreeViewItemId(newEventsFunction));
  }

  _duplicateEventsFunction(): void {
    const { eventsFunctionsContainer } = this.props;
    const newName = newNameGenerator(this.eventsFunction.getName(), name =>
      eventsFunctionsContainer.hasEventsFunctionNamed(name)
    );
    const newEventsFunction = eventsFunctionsContainer.insertEventsFunction(
      this.eventsFunction,
      this.getIndex() + 1
    );
    newEventsFunction.setName(newName);
    this.props.onEventsFunctionAdded(newEventsFunction);

    this._onEventsFunctionModified();
    this.props.onSelectEventsFunction(
      newEventsFunction,
      this.props.eventsBasedBehavior,
      this.props.eventsBasedObject
    );
    this.props.editName(getEventsFunctionTreeViewItemId(newEventsFunction));
  }

  _onEventsFunctionModified() {
    if (this.props.unsavedChanges)
      this.props.unsavedChanges.triggerUnsavedChanges();
    this.props.forceUpdate();
  }

  getRightButton(i18n: I18nType) {
    return null;
  }

  addFunctionAtSelection(): void {}
}
