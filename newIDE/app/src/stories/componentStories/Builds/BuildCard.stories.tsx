import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../ExportAndShare/Builds/BuildCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildCard.tsx', but '--jsx' is not set.
import { BuildCard } from '../../../ExportAndShare/Builds/BuildCard';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

import {
  erroredCordovaBuild,
  pendingCordovaBuild,
  pendingElectronBuild,
  completeCordovaBuild,
  completeElectronBuild,
  completeWebBuild,
  game1,
  fakeSilverAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Builds/BuildCard',
  component: BuildCard,
  decorators: [paperDecorator],
};

export const WebBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={completeWebBuild}
    game={{ ...game1, acceptsBuildComments: true }}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);

export const WebCurrentlyOnlineBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={completeWebBuild}
    game={{
      ...game1,
      publicWebBuildId: completeWebBuild.id,
    }}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);

export const ElectronBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={completeElectronBuild}
    game={game1}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);
export const PendingElectronBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={pendingElectronBuild}
    game={game1}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);
export const CordovaBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={completeCordovaBuild}
    game={game1}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);
export const pendingCordovaBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={pendingCordovaBuild}
    game={game1}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);
export const ErroredCordovaBuildCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildCard
    build={erroredCordovaBuild}
    game={game1}
    gameUpdating={false}
    setGameUpdating={action('setGameUpdating')}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
    authenticatedUser={fakeSilverAuthenticatedUser}
  />
);
