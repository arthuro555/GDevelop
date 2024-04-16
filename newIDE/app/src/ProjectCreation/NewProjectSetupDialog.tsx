import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
import { StorageProvider, SaveAsLocation } from '../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../UI/TextField';
import AuthenticatedUserContext, {
  AuthenticatedUser,
} from '../Profile/AuthenticatedUserContext';
import generateName from '../Utils/ProjectNameGenerator';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import { emptyStorageProvider } from '../ProjectsStorage/ProjectStorageProviders';
import { findEmptyPathInWorkspaceFolder } from '../ProjectsStorage/LocalFileStorageProvider/LocalPathFinder';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../Profile/CreateProfile' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateProfile.tsx', but '--jsx' is not set.
import CreateProfile from '../Profile/CreateProfile';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../UI/Paper';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
import {
  checkIfHasTooManyCloudProjects,
  MaxProjectCountAlertMessage,
// @ts-expect-error - TS6142 - Module '../MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage.tsx', but '--jsx' is not set.
} from '../MainFrame/EditorContainers/HomePage/BuildSection/MaxProjectCountAlertMessage';
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from '../Profile/Subscription/SubscriptionSuggestionContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';
import { useOnlineStatus } from '../Utils/OnlineStatus';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../UI/CustomSvgIcons/Refresh';
import {
  createGeneratedProject,
  GeneratedProject,
} from '../Utils/GDevelopServices/Generation';
import ResolutionOptions, {
  ResolutionOption,
  resolutionOptions,
  defaultCustomWidth,
  defaultCustomHeight,
// @ts-expect-error - TS6142 - Module './ResolutionOptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/ResolutionOptions.tsx', but '--jsx' is not set.
} from './ResolutionOptions';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../UI/DismissableAlertMessage';
import generatePrompt from '../Utils/ProjectPromptGenerator';
// @ts-expect-error - TS6142 - Module './ProjectGeneratingDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/ProjectGeneratingDialog.tsx', but '--jsx' is not set.
import ProjectGeneratingDialog from './ProjectGeneratingDialog';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module './RobotIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/RobotIcon.tsx', but '--jsx' is not set.
import RobotIcon from './RobotIcon';
import { ExampleShortHeader } from '../Utils/GDevelopServices/Example';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS6142 - Module '../Profile/Subscription/GetSubscriptionCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/GetSubscriptionCard.tsx', but '--jsx' is not set.
import GetSubscriptionCard from '../Profile/Subscription/GetSubscriptionCard';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../Utils/GDevelopServices/Shop';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';

const electron = optionalRequire('electron');
const remote = optionalRequire('@electron/remote');
const app = remote ? remote.app : null;

export type NewProjectSetup = {
  storageProvider: StorageProvider,
  saveAsLocation: SaveAsLocation | null | undefined,
  projectName?: string,
  height?: number,
  width?: number,
  orientation?: 'landscape' | 'portrait' | 'default',
  optimizeForPixelArt?: boolean,
  allowPlayersToLogIn?: boolean,
  templateSlug?: string
};

type Props = {
  isOpeningProject?: boolean,
  onClose: () => void,
  onCreateEmptyProject: (newProjectSetup: NewProjectSetup) => Promise<void>,
  onCreateFromExample: (
    exampleShortHeader: ExampleShortHeader,
    newProjectSetup: NewProjectSetup,
    i18n: I18nType,
  ) => Promise<void>,
  onCreateProjectFromPrivateGameTemplate: (
    privateGameTemplateListingData: PrivateGameTemplateListingData,
    newProjectSetup: NewProjectSetup,
    i18n: I18nType,
  ) => Promise<void>,
  onCreateWithLogin: (newProjectSetup: NewProjectSetup) => Promise<void>,
  onCreateFromAIGeneration: (generatedProject: GeneratedProject, newProjectSetup: NewProjectSetup) => Promise<void>,
  selectedExampleShortHeader: ExampleShortHeader | null | undefined,
  selectedPrivateGameTemplateListingData: PrivateGameTemplateListingData | null | undefined,
  storageProviders: Array<StorageProvider>,
  authenticatedUser: AuthenticatedUser
};

