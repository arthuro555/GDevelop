import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel.tsx', but '--jsx' is not set.
import EventsBasedBehaviorEditorPanel from '../../../EventsBasedBehaviorEditor/EventsBasedBehaviorEditorPanel';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'EventsBasedBehaviorEditor/EventsBasedBehaviorEditorDialog',
  component: EventsBasedBehaviorEditorPanel,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsBasedBehaviorEditorPanel
      project={testProject.project}
      eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
      eventsBasedBehavior={testProject.testEventsBasedBehavior}
      onRenameProperty={action('property rename')}
      onRenameSharedProperty={action('shared property rename')}
      onEventsFunctionsAdded={action('functions added')}
    />
  </DragAndDropContextProvider>
);

export const WithoutFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsBasedBehaviorEditorPanel
      project={testProject.project}
      eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
      eventsBasedBehavior={testProject.testEmptyEventsBasedBehavior}
      onRenameProperty={action('property rename')}
      onRenameSharedProperty={action('shared property rename')}
      onEventsFunctionsAdded={action('functions added')}
    />
  </DragAndDropContextProvider>
);
