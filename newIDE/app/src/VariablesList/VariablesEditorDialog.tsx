// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
import HotReloadPreviewButton, {
  HotReloadPreviewButtonProps,
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
} from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../Hints/useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from '../Hints/useDismissableTutorialMessage';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module './VariablesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesList.tsx', but '--jsx' is not set.
import VariablesList from './VariablesList';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';

const gd: libGDevelop = global.gd;

type Props = {
  onCancel: () => void,
  onApply: () => void,
  open: boolean,
  onEditObjectVariables?: () => void,
  title: React.ReactNode,
  emptyPlaceholderTitle?: React.ReactNode,
  emptyPlaceholderDescription?: React.ReactNode,
  project: gdProject,
  variablesContainer: gdVariablesContainer,
  inheritedVariablesContainer?: gdVariablesContainer,
  hotReloadPreviewButtonProps?: HotReloadPreviewButtonProps | null | undefined,
  /**
   * Deprecated - will be removed once we don't want to display completions
   * for variables not declared but still used in events.
   */
  onComputeAllVariableNames: () => Array<string>,
  helpPagePath: string | null | undefined,
  id?: string,
  /**
   * If set to true, a deleted variable won't trigger a confirmation asking if the
   * project must be refactored to delete any reference to it.
   */
  preventRefactoringToDeleteInstructions?: boolean
};

const VariablesEditorDialog = ({
  onCancel,
  onApply,
  open,
  onEditObjectVariables,
  title,
  emptyPlaceholderTitle,
  emptyPlaceholderDescription,
  project,
  variablesContainer,
  inheritedVariablesContainer,
  hotReloadPreviewButtonProps,
  onComputeAllVariableNames,
  helpPagePath,
  preventRefactoringToDeleteInstructions,
  id,
}: Props) => {
  const {
    onCancelChanges,
    notifyOfChange,
    getOriginalContentSerializedElement,
  } = useSerializableObjectCancelableEditor({
    serializableObject: variablesContainer,
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel,
    resetThenClearPersistentUuid: true,
  });
  const { DismissableTutorialMessage } = useDismissableTutorialMessage(
    'intro-variables'
  );

  const onRefactorAndApply = React.useCallback(
    async () => {
      if (inheritedVariablesContainer) {
        // No refactoring to do - this is a variable container of an instance
        // (or something else that overrides variables from another container),
        // which does not have an impact on the rest of the project.
      } else {
        const changeset = gd.WholeProjectRefactorer.computeChangesetForVariablesContainer(
          project,
          getOriginalContentSerializedElement(),
          variablesContainer
        );
        if (
          preventRefactoringToDeleteInstructions ||
          // While we support refactoring that would remove all references (actions, conditions...)
          // it's both a bit dangerous for the user and we would need to show the user what
          // will be removed before doing so. For now, just clear the removed variables so they don't
          // trigger any refactoring.
          true
        ) {
          // Clear the removed variables from the changeset, so they do not trigger
          // deletion of actions/conditions or events using them.
          changeset.clearRemovedVariables();
        }

        gd.WholeProjectRefactorer.applyRefactoringForVariablesContainer(
          project,
          variablesContainer,
          changeset
        );
      }

      variablesContainer.clearPersistentUuid();
      onApply();
    },
    [
      onApply,
      project,
      getOriginalContentSerializedElement,
      variablesContainer,
      inheritedVariablesContainer,
      preventRefactoringToDeleteInstructions,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={title}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          onClick={onCancelChanges}
          key="Cancel"
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary
          onClick={onRefactorAndApply}
          key="Apply"
          id="apply-button"
        />,
      ]}
      secondaryActions={[
        onEditObjectVariables ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="edit-object-variables"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Edit Object Variables</Trans>}
            primary={false}
            onClick={onEditObjectVariables}
          />
        ) : null,
        hotReloadPreviewButtonProps ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HotReloadPreviewButton
            key="hot-reload-preview-button"
            {...hotReloadPreviewButtonProps}
          />
        ) : null,
        helpPagePath ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HelpButton helpPagePath={helpPagePath} key="help" />
        ) : null,
      ]}
      onRequestClose={onCancelChanges}
      onApply={onRefactorAndApply}
      open={open}
      flexBody
      fullHeight
      id={id}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand noMargin noOverflowParent>
        {variablesContainer.count() > 0 && DismissableTutorialMessage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>{DismissableTutorialMessage}</Column>
          </Line>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <VariablesList
          variablesContainer={variablesContainer}
          inheritedVariablesContainer={inheritedVariablesContainer}
          emptyPlaceholderTitle={emptyPlaceholderTitle}
          emptyPlaceholderDescription={emptyPlaceholderDescription}
          onComputeAllVariableNames={onComputeAllVariableNames}
          helpPagePath={helpPagePath}
          onVariablesUpdated={notifyOfChange}
        />
      </Column>
    </Dialog>
  );
};

export default VariablesEditorDialog;
