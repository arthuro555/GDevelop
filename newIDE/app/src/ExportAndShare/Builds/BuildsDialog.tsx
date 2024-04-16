// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/index.tsx', but '--jsx' is not set.
import Builds from '.';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import useForceUpdate from '../../Utils/UseForceUpdate';
import { Game } from '../../Utils/GDevelopServices/Game';

type Props = {
  authenticatedUser: AuthenticatedUser,
  game: Game,
  open: boolean,
  onClose: () => void,
  onGameUpdated: () => Promise<void>
};

const BuildsDialog = ({
  authenticatedUser,
  game,
  open,
  onClose,
  onGameUpdated,
}: Props) => {
  const forceUpdate = useForceUpdate();
  if (!open) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>{game.gameName} builds</Trans>}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          key="close"
          primary={false}
          onClick={onClose}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help" helpPagePath={'/publishing'} />,
      ]}
      onRequestClose={onClose}
      open={open}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Builds
        // Force the Dialog repositioning
        onBuildsUpdated={forceUpdate}
        authenticatedUser={authenticatedUser}
        game={game}
        onGameUpdated={onGameUpdated}
      />
    </Dialog>
  );
};

export default BuildsDialog;
