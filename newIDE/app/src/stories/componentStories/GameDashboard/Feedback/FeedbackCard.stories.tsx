import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../../GameDashboard/Feedbacks/FeedbackCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/FeedbackCard.tsx', but '--jsx' is not set.
import FeedbackCard from '../../../../GameDashboard/Feedbacks/FeedbackCard';

import {
  commentProcessed,
  commentUnprocessed,
  fakeSilverAuthenticatedUser,
  indieUserProfile,
} from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'GameDashboard/Feedback/FeedbackCard',
  component: FeedbackCard,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={commentUnprocessed}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const Processed = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={commentProcessed}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const WithContact = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={{
      ...commentUnprocessed,
      contact: 'Clem#1234',
    }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const WithNamedBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={commentUnprocessed}
    buildProperties={{
      id: 'build-id',
      name: 'My magnificent build',
      isDeleted: false,
    }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const WithAuthenticatedPlayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={{
      ...commentUnprocessed,
      playerId: indieUserProfile.id,
    }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const WithAuthenticatedPlayerAndContact = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={{
      ...commentUnprocessed,
      playerId: indieUserProfile.id,
      contact: 'Clem#1234',
    }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const FeedbackCardWithUnnamedBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={commentUnprocessed}
    buildProperties={{ id: 'build-id', isDeleted: false }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);

export const FeedbackCardWithDeletedBuild = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FeedbackCard
    comment={commentUnprocessed}
    buildProperties={{ id: 'build-id', isDeleted: true }}
    authenticatedUser={fakeSilverAuthenticatedUser}
    onCommentUpdated={action('onCommentUpdated')}
  />
);
