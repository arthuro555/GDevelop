import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

import { action } from '@storybook/addon-actions';
import {
  fakeSilverAuthenticatedUser,
  game1,
  game2,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/GamesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GamesList.tsx', but '--jsx' is not set.
import GamesList from '../../../GameDashboard/GamesList';

export default {
  title: 'GameDashboard/GamesList',
  component: GamesList,
  decorators: [paperDecorator],
};

export const WithoutAProjectOpened = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <GamesList
        project={null}
        games={[game1, game2]}
        onRefreshGames={action('onRefreshGames')}
        onOpenGame={action('onOpenGame')}
      />
    </AuthenticatedUserContext.Provider>
  );
};
