// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
import { Game } from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
import GameDetails, {
  gameDetailsTabs,
  GameDetailsTab,
// @ts-expect-error - TS6142 - Module './GameDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameDetails.tsx', but '--jsx' is not set.
} from './GameDetails';
// @ts-expect-error - TS6142 - Module '../UI/EmptyPlaceholder' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyPlaceholder.tsx', but '--jsx' is not set.
import { EmptyPlaceholder } from '../UI/EmptyPlaceholder';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Publish'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Publish.js' implicitly has an 'any' type.
import Publish from '../UI/CustomSvgIcons/Publish';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

type Props = {
  game: Game | null | undefined,
  project: gdProject | null | undefined,
  onClose: () => void,
  onGameUpdated: () => Promise<void>,
  onGameDeleted: () => void,
  analyticsSource: 'profile' | 'homepage' | 'projectManager',
  onShareProject?: () => void
};

export const GameDetailsDialog = ({
  game,
  project,
  onClose,
  onGameUpdated,
  onGameDeleted,
  analyticsSource,
  onShareProject,
}: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentTab, setCurrentTab] = React.useState<GameDetailsTab>('details');

  const { profile, onOpenLoginDialog } = React.useContext(
    AuthenticatedUserContext
  );
  const onClickShare = React.useCallback(
    () => {
      if (!profile) {
        onOpenLoginDialog();
        return;
      }
      if (onShareProject) {
        onShareProject();
      }
    },
    [profile, onShareProject, onOpenLoginDialog]
  );

  const gameName = game ? game.gameName : project ? project.getName() : '';
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>{gameName} Dashboard</Trans>}
          open
          flexColumnBody
          fullHeight
          maxWidth="lg"
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              disabled={isLoading}
              onClick={onClose}
              key="close"
            />,
          ]}
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton
              key="help"
              helpPagePath={
                currentTab === 'leaderboards'
                  ? '/interface/games-dashboard/leaderboard-administration'
                  : '/interface/games-dashboard'
              }
            />,
          ]}
          onRequestClose={onClose}
          cannotBeDismissed={isLoading}
          fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Tabs
              value={currentTab}
              onChange={setCurrentTab}
              options={gameDetailsTabs}
            />
          }
        >
          {game ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <GameDetails
              game={game}
              project={project}
              onGameUpdated={onGameUpdated}
              onGameDeleted={onGameDeleted}
              onLoading={setIsLoading}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              analyticsSource={analyticsSource}
            />
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column noMargin expand justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EmptyPlaceholder
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                title={<Trans>Share your project online</Trans>}
                description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>
                    Share your project online to unlock player engagement
                    analytics, player feedback and other functionalities.
                  </Trans>
                }
                helpPagePath="/publishing"
                actionButtonId="game-detail-share-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                actionIcon={<Publish />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                actionLabel={<Trans>Share</Trans>}
                onAction={onClickShare}
              />
            </Column>
          )}
        </Dialog>
      )}
    </I18n>
  );
};
