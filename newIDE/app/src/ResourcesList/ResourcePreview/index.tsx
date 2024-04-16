import * as React from 'react';
import ResourcesLoader from '../../ResourcesLoader';
// @ts-expect-error - TS6142 - Module './ImagePreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/ImagePreview.tsx', but '--jsx' is not set.
import ImagePreview, { isProjectImageResourceSmooth } from './ImagePreview';
// @ts-expect-error - TS6142 - Module './GenericIconPreview' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/ResourcePreview/GenericIconPreview.tsx', but '--jsx' is not set.
import GenericIconPreview from './GenericIconPreview';
import FontDownload from '@material-ui/icons/FontDownload';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/File'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/File.js' implicitly has an 'any' type.
import File from '../../UI/CustomSvgIcons/File';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Video'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Video.js' implicitly has an 'any' type.
import Video from '../../UI/CustomSvgIcons/Video';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Music'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Music.js' implicitly has an 'any' type.
import Music from '../../UI/CustomSvgIcons/Music';

type Props = {
  project: gdProject,
  resourceName: string,
  resourcesLoader: typeof ResourcesLoader
};

/**
 * Display the right preview for any given resource of a project
 */
const ResourcePreview = (props: Props) => {
  const { project, resourceName } = props;
  const resourcesManager = project.getResourcesManager();
  const resourceKind = resourcesManager.hasResource(resourceName)
    ? resourcesManager.getResource(resourceName).getKind()
    : null;

  switch (resourceKind) {
    case 'image':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ImagePreview
          resourceName={resourceName}
          imageResourceSource={props.resourcesLoader.getResourceFullUrl(
            project,
            resourceName,
            {}
          )}
          isImageResourceSmooth={isProjectImageResourceSmooth(
            project,
            resourceName
          )}
        />
      );
    case 'audio':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <GenericIconPreview renderIcon={props => <Music {...props} />} />;
    case 'json':
    case 'tilemap':
    case 'tileset':
    case 'model3D':
    case 'atlas':
    case 'spine':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <GenericIconPreview renderIcon={props => <File {...props} />} />;
    case 'video':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <GenericIconPreview renderIcon={props => <Video {...props} />} />;
    case 'font':
    case 'bitmapFont':
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS7006 - Parameter 'props' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GenericIconPreview renderIcon={props => <FontDownload {...props} />} />
      );
    default:
      return null;
  }
};

export default ResourcePreview;
