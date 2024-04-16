import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

import List from '@material-ui/core/List';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../../../UI/Grid';

import {
  FileMetadataAndStorageProviderName,
  FileMetadata,
  StorageProvider,
} from '../../../../ProjectsStorage';
// @ts-expect-error - TS6142 - Module '../SectionContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/SectionContainer.tsx', but '--jsx' is not set.
import SectionContainer, { SectionRow } from '../SectionContainer';
// @ts-expect-error - TS6142 - Module '../../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../../UI/CircularProgress';
import useForceUpdate from '../../../../Utils/UseForceUpdate';
import {
  TeamGroup,
  User,
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
} from '../../../../Utils/GDevelopServices/User';
import { CloudProjectWithUserAccessInfo } from '../../../../Utils/GDevelopServices/Project';
import TeamContext from '../../../../Profile/Team/TeamContext';
// @ts-expect-error - TS6142 - Module './TeamGroupNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/TeamSection/TeamGroupNameField.tsx', but '--jsx' is not set.
import TeamGroupNameField from './TeamGroupNameField';
// @ts-expect-error - TS6142 - Module './NewTeamGroupNameField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/TeamSection/NewTeamGroupNameField.tsx', but '--jsx' is not set.
import NewTeamGroupNameField from './NewTeamGroupNameField';
// @ts-expect-error - TS6142 - Module './TeamMemberRow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/TeamSection/TeamMemberRow.tsx', but '--jsx' is not set.
import TeamMemberRow from './TeamMemberRow';
// @ts-expect-error - TS6142 - Module '../../../../UI/DragAndDrop/DropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DropTarget.tsx', but '--jsx' is not set.
import { makeDropTarget } from '../../../../UI/DragAndDrop/DropTarget';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Add'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Add.js' implicitly has an 'any' type.
import Add from '../../../../UI/CustomSvgIcons/Add';
// @ts-expect-error - TS6142 - Module './TeamMemberProjectsView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/TeamSection/TeamMemberProjectsView.tsx', but '--jsx' is not set.
import TeamMemberProjectsView from './TeamMemberProjectsView';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from '../../../../UI/CustomSvgIcons/Refresh';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../../UI/Paper';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
import { groupMembersByGroupId } from './utils';
// @ts-expect-error - TS6142 - Module '../../../../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../../../../UI/ErrorBoundary';
import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../../../UI/Menu/ContextMenu';
import type { ClientCoordinates } from '../../../../Utils/UseLongTouch';
import { MenuItemTemplate } from '../../../../UI/Menu/Menu.flow';

const PADDING = 16;

const styles = {
  list: { padding: 0 },
  lobbyContainer: { padding: PADDING },
  roomsContainer: { paddingRight: PADDING },
  titleAdornmentContainer: { paddingRight: PADDING },
} as const;

const sortMembersByNameOrEmail = (a: User, b: User) => {
  return (a.username || a.email).localeCompare(b.username || b.email);
};

const DropTarget = makeDropTarget('team-groups');

type Props = {
  project: gdProject | null | undefined,
  currentFileMetadata: FileMetadata | null | undefined,
  onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<void>,
  storageProviders: Array<StorageProvider>
};

export type TeamSectionInterface = {
  forceUpdate: () => void
};

