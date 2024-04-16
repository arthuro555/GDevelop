import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { RenderEditorContainerPropsWithRef } from '../BaseEditor';
import {
  FileMetadataAndStorageProviderName,
  FileMetadata,
  StorageProvider,
} from '../../../ProjectsStorage';
// @ts-expect-error - TS6142 - Module './GetStartedSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/GetStartedSection/index.tsx', but '--jsx' is not set.
import GetStartedSection from './GetStartedSection';
// @ts-expect-error - TS6142 - Module './BuildSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/index.tsx', but '--jsx' is not set.
import BuildSection from './BuildSection';
// @ts-expect-error - TS6142 - Module './LearnSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/LearnSection/index.tsx', but '--jsx' is not set.
import LearnSection from './LearnSection';
// @ts-expect-error - TS6142 - Module './PlaySection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/PlaySection.tsx', but '--jsx' is not set.
import PlaySection from './PlaySection';
// @ts-expect-error - TS6142 - Module './ManageSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/ManageSection/index.tsx', but '--jsx' is not set.
import ManageSection from './ManageSection';
// @ts-expect-error - TS6142 - Module './CommunitySection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/CommunitySection.tsx', but '--jsx' is not set.
import CommunitySection from './CommunitySection';
// @ts-expect-error - TS6142 - Module './StoreSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/StoreSection/index.tsx', but '--jsx' is not set.
import StoreSection from './StoreSection';
// @ts-expect-error - TS6142 - Module '../../../Tutorial/TutorialContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Tutorial/TutorialContext.tsx', but '--jsx' is not set.
import { TutorialContext } from '../../../Tutorial/TutorialContext';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreContext } from '../../../AssetStore/ExampleStore/ExampleStoreContext';
// @ts-expect-error - TS6142 - Module './HomePageHeader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageHeader.tsx', but '--jsx' is not set.
import { HomePageHeader } from './HomePageHeader';
// @ts-expect-error - TS6142 - Module './HomePageMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenu.tsx', but '--jsx' is not set.
import { HomePageMenu, HomeTab } from './HomePageMenu';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import { ExampleShortHeader } from '../../../Utils/GDevelopServices/Example';
import { ResourceManagementProps } from '../../../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from '../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module './TeamSection' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/TeamSection/index.tsx', but '--jsx' is not set.
import TeamSection from './TeamSection';
// @ts-expect-error - TS6142 - Module '../../../Profile/Team/TeamProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Team/TeamProvider.tsx', but '--jsx' is not set.
import TeamProvider from '../../../Profile/Team/TeamProvider';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from '../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext';
// @ts-expect-error - TS6142 - Module '../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../Preferences/PreferencesContext';
import useSubscriptionPlans from '../../../Utils/UseSubscriptionPlans';
import { incrementGetStartedSectionViewCount } from '../../../Utils/Analytics/LocalStats';
import {
  sendUserSurveyHidden,
  sendUserSurveyStarted,
} from '../../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../RouterContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/RouterContext.tsx', but '--jsx' is not set.
import RouterContext, { RouteArguments } from '../../RouterContext';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/GameDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameDetails.tsx', but '--jsx' is not set.
import { GameDetailsTab } from '../../../GameDashboard/GameDetails';
import { Game } from '../../../Utils/GDevelopServices/Game';
import useGamesList from '../../../GameDashboard/UseGamesList';
import useDisplayNewFeature from '../../../Utils/UseDisplayNewFeature';
// @ts-expect-error - TS6142 - Module '../../../UI/HighlightingTooltip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HighlightingTooltip.tsx', but '--jsx' is not set.
import HighlightingTooltip from '../../../UI/HighlightingTooltip';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../../UI/Link';
import Window from '../../../Utils/Window';
import { getHelpLink } from '../../../Utils/HelpLink';

const gamesDashboardWikiArticle = getHelpLink('/interface/games-dashboard/');
const isShopRequested = (routeArguments: RouteArguments): boolean => routeArguments['initial-dialog'] === 'asset-store' || // Compatibility with old links
routeArguments['initial-dialog'] === 'store'; // New way of opening the store
const isGamesDashboardRequested = (routeArguments: RouteArguments): boolean => routeArguments['initial-dialog'] === 'games-dashboard';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    minHeight: 0,
    width: '100%',
  },
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  scrollableContainer: {
    display: 'flex',
    marginLeft: 0,
    marginRight: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    height: '100%',
    minWidth: 0,
    overflowY: 'auto',
  },
} as const;

