// @flow
import { serializeToJSObject } from '../../Utils/Serializer';
import { type FileMetadata } from '../index';
import {
  split,
  splitPaths,
  getSlugifiedUniqueNameFromProperty,
} from '../../Utils/ObjectSplitter';

const writeJSONFile = (object: Object, filePath: string): Promise<void> => {
  try {
    const content = JSON.stringify(object, null, 2);
    if (content === '' || content === '{}') {
      return Promise.reject(
        new Error('The content to save on disk is empty. Aborting.')
      );
    }

    return new Promise((resolve, reject) => {
      window.requestFileSystem(
        window.LocalFileSystem.PERSISTENT,
        0,
        fs => {
          fs.root.getFile(
            filePath,
            { create: true, exclusive: false },
            fileEntry => {
              fileEntry.createWriter(fileWriter => {
                fileWriter.onwriteend = resolve;
                fileWriter.onerror = reject;
                const dataObj = new Blob([content], {
                  type: 'application/json',
                });
                fileWriter.write(dataObj);
              }, reject);
            },
            reject
          );
        },
        reject
      );
    });
  } catch (stringifyException) {
    return Promise.reject(stringifyException);
  }
};

const writeProjectFiles = (
  project: gdProject,
  filePath: string,
  projectPath: string
): Promise<void> => {
  const serializedProjectObject = serializeToJSObject(project);

  if (project.isFolderProject()) {
    const partialObjects = split(serializedProjectObject, {
      pathSeparator: '/',
      getArrayItemReferenceName: getSlugifiedUniqueNameFromProperty('name'),
      shouldSplit: splitPaths(
        new Set([
          '/layouts/*',
          '/externalLayouts/*',
          '/externalEvents/*',
          '/layouts/*',
          '/eventsFunctionsExtensions/*',
        ])
      ),
      isReferenceMagicPropertyName: '__REFERENCE_TO_SPLIT_OBJECT',
    });

    return Promise.all(
      partialObjects.map(partialObject => {
        return writeJSONFile(
          partialObject.object,
          projectPath + '/' + partialObject.reference + '.json'
        ).catch(err => {
          console.error('Unable to write a partial file:', err);
          throw err;
        });
      })
    ).then(() => {
      return writeJSONFile(serializedProjectObject, filePath).catch(err => {
        console.error('Unable to write the split project:', err);
        throw err;
      });
    });
  } else {
    return writeJSONFile(serializedProjectObject, filePath).catch(err => {
      console.error('Unable to write the project:', err);
      throw err;
    });
  }
};

export const onSaveProject = (
  project: gdProject,
  fileMetadata: FileMetadata
): Promise<{|
  wasSaved: boolean,
  fileMetadata: FileMetadata,
|}> => {
  const filePath = fileMetadata.fileIdentifier;
  if (!filePath) {
    return Promise.reject(
      'Project file is empty, "Save as" should have been called?'
    );
  }

  const projectPath = filePath
    .split('/')
    .slice(0, -1)
    .join('/');
  return writeProjectFiles(project, filePath, projectPath).then(() => {
    return { wasSaved: true, fileMetadata }; // Save was properly done
  });
};

export const onSaveProjectAs = (
  project: gdProject,
  fileMetadata: ?FileMetadata
): Promise<{|
  wasSaved: boolean,
  fileMetadata: ?FileMetadata,
|}> => {
  //const defaultPath = fileMetadata ? fileMetadata.fileIdentifier : '';
  //const fileSystem = assignIn(new gd.AbstractFileSystemJS(), localFileSystem);

  return window.chooser
    .getFileMetadata('application/json')
    .then(({ uri: filePath }) => {
      if (!filePath) return Promise.resolve({ wasSaved: false, fileMetadata });

      const projectPath = filePath
        .split('/')
        .slice(0, -1)
        .join('/');

      /* TODO
      gd.ProjectResourcesCopier.copyAllResourcesTo(
        project,
        fileSystem,
        projectPath,
        true, // Update the project with the new resource paths
        false, // Don't move absolute files
        true // Keep relative files folders structure.
      );
      */

      // Update the project with the new file path (resources have already been updated)
      project.setProjectFile(filePath);

      return writeProjectFiles(project, filePath, projectPath).then(() => {
        return {
          wasSaved: true,
          fileMetadata: {
            ...fileMetadata,
            fileIdentifier: filePath,
          },
        }; // Save was properly done
      });
    });
};

export const onAutoSaveProject = (
  project: gdProject,
  fileMetadata: FileMetadata
): Promise<void> => {
  const autoSavePath = fileMetadata.fileIdentifier + '.autosave';
  return writeJSONFile(serializeToJSObject(project), autoSavePath).catch(
    err => {
      console.error(`Unable to write ${autoSavePath}:`, err);
      throw err;
    }
  );
};
