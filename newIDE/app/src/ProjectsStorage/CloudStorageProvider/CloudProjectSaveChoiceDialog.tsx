import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';

type Props = {
  onClose: () => void,
  isLoading: boolean,
  onSaveAsMainVersion: () => undefined | Promise<undefined>,
  onSaveAsDuplicate: () => undefined | Promise<undefined>
};

const CloudProjectRecoveryDialog = ({
  onClose,
  isLoading,
  onSaveAsDuplicate,
  onSaveAsMainVersion,
}: Props) => {
  const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      disabled={isLoading}
      key="save-copy"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Save as...</Trans>}
      onClick={onSaveAsDuplicate}
    />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LeftLoader isLoading={isLoading} key="save-main">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DialogPrimaryButton
        primary
        disabled={isLoading}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Save as main version</Trans>}
        onClick={onSaveAsMainVersion}
      />
    </LeftLoader>,
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
      flexColumnBody
      cannotBeDismissed={isLoading}
      maxWidth="sm"
      onRequestClose={onClose}
      onApply={onSaveAsMainVersion}
      actions={actions}
      title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          What would you like to do with this uncorrupted version of your
          project?
        </Trans>
      }
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line />
    </Dialog>
  );
};

export default CloudProjectRecoveryDialog;
