import {
  applyResourceDefaults,
  getLocalResourceFullPath,
  getResourceFilePathStatus,
} from '../../ResourcesList/ResourceUtils';
import { mapVector } from '../../Utils/MapFor';
import newNameGenerator from '../../Utils/NewNameGenerator';
import optionalLazyRequire from '../../Utils/OptionalLazyRequire';

import optionalRequire from '../../Utils/OptionalRequire';

const lazyRequireGlob = optionalLazyRequire('glob');
const path = optionalRequire('path') as typeof import('path');

// It's important to use remote and not electron for folder actions,
// otherwise they will be opened in the background.
// See https://github.com/electron/electron/issues/4349#issuecomment-777475765
const remote = optionalRequire('@electron/remote');

export const locateResourceFile = ({
  project,
  resource,
}: {
  project: gd.Project;
  resource: gd.Resource;
}) => {
  const resourceFilePath = getLocalResourceFullPath(
    project,
    resource.getName()
  );

  remote.shell.showItemInFolder(path.resolve(resourceFilePath));
};

export const openResourceFile = ({
  project,
  resource,
}: {
  project: gd.Project;
  resource: gd.Resource;
}) => {
  const resourceFilePath = getLocalResourceFullPath(
    project,
    resource.getName()
  );
  remote.shell.openPath(path.resolve(resourceFilePath));
};

export const copyResourceFilePath = ({
  project,
  resource,
}: {
  project: gd.Project;
  resource: gd.Resource;
}) => {
  const resourceFilePath = getLocalResourceFullPath(
    project,
    resource.getName()
  );
  remote.clipboard.writeText(path.resolve(resourceFilePath));
};

export const scanForNewResources = async ({
  project,
  extensions,
  createResource,
}: {
  project: gd.Project;
  extensions: Array<string>;
  createResource: () => gd.Resource;
}) => {
  const glob = lazyRequireGlob();
  if (!glob) return;

  const resourcesManager = project.getResourcesManager();
  const projectPath = path.dirname(project.getProjectFile());

  const allExtensions = [
    ...extensions,
    ...extensions.map((extension) => extension.toUpperCase()),
  ];

  try {
    const allFiles = await new Promise(
      (
        resolve: (result: Promise<never>) => void,
        reject: (error?: any) => void
      ) => {
        glob(
          projectPath + '/**/*.{' + allExtensions.join(',') + '}',
          // @ts-expect-error - TS7006 - Parameter 'error' implicitly has an 'any' type. | TS7006 - Parameter 'files' implicitly has an 'any' type.
          (error, files) => {
            if (error) reject(error);
            else resolve(files);
          }
        );
      }
    );

    const filesToCheck = new gd.VectorString();
    // @ts-expect-error - TS2339 - Property 'forEach' does not exist on type 'never'. | TS7006 - Parameter 'filePath' implicitly has an 'any' type.
    allFiles.forEach((filePath) =>
      filesToCheck.push_back(path.relative(projectPath, filePath))
    );
    const filePathsNotInResources = project
      .getResourcesManager()
      .findFilesNotInResources(filesToCheck);
    filesToCheck.delete();

    mapVector(filePathsNotInResources, (relativeFilePath: string) => {
      const resourceName = newNameGenerator(relativeFilePath, (name) =>
        resourcesManager.hasResource(name)
      );

      const resource = createResource();
      resource.setFile(relativeFilePath);
      resource.setName(resourceName);
      applyResourceDefaults(project, resource);
      resourcesManager.addResource(resource);
      resource.delete();

      console.info(
        `"${relativeFilePath}" added to project as resource named "${resourceName}".`
      );
    });
  } catch (error) {
    console.error(`Error finding files inside ${projectPath}:`, error);
    return;
  }
};

export const removeAllResourcesWithInvalidPath = ({
  project,
}: {
  project: gd.Project;
}) => {
  const resourcesManager = project.getResourcesManager();
  const removedResourceNames = resourcesManager
    .getAllResourceNames()
    .toJSArray()
    // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
    .filter((resourceName) => {
      return getResourceFilePathStatus(project, resourceName) === 'error';
    });

  // @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
  removedResourceNames.forEach((resourceName) => {
    resourcesManager.removeResource(resourceName);
    console.info('Removed due to invalid path: ' + resourceName);
  });
};
