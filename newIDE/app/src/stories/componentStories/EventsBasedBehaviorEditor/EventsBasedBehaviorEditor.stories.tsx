import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../EventsBasedBehaviorEditor/' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedBehaviorEditor/index.tsx', but '--jsx' is not set.
import EventsBasedBehaviorEditor from '../../../EventsBasedBehaviorEditor/';

export default {
  title: 'EventsBasedBehaviorEditor/index',
  component: EventsBasedBehaviorEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EventsBasedBehaviorEditor
    project={testProject.project}
    eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
    eventsBasedBehavior={testProject.testEventsBasedBehavior}
  />
);

export const WithoutFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EventsBasedBehaviorEditor
    project={testProject.project}
    eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
    eventsBasedBehavior={testProject.testEmptyEventsBasedBehavior}
  />
);
