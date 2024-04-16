// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../Builds/BuildsDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildsDialog.tsx', but '--jsx' is not set.
import BuildsDialog from '../Builds/BuildsDialog';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module './PublishHome' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/PublishHome.tsx', but '--jsx' is not set.
import PublishHome from './PublishHome';
import { ExportPipeline } from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../UI/Tabs';
// @ts-expect-error - TS6142 - Module './InviteHome' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/InviteHome.tsx', but '--jsx' is not set.
import InviteHome from './InviteHome';
import { getGame, Game } from '../../Utils/GDevelopServices/Game';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../UI/TextButton';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../MainFrame/Preferences/PreferencesContext';
import { FileMetadata, StorageProvider } from '../../ProjectsStorage';
import { useOnlineStatus } from '../../Utils/OnlineStatus';
// @ts-expect-error - TS6142 - Module '../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../UI/ErrorBoundary';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../../GameDashboard/GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameAvailabilityError } from '../../GameDashboard/GameRegistration';

export type ShareTab = 'invite' | 'publish';
export type ExporterSection = 'browser' | 'desktop' | 'android' | 'ios';
export type ExporterSubSection = 'online' | 'offline' | 'facebook';
export type ExporterKey = 'onlinewebexport' | 'onlineelectronexport' | 'onlinecordovaexport' | 'onlinecordovaiosexport' | 'webexport' | 'facebookinstantgamesexport' | 'electronexport' | 'cordovaexport';

const exporterSectionMapping: Partial<Record<ExporterSection, Partial<Record<ExporterSubSection, ExporterKey | null | undefined>>>> = {
  browser: {
    online: 'onlinewebexport',
    offline: 'webexport',
    facebook: 'facebookinstantgamesexport',
  },
  desktop: {
    online: 'onlineelectronexport',
    offline: 'electronexport',
    facebook: null,
  },
  android: {
    online: 'onlinecordovaexport',
    offline: 'cordovaexport',
    facebook: null,
  },
  ios: {
    online: 'onlinecordovaiosexport',
    offline: 'cordovaexport',
    facebook: null,
  },
};

export type Exporter = {
  name: React.ReactNode,
  tabName: React.ReactNode,
  helpPage: string,
  disabled?: boolean,
  key: ExporterKey,
  exportPipeline: ExportPipeline<any, any, any, any, any>
};

export type ShareDialogWithoutExportsProps = {
  project: gdProject | null | undefined,
  onSaveProject: () => Promise<void>,
  isSavingProject: boolean,
  onClose: () => void,
  onChangeSubscription: () => void,
  initialTab: ShareTab | null | undefined,
  fileMetadata: FileMetadata | null | undefined,
  storageProvider: StorageProvider
};

type Props = (ShareDialogWithoutExportsProps) & {
  /**
   * Use `null` to hide automated exporters.
   * It should be used with manualExporters set to `null` as well.
   */
  automatedExporters: Array<Exporter> | null | undefined,
  /**
   * Use `null` to hide manual exporters.
   * It should be used with automatedExporters set to `null` as well.
   */
  manualExporters: Array<Exporter> | null | undefined,
  // GDevelop's game platform exporter.
  onlineWebExporter: Exporter,
  /**
   * If true, all exporters will be disabled if the user is offline.
   * This is mainly helpful on browser, where we need to download resources
   * before exporting.
   */
  allExportersRequireOnline?: boolean
};

