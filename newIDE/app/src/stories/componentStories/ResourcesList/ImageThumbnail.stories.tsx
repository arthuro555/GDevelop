import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourceThumbnail/ImageThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceThumbnail/ImageThumbnail.tsx', but '--jsx' is not set.
import ImageThumbnail from '../../../ResourcesList/ResourceThumbnail/ImageThumbnail';
import ResourcesLoader from '../../../ResourcesLoader';

export default {
  title: 'ResourcesList/ImageThumbnail',
  component: ImageThumbnail,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageThumbnail
    project={testProject.project}
    resourceName="res/icon128.png"
    resourcesLoader={ResourcesLoader}
  />
);

export const Selectable = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ImageThumbnail
    selectable
    project={testProject.project}
    resourceName="res/icon128.png"
    resourcesLoader={ResourcesLoader}
  />
);
