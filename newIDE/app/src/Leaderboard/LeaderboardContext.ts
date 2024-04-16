import * as React from 'react';
import {
  Leaderboard,
  LeaderboardSortOption,
  LeaderboardEntry,
  LeaderboardUpdatePayload,
} from '../Utils/GDevelopServices/Play';

export type LeaderboardState = {
  leaderboards: Array<Leaderboard> | null | undefined,
  currentLeaderboard: Leaderboard | null | undefined,
  displayOnlyBestEntry: boolean,
  browsing: {
    entries: Array<LeaderboardEntry> | null | undefined,
    goToNextPage: () => Promise<void> | null | undefined,
    goToPreviousPage: () => Promise<void> | null | undefined,
    goToFirstPage: () => Promise<void> | null | undefined
  },
  createLeaderboard: (
    arg1: {
      name: string,
      sort: LeaderboardSortOption
    },
  ) => Promise<Leaderboard | null | undefined>,
  listLeaderboards: (
    arg1?: {
      shouldClearBeforeFetching?: boolean
    } | null | undefined,
  ) => Promise<void>,
  selectLeaderboard: (id: string) => void,
  setDisplayOnlyBestEntry: (arg1: boolean) => void,
  updateLeaderboard: (payload: LeaderboardUpdatePayload) => Promise<void>,
  resetLeaderboard: () => Promise<void>,
  deleteLeaderboard: () => Promise<void>,
  deleteLeaderboardEntry: (entryId: string) => Promise<void>,
  fetchLeaderboardEntries: () => Promise<void>
};

export const initialLeaderboardState = {
  leaderboards: null,
  currentLeaderboard: null,
  displayOnlyBestEntry: false,
  browsing: {
    entries: null,
    goToNextPage: null,
    goToPreviousPage: null,
    goToFirstPage: null,
  },
  createLeaderboard: async () => null,
  listLeaderboards: async () => {},
  selectLeaderboard: () => {},
  setDisplayOnlyBestEntry: () => {},
  updateLeaderboard: async () => {},
  resetLeaderboard: async () => {},
  deleteLeaderboard: async () => {},
// @ts-expect-error - TS7006 - Parameter 'entryId' implicitly has an 'any' type.
  deleteLeaderboardEntry: async entryId => {},
  fetchLeaderboardEntries: async () => {},
} as const;

// @ts-expect-error - TS2345 - Argument of type '{ readonly leaderboards: null; readonly currentLeaderboard: null; readonly displayOnlyBestEntry: false; readonly browsing: { readonly entries: null; readonly goToNextPage: null; readonly goToPreviousPage: null; readonly goToFirstPage: null; }; ... 8 more ...; readonly fetchLeaderboardEntries: () => Promise<...>; }' is not assignable to parameter of type 'LeaderboardState'.
const LeaderboardContext = React.createContext<LeaderboardState>(initialLeaderboardState);

export default LeaderboardContext;
