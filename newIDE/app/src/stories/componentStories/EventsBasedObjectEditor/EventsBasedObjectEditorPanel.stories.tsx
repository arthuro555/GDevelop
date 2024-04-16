import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../EventsBasedObjectEditor/EventsBasedObjectEditorPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/EventsBasedObjectEditorPanel.tsx', but '--jsx' is not set.
import EventsBasedObjectEditorPanel from '../../../EventsBasedObjectEditor/EventsBasedObjectEditorPanel';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'EventsBasedObjectEditor/EventsBasedObjectEditorDialog',
  component: EventsBasedObjectEditorPanel,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsBasedObjectEditorPanel
      project={testProject.project}
      globalObjectsContainer={testProject.emptyObjectsContainer}
      eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
      eventsBasedObject={testProject.testEventsBasedObject}
      onRenameProperty={action('property rename')}
      onEventsFunctionsAdded={action('functions added')}
    />
  </DragAndDropContextProvider>
);
