import * as React from 'react';
import { getGames, Game } from '../Utils/GDevelopServices/Game';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

const useGamesList = () => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const gamesFetchingPromise = React.useRef<Promise<any> | null | undefined>(
    null
  );
  const { authenticated, firebaseUser, getAuthorizationHeader } =
    authenticatedUser;

  const [games, setGames] = React.useState<Array<Game> | null | undefined>(
    null
  );
  const [gamesFetchingError, setGamesFetchingError] = React.useState<
    Error | null | undefined
  >(null);

  const fetchGames = React.useCallback(async (): Promise<void> => {
    if (!authenticated || !firebaseUser) {
      setGames(null);
      return;
    }
    if (gamesFetchingPromise.current) return gamesFetchingPromise.current;

    try {
      setGamesFetchingError(null);
      gamesFetchingPromise.current = getGames(
        getAuthorizationHeader,
        firebaseUser.uid
      );
      const fetchedGames = await gamesFetchingPromise.current;
      setGames(fetchedGames);
    } catch (error) {
      console.error('Error while loading user games.', error);
// @ts-expect-error - TS2345 - Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<Error | null | undefined>'.
      setGamesFetchingError(error);
    } finally {
      gamesFetchingPromise.current = null;
    }
  }, [authenticated, firebaseUser, getAuthorizationHeader]);

  const onGameUpdated = React.useCallback(
    (updatedGame: Game) => {
      if (!games) return;
      setGames(
        games.map((game) => (game.id === updatedGame.id ? updatedGame : game))
      );
    },
    [games]
  );

  return {
    games,
    gamesFetchingError,
    fetchGames,
    onGameUpdated,
  };
};

export default useGamesList;
