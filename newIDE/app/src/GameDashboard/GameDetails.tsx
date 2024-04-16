// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../UI/Grid';
import {
  Game,
  updateGame,
  deleteGame,
  getPublicGame,
  setGameUserAcls,
  setGameSlug,
  getAclsFromUserIds,
  getCategoryName,
} from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { TabOptions } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
import Chip from '@material-ui/core/Chip';
// @ts-expect-error - TS6142 - Module '../ExportAndShare/Builds' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/index.tsx', but '--jsx' is not set.
import Builds from '../ExportAndShare/Builds';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import { PublicGame } from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
import {
  PublicGamePropertiesDialog,
  PartialGameChange,
// @ts-expect-error - TS6142 - Module './PublicGamePropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGamePropertiesDialog.tsx', but '--jsx' is not set.
} from './PublicGamePropertiesDialog';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Crown'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Crown.js' implicitly has an 'any' type.
import Crown from '../UI/CustomSvgIcons/Crown';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module './LeaderboardAdmin' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/LeaderboardAdmin/index.tsx', but '--jsx' is not set.
import LeaderboardAdmin from './LeaderboardAdmin';
// @ts-expect-error - TS6142 - Module './GameAnalyticsPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameAnalyticsPanel.tsx', but '--jsx' is not set.
import { GameAnalyticsPanel } from './GameAnalyticsPanel';
// @ts-expect-error - TS6142 - Module './Feedbacks/GameFeedback' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/GameFeedback.tsx', but '--jsx' is not set.
import GameFeedback from './Feedbacks/GameFeedback';
// @ts-expect-error - TS6142 - Module './Monetization/GameMonetization' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Monetization/GameMonetization.tsx', but '--jsx' is not set.
import GameMonetization from './Monetization/GameMonetization';
// @ts-expect-error - TS6142 - Module '../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import RouterContext from '../MainFrame/RouterContext';
import { sendGameDetailsOpened } from '../Utils/Analytics/EventSender';
import useAlertDialog from '../UI/Alert/useAlertDialog';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../Credits/CreditsStatusBanner' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/CreditsStatusBanner.tsx', but '--jsx' is not set.
import CreditsStatusBanner from '../Credits/CreditsStatusBanner';
// @ts-expect-error - TS6142 - Module '../MarketingPlans/MarketingPlans' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MarketingPlans/MarketingPlans.tsx', but '--jsx' is not set.
import MarketingPlans from '../MarketingPlans/MarketingPlans';

export type GameDetailsTab = 'details' | 'builds' | 'feedback' | 'analytics' | 'leaderboards' | 'marketing';

export const gameDetailsTabs: TabOptions<GameDetailsTab> = [
  {
    value: 'details',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Details</Trans>,
  },
  {
    value: 'builds',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Builds</Trans>,
  },
  {
    value: 'feedback',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Feedback</Trans>,
  },
  {
    value: 'analytics',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Analytics</Trans>,
  },
  {
    value: 'leaderboards',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Leaderboards</Trans>,
  },
  {
    value: 'marketing',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Marketing & Ads</Trans>,
  },
];

type Props = {
  game: Game,
  project: gdProject | null | undefined,
  onGameUpdated: () => Promise<void>,
  onGameDeleted: () => void,
  onLoading: (arg1: boolean) => void,
  currentTab: GameDetailsTab,
  setCurrentTab: (arg1: GameDetailsTab) => void,
  analyticsSource: 'profile' | 'homepage' | 'projectManager'
};

