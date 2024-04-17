import { useCommand } from '../CommandPalette/CommandHooks';
import useObjectsListCommands from '../ObjectsList/UseObjectsListCommands';
import useObjectGroupsListCommands from '../ObjectGroupsList/UseObjectGroupsListCommands';
import useLayersListCommands from '../LayersList/UseLayersListCommands';

type Props = {
  project: gd.Project;
  layout: gd.Layout;
  onEditObject: (object: gd.gdObject) => void;
  onEditObjectVariables: (object: gd.gdObject) => void;
  onOpenSceneProperties: () => void;
  onOpenSceneVariables: () => void;
  onEditObjectGroup: (group: gd.ObjectGroup) => void;
  onEditLayerEffects: (layer: gd.Layer) => void;
  onEditLayer: (layer: gd.Layer) => void;
};

const UseSceneEditorCommands = (props: Props) => {
  const {
    project,
    layout,
    onEditObject,
    onEditObjectVariables,
    onOpenSceneProperties,
    onOpenSceneVariables,
    onEditObjectGroup,
    onEditLayerEffects,
    onEditLayer,
  } = props;

  useCommand('OPEN_SCENE_PROPERTIES', true, {
    handler: onOpenSceneProperties,
  });

  useCommand('OPEN_SCENE_VARIABLES', true, {
    handler: onOpenSceneVariables,
  });

  useObjectsListCommands({
    project,
    layout,
    onEditObject,
    onEditObjectVariables,
  });

  useObjectGroupsListCommands({
    project,
    layout,
    onEditObjectGroup,
  });

  useLayersListCommands({
    layout,
    onEditLayerEffects,
    onEditLayer,
  });

  return null;
};

export default UseSceneEditorCommands;
