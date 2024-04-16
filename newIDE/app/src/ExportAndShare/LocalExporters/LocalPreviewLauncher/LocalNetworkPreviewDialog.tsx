// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../../UI/ShareDialog/ShareLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareLink.tsx', but '--jsx' is not set.
import ShareLink from '../../../UI/ShareDialog/ShareLink';
// @ts-expect-error - TS6142 - Module '../../../UI/QrCode' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/QrCode.tsx', but '--jsx' is not set.
import QrCode from '../../../UI/QrCode';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';

type Props = {
  open: boolean,
  /**
   * url without protocol, for example '192.168.1.16:2929'
   */
  url: string | null | undefined,
  onClose: () => void,
  onExport: () => void | null | undefined,
  onRunPreviewLocally: () => void,
  error: any | null | undefined
};

const LocalNetworkPreviewDialog = ({
  url,
  open,
  error,
  onExport,
  onClose,
  onRunPreviewLocally,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  if (!open) return null;
  const urlWithProtocol = url ? `http://${url}` : '';

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Preview</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          primary
          onClick={onClose}
        />,
      ]}
      secondaryActions={[
        onExport && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="export"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Export game</Trans>}
            onClick={onExport}
          />
        ),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="run-preview-locally"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Run on this computer</Trans>}
          onClick={onRunPreviewLocally}
        />,
      ]}
      open={open}
      onRequestClose={onClose}
      maxWidth="sm"
    >
      {error && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Unable to start the server for the preview! Make sure that you are
              authorized to run servers on this computer. Otherwise, use classic
              preview to test your game.
            </Trans>
          </Text>
        </Line>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {!error && !url && <PlaceholderLoader />}
      {!error && url && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Your preview is ready! On your mobile or tablet, open your
                browser and enter in the address bar:
              </Trans>
            </Text>
          </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ShareLink url={url} />
          {urlWithProtocol && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Or flash this QR code:</Trans>
                </Text>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <QrCode url={urlWithProtocol} size={isMobile ? 100 : 150} />
              </Line>
            </>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Please note that your device should be connected on the same
                network as this computer.
              </Trans>
            </Text>
          </Line>
        </div>
      )}
    </Dialog>
  );
};

export default LocalNetworkPreviewDialog;
