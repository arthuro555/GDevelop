// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../UI/LinearProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
// @ts-expect-error - TS6142 - Module '../UI/Table' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Table.tsx', but '--jsx' is not set.
} from '../UI/Table';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import AuthenticatedUserContext, {
  AuthenticatedUser,
} from '../Profile/AuthenticatedUserContext';
import { duplicateLeaderboard } from '../Utils/GDevelopServices/Play';
import { registerGame } from '../Utils/GDevelopServices/Game';
import { toNewGdMapStringString } from '../Utils/MapStringString';

// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

type ReplacePromptDialogProps = {
  leaderboardsToReplace: Array<string> | null | undefined,
  onClose: () => void,
  onTriggerReplace: () => void
};

export const ReplacePromptDialog = ({
  leaderboardsToReplace,
  onClose,
  onTriggerReplace,
}: ReplacePromptDialogProps) => {
  const { authenticated, onOpenLoginDialog } = React.useContext(
    AuthenticatedUserContext
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Set up new leaderboards for this game</Trans>}
      actions={
        authenticated
          ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                primary
                key="register-close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Close</Trans>}
                onClick={onClose}
              />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <DialogPrimaryButton
                primary
                key="register-game-now"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Create new leaderboards now</Trans>}
                onClick={onTriggerReplace}
                id="create-and-replace-new-leaderboard"
              />,
            ]
          : [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
                primary
                key="login-close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Close</Trans>}
                onClick={onClose}
              />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Login now</Trans>}
                primary
                onClick={() => onOpenLoginDialog()}
                key="login-now"
                id="login-now"
              />,
            ]
      }
      open
      maxWidth="sm"
      onRequestClose={onClose}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              This game is using leaderboards. GDevelop will create new
              leaderboards for this game in your account, so that the game is
              ready to be played and players can send their scores.
            </Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              If you skip this step, you can still do it manually later from the
              leaderboards panel in your Games Dashboard.
            </Trans>
          </Text>
        </ColumnStackLayout>
      </Line>
    </Dialog>
  );
};

type LeaderboardReplacerProgressDialogProps = {
  erroredLeaderboards: Array<{
    leaderboardId: string,
    error: Error
  }>,
  onRetry: () => void | null | undefined,
  onAbandon: () => void | null | undefined,
  progress: number
};

