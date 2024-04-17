import * as React from 'react';
import EventsFunctionsExtensionsContext, {
  EventsFunctionsExtensionsState,
} from './EventsFunctionsExtensionsContext';
import {
  loadProjectEventsFunctionsExtensions,
  IncludeFileContent,
  EventsFunctionCodeWriterCallbacks,
  EventsFunctionCodeWriter,
  unloadProjectEventsFunctionsExtensions,
  unloadProjectEventsFunctionsExtension,
  reloadProjectEventsFunctionsExtensionMetadata,
} from '.';
import {
  EventsFunctionsExtensionWriter,
  EventsFunctionsExtensionOpener,
} from './Storage';
import { showErrorBox } from '../UI/Messages/MessageBox';

import { t } from '@lingui/macro';

import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'xxhashjs'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/xxhashjs/lib/index.js' implicitly has an 'any' type.
import xxhashjs from 'xxhashjs';

type Props = {
  children: React.ReactNode;
  i18n: I18nType;
  makeEventsFunctionCodeWriter: (
    arg1: EventsFunctionCodeWriterCallbacks
  ) => EventsFunctionCodeWriter | null | undefined;
  eventsFunctionsExtensionWriter:
    | EventsFunctionsExtensionWriter
    | null
    | undefined;
  eventsFunctionsExtensionOpener:
    | EventsFunctionsExtensionOpener
    | null
    | undefined;
};

type State = EventsFunctionsExtensionsState;

/**
 * Allow children components to request the loading (or unloading) of
 * the events functions extensions of the project.
 * Useful when dealing with events functions extensions (new extension created,
 * removed, pasted, installed, etc...).
 */
export default class EventsFunctionsExtensionsProvider extends React.Component<
  Props,
  State
> {
  _eventsFunctionCodeWriter: EventsFunctionCodeWriter | null | undefined =
    this.props.makeEventsFunctionCodeWriter({
      onWriteFile: this._onWriteFile.bind(this),
    });
  _includeFileHashs: {
    [key: string]: number;
  } = {};
  _lastLoadPromise: Promise<undefined> | null | undefined = null;
  state = {
    eventsFunctionsExtensionsError: null,
    loadProjectEventsFunctionsExtensions:
      this._loadProjectEventsFunctionsExtensions.bind(this),
    unloadProjectEventsFunctionsExtensions:
      this._unloadProjectEventsFunctionsExtensions.bind(this),
    unloadProjectEventsFunctionsExtension:
      this._unloadProjectEventsFunctionsExtension.bind(this),
    reloadProjectEventsFunctionsExtensions:
      this._reloadProjectEventsFunctionsExtensions.bind(this),
    reloadProjectEventsFunctionsExtensionMetadata:
      this._reloadProjectEventsFunctionsExtensionMetadata.bind(this),
    ensureLoadFinished: this._ensureLoadFinished.bind(this),
    getEventsFunctionsExtensionWriter: () =>
      this.props.eventsFunctionsExtensionWriter,
    getEventsFunctionsExtensionOpener: () =>
      this.props.eventsFunctionsExtensionOpener,
    getIncludeFileHashs: () => this._includeFileHashs,
  };

  _onWriteFile({ includeFile, content }: IncludeFileContent) {
    this._includeFileHashs[includeFile] = xxhashjs
      .h32(content, 0xabcd)
      .toNumber();
  }

  _ensureLoadFinished(): Promise<void> {
    if (this._lastLoadPromise) {
      console.info(
        'Waiting on the events functions extensions to finish loading...'
      );
    } else {
      console.info('Events functions extensions are ready.');
    }

    return this._lastLoadPromise
      ? this._lastLoadPromise.then(() => {
          console.info('Events functions extensions finished loading.');
        })
      : Promise.resolve();
  }

  _loadProjectEventsFunctionsExtensions(
    project?: gd.Project | null
  ): Promise<void> {
    const { i18n } = this.props;
    const eventsFunctionCodeWriter = this._eventsFunctionCodeWriter;
    if (!project || !eventsFunctionCodeWriter) return Promise.resolve();

    const lastLoadPromise = this._lastLoadPromise || Promise.resolve();

    // @ts-expect-error - TS2322 - Type 'Promise<void | undefined>' is not assignable to type 'Promise<undefined>'.
    this._lastLoadPromise = lastLoadPromise
      .then(() =>
        loadProjectEventsFunctionsExtensions(
          project,
          eventsFunctionCodeWriter,
          i18n
        )
      )
      .then(() =>
        this.setState({
          eventsFunctionsExtensionsError: null,
        })
      )
      .catch((eventsFunctionsExtensionsError: Error) => {
        this.setState({
          eventsFunctionsExtensionsError,
        });
        showErrorBox({
          message: i18n._(
            t`An error has occurred during functions generation. If GDevelop is installed, verify that nothing is preventing GDevelop from writing on disk. If you're running GDevelop online, verify your internet connection and refresh functions from the Project Manager.`
          ),
          rawError: eventsFunctionsExtensionsError,
          errorId: 'events-functions-extensions-load-error',
        });
      })
      .then(() => {
        this._lastLoadPromise = null;
      });

    // @ts-expect-error - TS2322 - Type 'Promise<undefined> | null | undefined' is not assignable to type 'Promise<void>'.
    return this._lastLoadPromise;
  }

  _reloadProjectEventsFunctionsExtensionMetadata(
    project: gd.Project | null | undefined,
    extension: gd.EventsFunctionsExtension
  ): void {
    const { i18n } = this.props;
    const eventsFunctionCodeWriter = this._eventsFunctionCodeWriter;
    if (!project || !eventsFunctionCodeWriter) return;

    try {
      reloadProjectEventsFunctionsExtensionMetadata(
        project,
        extension,
        eventsFunctionCodeWriter,
        i18n
      );
    } catch (eventsFunctionsExtensionsError) {
      this.setState({
// @ts-expect-error - TS2322 - Type 'unknown' is not assignable to type 'Error | null | undefined'.
        eventsFunctionsExtensionsError,
      });
      showErrorBox({
        message: i18n._(
          t`An error has occurred during functions generation. If GDevelop is installed, verify that nothing is preventing GDevelop from writing on disk. If you're running GDevelop online, verify your internet connection and refresh functions from the Project Manager.`
        ),
        rawError: eventsFunctionsExtensionsError,
        errorId: 'events-functions-extensions-load-error',
      });
    }
  }

  _unloadProjectEventsFunctionsExtensions(project: gd.Project) {
    unloadProjectEventsFunctionsExtensions(project);
  }

  _unloadProjectEventsFunctionsExtension(
    project: gd.Project,
    extensionName: string
  ) {
    unloadProjectEventsFunctionsExtension(project, extensionName);
  }

  _reloadProjectEventsFunctionsExtensions(
    project?: gd.Project | null
  ): Promise<void> {
    if (project) {
      this._unloadProjectEventsFunctionsExtensions(project);
    }
    return this._loadProjectEventsFunctionsExtensions(project);
  }

  render() {
    return (
      <EventsFunctionsExtensionsContext.Provider value={this.state}>
        {this.props.children}
      </EventsFunctionsExtensionsContext.Provider>
    );
  }
}
