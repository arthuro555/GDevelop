import React from 'react';
// @ts-expect-error - TS6142 - Module '../GameDashboard/LeaderboardAdmin' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/index.tsx', but '--jsx' is not set.
import { LeaderboardAdmin } from '../GameDashboard/LeaderboardAdmin';

// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

type Props = {
  onClose: () => void,
  open: boolean,
  project: gdProject,
  leaderboardId?: string
};

const LeaderboardDialog = ({
  onClose,
  open,
  project,
  leaderboardId,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Leaderboards</Trans>}
      id="leaderboard-admin-dialog"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          id="close-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
          disabled={isLoading}
          onClick={onClose}
          key={'Close'}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton
          key="help"
          helpPagePath="/interface/games-dashboard/leaderboard-administration"
        />,
      ]}
      open={open}
      cannotBeDismissed={isLoading}
      onRequestClose={onClose}
      flexBody
      fullHeight
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LeaderboardAdmin
        onLoading={setIsLoading}
        project={project}
        leaderboardIdToSelectAtOpening={leaderboardId}
      />
    </Dialog>
  );
};

export default LeaderboardDialog;
