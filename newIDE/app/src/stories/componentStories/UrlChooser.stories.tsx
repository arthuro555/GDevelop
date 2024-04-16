import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../ResourcesList/BrowserResourceSources' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/BrowserResourceSources.tsx', but '--jsx' is not set.
import { UrlChooser } from '../../ResourcesList/BrowserResourceSources';

const gd: libGDevelop = global.gd;

export default {
  title: 'BrowserResourceSources/UrlChooser',
  component: UrlChooser,
  decorators: [paperDecorator],
};
export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <UrlChooser
    createNewResource={() => new gd.ImageResource()}
    onChooseResources={action('onChooseResources')}
    options={{
      multiSelection: false,
      resourceKind: 'image',
      initialSourceName: 'unused',
    }}
  />
);

export const Multiselection = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <UrlChooser
    createNewResource={() => new gd.ImageResource()}
    onChooseResources={action('onChooseResources')}
    options={{
      multiSelection: true,
      resourceKind: 'image',
      initialSourceName: 'unused',
    }}
  />
);
