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
  onClickYes: () => void,
  onClickNo: () => void,
  onClickCancel: () => void,
  yesButtonLabel?: MessageDescriptor,
  noButtonLabel?: MessageDescriptor,
  cancelButtonLabel?: MessageDescriptor
};

function YesNoCancelDialog(props: Props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={i18n._(props.title)}
          open={props.open}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="no"
              keyboardFocused
              label={
                props.noButtonLabel ? (
                  i18n._(props.noButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>No</Trans>
                )
              }
              onClick={props.onClickNo}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <DialogPrimaryButton
              key="yes"
              label={
                props.yesButtonLabel ? (
                  i18n._(props.yesButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Yes</Trans>
                )
              }
              onClick={props.onClickYes}
              primary
            />,
          ]}
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="cancel"
              keyboardFocused
              label={
                props.cancelButtonLabel ? (
                  i18n._(props.cancelButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Cancel</Trans>
                )
              }
              onClick={props.onClickCancel}
            />,
          ]}
          maxWidth="xs"
          noMobileFullScreen
          onRequestClose={props.onClickCancel}
          onApply={props.onClickYes}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MarkdownText translatableSource={props.message} isStandaloneText />
          </Text>
        </Dialog>
      )}
    </I18n>
  );
}

export default YesNoCancelDialog;
