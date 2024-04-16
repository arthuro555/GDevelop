import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';

type Props = {
  initialValue: string,
  onClose: (newValue: string) => void
};

export const MultilineVariableEditorDialog = ({
  initialValue,
  onClose,
}: Props) => {
  const [value, setValue] = React.useState(initialValue);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
      title={null}
      flexColumnBody
      noMobileFullScreen
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="ok"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Ok</Trans>}
          primary
          onClick={() => onClose(value)}
        />,
      ]}
      maxWidth="md"
      onRequestClose={() => onClose(value)}
      onApply={() => onClose(value)}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SemiControlledTextField
        autoFocus="desktopAndMobileDevices"
        multiline
        fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Initial text of the variable</Trans>}
        value={value}
        onChange={setValue}
        rows={5}
        rowsMax={10}
      />
    </Dialog>
  );
};
