// @ts-expect-error - TS2307 - Cannot find module 'flow-to-typescript-codemod' or its corresponding type declarations.
import { Flow } from 'flow-to-typescript-codemod';
import * as React from 'react';

export type PreviewOptions = {
  project: gd.Project;
  layout: gd.Layout;
  externalLayout: gd.ExternalLayout | null | undefined;
  networkPreview: boolean;
  hotReload: boolean;
  projectDataOnlyExport: boolean;
  fullLoadingScreen: boolean;
  fallbackAuthor:
    | {
        id: string;
        username: string;
      }
    | null
    | undefined;
  getIsMenuBarHiddenInPreview: () => boolean;
  getIsAlwaysOnTopInPreview: () => boolean;
};

/** The props that PreviewLauncher must support */
export type PreviewLauncherProps = {
  getIncludeFileHashs: () => {
    [key: string]: number;
  };
  onExport: () => void;
};

/** Each game connected to the debugger server is identified by a unique number. */
export type DebuggerId = number;

/** The callbacks for a debugger server used for previews. */
export type PreviewDebuggerServerCallbacks = {
  onErrorReceived: (err: Error) => void;
  onServerStateChanged: () => void;
  onConnectionClosed: (arg1: {
    id: DebuggerId;
    debuggerIds: Array<DebuggerId>;
  }) => void;
  onConnectionOpened: (arg1: {
    id: DebuggerId;
    debuggerIds: Array<DebuggerId>;
  }) => void;
  onConnectionErrored: (arg1: { id: DebuggerId; errorMessage: string }) => void;
  onHandleParsedMessage: (arg1: { id: DebuggerId; parsedMessage: any }) => void;
};

/** The address to be used to communicate with the debugger server using WebSockets. */
export type ServerAddress = {
  address: string;
  port: number;
};

/** Interface to run a debugger server for previews. */
export type PreviewDebuggerServer = {
  startServer: () => Promise<void>;
  getServerState: () => 'started' | 'stopped';
  getExistingDebuggerIds: () => Array<DebuggerId>;
  sendMessage: (id: DebuggerId, message: any) => void;
  registerCallbacks: (callbacks: PreviewDebuggerServerCallbacks) => () => void;
};

/** The logs returned by the game hot-reloader. */
export type HotReloaderLog = {
  kind: 'fatal' | 'error' | 'warning' | 'info';
  message: string;
};

/**
 * The functions that PreviewLauncher must expose on their class.
 * TODO: Use strict typing when the components that implement this interface
 * are functional component with strict interfaces.
 */
export type PreviewLauncherInterface = {
  launchPreview: (previewOptions: PreviewOptions) => Promise<any>;
  canDoNetworkPreview: () => boolean;
  canDoHotReload: () => boolean;
  readonly closePreview?: (windowId: number) => void;
  readonly getPreviewDebuggerServer: () =>
    | PreviewDebuggerServer
    | null
    | undefined;
};

/**
 * A PreviewLaunchComponent supports the props and has at least the functions exposed in PreviewLauncherInterface.
 * This is important as MainFrame is keeping ref to it to launch previews.
 */
export type PreviewLauncherComponent = Flow.AbstractComponent<
  PreviewLauncherProps,
  PreviewLauncherInterface
>;
