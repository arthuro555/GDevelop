import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';

// @ts-expect-error - TS6142 - Module '../Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../Dialog';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../MarkdownText';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';

type Props = {
  open: boolean,
  title: MessageDescriptor,
  message: MessageDescriptor,
  onConfirm: () => void,
  onDismiss: () => void,
  confirmButtonLabel?: MessageDescriptor,
  dismissButtonLabel?: MessageDescriptor,
  level: 'info' | 'warning' | 'error',
  maxWidth?: 'xs' | 'sm' | 'md',
  makeDismissButtonPrimary?: boolean
};

function ConfirmDialog(props: Props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => {
        const dismissButtonLabel = props.dismissButtonLabel ? (
          i18n._(props.dismissButtonLabel)
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Cancel</Trans>
        );
        const dismissActionButton = props.makeDismissButtonPrimary ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
            key="dismiss"
            keyboardFocused
            label={dismissButtonLabel}
            onClick={props.onDismiss}
            primary
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="dismiss"
            keyboardFocused
            label={dismissButtonLabel}
            onClick={props.onDismiss}
          />
        );
        const confirmButtonLabel = props.confirmButtonLabel ? (
          i18n._(props.confirmButtonLabel)
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Confirm</Trans>
        );
        const confirmActionButton = props.makeDismissButtonPrimary ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="confirm"
            label={confirmButtonLabel}
            onClick={props.onConfirm}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
            key="confirm"
            label={confirmButtonLabel}
            onClick={props.onConfirm}
            primary
          />
        );
        const dialogActions = [dismissActionButton, confirmActionButton];
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Dialog
            dangerLevel={
              props.level === 'warning'
                ? 'warning'
                : props.level === 'error'
                ? 'danger'
                : undefined
            }
            title={i18n._(props.title)}
            open={props.open}
            actions={dialogActions}
            maxWidth={props.maxWidth || 'xs'}
            noMobileFullScreen
            onRequestClose={props.onDismiss}
            onApply={props.onConfirm}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <MarkdownText
                translatableSource={props.message}
                isStandaloneText
              />
            </Text>
          </Dialog>
        );
      }}
    </I18n>
  );
}

export default ConfirmDialog;
