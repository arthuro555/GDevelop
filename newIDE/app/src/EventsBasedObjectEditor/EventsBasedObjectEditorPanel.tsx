// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module './index' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/index.tsx', but '--jsx' is not set.
import EventsBasedObjectEditor from './index';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module './EventsBasedObjectPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/EventsBasedObjectPropertiesEditor.tsx', but '--jsx' is not set.
import EventsBasedObjectPropertiesEditor from './EventsBasedObjectPropertiesEditor';
// @ts-expect-error - TS6142 - Module './EventBasedObjectChildrenEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedObjectEditor/EventBasedObjectChildrenEditor.tsx', but '--jsx' is not set.
import EventBasedObjectChildrenEditor from './EventBasedObjectChildrenEditor';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

type TabName = 'configuration' | 'properties' | 'children';

type Props = {
  project: gdProject,
  globalObjectsContainer: gdObjectsContainer,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  eventsBasedObject: gdEventsBasedObject,
  onRenameProperty: (oldName: string, newName: string) => void,
  onEventsFunctionsAdded: () => void,
  unsavedChanges?: UnsavedChanges | null | undefined
};

export default function EventsBasedObjectEditorPanel({
  project,
  globalObjectsContainer,
  eventsFunctionsExtension,
  eventsBasedObject,
  onRenameProperty,
  onEventsFunctionsAdded,
  unsavedChanges,
}: Props) {
  const [currentTab, setCurrentTab] = React.useState<TabName>('configuration');

  const onPropertiesUpdated = React.useCallback(
    () => {
      if (unsavedChanges) {
        unsavedChanges.triggerUnsavedChanges();
      }
    },
    [unsavedChanges]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand useFullHeight noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Tabs
              value={currentTab}
              onChange={setCurrentTab}
              options={[
                {
                  value: 'configuration',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Configuration</Trans>,
                },
                {
                  value: 'properties',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Properties</Trans>,
                },
                {
                  value: 'children',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Children</Trans>,
                },
              ]}
            />
          </Column>
        </Line>
        {currentTab === 'configuration' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventsBasedObjectEditor
            eventsBasedObject={eventsBasedObject}
            unsavedChanges={unsavedChanges}
          />
        )}
        {currentTab === 'properties' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventsBasedObjectPropertiesEditor
            project={project}
            extension={eventsFunctionsExtension}
            eventsBasedObject={eventsBasedObject}
            onRenameProperty={onRenameProperty}
            onPropertiesUpdated={onPropertiesUpdated}
            onEventsFunctionsAdded={onEventsFunctionsAdded}
          />
        )}
        {currentTab === 'children' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventBasedObjectChildrenEditor
            project={project}
            globalObjectsContainer={globalObjectsContainer}
            eventsFunctionsExtension={eventsFunctionsExtension}
            eventsBasedObject={eventsBasedObject}
          />
        )}
      </Column>
    </Background>
  );
}
