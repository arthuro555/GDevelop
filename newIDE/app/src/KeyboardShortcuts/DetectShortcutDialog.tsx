import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
import { getShortcutMetadataFromEvent, getShortcutDisplayName } from './index';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';

const styles = {
  shortcutBox: {
    padding: 15,
    textAlign: 'center',
  },
} as const;

type Props = {
  commandText: string | null | undefined,
  onSet: (shortcut: string) => void,
  onClose: () => void
};

const DetectShortcutDialog = (props: Props) => {
  const [shortcutString, setShortcutString] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const onApply = () => {
    if (!isValid) return;
    shortcutString && props.onSet(shortcutString);
    props.onClose();
  };

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();
      const metadata = getShortcutMetadataFromEvent(e);
      if (e.type === 'keyup') return;
      setIsValid(metadata.isValid);
      setShortcutString(metadata.shortcutString);
    };
    document.addEventListener('keyup', handler);
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
      document.removeEventListener('keyup', handler);
    };
  }, []);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Set shortcut</Trans>}
      open
      maxWidth="xs"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="Cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          onClick={props.onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Set shortcut</Trans>}
          primary
          key="Set"
          onClick={onApply}
          disabled={!isValid}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="Remove"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Remove shortcut</Trans>}
          onClick={() => {
            props.onSet('');
            props.onClose();
          }}
        />,
      ]}
      onRequestClose={props.onClose}
      onApply={onApply}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>{props.commandText}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Paper variant="outlined" style={styles.shortcutBox} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
          {shortcutString ? (
            getShortcutDisplayName(shortcutString)
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>Press a shortcut combination...</Trans>
          )}
        </Text>
      </Paper>
    </Dialog>
  );
};

export default DetectShortcutDialog;
