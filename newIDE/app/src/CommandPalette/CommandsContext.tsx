import * as React from 'react';
import CommandManager, { CommandManagerInterface } from './CommandManager';
import useValueWithInit from '../Utils/UseRefInitHook';

const CommandsContext = React.createContext<CommandManagerInterface>(new CommandManager());

type Props = {
  children: React.ReactNode
};

export const CommandsContextProvider = (props: Props) => {
  const commandManager = useValueWithInit<CommandManager>(() => new CommandManager());

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <CommandsContext.Provider value={commandManager}>
      {props.children}
    </CommandsContext.Provider>
  );
};

export default CommandsContext;
