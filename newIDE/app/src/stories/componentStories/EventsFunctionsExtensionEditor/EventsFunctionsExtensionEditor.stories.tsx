import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../EventsFunctionsExtensionEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/index.tsx', but '--jsx' is not set.
import EventsFunctionsExtensionEditor from '../../../EventsFunctionsExtensionEditor';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
import PreferencesContext, {
  initialPreferences,
  Preferences,
// @ts-expect-error - TS6142 - Module '../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../../MainFrame/Preferences/PreferencesContext';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'EventsFunctionsExtensionEditor/index',
  component: EventsFunctionsExtensionEditor,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={700}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
  const preferences: Preferences = {
    ...initialPreferences,
    getShowEventBasedObjectsEditor: () => true,
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PreferencesContext.Provider value={preferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FixedHeightFlexContainer height={700}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
