import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../LayersList/LayerRemoveDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/LayersList/LayerRemoveDialog.tsx', but '--jsx' is not set.
import LayerRemoveDialog from '../../LayersList/LayerRemoveDialog';

const gd: libGDevelop = global.gd;

export default {
  title: 'LayerRemoveDialog',
  component: LayerRemoveDialog,
  decorators: [paperDecorator],
};

export const LayerWithInstances = () => {
  const instance1 = new gd.InitialInstance();
  instance1.setObjectName('Object');
  instance1.setLayer('GUI');
  const instance2 = new gd.InitialInstance();
  instance2.setObjectName('Object');
  instance2.setLayer('GUI');

  const project = new gd.Project();
  const layout = project.insertNewLayout('NewScene', 0);

  layout.insertNewLayer('GUI', 0);
  layout.insertNewLayer('OtherLayer', 0);

  const instancesContainer = layout.getInitialInstances();
  instancesContainer.insertInitialInstance(instance1);
  instancesContainer.insertInitialInstance(instance2);

  instance1.delete();
  instance2.delete();

  React.useEffect(() => {
    return () => {
      project.delete();
    };
    // Delete project on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LayerRemoveDialog
      open
      project={project}
      layersContainer={layout}
      layerRemoved="GUI"
      onClose={action('onClose')}
    />
  );
};
export const LayerWithoutInstances = () => {
  const project = new gd.Project();
  const layout = project.insertNewLayout('NewScene', 0);
  layout.insertNewLayer('GUI', 0);
  layout.insertNewLayer('OtherLayer', 0);

  React.useEffect(() => {
    return () => {
      project.delete();
    };
    // Delete project on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LayerRemoveDialog
      open
      project={project}
      layersContainer={layout}
      layerRemoved="GUI"
      onClose={action('onClose')}
    />
  );
};
