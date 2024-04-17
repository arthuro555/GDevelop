import * as React from 'react';

import { t, Trans } from '@lingui/macro';

import { I18n } from '@lingui/core';
import List from '@material-ui/core/List';

import Text from '../UI/Text';

import DetectShortcutDialog from './DetectShortcutDialog';

import RaisedButton from '../UI/RaisedButton';

import DismissableAlertMessage from '../UI/DismissableAlertMessage';
import { ShortcutMap } from './DefaultShortcuts';
import { getShortcutDisplayName } from './index';
import Window from '../Utils/Window';
import defaultShortcuts from '../KeyboardShortcuts/DefaultShortcuts';

import ShortcutsListRow from './ShortcutsListRow';
import commandsList, {
  CommandName,
  commandAreas,
} from '../CommandPalette/CommandsList';

import { ColumnStackLayout } from '../UI/Layout';

/**
 * Get shortcut string to be displayed after patching the default
 * shortcut with user-defined shortcut, if any.
 */
const getPatchedShortcutString = (
  defaultShortcut: string,
  userShortcut?: string
) => {
  // User shortcut can be empty string when user has removed a shortcut,
  // so we check userShortcut against null/undefined.
  return userShortcut == null ? defaultShortcut : userShortcut;
};

/**
 * Sorts all commands into an object keyed by area name, and also creates a
 * reverse mapping from shortcut string to list of commands with that shortcut.
 */
const sortCommandsIntoAreasAndGetReverseMap = (
  userShortcutMap: ShortcutMap
) => {
  const areaWiseCommands: Record<string, any> = {};
  const shortcutStringToCommands: {
    [key: string]: Array<CommandName>;
  } = {};
  Object.keys(commandsList)
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, CommandMetadata>>'.
    .filter((name) => !commandsList[name].noShortcut)
    .forEach((name) => {
      // Sort commands by area
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, CommandMetadata>>'.
      const areaName = commandsList[name].area;
      if (!areaWiseCommands[areaName]) areaWiseCommands[areaName] = [];
      areaWiseCommands[areaName].push(name);

      // Add to shortcut-command mapping
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, string>>'.
      const userShortcut = userShortcutMap[name];
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, string>>'.
      const defaultShortcut = defaultShortcuts[name] || '';
      const shortcutString = getPatchedShortcutString(
        defaultShortcut,
        userShortcut
      );
      if (shortcutString === '') return;
      shortcutStringToCommands[shortcutString] = (
        shortcutStringToCommands[shortcutString] || []
      )
        // @ts-expect-error - TS2769 - No overload matches this call.
        .concat(name);
    });

  return [areaWiseCommands, shortcutStringToCommands];
};

type Props = {
  i18n: I18n;
  userShortcutMap: ShortcutMap;
  onEdit: (commandName: CommandName, shortcut: string) => void;
  onReset: () => void;
};

const ShortcutsList = (props: Props) => {
  const [editedShortcut, setEditedShortcut] =
    React.useState<null | CommandName>(null);

  const resetAllShortcutsToDefault = () => {
    const answer = Window.showConfirmDialog(
      props.i18n._(
        t`Are you sure you want to reset all shortcuts to their default values?`
      ),
      'question'
    );
    if (answer) props.onReset();
  };

  const resetShortcut = (commandName: CommandName) => {
    // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    props.onEdit(commandName, defaultShortcuts[commandName]);
  };

  const [areaWiseCommands, shortcutStringToCommands] =
    sortCommandsIntoAreasAndGetReverseMap(props.userShortcutMap);

  const commandPaletteShortcut = getShortcutDisplayName(
    props.userShortcutMap['OPEN_COMMAND_PALETTE'] ||
      defaultShortcuts['OPEN_COMMAND_PALETTE']
  );

  return (
    <ColumnStackLayout noMargin>
      <DismissableAlertMessage
        kind="info"
        identifier="command-palette-shortcut"
      >
        <Trans>
          You can open the command palette by pressing {commandPaletteShortcut}.
        </Trans>
      </DismissableAlertMessage>
      <RaisedButton
        label={<Trans>Reset all shortcuts to default</Trans>}
        onClick={resetAllShortcutsToDefault}
        fullWidth
      />
      <List>
        {Object.keys(areaWiseCommands).map((areaName) => (
          <React.Fragment key={areaName}>
            <Text size="block-title">
              {/* @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly GENERAL: any; readonly IDE: any; readonly PROJECT: any; readonly SCENE: any; readonly EVENTS: any; }'. */}
              {props.i18n._(commandAreas[areaName])}
            </Text>
            {/* @ts-expect-error - TS7006 - Parameter 'commandName' implicitly has an 'any' type. */}
            {areaWiseCommands[areaName].map((commandName) => {
              // Get default and user-set shortcuts
              // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Partial<Record<CommandName, string>>'.
              const userShortcut = props.userShortcutMap[commandName];
              // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Partial<Record<CommandName, string>>'.
              const defaultShortcut = defaultShortcuts[commandName] || '';
              const shortcutString = getPatchedShortcutString(
                defaultShortcut,
                userShortcut
              );
              const shortcutDisplayName =
                getShortcutDisplayName(shortcutString);
              // Check if shortcut clashes with another command
              const clashingCommands = shortcutStringToCommands[shortcutString];
              const hasClash = clashingCommands && clashingCommands.length > 1;

              return (
                <ShortcutsListRow
                  i18n={props.i18n}
                  key={commandName}
                  shortcutString={shortcutDisplayName}
                  commandName={commandName}
                  isDefault={shortcutString === defaultShortcut}
                  isClashing={hasClash}
                  onEditShortcut={() => setEditedShortcut(commandName)}
                  onResetShortcut={() => resetShortcut(commandName)}
                />
              );
            })}
          </React.Fragment>
        ))}
      </List>
      {editedShortcut && (
        <DetectShortcutDialog
          // @ts-expect-error - TS2532 - Object is possibly 'undefined'.
          commandText={props.i18n._(commandsList[editedShortcut].displayText)}
          onClose={() => setEditedShortcut(null)}
          onSet={(shortcut) => {
            props.onEdit(editedShortcut, shortcut);
          }}
        />
      )}
    </ColumnStackLayout>
  );
};

export default ShortcutsList;
