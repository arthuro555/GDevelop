// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { ToolbarGroup } from '../UI/Toolbar';
// @ts-expect-error - TS6142 - Module '../UI/ToolbarSeparator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ToolbarSeparator.tsx', but '--jsx' is not set.
import ToolbarSeparator from '../UI/ToolbarSeparator';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
import ToolbarCommands from './ToolbarCommands';
import { EventMetadata } from './EnumerateEventsMetadata';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/AddEvent'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AddEvent.js' implicitly has an 'any' type.
import AddEventIcon from '../UI/CustomSvgIcons/AddEvent';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/AddSubEvent'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AddSubEvent.js' implicitly has an 'any' type.
import AddSubEventIcon from '../UI/CustomSvgIcons/AddSubEvent';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/AddComment'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/AddComment.js' implicitly has an 'any' type.
import AddCommentIcon from '../UI/CustomSvgIcons/AddComment';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/CircledAdd'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CircledAdd.js' implicitly has an 'any' type.
import CircledAddIcon from '../UI/CustomSvgIcons/CircledAdd';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import TrashIcon from '../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Undo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Undo.js' implicitly has an 'any' type.
import UndoIcon from '../UI/CustomSvgIcons/Undo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Redo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Redo.js' implicitly has an 'any' type.
import RedoIcon from '../UI/CustomSvgIcons/Redo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ToolbarSearch'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ToolbarSearch.js' implicitly has an 'any' type.
import ToolbarSearchIcon from '../UI/CustomSvgIcons/ToolbarSearch';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/EditScene'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/EditScene.js' implicitly has an 'any' type.
import EditSceneIcon from '../UI/CustomSvgIcons/EditScene';
import { getShortcutDisplayName, useShortcutMap } from '../KeyboardShortcuts';

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
  settingsIcon?: React.ReactNode,
  moveEventsIntoNewGroup: () => void,
  canMoveEventsIntoNewGroup: boolean
};

const Toolbar = React.memo<Props>(function Toolbar({
  onAddStandardEvent,
  onAddSubEvent,
  canAddSubEvent,
  onAddCommentEvent,
  allEventsMetadata,
  onAddEvent,
  onToggleInvertedCondition,
  onToggleDisabledEvent,
  canToggleEventDisabled,
  canToggleInstructionInverted,
  onRemove,
  canRemove,
  undo,
  canUndo,
  redo,
  canRedo,
  onToggleSearchPanel,
  onOpenSettings,
  settingsIcon,
  moveEventsIntoNewGroup,
  canMoveEventsIntoNewGroup,
}: Props) {
  const shortcutMap = useShortcutMap();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ToolbarCommands
        onAddCommentEvent={onAddCommentEvent}
        onAddSubEvent={onAddSubEvent}
        canAddSubEvent={canAddSubEvent}
        onAddStandardEvent={onAddStandardEvent}
        onAddEvent={onAddEvent}
        allEventsMetadata={allEventsMetadata}
        onToggleInvertedCondition={onToggleInvertedCondition}
        onToggleDisabledEvent={onToggleDisabledEvent}
        canToggleEventDisabled={canToggleEventDisabled}
        canToggleInstructionInverted={canToggleInstructionInverted}
        onRemove={onRemove}
        canRemove={canRemove}
        undo={undo}
        canUndo={canUndo}
        redo={redo}
        canRedo={canRedo}
        onToggleSearchPanel={onToggleSearchPanel}
        onOpenSettings={onOpenSettings}
        moveEventsIntoNewGroup={moveEventsIntoNewGroup}
        canMoveEventsIntoNewGroup={canMoveEventsIntoNewGroup}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ToolbarGroup lastChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onAddStandardEvent}
          id="toolbar-add-event-button"
          tooltip={t`Add a new empty event`}
          acceleratorString={getShortcutDisplayName(
            shortcutMap['ADD_STANDARD_EVENT']
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AddEventIcon />
        </IconButton>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onAddSubEvent}
          disabled={!canAddSubEvent}
          id="toolbar-add-sub-event-button"
          tooltip={t`Add a sub-event to the selected event`}
          acceleratorString={getShortcutDisplayName(
            shortcutMap['ADD_SUBEVENT']
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AddSubEventIcon />
        </IconButton>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onAddCommentEvent}
          id="toolbar-add-comment-button"
          tooltip={t`Add a comment`}
          acceleratorString={getShortcutDisplayName(
            shortcutMap['ADD_COMMENT_EVENT']
          )}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AddCommentIcon />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ElementWithMenu
          element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton
              size="small"
              color="default"
              tooltip={t`Choose and add an event`}
              acceleratorString={getShortcutDisplayName(
                shortcutMap['CHOOSE_AND_ADD_EVENT']
              )}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CircledAddIcon />
            </IconButton>
          }
          buildMenuTemplate={() =>
            allEventsMetadata.map(metadata => {
              return {
                label: metadata.fullName,
                click: () => {
                  onAddEvent(metadata.type);
                },
              };
            })
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ToolbarSeparator />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onRemove}
          disabled={!canRemove}
          tooltip={t`Delete the selected event(s)`}
          acceleratorString={'Delete'}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TrashIcon />
        </IconButton>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={undo}
          disabled={!canUndo}
          tooltip={t`Undo the last changes`}
          acceleratorString={'CmdOrCtrl+Z'}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UndoIcon />
        </IconButton>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={redo}
          disabled={!canRedo}
          tooltip={t`Redo the last changes`}
          acceleratorString={'CmdOrCtrl+Shift+Z'}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RedoIcon />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ToolbarSeparator />

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={() => onToggleSearchPanel()}
          tooltip={t`Search in events`}
          acceleratorString={'CmdOrCtrl+F'}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ToolbarSearchIcon />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        {onOpenSettings && <ToolbarSeparator />}
        {onOpenSettings && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            size="small"
            color="default"
            onClick={onOpenSettings}
            tooltip={t`Open settings`}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {settingsIcon || <EditSceneIcon />}
          </IconButton>
        )}
      </ToolbarGroup>
    </>
  );
});

export default Toolbar;
