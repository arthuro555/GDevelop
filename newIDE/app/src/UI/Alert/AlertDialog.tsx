import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';

// @ts-expect-error - TS6142 - Module '../Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../Dialog';
// @ts-expect-error - TS6142 - Module '../FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../FlatButton';
// @ts-expect-error - TS6142 - Module '../Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../Text';

type Props = {
  open: boolean,
  title: MessageDescriptor,
  message: MessageDescriptor,
  onDismiss: () => void,
  dismissButtonLabel?: MessageDescriptor
};

function AlertDialog(props: Props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={i18n._(props.title)}
          open={props.open}
          noMobileFullScreen
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="dismiss"
              keyboardFocused
              label={
                props.dismissButtonLabel ? (
                  i18n._(props.dismissButtonLabel)
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>OK</Trans>
                )
              }
              onClick={props.onDismiss}
            />,
          ]}
          maxWidth="xs"
          onRequestClose={props.onDismiss}
          onApply={props.onDismiss}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>{i18n._(props.message)}</Text>
        </Dialog>
      )}
    </I18n>
  );
}

export default AlertDialog;
