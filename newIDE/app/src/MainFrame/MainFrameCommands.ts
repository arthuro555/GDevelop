import * as React from 'react';

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

type Item =
  | gd.Layout
  | gd.ExternalEvents
  | gd.ExternalLayout
  | gd.EventsFunctionsExtension;

/**
 * Helper function to generate options list
 * for each kind of project item
 */
const generateProjectItemOptions = <T extends Item>(
  project: gd.Project | null | undefined,
  enumerate: (project: gd.Project) => Array<T>,
  onOpen: (arg1: string) => void
) => {
  if (!project) return [];
  return enumerate(project).map((item) => ({
    // @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'T'.
    text: item.getName(),
    // @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'T'.
    handler: () => onOpen(item.getName()),
  }));
};

type CommandHandlers = {
  i18n: I18n;
  project: gd.Project | null | undefined;
  previewEnabled: boolean;
  hasPreviewsRunning: boolean;
  onOpenProjectManager: () => void;
  onLaunchPreview: () => void;
  onLaunchDebugPreview: () => void;
  onLaunchNetworkPreview: () => void;
  onHotReloadPreview: () => void;
  allowNetworkPreview: boolean;
  onOpenHomePage: () => void;
  onCreateBlank: () => void;
  onOpenProject: () => void;
  onSaveProject: () => Promise<void>;
  onSaveProjectAs: () => void;
  onCloseApp: () => void;
  onCloseProject: () => Promise<void>;
  onExportGame: () => void;
  onInviteCollaborators: () => void;
  onOpenLayout: (arg1: string) => void;
  onOpenExternalEvents: (arg1: string) => void;
  onOpenExternalLayout: (arg1: string) => void;
  onOpenEventsFunctionsExtension: (arg1: string) => void;
  onOpenCommandPalette: () => void;
  onOpenProfile: () => void;
};

const useMainFrameCommands = (handlers: CommandHandlers) => {
  useCommand('QUIT_APP', true, {
    handler: handlers.onCloseApp,
  });

  useCommand('OPEN_PROFILE', !!handlers.project, {
    handler: handlers.onOpenProfile,
  });

  useCommand('OPEN_PROJECT_MANAGER', !!handlers.project, {
    handler: handlers.onOpenProjectManager,
  });

  useCommand('LAUNCH_NEW_PREVIEW', handlers.previewEnabled, {
    handler: handlers.onLaunchPreview,
  });

  useCommand('HOT_RELOAD_PREVIEW', handlers.hasPreviewsRunning, {
    handler: handlers.onHotReloadPreview,
  });

  useCommand(
    'LAUNCH_DEBUG_PREVIEW',
    handlers.previewEnabled && handlers.allowNetworkPreview,
    {
      handler: handlers.onLaunchDebugPreview,
    }
  );

  useCommand(
    'LAUNCH_NETWORK_PREVIEW',
    handlers.previewEnabled && handlers.allowNetworkPreview,
    {
      handler: handlers.onLaunchNetworkPreview,
    }
  );

  useCommand('OPEN_HOME_PAGE', true, {
    handler: handlers.onOpenHomePage,
  });

  useCommand('CREATE_NEW_PROJECT', true, {
    handler: handlers.onCreateBlank,
  });

  useCommand('OPEN_PROJECT', true, {
    handler: handlers.onOpenProject,
  });

  useCommand('SAVE_PROJECT', !!handlers.project, {
    handler: handlers.onSaveProject,
  });

  useCommand('SAVE_PROJECT_AS', !!handlers.project, {
    handler: handlers.onSaveProjectAs,
  });

  useCommand('CLOSE_PROJECT', !!handlers.project, {
    handler: handlers.onCloseProject,
  });

  useCommand('EXPORT_GAME', !!handlers.project, {
    handler: handlers.onExportGame,
  });

  useCommand('INVITE_COLLABORATORS', !!handlers.project, {
    handler: handlers.onInviteCollaborators,
  });

  useCommand('OPEN_COMMAND_PALETTE', true, {
    handler: handlers.onOpenCommandPalette,
  });

  useCommandWithOptions('OPEN_LAYOUT', !!handlers.project, {
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
