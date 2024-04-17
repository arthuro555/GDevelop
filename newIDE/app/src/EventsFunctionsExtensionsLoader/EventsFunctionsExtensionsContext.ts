import * as React from 'react';
import {
  EventsFunctionsExtensionWriter,
  EventsFunctionsExtensionOpener,
} from './Storage';

export type EventsFunctionsExtensionsState = {
  eventsFunctionsExtensionsError: Error | null | undefined;
  loadProjectEventsFunctionsExtensions: (
    project?: gd.Project | null | undefined
  ) => Promise<void>;
  unloadProjectEventsFunctionsExtensions: (project: gd.Project) => void;
  unloadProjectEventsFunctionsExtension: (
    project: gd.Project,
    extensionName: string
  ) => void;
  reloadProjectEventsFunctionsExtensions: (
    project?: gd.Project | null | undefined
  ) => Promise<void>;
  reloadProjectEventsFunctionsExtensionMetadata: (
    project: gd.Project | null | undefined,
    extension: gd.EventsFunctionsExtension
  ) => void;
  getEventsFunctionsExtensionWriter: () =>
    | EventsFunctionsExtensionWriter
    | null
    | undefined;
  getEventsFunctionsExtensionOpener: () =>
    | EventsFunctionsExtensionOpener
    | null
    | undefined;
  ensureLoadFinished: () => Promise<void>;
  getIncludeFileHashs: () => {
    [key: string]: number;
  };
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

const EventsFunctionsExtensionsContext =
  React.createContext<EventsFunctionsExtensionsState>(defaultState);

export default EventsFunctionsExtensionsContext;
