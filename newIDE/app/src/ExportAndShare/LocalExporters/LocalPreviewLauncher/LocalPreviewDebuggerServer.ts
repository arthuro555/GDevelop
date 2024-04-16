// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../../Utils/OptionalRequire';
import {
  PreviewDebuggerServerCallbacks,
  PreviewDebuggerServer,
  DebuggerId,
  ServerAddress,
} from '../../PreviewLauncher.flow';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;

let debuggerServerState: 'started' | 'stopped' = 'stopped';
let debuggerServerAddress: ServerAddress | null | undefined = null;
const callbacksList: Array<PreviewDebuggerServerCallbacks> = [];
const debuggerIds: Array<DebuggerId> = [];

const removeServerListeners = () => {
  if (!ipcRenderer) return;

  ipcRenderer.removeAllListeners('debugger-send-message-done');
  ipcRenderer.removeAllListeners('debugger-error-received');
  ipcRenderer.removeAllListeners('debugger-connection-closed');
  ipcRenderer.removeAllListeners('debugger-connection-opened');
  ipcRenderer.removeAllListeners('debugger-connection-errored');
  ipcRenderer.removeAllListeners('debugger-start-server-done');
  ipcRenderer.removeAllListeners('debugger-message-received');
};

/**
 * A debugger server implemented using Electron (this one is just a bridge to it,
 * communicating through events with it).
 */
export const localPreviewDebuggerServer: PreviewDebuggerServer = {
  startServer: () => {
    if (!ipcRenderer) return Promise.reject();
    if (debuggerServerState === 'started') return Promise.resolve();

    const serverStartPromise = new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
      let serverStartPromiseCompleted = false;
      debuggerServerState = 'stopped';
      debuggerServerAddress = null;
      removeServerListeners();

// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'err' implicitly has an 'any' type.
      ipcRenderer.on('debugger-error-received', (event, err) => {
        if (!serverStartPromiseCompleted) {
          reject(err);
          serverStartPromiseCompleted = true;
        }

        callbacksList.forEach(({ onErrorReceived }) => onErrorReceived(err));
      });

// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type.
      ipcRenderer.on('debugger-connection-closed', (event, { id }) => {
        const debuggerIdIndex = debuggerIds.indexOf(id);
        if (debuggerIdIndex !== -1) debuggerIds.splice(debuggerIdIndex, 1);

        callbacksList.forEach(({ onConnectionClosed }) =>
          onConnectionClosed({
            id,
            debuggerIds,
          })
        );
      });

// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type.
      ipcRenderer.on('debugger-connection-opened', (event, { id }) => {
        debuggerIds.push(id);
        callbacksList.forEach(({ onConnectionOpened }) =>
          onConnectionOpened({
            id,
            debuggerIds,
          })
        );
      });

      ipcRenderer.on(
        'debugger-connection-errored',
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type. | TS7031 - Binding element 'errorMessage' implicitly has an 'any' type.
        (event, { id, errorMessage }) => {
          callbacksList.forEach(({ onConnectionErrored }) =>
            onConnectionErrored({
              id,
              errorMessage,
            })
          );
        }
      );

// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7031 - Binding element 'address' implicitly has an 'any' type.
      ipcRenderer.on('debugger-start-server-done', (event, { address }) => {
        console.info('Local preview debugger started');
        debuggerServerState = 'started';
        debuggerServerAddress = address;
        if (!serverStartPromiseCompleted) {
// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve();
          serverStartPromiseCompleted = true;
        }

        callbacksList.forEach(({ onServerStateChanged }) =>
          onServerStateChanged()
        );
      });

// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type. | TS7031 - Binding element 'message' implicitly has an 'any' type.
      ipcRenderer.on('debugger-message-received', (event, { id, message }) => {
        console.info('Processing message received for debugger');
        try {
          const parsedMessage = JSON.parse(message);
          callbacksList.forEach(({ onHandleParsedMessage }) =>
            onHandleParsedMessage({ id, parsedMessage })
          );
        } catch (e: any) {
          console.warn(
            'Error while parsing message received from debugger client:',
            e
          );
        }
      });
      ipcRenderer.send('debugger-start-server');
    });

    // Consider the start of the server as a failure if not completed/errored
    // after 5s.
    const serverStartTimeoutPromise = new Promise((resolve: (result: Promise<never>) => void, reject: (error?: any) => void) => {
      setTimeout(() => {
        reject(
          new Error(
            'Debugger server not started or errored after 5s - aborting.'
          )
        );
      }, 5000);
    });
    return Promise.race([serverStartPromise, serverStartTimeoutPromise]);
  },
  sendMessage: (id: DebuggerId, message: any) => {
    if (!ipcRenderer) return;
    if (debuggerServerState === 'stopped') {
      console.error('Cannot send message when debugger server is stopped.');
      return;
    }

    ipcRenderer.send('debugger-send-message', {
      id,
      message: JSON.stringify(message),
    });
  },
  getServerState: () => debuggerServerState,
  getExistingDebuggerIds: () => debuggerIds,
  registerCallbacks: (callbacks: PreviewDebuggerServerCallbacks) => {
    callbacksList.push(callbacks);

    return () => {
      const callbacksIndex = callbacksList.indexOf(callbacks);
      if (callbacksIndex !== -1) callbacksList.splice(callbacksIndex, 1);
    };
  },
};

export const getDebuggerServerAddress = (): ServerAddress | null | undefined => debuggerServerAddress;
