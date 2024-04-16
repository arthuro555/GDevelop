import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../EventsSheet' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/index.tsx', but '--jsx' is not set.
import EventsSheet from '../../../EventsSheet';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'EventsSheet/EventsSheet',
  component: EventsSheet,
};

export const DefaultNoScope = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EventsSheet
        project={testProject.project}
        scope={{ project: testProject.project, layout: testProject.testLayout }}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.testLayout}
        events={testProject.testLayout.getEvents()}
        onOpenExternalEvents={action('Open external events')}
        resourceManagementProps={fakeResourceManagementProps}
        onOpenLayout={action('open layout')}
        onOpenSettings={action('open settings')}
        setToolbar={() => {}}
        openInstructionOrExpression={action('open instruction or expression')}
        onCreateEventsFunction={action('create events function')}
        onBeginCreateEventsFunction={action('begin create events function')}
        isActive={true}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const EmptyNoScope = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EventsSheet
        project={testProject.project}
        scope={{
          project: testProject.project,
          layout: testProject.emptyLayout,
        }}
        globalObjectsContainer={testProject.project}
        objectsContainer={testProject.emptyLayout}
        events={testProject.emptyLayout.getEvents()}
        onOpenExternalEvents={action('Open external events')}
        resourceManagementProps={fakeResourceManagementProps}
        onOpenLayout={action('open layout')}
        onOpenSettings={action('open settings')}
        setToolbar={() => {}}
        openInstructionOrExpression={action('open instruction or expression')}
        onCreateEventsFunction={action('create events function')}
        onBeginCreateEventsFunction={action('begin create events function')}
        isActive={true}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);
