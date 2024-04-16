import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import axios from 'axios';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Discord'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Discord.js' implicitly has an 'any' type.
import Discord from '../../UI/CustomSvgIcons/Discord';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Facebook'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Facebook.js' implicitly has an 'any' type.
import Facebook from '../../UI/CustomSvgIcons/Facebook';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Instagram'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Instagram.js' implicitly has an 'any' type.
import Instagram from '../../UI/CustomSvgIcons/Instagram';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Planet'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Planet.js' implicitly has an 'any' type.
import Planet from '../../UI/CustomSvgIcons/Planet';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Reddit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Reddit.js' implicitly has an 'any' type.
import Reddit from '../../UI/CustomSvgIcons/Reddit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Snapchat'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Snapchat.js' implicitly has an 'any' type.
import Snapchat from '../../UI/CustomSvgIcons/Snapchat';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/TikTok'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/TikTok.js' implicitly has an 'any' type.
import TikTok from '../../UI/CustomSvgIcons/TikTok';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Twitter'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Twitter.js' implicitly has an 'any' type.
import Twitter from '../../UI/CustomSvgIcons/Twitter';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/YouTube'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/YouTube.js' implicitly has an 'any' type.
import YouTube from '../../UI/CustomSvgIcons/YouTube';
import { GDevelopUserApi } from './ApiConfigs';
import { MessageByLocale } from '../i18n/MessageByLocale';

import { Badge } from './Badge';
import { Profile } from './Authentication';

export type CommunityLinkType = 'personalWebsiteLink' | 'personalWebsite2Link' | 'twitterUsername' | 'facebookUsername' | 'youtubeUsername' | 'tiktokUsername' | 'instagramUsername' | 'redditUsername' | 'snapchatUsername' | 'discordServerLink';

export type CommunityLinks = {
  personalWebsiteLink?: string,
  personalWebsite2Link?: string,
  twitterUsername?: string,
  facebookUsername?: string,
  youtubeUsername?: string,
  tiktokUsername?: string,
  instagramUsername?: string,
  redditUsername?: string,
  snapchatUsername?: string,
  discordServerLink?: string
};

export type UserSurvey = {
  creationGoal?: Array<'learningOrTeaching' | 'building'>,
  creationGoalInput?: string,
  learningOrTeaching?: Array<'learning' | 'teaching'>,
  learningHow?: Array<'alone' | 'withTeacher'>,
  projectDescription?: string,
  kindOfProjects?: Array<'gameToPublish' | 'interactiveService' | 'other' | 'videoGame' | 'interactiveContent' | 'appOrTool' | 'seriousGame'>,
  workingTeam?: Array<'alone' | 'onePlus' | 'team'>,
  painPoints?: Array<'lackGraphics' | 'lackSound' | 'lackMarketing' | 'inAppMonetization' | 'externalIntegration'>,
  painPointsInput?: string,
  targetDate?: Array<'1MonthOrLess' | '1To2Months' | '3To5Months' | '6MonthsPlus' | '1Year' | 'noDeadline'>,
  gameDevelopmentExperience?: Array<'none' | 'someNoCode' | 'someCode'>,
  targetPlatform?: Array<'steamEpic' | 'itchNewgrounds' | 'pokiCrazyGames' | 'androidApp' | 'iosApp' | 'client' | 'personal' | 'console' | 'other'>
};

/**
 * Official tutorial registered in the tutorial database.
 * Can be a youtube video, wiki page or blog article.
 */
export type GDevelopTutorialRecommendation = {
  type: 'gdevelop-tutorial',
  /**
   * Id of the tutorial in the database.
   */
  id: string
};
export type PlanRecommendation = {
  type: 'plan',
  id: 'silver' | 'gold' | 'startup' | 'business' | 'education'
};
export type GuidedLessonsRecommendation = {
  type: 'guided-lessons',
  lessonsIds?: string[]
};
export type Recommendation = GDevelopTutorialRecommendation | GuidedLessonsRecommendation | PlanRecommendation;

export type UserPublicProfile = {
  id: string,
  username: string | null | undefined,
  description: string | null | undefined,
  donateLink: string | null | undefined,
  discordUsername: string | null | undefined,
  communityLinks: CommunityLinks,
  iconUrl: string
};

