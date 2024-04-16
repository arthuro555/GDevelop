import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/core';
import {
  useCommand,
  useCommandWithOptions,
} from '../CommandPalette/CommandHooks';
import {
  enumerateLayouts,
  enumerateExternalEvents,
  enumerateExternalLayouts,
  enumerateEventsFunctionsExtensions,
} from '../ProjectManager/EnumerateProjectItems';

type Item = gdLayout | gdExternalEvents | gdExternalLayout | gdEventsFunctionsExtension;

/**
 * Helper function to generate options list
 * for each kind of project item
 */
const generateProjectItemOptions = <T extends Item>(
  project: gdProject | null | undefined,
  enumerate: (project: gdProject) => Array<T>,
  onOpen: (arg1: string) => void,
) => {
  if (!project) return [];
  return enumerate(project).map(item => ({
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'T'.
    text: item.getName(),
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'T'.
    handler: () => onOpen(item.getName()),
  }));
};

type CommandHandlers = {
  i18n: I18n,
  project: gdProject | null | undefined,
  previewEnabled: boolean,
  hasPreviewsRunning: boolean,
  onOpenProjectManager: () => void,
  onLaunchPreview: () => undefined | Promise<undefined>,
  onLaunchDebugPreview: () => void,
  onLaunchNetworkPreview: () => void,
  onHotReloadPreview: () => void,
  allowNetworkPreview: boolean,
  onOpenHomePage: () => void,
  onCreateBlank: () => void,
  onOpenProject: () => void,
  onSaveProject: () => Promise<void>,
  onSaveProjectAs: () => void,
  onCloseApp: () => void,
  onCloseProject: () => Promise<void>,
  onExportGame: () => void,
  onInviteCollaborators: () => void,
  onOpenLayout: (arg1: string) => void,
  onOpenExternalEvents: (arg1: string) => void,
  onOpenExternalLayout: (arg1: string) => void,
  onOpenEventsFunctionsExtension: (arg1: string) => void,
  onOpenCommandPalette: () => void,
  onOpenProfile: () => void
};

const useMainFrameCommands = (handlers: CommandHandlers) => {
  useCommand('QUIT_APP', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onCloseApp,
  });

  useCommand('OPEN_PROFILE', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onOpenProfile,
  });

  useCommand('OPEN_PROJECT_MANAGER', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onOpenProjectManager,
  });

  useCommand('LAUNCH_NEW_PREVIEW', handlers.previewEnabled, {
    handler: handlers.onLaunchPreview,
  });

  useCommand('HOT_RELOAD_PREVIEW', handlers.hasPreviewsRunning, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onHotReloadPreview,
  });

  useCommand(
    'LAUNCH_DEBUG_PREVIEW',
    handlers.previewEnabled && handlers.allowNetworkPreview,
    {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
      handler: handlers.onLaunchDebugPreview,
    }
  );

  useCommand(
    'LAUNCH_NETWORK_PREVIEW',
    handlers.previewEnabled && handlers.allowNetworkPreview,
    {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
      handler: handlers.onLaunchNetworkPreview,
    }
  );

  useCommand('OPEN_HOME_PAGE', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onOpenHomePage,
  });

  useCommand('CREATE_NEW_PROJECT', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onCreateBlank,
  });

  useCommand('OPEN_PROJECT', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onOpenProject,
  });

  useCommand('SAVE_PROJECT', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type 'CommandHandler'.
    handler: handlers.onSaveProject,
  });

  useCommand('SAVE_PROJECT_AS', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onSaveProjectAs,
  });

  useCommand('CLOSE_PROJECT', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type 'CommandHandler'.
    handler: handlers.onCloseProject,
  });

  useCommand('EXPORT_GAME', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onExportGame,
  });

  useCommand('INVITE_COLLABORATORS', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onInviteCollaborators,
  });

  useCommand('OPEN_COMMAND_PALETTE', true, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: handlers.onOpenCommandPalette,
  });

  useCommandWithOptions('OPEN_LAYOUT', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => { text: any; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        generateProjectItemOptions(
          handlers.project,
          enumerateLayouts,
          handlers.onOpenLayout
        ),
      [handlers.project, handlers.onOpenLayout]
    ),
  });

  useCommandWithOptions('OPEN_EXTERNAL_EVENTS', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => { text: any; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        generateProjectItemOptions(
          handlers.project,
          enumerateExternalEvents,
          handlers.onOpenExternalEvents
        ),
      [handlers.project, handlers.onOpenExternalEvents]
    ),
  });

  useCommandWithOptions('OPEN_EXTERNAL_LAYOUT', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => { text: any; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        generateProjectItemOptions(
          handlers.project,
          enumerateExternalLayouts,
          handlers.onOpenExternalLayout
        ),
      [handlers.project, handlers.onOpenExternalLayout]
    ),
  });

  useCommandWithOptions('OPEN_EXTENSION', !!handlers.project, {
// @ts-expect-error - TS2322 - Type '() => { text: any; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        generateProjectItemOptions(
          handlers.project,
          enumerateEventsFunctionsExtensions,
          handlers.onOpenEventsFunctionsExtension
        ),
      [handlers.project, handlers.onOpenEventsFunctionsExtension]
    ),
  });
};

export default useMainFrameCommands;
