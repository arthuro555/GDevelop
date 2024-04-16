// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../CustomSvgIcons/Copy';
// @ts-expect-error - TS6142 - Module '../IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../IconButton';
// @ts-expect-error - TS6142 - Module '../Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../Layout';
// @ts-expect-error - TS6142 - Module '../RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../RaisedButton';
// @ts-expect-error - TS6142 - Module '../TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../TextField';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../Messages/InfoBar';

type Props = {
  url: string
};

const ShareLink = ({
  url,
}: Props) => {
  const [showCopiedInfoBar, setShowCopiedInfoBar] = React.useState(false);
  const onCopyLinkToClipboard = () => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setShowCopiedInfoBar(true);
  };
  const onOpen = () => {
    if (!url) return;
    Window.openExternalURL(url);
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TextField
          value={url}
          readOnly
          fullWidth
          endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton
              onClick={onCopyLinkToClipboard}
              tooltip={t`Copy`}
              edge="end"
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Copy />
            </IconButton>
          }
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
          primary
          id="open-online-export-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Open</Trans>}
          onClick={onOpen}
        />
      </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <InfoBar
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        message={<Trans>Copied to clipboard!</Trans>}
        visible={showCopiedInfoBar}
        hide={() => setShowCopiedInfoBar(false)}
      />
    </>
  );
};

export default ShareLink;
