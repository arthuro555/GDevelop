import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../EventsSheet/ParameterFields/LeaderboardIdField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/LeaderboardIdField.tsx', but '--jsx' is not set.
import LeaderboardIdField from '../../../EventsSheet/ParameterFields/LeaderboardIdField';
import ValueStateHolder from '../../ValueStateHolder';

import LeaderboardContext from '../../../Leaderboard/LeaderboardContext';
import { Leaderboard } from '../../../Utils/GDevelopServices/Play';

export default {
  title: 'ParameterFields/LeaderboardIdField',
  component: LeaderboardIdField,
  decorators: [paperDecorator],
};

const mockedLeaderboards = Array(5)
  .fill(0)
  .map((_, index) => ({
    id: `489165zad49-a8ad6-4a984-dcz8da-hjqn983qh${index}`,
    name: `Level ${index + 1}`,
    sort: 'DESC',
    gameId: 'fakeGameId',
    startDatetime: '2021-11-18T10:19:50.417Z',
    playerUnicityDisplayChoice: index % 2 === 0 ? 'PREFER_UNIQUE' : 'FREE',
    visibility: index % 3 === 0 ? 'HIDDEN' : 'PUBLIC',
  }));
const mockedEntries = Array(8)
  .fill(0)
  .map((_, index) => ({
    leaderboardId: '489165zad49-a8ad6-4a984-dcz8da-hjqn983qh0',
    id: `fze8f4ze9f489ze4f9zef4${index}`,
    playerName: `player${index % 2}`,
    score: Math.round(Math.random() * 20 + 150),
    createdAt: new Date(
      1647964688856 + Math.random() * -5000000000
    ).toISOString(),
  }))
  .sort((a, b) => a.score - b.score);
const leaderboardsByIds = mockedLeaderboards.reduce<Record<string, any>>((acc, leaderboard) => {
  acc[leaderboard.id] = leaderboard;
  return acc;
}, {});

const MockLeaderboardProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [
    currentLeaderboard,
    setCurrentLeaderboard,
// @ts-expect-error - TS2345 - Argument of type '{ id: string; name: string; sort: string; gameId: string; startDatetime: string; playerUnicityDisplayChoice: string; visibility: string; }' is not assignable to parameter of type 'Leaderboard | (() => Leaderboard)'.
  ] = React.useState<Leaderboard>(mockedLeaderboards[3]);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LeaderboardContext.Provider
      value={{
// @ts-expect-error - TS2322 - Type '{ id: string; name: string; sort: string; gameId: string; startDatetime: string; playerUnicityDisplayChoice: string; visibility: string; }[]' is not assignable to type 'Leaderboard[]'.
        leaderboards: mockedLeaderboards,
        currentLeaderboard,
        displayOnlyBestEntry:
          currentLeaderboard.playerUnicityDisplayChoice === 'PREFER_UNIQUE',
        browsing: {
          entries: mockedEntries,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '() => Promise<void> | null | undefined'.
          goToNextPage: null,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '() => Promise<void> | null | undefined'.
          goToPreviousPage: null,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '() => Promise<void> | null | undefined'.
          goToFirstPage: null,
        },
        setDisplayOnlyBestEntry: action('setDisplayOnlyBestEntry'),
// @ts-expect-error - TS2739 - Type 'HandlerFunction' is missing the following properties from type 'Promise<Leaderboard | null | undefined>': then, catch, finally, [Symbol.toStringTag]
        createLeaderboard: () => action('createLeaderboard'),
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(arg1?: { shouldClearBeforeFetching?: boolean | undefined; } | null | undefined) => Promise<void>'.
        listLeaderboards: action('listLeaderboards'),
        selectLeaderboard: leaderboardId => {
          setCurrentLeaderboard(leaderboardsByIds[leaderboardId]);
        },
// @ts-expect-error - TS2739 - Type 'HandlerFunction' is missing the following properties from type 'Promise<void>': then, catch, finally, [Symbol.toStringTag]
        updateLeaderboard: () => action('updateLeaderboard'),
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type 'Promise<void>'.
        resetLeaderboard: () => action('resetLeaderboard'),
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type 'Promise<void>'.
        deleteLeaderboard: () => action('deleteLeaderboard'),
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type 'Promise<void>'.
        deleteLeaderboardEntry: () => action('deleteLeaderboardEntry'),
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type 'Promise<void>'.
        fetchLeaderboardEntries: () => action('fetchLeaderboardEntries'),
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MockLeaderboardProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ValueStateHolder
      initialValue={''}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeaderboardIdField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  </MockLeaderboardProvider>
);

export const InitialValidLeaderboard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MockLeaderboardProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ValueStateHolder
      initialValue={'"489165zad49-a8ad6-4a984-dcz8da-hjqn983qh2"'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeaderboardIdField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  </MockLeaderboardProvider>
);

export const InitialInvalidLeaderboard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MockLeaderboardProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ValueStateHolder
      initialValue={'5032ff25-6cd7-4adb-978d-8d2e532b16cf'}
      render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LeaderboardIdField
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          value={value}
          onChange={onChange}
        />
      )}
    />
  </MockLeaderboardProvider>
);
