// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import Avatar from '@material-ui/core/Avatar';
import { getGravatarUrl } from '../../UI/GravatarUrl';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../UI/CustomSvgIcons/Add';
import { useOnlineStatus } from '../../Utils/OnlineStatus';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../Profile/Subscription/GetSubscriptionCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/GetSubscriptionCard.tsx', but '--jsx' is not set.
import GetSubscriptionCard from '../../Profile/Subscription/GetSubscriptionCard';
import {
  createProjectUserAcl,
  listProjectUserAcls,
  deleteProjectUserAcl,
  Level,
  ProjectUserAclWithEmail,
} from '../../Utils/GDevelopServices/Project';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { getUserPublicProfilesByIds } from '../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../UI/CustomSvgIcons/Trash';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../../UI/Form';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';

export const emailRegex = /^(.+)@(.+)$/;

const getTranslatableLevel = (level: Level) => {
  switch (level) {
    case 'owner':
      return t`Owner`;
    case 'writer':
      return t`Read & Write`;
    case 'reader':
      return t`Read only`;
    default:
      return level;
  }
};

const UserLine = ({
  username,
  email,
  level,
  onDelete,
  disabled,
}: {
  username: string | null | undefined,
  email: string,
  level: Level | null | undefined,
  onDelete?: () => void,
  disabled?: boolean
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Avatar src={getGravatarUrl(email, { size: 40 })} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {username && <Text noMargin>{username}</Text>}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text noMargin color="secondary">
              {email}
            </Text>
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
          {!!level && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text color="secondary">{i18n._(getTranslatableLevel(level))}</Text>
          )}
        </Column>
        {onDelete && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton size="small" onClick={onDelete} disabled={disabled}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trash />
            </IconButton>
          </Column>
        )}
      </Line>
    )}
  </I18n>
);

const getEmailErrorText = (addError?: string | null) => {
  switch (addError) {
    case 'user-not-found':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>No GDevelop user with this email can be found.</Trans>;
    case 'user-already-added':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>This user is already a collaborator.</Trans>;
    case 'user-owner':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>You cannot add yourself as a collaborator.</Trans>;
    case 'not-allowed':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>You don't have permissions to add collaborators.</Trans>;
    case 'max-guest-collaborators':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          You have reached the maximum number of guest collaborators for your
          subscription. Ask this user to get a Startup subscription!
        </Trans>
      );
    case 'unexpected':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          An unexpected error happened. Verify your internet connection or try
          again later.
        </Trans>
      );
    default:
      return undefined;
  }
};

type Props = {
  cloudProjectId: string | null | undefined
};

