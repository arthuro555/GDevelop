import {useCommand} from '../CommandPalette/CommandHooks';

type Props = {
  project: gdProject | null | undefined,
  onOpenProjectProperties: () => void,
  onOpenProjectLoadingScreen: () => void,
  onOpenProjectVariables: () => void,
  onOpenResourcesDialog: () => void,
  onOpenSearchExtensionDialog: () => void,
  onOpenPlatformSpecificAssetsDialog: () => void
};

const ProjectManagerCommands = (props: Props) => {
  useCommand('OPEN_PROJECT_PROPERTIES', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenProjectProperties,
  });
  useCommand('OPEN_PROJECT_LOADING_SCREEN', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenProjectLoadingScreen,
  });

  useCommand('OPEN_PROJECT_VARIABLES', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenProjectVariables,
  });

  useCommand('OPEN_PLATFORM_SPECIFIC_ASSETS_DIALOG', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenPlatformSpecificAssetsDialog,
  });

  useCommand('OPEN_PROJECT_RESOURCES', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenResourcesDialog,
  });

  useCommand('OPEN_SEARCH_EXTENSIONS_DIALOG', !!props.project, {
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type 'CommandHandler'.
    handler: props.onOpenSearchExtensionDialog,
  });

  return null;
};

export default ProjectManagerCommands;
