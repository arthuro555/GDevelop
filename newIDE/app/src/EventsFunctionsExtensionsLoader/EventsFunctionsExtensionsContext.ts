import * as React from 'react';
import {
  EventsFunctionsExtensionWriter,
  EventsFunctionsExtensionOpener,
} from './Storage';

export type EventsFunctionsExtensionsState = {
  eventsFunctionsExtensionsError: Error | null | undefined,
  loadProjectEventsFunctionsExtensions: (project?: gdProject | null | undefined) => Promise<void>,
  unloadProjectEventsFunctionsExtensions: (project: gdProject) => void,
  unloadProjectEventsFunctionsExtension: (project: gdProject, extensionName: string) => void,
  reloadProjectEventsFunctionsExtensions: (project?: gdProject | null | undefined) => Promise<void>,
  reloadProjectEventsFunctionsExtensionMetadata: (
    project: gdProject | null | undefined,
    extension: gdEventsFunctionsExtension,
  ) => void,
  getEventsFunctionsExtensionWriter: () => EventsFunctionsExtensionWriter | null | undefined,
  getEventsFunctionsExtensionOpener: () => EventsFunctionsExtensionOpener | null | undefined,
  ensureLoadFinished: () => Promise<void>,
  getIncludeFileHashs: () => {
    [key: string]: number
  }
};

const defaultState = {
  eventsFunctionsExtensionsError: null,
  loadProjectEventsFunctionsExtensions: () =>
    Promise.reject(new Error('Use a provider')),
  unloadProjectEventsFunctionsExtensions: () => {},
  reloadProjectEventsFunctionsExtensions: () =>
    Promise.reject(new Error('Use a provider')),
  reloadProjectEventsFunctionsExtensionMetadata: () => {
    throw new Error('Use a provider');
  },
  unloadProjectEventsFunctionsExtension: () => {},
  getEventsFunctionsExtensionWriter: () => null,
  getEventsFunctionsExtensionOpener: () => null,
  ensureLoadFinished: () => Promise.reject(new Error('Use a provider')),
  getIncludeFileHashs: () => ({}),
} as const;

const EventsFunctionsExtensionsContext = React.createContext<EventsFunctionsExtensionsState>(defaultState);

export default EventsFunctionsExtensionsContext;
