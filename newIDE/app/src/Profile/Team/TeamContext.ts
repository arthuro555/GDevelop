import * as React from 'react';
import {
  Team,
  TeamGroup,
  User,
  TeamMembership,
} from '../../Utils/GDevelopServices/User';
import { CloudProjectWithUserAccessInfo } from '../../Utils/GDevelopServices/Project';

export type TeamState = {
  team: Team | null | undefined;
  groups: Array<TeamGroup> | null | undefined;
  members: Array<User> | null | undefined;
  memberships: Array<TeamMembership> | null | undefined;
  onChangeGroupName: (group: TeamGroup, newName: string) => Promise<void>;
  onChangeUserGroup: (user: User, group: TeamGroup) => Promise<void>;
  onListUserProjects: (
    user: User
  ) => Promise<Array<CloudProjectWithUserAccessInfo>>;
  onDeleteGroup: (group: TeamGroup) => Promise<void>;
  onCreateGroup: (attributes: { name: string }) => Promise<void>;
  onRefreshMembers: () => Promise<void>;
};

export const initialTeamState = {
  team: null,
  groups: null,
  members: null,
  memberships: null,
  onChangeGroupName: async () => {},
  onChangeUserGroup: async () => {},
  onListUserProjects: async () => [],
  onDeleteGroup: async () => {},
  onCreateGroup: async () => {},
  onRefreshMembers: async () => {},
} as const;

const TeamContext = React.createContext<TeamState>(initialTeamState);

export default TeamContext;
