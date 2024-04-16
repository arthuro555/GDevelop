// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
import { showErrorBox } from '../../UI/Messages/MessageBox';
import { Game, updateGame } from '../../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';

type Props = {
  game: Game,
  onGameUpdated: (updatedGame: Game) => void
};

const GameMonetization = ({
  game,
  onGameUpdated,
}: Props) => {
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
  const [
    pendingDisplayAdsOnGamePage,
    setPendingDisplayAdsOnGamePage,
  ] = React.useState<boolean | null>(null);

  if (!profile) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">Ads</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              In the future, games that generate enough revenue will be able to
              opt-in into "revenue share", so that as a creator you can start
              earning from your game sessions.
            </Trans>
          </AlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <InlineCheckbox
            checked={
              pendingDisplayAdsOnGamePage !== null
                ? pendingDisplayAdsOnGamePage
                : !!game.displayAdsOnGamePage
            }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'enable' implicitly has an 'any' type.
            onCheck={async (e, enable) => {
              setPendingDisplayAdsOnGamePage(enable);
              const updatedGame = { ...game, displayAdsOnGamePage: enable } as const;
              try {
                await updateGame(getAuthorizationHeader, profile.id, game.id, {
                  displayAdsOnGamePage: enable,
                });
                onGameUpdated(updatedGame);
              } catch (error: any) {
                showErrorBox({
                  message:
                    i18n._(t`Unable to update game.`) +
                    ' ' +
                    i18n._(
                      t`Verify your internet connection or try again later.`
                    ),
                  rawError: error,
                  errorId: 'game-monetization-update-game-error',
                });
              } finally {
                setPendingDisplayAdsOnGamePage(null);
              }
            }}
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Allow to display advertisements on the game page on gd.games.
              </Trans>
            }
            tooltipOrHelperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                This is recommended as this allows to maintain free publishing
                on gd.games and allow to analyze if you could benefit from
                revenue sharing.
              </Trans>
            }
          />
        </ColumnStackLayout>
      )}
    </I18n>
  );
};

export default GameMonetization;
