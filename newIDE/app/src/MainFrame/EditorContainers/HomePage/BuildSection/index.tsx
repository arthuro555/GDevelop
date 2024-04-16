import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../../../UI/TextButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column, Spacer } from '../../../../UI/Grid';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
import {
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Carousel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Carousel.tsx', but '--jsx' is not set.
import Carousel from '../../../../UI/Carousel';
import {
  FileMetadataAndStorageProviderName,
  FileMetadata,
  StorageProvider,
} from '../../../../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../../../Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../../../Preferences/PreferencesContext';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
import {
  checkIfHasTooManyCloudProjects,
  MaxProjectCountAlertMessage,
// @ts-expect-error - TS6142 - Module './MaxProjectCountAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage.tsx', but '--jsx' is not set.
} from './MaxProjectCountAlertMessage';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ExampleStore/ExampleStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ExampleStore/ExampleStoreContext.tsx', but '--jsx' is not set.
import { ExampleStoreContext } from '../../../../AssetStore/ExampleStore/ExampleStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from '../../../../Profile/Subscription/SubscriptionSuggestionContext';
import { ExampleShortHeader } from '../../../../Utils/GDevelopServices/Example';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../../UI/CustomSvgIcons/Add';
import Skeleton from '@material-ui/lab/Skeleton';
// @ts-expect-error - TS6142 - Module '../../../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../../../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
// @ts-expect-error - TS6142 - Module '../../../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
import { PrivateGameTemplateStoreContext } from '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../../../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../../../../UI/CustomSvgIcons/Refresh';
// @ts-expect-error - TS6142 - Module './ProjectFileListItem' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/ProjectFileListItem.tsx', but '--jsx' is not set.
import ProjectFileListItem from './ProjectFileListItem';
import { MenuItemTemplate } from '../../../../UI/Menu/Menu.flow';
import {
  getAllGameTemplatesAndExamplesFlaggedAsGameCount,
  getExampleAndTemplateItemsForBuildSection,
  getLastModifiedInfoByProjectId,
  getProjectLineHeight,
  transformCloudProjectsIntoFileMetadataWithStorageProviderName,
// @ts-expect-error - TS6142 - Module './utils' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/utils.tsx', but '--jsx' is not set.
} from './utils';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';
// @ts-expect-error - TS6142 - Module '../../../../UI/Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../../../../UI/Messages/InfoBar';
import GridList from '@material-ui/core/GridList';
import type { WindowSizeType } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
import useAlertDialog from '../../../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../../../Utils/OptionalRequire';
import { deleteCloudProject } from '../../../../Utils/GDevelopServices/Project';
import { extractGDevelopApiErrorStatusAndCode } from '../../../../Utils/GDevelopServices/Errors';
import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../../../UI/Menu/ContextMenu';
import type { ClientCoordinates } from '../../../../Utils/UseLongTouch';
// @ts-expect-error - TS6142 - Module '../../../../Promotions/PromotionsSlideshow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Promotions/PromotionsSlideshow.tsx', but '--jsx' is not set.
import PromotionsSlideshow from '../../../../Promotions/PromotionsSlideshow';
const electron = optionalRequire('electron');
const path = optionalRequire('path');

const cellSpacing = 2;

const getItemsColumns = (windowSize: WindowSizeType, isLandscape: boolean) => {
  switch (windowSize) {
    case 'small':
      return isLandscape ? 4 : 1;
    case 'medium':
      return 3;
    case 'large':
      return 4;
    case 'xlarge':
      return 5;
    default:
      return 3;
  }
};

const styles = {
  listItem: {
    padding: 0,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 8,
    overflowWrap: 'anywhere', // Ensure everything is wrapped on small devices.
  },
  projectSkeleton: { borderRadius: 6 },
  noProjectsContainer: { padding: 10 },
  refreshIconContainer: { fontSize: 20, display: 'flex', alignItems: 'center' },
  grid: {
    margin: 0,
    // Remove the scroll capability of the grid, the scroll view handles it.
    overflow: 'unset',
  },
} as const;

type Props = {
  project: gdProject | null | undefined,
  currentFileMetadata: FileMetadata | null | undefined,
  canOpen: boolean,
  onChooseProject: () => void,
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>,
  onOpenNewProjectSetupDialog: () => void,
  onSelectExampleShortHeader: (exampleShortHeader: ExampleShortHeader) => void,
  onSelectPrivateGameTemplateListingData: (privateGameTemplateListingData: PrivateGameTemplateListingData) => void,
  storageProviders: Array<StorageProvider>,
  i18n: I18nType,
  onOpenExampleStore: () => void,
  onManageGame: (
    arg1: {
      gameId: string
    },
  ) => void,
  canManageGame: (
    arg1: {
      gameId: string
    },
  ) => boolean
};

const locateProjectFile = (file: FileMetadataAndStorageProviderName) => {
  if (!electron) return;
  electron.shell.showItemInFolder(
    path.resolve(file.fileMetadata.fileIdentifier)
  );
};

const BuildSection = ({
  project,
  currentFileMetadata,
  canOpen,
  onChooseProject,
  onOpenNewProjectSetupDialog,
  onSelectExampleShortHeader,
  onSelectPrivateGameTemplateListingData,
  onOpenRecentFile,
  storageProviders,
  i18n,
  onOpenExampleStore,
  onManageGame,
  canManageGame,
}: Props) => {
  const { getRecentProjectFiles } = React.useContext(PreferencesContext);
  const { exampleShortHeaders } = React.useContext(ExampleStoreContext);
// @ts-expect-error - TS2339 - Property 'showDeleteConfirmation' does not exist on type 'void'. | TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showDeleteConfirmation, showAlert } = useAlertDialog();
  const { removeRecentProjectFile } = React.useContext(PreferencesContext);
  const [pendingProject, setPendingProject] = React.useState<string | null | undefined>(null);
  const [
    showAllGameTemplates,
    setShowAllGameTemplates,
  ] = React.useState<boolean>(false);
  const { privateGameTemplateListingDatas } = React.useContext(
    PrivateGameTemplateStoreContext
  );
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [
    showCloudProjectsInfoIfNotLoggedIn,
    setShowCloudProjectsInfoIfNotLoggedIn,
  ] = React.useState<boolean>(false);
  const {
    authenticated,
    profile,
    cloudProjects,
    limits,
    cloudProjectsFetchingErrorLabel,
    onCloudProjectsChanged,
    onOpenLoginDialog,
  } = authenticatedUser;
  const { windowSize, isMobile, isLandscape } = useResponsiveWindowSize();
  const [
    lastModifiedInfoByProjectId,
    setLastModifiedInfoByProjectId,
  ] = React.useState({});

  const columnsCount = getItemsColumns(windowSize, isLandscape);

  const allGameTemplatesAndExamplesFlaggedAsGameCount = React.useMemo(
    () =>
      getAllGameTemplatesAndExamplesFlaggedAsGameCount({
        privateGameTemplateListingDatas,
        exampleShortHeaders,
        columnsCount,
      }),
    [privateGameTemplateListingDatas, exampleShortHeaders, columnsCount]
  );

  let projectFiles: Array<FileMetadataAndStorageProviderName> = getRecentProjectFiles().filter(
// @ts-expect-error - TS7006 - Parameter 'file' implicitly has an 'any' type.
    file => file.fileMetadata
  );

  if (cloudProjects) {
    projectFiles = projectFiles.concat(
      transformCloudProjectsIntoFileMetadataWithStorageProviderName(
        cloudProjects
      )
    );
  }

  // Look at projects where lastCommittedBy is not the current user, and fetch
  // public profiles of the users that have modified them.
  React.useEffect(
    () => {
      const updateModificationInfoByProjectId = async () => {
        if (!cloudProjects || !profile) return;

        const _lastModifiedInfoByProjectId = await getLastModifiedInfoByProjectId(
          {
            cloudProjects,
            profile,
          }
        );
        setLastModifiedInfoByProjectId(_lastModifiedInfoByProjectId);
      };

      updateModificationInfoByProjectId();
    },
    [cloudProjects, profile]
  );

  const hasTooManyCloudProjects = checkIfHasTooManyCloudProjects(
    authenticatedUser
  );

  const onDeleteCloudProject = async (
    i18n: I18nType,
    {
      fileMetadata,
      storageProviderName,
    }: FileMetadataAndStorageProviderName
  ) => {
    if (storageProviderName !== 'Cloud') return;
    const projectName = fileMetadata.name;
    if (!projectName) return; // Only cloud projects can be deleted, and all cloud projects have names.

    // Extract word translation to ensure it is not wrongly translated in the sentence.
    const translatedConfirmText = i18n._(t`delete`);

    const deleteAnswer = await showDeleteConfirmation({
      title: t`Do you really want to permanently delete your project ${projectName}?`,
      message: t`You’re about to permanently delete your project ${projectName}. You will no longer be able to access it.`,
      fieldMessage: t`To confirm, type "${translatedConfirmText}"`,
      confirmText: translatedConfirmText,
      confirmButtonLabel: t`Delete project`,
    });
    if (!deleteAnswer) return;

    try {
      setPendingProject(fileMetadata.fileIdentifier);
      await deleteCloudProject(authenticatedUser, fileMetadata.fileIdentifier);
      authenticatedUser.onCloudProjectsChanged();
    } catch (error: any) {
      const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
        error
      );
      const message =
        extractedStatusAndCode && extractedStatusAndCode.status === 403
          ? t`You don't have permissions to delete this project.`
          : t`An error occurred when saving the project. Please try again later.`;
      showAlert({
        title: t`Unable to delete the project`,
        message,
      });
    } finally {
      setPendingProject(null);
    }
  };

  const buildContextMenu = (i18n: I18nType, file?: FileMetadataAndStorageProviderName | null): Array<MenuItemTemplate> => {
    if (!file) return [];
    const isCurrentProjectOpened =
      !!currentFileMetadata &&
      currentFileMetadata.fileIdentifier === file.fileMetadata.fileIdentifier;

    const actions = [
      { label: i18n._(t`Open`), click: () => onOpenRecentFile(file) },
    ];
    if (file.storageProviderName === 'Cloud') {
      actions.push({
        label: i18n._(t`Delete`),
        click: () => onDeleteCloudProject(i18n, file),
// @ts-expect-error - TS2345 - Argument of type '{ label: any; click: () => Promise<void>; enabled: boolean; }' is not assignable to parameter of type '{ label: any; click: () => Promise<void>; }'.
        enabled: !isCurrentProjectOpened,
      });
    } else if (file.storageProviderName === 'LocalFile') {
      actions.push(
// @ts-expect-error - TS2345 - Argument of type '{ label: any; click: () => void; }' is not assignable to parameter of type '{ label: any; click: () => Promise<void>; }'.
        ...[
          {
            label: i18n._(t`Show in local folder`),
            click: () => locateProjectFile(file),
          },
          {
            label: i18n._(t`Remove from list`),
            click: () => removeRecentProjectFile(file),
          },
        ]
      );
    } else {
      actions.push({
        label: i18n._(t`Remove from list`),
        click: () => removeRecentProjectFile(file),
      });
    }

    const gameId = file.fileMetadata.gameId;
    if (gameId) {
      actions.push(
        ...[
// @ts-expect-error - TS2345 - Argument of type '{ type: string; } | { label: any; click: () => void; enabled: boolean; }' is not assignable to parameter of type '{ label: any; click: () => Promise<void>; }'.
          { type: 'separator' },
          {
            label: i18n._(t`Manage game`),
            click: () => onManageGame({ gameId }),
            enabled: canManageGame({ gameId }),
          },
        ]
      );
    }

// @ts-expect-error - TS2322 - Type '{ label: any; click: () => Promise<void>; }[]' is not assignable to type 'MenuItemTemplate[]'.
    return actions;
  };

  const openContextMenu = React.useCallback(
    (event: ClientCoordinates, file: FileMetadataAndStorageProviderName) => {
      if (contextMenu.current) {
        contextMenu.current.open(event.clientX, event.clientY, { file });
      }
    },
    []
  );

  const refreshCloudProjects = React.useCallback(
    async () => {
      if (isRefreshing) return;
      if (!authenticated) {
        setShowCloudProjectsInfoIfNotLoggedIn(true);
        return;
      }
      try {
        setIsRefreshing(true);
        await onCloudProjectsChanged();
      } finally {
        // Wait a bit to avoid spam as we don't have a "loading" state.
        setTimeout(() => setIsRefreshing(false), 2000);
      }
    },
    [onCloudProjectsChanged, isRefreshing, authenticated]
  );

  projectFiles.sort((a, b) => {
    if (!a.fileMetadata.lastModifiedDate) return 1;
    if (!b.fileMetadata.lastModifiedDate) return -1;
    return b.fileMetadata.lastModifiedDate - a.fileMetadata.lastModifiedDate;
  });

  const examplesAndTemplatesToDisplay = React.useMemo(
    () =>
      getExampleAndTemplateItemsForBuildSection({
        receivedGameTemplates: authenticatedUser.receivedGameTemplates,
        privateGameTemplateListingDatas,
        exampleShortHeaders,
        onSelectPrivateGameTemplateListingData,
        onSelectExampleShortHeader,
        i18n,
        numberOfItemsExclusivelyInCarousel: showAllGameTemplates
          ? 0
          : isMobile
          ? 3
          : 5,
        numberOfItemsInCarousel: showAllGameTemplates ? 0 : isMobile ? 8 : 12,
        numberOfItemsInGrid: showAllGameTemplates
          ? allGameTemplatesAndExamplesFlaggedAsGameCount
          : isMobile
          ? 16
          : 20,
        privateGameTemplatesPeriodicity: isMobile ? 2 : 3,
      }),
    [
      authenticatedUser.receivedGameTemplates,
      showAllGameTemplates,
      exampleShortHeaders,
      onSelectExampleShortHeader,
      onSelectPrivateGameTemplateListingData,
      privateGameTemplateListingDatas,
      i18n,
      isMobile,
      allGameTemplatesAndExamplesFlaggedAsGameCount,
    ]
  );

  const skeletonLineHeight = getProjectLineHeight({ isMobile });
  const pageContent = showAllGameTemplates ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>All templates</Trans>}
      backAction={() => setShowAllGameTemplates(false)}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GridList
          cols={columnsCount}
          style={styles.grid}
          cellHeight="auto"
          spacing={cellSpacing}
        >
          {examplesAndTemplatesToDisplay.gridItems}
        </GridList>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent={'center'}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            primary
            fullWidth={isMobile}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>See more</Trans>}
            onClick={onOpenExampleStore}
          />
        </Line>
      </SectionRow>
    </SectionContainer>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>My projects</Trans>}
      showUrgentAnnouncements
      renderFooter={
        limits && hasTooManyCloudProjects
          ? () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <MaxProjectCountAlertMessage
                    limits={limits}
                    onUpgrade={() =>
                      openSubscriptionDialog({
                        analyticsMetadata: {
                          reason: 'Cloud Project limit reached',
                        },
                      })
                    }
                  />
                </Column>
              </Line>
            )
          : undefined
      }
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Carousel
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Ready-made games</Trans>}
          displayItemTitles={false}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          browseAllLabel={<Trans>Browse all templates</Trans>}
          onBrowseAllClick={() => setShowAllGameTemplates(true)}
          items={examplesAndTemplatesToDisplay.carouselItems}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          browseAllIcon={<ChevronArrowRight fontSize="small" />}
          roundedImages
          displayArrowsOnDesktop
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PromotionsSlideshow />
        </Column>
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout
          justifyContent="space-between"
          alignItems="center"
          noMargin
          expand
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>My projects</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                size="small"
                onClick={refreshCloudProjects}
                disabled={isRefreshing}
                tooltip={t`Refresh cloud projects`}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div style={styles.refreshIconContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Refresh fontSize="inherit" />
                </div>
              </IconButton>
            </LineStackLayout>
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
                primary
                fullWidth={!canOpen}
                label={
                  isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Create</Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Create a project</Trans>
                  )
                }
                onClick={onOpenNewProjectSetupDialog}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<Add fontSize="small" />}
                id="home-create-project-button"
              />
              {canOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>or</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextButton
                    secondary
                    label={
                      isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Open</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Open a project</Trans>
                      )
                    }
                    onClick={onChooseProject}
                  />
                </>
              )}
            </LineStackLayout>
          </Column>
        </ResponsiveLineStackLayout>
        {cloudProjectsFetchingErrorLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PlaceholderError onRetry={onCloudProjectsChanged}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <AlertMessage kind="warning">
                {cloudProjectsFetchingErrorLabel}
              </AlertMessage>
            </PlaceholderError>
          </Line>
        )}
        {authenticatedUser.loginState === 'loggingIn' &&
        projectFiles.length === 0 ? ( // Only show skeleton on first load
          new Array(10).fill(0).map((_, index) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ListItem style={styles.listItem} key={`skeleton-${index}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Skeleton
                    variant="rect"
                    height={skeletonLineHeight}
                    style={styles.projectSkeleton}
                  />
                </Column>
              </Line>
            </ListItem>
          ))
        ) : projectFiles.length > 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin expand>
              {!isMobile && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>File name</Trans>
                    </Text>
                  </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Location</Trans>
                    </Text>
                  </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text color="secondary">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Trans>Last edited</Trans>
                    </Text>
                  </Column>
                </Line>
              )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <List>
                {projectFiles.map(file => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ProjectFileListItem
                    key={file.fileMetadata.fileIdentifier}
                    file={file}
                    onOpenContextMenu={openContextMenu}
                    isLoading={
                      pendingProject === file.fileMetadata.fileIdentifier
                    }
                    currentFileMetadata={currentFileMetadata}
                    storageProviders={storageProviders}
                    isWindowSizeMediumOrLarger={!isMobile}
                    onOpenRecentFile={onOpenRecentFile}
                    lastModifiedInfo={
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
                      lastModifiedInfoByProjectId[
                        file.fileMetadata.fileIdentifier
                      ]
                    }
                  />
                ))}
              </List>
            </Column>
          </Line>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ListItem style={styles.listItem}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Paper
                  variant="outlined"
                  background="dark"
                  style={styles.noProjectsContainer}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>No projects yet.</Trans>
                  </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Create your first project using one of our templates or
                      start from scratch.
                    </Trans>
                  </BackgroundText>
                </Paper>
              </Column>
            </ListItem>
          </Line>
        )}
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center" noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="section-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Start with a template</Trans>
            </Text>
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GridList
          cols={columnsCount}
          style={styles.grid}
          cellHeight="auto"
          spacing={cellSpacing}
        >
          {examplesAndTemplatesToDisplay.gridItems}
        </GridList>
      </SectionRow>
    </SectionContainer>
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
      {pageContent}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <InfoBar
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        message={<Trans>Log in to see your cloud projects.</Trans>}
        visible={showCloudProjectsInfoIfNotLoggedIn}
        hide={() => setShowCloudProjectsInfoIfNotLoggedIn(false)}
        duration={5000}
        onActionClick={onOpenLoginDialog}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        actionLabel={<Trans>Log in</Trans>}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ContextMenu
        ref={contextMenu}
// @ts-expect-error - TS7006 - Parameter '_i18n' implicitly has an 'any' type. | TS7031 - Binding element 'file' implicitly has an 'any' type.
        buildMenuTemplate={(_i18n, { file }) => buildContextMenu(_i18n, file)}
      />
    </>
  );
};

const BuildSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Build section</Trans>}
    scope="start-page-build"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BuildSection {...props} />
  </ErrorBoundary>
);

export default BuildSectionWithErrorBoundary;
