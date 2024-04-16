// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Toolbar.tsx', but '--jsx' is not set.
import Toolbar from './Toolbar';
// @ts-expect-error - TS6142 - Module './DebuggerContent' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/DebuggerContent.tsx', but '--jsx' is not set.
import DebuggerContent from './DebuggerContent';
// @ts-expect-error - TS6142 - Module './DebuggerSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/DebuggerSelector.tsx', but '--jsx' is not set.
import DebuggerSelector from './DebuggerSelector';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderMessage.tsx', but '--jsx' is not set.
import PlaceholderMessage from '../UI/PlaceholderMessage';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
import {
  PreviewDebuggerServer,
  DebuggerId,
} from '../ExportAndShare/PreviewLauncher.flow';
// @ts-expect-error - TS6142 - Module './DebuggerConsole' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/DebuggerConsole.tsx', but '--jsx' is not set.
import { Log, LogsManager } from './DebuggerConsole';

export type ProfilerMeasuresSection = {
  time: number,
  subsections: {
    [key: string]: ProfilerMeasuresSection
  }
};

export type ProfilerOutput = {
  framesAverageMeasures: ProfilerMeasuresSection,
  stats: {
    framesCount: number
  }
};

/**
 * Returns true if a log is a warning or debug log from a library out of our control that we do not want to bother users with.
 * This is used in Debugger#_handleMessage below to filter out those kinds of messages.
 */
const isUnavoidableLibraryWarning = (
  {
    group,
    message,
  }: Log,
): boolean => group === 'JavaScript' &&
(message.includes('Electron Security Warning') ||
  message.includes('Warning: This is a browser-targeted Firebase bundle'));

type Props = {
  project: gdProject,
  setToolbar: (arg1: React.ReactNode) => void,
  previewDebuggerServer: PreviewDebuggerServer
};

type State = {
  debuggerServerState: 'started' | 'stopped',
  debuggerServerError: any | null | undefined,
  debuggerIds: Array<DebuggerId>,
  unregisterDebuggerServerCallbacks: () => void | null | undefined,
  debuggerGameData: Partial<Record<DebuggerId, any>>,
  profilerOutputs: Partial<Record<DebuggerId, ProfilerOutput>>,
  profilingInProgress: Partial<Record<DebuggerId, boolean>>,
  gameIsPaused: Partial<Record<DebuggerId, boolean>>,
  selectedId: DebuggerId,
  logs: Partial<Record<DebuggerId, Array<Log>>>
};

/**
 * Start the debugger server, listen to commands received and issue commands to it.
 */
export default class Debugger extends React.Component<Props, State> {
// @ts-expect-error - TS2416 - Property 'state' in type 'Debugger' is not assignable to the same property in base type 'Component<Props, State, any>'.
  state = {
    debuggerServerState: this.props.previewDebuggerServer.getServerState(),
    debuggerServerError: null,
    debuggerIds: this.props.previewDebuggerServer.getExistingDebuggerIds(),
    unregisterDebuggerServerCallbacks: null,
    debuggerGameData: {},
    profilerOutputs: {},
    profilingInProgress: {},
    gameIsPaused: {},
    selectedId: 0,
    logs: {},
  };

  _debuggerContents: Partial<Record<DebuggerId, DebuggerContent | null | undefined>> = {};
  _debuggerLogs: Map<number, LogsManager> = new Map();

  updateToolbar = () => {
    const { selectedId, gameIsPaused } = this.state;

    const selectedDebuggerContents = this._debuggerContents[
      this.state.selectedId
    ];

    this.props.setToolbar(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Toolbar
        onPlay={() => this._play(this.state.selectedId)}
        onPause={() => this._pause(this.state.selectedId)}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{}'.
        canPlay={this._hasSelectedDebugger() && gameIsPaused[selectedId]}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{}'.
        canPause={this._hasSelectedDebugger() && !gameIsPaused[selectedId]}
        canOpenProfiler={this._hasSelectedDebugger()}
        isProfilerShown={
          !!selectedDebuggerContents &&
          selectedDebuggerContents.isProfilerShown()
        }
        onToggleProfiler={() => {
          if (this._debuggerContents[this.state.selectedId])
            this._debuggerContents[this.state.selectedId].toggleProfiler();
        }}
        canOpenConsole={this._hasSelectedDebugger()}
        isConsoleShown={
          !!selectedDebuggerContents &&
          selectedDebuggerContents.isConsoleShown()
        }
        onToggleConsole={() => {
          if (this._debuggerContents[this.state.selectedId])
            this._debuggerContents[this.state.selectedId].toggleConsole();
        }}
      />
    );
  };

