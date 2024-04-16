// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import { FileMetadata } from '../index';
import { unsplit } from '../../Utils/ObjectSplitter';
const fs = optionalRequire('fs');
const path = optionalRequire('path');
const remote = optionalRequire('@electron/remote');
const dialog = remote ? remote.dialog : null;

const readJSONFile = (filepath: string): Promise<any> => {
  if (!fs) return Promise.reject('Filesystem is not supported.');

  return new Promise((resolve: (result: Promise<never>) => void, reject: (error?: any) => void) => {
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type. | TS7006 - Parameter 'data' implicitly has an 'any' type.
    fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
      if (err) return reject(err);

      try {
        const dataObject = JSON.parse(data);
        return resolve(dataObject);
      } catch (ex: any) {
        return reject(filepath + ' is a corrupted/malformed file.');
      }
    });
  });
};

export const onOpenWithPicker = (): Promise<FileMetadata | null | undefined> => {
  if (!dialog) return Promise.reject('Not supported');
  const browserWindow = remote.getCurrentWindow();

  return dialog
    .showOpenDialog(browserWindow, {
      title: 'Open a project',
      properties: ['openFile'],
      message:
        'If you want to open your GDevelop 4 project, be sure to save it as a .json file',
      filters: [{ name: 'GDevelop 5 project', extensions: ['json'] }],
    })
// @ts-expect-error - TS7031 - Binding element 'filePaths' implicitly has an 'any' type.
    .then(({ filePaths }) => {
      if (!filePaths || !filePaths.length) return null;
      return { fileIdentifier: filePaths[0] };
    });
};

export const onOpen = (fileMetadata: FileMetadata): Promise<{
  content: any
}> => {
  const filePath = fileMetadata.fileIdentifier;
  const projectPath = path.dirname(filePath);
  return readJSONFile(filePath).then(object => {
    return unsplit(object, {
      getReferencePartialObject: referencePath => {
        return readJSONFile(path.join(projectPath, referencePath) + '.json');
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

export const getAutoSaveCreationDate = async (fileMetadata: FileMetadata, compareLastModified: boolean): Promise<number | null | undefined> => {
  const filePath = fileMetadata.fileIdentifier;
  const autoSavePath = filePath + '.autosave';
  if (fs.existsSync(autoSavePath)) {
    const autoSavedTime = fs.statSync(autoSavePath).mtime.getTime();
    if (!compareLastModified) {
      return autoSavedTime;
    }
    try {
      const saveTime = fs.statSync(filePath).mtime.getTime();
      // When comparing the last modified time, add a 5 seconds margin to avoid
      // showing the warning if the user has just saved the project, or if the
      // project has been decompressed from a zip file, causing the last modified
      // time to be the time of decompression.
      return autoSavedTime > saveTime + 5000 ? autoSavedTime : null;
    } catch (err: any) {
      console.error('Unable to compare *.autosave to project', err);
      return null;
    }
  }
  return null;
};

export const onGetAutoSave = (fileMetadata: FileMetadata) => {
  return Promise.resolve({
    ...fileMetadata,
    fileIdentifier: fileMetadata.fileIdentifier + '.autosave',
  });
};
