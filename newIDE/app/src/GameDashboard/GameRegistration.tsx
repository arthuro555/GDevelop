// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../Profile/CreateProfile' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateProfile.tsx', but '--jsx' is not set.
import CreateProfile from '../Profile/CreateProfile';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import {
  Game,
  getGame,
  registerGame,
  updateGame,
} from '../Utils/GDevelopServices/Game';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../UI/Toggle';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../MarketingPlans/MarketingPlansDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/MarketingPlansDialog.tsx', but '--jsx' is not set.
import MarketingPlansDialog from '../MarketingPlans/MarketingPlansDialog';

export type GameRegistrationProps = {
  project: gdProject | null | undefined,
  suggestAdditionalActions?: boolean,
  hideLoader?: boolean,
  hideLogin?: boolean,
  onGameRegistered?: () => undefined | Promise<undefined>
};

export type GameAvailabilityError = 'not-found' | 'not-owned' | 'unexpected';

export const GameRegistration = ({
  project,
  suggestAdditionalActions,
  hideLoader,
  onGameRegistered,
}: GameRegistrationProps) => {
  const {
    onOpenLoginDialog,
    onOpenCreateAccountDialog,
    getAuthorizationHeader,
    profile,
    onAcceptGameStatsEmail,
  } = React.useContext(AuthenticatedUserContext);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const [error, setError] = React.useState<Error | null>(null);
  const [
    gameAvailabilityError,
    setGameAvailabilityError,
  ] = React.useState<GameAvailabilityError | null | undefined>(null);
  const [game, setGame] = React.useState<Game | null>(null);
  const [registrationInProgress, setRegistrationInProgress] = React.useState(
    false
  );
  const [
    toggleGameStatsEmailInProgress,
    setToggleGameStatsEmailInProgress,
  ] = React.useState(false);
  const [
    toggleGameCommentsInProgress,
    setToggleGameCommentsInProgress,
  ] = React.useState(false);
  const [
    marketingPlansDialogOpen,
    setMarketingPlansDialogOpen,
  ] = React.useState(false);

  const loadGame = React.useCallback(
    async () => {
      if (!profile || !project) return;

      const { id } = profile;
      setError(null);
      try {
        const game = await getGame(
          getAuthorizationHeader,
          id,
          project.getProjectUuid()
        );
        setGameAvailabilityError(null);
        setGame(game);
      } catch (error: any) {
        console.error(
          `Unable to get the game ${project.getProjectUuid()}`,
          error
        );
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (extractedStatusAndCode) {
          if (extractedStatusAndCode.status === 403) {
            setGameAvailabilityError('not-owned');
            return;
          } else if (extractedStatusAndCode.status === 404) {
            setGameAvailabilityError('not-found');
            return;
          }
          setGameAvailabilityError('unexpected');
        }

        setError(error);
      }
    },
    [project, getAuthorizationHeader, profile]
  );

  const onRegisterGame = React.useCallback(
    async () => {
      if (!profile || !project) return;

      const { id } = profile;
      setRegistrationInProgress(true);
      try {
        await registerGame(getAuthorizationHeader, id, {
          gameId: project.getProjectUuid(),
          authorName: project.getAuthor() || 'Unspecified publisher',
          gameName: project.getName() || 'Untitled game',
          templateSlug: project.getTemplateSlug(),
        });
        loadGame();
        if (onGameRegistered) onGameRegistered();
      } catch (error: any) {
        console.error('Unable to register the game', error);
        showAlert({
          title: t`Unable to register the game`,
          message: t`Verify your internet connection or try again later.`,
        });
      }
      setRegistrationInProgress(false);
    },
    [
      getAuthorizationHeader,
      profile,
      project,
      loadGame,
      onGameRegistered,
      showAlert,
    ]
  );

  const onToggleGameStatsEmail = React.useCallback(
    async (value: boolean) => {
      if (!profile || !game) return;

      setToggleGameStatsEmailInProgress(true);
      try {
        await onAcceptGameStatsEmail(value);
      } catch (error: any) {
        console.error('Unable to change your email preferences.', error);
        showAlert({
          title: t`Unable to change your email preferences`,
          message: t`Verify your internet connection or try again later.`,
        });
      }
      setToggleGameStatsEmailInProgress(false);
    },
    [profile, game, onAcceptGameStatsEmail, showAlert]
  );

  const onToggleGameComments = React.useCallback(
    async (value: boolean) => {
      if (!profile || !game) return;

      setToggleGameCommentsInProgress(true);
      try {
        const newGame = await updateGame(
          getAuthorizationHeader,
          profile.id,
          game.id,
          {
            acceptsGameComments: value,
          }
        );
        setGame(newGame);
      } catch (error: any) {
        console.error('Unable to change feedback for this game.', error);
        showAlert({
          title: t`Unable to change feedback for this game`,
          message: t`Verify your internet connection or try again later.`,
        });
      }
      setToggleGameCommentsInProgress(false);
    },
    [profile, game, getAuthorizationHeader, showAlert]
  );

  React.useEffect(
    () => {
      if (!game) {
        loadGame();
      }
    },
    [loadGame, game]
  );

  if (!project) {
    return null;
  }

  if (!profile) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <CreateProfile
        onOpenLoginDialog={onOpenLoginDialog}
        onOpenCreateAccountDialog={onOpenCreateAccountDialog}
      />
    );
  }

  if (gameAvailabilityError === 'not-found') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <AlertMessage
        kind="info"
        renderRightButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Register the project</Trans>}
            disabled={registrationInProgress}
            primary
            onClick={onRegisterGame}
          />
        )}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          The project currently opened is not registered online. Register it now
          to get access to leaderboards, player accounts, analytics and more!
        </Trans>
      </AlertMessage>
    );
  }

  if (gameAvailabilityError === 'not-owned') {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          The project currently opened is registered online but you don't have
          access to it. Ask the original owner of the game to share it with you
          to be able to manage it.
        </Trans>
      </AlertMessage>
    );
  }

  if (error) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PlaceholderError
        onRetry={() => {
          loadGame();
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Can't check if the game is registered online.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Verify your internet connection or try again later.</Trans>
      </PlaceholderError>
    );
  }

  if (!game && !hideLoader) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <PlaceholderLoader />;
  }

  if (game && suggestAdditionalActions) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Taking your game further</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Toggle
                onToggle={() =>
                  onToggleGameStatsEmail(!profile.getGameStatsEmail)
                }
                toggled={profile.getGameStatsEmail}
                labelPosition="right"
                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Receive weekly stats about your game by email</Trans>
                }
                disabled={toggleGameStatsEmailInProgress}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Toggle
                onToggle={() => onToggleGameComments(!game.acceptsGameComments)}
                toggled={!!game.acceptsGameComments}
                labelPosition="right"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Open game for player feedback</Trans>}
                disabled={toggleGameCommentsInProgress}
              />
            </Column>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Promoting your game to the community</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Get ready-made packs to make your game visible to the GDevelop
                community.
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>See marketing packs</Trans>}
                primary
                onClick={() => setMarketingPlansDialogOpen(true)}
              />
            </Line>
          </Column>
        </ColumnStackLayout>
        {marketingPlansDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <MarketingPlansDialog
            game={game}
            onClose={() => setMarketingPlansDialogOpen(false)}
          />
        )}
      </>
    );
  }

  return null; // Hide the component if the game is registered.
};
