import { Trans } from '@lingui/macro';
import * as React from 'react';

import EventsBasedObjectEditor from './index';

import { Tabs } from '../UI/Tabs';

import EventsBasedObjectPropertiesEditor from './EventsBasedObjectPropertiesEditor';

import EventBasedObjectChildrenEditor from './EventBasedObjectChildrenEditor';

import Background from '../UI/Background';

import { Column, Line } from '../UI/Grid';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

type TabName = 'configuration' | 'properties' | 'children';

type Props = {
  project: gd.Project;
  globalObjectsContainer: gd.ObjectsContainer;
  eventsFunctionsExtension: gd.EventsFunctionsExtension;
  eventsBasedObject: gd.EventsBasedObject;
  onRenameProperty: (oldName: string, newName: string) => void;
  onEventsFunctionsAdded: () => void;
  unsavedChanges?: UnsavedChanges | null | undefined;
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

  const onPropertiesUpdated = React.useCallback(() => {
    if (unsavedChanges) {
      unsavedChanges.triggerUnsavedChanges();
    }
  }, [unsavedChanges]);

  return (
    <Background>
      <Column expand useFullHeight noOverflowParent>
        <Line>
          <Column noMargin expand noOverflowParent>
            <Tabs
              value={currentTab}
              onChange={setCurrentTab}
              options={[
                {
                  value: 'configuration',

                  label: <Trans>Configuration</Trans>,
                },
                {
                  value: 'properties',

                  label: <Trans>Properties</Trans>,
                },
                {
                  value: 'children',

                  label: <Trans>Children</Trans>,
                },
              ]}
            />
          </Column>
        </Line>
        {currentTab === 'configuration' && (
          <EventsBasedObjectEditor
            eventsBasedObject={eventsBasedObject}
            unsavedChanges={unsavedChanges}
          />
        )}
        {currentTab === 'properties' && (
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
