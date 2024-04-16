// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
import {
  getBuildArtifactUrl,
  getWebBuildThumbnailUrl,
  Build,
} from '../../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import { BuildStep } from '../../Builds/BuildStepsProgress';
// @ts-expect-error - TS6142 - Module '../../../UI/Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../../../UI/Messages/InfoBar';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../../UI/Dialog';
import {
  getGameUrl,
  updateGame,
  setGameSlug,
  Game,
  getAclsFromUserIds,
  setGameUserAcls,
} from '../../../Utils/GDevelopServices/Game';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module './OnlineGamePropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/OnlineGamePropertiesDialog.tsx', but '--jsx' is not set.
import OnlineGamePropertiesDialog from './OnlineGamePropertiesDialog';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/PublicGamePropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/PublicGamePropertiesDialog.tsx', but '--jsx' is not set.
import { PartialGameChange } from '../../../GameDashboard/PublicGamePropertiesDialog';
// @ts-expect-error - TS6142 - Module '../../../UI/ShareDialog/ShareLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareLink.tsx', but '--jsx' is not set.
import ShareLink from '../../../UI/ShareDialog/ShareLink';
// @ts-expect-error - TS6142 - Module '../../../UI/ShareDialog/SocialShareButtons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/SocialShareButtons.tsx', but '--jsx' is not set.
import SocialShareButtons from '../../../UI/ShareDialog/SocialShareButtons';
// @ts-expect-error - TS6142 - Module '../../../UI/ShareDialog/ShareButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareButton.tsx', but '--jsx' is not set.
import ShareButton from '../../../UI/ShareDialog/ShareButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
import useAlertDialog from '../../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameRegistration } from '../../../GameDashboard/GameRegistration';
// @ts-expect-error - TS6142 - Module '../../../UI/QrCode' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/QrCode.tsx', but '--jsx' is not set.
import QrCode from '../../../UI/QrCode';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';

type OnlineGameLinkProps = {
  build: Build | null | undefined,
  game: Game | null | undefined,
  project: gdProject,
  onSaveProject: () => Promise<void>,
  isSavingProject: boolean,
  errored: boolean,
  exportStep: BuildStep,
  onGameUpdated: () => Promise<void>,
  automaticallyOpenGameProperties?: boolean
};

const timeForExport = 5; // seconds.

