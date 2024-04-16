import {useEffect} from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from './OptionalRequire';
const electron = optionalRequire('electron');
const ipc = electron ? electron.ipcRenderer : null;

const richPresenceStartTimestamp = Date.now();

const updateDiscordRichPresence = (project?: gdProject | null) => {
  if (ipc === null) return;

  const config = {
    details: project ? 'Working on:' : 'Not working on',
    state: project ? project.getName() : 'any game',
    startTimestamp: richPresenceStartTimestamp,
    largeImageKey: 'gdicon',
    largeImageText: 'GDevelop',
  } as const;

  ipc.send('update-discord-rich-presence', config);
};

export const useDiscordRichPresence = (project?: gdProject | null) => {
  useEffect(
    () => {
      updateDiscordRichPresence(project);
    },
    [project]
  );
};
