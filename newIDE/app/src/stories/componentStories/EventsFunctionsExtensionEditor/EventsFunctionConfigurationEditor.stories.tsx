import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/index.tsx', but '--jsx' is not set.
import EventsFunctionConfigurationEditor from '../../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor';

export default {
  title: 'EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor',
  component: EventsFunctionConfigurationEditor,
  decorators: [paperDecorator],
};

export const DefaultFreeFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsFunctionConfigurationEditor
      project={testProject.project}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      helpPagePath="/events/functions"
      eventsFunction={testProject.testEventsFunction}
      eventsBasedBehavior={null}
      eventsBasedObject={null}
      eventsFunctionsContainer={testProject.testEventsFunctionsExtension}
      onParametersOrGroupsUpdated={action('Parameters or groups were updated')}
    />
  </FixedHeightFlexContainer>
);

export const DefaultBehaviorFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsFunctionConfigurationEditor
      project={testProject.project}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      helpPagePath="/events/functions"
      eventsFunction={testProject.testBehaviorEventsFunction}
      eventsBasedBehavior={testProject.testEventsBasedBehavior}
      eventsBasedObject={null}
      eventsFunctionsContainer={testProject.testEventsBasedBehavior.getEventsFunctions()}
      onParametersOrGroupsUpdated={action('Parameters or groups were updated')}
    />
  </FixedHeightFlexContainer>
);

export const DefaultBehaviorLifecycleFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsFunctionConfigurationEditor
      project={testProject.project}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      helpPagePath="/events/functions"
      eventsFunction={testProject.testBehaviorLifecycleEventsFunction}
      eventsBasedBehavior={testProject.testEventsBasedBehavior}
      eventsBasedObject={null}
      eventsFunctionsContainer={testProject.testEventsBasedBehavior.getEventsFunctions()}
      onParametersOrGroupsUpdated={action('Parameters or groups were updated')}
    />
  </FixedHeightFlexContainer>
);

export const DefaultObjectFunction = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <EventsFunctionConfigurationEditor
      project={testProject.project}
      globalObjectsContainer={testProject.project}
      objectsContainer={testProject.testLayout}
      helpPagePath="/events/functions"
      eventsFunction={testProject.testObjectEventsFunction}
      eventsBasedBehavior={null}
      eventsBasedObject={testProject.testEventsBasedObject}
      eventsFunctionsContainer={testProject.testEventsBasedObject.getEventsFunctions()}
      onParametersOrGroupsUpdated={action('Parameters or groups were updated')}
    />
  </FixedHeightFlexContainer>
);
