import * as React from 'react';
import ResourcesLoader from '../../ResourcesLoader';
import { ResourceKind } from '../ResourceSource';
// @ts-expect-error - TS6142 - Module './ImageThumbnail' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourceThumbnail/ImageThumbnail.tsx', but '--jsx' is not set.
import ImageThumbnail from './ImageThumbnail';

type Props = {
  project: gdProject,
  resourceName: string,
  resourcesLoader: typeof ResourcesLoader,
  resourceKind: ResourceKind,
  style?: any,
  selectable?: boolean,
  selected?: boolean,
  onSelect?: (arg1: boolean) => void,
  onContextMenu?: (arg1: number, arg2: number) => void
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
