import * as React from 'react';
import {
  useCommand,
  useCommandWithOptions,
} from '../CommandPalette/CommandHooks';
import { EventMetadata } from './EnumerateEventsMetadata';

type Props = {
  onAddStandardEvent: () => void,
  onAddSubEvent: () => void,
  canAddSubEvent: boolean,
  onAddCommentEvent: () => void,
  allEventsMetadata: Array<EventMetadata>,
  onAddEvent: (eventType: string) => Array<gdBaseEvent>,
  onToggleInvertedCondition: () => void,
  onToggleDisabledEvent: () => void,
  canToggleEventDisabled: boolean,
  canToggleInstructionInverted: boolean,
  onRemove: () => void,
  canRemove: boolean,
  undo: () => void,
  canUndo: boolean,
  redo: () => void,
  canRedo: boolean,
  onToggleSearchPanel: () => void,
  onOpenSettings?: () => void | null | undefined,
  moveEventsIntoNewGroup: () => void,
  canMoveEventsIntoNewGroup: boolean
};

const ToolbarCommands = (props: Props) => {
  const { onAddEvent } = props;

  useCommand('ADD_STANDARD_EVENT', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onAddStandardEvent,
  });

  useCommand('ADD_SUBEVENT', props.canAddSubEvent, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onAddSubEvent,
  });

  useCommand('ADD_COMMENT_EVENT', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onAddCommentEvent,
  });

  useCommand('TOGGLE_EVENT_DISABLED', props.canToggleEventDisabled, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onToggleDisabledEvent,
  });

  useCommand('TOGGLE_CONDITION_INVERTED', props.canToggleInstructionInverted, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onToggleInvertedCondition,
  });

  useCommandWithOptions('CHOOSE_AND_ADD_EVENT', true, {
// @ts-expect-error - TS2322 - Type '() => { text: string; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        props.allEventsMetadata.map(metadata => ({
          text: metadata.fullName,
          handler: () => {
            onAddEvent(metadata.type);
          },
        })),
      [props.allEventsMetadata, onAddEvent]
    ),
  });

  useCommand('MOVE_EVENTS_IN_NEW_GROUP', props.canMoveEventsIntoNewGroup, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.moveEventsIntoNewGroup,
  });

  useCommand('DELETE_SELECTION', props.canRemove, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onRemove,
  });

  useCommand('EVENTS_EDITOR_UNDO', props.canUndo, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.undo,
  });

  useCommand('EVENTS_EDITOR_REDO', props.canRedo, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.redo,
  });

  useCommand('SEARCH_EVENTS', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onToggleSearchPanel,
  });

  useCommand('OPEN_EXTENSION_SETTINGS', !!props.onOpenSettings, {
// @ts-expect-error - TS2322 - Type '() => void | null | undefined' is not assignable to type 'CommandHandler'.
    handler: props.onOpenSettings || (() => {}),
  });

  return null;
};

export default ToolbarCommands;