type Props = {
  project: gdProject | null | undefined,
  fileMetadata: FileMetadata | null | undefined,
  isActive: boolean,
  projectItemName: string | null | undefined,
  project: gdProject | null | undefined,
  setToolbar: (arg1?: React.ReactNode | null | undefined) => void,
  storageProviders: Array<StorageProvider>,
  // Project opening
  canOpen: boolean,
  onChooseProject: () => void,
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>,
  onOpenExampleStore: () => void,
  onSelectExampleShortHeader: (arg1: ExampleShortHeader) => void,
  onPreviewPrivateGameTemplateListingData: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void,
  onOpenPrivateGameTemplateListingData: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void,
  onOpenProjectManager: () => void,
  // Other dialogs opening:
  onOpenLanguageDialog: () => void,
  onOpenProfile: () => void,
  selectInAppTutorial: (tutorialId: string) => void,
  onOpenPreferences: () => void,
  onOpenAbout: () => void,
  // Project creation
  onOpenNewProjectSetupDialog: () => void,
  // Project save
  onSave: () => Promise<void>,
  canSave: boolean,
  resourceManagementProps: ResourceManagementProps,
  canInstallPrivateAsset: () => boolean
};

type HomePageEditorInterface = {
  getProject: () => void,
  updateToolbar: () => void,
  forceUpdateEditor: () => void
};

