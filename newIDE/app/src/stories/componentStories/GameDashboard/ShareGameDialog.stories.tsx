import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../GameDashboard/ShareGameDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/ShareGameDialog.tsx', but '--jsx' is not set.
import ShareGameDialog from '../../../GameDashboard/ShareGameDialog';
import {
  fakeSilverAuthenticatedUser,
  game1,
} from '../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

export default {
  title: 'GameDashboard/ShareGameDialog',
  component: ShareGameDialog,
  decorators: [paperDecorator],
};

export const DefaultShareGameDialog = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ShareGameDialog game={game1} onClose={action('onClose')} />
  </AuthenticatedUserContext.Provider>
);
