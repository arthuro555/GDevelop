import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/core';
import List from '@material-ui/core/List';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './DetectShortcutDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/KeyboardShortcuts/DetectShortcutDialog.tsx', but '--jsx' is not set.
import DetectShortcutDialog from './DetectShortcutDialog';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
import { ShortcutMap } from './DefaultShortcuts';
import { getShortcutDisplayName } from './index';
import Window from '../Utils/Window';
import defaultShortcuts from '../KeyboardShortcuts/DefaultShortcuts';
// @ts-expect-error - TS6142 - Module './ShortcutsListRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/KeyboardShortcuts/ShortcutsListRow.tsx', but '--jsx' is not set.
import ShortcutsListRow from './ShortcutsListRow';
import commandsList, {
  CommandName,
  commandAreas,
} from '../CommandPalette/CommandsList';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
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
    [key: string]: Array<CommandName>
  } = {};
  Object.keys(commandsList)
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, CommandMetadata>>'.
    .filter(name => !commandsList[name].noShortcut)
    .forEach(name => {
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
// @ts-expect-error - TS2769 - No overload matches this call.
      ).concat(name);
    });

  return [areaWiseCommands, shortcutStringToCommands];
};

type Props = {
  i18n: I18n,
  userShortcutMap: ShortcutMap,
  onEdit: (commandName: CommandName, shortcut: string) => void,
  onReset: () => void
};

const ShortcutsList = (props: Props) => {
  const [
    editedShortcut,
    setEditedShortcut,
  ] = React.useState<null | CommandName>(null);

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

  const [
    areaWiseCommands,
    shortcutStringToCommands,
  ] = sortCommandsIntoAreasAndGetReverseMap(props.userShortcutMap);

  const commandPaletteShortcut = getShortcutDisplayName(
    props.userShortcutMap['OPEN_COMMAND_PALETTE'] ||
      defaultShortcuts['OPEN_COMMAND_PALETTE']
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DismissableAlertMessage
        kind="info"
        identifier="command-palette-shortcut"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You can open the command palette by pressing {commandPaletteShortcut}.
        </Trans>
      </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Reset all shortcuts to default</Trans>}
        onClick={resetAllShortcutsToDefault}
        fullWidth
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <List>
        {Object.keys(areaWiseCommands).map(areaName => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment key={areaName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">
{ /* @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly GENERAL: any; readonly IDE: any; readonly PROJECT: any; readonly SCENE: any; readonly EVENTS: any; }'. */}
              {props.i18n._(commandAreas[areaName])}
            </Text>
{ /* @ts-expect-error - TS7006 - Parameter 'commandName' implicitly has an 'any' type. */}
            {areaWiseCommands[areaName].map(commandName => {
              // Get default and user-set shortcuts
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Partial<Record<CommandName, string>>'.
              const userShortcut = props.userShortcutMap[commandName];
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Partial<Record<CommandName, string>>'.
              const defaultShortcut = defaultShortcuts[commandName] || '';
              const shortcutString = getPatchedShortcutString(
                defaultShortcut,
                userShortcut
              );
              const shortcutDisplayName = getShortcutDisplayName(
                shortcutString
              );
              // Check if shortcut clashes with another command
              const clashingCommands = shortcutStringToCommands[shortcutString];
              const hasClash = clashingCommands && clashingCommands.length > 1;

              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DetectShortcutDialog
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
          commandText={props.i18n._(commandsList[editedShortcut].displayText)}
          onClose={() => setEditedShortcut(null)}
// @ts-expect-error - TS7006 - Parameter 'shortcut' implicitly has an 'any' type.
          onSet={shortcut => {
            props.onEdit(editedShortcut, shortcut);
          }}
        />
      )}
    </ColumnStackLayout>
  );
};

export default ShortcutsList;
