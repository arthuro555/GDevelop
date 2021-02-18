// @flow
import { type FileMetadata } from '../index';
import { unsplit } from '../../Utils/ObjectSplitter.js';

const readJSONFile = (filepath: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    window.requestFileSystem(
      window.LocalFileSystem.PERSISTENT,
      0,
      fs => {
        fs.root.getFile(
          filepath,
          { create: false, exclusive: false },
          fileEntry => {
            fileEntry.file(file => {
              const reader = new FileReader();
              reader.onloadend = () => {
                try {
                  const dataObject = JSON.parse(reader.result);
                  return resolve(dataObject);
                } catch (ex) {
                  return reject(filepath + ' is a corrupted/malformed file.');
                }
              };
              reader.onerror = reject;
              reader.readAsText(file);
            }, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

export const onOpenWithPicker = (): Promise<?FileMetadata> =>
  window.chooser
    .getFileMetadata('application/json')
    .then(({ uri }) => ({ fileIdentifier: uri }));

export const onOpen = (
  fileMetadata: FileMetadata
): Promise<{|
  content: Object,
|}> => {
  const filePath = fileMetadata.fileIdentifier;
  const projectPath = filePath
    .split('/')
    .slice(0, -1)
    .join('/');
  return readJSONFile(filePath).then(object => {
    return unsplit(object, {
      getReferencePartialObject: referencePath => {
        return readJSONFile(projectPath + '/' + referencePath + '.json');
      },
      isReferenceMagicPropertyName: '__REFERENCE_TO_SPLIT_OBJECT',
      // Limit unsplitting to depth 3 (which would allow properties of layouts/external layouts/external events
      // to be un-splitted, but not the content of these properties), to avoid very slow processing
      // of large game files.
      maxUnsplitDepth: 3,
    }).then(() => {
      return { content: object };
    });
  });
};

export const hasAutoSave = (
  fileMetadata: FileMetadata,
  compareLastModified: boolean
): Promise<boolean> => {
  //TODO
  return Promise.resolve(false);
};

export const onGetAutoSave = (fileMetadata: FileMetadata) => {
  return Promise.resolve({
    ...fileMetadata,
    fileIdentifier: fileMetadata.fileIdentifier + '.autosave',
  });
};
