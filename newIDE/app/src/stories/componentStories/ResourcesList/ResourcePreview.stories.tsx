import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import ResourcesLoader from '../../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../../ResourcesList/ResourcePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/index.tsx', but '--jsx' is not set.
import ResourcePreview from '../../../ResourcesList/ResourcePreview';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';

export default {
  title: 'ResourcesList/ResourcePreview',
  component: ResourcePreview,
  decorators: [paperDecorator],
};

export const Image = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={300}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourcePreview
      project={testProject.project}
      resourceName="icon128.png"
      resourcesLoader={ResourcesLoader}
    />
  </FixedHeightFlexContainer>
);

export const NotExisting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={300}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourcePreview
      project={testProject.project}
      resourceName="resource-that-does-not-exists-in-the-project"
      resourcesLoader={ResourcesLoader}
    />
  </FixedHeightFlexContainer>
);

export const Audio = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={300}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourcePreview
      project={testProject.project}
      resourceName="fake-audio1.mp3"
      resourcesLoader={ResourcesLoader}
    />
  </FixedHeightFlexContainer>
);
