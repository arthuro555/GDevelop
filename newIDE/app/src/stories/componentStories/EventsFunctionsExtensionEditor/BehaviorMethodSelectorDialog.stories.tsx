import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../EventsFunctionsExtensionEditor/BehaviorMethodSelectorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/BehaviorMethodSelectorDialog.tsx', but '--jsx' is not set.
import BehaviorMethodSelectorDialog from '../../../EventsFunctionsExtensionEditor/BehaviorMethodSelectorDialog';

export default {
  title: 'EventsFunctionsExtensionEditor/BehaviorMethodSelectorDialog',
  component: BehaviorMethodSelectorDialog,
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <BehaviorMethodSelectorDialog
        eventsBasedBehavior={testProject.testEventsBasedBehavior}
        onCancel={() => action('Cancel')}
// @ts-expect-error - TS7006 - Parameter 'parameters' implicitly has an 'any' type.
        onChoose={parameters => action('Choose function type', parameters)}
      />
    )}
  </I18n>
);
