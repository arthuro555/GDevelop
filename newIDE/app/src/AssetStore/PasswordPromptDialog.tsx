// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';

type Props = {
  passwordValue: string,
  setPasswordValue: (newValue: string) => void,
  onClose: () => void,
  onApply: () => Promise<void>
};

const PasswordPromptDialog = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Dialog
    open
    maxWidth="xs"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title={<Trans>Store password</Trans>}
    onApply={props.onApply}
    onRequestClose={props.onClose}
    actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <FlatButton
        key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Close</Trans>}
        onClick={props.onClose}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DialogPrimaryButton
        key="continue"
        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Continue</Trans>}
        onClick={props.onApply}
      />,
    ]}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Form onSubmit={props.onApply} name="store-password">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        fullWidth
        autoFocus="desktopAndMobileDevices"
        value={props.passwordValue}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        floatingLabelText={<Trans>Password</Trans>}
        type="password"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
        onChange={(e, value) => {
          props.setPasswordValue(value);
        }}
      />
    </Form>
  </Dialog>
);

export default PasswordPromptDialog;
