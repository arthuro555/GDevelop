import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../InstancesEditor/CompactInstancePropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/CompactInstancePropertiesEditor/index.tsx', but '--jsx' is not set.
import CompactInstancePropertiesEditor from '../../../InstancesEditor/CompactInstancePropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'LayoutEditor/CompactInstancePropertiesEditor',
  component: CompactInstancePropertiesEditor,
  decorators: [paperDecorator],
};

export const InstanceSprite2d = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SerializedObjectDisplay object={testProject.testSpriteObjectInstance}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactInstancePropertiesEditor
            i18n={i18n}
            project={testProject.project}
            layout={testProject.testLayout}
            instances={[testProject.testSpriteObjectInstance]}
            editInstanceVariables={action('edit instance variables')}
            onGetInstanceSize={() => [100, 101, 102]}
            onEditObjectByName={action('edit object')}
          />
        </SerializedObjectDisplay>
      )}
    </I18n>
  </DragAndDropContextProvider>
);

export const InstanceCube3d = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SerializedObjectDisplay object={testProject.testLayoutInstance2}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactInstancePropertiesEditor
            i18n={i18n}
            project={testProject.project}
            layout={testProject.testLayout}
            instances={[testProject.testLayoutInstance2]}
            editInstanceVariables={action('edit instance variables')}
            onGetInstanceSize={() => [100, 101, 102]}
            onEditObjectByName={action('edit object')}
          />
        </SerializedObjectDisplay>
      )}
    </I18n>
  </DragAndDropContextProvider>
);

export const InstanceTextInput = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SerializedObjectDisplay object={testProject.testLayoutInstance3}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CompactInstancePropertiesEditor
            i18n={i18n}
            project={testProject.project}
            layout={testProject.testLayout}
            instances={[testProject.testLayoutInstance3]}
            editInstanceVariables={action('edit instance variables')}
            onGetInstanceSize={() => [120, 40, 0]}
            onEditObjectByName={action('edit object')}
          />
        </SerializedObjectDisplay>
      )}
    </I18n>
  </DragAndDropContextProvider>
);
