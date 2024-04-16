import * as React from 'react';
import { CommandWithOptions, SimpleCommand } from './CommandManager';
// @ts-expect-error - TS6142 - Module './CommandsContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommandPalette/CommandsContext.tsx', but '--jsx' is not set.
import CommandsContext from './CommandsContext';
import { CommandName } from './CommandsList';

/**
 * React hook for dynamically registering and deregistering a simple command
 */
export const useCommand = (
  commandName: CommandName,
  enabled: boolean,
  command: SimpleCommand
) => {
  const commandManager = React.useContext(CommandsContext);
  const { handler } = command;
  React.useEffect(
    () => {
      if (!enabled) return;
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      commandManager.registerCommand(commandName, { handler });
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      return () => commandManager.deregisterCommand(commandName);
    },
    [commandManager, commandName, enabled, handler]
  );
};

/**
 * React hook for dynamically registering and deregistering command with options
 */
export const useCommandWithOptions = (
  commandName: CommandName,
  enabled: boolean,
  command: CommandWithOptions
) => {
  const commandManager = React.useContext(CommandsContext);
  const { generateOptions } = command;
  React.useEffect(
    () => {
      if (!enabled) return;
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      commandManager.registerCommand(commandName, { generateOptions });
// @ts-expect-error - TS2571 - Object is of type 'unknown'.
      return () => commandManager.deregisterCommand(commandName);
    },
    [commandManager, commandName, enabled, generateOptions]
  );
};

/**
 * React component for using useCommand hook in
 * class components
 */
export const UseCommandHook = (props: {
  name: CommandName,
  enabled: boolean,
  command: SimpleCommand
}) => {
  useCommand(props.name, props.enabled, props.command);
  return null;
};

/**
 * React component for using useCommandWithOptions
 * hook in class components
 */
export const UseCommandWithOptionsHook = (props: {
  name: CommandName,
  enabled: boolean,
  command: CommandWithOptions
}) => {
  useCommandWithOptions(props.name, props.enabled, props.command);
  return null;
};