const NewProjectSetupDialog = (
  {
    isOpeningProject,
    onClose,
    onCreateEmptyProject,
    onCreateFromExample,
    onCreateProjectFromPrivateGameTemplate,
    onCreateWithLogin,
    onCreateFromAIGeneration,
    selectedExampleShortHeader,
    selectedPrivateGameTemplateListingData,
    storageProviders,
    authenticatedUser,
  }: Props,
): React.ReactElement => {
  const generateProjectName = () =>
    selectedExampleShortHeader
      ? `${generateName()} (${selectedExampleShortHeader.name})`
      : selectedPrivateGameTemplateListingData
      ? `${generateName()} (${selectedPrivateGameTemplateListingData.name})`
      : generateName();

  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const isOnline = useOnlineStatus();
  const { values, setNewProjectsDefaultStorageProviderName } = React.useContext(
    PreferencesContext
  );
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
  const [projectNameError, setProjectNameError] = React.useState<React.ReactNode | null | undefined>(null);
  const [projectName, setProjectName] = React.useState<string>(generateProjectName());
  const [generationPrompt, setGenerationPrompt] = React.useState<string>('');
  const [isGeneratingProject, setIsGeneratingProject] = React.useState<boolean>(false);
  const [generatingProjectId, setGeneratingProjectId] = React.useState<string | null | undefined>(null);
  const [
    resolutionOption,
    setResolutionOption,
  ] = React.useState<ResolutionOption>('desktopMobileLandscape');
  const [customWidth, setCustomWidth] = React.useState<number | null | undefined>(defaultCustomWidth);
  const [customHeight, setCustomHeight] = React.useState<number | null | undefined>(defaultCustomHeight);
  const [optimizeForPixelArt, setOptimizeForPixelArt] = React.useState<boolean>(false);
  const [allowPlayersToLogIn, setAllowPlayersToLogIn] = React.useState<boolean>(
    // Enable player login by default for new games, unless a tutorial is running or offline.
    !!currentlyRunningInAppTutorial || !isOnline ? false : true,
  );
  const newProjectsDefaultFolder = app
    ? findEmptyPathInWorkspaceFolder(app, values.newProjectsDefaultFolder || '')
    : '';
  const [storageProvider, setStorageProvider] = React.useState<StorageProvider>(() => {
    const localFileStorageProvider = storageProviders.find(
      ({ internalName }) => internalName === 'LocalFile'
    );
    const cloudStorageProvider = storageProviders.find(
      ({ internalName }) => internalName === 'Cloud'
    );
    const preferredStorageProvider = storageProviders.find(
      ({ internalName }) =>
        internalName === values.newProjectsDefaultStorageProviderName
    );

    // If in a tutorial, choose either the local file storage provider or none.
    // This is to avoid a new user to be messing with account creation.
    if (!!currentlyRunningInAppTutorial) {
      if (localFileStorageProvider) return localFileStorageProvider;
      return emptyStorageProvider;
    }

    // If a private game template is selected, suggest the preferred storage if available,
    // or default to local or cloud.
    if (!!selectedPrivateGameTemplateListingData) {
      if (preferredStorageProvider) return preferredStorageProvider;
      if (localFileStorageProvider) return localFileStorageProvider;
      if (cloudStorageProvider) return cloudStorageProvider;
      return emptyStorageProvider;
    }

    // Try to use the storage provider stored in user preferences.
    if (values.newProjectsDefaultStorageProviderName === 'Empty')
      return emptyStorageProvider;
    if (preferredStorageProvider) return preferredStorageProvider;

    // If preferred storage provider not found, push Cloud storage provider if user authenticated.
    if (authenticatedUser.authenticated) {
      if (cloudStorageProvider) return cloudStorageProvider;
    }

    if (localFileStorageProvider) return localFileStorageProvider;

    return emptyStorageProvider;
  });
  const [saveAsLocation, setSaveAsLocation] = React.useState<SaveAsLocation | null | undefined>(storageProvider.getProjectLocation
    ? storageProvider.getProjectLocation({
        projectName,
        saveAsLocation: null,
        newProjectsDefaultFolder,
      })
    : null);

  const generationCurrentUsage = authenticatedUser.limits
    ? authenticatedUser.limits.quotas['ai-project-generation']
    : null;
  const canGenerateProjectFromPrompt =
    generationCurrentUsage && !generationCurrentUsage.limitReached;

  const needUserAuthenticationForStorage =
    storageProvider.needUserAuthentication && !authenticatedUser.authenticated;
  const { limits } = authenticatedUser;
  const hasTooManyCloudProjects =
    storageProvider.internalName === 'Cloud' &&
    checkIfHasTooManyCloudProjects(authenticatedUser);
  const hasNotSelectedAStorageProvider =
    storageProvider.internalName === 'Empty';

  const selectedWidth =
    resolutionOptions[resolutionOption].width ||
    customWidth ||
    defaultCustomWidth;
  const selectedHeight =
    resolutionOptions[resolutionOption].height ||
    customHeight ||
    defaultCustomHeight;
  const selectedOrientation = resolutionOptions[resolutionOption].orientation;

  const isLoading = isGeneratingProject || isOpeningProject;

  const isStartingProjectFromScratch =
    !selectedExampleShortHeader && !selectedPrivateGameTemplateListingData;

  // On the local app, prefer to always have something saved so that the user is not blocked.
  // On the web-app, allow to create a project without saving it, unless a private game template is selected
  // (as it requires to save the project to the cloud to be able to use it).
  const shouldAllowCreatingProjectWithoutSaving =
    !electron && !selectedPrivateGameTemplateListingData;

  const shouldNotAllowCreatingProject =
    isLoading ||
    needUserAuthenticationForStorage ||
    hasTooManyCloudProjects ||
    (hasNotSelectedAStorageProvider &&
      !shouldAllowCreatingProjectWithoutSaving);

  const generateProject = React.useCallback(
    async () => {
      if (shouldNotAllowCreatingProject) return;
      if (!profile) return;

      setIsGeneratingProject(true);
      try {
        const generatedProject = await createGeneratedProject(
          getAuthorizationHeader,
          {
            userId: profile.id,
            prompt: generationPrompt,
            width: selectedWidth,
            height: selectedHeight,
            projectName,
          }
        );
        setGeneratingProjectId(generatedProject.id);
      } catch (error: any) {
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (
          extractedStatusAndCode &&
          extractedStatusAndCode.code === 'project-generation/quota-exceeded'
        ) {
          setGenerationPrompt('');
          // Fetch the limits again to show the warning about quota.
          await authenticatedUser.onRefreshLimits();
        } else {
          showAlert({
            title: t`Unable to generate project`,
            message: t`Looks like the AI service is not available. Please try again later or create a project without a prompt.`,
          });
        }
        setIsGeneratingProject(false);
      }
    },
    [
      shouldNotAllowCreatingProject,
      getAuthorizationHeader,
      generationPrompt,
      profile,
      projectName,
      showAlert,
      authenticatedUser,
      selectedHeight,
      selectedWidth,
    ]
  );

  const onValidate = React.useCallback(
    async (i18n: I18nType) => {
      if (generationPrompt) {
        generateProject();
        return;
      }

      if (shouldNotAllowCreatingProject) return;

      setProjectNameError(null);
      if (!projectName) {
        setProjectNameError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Please enter a name for your project.</Trans>
        );
        return;
      }

      // Make sure that the path is up to date with the project name.
      const projectLocation = storageProvider.getProjectLocation
        ? storageProvider.getProjectLocation({
            projectName,
            saveAsLocation,
            newProjectsDefaultFolder,
          })
        : saveAsLocation;

      const projectSetup = {
        projectName,
        storageProvider,
        saveAsLocation: projectLocation,
        height: selectedHeight,
        width: selectedWidth,
        orientation: selectedOrientation,
        optimizeForPixelArt,
        allowPlayersToLogIn,
      } as const;

      if (selectedExampleShortHeader) {
        await onCreateFromExample(
          selectedExampleShortHeader,
          {
            // We only pass down the project name as this is the only customizable field for an example.
            projectName,
            storageProvider,
            saveAsLocation: projectLocation,
          },
          i18n
        );
      } else if (selectedPrivateGameTemplateListingData) {
        await onCreateProjectFromPrivateGameTemplate(
          selectedPrivateGameTemplateListingData,
          {
            // We only pass down the project name as this is the only cusomizable field for a template.
            projectName,
            storageProvider,
            saveAsLocation,
          },
          i18n
        );
      } else if (allowPlayersToLogIn) {
        await onCreateWithLogin(projectSetup);
        return;
      } else {
        await onCreateEmptyProject(projectSetup);
      }
    },
    [
      generationPrompt,
      shouldNotAllowCreatingProject,
      projectName,
      storageProvider,
      saveAsLocation,
      newProjectsDefaultFolder,
      selectedHeight,
      selectedWidth,
      selectedOrientation,
      optimizeForPixelArt,
      allowPlayersToLogIn,
      selectedExampleShortHeader,
      generateProject,
      selectedPrivateGameTemplateListingData,
      onCreateFromExample,
      onCreateProjectFromPrivateGameTemplate,
      onCreateWithLogin,
      onCreateEmptyProject,
    ]
  );

  const _onChangeProjectName = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
    (event, text) => {
      if (projectNameError) setProjectNameError(null);
      setProjectName(text);
    },
    [setProjectName, projectNameError]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          open
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>New Project</Trans>}
          id="project-pre-creation-dialog"
          maxWidth="sm"
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              disabled={isLoading}
              key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Cancel</Trans>}
              onClick={onClose}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LeftLoader isLoading={isLoading} key="create">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <DialogPrimaryButton
                primary
                disabled={shouldNotAllowCreatingProject}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Create project</Trans>}
                onClick={() => onValidate(i18n)}
                id="create-project-button"
              />
            </LeftLoader>,
          ]}
          cannotBeDismissed={isLoading}
          onRequestClose={onClose}
          onApply={() => onValidate(i18n)}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
            {isStartingProjectFromScratch && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ResolutionOptions
// @ts-expect-error - TS7006 - Parameter 'key' implicitly has an 'any' type.
                onClick={key => setResolutionOption(key)}
                selectedOption={resolutionOption}
                disabled={isLoading}
                customHeight={customHeight}
                customWidth={customWidth}
                onCustomHeightChange={setCustomHeight}
                onCustomWidthChange={setCustomWidth}
              />
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              type="text"
              errorText={projectNameError}
              disabled={isLoading}
              value={projectName}
              onChange={_onChangeProjectName}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Project name</Trans>}
              endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton
                  size="small"
                  onClick={() => setProjectName(generateProjectName())}
                  tooltip={t`Generate random name`}
                  disabled={isLoading}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Refresh />
                </IconButton>
              }
              autoFocus="desktop"
              maxLength={100}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
              fullWidth
              disabled={isLoading}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Where to store this project</Trans>}
              value={storageProvider.internalName}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, newValue: string) => {
                setNewProjectsDefaultStorageProviderName(newValue);
                const newStorageProvider =
                  storageProviders.find(
                    ({ internalName }) => internalName === newValue
                  ) || emptyStorageProvider;
                setStorageProvider(newStorageProvider);

                // Reset the save as location, to avoid mixing it between storage providers
                // and give a chance to the storage provider to set it to a default value.
                setSaveAsLocation(null);
              }}
            >
              {storageProviders
                // Filter out storage providers who are supposed to be used for storage initially
                // (for example: the "URL" storage provider, which is read only,
                // or the "DownloadFile" storage provider, which is not a persistent storage).
                .filter(
                  storageProvider =>
                    !!storageProvider.renderNewProjectSaveAsLocationChooser
                )
                .map(storageProvider => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    key={storageProvider.internalName}
                    value={storageProvider.internalName}
                    label={storageProvider.name}
                    disabled={storageProvider.disabled}
                  />
                ))}
              {shouldAllowCreatingProjectWithoutSaving && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption
                  value={emptyStorageProvider.internalName}
                  label={t`Don't save this project now`}
                />
              )}
            </SelectField>
            {needUserAuthenticationForStorage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Paper background="dark" variant="outlined">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <CreateProfile
                    onOpenLoginDialog={authenticatedUser.onOpenLoginDialog}
                    onOpenCreateAccountDialog={
                      authenticatedUser.onOpenCreateAccountDialog
                    }
                    message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Create an account to store your project online.
                      </Trans>
                    }
                  />
                </Line>
              </Paper>
            )}
            {!needUserAuthenticationForStorage &&
              storageProvider.renderNewProjectSaveAsLocationChooser &&
              storageProvider.renderNewProjectSaveAsLocationChooser({
                projectName,
                saveAsLocation,
                setSaveAsLocation,
                newProjectsDefaultFolder,
              })}
            {isStartingProjectFromScratch && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <DismissableAlertMessage
                  kind="info"
                  identifier="new-generate-project-from-prompt"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>NEW! Generate a pre-made AI scene with assets.</Trans>
                </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout
                  expand
                  noMargin
                  alignItems="center"
                  justifyContent="center"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <RobotIcon />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TextField
                    type="text"
                    multiline
                    maxLength={200}
                    fullWidth
                    disabled={
                      isLoading ||
                      !authenticatedUser.authenticated ||
                      !isOnline ||
                      !canGenerateProjectFromPrompt
                    }
                    value={generationPrompt}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
                    onChange={(e, text) => setGenerationPrompt(text)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    floatingLabelText={<Trans>AI prompt</Trans>}
                    floatingLabelFixed
                    translatableHintText={
                      !authenticatedUser.authenticated || !isOnline
                        ? t`Log in to generate a project from a prompt`
                        : t`Type a prompt yourself or generate a random one`
                    }
                    endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <IconButton
                        size="small"
                        onClick={() => setGenerationPrompt(generatePrompt())}
                        tooltip={t`Generate random prompt`}
                        disabled={
                          isLoading ||
                          !authenticatedUser.authenticated ||
                          !isOnline ||
                          !canGenerateProjectFromPrompt
                        }
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Refresh />
                      </IconButton>
                    }
                  />
                </LineStackLayout>
                {authenticatedUser.authenticated &&
                  !canGenerateProjectFromPrompt && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <GetSubscriptionCard subscriptionDialogOpeningReason="Generate project from prompt">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>
                              You've used all your daily pre-made AI scenes!
                              Generate as many as you want with a subscription.
                            </Trans>
                          </Text>
                        </Column>
                      </Line>
                    </GetSubscriptionCard>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Advanced File options</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  checked={optimizeForPixelArt}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Optimize for Pixel Art</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    setOptimizeForPixelArt(checked);
                  }}
                  disabled={isLoading}
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Checkbox
                  checked={allowPlayersToLogIn}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Allow players to authenticate in-game</Trans>}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => {
                    setAllowPlayersToLogIn(checked);
                  }}
                  disabled={isLoading || !isOnline}
                  tooltipOrHelperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <MarkdownText
                      translatableSource={t`Learn more about [player authentication](https://wiki.gdevelop.io/gdevelop5/all-features/player-authentication).`}
                    />
                  }
                />
              </ColumnStackLayout>
            )}
            {limits && hasTooManyCloudProjects ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
            ) : null}
          </ColumnStackLayout>
          {isGeneratingProject && generatingProjectId && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ProjectGeneratingDialog
              generatingProjectId={generatingProjectId}
              storageProvider={storageProvider}
              saveAsLocation={saveAsLocation}
              onCreate={onCreateFromAIGeneration}
              onClose={() => {
                setGeneratingProjectId(null);
                setIsGeneratingProject(false);
              }}
            />
          )}
        </Dialog>
      )}
    </I18n>
  );
};

export default NewProjectSetupDialog;
