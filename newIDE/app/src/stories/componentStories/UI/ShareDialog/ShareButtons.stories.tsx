import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../UI/ShareDialog/SocialShareButtons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/SocialShareButtons.tsx', but '--jsx' is not set.
import SocialShareButtons from '../../../../UI/ShareDialog/SocialShareButtons';

export default {
  title: 'UI Building Blocks/ShareDialog/SocialShareButtons',
  component: SocialShareButtons,
  decorators: [paperDecorator],
};

export const DefaultSocialShareButtons = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SocialShareButtons url={'https://gd.games/username/game-slug'} />
);