const OnlineGameLink = ({
  build,
  game,
  project,
  onSaveProject,
  isSavingProject,
  errored,
  exportStep,
  onGameUpdated,
  automaticallyOpenGameProperties,
}: OnlineGameLinkProps) => {
  const [showCopiedInfoBar, setShowCopiedInfoBar] = React.useState<boolean>(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = React.useState<boolean>(false);
  const { isMobile } = useResponsiveWindowSize();
  const [
    isOnlineGamePropertiesDialogOpen,
    setIsOnlineGamePropertiesDialogOpen,
  ] = React.useState<boolean>(false);
  const [isGameLoading, setIsGameLoading] = React.useState<boolean>(false);
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
  const [
    timeBeforeExportFinished,
    setTimeBeforeExportFinished,
  ] = React.useState<number>(timeForExport);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const exportPending = !errored && exportStep !== '' && exportStep !== 'done';
  const isBuildComplete = build && build.status === 'complete';
  const isBuildPublished = build && game && build.id === game.publicWebBuildId;
  const gameUrl = getGameUrl(game);
  const buildOrGameUrl =
    exportPending || !isBuildComplete
      ? null
      : isBuildPublished
      ? gameUrl
      : getBuildArtifactUrl(build, 's3Key');

  // When export is started, start a timer to give information
  // about the build being ready after a few seconds.
  React.useEffect(
    () => {
      if (exportPending) {
        const timeout = setTimeout(() => {
          const newTimeBeforeExportFinished = timeBeforeExportFinished
            ? timeBeforeExportFinished - 1
            : 0;
          setTimeBeforeExportFinished(newTimeBeforeExportFinished);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    },
    [exportPending, timeBeforeExportFinished]
  );

  const tryUpdateAuthors = React.useCallback(
    async (i18n: I18nType) => {
      if (!profile || !game || !build) return false;

      const authorAcls = getAclsFromUserIds(project.getAuthorIds().toJSArray());

      try {
        await setGameUserAcls(
          getAuthorizationHeader,
          profile.id,
          project.getProjectUuid(),
          { author: authorAcls }
        );
      } catch (error: any) {
        console.error(
          'Unable to update the authors:',
          error.response || error.message
        );
        await showAlert({
          title: t`Unable to update the authors of the project.`,
          message: t`Verify your internet connection or try again later.`,
        });
        return false;
      }

      return true;
    },
    [build, game, getAuthorizationHeader, profile, project, showAlert]
  );

  const tryUpdateSlug = React.useCallback(
    async (partialGameChange: PartialGameChange, i18n: I18nType) => {
      if (!profile || !game || !build) return false;

      const { userSlug, gameSlug } = partialGameChange;

      if (userSlug && gameSlug && userSlug === profile.username) {
        try {
          await setGameSlug(
            getAuthorizationHeader,
            profile.id,
            game.id,
            userSlug,
            gameSlug
          );
        } catch (error: any) {
          console.error(
            'Unable to update the game slug:',
            error.response || error.message
          );
          await showAlert({
            title: t`Unable to update the game slug.`,
            message: t`Remember that a slug must be 6 to 30 characters long and only contains letters, digits or dashes. Verify your internet connection or try again later.`,
          });
          return false;
        }
      }

      return true;
    },
    [build, game, getAuthorizationHeader, profile, showAlert]
  );

  React.useEffect(
    () => {
      if (exportStep === 'done') {
        setTimeBeforeExportFinished(timeForExport); // reset.
        setIsShareDialogOpen(true);
      }
    },
    [exportStep, automaticallyOpenGameProperties]
  );

  React.useEffect(
    () => {
      if (isBuildComplete && automaticallyOpenGameProperties) {
        setIsOnlineGamePropertiesDialogOpen(true);
      }
    },
    [isBuildComplete, automaticallyOpenGameProperties]
  );

  const onGameUpdate = React.useCallback(
    async (partialGameChange: PartialGameChange, i18n: I18nType): Promise<boolean> => {
      if (!profile || !game || !build) return false;

      const { id } = profile;
      try {
        setIsGameLoading(true);
        // First update the game.
        await updateGame(getAuthorizationHeader, id, game.id, {
          gameName: project.getName(),
          description: project.getDescription(),
          categories: project.getCategories().toJSArray(),
          playWithGamepad: project.isPlayableWithGamepad(),
          playWithKeyboard: project.isPlayableWithKeyboard(),
          playWithMobile: project.isPlayableWithMobile(),
          orientation: project.getOrientation(),
          publicWebBuildId: build.id,
          thumbnailUrl: getWebBuildThumbnailUrl(project, build.id),
          discoverable: partialGameChange.discoverable,
        });
        // Then set authors and slug in parrallel.
        const [authorsUpdated, slugUpdated] = await Promise.all([
          tryUpdateAuthors(i18n),
          tryUpdateSlug(partialGameChange, i18n),
        ]);
        // Update game again as cached values on the game entity might have changed.
        await onGameUpdated();
        // If one of the update failed, return false so that the dialog is not closed.
        if (!authorsUpdated || !slugUpdated) {
          return false;
        }
      } catch (err: any) {
        await showAlert({
          title: t`Unable to update the game.`,
          message: t`Verify that your internet connection is working or try again later.`,
        });
        console.error('Unable to update the game', err);
        return false;
      } finally {
        setIsGameLoading(false);
      }

      return true;
    },
    [
      game,
      getAuthorizationHeader,
      profile,
      build,
      project,
      tryUpdateAuthors,
      tryUpdateSlug,
      onGameUpdated,
      showAlert,
    ]
  );

  if (!build && !exportStep) return null;

  const dialogActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Close</Trans>}
      primary={false}
      onClick={() => setIsShareDialogOpen(false)}
    />,
    // Ensure there is a game loaded, meaning the user owns the game.
    game && buildOrGameUrl && !isBuildPublished && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DialogPrimaryButton
        key="publish"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Verify and Publish to gd.games</Trans>}
        primary
        onClick={() => setIsOnlineGamePropertiesDialogOpen(true)}
      />
    ),
  ];
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
          {exportPending && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Uploading your game...</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CircularProgress
                  value={
                    ((timeForExport - timeBeforeExportFinished) /
                      timeForExport) *
                    100
                  }
                  variant={
                    timeBeforeExportFinished === 0
                      ? 'indeterminate'
                      : 'determinate'
                  }
                />
              </Line>
            </Column>
          )}
          {isShareDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Share your game</Trans>}
              id="export-game-share-dialog"
              minHeight="sm"
              maxWidth="md"
              actions={dialogActions}
              open
              onRequestClose={() => setIsShareDialogOpen(false)}
              onApply={() => {
                if (game && buildOrGameUrl && !isBuildPublished) {
                  setIsOnlineGamePropertiesDialogOpen(true);
                }
              }}
              flexColumnBody
            >
              {buildOrGameUrl && !isGameLoading ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ShareLink url={buildOrGameUrl} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS2774 - This condition will always return true since this function is always defined. Did you mean to call it instead? */}
                    {navigator.share ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ShareButton url={buildOrGameUrl} />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Column
                        expand
                        justifyContent="flex-end"
                        noMargin
                        alignItems="flex-end"
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <SocialShareButtons url={buildOrGameUrl} />
                      </Column>
                    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Share it with this QR code:</Trans>
                      </Text>
                    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <QrCode
                        url={buildOrGameUrl}
                        size={isMobile ? 100 : 150}
                      />
                    </Line>
                  </ColumnStackLayout>
                  {isBuildPublished ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <GameRegistration
                      project={project}
                      hideLoader
                      suggestAdditionalActions
                    />
                  ) : game ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>
                        This link is private. You can share it with
                        collaborators, friends or testers. When you're ready you
                        can publish it so that your game has its own page on
                        gd.games - GDevelop gaming platform.
                      </Trans>
                    </AlertMessage>
                  ) : null}
                </ColumnStackLayout>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ColumnStackLayout
                  alignItems="center"
                  justifyContent="center"
                  expand
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <CircularProgress size={40} />
                  </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text>
                    {automaticallyOpenGameProperties ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Loading your game...</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Loading your link...</Trans>
                    )}
                  </Text>
                </ColumnStackLayout>
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InfoBar
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                message={<Trans>Copied to clipboard!</Trans>}
                visible={showCopiedInfoBar}
                hide={() => setShowCopiedInfoBar(false)}
              />
            </Dialog>
          )}
          {game && build && isOnlineGamePropertiesDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <OnlineGamePropertiesDialog
              project={project}
              onSaveProject={onSaveProject}
              buildId={build.id}
              onClose={() => {
                setIsOnlineGamePropertiesDialogOpen(false);
                if (automaticallyOpenGameProperties) {
                  // If the dialog was automatically opened,
                  // Also close the share dialog, as they are probably not
                  // looking for a new link.
                  setIsShareDialogOpen(false);
                }
              }}
// @ts-expect-error - TS7006 - Parameter 'partialGameChange' implicitly has an 'any' type.
              onApply={async partialGameChange => {
                const isGameUpdated = await onGameUpdate(
                  partialGameChange,
                  i18n
                );
                if (isGameUpdated) {
                  setIsOnlineGamePropertiesDialogOpen(false);
                }
              }}
              game={game}
              isLoading={isSavingProject || isGameLoading}
              i18n={i18n}
            />
          )}
        </>
      )}
    </I18n>
  );
};

export default OnlineGameLink;