// @ts-expect-error - TS2345 - Argument of type 'ForwardRefExoticComponent<HomePageEditorInterface & RefAttributes<Props>>' is not assignable to parameter of type 'FunctionComponent<Props>'. | TS2345 - Argument of type '({ project, fileMetadata, canOpen, onChooseProject, onOpenRecentFile, onOpenNewProjectSetupDialog, onOpenExampleStore, onSelectExampleShortHeader, onPreviewPrivateGameTemplateListingData, onOpenPrivateGameTemplateListingData, onOpenProjectManager, onOpenLanguageDialog, onOpenProfile, setToolbar, selectInAppTutorial,...' is not assignable to parameter of type 'ForwardRefRenderFunction<Props, HomePageEditorInterface>'.
export const HomePage = React.memo<Props>(React.forwardRef<Props, HomePageEditorInterface>((
  {
    project,
    fileMetadata,
    canOpen,
    onChooseProject,
    onOpenRecentFile,
    onOpenNewProjectSetupDialog,
    onOpenExampleStore,
    onSelectExampleShortHeader,
    onPreviewPrivateGameTemplateListingData,
    onOpenPrivateGameTemplateListingData,
    onOpenProjectManager,
    onOpenLanguageDialog,
    onOpenProfile,
    setToolbar,
    selectInAppTutorial,
    onOpenPreferences,
    onOpenAbout,
    isActive,
    storageProviders,
    onSave,
    canSave,
    resourceManagementProps,
    canInstallPrivateAsset,
  }: Props,
  ref
) => {
  const { authenticated, onCloudProjectsChanged } = React.useContext(
    AuthenticatedUserContext
  );
  const userSurveyStartedRef = React.useRef<boolean>(false);
  const userSurveyHiddenRef = React.useRef<boolean>(false);
  const { fetchTutorials } = React.useContext(TutorialContext);
  const { fetchExamplesAndFilters } = React.useContext(ExampleStoreContext);
  const {
    fetchGameTemplates,
    shop: { setInitialGameTemplateUserFriendlySlug },
  } = React.useContext(PrivateGameTemplateStoreContext);
  const [openedGame, setOpenedGame] = React.useState<Game | null | undefined>(null);
  const [
    gameDetailsCurrentTab,
    setGameDetailsCurrentTab,
  ] = React.useState<GameDetailsTab>('details');
  const { routeArguments, removeRouteArguments } = React.useContext(
    RouterContext
  );

  const { isMobile } = useResponsiveWindowSize();
  const {
    values: { showGetStartedSectionByDefault },
  } = React.useContext(PreferencesContext);
  const isShopRequestedAtOpening = React.useRef<boolean>(isShopRequested(routeArguments));
  const isGamesDashboardRequestedAtOpening = React.useRef<boolean>(isGamesDashboardRequested(routeArguments));
  const initialTab = isShopRequestedAtOpening.current
    ? 'shop'
    : isGamesDashboardRequestedAtOpening.current
    ? 'manage'
    : showGetStartedSectionByDefault
    ? 'get-started'
    : 'build';

  const [activeTab, setActiveTab] = React.useState<HomeTab>(initialTab);

  const { setInitialPackUserFriendlySlug } = React.useContext(
    AssetStoreContext
  );
  const [
    displayTooltipDelayed,
    setDisplayTooltipDelayed,
  ] = React.useState<boolean>(false);
  const { games, gamesFetchingError, fetchGames } = useGamesList();
  const {
    shouldDisplayNewFeatureHighlighting,
    acknowledgeNewFeature,
  } = useDisplayNewFeature();
  const manageTabElement = document.getElementById('home-manage-tab');
  const shouldDisplayTooltip = shouldDisplayNewFeatureHighlighting({
    featureId: 'gamesDashboardInHomePage',
  });
  const { subscriptionPlansWithPricingSystems } = useSubscriptionPlans({
    includeLegacy: false,
  });

  const displayTooltip =
    isActive && shouldDisplayTooltip && manageTabElement;

  const onCloseTooltip = React.useCallback(
    () => {
      setDisplayTooltipDelayed(false);
      acknowledgeNewFeature({ featureId: 'gamesDashboardInHomePage' });
    },
    [acknowledgeNewFeature]
  );

  // Open the store and a pack or game template if asked to do so, either at
  // app opening, either when the route changes (when clicking on an announcement
  // that redirects to the asset store for instance).
  React.useEffect(
    () => {
      if (isShopRequested(routeArguments)) {
        setActiveTab('shop');
        if (routeArguments['asset-pack']) {
          setInitialPackUserFriendlySlug(routeArguments['asset-pack']);
        }
        if (routeArguments['game-template']) {
          setInitialGameTemplateUserFriendlySlug(
            routeArguments['game-template']
          );
        }
        // Remove the arguments so that the asset store is not opened again.
        removeRouteArguments([
          'initial-dialog',
          'asset-pack',
          'game-template',
        ]);
      } else if (isGamesDashboardRequested(routeArguments)) {
        setActiveTab('manage');
        removeRouteArguments(['initial-dialog']);
      }
    },
    [
      routeArguments,
      removeRouteArguments,
      setInitialPackUserFriendlySlug,
      setInitialGameTemplateUserFriendlySlug,
    ]
  );

  React.useEffect(
    () => {
      if (initialTab === 'get-started') {
        incrementGetStartedSectionViewCount();
      }
    },
    [initialTab]
  );

  // Load everything when the user opens the home page, to avoid future loading times.
  React.useEffect(
    () => {
      fetchExamplesAndFilters();
      fetchGameTemplates();
      fetchTutorials();
    },
    [fetchExamplesAndFilters, fetchTutorials, fetchGameTemplates]
  );

  // Only fetch games if the user decides to open the games dashboard tab
  // or the build tab to enable the context menu on project list items that
  // redirects to the games dashboard.
  React.useEffect(
    () => {
      if ((activeTab === 'manage' || activeTab === 'build') && !games) {
        fetchGames();
      }
    },
    [fetchGames, activeTab, games]
  );

  React.useEffect(
    () => {
      if (displayTooltip) {
        const timeoutId = setTimeout(() => {
          setDisplayTooltipDelayed(true);
        }, 500);
        return () => clearTimeout(timeoutId);
      } else {
        setDisplayTooltipDelayed(false);
      }
    },
    // Delay display of tooltip because home tab is the first to be opened
    // but the editor might open a project at start, displaying the tooltip
    // while the project is loading, giving the impression of a glitch.
    [displayTooltip]
  );

  // Fetch user cloud projects when home page becomes active
  React.useEffect(
    () => {
      if (isActive && authenticated) {
        onCloudProjectsChanged();
      }
    },
    [isActive, authenticated, onCloudProjectsChanged]
  );

  const getProject = React.useCallback(() => {
    return undefined;
  }, []);

  const updateToolbar = React.useCallback(
    () => {
      if (setToolbar) {
        setToolbar(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HomePageHeader
            hasProject={!!project}
            onOpenLanguageDialog={onOpenLanguageDialog}
            onOpenProfile={onOpenProfile}
            onOpenProjectManager={onOpenProjectManager}
            onSave={onSave}
            canSave={canSave}
          />
        );
      }
    },
    [
      setToolbar,
      onOpenLanguageDialog,
      onOpenProfile,
      onOpenProjectManager,
      project,
      onSave,
      canSave,
    ]
  );

  // Ensure the toolbar is up to date when the active tab changes.
  React.useEffect(
    () => {
      updateToolbar();
    },
    [updateToolbar]
  );

  const forceUpdateEditor = React.useCallback(() => {
    // No updates to be done
  }, []);

// @ts-expect-error - TS2740 - Type '{ getProject: () => undefined; updateToolbar: () => void; forceUpdateEditor: () => void; }' is missing the following properties from type 'Props': project, fileMetadata, isActive, projectItemName, and 20 more.
  React.useImperativeHandle(ref, () => ({
    getProject,
    updateToolbar,
    forceUpdateEditor,
  }));

  // If the user logs out and is on the team view section, go back to the build section.
  React.useEffect(
    () => {
      if (activeTab === 'team-view' && !authenticated) {
        setActiveTab('build');
      }
    },
    [authenticated, activeTab]
  );

  const onUserSurveyStarted = React.useCallback(() => {
    if (userSurveyStartedRef.current) return;
    sendUserSurveyStarted();
    userSurveyStartedRef.current = true;
  }, []);
  const onUserSurveyHidden = React.useCallback(() => {
    if (userSurveyHiddenRef.current) return;
    sendUserSurveyHidden();
    userSurveyHiddenRef.current = true;
  }, []);

  React.useEffect(
    () => {
      if (!authenticated) {
        userSurveyStartedRef.current = false;
        userSurveyHiddenRef.current = false;
      }
    },
    // Reset flag that prevents multiple send of the same event on user change.
    [authenticated]
  );

  const onManageGame = React.useCallback(
    ({
      gameId,
    }: {
      gameId: string
    }) => {
      if (!games) return;
      const matchingGame = games.find(game => game.id === gameId);
      if (!matchingGame) return;
      setOpenedGame(matchingGame);
      setActiveTab('manage');
    },
    [games]
  );

  const canManageGame = React.useCallback(
    (
      {
        gameId,
      }: {
        gameId: string
      },
    ): boolean => {
      if (!games) return false;
      const matchingGameIndex = games.findIndex(game => game.id === gameId);
      return matchingGameIndex > -1;
    },
    [games]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <TeamProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={isMobile ? styles.mobileContainer : styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.scrollableContainer}>
              {activeTab === 'manage' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ManageSection
                  project={project}
                  games={games}
                  onRefreshGames={fetchGames}
                  gamesFetchingError={gamesFetchingError}
                  openedGame={openedGame}
                  setOpenedGame={setOpenedGame}
                  currentTab={gameDetailsCurrentTab}
                  setCurrentTab={setGameDetailsCurrentTab}
                />
              )}
              {activeTab === 'get-started' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GetStartedSection
                  selectInAppTutorial={selectInAppTutorial}
                  onUserSurveyStarted={onUserSurveyStarted}
                  onUserSurveyHidden={onUserSurveyHidden}
                  subscriptionPlansWithPricingSystems={
                    subscriptionPlansWithPricingSystems
                  }
                />
              )}
              {activeTab === 'build' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <BuildSection
                  project={project}
                  currentFileMetadata={fileMetadata}
                  canOpen={canOpen}
                  onChooseProject={onChooseProject}
                  onOpenNewProjectSetupDialog={onOpenNewProjectSetupDialog}
                  onSelectExampleShortHeader={onSelectExampleShortHeader}
                  onSelectPrivateGameTemplateListingData={
                    onPreviewPrivateGameTemplateListingData
                  }
                  onOpenRecentFile={onOpenRecentFile}
                  onOpenExampleStore={onOpenExampleStore}
                  onManageGame={onManageGame}
                  canManageGame={canManageGame}
                  storageProviders={storageProviders}
                  i18n={i18n}
                />
              )}
              {activeTab === 'learn' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <LearnSection
                  onOpenExampleStore={onOpenExampleStore}
                  onTabChange={setActiveTab}
                  selectInAppTutorial={selectInAppTutorial}
                />
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              {activeTab === 'play' && <PlaySection />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              {activeTab === 'community' && <CommunitySection />}
              {activeTab === 'shop' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <StoreSection
                  project={project}
                  resourceManagementProps={resourceManagementProps}
                  canInstallPrivateAsset={canInstallPrivateAsset}
                  onOpenPrivateGameTemplateListingData={
                    onOpenPrivateGameTemplateListingData
                  }
                />
              )}
              {activeTab === 'team-view' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TeamSection
                  project={project}
                  onOpenRecentFile={onOpenRecentFile}
                  storageProviders={storageProviders}
                  currentFileMetadata={fileMetadata}
                />
              )}
            </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <HomePageMenu
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onOpenPreferences={onOpenPreferences}
              onOpenAbout={onOpenAbout}
            />
          </div>
          {displayTooltipDelayed && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HighlightingTooltip
              // $FlowIgnore - displayTooltipDelayed makes sure the element is defined
              anchorElement={manageTabElement}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Games Dashboard</Trans>}
              thumbnailSource="res/features/games-dashboard.svg"
              thumbnailAlt={'Red hero presenting games analytics'}
              content={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text noMargin key="paragraph">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Follow your games’ online performance, manage published
                    versions, and collect player feedback.
                  </Trans>
                </Text>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text noMargin key="link">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Link
                    href={gamesDashboardWikiArticle}
                    onClick={() =>
                      Window.openExternalURL(gamesDashboardWikiArticle)
                    }
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Learn more</Trans>
                  </Link>
                </Text>,
              ]}
              placement={isMobile ? 'bottom' : 'right'}
              onClose={onCloseTooltip}
              closeWithBackdropClick={false}
            />
          )}
        </TeamProvider>
      )}
    </I18n>
  );
}), // Prevent any update to the editor if the editor is not active,
// and so not visible to the user.
(prevProps, nextProps) => prevProps.isActive || nextProps.isActive);

