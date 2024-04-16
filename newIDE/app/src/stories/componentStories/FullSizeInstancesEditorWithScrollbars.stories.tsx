import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../InstancesEditor/FullSizeInstancesEditorWithScrollbars' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InstancesEditor/FullSizeInstancesEditorWithScrollbars.tsx', but '--jsx' is not set.
import FullSizeInstancesEditorWithScrollbars from '../../InstancesEditor/FullSizeInstancesEditorWithScrollbars';
import InstancesSelection from '../../InstancesEditor/InstancesSelection';
import { InstancesEditorSettings } from '../../InstancesEditor/InstancesEditorSettings';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../FixedHeightFlexContainer';

const instancesSelection = new InstancesSelection();
const instancesEditorSettings: InstancesEditorSettings = {
  grid: false,
  gridType: 'isometric',
  gridWidth: 1200,
  gridHeight: 600,
  gridOffsetX: 0,
  gridOffsetY: 0,
  gridColor: 0,
  gridAlpha: 0,
  snap: false,
  zoomFactor: 1,
  windowMask: false,
};

export default {
  title: 'Editor/FullSizeInstancesEditorWithScrollbars',
  component: FullSizeInstancesEditorWithScrollbars,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FullSizeInstancesEditorWithScrollbars
        project={testProject.project}
        layout={testProject.testLayout}
        selectedLayer={''}
        initialInstances={testProject.testLayout.getInitialInstances()}
        instancesEditorSettings={instancesEditorSettings}
        onInstancesEditorSettingsMutated={() => {}}
        isInstanceOf3DObject={() => false}
        instancesSelection={instancesSelection}
        onInstancesAdded={() => {}}
        onInstancesSelected={() => {}}
        onInstanceDoubleClicked={() => {}}
        onInstancesMoved={() => {}}
        onInstancesResized={() => {}}
        onInstancesRotated={() => {}}
        selectedObjectNames={[]}
        onContextMenu={() => {}}
        instancesEditorShortcutsCallbacks={{
          onCopy: () => {},
          onCut: () => {},
          onPaste: () => {},
          onDuplicate: () => {},
          onDelete: () => {},
          onUndo: () => {},
          onRedo: () => {},
          onZoomOut: () => {},
          onZoomIn: () => {},
          onShift1: () => {},
          onShift2: () => {},
          onShift3: () => {},
        }}
        wrappedEditorRef={() => {}}
        pauseRendering={false}
      />
    </DragAndDropContextProvider>
  </FixedHeightFlexContainer>
);
