import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../Profile/PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from '../../Profile/PublicProfileDialog';

export default {
  title: 'Profile/PublicProfileDialog',
  component: PublicProfileDialog,
  decorators: [paperDecorator],
};

export const WithGameTemplates = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PublicProfileDialog
    userId={'IRIhkkTTl2UHhfjrLTTH5GYwkYu1'}
    onClose={action('onClose')}
    onAssetPackOpen={action('onAssetPackOpen')}
    onGameTemplateOpen={action('onGameTemplateOpen')}
  />
);

export const WithAssetPacks = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PublicProfileDialog
    userId={'30NWiFZ3GWNGb1Rs0PzBTHx7jsT2'}
    onClose={action('onClose')}
    onAssetPackOpen={action('onAssetPackOpen')}
    onGameTemplateOpen={action('onGameTemplateOpen')}
  />
);

export const WithGames = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PublicProfileDialog
    userId={'9MGDlUQAh8QUilno4JPycekjRCJ3'}
    onClose={action('onClose')}
    onAssetPackOpen={action('onAssetPackOpen')}
    onGameTemplateOpen={action('onGameTemplateOpen')}
  />
);
