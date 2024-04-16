import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/User/UserPublicProfileChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/User/UserPublicProfileChip.tsx', but '--jsx' is not set.
import { UserPublicProfileChip as UserPublicProfileChipComponent } from '../../../UI/User/UserPublicProfileChip';

export default {
  title: 'User chips/UserPublicProfileChip',
  component: UserPublicProfileChipComponent,
  decorators: [paperDecorator],
};

export const UserPublicProfileChip = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <UserPublicProfileChipComponent
    user={{
      id: '123',
      username: 'username',
      description: 'something',
      donateLink: 'https://myurl.com',
      discordUsername: 'username#1234',
      communityLinks: {},
      iconUrl: 'https://resources.gdevelop-app.com/avatars/4ian.png',
    }}
  />
);
