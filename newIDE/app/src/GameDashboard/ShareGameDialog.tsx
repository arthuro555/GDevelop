import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/ShareDialog/SocialShareButtons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/SocialShareButtons.tsx', but '--jsx' is not set.
import SocialShareButtons from '../UI/ShareDialog/SocialShareButtons';
// @ts-expect-error - TS6142 - Module '../UI/ShareDialog/ShareLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareLink.tsx', but '--jsx' is not set.
import ShareLink from '../UI/ShareDialog/ShareLink';

import { Game, getGameUrl } from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/ShareDialog/ShareButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareButton.tsx', but '--jsx' is not set.
import ShareButton from '../UI/ShareDialog/ShareButton';

type Props = {
  game: Game,
  onClose: () => void
};

const ShareDialog = ({
  game,
  onClose,
}: Props) => {
  const [showAlertMessage, setShowAlertMessage] = React.useState(false);
  const gameUrl = getGameUrl(game);

  if (!gameUrl) return null;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Share your game</Trans>}
      open
      id="game-card-share-dialog"
      minHeight="sm"
      maxWidth="md"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          onClick={onClose}
        />,
      ]}
      onRequestClose={onClose}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ShareLink url={gameUrl} />
{ /* @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead? */}
        {navigator.share ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ShareButton url={gameUrl} />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SocialShareButtons url={gameUrl} />
        )}
      </Column>
      {showAlertMessage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="error" onHide={() => setShowAlertMessage(false)}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            An error occurred while generating the game url with the currently
            set game slug.
          </Trans>
        </AlertMessage>
      )}
    </Dialog>
  );
};

export default ShareDialog;
