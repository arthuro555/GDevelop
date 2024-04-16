// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import { Chip } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../UI/Toggle';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';

// @ts-expect-error - TS6142 - Module './GameThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameThumbnail.tsx', but '--jsx' is not set.
import { GameThumbnail } from './GameThumbnail';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module './ShareGameDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/ShareGameDialog.tsx', but '--jsx' is not set.
import ShareGameDialog from './ShareGameDialog';

import {
  deleteGame,
  getGameUrl,
  updateGame,
  Game,
} from '../Utils/GDevelopServices/Game';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module './GameDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameDetails.tsx', but '--jsx' is not set.
import { GameDetailsTab } from './GameDetails';
import { showErrorBox } from '../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/Card' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Card.tsx', but '--jsx' is not set.
import Card from '../UI/Card';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Share'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Share.js' implicitly has an 'any' type.
import Share from '../UI/CustomSvgIcons/Share';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';

type Props = {
  game: Game,
  isCurrentGame: boolean,
  onOpenGameManager: (tab: GameDetailsTab) => void,
  onUpdateGame: () => Promise<void>
};

type TogglableProperties = 'discoverable' | 'acceptsBuildComments' | 'acceptsGameComments';

const confirmationMessage = {
  discoverable: {
    true: t`
        You are about to make this game discoverable on gd.games categories pages.
        Do you want to continue?
      `,
    false: t`
        You are about to hide this game from gd.games categories pages.
        Do you want to continue?
      `,
  },
  acceptsBuildComments: {
    true: t`
        You are about to activate a feedback banner on all builds of this game.
        By doing this you're allowing feedback from any player who has access to your gd.games build URLs.
        Do you want to continue?
      `,
    false: t`
        You are about to de-activate the feedback banner on all your gd.games build pages.
        Do you want to continue ?
      `,
  },
  acceptsGameComments: {
    true: t`
        You are about to activate a feedback banner on your gd.games game page.
        By doing this you will receive feedback from any gd.games visitor.
        Do you want to continue?
      `,
    false: t`
        You are about to de-activate the feedback banner on your gd.games game page.
        Do you want to continue ?
      `,
  },
} as const;

