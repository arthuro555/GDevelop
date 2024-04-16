import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/SpriteEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/index.tsx', but '--jsx' is not set.
import SpriteEditor from '../../../ObjectEditor/Editors/SpriteEditor';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor/index.tsx', but '--jsx' is not set.
import CollisionMasksEditor from '../../../ObjectEditor/Editors/SpriteEditor/CollisionMasksEditor';
// @ts-expect-error - TS6142 - Module '../../SerializedObjectDisplay' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/SerializedObjectDisplay.tsx', but '--jsx' is not set.
import SerializedObjectDisplay from '../../SerializedObjectDisplay';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import ResourcesLoader from '../../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module '../../../ObjectEditor/Editors/SpriteEditor/PointsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectEditor/Editors/SpriteEditor/PointsEditor/index.tsx', but '--jsx' is not set.
import PointsEditor from '../../../ObjectEditor/Editors/SpriteEditor/PointsEditor';
import fakeResourceManagementProps from '../../FakeResourceManagement';

export default {
  title: 'ObjectEditor/SpriteEditor',
  component: SpriteEditor,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SpriteEditor
        renderObjectNameField={() => null}
        objectConfiguration={testProject.spriteObjectConfiguration}
        project={testProject.project}
        layout={testProject.testLayout}
        resourceManagementProps={fakeResourceManagementProps}
        onSizeUpdated={() => {}}
        object={testProject.spriteObject}
        objectName="FakeObjectName"
      />
    </DragAndDropContextProvider>
  </SerializedObjectDisplay>
);

export const AnimationLocked = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SpriteEditor
        renderObjectNameField={() => null}
        isAnimationListLocked
        objectConfiguration={testProject.spriteObjectConfiguration}
        project={testProject.project}
        layout={testProject.testLayout}
        resourceManagementProps={fakeResourceManagementProps}
        onSizeUpdated={() => {}}
        object={testProject.spriteObject}
        objectName="FakeObjectName"
      />
    </DragAndDropContextProvider>
  </SerializedObjectDisplay>
);

export const Empty = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.emptySpriteObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SpriteEditor
        renderObjectNameField={() => null}
        objectConfiguration={testProject.emptySpriteObjectConfiguration}
        project={testProject.project}
        layout={testProject.testLayout}
        resourceManagementProps={fakeResourceManagementProps}
        onSizeUpdated={() => {}}
        object={testProject.emptySpriteObject}
        objectName="FakeObjectName"
      />
    </DragAndDropContextProvider>
  </SerializedObjectDisplay>
);

export const Points = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PointsEditor
          animations={testProject.spriteObjectConfiguration.getAnimations()}
          project={testProject.project}
          resourcesLoader={ResourcesLoader}
          onRenamedPoint={action('Renamed a point')}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  </SerializedObjectDisplay>
);

export const CollisionMasks = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SerializedObjectDisplay object={testProject.spriteObjectConfiguration}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CollisionMasksEditor
          animations={testProject.spriteObjectConfiguration.getAnimations()}
          project={testProject.project}
          resourcesLoader={ResourcesLoader}
          onCreateMatchingSpriteCollisionMask={action(
            'Created a matching sprite collision mask'
          )}
        />
      </FixedHeightFlexContainer>
    </DragAndDropContextProvider>
  </SerializedObjectDisplay>
);