  componentDidMount() {
    this._registerServerCallbacks();
  }

  componentWillUnmount() {
    if (this.state.unregisterDebuggerServerCallbacks) {
// @ts-expect-error - TS2349 - This expression is not callable.
      this.state.unregisterDebuggerServerCallbacks();
    }
  }

  _getLogsManager(id: number): LogsManager {
    let result = this._debuggerLogs.get(id);
    if (!result) {
      result = new LogsManager();
      this._debuggerLogs.set(id, result);
    }
    return result;
  }

  _registerServerCallbacks = () => {
    const { previewDebuggerServer } = this.props;
    const { unregisterDebuggerServerCallbacks } = this.state;
    if (
      unregisterDebuggerServerCallbacks &&
      previewDebuggerServer.getServerState() === 'started'
    )
      return; // Server already started and callbacks registered

// @ts-expect-error - TS2349 - This expression is not callable.
    if (unregisterDebuggerServerCallbacks) unregisterDebuggerServerCallbacks(); // Unregister old callbacks, if any

    // Register new callbacks
    const unregisterCallbacks = previewDebuggerServer.registerCallbacks({
      onErrorReceived: err => {
        this.setState(
          {
            debuggerServerError: err,
          },
          () => this.updateToolbar()
        );
      },
      onConnectionClosed: ({ id, debuggerIds }) => {
        this._debuggerLogs.delete(id);
        this.setState(
          ({
            selectedId,
            debuggerGameData,
            profilerOutputs,
            profilingInProgress,
            gameIsPaused,
          }) => {
            // Remove any data bound to the instance that might have been stored.
            // Otherwise this would be a memory leak.
            if (debuggerGameData[id]) delete debuggerGameData[id];
            if (profilerOutputs[id]) delete profilerOutputs[id];
            if (profilingInProgress[id]) delete profilingInProgress[id];
            if (gameIsPaused[id]) delete gameIsPaused[id];

            return {
              debuggerIds,
              selectedId:
                selectedId !== id
                  ? selectedId
                  : debuggerIds.length
                  ? debuggerIds[debuggerIds.length - 1]
                  : selectedId,
              debuggerGameData,
              profilerOutputs,
              profilingInProgress,
              gameIsPaused,
            };
          },
          () => this.updateToolbar()
        );
      },
      onConnectionOpened: ({ id, debuggerIds }) => {
        this.setState(
          {
            debuggerIds,
            selectedId: id,
          },
          () => this.updateToolbar()
        );
      },
      onConnectionErrored: ({ id, errorMessage }) => {
        this._getLogsManager(id).addLog({
          type: 'error',
          timestamp: performance.now(),
          group: 'Debugger connection',
          message: 'The debugger connection errored: ' + errorMessage,
        });
      },
      onServerStateChanged: () => {
        this.setState(
          {
            debuggerServerState: previewDebuggerServer.getServerState(),
          },
          () => this.updateToolbar()
        );
      },
      onHandleParsedMessage: ({ id, parsedMessage }) => {
        this._handleMessage(id, parsedMessage);
      },
    });
    this.setState({
      unregisterDebuggerServerCallbacks: unregisterCallbacks,
    });
  };

  _handleMessage = (id: DebuggerId, data: any) => {
    if (data.command === 'dump') {
      this.setState({
        debuggerGameData: {
          ...this.state.debuggerGameData,
          [id]: data.payload,
        },
      });
    } else if (data.command === 'profiler.output') {
      this.setState({
        profilerOutputs: {
          ...this.state.profilerOutputs,
          [id]: data.payload,
        },
      });
    } else if (data.command === 'profiler.started') {
      this.setState(state => ({
        profilingInProgress: { ...state.profilingInProgress, [id]: true },
      }));
    } else if (data.command === 'profiler.stopped') {
      this.setState(state => ({
        profilingInProgress: { ...state.profilingInProgress, [id]: false },
      }));
    } else if (data.command === 'game.resumed') {
      this.setState(
        state => ({
          gameIsPaused: { ...state.gameIsPaused, [id]: false },
        }),
        () => this.updateToolbar()
      );
    } else if (data.command === 'game.paused') {
      this.setState(
        state => ({
          gameIsPaused: { ...state.gameIsPaused, [id]: true },
        }),
        () => this.updateToolbar()
      );
    } else if (data.command === 'hotReloader.logs') {
      // Nothing to do.
    } else if (data.command === 'console.log') {
      // Filter out unavoidable warnings that do not concern non-engine devs.
      if (isUnavoidableLibraryWarning(data.payload)) return;
      this._getLogsManager(id).addLog(data.payload);
    } else {
      console.warn(
        'Unknown command received from debugger client:',
        data.command
      );
    }
  };

