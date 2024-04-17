import * as React from 'react';
import {
  CommandManagerInterface,
  Command,
  NamedCommand,
} from './CommandManager';
import { CommandName } from './CommandsList';

import CommandsContext from './CommandsContext';
import useValueWithInit from '../Utils/UseRefInitHook';

class ScopedCommandManager implements CommandManagerInterface {
  _commands: Partial<Record<CommandName, Command>>;
  _centralManager: CommandManagerInterface;
  _isActive: boolean;

  constructor(centralCommandManager: any) {
    this._commands = {};
    this._isActive = false;
    this._centralManager = centralCommandManager;
  }

  setActive = (active: boolean) => {
    this._isActive = active;
  };

  registerCommand = (commandName: CommandName, command: Command) => {
    this._commands[commandName] = command;
    if (this._isActive)
      this._centralManager.registerCommand(commandName, command);
  };

  deregisterCommand = (commandName: CommandName) => {
    delete this._commands[commandName];
    if (this._isActive) this._centralManager.deregisterCommand(commandName);
  };

  registerAllCommandsToCentralManager = () => {
    Object.keys(this._commands).forEach((commandName) => {
      this._centralManager.registerCommand(
        // @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'CommandName'.
        commandName,
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, Command>>'.
        this._commands[commandName]
      );
    });
  };

  deregisterAllCommandsFromCentralManager = () => {
    Object.keys(this._commands).forEach((commandName) => {
      // @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'CommandName'.
      this._centralManager.deregisterCommand(commandName);
    });
  };

  getAllNamedCommands = () => {
    return Object.keys(this._commands).map<NamedCommand>((commandName) => {
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, Command>>'.
      const cmd = this._commands[commandName];
      return { ...cmd, name: commandName };
    });
  };

  getNamedCommand = (commandName: CommandName) => {
    const command = this._commands[commandName];
    if (command) return { name: commandName, ...(command as Command) };
    return this._centralManager.getNamedCommand(commandName);
  };
}

type Props = {
  children: React.ReactNode;
  active: boolean;
};

const CommandsContextScopedProvider = (props: Props) => {
  const centralManager = React.useContext(CommandsContext);
  const scopedManager = useValueWithInit(
    () => new ScopedCommandManager(centralManager)
  );

  React.useEffect(() => {
    if (!props.active) return;
    scopedManager.setActive(true);
    scopedManager.registerAllCommandsToCentralManager();
    return () => {
      scopedManager.setActive(false);
      scopedManager.deregisterAllCommandsFromCentralManager();
    };
  }, [props.active, scopedManager]);

  return (
    <CommandsContext.Provider value={scopedManager}>
      {props.children}
    </CommandsContext.Provider>
  );
};

export default CommandsContextScopedProvider;
