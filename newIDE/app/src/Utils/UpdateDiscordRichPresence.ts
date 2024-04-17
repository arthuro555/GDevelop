import { useEffect } from 'react';

import optionalRequire from './OptionalRequire';
const electron = optionalRequire('electron') as typeof import('electron');
const ipc = electron ? electron.ipcRenderer : null;

const richPresenceStartTimestamp = Date.now();

const updateDiscordRichPresence = (project?: gd.Project | null) => {
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

export const useDiscordRichPresence = (project?: gd.Project | null) => {
  useEffect(() => {
    updateDiscordRichPresence(project);
  }, [project]);
};
