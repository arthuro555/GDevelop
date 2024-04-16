// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module './index' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedBehaviorEditor/index.tsx', but '--jsx' is not set.
import EventsBasedBehaviorEditor from './index';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
// @ts-expect-error - TS6142 - Module './EventsBasedBehaviorPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsBasedBehaviorEditor/EventsBasedBehaviorPropertiesEditor.tsx', but '--jsx' is not set.
import EventsBasedBehaviorPropertiesEditor from './EventsBasedBehaviorPropertiesEditor';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
// @ts-expect-error - TS6142 - Module '../EventsFunctionsExtensionEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/index.tsx', but '--jsx' is not set.
import { ExtensionItemConfigurationAttribute } from '../EventsFunctionsExtensionEditor';

type TabName = 'configuration' | 'behavior-properties' | 'scene-properties';

type Props = {
  project: gdProject,
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  eventsBasedBehavior: gdEventsBasedBehavior,
  onRenameProperty: (oldName: string, newName: string) => void,
  onRenameSharedProperty: (oldName: string, newName: string) => void,
  onEventsFunctionsAdded: () => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  onConfigurationUpdated?: (arg1?: ExtensionItemConfigurationAttribute | null | undefined) => void
};

export default function EventsBasedBehaviorEditorPanel({
  eventsBasedBehavior,
  eventsFunctionsExtension,
  project,
  onRenameProperty,
  onRenameSharedProperty,
  unsavedChanges,
  onEventsFunctionsAdded,
  onConfigurationUpdated,
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
                  value: 'behavior-properties',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Behavior properties</Trans>,
                },
                {
                  value: 'scene-properties',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Scene properties</Trans>,
                },
              ]}
            />
          </Column>
        </Line>
        {currentTab === 'configuration' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventsBasedBehaviorEditor
            project={project}
            eventsFunctionsExtension={eventsFunctionsExtension}
            eventsBasedBehavior={eventsBasedBehavior}
            unsavedChanges={unsavedChanges}
            onConfigurationUpdated={onConfigurationUpdated}
          />
        )}
        {currentTab === 'behavior-properties' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventsBasedBehaviorPropertiesEditor
            project={project}
            extension={eventsFunctionsExtension}
            eventsBasedBehavior={eventsBasedBehavior}
            properties={eventsBasedBehavior.getPropertyDescriptors()}
            onRenameProperty={onRenameProperty}
            behaviorObjectType={eventsBasedBehavior.getObjectType()}
            onPropertiesUpdated={onPropertiesUpdated}
            onEventsFunctionsAdded={onEventsFunctionsAdded}
          />
        )}
        {currentTab === 'scene-properties' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EventsBasedBehaviorPropertiesEditor
            isSceneProperties
            project={project}
            extension={eventsFunctionsExtension}
            eventsBasedBehavior={eventsBasedBehavior}
            properties={eventsBasedBehavior.getSharedPropertyDescriptors()}
            onRenameProperty={onRenameSharedProperty}
            onPropertiesUpdated={onPropertiesUpdated}
            onEventsFunctionsAdded={onEventsFunctionsAdded}
          />
        )}
      </Column>
    </Background>
  );
}
