import * as React from 'react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../EventsBasedObjectEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/index.tsx', but '--jsx' is not set.
import EventsBasedObjectEditor from '../../../EventsBasedObjectEditor';

export default {
  title: 'EventsBasedObjectEditor/index',
  component: EventsBasedObjectEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <EventsBasedObjectEditor
    eventsBasedObject={testProject.testEventsBasedObject}
  />
);