export const renderHomePageContainer = (
  props: RenderEditorContainerPropsWithRef
) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <HomePage
// @ts-expect-error - TS2322 - Type '{ ref: (arg1?: any) => any; project: any; fileMetadata: FileMetadata | null | undefined; isActive: boolean; projectItemName: string | null | undefined; setToolbar: (arg1?: ReactNode) => void; ... 18 more ...; canInstallPrivateAsset: () => boolean; }' is not assignable to type 'IntrinsicAttributes & Props'.
    ref={props.ref}
    project={props.project}
    fileMetadata={props.fileMetadata}
    isActive={props.isActive}
    projectItemName={props.projectItemName}
    setToolbar={props.setToolbar}
    canOpen={props.canOpen}
    onChooseProject={props.onChooseProject}
    onOpenRecentFile={props.onOpenRecentFile}
    onOpenExampleStore={props.onOpenExampleStore}
    onSelectExampleShortHeader={props.onSelectExampleShortHeader}
    onPreviewPrivateGameTemplateListingData={
      props.onPreviewPrivateGameTemplateListingData
    }
    onOpenPrivateGameTemplateListingData={
      props.onOpenPrivateGameTemplateListingData
    }
    onOpenNewProjectSetupDialog={props.onOpenNewProjectSetupDialog}
    onOpenProjectManager={props.onOpenProjectManager}
    onOpenLanguageDialog={props.onOpenLanguageDialog}
    onOpenProfile={props.onOpenProfile}
    selectInAppTutorial={props.selectInAppTutorial}
    onOpenPreferences={props.onOpenPreferences}
    onOpenAbout={props.onOpenAbout}
    storageProviders={
      (props.extraEditorProps && props.extraEditorProps.storageProviders) || []
    }
    onSave={props.onSave}
    canSave={props.canSave}
    resourceManagementProps={props.resourceManagementProps}
    canInstallPrivateAsset={props.canInstallPrivateAsset}
  />
);