const InviteHome = ({
  cloudProjectId,
}: Props) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { profile, limits } = authenticatedUser;
  const isOnline = useOnlineStatus();

  const [projectUserAcls, setProjectUserAcls] = React.useState<any>(null);
  const [fetchError, setFetchError] = React.useState<'project-not-found' | 'project-not-owned' | 'unexpected' | null>(null);
  const [addError, setAddError] = React.useState<'user-not-found' | 'max-guest-collaborators' | 'user-already-added' | 'user-owner' | 'not-allowed' | 'unexpected' | null>(null);
  const [userPublicProfileByIds, setUserPublicProfileByIds] = React.useState(
    {}
  );
  const [
    showCollaboratorAddDialog,
    setShowCollaboratorAddDialog,
  ] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [actionInProgress, setActionInProgress] = React.useState(false);
  const [collaboratorEmail, setCollaboratorEmail] = React.useState('');
  const [collaboratorLevel, setCollaboratorLevel] = React.useState<Level>('writer');
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'. | TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showAlert, showConfirmation } = useAlertDialog();

  const fetchProjectUserAcls = React.useCallback(
    async () => {
      if (!cloudProjectId) {
        setFetchError('project-not-found');
        return;
      }

      try {
        setActionInProgress(true);
        const projectUserAcls = await listProjectUserAcls(authenticatedUser, {
          projectId: cloudProjectId,
        });
        const collaboratorProjectUserAcls = projectUserAcls
          ? projectUserAcls.filter(
              projectUserAcl => projectUserAcl.feature === 'collaboration'
            )
          : [];
        setProjectUserAcls(collaboratorProjectUserAcls);
      } catch (error: any) {
        console.error('Unable to fetch the project user acls', error);
        const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
          error
        );
        if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
          setFetchError('project-not-found');
          return;
        }
        if (extractedStatusAndCode && extractedStatusAndCode.status === 403) {
          setFetchError('project-not-owned');
          return;
        }
        setFetchError('unexpected');
      } finally {
        setActionInProgress(false);
      }
    },
    [authenticatedUser, cloudProjectId]
  );

  React.useEffect(
    () => {
      fetchProjectUserAcls();
    },
    [fetchProjectUserAcls]
  );

  const fetchCollaboratorPublicProfileByIds = React.useCallback(
    async () => {
      if (!projectUserAcls || !projectUserAcls.length) return;

      const userIds = projectUserAcls.map(
// @ts-expect-error - TS7006 - Parameter 'projectUserAcl' implicitly has an 'any' type.
        projectUserAcl => projectUserAcl.userId
      );
      try {
        const userPublicProfileByIds = await getUserPublicProfilesByIds(
          userIds
        );
        setUserPublicProfileByIds(userPublicProfileByIds);
      } catch (error: any) {
        console.error('Unable to fetch the collaborator profiles', error);
        // Do not throw if the user profile cannot be fetched as
        // they're only used to display the username.
      }
    },
    [projectUserAcls]
  );

  React.useEffect(
    () => {
      fetchCollaboratorPublicProfileByIds();
    },
    [fetchCollaboratorPublicProfileByIds]
  );

  const getCollaboratorUsername = (userId: string) => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    if (!userPublicProfileByIds[userId]) return null;
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    return userPublicProfileByIds[userId].username;
  };

  const doAddCollaborator = async () => {
    const trimmedEmail = collaboratorEmail.trim();
    setCollaboratorEmail(trimmedEmail);
    const isEmailEnteredValid = emailRegex.test(trimmedEmail);
    setIsEmailValid(isEmailEnteredValid);

    if (
      actionInProgress ||
      !trimmedEmail ||
      !isEmailEnteredValid ||
      !cloudProjectId
    ) {
      return;
    }
    try {
      setActionInProgress(true);

      await createProjectUserAcl(authenticatedUser, {
        projectId: cloudProjectId,
        feature: 'collaboration',
        level: collaboratorLevel,
        email: trimmedEmail,
      });
      setShowCollaboratorAddDialog(false);
      // Reset form fields.
      setCollaboratorEmail('');
      setCollaboratorLevel('writer');
      await fetchProjectUserAcls();
    } catch (error: any) {
      console.error('Unable to add collaborator', error);
      const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
        error
      );
      if (extractedStatusAndCode && extractedStatusAndCode.status === 400) {
        if (
          extractedStatusAndCode.code ===
          'project-user-acl-creation/user-already-added'
        ) {
          setAddError('user-already-added');
          return;
        }
        if (
          extractedStatusAndCode.code ===
          'project-user-acl-creation/user-is-owner'
        ) {
          setAddError('user-owner');
          return;
        }
      }
      if (extractedStatusAndCode && extractedStatusAndCode.status === 404) {
        setAddError('user-not-found');
        return;
      }
      if (extractedStatusAndCode && extractedStatusAndCode.status === 403) {
        if (
          extractedStatusAndCode.code ===
          'project-user-acl-creation/collaborators-not-allowed'
        ) {
          setAddError('not-allowed');
          return;
        }
        if (
          extractedStatusAndCode.code ===
          'project-user-acl-creation/too-many-guest-collaborators-on-project'
        ) {
          setAddError('max-guest-collaborators');
          return;
        }
        setAddError('not-allowed');
        return;
      }
      setAddError('unexpected');
    } finally {
      setActionInProgress(false);
    }
  };

  const doRemoveCollaborator = async (
    projectUserAcl: ProjectUserAclWithEmail
  ) => {
    if (!cloudProjectId) return;

// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    const userPublicProfile = userPublicProfileByIds[projectUserAcl.userId];
    const username = userPublicProfile ? userPublicProfile.username : null;

    const answer = await showConfirmation({
      title: t`Remove collaborator`,
      message: t`You are about to remove ${projectUserAcl.email}${
        username ? ` (${username})` : ''
      } from the list of collaborators. Are you sure?`,
      confirmButtonLabel: t`Remove`,
    });
    if (!answer) return;

    try {
      setActionInProgress(true);
      await deleteProjectUserAcl(authenticatedUser, {
        projectId: cloudProjectId,
        feature: projectUserAcl.feature,
        level: projectUserAcl.level,
        userId: projectUserAcl.userId,
      });
    } catch (error: any) {
      console.error('Unable to remove collaborator', error);
      showAlert({
        title: t`Unable to remove collaborator`,
        message: t`An error happened while removing the collaborator. Verify your internet connection or retry later.`,
      });
    } finally {
      setActionInProgress(false);
      await fetchProjectUserAcls();
    }
  };

  if (!profile || !limits || !isOnline) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>You must be logged in to invite collaborators.</Trans>
        </AlertMessage>
      </ColumnStackLayout>
    );
  }

  const hasSufficientPermissionsWithSubscription =
    limits.capabilities.cloudProjects.maximumGuestCollaboratorsPerProject > 0;
  const currentUserLevel =
    projectUserAcls && fetchError !== 'project-not-owned' ? 'owner' : null;

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ColumnStackLayout expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <UserLine
        username={profile.username}
        email={profile.email}
        level={currentUserLevel}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Collaborators</Trans>
        </Text>
      </Line>
      {!hasSufficientPermissionsWithSubscription &&
        !!projectUserAcls &&
        fetchError !== 'project-not-owned' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GetSubscriptionCard subscriptionDialogOpeningReason="Add collaborators on project">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Get a startup subscription to invite collaborators into your
                project.
              </Trans>
            </Text>
          </GetSubscriptionCard>
        )}
      {fetchError === 'unexpected' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <PlaceholderError onRetry={fetchProjectUserAcls}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Error while loading the collaborators. Verify your internet
              connection or try again later.
            </Trans>
          </PlaceholderError>
        </Line>
      ) : fetchError === 'project-not-found' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            You need to first save your project to the cloud to invite
            collaborators.
          </Trans>
        </AlertMessage>
      ) : fetchError === 'project-not-owned' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            You are not owner of this project, so you cannot invite
            collaborators.
          </Trans>
        </AlertMessage>
      ) : !projectUserAcls ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      ) : (
// @ts-expect-error - TS7006 - Parameter 'projectUserAcl' implicitly has an 'any' type.
        projectUserAcls.map(projectUserAcl => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <UserLine
            username={getCollaboratorUsername(projectUserAcl.userId)}
            email={projectUserAcl.email}
            level={projectUserAcl.level}
            onDelete={() => {
              doRemoveCollaborator(projectUserAcl);
            }}
            disabled={actionInProgress}
            key={projectUserAcl.userId}
          />
        ))
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<Add fontSize="small" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Add collaborator</Trans>}
            onClick={() => setShowCollaboratorAddDialog(true)}
            primary
            disabled={
              !hasSufficientPermissionsWithSubscription ||
              !!fetchError ||
              !projectUserAcls ||
              actionInProgress
            }
          />
        </Column>
      </Line>
    </ColumnStackLayout>
    {showCollaboratorAddDialog && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Dialog
        title="Add a collaborator"
        actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Back</Trans>}
            disabled={actionInProgress}
            key="back"
            primary={false}
            onClick={() => {
              if (!isEmailValid) setIsEmailValid(true);
              if (addError) setAddError(null);
              setShowCollaboratorAddDialog(false);
            }}
          />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <LeftLoader isLoading={actionInProgress} key="add-collaborator">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Add</Trans>}
              primary
              onClick={doAddCollaborator}
              disabled={actionInProgress}
            />
          </LeftLoader>,
        ]}
        maxWidth="xs"
        cannotBeDismissed={actionInProgress}
        onRequestClose={() => setShowCollaboratorAddDialog(false)}
        onApply={doAddCollaborator}
        open
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Form onSubmit={doAddCollaborator} name="addCollaborator">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TextField
              autoFocus="desktop"
              value={collaboratorEmail}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              floatingLabelText={<Trans>Email</Trans>}
              type="email"
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(e, value) => {
                if (!isEmailValid) setIsEmailValid(true);
                if (addError) setAddError(null);
                setCollaboratorEmail(value);
              }}
              errorText={
                !isEmailValid ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Invalid email address.</Trans>
                ) : (
                  getEmailErrorText(addError)
                )
              }
              fullWidth
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
              onBlur={event => {
                const trimmedEmail = event.currentTarget.value.trim();
                setCollaboratorEmail(trimmedEmail);
                setIsEmailValid(emailRegex.test(trimmedEmail));
              }}
              disabled={actionInProgress}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <SelectField
              value={collaboratorLevel}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
              onChange={(e, i, newCollaboratorLevel: string) =>
                // $FlowIgnore - We know this is a valid level.
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'SetStateAction<Level>'.
                setCollaboratorLevel(newCollaboratorLevel)
              }
              fullWidth
              translatableHintText={t`Choose the effect to apply`}
              disabled={actionInProgress}
            >
              {['reader', 'writer'].map(level => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectOption
                  key={level}
                  value={level}
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'Level'.
                  label={getTranslatableLevel(level)}
                />
              ))}
            </SelectField>
          </ColumnStackLayout>
        </Form>
      </Dialog>
    )}
  </>;
};

export default InviteHome;