const ShareDialog = ({
  project,
  onSaveProject,
  isSavingProject,
  onClose,
  allExportersRequireOnline,
  onChangeSubscription,
  automatedExporters,
  manualExporters,
  onlineWebExporter,
  initialTab,
  fileMetadata,
  storageProvider,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const {
    setShareDialogDefaultTab,
    getShareDialogDefaultTab,
  } = React.useContext(PreferencesContext);
  const [currentTab, setCurrentTab] = React.useState<ShareTab>(initialTab || getShareDialogDefaultTab());
  const showOnlineWebExporterOnly = !automatedExporters && !manualExporters;
  const [
    chosenExporterSection,
    setChosenExporterSection,
  ] = React.useState<ExporterSection | null | undefined>(showOnlineWebExporterOnly ? 'browser' : null);
  const [
    chosenExporterSubSection,
    setChosenExporterSubSection,
  ] = React.useState<ExporterSubSection | null | undefined>(showOnlineWebExporterOnly ? 'online' : null);

  React.useEffect(() => setShareDialogDefaultTab(currentTab), [
    setShareDialogDefaultTab,
    currentTab,
  ]);
  const isOnline = useOnlineStatus();

  const [buildsDialogOpen, setBuildsDialogOpen] = React.useState<boolean>(false);
  const [
    isNavigationDisabled,
    setIsNavigationDisabled,
  ] = React.useState<boolean>(false);
  const [game, setGame] = React.useState<Game | null | undefined>(null);
  const [
    gameAvailabilityError,
    setGameAvailabilityError,
  ] = React.useState<GameAvailabilityError | null | undefined>(null);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { profile, getAuthorizationHeader } = authenticatedUser;
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const openBuildDialog = () => {
    if (!game) {
      const title = t`Cannot see the exports`;
      const message =
        gameAvailabilityError === 'not-found'
          ? t`Register or publish your game first to see its exports.`
          : gameAvailabilityError === 'not-owned'
          ? t`You are not the owner of this game, ask the owner to add you as an owner to see its exports.`
          : t`Either this game is not registered or you are not its owner, so you cannot see its builds.`;

      showAlert({
        title,
        message,
      });
      return;
    }
    setBuildsDialogOpen(true);
  };

  const loadGame = React.useCallback(
    async () => {
      if (!profile || !project) return;

      const { id } = profile;
      try {
        setGameAvailabilityError(null);
        const game = await getGame(
          getAuthorizationHeader,
          id,
          project.getProjectUuid()
        );
        setGame(game);
      } catch (error: any) {
        console.error('Unable to load the game', error);
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
          setGameAvailabilityError('not-found');
          return;
        }
        if (extractedStatusAndCode && extractedStatusAndCode.status === 403) {
          setGameAvailabilityError('not-owned');
          return;
        }
        setGameAvailabilityError('unexpected');
      }
    },
    [project, getAuthorizationHeader, profile]
  );

  React.useEffect(
    () => {
      // Load game only once.
      if (!game) {
        loadGame();
      }
    },
    [loadGame, game]
  );

  const exporters = React.useMemo(
    () => [
      ...(automatedExporters || []),
      ...(manualExporters || []),
      onlineWebExporter,
    ],
    [automatedExporters, manualExporters, onlineWebExporter]
  );

  const exporter: Exporter | null | undefined = React.useMemo(
    () => {
      if (!chosenExporterSection) return null;
      if (!chosenExporterSubSection) return null;

      const exporterKey =
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
        exporterSectionMapping[chosenExporterSection][chosenExporterSubSection];
      const chosenExporter = exporters.find(
        exporter => exporter.key === exporterKey
      );

      return chosenExporter || null;
    },
    [chosenExporterSection, chosenExporterSubSection, exporters]
  );

  if (!project) return null;

  const mainActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Close</Trans>}
      key="close"
      primary={false}
      onClick={onClose}
      disabled={isNavigationDisabled}
    />,
  ];

  const secondaryActions =
    currentTab === 'publish'
      ? [
          exporter ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton key="help" helpPagePath={exporter.helpPage} />
          ) : null,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TextButton
            key="exports"
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              isMobile ? <Trans>Exports</Trans> : <Trans>See all exports</Trans>
            }
            onClick={openBuildDialog}
            disabled={isNavigationDisabled || !isOnline}
          />,
        ].filter(Boolean)
      : [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HelpButton
            key="help"
            helpPagePath="/collaboration/invite-collaborators"
          />,
        ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      // Keep ID for backward compatibility with guided lessons.
      id="export-dialog"
      maxWidth={'md'}
      minHeight={'lg'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Share</Trans>}
      actions={mainActions}
      secondaryActions={secondaryActions}
      onRequestClose={onClose}
      open
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            {
              value: 'publish',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Publish</Trans>,
              id: 'publish-tab',
              disabled: isNavigationDisabled,
            },
            {
              value: 'invite',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Invite</Trans>,
              id: 'invite-tab',
              disabled: isNavigationDisabled,
            },
          ]}
        />
      }
      flexColumnBody
    >
      {currentTab === 'invite' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InviteHome
          cloudProjectId={
            storageProvider.internalName === 'Cloud' && fileMetadata
              ? fileMetadata.fileIdentifier
              : null
          }
        />
      )}
      {currentTab === 'publish' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PublishHome
          project={project}
          onSaveProject={onSaveProject}
          isSavingProject={isSavingProject}
          onGameUpdated={loadGame}
          onChangeSubscription={onChangeSubscription}
          isNavigationDisabled={isNavigationDisabled}
          setIsNavigationDisabled={setIsNavigationDisabled}
          selectedExporter={exporter}
          onChooseSection={setChosenExporterSection}
          onChooseSubSection={setChosenExporterSubSection}
          chosenSection={chosenExporterSection}
          chosenSubSection={chosenExporterSubSection}
          game={game}
          gameAvailabilityError={gameAvailabilityError}
          allExportersRequireOnline={allExportersRequireOnline}
          showOnlineWebExporterOnly={showOnlineWebExporterOnly}
        />
      )}
      {game && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BuildsDialog
          open={buildsDialogOpen}
          onClose={() => setBuildsDialogOpen(false)}
          authenticatedUser={authenticatedUser}
          game={game}
          onGameUpdated={loadGame}
        />
      )}
    </Dialog>
  );
};

const ShareDialogWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Share dialog</Trans>}
    scope="export-and-share"
    onClose={props.onClose}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ShareDialog {...props} />
  </ErrorBoundary>
);

export default ShareDialogWithErrorBoundary;
