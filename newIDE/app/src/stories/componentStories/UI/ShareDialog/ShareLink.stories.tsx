import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../UI/ShareDialog/ShareLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ShareDialog/ShareLink.tsx', but '--jsx' is not set.
import ShareLink from '../../../../UI/ShareDialog/ShareLink';

export default {
  title: 'UI Building Blocks/ShareDialog/ShareLink',
  component: ShareLink,
  decorators: [paperDecorator],
};

export const DefaultShareLink = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ShareLink url={'https://gd.games/username/game-slug'} />
);
