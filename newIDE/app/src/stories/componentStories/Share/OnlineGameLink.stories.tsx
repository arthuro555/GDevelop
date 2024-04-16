import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../ExportAndShare/GenericExporters/OnlineWebExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/index.tsx', but '--jsx' is not set.
import { OnlineGameLink } from '../../../ExportAndShare/GenericExporters/OnlineWebExport';
import {
  completeWebBuild,
  fakeGame,
  fakeSilverAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import { GDevelopGameApi } from '../../../Utils/GDevelopServices/ApiConfigs';

export default {
  title: 'Share/OnlineGameLink',
  component: OnlineGameLink,
  decorators: [paperDecorator],
  parameters: {
    mockData: [
      {
        url: `${
          GDevelopGameApi.baseUrl
        }/game-slug?userId=indie-user&gameId=${completeWebBuild.gameId || ''}`,
        method: 'GET',
        status: 200,
        response: [
          {
            username: 'sonic-fan',
            gameSlug: 'super-slug',
            createdAt: 1606065498,
          },
        ],
        delay: 500,
      },
    ],
  },
};

export const Export = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'export'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const SavingProject = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'export'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const ResourcesDownload = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'resources-download'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const Compress = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'compress'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const Upload = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'upload'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const WaitingForBuild = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'waiting-for-build'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const Build = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'build'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const DoneWithPublicBuild = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={{ ...completeWebBuild, id: fakeGame.publicWebBuildId || '' }}
        errored={false}
        exportStep={'done'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
export const DoneWithPrivateBuild = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        game={fakeGame}
        build={completeWebBuild}
        errored={false}
        exportStep={'done'}
        onSaveProject={action('onSaveProject')}
        onGameUpdated={action('onGameUpdated')}
        isSavingProject={false}
        project={testProject.project}
      />
    </AuthenticatedUserContext.Provider>
  );
};
