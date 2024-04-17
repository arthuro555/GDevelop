import { ResourceManagementProps } from '../../ResourcesList/ResourceSource';

import { UnsavedChanges } from '../../MainFrame/UnsavedChangesContext';

import { ScrollViewInterface } from '../../UI/ScrollView';
import * as React from 'react';

/**
 * The props given to any object editor
 */
export type EditorProps = {
  objectConfiguration: gd.ObjectConfiguration;
  project: gd.Project;
  // TODO EBO : Layout and EventBasedObject should have a common interface to
  // browse their events. It would allow to refactor the events when an
  // animation is renamed for instance.
  /**
   * The layout is used to adapt events when an identifier is renamed
   * (for instance, an object animation or a layer name).
   */
  layout?: gd.Layout;
  /**
   * The edited object. It can be undefined for sub-ObjectConfiguration of
   * custom object. There is no event to refactor in this case.
   */
  object?: gd.Object;
  /**
   * The object name used to build default file name for Piskel.
   * For custom objects, the children names are appended.
   */
  objectName: string;
  resourceManagementProps: ResourceManagementProps;
  onSizeUpdated: () => void;
  onObjectUpdated?: () => void;
  unsavedChanges?: UnsavedChanges;
  scrollView?: ScrollViewInterface;
  renderObjectNameField?: () => React.ReactElement;
  isChildObject?: boolean;
};
