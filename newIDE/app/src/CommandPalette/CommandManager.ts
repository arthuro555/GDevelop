import { CommandName } from './CommandsList';
import { AlgoliaSearchHit } from '../Utils/AlgoliaSearch';
type CommandHandler = () => void;

export type SimpleCommand = {
  handler: CommandHandler;
  icon?: Node;
};

export type CommandOption = {
  handler: CommandHandler;
  text: string;
  iconSrc?: string;
};

export type CommandWithOptions = {
  generateOptions: () => Array<CommandOption>;
};

export type Command = SimpleCommand | CommandWithOptions;

export type GoToWikiCommand = {
  hit: AlgoliaSearchHit;
  handler: CommandHandler;
};

export type NamedCommand = {
  name: CommandName;
} & Command;

export type NamedCommandWithOptions = {
  name: CommandName;
} & CommandWithOptions;

export interface CommandManagerInterface {
  registerCommand: (commandName: CommandName, command: Command) => void;
  deregisterCommand: (commandName: CommandName) => void;
  getNamedCommand: (
    commandName: CommandName
  ) => NamedCommand | null | undefined;
  getAllNamedCommands: () => Array<NamedCommand>;
}

export default class CommandManager implements CommandManagerInterface {
  _commands: Partial<Record<CommandName, Command>>;

  constructor() {
    this._commands = {};
  }

  registerCommand = (commandName: CommandName, command: Command) => {
    if (this._commands[commandName])
      return console.warn(
        `Tried to register command ${commandName}, but it is already registered.`
      );
    this._commands[commandName] = command;
  };

  deregisterCommand = (commandName: CommandName) => {
    if (!this._commands[commandName])
      return console.warn(
        `Tried to deregister command ${commandName}, but it is not registered.`
      );
    delete this._commands[commandName];
  };

  getNamedCommand = (commandName: CommandName) => {
    const command = this._commands[commandName];
    if (command) return { name: commandName, ...(command as Command) };
    return null;
  };

  getAllNamedCommands = () => {
    // @ts-expect-error - TS2345 - Argument of type '(commandName: string) => { name: string; handler: CommandHandler; icon?: Node | undefined; } | { name: string; generateOptions: () => CommandOption[]; }' is not assignable to parameter of type '(value: string, index: number, array: string[]) => NamedCommand'.
    return Object.keys(this._commands).map<NamedCommand>((commandName) => {
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<CommandName, Command>>'.
      const command = this._commands[commandName];
      return { ...(command as Command), name: commandName };
    });
  };
}