const GameDetails = ({
  game,
  project,
  onGameUpdated,
  onGameDeleted,
  onLoading,
  currentTab,
  setCurrentTab,
  analyticsSource,
}: Props) => {
  const { routeArguments, removeRouteArguments } = React.useContext(
    RouterContext
  );
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
  const [
    gameUnregisterErrorText,
    setGameUnregisterErrorText,
  ] = React.useState<string | null | undefined>(null);
  const [isGameUpdating, setIsGameUpdating] = React.useState(false);
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'. | TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showConfirmation, showAlert } = useAlertDialog();

  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [publicGame, setPublicGame] = React.useState<PublicGame | null | undefined>(null);
  const [publicGameError, setPublicGameError] = React.useState<Error | null | undefined>(null);
  const [
    isPublicGamePropertiesDialogOpen,
    setIsPublicGamePropertiesDialogOpen,
  ] = React.useState(false);

  // If a game dashboard tab is specified, switch to it.
  React.useEffect(
    () => {
      if (routeArguments['games-dashboard-tab']) {
        // Ensure that the tab is valid.
        const gameDetailsTab = gameDetailsTabs.find(
// @ts-expect-error - TS7006 - Parameter 'gameDetailsTab' implicitly has an 'any' type.
          gameDetailsTab =>
            gameDetailsTab.value === routeArguments['games-dashboard-tab']
        );
        if (gameDetailsTab) setCurrentTab(gameDetailsTab.value);
        // Cleanup once open, to ensure it is not opened again.
        removeRouteArguments(['games-dashboard-tab']);
      }
    },
    [routeArguments, removeRouteArguments, setCurrentTab]
  );

  const loadPublicGame = React.useCallback(
    async () => {
      setPublicGameError(null);
      try {
        const publicGameResponse = await getPublicGame(game.id);
        setPublicGame(publicGameResponse);
      } catch (err: any) {
        console.error(`Unable to load the game:`, err);
        setPublicGameError(err);
      }
    },
    [game]
  );

  React.useEffect(
    () => {
      loadPublicGame();
    },
    [loadPublicGame]
  );

  React.useEffect(
    () => {
      sendGameDetailsOpened({ from: analyticsSource });
    },
    [analyticsSource]
  );

  const handleGameUpdated = React.useCallback(
    () => {
      // Set Public Game to null to show the loader.
      // It will be refetched thanks to loadPublicGame, because Game is updated.
      setPublicGame(null);
      onGameUpdated();
    },
    [onGameUpdated]
  );

  const updateGameFromProject = async (partialGameChange: PartialGameChange, i18n: I18nType): Promise<boolean> => {
    if (!project || !profile) return false;
    const { id } = profile;

    const ownerIds = partialGameChange.ownerIds;
    if (!ownerIds || !ownerIds.length) {
      await showAlert({
        title: t`Select an owner`,
        message: t`You must select at least one user to be the owner of the game.`,
      });
      return false;
    }

    try {
      setIsGameUpdating(true);
      const gameId = project.getProjectUuid();
      await updateGame(getAuthorizationHeader, id, gameId, {
        authorName: project.getAuthor() || 'Unspecified publisher',
        gameName: project.getName() || 'Untitled game',
        categories: project.getCategories().toJSArray() || [],
        description: project.getDescription() || '',
        playWithKeyboard: project.isPlayableWithKeyboard(),
        playWithGamepad: project.isPlayableWithGamepad(),
        playWithMobile: project.isPlayableWithMobile(),
        orientation: project.getOrientation(),
        discoverable: partialGameChange.discoverable,
      });
      if (
        partialGameChange.userSlug &&
        partialGameChange.gameSlug &&
        partialGameChange.userSlug === profile.username
      ) {
        try {
          await setGameSlug(
            getAuthorizationHeader,
            id,
            gameId,
            partialGameChange.userSlug,
            partialGameChange.gameSlug
          );
        } catch (error: any) {
          console.error(
            'Unable to update the game slug:',
            error.response || error.message
          );
          showErrorBox({
            message:
              i18n._(
                t`Unable to update the game slug. A slug must be 6 to 30 characters long and only contains letters, digits or dashes.`
              ) +
              ' ' +
              i18n._(t`Verify your internet connection or try again later.`),
            rawError: error,
            errorId: 'game-slug-update-error',
          });
          setIsGameUpdating(false);
          return false;
        }
      }
      try {
        const authorAcls = getAclsFromUserIds(
          project.getAuthorIds().toJSArray()
        );
        const ownerAcls = getAclsFromUserIds(ownerIds);
        await setGameUserAcls(getAuthorizationHeader, id, gameId, {
          ownership: ownerAcls,
          author: authorAcls,
        });
      } catch (error: any) {
        console.error(
          'Unable to update the game owners or authors:',
          error.response || error.message
        );
        showErrorBox({
          message:
            i18n._(
              t`Unable to update the game owners or authors. Have you removed yourself from the owners?`
            ) +
            ' ' +
            i18n._(t`Verify your internet connection or try again later.`),
          rawError: error,
          errorId: 'game-acls-update-error',
        });
        setIsGameUpdating(false);
        return false;
      }
      handleGameUpdated();
    } catch (error: any) {
      console.error(
        'Unable to update the game:',
        error.response || error.message
      );
      showErrorBox({
        message:
          i18n._(t`Unable to update the game details.`) +
          ' ' +
          i18n._(t`Verify your internet connection or try again later.`),
        rawError: error,
        errorId: 'game-details-update-error',
      });
      setIsGameUpdating(false);
      return false;
    }

    setIsGameUpdating(false);
    return true;
  };

  const unregisterGame = React.useCallback(
    async (i18n: I18nType) => {
      if (!profile) return;
      const { id } = profile;
      setGameUnregisterErrorText(null);
      onLoading(true);
      try {
        setIsGameUpdating(true);
        await deleteGame(getAuthorizationHeader, id, game.id);
        onGameDeleted();
      } catch (error: any) {
        console.error('Unable to delete the game:', error);
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (
          extractedStatusAndCode &&
          extractedStatusAndCode.code === 'game-deletion/leaderboards-exist'
        ) {
          setGameUnregisterErrorText(
            i18n._(
              t`You cannot unregister a game that has active leaderboards. To delete them, go in the Leaderboards tab, and delete them one by one.`
            )
          );
        }
      } finally {
        setIsGameUpdating(false);
        onLoading(false);
      }
    },
    [onLoading, game.id, profile, onGameDeleted, getAuthorizationHeader]
  );

  const unpublishGame = React.useCallback(
    async () => {
      if (!profile) return;

      const { id } = profile;
      try {
        setIsGameUpdating(true);
        await updateGame(getAuthorizationHeader, id, game.id, {
          publicWebBuildId: null,
        });
        handleGameUpdated();
      } catch (err: any) {
        console.error('Unable to update the game', err);
      } finally {
        setIsGameUpdating(false);
      }
    },
    [game, getAuthorizationHeader, profile, handleGameUpdated]
  );

  const onClickUnregister = React.useCallback(
    async (i18n: I18nType) => {
      const answer = await showConfirmation({
        title: t`Unregister game`,
        message: t`Are you sure you want to unregister this game?${'\n\n'}It will disappear from your games dashboard and you won't get access to analytics, unless you register it again.`,
      });

      if (!answer) return;

      unregisterGame(i18n);
    },
    [unregisterGame, showConfirmation]
  );

  const onClickUnpublish = React.useCallback(
    async (i18n: I18nType) => {
      const answer = await showConfirmation({
        title: t`Unpublish game`,
        message: t`Are you sure you want to unpublish this game?${'\n\n'}This will make your gd.games unique game URL not accessible anymore.${'\n\n'}You can decide at any time to publish it again.`,
      });

      if (!answer) return;

      unpublishGame();
    },
    [unpublishGame, showConfirmation]
  );

  const authorUsernames =
    publicGame &&
    publicGame.authors.map(author => author.username).filter(Boolean);

  const ownerUsernames =
    publicGame &&
    publicGame.owners.map(owner => owner.username).filter(Boolean);

  const isGameOpenedAsProject =
    !!project && project.getProjectUuid() === game.id;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line expand noMargin useFullHeight>
            {currentTab === 'leaderboards' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LeaderboardAdmin gameId={game.id} onLoading={onLoading} />
            ) : null}
            {currentTab === 'details' ? (
              publicGameError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PlaceholderError onRetry={loadPublicGame}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>There was an issue getting the game details.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Verify your internet connection or try again later.
                  </Trans>
                </PlaceholderError>
              ) : !publicGame ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PlaceholderLoader />
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout expand noMargin>
                  {!isGameOpenedAsProject && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        In order to update these details you have to open the
                        game's project.
                      </Trans>
                    </AlertMessage>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line
                      expand
                      justifyContent="flex-start"
                      alignItems="center"
                      noMargin
                    >
                      {authorUsernames && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>Authors:</Trans>
                          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Line noMargin>
                            {authorUsernames.map((username, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <React.Fragment key={username}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Chip
                                  size="small"
                                  icon={
                                    ownerUsernames &&
                                    ownerUsernames.includes(username) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <Crown />
                                    ) : (
                                      undefined
                                    )
                                  }
                                  className="notranslate"
                                  label={username}
                                  color={index === 0 ? 'primary' : 'default'}
                                />
                              </React.Fragment>
                            ))}
                          </Line>
                        </>
                      )}
                    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line expand justifyContent="flex-end" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>
                          Created on {i18n.date(game.createdAt * 1000)}
                        </Trans>
                      </Text>
                    </Line>
                  </Line>
                  {(publicGame.playWithKeyboard ||
                    publicGame.playWithGamepad ||
                    publicGame.playWithMobile ||
                    publicGame.categories) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line
                        expand
                        justifyContent="flex-start"
                        alignItems="center"
                        noMargin
                      >
                        {publicGame.categories &&
                          !!publicGame.categories.length && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Trans>Genres:</Trans>
                              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Line noMargin>
                                {publicGame.categories.map(
                                  (category, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <React.Fragment key={category}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Chip
                                        size="small"
                                        label={getCategoryName(category, i18n)}
                                        color={
                                          index === 0 ? 'primary' : 'default'
                                        }
                                      />
                                    </React.Fragment>
                                  )
                                )}
                              </Line>
                            </>
                          )}
                      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line expand justifyContent="flex-end" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        {publicGame.playWithKeyboard && <KeyboardIcon />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        {publicGame.playWithGamepad && <SportsEsportsIcon />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        {publicGame.playWithMobile && <SmartphoneIcon />}
                      </Line>
                    </Line>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    value={publicGame.gameName}
                    readOnly
                    fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Game name</Trans>}
                    floatingLabelFixed={true}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    value={publicGame.description || ''}
                    readOnly
                    fullWidth
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>Game description</Trans>}
                    floatingLabelFixed={true}
                    translatableHintText={t`No description set.`}
                    multiline
                    rows={5}
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectField
                    disabled
                    fullWidth
                    floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Device orientation (for mobile)</Trans>
                    }
                    value={publicGame.orientation}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectOption value="default" label={t`Platform default`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectOption value="landscape" label={t`Landscape`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <SelectOption value="portrait" label={t`Portrait`} />
                  </SelectField>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveLineStackLayout noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <FlatButton
                      onClick={() => onClickUnregister(i18n)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Unregister this game</Trans>}
                      disabled={isGameUpdating}
                    />
                    {publicGame.publicWebBuildId && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <RaisedButton
                        onClick={() => onClickUnpublish(i18n)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Unpublish from gd.games</Trans>}
                        disabled={isGameUpdating}
                      />
                    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RaisedButton
                      primary
                      onClick={() => setIsPublicGamePropertiesDialogOpen(true)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Edit game details</Trans>}
                      disabled={!isGameOpenedAsProject || isGameUpdating}
                    />
                  </ResponsiveLineStackLayout>
                  {gameUnregisterErrorText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <PlaceholderError>
                      {gameUnregisterErrorText}
                    </PlaceholderError>
                  ) : null}
                </ColumnStackLayout>
              )
            ) : null}
            {currentTab === 'builds' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Builds
                game={game}
                authenticatedUser={authenticatedUser}
                onGameUpdated={onGameUpdated}
              />
            ) : null}
            {currentTab === 'analytics' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GameAnalyticsPanel game={game} />
            ) : null}
            {currentTab === 'feedback' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <GameFeedback
                i18n={i18n}
                authenticatedUser={authenticatedUser}
                game={game}
              />
            ) : null}
            {currentTab === 'marketing' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CreditsStatusBanner displayPurchaseAction />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Marketing Campaigns</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <MarketingPlans game={game} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <GameMonetization
                  game={game}
                  onGameUpdated={handleGameUpdated}
                />
              </ColumnStackLayout>
            ) : null}
          </Line>
          {publicGame && project && isPublicGamePropertiesDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PublicGamePropertiesDialog
              project={project}
              publicGame={publicGame}
// @ts-expect-error - TS7006 - Parameter 'partialGameChange' implicitly has an 'any' type.
              onApply={async partialGameChange => {
                const isGameUpdated = await updateGameFromProject(
                  partialGameChange,
                  i18n
                );
                if (isGameUpdated) {
                  setIsPublicGamePropertiesDialogOpen(false);
                }
              }}
              onClose={() => setIsPublicGamePropertiesDialogOpen(false)}
              isLoading={isGameUpdating}
              i18n={i18n}
            />
          )}
        </>
      )}
    </I18n>
  );
};

export default GameDetails;
