import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../VariablesList/VariablesEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesEditorDialog.tsx', but '--jsx' is not set.
import VariablesEditorDialog from '../VariablesList/VariablesEditorDialog';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';
import EventsRootVariablesFinder from '../Utils/EventsRootVariablesFinder';

type Props = {
  open: boolean,
  project: gdProject,
  layout: gdLayout,
  onApply: () => void,
  onClose: () => void,
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps
};

const SceneVariablesDialog = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <VariablesEditorDialog
      project={props.project}
      open={props.open}
      variablesContainer={props.layout.getVariables()}
      onCancel={props.onClose}
      onApply={props.onApply}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>{props.layout.getName()} variables</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      emptyPlaceholderTitle={<Trans>Add your first scene variable</Trans>}
      emptyPlaceholderDescription={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>These variables hold additional information on a scene.</Trans>
      }
      helpPagePath={'/all-features/variables/scene-variables'}
      hotReloadPreviewButtonProps={props.hotReloadPreviewButtonProps}
      onComputeAllVariableNames={() =>
        EventsRootVariablesFinder.findAllLayoutVariables(
          props.project.getCurrentPlatform(),
          props.project,
          props.layout
        )
      }
      id="scene-variables-dialog"
    />
  );
};

export default SceneVariablesDialog;