  _play = (id: DebuggerId) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, { command: 'play' });

    this.setState(
      state => ({
        gameIsPaused: { ...state.gameIsPaused, [id]: false },
      }),
      () => this.updateToolbar()
    );
  };

  _pause = (id: DebuggerId) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, { command: 'pause' });

    this.setState(
      state => ({
        gameIsPaused: { ...state.gameIsPaused, [id]: true },
      }),
      () => this.updateToolbar()
    );
  };

  _refresh = (id: DebuggerId) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, { command: 'refresh' });
  };

  _edit = (id: DebuggerId, path: Array<string>, newValue: any) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, {
      command: 'set',
      path,
      newValue,
    });

    setTimeout(() => this._refresh(id), 100);
    return true;
  };

  _call = (id: DebuggerId, path: Array<string>, args: Array<any>) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, {
      command: 'call',
      path,
      args,
    });

    setTimeout(() => this._refresh(id), 100);
    return true;
  };

  _startProfiler = (id: DebuggerId) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, { command: 'profiler.start' });
  };

  _stopProfiler = (id: DebuggerId) => {
    const { previewDebuggerServer } = this.props;
    previewDebuggerServer.sendMessage(id, { command: 'profiler.stop' });
  };

  _hasSelectedDebugger = () => {
    const { selectedId, debuggerIds } = this.state;
    return debuggerIds.indexOf(selectedId) !== -1;
  };

  render() {
    const {
      debuggerServerError,
      debuggerServerState,
      selectedId,
      debuggerIds,
      debuggerGameData,
      profilerOutputs,
      profilingInProgress,
    } = this.state;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Background>
        {debuggerServerState === 'stopped' && !debuggerServerError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PlaceholderLoader />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Debugger is starting...</Trans>
            </Text>
          </PlaceholderMessage>
        )}
        {debuggerServerState === 'stopped' && debuggerServerError && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Unable to start the debugger server! Make sure that you are
                authorized to run servers on this computer.
              </Trans>
            </Text>
          </PlaceholderMessage>
        )}
        {debuggerServerState === 'started' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DebuggerSelector
              selectedId={selectedId}
              debuggerIds={debuggerIds}
// @ts-expect-error - TS7006 - Parameter 'id' implicitly has an 'any' type.
              onChooseDebugger={id =>
                this.setState(
                  {
                    selectedId: id,
                  },
                  () => this.updateToolbar()
                )
              }
            />
            {this._hasSelectedDebugger() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <DebuggerContent
// @ts-expect-error - TS7006 - Parameter 'debuggerContent' implicitly has an 'any' type.
                ref={debuggerContent =>
                  (this._debuggerContents[selectedId] = debuggerContent)
                }
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{}'.
                gameData={debuggerGameData[selectedId]}
                onPlay={() => this._play(selectedId)}
                onPause={() => this._pause(selectedId)}
                onRefresh={() => this._refresh(selectedId)}
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'args' implicitly has an 'any' type.
                onEdit={(path, args) => this._edit(selectedId, path, args)}
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'args' implicitly has an 'any' type.
                onCall={(path, args) => this._call(selectedId, path, args)}
                onStartProfiler={() => this._startProfiler(selectedId)}
                onStopProfiler={() => this._stopProfiler(selectedId)}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{}'.
                profilerOutput={profilerOutputs[selectedId]}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{}'.
                profilingInProgress={profilingInProgress[selectedId]}
                logsManager={this._getLogsManager(selectedId)}
                onOpenedEditorsChanged={this.updateToolbar}
              />
            )}
            {!this._hasSelectedDebugger() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Run a preview and you will be able to inspect it with the
                  debugger.
                </Trans>
              </EmptyMessage>
            )}
          </Column>
        )}
      </Background>
    );
  }
}
