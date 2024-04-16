import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../LayersList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/index.tsx', but '--jsx' is not set.
import LayersList from '../../../LayersList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';

export default {
  title: 'LayoutEditor/LayersList',
  component: LayersList,
  decorators: [paperDecorator],
};

export const Default = () => {
  const [selectedLayer, setSelectedLayer] = React.useState<string>('');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LayersList
        project={testProject.project}
        selectedLayer={selectedLayer}
        onSelectLayer={setSelectedLayer}
        onEditLayerEffects={action('onEditLayerEffects')}
        onEditLayer={action('onEditLayer')}
// @ts-expect-error - TS7006 - Parameter 'layerName' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
        onRemoveLayer={(layerName, cb) => {
          cb(true);
        }}
        onLayerRenamed={action('onLayerRenamed')}
        onCreateLayer={action('onCreateLayer')}
        layersContainer={testProject.testLayout}
        hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
      />
    </DragAndDropContextProvider>
  );
};

export const SmallWidthAndHeight = () => {
  const [selectedLayer, setSelectedLayer] = React.useState<string>('');

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={{ width: 250, height: 200 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LayersList
          project={testProject.project}
          selectedLayer={selectedLayer}
          onSelectLayer={setSelectedLayer}
          onEditLayerEffects={action('onEditLayerEffects')}
          onEditLayer={action('onEditLayer')}
// @ts-expect-error - TS7006 - Parameter 'layerName' implicitly has an 'any' type. | TS7006 - Parameter 'cb' implicitly has an 'any' type.
          onRemoveLayer={(layerName, cb) => {
            cb(true);
          }}
          onLayerRenamed={action('onLayerRenamed')}
          onCreateLayer={action('onCreateLayer')}
          layersContainer={testProject.testLayout}
          hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
        />
      </div>
    </DragAndDropContextProvider>
  );
};