export const LeaderboardReplacerProgressDialog = ({
  erroredLeaderboards,
  onRetry,
  onAbandon,
  progress,
}: LeaderboardReplacerProgressDialogProps) => {
  const hasErrors = erroredLeaderboards.length > 0;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      title={null} // Specific loading dialog where we don't want a title.
      actions={[
        onRetry ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Retry</Trans>}
            primary
            onClick={onRetry}
            key="retry"
          />
        ) : null,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          label={
// @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead? | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            onAbandon ? <Trans>Abandon</Trans> : <Trans>Please wait...</Trans>
          }
          disabled={!onAbandon}
          onClick={onAbandon}
          key="close"
        />,
      ]}
      cannotBeDismissed={!hasErrors}
      open
      maxWidth="sm"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
            {hasErrors && progress === 100 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                There were errors when preparing new leaderboards for the
                project.
              </Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Preparing the leaderboard for your game...</Trans>
            )}
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LinearProgress variant="determinate" value={progress} />
          </Line>
          {hasErrors && progress === 100 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Table>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableHeaderColumn>Leaderboard ID</TableHeaderColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableHeaderColumn>Error</TableHeaderColumn>
                </TableRow>
              </TableHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableBody>
                {erroredLeaderboards.map(({ leaderboardId, error }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <TableRow key={leaderboardId}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TableRowColumn>{leaderboardId}</TableRowColumn>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TableRowColumn>{error.toString()}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : null}
        </ColumnStackLayout>
      </Line>
    </Dialog>
  );
};

type RetryOrAbandonCallback = () => void;

type UseLeaderboardReplacerOutput = {
  /**
   * Launch search through the whole project for leaderboard ids to replace.
   */
  findLeaderboardsToReplace: (project: gdProject, sourceGameId: string) => void,
  /**
   * Render, if needed, the dialog that will show the progress of leaderboard replacement.
   */
  renderLeaderboardReplacerDialog: () => React.ReactElement
};

type ErroredLeaderboard = {
  leaderboardId: string,
  error: Error
};

/**
 * Hook allowing to find and duplicate leaderboards in a project, useful after
 * opening a project from an example.
 */
export const useLeaderboardReplacer = (): UseLeaderboardReplacerOutput => {
  const [project, setProject] = React.useState<gdProject | null>(null);
  const [gameId, setGameId] = React.useState<string | null>(null);
  const [shouldReplace, setShouldReplace] = React.useState(false);
  const [
    leaderboardsToReplace,
    setLeaderboardsToReplace,
  ] = React.useState<Array<string> | null | undefined>(null);

  const authenticatedUser = React.useContext(AuthenticatedUserContext);

  const [erroredLeaderboards, setErroredLeaderboards] = React.useState<Array<ErroredLeaderboard>>([]);

  const [progress, setProgress] = React.useState(0);
  const [onRetry, setOnRetry] = React.useState<RetryOrAbandonCallback | null | undefined>(null);
  const [onAbandon, setOnAbandon] = React.useState<RetryOrAbandonCallback | null | undefined>(null);

  /**
   * Launch the replacement of leaderboards, if needed.
   * First, register game, then copy leaderboards in database, and finally
   * replace them in events.
   */
  const ensureLeaderboardsAreReplaced = React.useCallback(
    async () => {
      const { getAuthorizationHeader, profile } = authenticatedUser;
      if (!leaderboardsToReplace || !project || !gameId) {
        throw new Error('No leaderboards found in events sheet.');
      }
      if (!profile) {
        throw new Error('User is not connected.');
      }

      // Number of leaderboards to replace + game registration + leaderboard replace in events sheet.
      const totalSteps = leaderboardsToReplace.length + 2;
      const progressStep = (1 / totalSteps) * 100;

      const replacedLeaderboardsMap: Record<string, any> = {};

      setProgress(0);
      setOnRetry(null);
      setOnAbandon(null);
      setErroredLeaderboards([]);

      // Register game. The error will silently be caught if the game already exists,
      // but user will be able to retry if it doesn't because leaderboards copy will
      // fail.
      try {
        await registerGame(getAuthorizationHeader, profile.id, {
          gameId: project.getProjectUuid(),
          authorName: project.getAuthor() || 'Unspecified publisher',
          gameName: project.getName() || 'Untitled game',
          templateSlug: project.getTemplateSlug(),
        });
      } catch (error: any) {
        console.error('Could not register game: ', error);
      }
      setProgress(progressStep);

      const duplicateLeaderboardAndStepProgress = async (authenticatedUser: AuthenticatedUser, leaderboardId: string): Promise<ErroredLeaderboard | null | undefined> => {
        try {
          const duplicatedLeaderboard = await duplicateLeaderboard(
            authenticatedUser,
            project.getProjectUuid(),
            {
              sourceGameId: gameId,
              sourceLeaderboardId: leaderboardId.replace(/"/g, ''),
            }
          );
          replacedLeaderboardsMap[leaderboardId] = `"${
            duplicatedLeaderboard.id
          }"`;
          setProgress(previousProgress => previousProgress + progressStep);
          return null;
        } catch (error: any) {
          console.error(
            `Could not duplicate leaderboard ${leaderboardId}`,
            error
          );
          setProgress(previousProgress => previousProgress + progressStep);
          return {
            leaderboardId,
            error: error,
          };
        }
      };

      // Duplicate leaderboards.
      const responseLeaderboardsWithErrors = await Promise.all(
        Array.from(leaderboardsToReplace).map(async leaderboardId =>
          duplicateLeaderboardAndStepProgress(authenticatedUser, leaderboardId)
        )
      );
      const leaderboardsWithErrors = responseLeaderboardsWithErrors.filter(
        Boolean
      );
      setErroredLeaderboards(leaderboardsWithErrors);

      // Replace leaderboards in events.
      if (Object.keys(replacedLeaderboardsMap).length) {
        const renamedLeaderboardsMap = toNewGdMapStringString(
          replacedLeaderboardsMap
        );
        const eventsLeaderboardReplacer = new gd.EventsLeaderboardsRenamer(
          project,
          renamedLeaderboardsMap
        );
        renamedLeaderboardsMap.delete();

        gd.ProjectBrowserHelper.exposeProjectEvents(
          project,
          eventsLeaderboardReplacer
        );
        eventsLeaderboardReplacer.delete();
      }
      setProgress(100);

      if (leaderboardsWithErrors.length === 0) {
        // No error happened: finish normally, closing the dialog.
        setShouldReplace(false);
        setLeaderboardsToReplace(null);
        return { someLeaderboardsWereDuplicated: true };
      }

      // An error happened. Store the errors and offer a way to
      // retry.
      return new Promise(resolve => {
        setOnRetry(
          (): RetryOrAbandonCallback => () => {
            // Keep only the errored leaderboards.
            setLeaderboardsToReplace(
              leaderboardsToReplace.filter(id =>
                leaderboardsWithErrors.some(
                  erroredLeaderboard => erroredLeaderboard.leaderboardId === id
                )
              )
            );
            // Launch the fetch again, and solve the promise once
            // this new fetch resolve itself.
            resolve(ensureLeaderboardsAreReplaced());
          }
        );
        setOnAbandon(
          (): RetryOrAbandonCallback => () => {
            // Abandon: resolve immediately, closing the dialog
            setErroredLeaderboards([]);
            setShouldReplace(false);
            setLeaderboardsToReplace(null);
            resolve({ someLeaderboardsWereDuplicated: true });
          }
        );
      });
    },
    [authenticatedUser, gameId, leaderboardsToReplace, project]
  );

  /**
   * Return a set of leaderboard ids found in the project.
   */
  const findLeaderboardsToReplace = React.useCallback(
    (project: gdProject, sourceGameId: string) => {
      setProject(project);
      setGameId(sourceGameId);

      const leaderboardsLister = new gd.EventsLeaderboardsLister(project);
      gd.ProjectBrowserHelper.exposeProjectEvents(project, leaderboardsLister);
      const leaderboardIds = leaderboardsLister.getLeaderboardIds();
      setLeaderboardsToReplace(leaderboardIds.toNewVectorString().toJSArray());
      leaderboardsLister.delete();
    },
    []
  );

  const renderLeaderboardReplacerDialog = () => {
    if (!leaderboardsToReplace || !leaderboardsToReplace.length) return null;

    return gameId &&
      project &&
      shouldReplace &&
      authenticatedUser.authenticated ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <LeaderboardReplacerProgressDialog
        erroredLeaderboards={erroredLeaderboards}
// @ts-expect-error - TS2322 - Type 'RetryOrAbandonCallback | null | undefined' is not assignable to type '() => void | null | undefined'.
        onRetry={onRetry}
// @ts-expect-error - TS2322 - Type 'RetryOrAbandonCallback | null | undefined' is not assignable to type '() => void | null | undefined'.
        onAbandon={onAbandon}
        progress={progress}
      />
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ReplacePromptDialog
        leaderboardsToReplace={leaderboardsToReplace}
        onClose={() => setLeaderboardsToReplace(null)}
        onTriggerReplace={() => {
          setShouldReplace(true);
          ensureLeaderboardsAreReplaced();
        }}
      />
    );
  };

  return {
    findLeaderboardsToReplace,
// @ts-expect-error - TS2322 - Type '() => React.JSX.Element | null' is not assignable to type '() => ReactElement<any, string | JSXElementConstructor<any>>'.
    renderLeaderboardReplacerDialog,
  };
};