export const GameCard = ({
  game,
  isCurrentGame,
  onOpenGameManager,
  onUpdateGame,
}: Props) => {
  const openGameUrl = () => {
    const url = getGameUrl(game);
    if (!url) return;
    Window.openExternalURL(url);
  };
  const [showShareGameDialog, setShowShareGameDialog] = React.useState(false);
  const [
    editedProperty,
    setEditedProperty,
  ] = React.useState<TogglableProperties | null | undefined>(null);
  const [isDeletingGame, setIsDeletingGame] = React.useState(false);

  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );

  const onToggle = async (
    i18n: I18nType,
    property: TogglableProperties,
    newValue: boolean
  ) => {
    if (!profile) return;
    const answer = Window.showConfirmDialog(
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly true: any; readonly false: any; } | { readonly true: any; readonly false: any; } | { readonly true: any; readonly false: any; }'.
      i18n._(confirmationMessage[property][newValue.toString()])
    );
    if (!answer) return;
    setEditedProperty(property);
    try {
      await updateGame(getAuthorizationHeader, profile.id, game.id, {
        // $FlowFixMe - We know that the property is a game property.
        [property]: newValue,
      });
      await onUpdateGame();
    } catch (error: any) {
      console.error(`Unable to update property ${property}`, error);
      showErrorBox({
        message:
          i18n._(t`Unable to update game.`) +
          ' ' +
          i18n._(t`Verify your internet connection or try again later.`),
        rawError: error,
        errorId: 'game-dashboard-update-game-error',
      });
    }
    setEditedProperty(null);
  };

  const unregisterGame = async (i18n: I18nType) => {
    const answer = Window.showConfirmDialog(
      i18n._(t`Are you sure you want to unregister this game?`) +
        '\n\n' +
        i18n._(
          t`It will disappear from your games dashboard and you won't get access to analytics, unless you register it again.`
        )
    );
    if (!answer) return;

    if (!profile) return;
    const { id } = profile;
    setIsDeletingGame(true);

    try {
      await deleteGame(getAuthorizationHeader, id, game.id);
      await onUpdateGame();
    } catch (error: any) {
      console.error('Unable to delete the game:', error);
      const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
        error
      );
      if (
        extractedStatusAndCode &&
        extractedStatusAndCode.code === 'game-deletion/leaderboards-exist'
      ) {
        showErrorBox({
          message: i18n._(
            t`You cannot unregister a game that has active leaderboards. To delete them, go in the Leaderboards tab, and delete them one by one.`
          ),
          rawError: error,
          errorId: 'game-dashboard-unregister-game-active-leaderboards-error',
        });
      } else {
        showErrorBox({
          message:
            i18n._(t`Unable to delete the game.`) +
            ' ' +
            i18n._(t`Verify your internet connection or try again later.`),
          rawError: error,
          errorId: 'game-dashboard-unregister-game-active-leaderboards-error',
        });
      }
      setIsDeletingGame(false);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Card
            key={game.id}
            background={isCurrentGame ? 'dark' : 'medium'}
            cardCornerAction={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ElementWithMenu
                element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <IconButton size="small" disabled={isDeletingGame}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ThreeDotsMenu />
                  </IconButton>
                }
                buildMenuTemplate={(i18n: I18nType) => [
                  {
                    label: i18n._(t`Game details`),
                    click: () => onOpenGameManager('details'),
                  },
                  {
                    label: i18n._(t`Game builds`),
                    click: () => onOpenGameManager('builds'),
                  },
                  {
                    label: i18n._(t`Game feedbacks`),
                    click: () => onOpenGameManager('feedback'),
                  },
                  {
                    label: i18n._(t`Game analytics`),
                    click: () => onOpenGameManager('analytics'),
                  },
                  {
                    label: i18n._(t`Game leaderboards`),
                    click: () => onOpenGameManager('leaderboards'),
                  },
                  { type: 'separator' },
                  {
                    label: i18n._(t`Unregister game`),
                    click: () => {
                      unregisterGame(i18n);
                    },
                  },
                ]}
              />
            }
            header={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
                {game.publicWebBuildId && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text size="body2" noMargin displayInlineAsSpan>
                      {game.discoverable ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Public on gd.games</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Not visible on gd.games</Trans>
                      )}
                    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
                  </>
                )}

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Created on {i18n.date(game.createdAt * 1000)}</Trans>
                </BackgroundText>
              </Line>
            }
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <GameThumbnail
                  gameName={game.gameName}
                  thumbnailUrl={game.thumbnailUrl}
                  background={isCurrentGame ? 'medium' : 'light'}
                />
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ResponsiveLineStackLayout noMargin alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CardHeader
                    title={game.gameName}
                    subheader={
                      isCurrentGame && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Chip
                          size="small"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          label={<Trans>Currently edited</Trans>}
                          color="primary"
                        />
                      )
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ResponsiveLineStackLayout
                      justifyContent="flex-end"
                      noColumnMargin
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Manage game</Trans>}
                        onClick={() => onOpenGameManager('details')}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            label={<Trans>Open in browser</Trans>}
                            onClick={openGameUrl}
                            primary
                            disabled={!game.publicWebBuildId || isDeletingGame}
                          />
                        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <IconButton
                          size="small"
                          disabled={!game.publicWebBuildId || isDeletingGame}
                          onClick={() => setShowShareGameDialog(true)}
                          tooltip={t`Share`}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Share />
                        </IconButton>
                      </LineStackLayout>
                    </ResponsiveLineStackLayout>
                  </Column>
                </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin justifyContent="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Toggle
                    labelPosition="left"
                    onToggle={() => {
                      onToggle(i18n, 'discoverable', !game.discoverable);
                    }}
                    toggled={!!game.discoverable}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Make discoverable on gd.games</Trans>}
                    disabled={
                      editedProperty === 'discoverable' || isDeletingGame
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Toggle
                    labelPosition="left"
                    onToggle={() => {
                      onToggle(
                        i18n,
                        'acceptsGameComments',
                        !game.acceptsGameComments
                      );
                    }}
                    toggled={!!game.acceptsGameComments}
                    label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Show feedback banner on gd.games game page</Trans>
                    }
                    disabled={
                      editedProperty === 'acceptsGameComments' || isDeletingGame
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Toggle
                    labelPosition="left"
                    onToggle={() => {
                      onToggle(
                        i18n,
                        'acceptsBuildComments',
                        !game.acceptsBuildComments
                      );
                    }}
                    toggled={!!game.acceptsBuildComments}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Ask for feedback on all build pages</Trans>}
                    disabled={
                      editedProperty === 'acceptsBuildComments' ||
                      isDeletingGame
                    }
                  />
                </Column>
              </Column>
            </ResponsiveLineStackLayout>
          </Card>
          {showShareGameDialog && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ShareGameDialog
              game={game}
              onClose={() => setShowShareGameDialog(false)}
            />
          )}
        </>
      )}
    </I18n>
  );
};