export type UserPublicProfileByIds = {
  [key: string]: UserPublicProfile
};

export type UsernameAvailability = {
  username: string,
  isAvailable: boolean
};

export type User = Profile;

export type Team = {
  id: string,
  createdAt: number,
  seats: number
};
export type TeamGroup = {
  id: string,
  name: string
};
export type TeamMembership = {
  userId: string,
  teamId: string,
  createdAt: number,
  groups?: Array<string> | null | undefined
};

export type UserLeaderboardEntry = {
  count: number | null,
  userPublicProfile: UserPublicProfile | null
};

export type UserLeaderboard = {
  name: string,
  displayNameByLocale: MessageByLocale,
  topUserCommentQualityRatings: UserLeaderboardEntry[]
};

export const client = axios.create({
  baseURL: GDevelopUserApi.baseUrl,
});

export const searchCreatorPublicProfilesByUsername = (searchString: string): Promise<Array<UserPublicProfile>> => {
  return client
    .get(`/user-public-profile/search`, {
      params: {
        username: searchString,
        type: 'creator',
      },
    })
    .then(response => response.data);
};

export const getUserBadges = async (id: string): Promise<Array<Badge>> => {
  const response = await client.get(`/user/${id}/badge`);
  const badges = response.data;

  if (!Array.isArray(badges)) {
    throw new Error('Invalid response from the badges API');
  }

  return badges;
};

export const listUserTeams = async (getAuthorizationHeader: () => Promise<string>, userId: string): Promise<Array<Team>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.get(`/team`, {
    headers: { Authorization: authorizationHeader },
    params: { userId, role: 'admin' },
  });
  return response.data;
};

export const listTeamMembers = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
): Promise<Array<User>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.get(`/user`, {
    headers: { Authorization: authorizationHeader },
    params: { userId, teamId, memberType: 'basic' },
  });
  return response.data;
};

export const listTeamMemberships = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
): Promise<Array<TeamMembership>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.get(`/team-membership`, {
    headers: { Authorization: authorizationHeader },
    params: { userId, teamId },
  });
  return response.data;
};

export const listTeamGroups = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
): Promise<Array<TeamGroup>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.get(`/team/${teamId}/group`, {
    headers: { Authorization: authorizationHeader },
    params: { userId },
  });
  return response.data;
};

export const updateGroup = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
  groupId: string,
  attributes: {
    name: string
  },
): Promise<TeamGroup> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.patch(
    `/team/${teamId}/group/${groupId}`,
    attributes,
    {
      headers: { Authorization: authorizationHeader },
      params: { userId },
    }
  );
  return response.data;
};

export const createGroup = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
  attributes: {
    name: string
  },
): Promise<TeamGroup> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.post(`/team/${teamId}/group`, attributes, {
    headers: { Authorization: authorizationHeader },
    params: { userId },
  });
  return response.data;
};

export const deleteGroup = async (
  getAuthorizationHeader: () => Promise<string>,
  userId: string,
  teamId: string,
  groupId: string,
): Promise<Array<TeamGroup>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.delete(`/team/${teamId}/group/${groupId}`, {
    headers: { Authorization: authorizationHeader },
    params: { userId },
  });
  return response.data;
};

export const listRecommendations = async (
  getAuthorizationHeader: () => Promise<string>,
  {
    userId,
  }: {
    userId: string
  },
): Promise<Array<Recommendation>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.get(`/recommendation`, {
    headers: { Authorization: authorizationHeader },
    params: { userId },
  });
  return response.data;
};

export const listDefaultRecommendations = async (): Promise<Array<Recommendation>> => {
  const response = await client.get(`/recommendation`);
  return response.data;
};

export const updateUserGroup = async (
  getAuthorizationHeader: () => Promise<string>,
  adminUserId: string,
  teamId: string,
  groupId: string,
  userId: string,
): Promise<Array<TeamGroup>> => {
  const authorizationHeader = await getAuthorizationHeader();
  const response = await client.post(
    `/team/${teamId}/action/update-members`,
    [{ groupId, userId }],
    {
      headers: { Authorization: authorizationHeader },
      params: { userId: adminUserId },
    }
  );
  return response.data;
};

