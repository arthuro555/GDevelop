// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';

type Props = {
  onSaveProject: () => Promise<void>,
  canEndTutorial: boolean,
  endTutorial: () => void,
  onClose: () => void,
  isSavingProject: boolean
};

const QuitInAppTutorialDialog = ({
  onSaveProject,
  canEndTutorial,
  endTutorial,
  onClose,
  isSavingProject,
}: Props) => {
  const [hasUserInteracted, setHasUserInteracted] = React.useState<boolean>(false);
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  const [title, setTitle] = React.useState<React.ReactNode>(<Trans>Leave the tutorial</Trans>);

  React.useEffect(
    () => {
      if (hasUserInteracted) {
        if (isSavingProject) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          setTitle(<Trans>Saving project</Trans>);
        } else if (canEndTutorial) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          setTitle(<Trans>Project saved</Trans>);
        }
      }
    },
    [isSavingProject, canEndTutorial, hasUserInteracted]
  );

  const quitTutorial = () => {
    endTutorial();
    onClose();
  };

  const saveOrExitTutorial = () => {
    setHasUserInteracted(true);
    if (canEndTutorial) {
      quitTutorial();
    } else {
      onSaveProject();
    }
  };

  const primaryActionLabel = isSavingProject ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Saving...</Trans>
  ) : canEndTutorial ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Close Project</Trans>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Save Project</Trans>
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
      maxWidth="sm"
      title={title}
      onRequestClose={() => {
        if (!isSavingProject) onClose();
      }}
      onApply={saveOrExitTutorial}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="exit"
          onClick={quitTutorial}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Exit without saving</Trans>}
        />,
      ]}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
          onClick={onClose}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeftLoader isLoading={isSavingProject} key="save-and-exit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DialogPrimaryButton
            primary
            label={primaryActionLabel}
            disabled={isSavingProject}
            onClick={saveOrExitTutorial}
          />
        </LeftLoader>,
      ]}
      flexColumnBody
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>You are about to quit the tutorial.</Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You can save your project to come back to it later. What do you want
          to do?
        </Trans>
      </Text>
    </Dialog>
  );
};

export default QuitInAppTutorialDialog;
