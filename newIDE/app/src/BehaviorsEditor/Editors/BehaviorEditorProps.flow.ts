import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';

/**
 * The props given to any behavior editor
 */
export type BehaviorEditorProps = {
  behavior: gd.Behavior;
  project: gd.Project;
  object: gd.Object;
  resourceManagementProps: ResourceManagementProps;
  onBehaviorUpdated: () => void;
};
