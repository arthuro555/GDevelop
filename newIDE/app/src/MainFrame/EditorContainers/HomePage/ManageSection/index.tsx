import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../../GameDashboard/GamesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GamesList.tsx', but '--jsx' is not set.
import GamesList from '../../../../GameDashboard/GamesList';
import { Game } from '../../../../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../../../UI/BackgroundText';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../../../UI/Link';
import Window from '../../../../Utils/Window';
import { getHelpLink } from '../../../../Utils/HelpLink';
import GameDetails, {
  gameDetailsTabs,
  GameDetailsTab,
// @ts-expect-error - TS6142 - Module '../../../../GameDashboard/GameDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameDetails.tsx', but '--jsx' is not set.
} from '../../../../GameDashboard/GameDetails';
// @ts-expect-error - TS6142 - Module '../../../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../../../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';

const publishingWikiArticle = getHelpLink('/publishing/');

const styles = {
  backgroundMessage: { padding: 16 },
  buttonContainer: { minWidth: 150 },
  gameDetailsContainer: { padding: 8, flex: 1, display: 'flex' },
} as const;

type Props = {
  project: gdProject | null | undefined,
  games: Array<Game> | null | undefined,
  onRefreshGames: () => Promise<void>,
  gamesFetchingError: Error | null | undefined,
  openedGame: Game | null | undefined,
  setOpenedGame: (arg1?: Game | null | undefined) => void,
  currentTab: GameDetailsTab,
  setCurrentTab: (arg1: GameDetailsTab) => void
};

const ManageSection = ({
  project,
  games,
  onRefreshGames,
  gamesFetchingError,
  openedGame,
  setOpenedGame,
  currentTab,
  setCurrentTab,
}: Props) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const {
    profile,
    onOpenCreateAccountDialog,
    onOpenLoginDialog,
  } = authenticatedUser;

  React.useEffect(
    () => {
      onRefreshGames();
    },
    // Refresh the games when the section is opened, useful when a game gets registered.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onBack = React.useCallback(
    () => {
      setCurrentTab('details');
      setOpenedGame(null);
    },
    [setCurrentTab, setOpenedGame]
  );

  if (openedGame) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SectionContainer
        flexBody
        title={null} // Use a smaller title below
        backAction={onBack}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="title" allowSelection>
          {openedGame.gameName}
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionRow expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Paper
            background="dark"
            square={false}
            style={styles.gameDetailsContainer}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin expand noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Tabs
                value={currentTab}
                onChange={setCurrentTab}
                options={gameDetailsTabs}
              />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <GameDetails
                game={openedGame}
                project={project}
                onGameUpdated={onRefreshGames}
                onGameDeleted={() => {
                  onBack();
                  onRefreshGames();
                }}
                onLoading={() => {}}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                analyticsSource="homepage"
              />
            </ColumnStackLayout>
          </Paper>
        </SectionRow>
      </SectionContainer>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer flexBody title={<Trans>Manage Games</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow expand>
        {!profile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Paper
            variant="outlined"
            background="dark"
            style={styles.backgroundMessage}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Log-in or create an account to access your{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Link
                    href={publishingWikiArticle}
                    onClick={() =>
                      Window.openExternalURL(publishingWikiArticle)
                    }
                  >
                    published games
                  </Link>{' '}
                  retention metrics, and player feedback.
                </Trans>
              </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                noMargin
                noColumnMargin
                justifyContent="center"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={styles.buttonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <FlatButton
                    fullWidth
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Login</Trans>}
                    onClick={onOpenLoginDialog}
                  />
                </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={styles.buttonContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RaisedButton
                    fullWidth
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Create an account</Trans>}
                    onClick={onOpenCreateAccountDialog}
                  />
                </div>
              </ResponsiveLineStackLayout>
            </ColumnStackLayout>
          </Paper>
        ) : games ? (
          games.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Paper
              variant="outlined"
              background="dark"
              style={styles.backgroundMessage}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        Learn how many users are playing your game, control
                        published versions, and collect feedback from play
                        testers.
                      </Trans>
                    </BackgroundText>
                  </Line>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Link
                          href={publishingWikiArticle}
                          onClick={() =>
                            Window.openExternalURL(publishingWikiArticle)
                          }
                        >
                          Share a project
                        </Link>{' '}
                        to get started.
                      </Trans>
                    </BackgroundText>
                  </Line>
                </Column>
              </ColumnStackLayout>
            </Paper>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <GamesList
              project={project}
              games={games}
              onRefreshGames={onRefreshGames}
              onOpenGame={setOpenedGame}
            />
          )
        ) : gamesFetchingError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError onRetry={onRefreshGames}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Can't load the games. Verify your internet connection or retry
              later.
            </Trans>
          </PlaceholderError>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PlaceholderLoader />
          </Column>
        )}
      </SectionRow>
    </SectionContainer>
  );
};

const ManageSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Manage section</Trans>}
    scope="start-page-manage"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ManageSection {...props} />
  </ErrorBoundary>
);

export default ManageSectionWithErrorBoundary;
