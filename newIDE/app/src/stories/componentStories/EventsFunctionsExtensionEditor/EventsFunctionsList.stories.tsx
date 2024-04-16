import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../AlertDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/AlertDecorator.tsx', but '--jsx' is not set.
import alertDecorator from '../../AlertDecorator';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../EventsFunctionsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsList/index.tsx', but '--jsx' is not set.
import EventsFunctionsListWithErrorBoundary from '../../../EventsFunctionsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'EventsFunctionsExtensionEditor/EventsFunctionsList',
  component: EventsFunctionsListWithErrorBoundary,
  decorators: [alertDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EventsFunctionsListWithErrorBoundary
        project={testProject.project}
        eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
        selectedEventsBasedObject={null}
        selectedEventsBasedBehavior={null}
        selectedEventsFunction={testProject.testEventsFunctionsExtension.getEventsFunctionAt(
          1
        )}
        // Objects
        onSelectEventsBasedObject={action('object selected')}
        onDeleteEventsBasedObject={action('object deleted')}
        onRenameEventsBasedObject={action('rename object')}
        onEventsBasedObjectRenamed={action('object renamed')}
        // Behaviors
        onSelectEventsBasedBehavior={action('behavior selected')}
        onDeleteEventsBasedBehavior={action('behavior deleted')}
        onRenameEventsBasedBehavior={action('rename behavior')}
        onEventsBasedBehaviorRenamed={action('behavior renamed')}
        onEventsBasedBehaviorPasted={action('behavior pasted')}
        // Free functions
        onSelectEventsFunction={action('function selected')}
        onDeleteEventsFunction={action('function deleted')}
// @ts-expect-error - TS7006 - Parameter 'eventsBasedBehavior' implicitly has an 'any' type. | TS7006 - Parameter 'eventsBasedObject' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
        onAddEventsFunction={(eventsBasedBehavior, eventsBasedObject, cb) =>
          cb({ functionType: 0, name: null })
        }
        onEventsFunctionAdded={action('function added')}
        onRenameEventsFunction={action('function renamed')}
        forceUpdateEditor={action('force editor update')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);
