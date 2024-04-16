import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { StorageProvider, SaveAsLocation } from '../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module './NewProjectSetupDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/NewProjectSetupDialog.tsx', but '--jsx' is not set.
import { NewProjectSetup } from './NewProjectSetupDialog';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { LargeSpacer } from '../UI/Grid';
import {
  getGeneratedProject,
  GeneratedProject,
} from '../Utils/GDevelopServices/Generation';
import { useInterval } from '../Utils/UseInterval';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ErrorFilled'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ErrorFilled.js' implicitly has an 'any' type.
import ErrorFilled from '../UI/CustomSvgIcons/ErrorFilled';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './RobotIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/RobotIcon.tsx', but '--jsx' is not set.
import RobotIcon from './RobotIcon';

type Props = {
  onClose: () => void,
  onCreate: (generatedProject: GeneratedProject, projectSetup: NewProjectSetup) => Promise<void>,
  storageProvider: StorageProvider,
  saveAsLocation: SaveAsLocation | null | undefined,
  generatingProjectId: string | null | undefined
};

const loadingMessages = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>Talking to the AI... beep boop beep boop...</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>
    The AI has accepted your request. It is now thinking about the best way to
    create your game...
  </Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>It is now choosing objects from the asset store...</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>It is now placing everything in the scene...</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>Almost done...</Trans>,
];
const loadingMessagesInterval = 5;
const timeBeforeShowingError = 35;

const ProjectGeneratingDialog = (
  {
    generatingProjectId,
    storageProvider,
    saveAsLocation,
    onClose,
    onCreate,
  }: Props,
): React.ReactElement => {
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
  const [isErrored, setIsErrored] = React.useState<boolean>(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const [loadingMessageIndex, setLoadingMessageIndex] = React.useState(0);
  const [overallLoadingTime, setOverallLoadingTime] = React.useState(0);

  const updateLoadingMessage = React.useCallback(
    () => {
      setOverallLoadingTime(overallLoadingTime + loadingMessagesInterval);
      if (loadingMessageIndex >= loadingMessages.length - 1) return;
      setLoadingMessageIndex(loadingMessageIndex + 1);
    },
    [loadingMessageIndex, setLoadingMessageIndex, overallLoadingTime]
  );

  useInterval(updateLoadingMessage, loadingMessagesInterval * 1000);

  const hasProbablyTimedOut = overallLoadingTime > timeBeforeShowingError;

  const updateGeneratingProject = React.useCallback(
    async () => {
      if (!generatingProjectId || !profile) return;

      try {
        const generatedProject = await getGeneratedProject(
          getAuthorizationHeader,
          {
            generatedProjectId: generatingProjectId,
            userId: profile.id,
          }
        );
        if (generatedProject.status === 'ready') {
          setIsReady(true);
          if (!generatedProject.fileUrl) {
            throw new Error('Generated project has no fileUrl');
          }
          await onCreate(generatedProject, {
            // We only update the project name, the rest is handled by the template.
            projectName: generatedProject.projectName,
            storageProvider,
            saveAsLocation,
          });
        } else if (generatedProject.status === 'error') {
          throw new Error('Generated project has an error');
        }
      } catch (err: any) {
        console.error(err);
        setIsErrored(true);
      }
    },
    [
      generatingProjectId,
      getAuthorizationHeader,
      profile,
      onCreate,
      saveAsLocation,
      storageProvider,
    ]
  );

  const shouldUpdateProject = !isReady && !isErrored && generatingProjectId;

  // Takes in average 20 seconds, so we check every 3 seconds.
  useInterval(
    () => {
      updateGeneratingProject();
    },
    shouldUpdateProject ? 3000 : null
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
      open
      title={null} // Don't display the title when generating a project, we handle it inside the dialog
      id="project-generating-dialog"
      maxWidth="sm"
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          onClick={onClose}
        />,
      ]}
      cannotBeDismissed
      onRequestClose={onClose}
    >
      {isErrored ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Oh. We lost contact with the AI.</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ErrorFilled
            style={{
              color: gdevelopTheme.message.error,
              width: 40,
              height: 40,
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>It's probably tired.</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Try making your prompt more specific.</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Try again</Trans>}
            primary
            onClick={onClose}
          />
        </ColumnStackLayout>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="section-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Creating new project</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RobotIcon rotating />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title" align="center">
            {hasProbablyTimedOut ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                This is taking longer than expected... We might have lost
                contact with the AI.
              </Trans>
            ) : (
              loadingMessages[loadingMessageIndex]
            )}
          </Text>
          {hasProbablyTimedOut && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="sub-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  You can wait a bit more, or try refining your prompt.
                </Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Try again</Trans>}
                primary
                onClick={onClose}
              />
            </>
          )}
        </ColumnStackLayout>
      )}
    </Dialog>
  );
};

export default ProjectGeneratingDialog;
