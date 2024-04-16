import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/GameCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameCard.tsx', but '--jsx' is not set.
import { GameCard } from '../../../GameDashboard/GameCard';
import {
  fakeSilverAuthenticatedUser,
  game1,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

export default {
  title: 'GameDashboard/GameCard',
  component: GameCard,
  decorators: [paperDecorator],
};

export const DefaultGameCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameCard
      game={game1}
      isCurrentGame={false}
      onOpenGameManager={action('onOpenGameManager')}
      onUpdateGame={action('onUpdateGame')}
    />
  </AuthenticatedUserContext.Provider>
);

export const DefaultCurrentlyEditedCard = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <GameCard
      game={game1}
      isCurrentGame={true}
      onOpenGameManager={action('onOpenGameManager')}
      onUpdateGame={action('onUpdateGame')}
    />
  </AuthenticatedUserContext.Provider>
);
