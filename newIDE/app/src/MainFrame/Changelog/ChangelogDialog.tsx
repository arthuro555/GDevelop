// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Changelog/index.tsx', but '--jsx' is not set.
import Changelog from '.';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import useForceUpdate from '../../Utils/UseForceUpdate';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';

type Props = {
  open: boolean,
  onClose: () => void
};

const ChangelogDialog = ({
  open,
  onClose,
}: Props) => {
  const forceUpdate = useForceUpdate();
  if (!open) {
    // Don't render anything, to avoid in particular sending useless requests.
    return null;
  }

  const openReleaseNote = () =>
    Window.openExternalURL('https://github.com/4ian/GDevelop/releases');

  const actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Close</Trans>}
      primary={true}
      onClick={onClose}
    />,
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>What's new in GDevelop?</Trans>}
      actions={actions}
      open={open}
      onRequestClose={onClose}
      flexColumnBody
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout noMargin justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            GDevelop was upgraded to a new version! Check out the changes.
          </Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>See all the release notes</Trans>}
          onClick={openReleaseNote}
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Changelog
        onUpdated={forceUpdate} // Force update to ensure dialog is properly positioned
      />
    </Dialog>
  );
};

export default ChangelogDialog;