const TeamSection = React.forwardRef<Props, TeamSectionInterface>((
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'TeamSectionInterface'. | TS2339 - Property 'onOpenRecentFile' does not exist on type 'TeamSectionInterface'. | TS2339 - Property 'storageProviders' does not exist on type 'TeamSectionInterface'. | TS2339 - Property 'currentFileMetadata' does not exist on type 'TeamSectionInterface'.
  { project, onOpenRecentFile, storageProviders, currentFileMetadata },
  ref
) => {
  const {
    groups,
    members,
    memberships,
    onChangeGroupName,
    onChangeUserGroup,
    onListUserProjects,
    onDeleteGroup,
    onCreateGroup,
    onRefreshMembers,
  } = React.useContext(TeamContext);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const forceUpdate = useForceUpdate();
  const { isMobile } = useResponsiveWindowSize();
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);

// @ts-expect-error - TS2739 - Type '{ forceUpdate: () => void; }' is missing the following properties from type 'Props': project, currentFileMetadata, onOpenRecentFile, storageProviders
  React.useImperativeHandle(ref, () => ({
    forceUpdate,
  }));

  const draggedUserRef = React.useRef<User | null | undefined>(null);
  const [selectedUser, setSelectedUser] = React.useState<User | null | undefined>(null);
  const [
    selectedUserProjects,
    setSelectedUserProjects,
  ] = React.useState<Array<CloudProjectWithUserAccessInfo> | null | undefined>(null);
  const [
    isLoadingUserProjects,
    setIsLoadingUserProjects,
  ] = React.useState<boolean>(false);
  const [
    showNewGroupNameField,
    setShowNewGroupNameField,
  ] = React.useState<boolean>(false);
  const [isLoadingMembers, setIsLoadingMembers] = React.useState<boolean>(false);
  const [movingUsers, setMovingUsers] = React.useState<{
    groupId: string,
    users: User[]
  } | null | undefined>(null);

  const setDraggedUser = React.useCallback((user: User) => {
    draggedUserRef.current = user;
  }, []);

  const listUserProjects = React.useCallback(
    async (user: User) => {
      setIsLoadingUserProjects(true);
      try {
        setSelectedUser(user);
        const userProjects = await onListUserProjects(user);
        setSelectedUserProjects(userProjects);
      } catch (error: any) {
        console.error(error);
      } finally {
        setIsLoadingUserProjects(false);
      }
    },
    [onListUserProjects]
  );

  const onRefreshTeamMembers = React.useCallback(
    async () => {
      setIsLoadingMembers(true);
      try {
        await onRefreshMembers();
      } catch (error: any) {
        console.error(
          'An error occurred when refreshing team members:',
          error
        );
      } finally {
        setIsLoadingMembers(false);
      }
    },
    [onRefreshMembers]
  );

  const changeUserGroup = React.useCallback(
    async (user: User, group: TeamGroup) => {
      try {
        setMovingUsers({
          groupId: group.id,
          users: [user],
        });
        await onChangeUserGroup(user, group);
      } catch (error: any) {
        console.error(
          `An error occurred when changing user ${user.email} to group ${
            group.name
          }: `,
          error
        );
      } finally {
        setMovingUsers(null);
      }
    },
    [onChangeUserGroup]
  );

  const buildContextMenu = (i18n: I18nType, member: User): Array<MenuItemTemplate> => {
    return [
      {
        label: i18n._(t`See projects`),
// @ts-expect-error - TS2322 - Type '() => Promise<void>' is not assignable to type '() => (() => Promise<void>) | null | undefined'.
        click: () => listUserProjects(member),
      },
    ];
  };

  const openContextMenu = React.useCallback(
    (event: ClientCoordinates, member: User) => {
      if (contextMenu.current) {
        contextMenu.current.open(event.clientX, event.clientY, { member });
      }
    },
    []
  );

  const membersByGroupId = groupMembersByGroupId({
    groups,
    members,
    memberships,
  });
  if (!membersByGroupId) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SectionContainer title={<Trans>Team</Trans>}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin expand alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CircularProgress />
              </Column>
            </Line>
          </SectionRow>
        </SectionContainer>
      </>
    );
  }

  if (selectedUser) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <TeamMemberProjectsView
        user={selectedUser}
        currentFileMetadata={currentFileMetadata}
        projects={selectedUserProjects}
        storageProviders={storageProviders}
        onOpenRecentFile={onOpenRecentFile}
        onClickBack={() => {
          setSelectedUser(null);
          setSelectedUserProjects(null);
        }}
        onRefreshProjects={listUserProjects}
        isLoadingProjects={isLoadingUserProjects}
      />
    );
  }

  const membersNotInAGroup = membersByGroupId['NONE'];
  const membersNotInAGroupToDisplay =
    membersNotInAGroup && !!movingUsers
      ? {
          group: membersNotInAGroup.group,
          members: membersNotInAGroup.members.filter(
            member => !movingUsers.users.includes(member)
          ),
        }
      : membersNotInAGroup;
  const groupsAndMembers = Object.keys(membersByGroupId)
    .map(id => (id === 'NONE' ? null : membersByGroupId[id]))
    .filter(Boolean)
    .sort((a, b) => a.group.name.localeCompare(b.group.name));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SectionContainer
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Classrooms</Trans>}
      titleAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div style={styles.titleAdornmentContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
            primary
            disabled={isLoadingMembers}
            label={
              isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Refresh</Trans>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Refresh dashboard</Trans>
              )
            }
            onClick={onRefreshTeamMembers}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<Refresh fontSize="small" />}
          />
        </div>
      }
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SectionRow>
        {membersNotInAGroupToDisplay && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Paper background="medium" style={styles.lobbyContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="section-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Lobby</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <List style={styles.list}>
                  {membersNotInAGroupToDisplay.members
                    .sort(sortMembersByNameOrEmail)
                    .map(member => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <TeamMemberRow
                        isTemporary={false}
                        key={member.id}
                        onOpenContextMenu={openContextMenu}
                        member={member}
                        onListUserProjects={() => listUserProjects(member)}
                        onDrag={setDraggedUser}
                      />
                    ))}
                </List>
              </ColumnStackLayout>
            </Line>
          </Paper>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.roomsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text size="section-title" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Rooms</Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
              primary
              label={
                isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Create</Trans>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Create a new room</Trans>
                )
              }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              icon={<Add fontSize="small" />}
              onClick={() => setShowNewGroupNameField(true)}
            />
          </Line>
          {showNewGroupNameField && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <NewTeamGroupNameField
                onValidateGroupName={onCreateGroup}
                onDismiss={() => setShowNewGroupNameField(false)}
              />
            </Line>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
            {groupsAndMembers.length > 0 ? (
              groupsAndMembers.map(({ group, members }) => {
                const membersToDisplay = [...members];
                if (!!movingUsers && movingUsers.groupId === group.id) {
                  movingUsers.users.forEach(movingUser => {
                    if (
                      !members.some(member => member.id === movingUser.id)
                    ) {
                      membersToDisplay.push(movingUser);
                    }
                  });
                }

                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DropTarget
                    canDrop={() => true}
                    drop={() => {
                      const droppedUser = draggedUserRef.current;
                      if (!droppedUser) return;
                      changeUserGroup(droppedUser, group);
                      draggedUserRef.current = null;
                    }}
                    key={group.id}
                  >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDropTarget' implicitly has an 'any' type. | TS7031 - Binding element 'isOver' implicitly has an 'any' type. */}
                    {({ connectDropTarget, isOver }) =>
                      connectDropTarget(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <div
                          style={
                            isOver
                              ? {
                                  backgroundColor:
                                    gdevelopTheme.paper.backgroundColor.light,
                                  outline: `2px dashed ${
                                    gdevelopTheme.dropIndicator.canDrop
                                  }`,
                                }
                              : undefined
                          }
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <TeamGroupNameField
                                  group={group}
                                  onFinishEditingGroupName={onChangeGroupName}
                                  allowDelete={membersToDisplay.length === 0}
                                  onDeleteGroup={onDeleteGroup}
                                />
                              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <List style={styles.list}>
                                {membersToDisplay
                                  .sort(sortMembersByNameOrEmail)
                                  .map(member => {
                                    const isTemporary =
                                      !!movingUsers &&
                                      movingUsers.users.some(
                                        user => user.id === member.id
                                      );
                                    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <TeamMemberRow
                                        isTemporary={isTemporary}
                                        key={
                                          member.id +
                                          (isTemporary ? '_temp' : '')
                                        }
                                        member={member}
                                        onOpenContextMenu={openContextMenu}
                                        onListUserProjects={() =>
                                          listUserProjects(member)
                                        }
                                        onDrag={setDraggedUser}
                                      />
                                    );
                                  })}
                              </List>
                            </Column>
                          </Line>
                        </div>
                      )
                    }
                  </DropTarget>
                );
              })
            ) : !showNewGroupNameField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Create a room and drag and drop members in it.</Trans>
              </EmptyMessage>
            ) : null}
          </ColumnStackLayout>
        </div>
      </SectionRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ContextMenu
        ref={contextMenu}
// @ts-expect-error - TS7006 - Parameter '_i18n' implicitly has an 'any' type. | TS7031 - Binding element 'member' implicitly has an 'any' type.
        buildMenuTemplate={(_i18n, { member }) =>
          buildContextMenu(_i18n, member)
        }
      />
    </SectionContainer>
  );
});

const TeamSectionWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Team section</Trans>}
    scope="start-page-team"
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2741 - Property 'forceUpdate' is missing in type '{ project: any; currentFileMetadata: FileMetadata | null | undefined; onOpenRecentFile: (file: FileMetadataAndStorageProviderName) => Promise<...>; storageProviders: StorageProvider[]; }' but required in type 'TeamSectionInterface'. */}
    <TeamSection {...props} />
  </ErrorBoundary>
);

export default TeamSectionWithErrorBoundary;