export const getUserPublicProfilesByIds = async (ids: Array<string>): Promise<UserPublicProfileByIds> => {
  // Ensure we don't send an empty list of ids, as the request would fail.
  if (ids.length === 0) return {};
  const response = await client.get(`/user-public-profile`, {
    params: {
      id: ids.join(','),
    },
  });
  return response.data;
};

export const getUserPublicProfile = async (id: string): Promise<UserPublicProfile> => {
  const response = await client.get(`/user-public-profile/${id}`);

  return response.data;
};

export const getUsernameAvailability = async (username: string): Promise<UsernameAvailability> => {
  const response = await client.get(`/username-availability/${username}`);
  return response.data;
};

export const syncDiscordUsername = async (getAuthorizationHeader: () => Promise<string>, userId: string): Promise<void> => {
  const authorizationHeader = await getAuthorizationHeader();
  await client.post(
    `/user/${userId}/action/update-discord-role`,
    {},
    {
      headers: { Authorization: authorizationHeader },
      params: { userId },
    }
  );
};

export const getUserCommentQualityRatingsLeaderboards = async (): Promise<Array<UserLeaderboard>> => {
  const response = await client.get(
    '/user-comment-quality-ratings-leaderboard?leaderboardRegionName=global'
  );

  if (!Array.isArray(response.data)) {
    throw new Error('Invalid response from the user leaderboard API');
  }

  return response.data;
};

const simpleUrlRegex = /^https:\/\/[^ ]+$/;
const profileLinkFormattingErrorMessage = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>Please enter a valid URL, starting with https://</Trans>
);
const simpleDiscordUrlRegex = /^https:\/\/discord[^ ]+$/;
const discordServerLinkFormattingErrorMessage = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>Please enter a valid URL, starting with https://discord</Trans>
);
const tiktokUsernameEmptyOrNoAtRegex = /^$|^(?!@)/;
const tiktokUsernameFormattingErrorMessage = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Trans>You don't need to add the @ in your username</Trans>
);

export const donateLinkConfig = {
  getFormattingError: (value: string) =>
    value && !simpleUrlRegex.test(value)
      ? profileLinkFormattingErrorMessage
      : undefined,
  maxLength: 150,
} as const;

export const discordUsernameConfig = {
  maxLength: 32,
} as const;

export const communityLinksConfig = {
  personalWebsiteLink: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Planet />,
    getFormattingError: (value: string) =>
      value && !simpleUrlRegex.test(value)
        ? profileLinkFormattingErrorMessage
        : undefined,
    maxLength: 150,
  },
  personalWebsite2Link: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Planet />,
    getFormattingError: (value: string) =>
      value && !simpleUrlRegex.test(value)
        ? profileLinkFormattingErrorMessage
        : undefined,
    maxLength: 150,
  },
  twitterUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Twitter />,
    prefix: 'https://twitter.com/',
    maxLength: 15,
  },
  facebookUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Facebook />,
    prefix: 'https://facebook.com/',
    maxLength: 50,
  },
  youtubeUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <YouTube />,
    prefix: 'https://youtube.com/',
    maxLength: 100,
  },
  tiktokUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <TikTok />,
    prefix: 'https://tiktok.com/@',
    getFormattingError: (value: string) =>
      !tiktokUsernameEmptyOrNoAtRegex.test(value)
        ? tiktokUsernameFormattingErrorMessage
        : undefined,
    maxLength: 30,
  },
  instagramUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Instagram />,
    prefix: 'https://instagram.com/',
    maxLength: 30,
  },
  redditUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Reddit />,
    prefix: 'https://reddit.com/user/',
    maxLength: 20,
  },
  snapchatUsername: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Snapchat />,
    prefix: 'https://snapchat.com/add/',
    maxLength: 15,
  },
  discordServerLink: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Discord />,
    getFormattingError: (value: string) =>
      value && !simpleDiscordUrlRegex.test(value)
        ? discordServerLinkFormattingErrorMessage
        : undefined,
    maxLength: 150,
  },
} as const;
