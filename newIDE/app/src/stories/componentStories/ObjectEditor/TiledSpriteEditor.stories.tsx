import * as React from 'react';

// Keep first as it creates the `global.gd` object:

import { testProject } from '../../GDevelopJsInitializerDecorator';

import paperDecorator from '../../PaperDecorator';

import TiledSpriteEditor from '../../../ObjectEditor/Editors/TiledSpriteEditor';

import SerializedObjectDisplay from '../../SerializedObjectDisplay';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/TiledSpriteEditor',
  component: TiledSpriteEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
  <SerializedObjectDisplay object={testProject.tiledSpriteObjectConfiguration}>
    {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TiledSpriteEditor
      objectConfiguration={testProject.tiledSpriteObjectConfiguration}
      project={testProject.project}
      layout={testProject.testLayout}
      resourceManagementProps={fakeResourceManagementProps}
      onSizeUpdated={() => {}}
      // It would be used for refactoring but this kind of object has none.
      object={testProject.spriteObject}
      objectName="FakeObjectName"
    />
  </SerializedObjectDisplay>
);
