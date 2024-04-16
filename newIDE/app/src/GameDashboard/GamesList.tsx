// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
import * as React from 'react';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { Game, registerGame } from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module './GameCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameCard.tsx', but '--jsx' is not set.
import { GameCard } from './GameCard';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module './GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameRegistration } from './GameRegistration';
// @ts-expect-error - TS6142 - Module './GameDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameDetails.tsx', but '--jsx' is not set.
import { GameDetailsTab } from './GameDetails';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../MainFrame/RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import RouterContext from '../MainFrame/RouterContext';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../UI/SearchBar';
import { useDebounce } from '../Utils/UseDebounce';
import Fuse from 'fuse.js';
import {
  getFuseSearchQueryForSimpleArray,
  sharedFuseConfiguration,
} from '../UI/Search/UseSearchStructuredItem';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';

const pageSize = 10;

const styles = { noGameMessageContainer: { padding: 10 } } as const;

const getGamesToDisplay = (
  {
    project,
    games,
    searchText,
    searchClient,
    currentPage,
  }: {
    project: gdProject | null | undefined,
    games: Array<Game>,
    searchText: string,
// @ts-expect-error - TS2314 - Generic type 'Fuse<T>' requires 1 type argument(s).
    searchClient: Fuse,
    currentPage: number
  },
): Array<Game> => {
  if (searchText) {
    const searchResults = searchClient.search(
      getFuseSearchQueryForSimpleArray(searchText)
    );
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
    return searchResults.map(result => result.item);
  }
  const projectUuid = project ? project.getProjectUuid() : null;
  const thisGame = games.find(game => !!projectUuid && game.id === projectUuid);
  const orderedGames = thisGame
    ? [thisGame, ...games.filter(game => game.id !== thisGame.id)]
    : games;
  return orderedGames.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
};

type Props = {
  project: gdProject | null | undefined,
  games: Array<Game>,
  onRefreshGames: () => Promise<void>,
  onOpenGame: (arg1?: Game | null | undefined) => void
};

const GamesList = ({
  project,
  games,
  onRefreshGames,
  onOpenGame,
}: Props) => {
  const {
    routeArguments,
    addRouteArguments,
    removeRouteArguments,
  } = React.useContext(RouterContext);
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'. | TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showAlert, showConfirmation } = useAlertDialog();
  const [isGameRegistering, setIsGameRegistering] = React.useState(false);
  const [searchText, setSearchText] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const searchClient = React.useMemo(
    () =>
      new Fuse(games, {
        ...sharedFuseConfiguration,
        keys: [{ name: 'gameName', weight: 1 }],
      }),
    [games]
  );

  const [displayedGames, setDisplayedGames] = React.useState<Array<Game>>(getGamesToDisplay({
    project,
    games,
    searchText,
    searchClient,
    currentPage,
  }));

  const onRegisterGame = React.useCallback(
    async () => {
      if (!profile || !project) return;

      const { id } = profile;
      try {
        setIsGameRegistering(true);
        await registerGame(getAuthorizationHeader, id, {
          gameId: project.getProjectUuid(),
          authorName: project.getAuthor() || 'Unspecified publisher',
          gameName: project.getName() || 'Untitled game',
          templateSlug: project.getTemplateSlug(),
        });
        await onRefreshGames();
      } catch (error: any) {
        console.error('Unable to register the game.', error);
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (extractedStatusAndCode && extractedStatusAndCode.status === 403) {
          await showAlert({
            title: t`Game already registered`,
            message: t`The project currently opened is registered online but you don't have
          access to it. Ask the original owner of the game to share it with you
          to be able to manage it.`,
          });
        } else {
          await showAlert({
            title: t`Unable to register the game`,
            message: t`An error happened while registering the game. Verify your internet connection
          or retry later.`,
          });
        }
      } finally {
        setIsGameRegistering(false);
      }
    },
    [getAuthorizationHeader, profile, project, showAlert, onRefreshGames]
  );

  React.useEffect(
    () => {
      const loadInitialGame = async () => {
        // When games are loaded and we have an initial game id, try to open it.
        const initialGameId = routeArguments['game-id'];
        if (games && initialGameId) {
          const game = games.find(game => game.id === initialGameId);
          removeRouteArguments(['game-id']);
          if (game) {
            onOpenGame(game);
          } else {
            // If the game is not in the list, then either
            // - allow to register it, if it's the current project.
            // - suggest to open the file before continuing, if it's not the current project.
            if (project && project.getProjectUuid() === initialGameId) {
              const answer = await showConfirmation({
                title: t`Game not found`,
                message: t`This project is not registered online. Register it now
              to get access to leaderboards, player accounts, analytics and more!`,
                confirmButtonLabel: t`Register`,
              });
              if (!answer) return;

              await onRegisterGame();
            } else {
              await showAlert({
                title: t`Game not found`,
                message: t`The game you're trying to open is not registered online. Open the project
              file, then register it before continuing.`,
              });
            }
          }
        }
      };
      loadInitialGame();
    },
    [
      games,
      routeArguments,
      removeRouteArguments,
      onRegisterGame,
      showConfirmation,
      showAlert,
      project,
      onOpenGame,
    ]
  );

  const getGamesToDisplayDebounced = useDebounce(
    () => {
      setDisplayedGames(
        getGamesToDisplay({
          project,
          games,
          searchText,
          searchClient,
          currentPage,
        })
      );
    },
    // Use debounce when searching for a game.
    // Keep a lower debounce when changing pages so that the UI does not refresh until the
    // user stops changing pages, giving a sense of rapidity.
    searchText ? 250 : 150
  );

  // Refresh games to display when:
  // - search text changes (user input)
  // - games change (refresh following an update for instance)
  // - user changes page
  React.useEffect(getGamesToDisplayDebounced, [
    getGamesToDisplayDebounced,
    searchText,
    games,
    currentPage,
  ]);

  const projectUuid = project ? project.getProjectUuid() : null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {!isGameRegistering && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GameRegistration
          project={project}
          hideLoader
          onGameRegistered={onRefreshGames}
        />
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SearchBar
            value={searchText}
            onChange={setSearchText}
            // Search is triggered on each search text change
            onRequestSearch={() => {}}
            placeholder={t`Search by name`}
          />
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          tooltip={t`Previous page`}
          onClick={() => setCurrentPage(currentPage => currentPage - 1)}
          disabled={!!searchText || currentPage === 0}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ChevronArrowLeft />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text noMargin style={{ opacity: searchText ? 0.6 : 1 }}>
          {searchText ? 1 : currentPage + 1}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          tooltip={t`Next page`}
          onClick={() => setCurrentPage(currentPage => currentPage + 1)}
          disabled={
            !!searchText || (currentPage + 1) * pageSize >= games.length
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ChevronArrowRight />
        </IconButton>
      </Line>

      {displayedGames.length > 0 ? (
        displayedGames.map(game => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GameCard
            key={game.id}
            isCurrentGame={!!projectUuid && game.id === projectUuid}
            game={game}
            onOpenGameManager={(tab: GameDetailsTab) => {
              addRouteArguments({ 'games-dashboard-tab': tab });
              onOpenGame(game);
            }}
            onUpdateGame={onRefreshGames}
          />
        ))
      ) : !!searchText ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Paper
            variant="outlined"
            background="dark"
            style={styles.noGameMessageContainer}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>No game matching your search.</Trans>
            </BackgroundText>
          </Paper>
        </Column>
      ) : null}
    </ColumnStackLayout>
  );
};

export default GamesList;
