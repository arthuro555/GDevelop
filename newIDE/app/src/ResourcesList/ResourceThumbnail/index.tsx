import * as React from 'react';
import ResourcesLoader from '../../ResourcesLoader';
import { ResourceKind } from '../ResourceSource';

import ImageThumbnail from './ImageThumbnail';

type Props = {
  project: gd.Project;
  resourceName: string;
  resourcesLoader: typeof ResourcesLoader;
  resourceKind: ResourceKind;
  style?: any;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (arg1: boolean) => void;
  onContextMenu?: (arg1: number, arg2: number) => void;
};

export const resourcesKindsWithThumbnail = ['image'] as const;

/**
 * Display the right thumbnail for any given resource of a project
 */
const ResourceThumbnail = ({
  project,
  resourceName,
  resourcesLoader,
  resourceKind,
  style,
  selectable,
  selected,
  onSelect,
  onContextMenu,
}: Props) => {
  switch (resourceKind) {
    case 'image':
      return (
        <ImageThumbnail
          project={project}
          resourceName={resourceName}
          resourcesLoader={resourcesLoader}
          style={style}
          selectable={selectable}
          selected={selected}
          onSelect={onSelect}
          onContextMenu={onContextMenu}
        />
      );
    default:
      return null;
  }
};

export default ResourceThumbnail;
