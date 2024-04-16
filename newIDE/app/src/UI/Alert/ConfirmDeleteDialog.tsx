import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS6142 - Module '../Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../Dialog';
import { ButtonInterface } from '../Button';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { LargeSpacer } from '../Grid';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';
// @ts-expect-error - TS6142 - Module '../TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../TextField';
import { useShouldAutofocusInput } from '../Responsive/ScreenTypeMeasurer';

type Props = {
  open: boolean,
  title: MessageDescriptor,
  message: MessageDescriptor,
  fieldMessage?: MessageDescriptor,
  confirmText?: string,
  onConfirm: () => void,
  onDismiss: () => void,
  confirmButtonLabel?: MessageDescriptor,
  dismissButtonLabel?: MessageDescriptor
};

function ConfirmDeleteDialog(props: Props) {
  const { open, confirmText } = props;
  const [textInput, setTextInput] = React.useState<string>('');
  const confirmButtonRef = React.useRef<ButtonInterface | null | undefined>(null);
  const canConfirm = props.confirmText ? textInput === props.confirmText : true;
  const shouldAutofocus = useShouldAutofocusInput();

  const onConfirm = () => {
    if (!canConfirm) return;
    props.onConfirm();
    setTextInput('');
  };

  React.useEffect(
    () => {
      if (open && shouldAutofocus && !confirmText) {
        // If the dialog is opened and autofocus should be set and there is no confirm text
        // to enter, focus Confirm button to enable quick deletion with only keyboard navigation.
        setTimeout(
          () => {
            if (confirmButtonRef.current) {
              confirmButtonRef.current.focus();
            }
          },
          // Wait for component to be mounted so that confirmButtonRef targets something.
          50
        );
      }
    },
    [open, shouldAutofocus, confirmText]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={i18n._(props.title)}
          open={open}
          dangerLevel="danger"
          onApply={onConfirm}
          onRequestClose={props.onDismiss}
          maxWidth="sm"
          flexColumnBody
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="cancel"
              label={
                props.dismissButtonLabel ? (
                  i18n._(props.dismissButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Cancel</Trans>
                )
              }
              primary={false}
              onClick={props.onDismiss}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DialogPrimaryButton
              key="confirm"
              ref={confirmButtonRef}
              label={
                props.confirmButtonLabel ? (
                  i18n._(props.confirmButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Confirm</Trans>
                )
              }
              primary
              onClick={onConfirm}
              disabled={!canConfirm}
            />,
          ]}
          noMobileFullScreen
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body" style={{ userSelect: 'text' }}>
            {i18n._(props.message)}
          </Text>
          {props.confirmText && props.fieldMessage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TextField
                autoFocus="desktop"
                floatingLabelFixed
                floatingLabelText={i18n._(props.fieldMessage)}
                value={textInput}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
                onChange={(e, text) => setTextInput(text)}
                hintText={props.confirmText}
              />
            </>
          )}
        </Dialog>
      )}
    </I18n>
  );
}

export default ConfirmDeleteDialog;
