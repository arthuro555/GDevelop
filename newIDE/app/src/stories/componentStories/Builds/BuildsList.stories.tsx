import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../ExportAndShare/Builds/BuildsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildsList.tsx', but '--jsx' is not set.
import BuildsList from '../../../ExportAndShare/Builds/BuildsList';

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
  title: 'Builds/BuildsList',
  component: BuildsList,
  decorators: [paperDecorator],
};

const buildArray = [
  { ...completeWebBuild, name: 'This is a named build' },
  erroredCordovaBuild,
  pendingCordovaBuild,
  pendingElectronBuild,
  completeCordovaBuild,
  completeElectronBuild,
  completeWebBuild,
];

export const DefaultBuildsList = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildsList
    builds={buildArray}
    authenticatedUser={fakeSilverAuthenticatedUser}
    error={null}
    loadBuilds={action('loadBuilds')}
    game={game1}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
  />
);

export const ErroredBuildsList = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildsList
    builds={null}
    authenticatedUser={fakeSilverAuthenticatedUser}
    error={
      new Error(
        'There was an issue getting the game builds, verify your internet connection or try again later.'
      )
    }
    loadBuilds={action('loadBuilds')}
    game={game1}
    onBuildUpdated={action('onBuildUpdated')}
    onBuildDeleted={action('onBuildDeleted')}
  />
);
