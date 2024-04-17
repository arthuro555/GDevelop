import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:

import { testProject } from '../../GDevelopJsInitializerDecorator';

import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';

import EventsFunctionsExtensionEditor from '../../../EventsFunctionsExtensionEditor';

import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
import PreferencesContext, {
  initialPreferences,
  Preferences,
} from '../../../MainFrame/Preferences/PreferencesContext';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'EventsFunctionsExtensionEditor/index',
  component: EventsFunctionsExtensionEditor,
};

export const Default = () => (
  <DragAndDropContextProvider>
    <FixedHeightFlexContainer height={700}>
      <EventsFunctionsExtensionEditor
        project={testProject.project}
        eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
        setToolbar={() => {}}
        resourceManagementProps={fakeResourceManagementProps}
        openInstructionOrExpression={action('open instruction or expression')}
        initiallyFocusedFunctionName={null}
        initiallyFocusedBehaviorName={null}
        onCreateEventsFunction={action('on create events function')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const WithObjectEditor = () => {
// @ts-expect-error - TS2322 - Type '{ getShowEventBasedObjectsEditor: () => true; values: { readonly language: "en"; readonly autoDownloadUpdates: true; readonly themeName: "GDevelop default Dark"; readonly codeEditorThemeName: "vs-dark"; ... 35 more ...; readonly editorStateByProject: {}; }; ... 58 more ...; setEditorStateForProject: (projectId: any,...' is not assignable to type 'Preferences'.
  const preferences: Preferences = {
    ...initialPreferences,
    getShowEventBasedObjectsEditor: () => true,
  };

  return (
    <PreferencesContext.Provider value={preferences}>
      <DragAndDropContextProvider>
        <FixedHeightFlexContainer height={700}>
          <EventsFunctionsExtensionEditor
            project={testProject.project}
            eventsFunctionsExtension={testProject.testEventsFunctionsExtension}
            setToolbar={() => {}}
            resourceManagementProps={fakeResourceManagementProps}
            openInstructionOrExpression={action(
              'open instruction or expression'
            )}
            initiallyFocusedFunctionName={null}
            initiallyFocusedBehaviorName={null}
            onCreateEventsFunction={action('on create events function')}
          />
        </FixedHeightFlexContainer>
      </DragAndDropContextProvider>
    </PreferencesContext.Provider>
  );
};
