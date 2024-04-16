import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../ExportAndShare/Builds/BuildProgressAndActions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildProgressAndActions.tsx', but '--jsx' is not set.
import BuildProgressAndActions from '../../../ExportAndShare/Builds/BuildProgressAndActions';
import {
  erroredCordovaBuild,
  pendingCordovaBuild,
  pendingElectronBuild,
  completeCordovaBuild,
  completeElectronBuild,
  completeWebBuild,
  game1,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Builds/BuildProgressAndActions',
  component: BuildProgressAndActions,
  decorators: [paperDecorator],
};

export const Errored = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions build={erroredCordovaBuild} game={game1} />
);

export const PendingElectronBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={{ ...pendingElectronBuild, updatedAt: Date.now() }}
    game={game1}
  />
);

export const PendingCordovaBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={{ ...pendingCordovaBuild, updatedAt: Date.now() }}
    game={game1}
  />
);

export const SlowPendingCordovaBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={{ ...pendingCordovaBuild, updatedAt: Date.now() - 1000 * 400 }}
    game={game1}
  />
);

export const TimedOutPendingCordovaBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={{ ...pendingCordovaBuild, updatedAt: Date.now() - 1000 * 3600 * 24 }}
    game={game1}
  />
);

export const CompleteCordovaBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions build={completeCordovaBuild} game={game1} />
);

export const CompleteElectronBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions build={completeElectronBuild} game={game1} />
);

export const CompleteUnpublishedWebBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={completeWebBuild}
    game={{ ...game1, publicWebBuildId: 'other-build-id' }}
  />
);

export const CompletePublishedWebBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BuildProgressAndActions
    build={completeWebBuild}
    game={{ ...game1, publicWebBuildId: completeWebBuild.id }}
  />
);
