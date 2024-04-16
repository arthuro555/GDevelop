import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../GameDashboard/GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameRegistration } from '../../GameDashboard/GameRegistration';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../GDevelopJsInitializerDecorator';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
} from '../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
import { GDevelopGameApi } from '../../Utils/GDevelopServices/ApiConfigs';

export default {
  title: 'GameDashboard/GameRegistration',
  component: GameRegistration,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};

export const NoProjectLoaded = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration project={null} onGameRegistered={() => {}} />
  </AuthenticatedUserContext.Provider>
);

export const NotLoggedIn = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
    />
  </AuthenticatedUserContext.Provider>
);

export const NotLoggedInWithoutLogin = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
      hideLogin
    />
  </AuthenticatedUserContext.Provider>
);

export const NotAuthorized = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
    />
  </AuthenticatedUserContext.Provider>
);
NotAuthorized.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 403,
      response: {},
      delay: 500,
    },
  ],
};

export const GameNotExisting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
    />
  </AuthenticatedUserContext.Provider>
);
GameNotExisting.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 404,
      response: {},
      delay: 500,
    },
  ],
};

export const ErrorLoadingGame = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
    />
  </AuthenticatedUserContext.Provider>
);
ErrorLoadingGame.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 500,
      response: {},
      delay: 500,
    },
  ],
};

export const RegisteredWithAdditionalActions = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
      suggestAdditionalActions
    />
  </AuthenticatedUserContext.Provider>
);
RegisteredWithAdditionalActions.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 200,
      response: {
        id: 'game-id',
        name: 'My game',
      },
      delay: 500,
    },
  ],
};

export const RegisteredWithLoader = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
    />
  </AuthenticatedUserContext.Provider>
);
RegisteredWithLoader.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 200,
      response: {
        id: 'game-id',
        name: 'My game',
      },
      delay: 500,
    },
  ],
};

export const RegisteredWithoutLoader = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameRegistration
      project={testProject.project}
      onGameRegistered={() => {}}
      hideLoader
    />
  </AuthenticatedUserContext.Provider>
);
RegisteredWithoutLoader.parameters = {
  mockData: [
    {
      url: `${GDevelopGameApi.baseUrl}/game/?userId=indie-user`,
      method: 'GET',
      status: 200,
      response: {
        id: 'game-id',
        name: 'My game',
      },
      delay: 500,
    },
  ],
};
