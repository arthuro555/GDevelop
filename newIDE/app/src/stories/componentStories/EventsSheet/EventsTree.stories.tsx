import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../EventsSheet/EventsTree' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/EventsTree/index.tsx', but '--jsx' is not set.
import EventsTree from '../../../EventsSheet/EventsTree';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
import { getInitialSelection } from '../../../EventsSheet/SelectionHandler';
// @ts-expect-error - TS6142 - Module '../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import { initialPreferences } from '../../../MainFrame/Preferences/PreferencesContext';
import { Tutorial } from '../../../Utils/GDevelopServices/Tutorial';

export default {
  title: 'EventsSheet/EventsTree',
  component: EventsTree,
};

const eventsTreeTutorials: Array<Tutorial> = [
  {
    id: 'intro-event-system',
    title: 'Event system',
    titleByLocale: { en: 'Event system' },
    description: 'Description 1',
    descriptionByLocale: { en: 'Description 1' },
    thumbnailUrl:
      'https://raw.githubusercontent.com/4ian/GDevelop/master/Core/docs/images/gdlogo.png',
    thumbnailUrlByLocale: {
      en:
        'https://raw.githubusercontent.com/4ian/GDevelop/master/Core/docs/images/gdlogo.png',
    },
    link: 'https://example.com/tutorial.html',
    linkByLocale: { en: 'https://example.com/tutorial.html' },
    type: 'video',
    category: 'game-mechanic',
  },
];

export const DefaultMediumScreenScopeInLayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="gd-events-sheet">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowSize={'medium'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const DefaultSmallScreenScopeInLayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="gd-events-sheet">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowSize={'small'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const DefaultMediumScreenScopeNotInLayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="gd-events-sheet">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EventsTree
          events={testProject.testLayout.getEvents()}
          project={testProject.project}
          scope={{ project: testProject.project }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowSize={'medium'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);

export const EmptySmallScreenScopeInALayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div className="gd-events-sheet">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <EventsTree
          events={testProject.emptyEventsList}
          project={testProject.project}
          scope={{
            project: testProject.project,
            layout: testProject.testLayout,
          }}
          globalObjectsContainer={testProject.project}
          objectsContainer={testProject.testLayout}
          selection={getInitialSelection()}
          onAddNewInstruction={action('add new instruction')}
          onPasteInstructions={action('paste instructions')}
          onMoveToInstruction={action('move to instruction')}
          onMoveToInstructionsList={action('move instruction to list')}
          onInstructionClick={action('instruction click')}
          onInstructionDoubleClick={action('instruction double click')}
          onInstructionContextMenu={action('instruction context menu')}
          onAddInstructionContextMenu={action('instruction list context menu')}
          onParameterClick={action('parameter click')}
          onEventClick={action('event click')}
          onEventContextMenu={action('event context menu')}
          onAddNewEvent={action('add new event')}
          onOpenExternalEvents={action('open external events')}
          onOpenLayout={action('open layout')}
          searchResults={null}
          searchFocusOffset={null}
          onEventMoved={() => {}}
          showObjectThumbnails={true}
          screenType={'normal'}
          windowSize={'small'}
          eventsSheetHeight={500}
          preferences={initialPreferences}
          tutorials={eventsTreeTutorials}
          onEndEditingEvent={action('end editing event')}
        />
      </FixedHeightFlexContainer>
    </div>
  </DragAndDropContextProvider>
);
