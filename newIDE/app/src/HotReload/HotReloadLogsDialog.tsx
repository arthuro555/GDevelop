// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import { HotReloaderLog } from '../ExportAndShare/PreviewLauncher.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Preview'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preview.js' implicitly has an 'any' type.
import PreviewIcon from '../UI/CustomSvgIcons/Preview';

type Props = {
  logs: Array<HotReloaderLog>,
  onClose: () => void,
  onLaunchNewPreview: () => void
};

const shouldDisplayDialogForLogs = logs: Array<HotReloaderLog> =>
  logs.filter(log => log.kind === 'error' || log.kind === 'fatal').length > 0;

export default function HotReloadLogsDialog({
  onClose,
  onLaunchNewPreview,
  logs,
{ /* @ts-expect-error - TS1109 - Expression expected. */}
}: Props) {
{ /* @ts-expect-error - TS1109 - Expression expected. */}
  if (!shouldDisplayDialogForLogs(logs)) {
{ /* @ts-expect-error - TS1109 - Expression expected. | TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
    return null;
  }

  return (
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Restarting the preview from scratch is required</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          icon={<PreviewIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close and launch a new preview</Trans>}
          key="new-preview"
          primary
          onClick={onLaunchNewPreview}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath={'/interface/preview'} />,
      ]}
      onRequestClose={onClose}
      open
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Your latest changes could not be applied to the preview(s) being
            run. You should start a new preview instead to make sure that all
            your changes are reflected in the game.
          </Trans>
        </Text>
      </ColumnStackLayout>
    </Dialog>
{ /* @ts-expect-error - TS1381 - Unexpected token. Did you mean `{'}'}` or `&rbrace;`? */}
  );
}
