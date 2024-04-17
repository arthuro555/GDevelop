import optionalRequire from '../../Utils/OptionalRequire';
const fs = optionalRequire('fs');
const remote = optionalRequire('@electron/remote');
const dialog = remote ? remote.dialog : null;

const readJSONFile = (filepath: string): Promise<any> => {
  if (!fs) return Promise.reject('Filesystem is not supported.');

  return new Promise(
    (
      resolve: (result: Promise<never>) => void,
      reject: (error?: any) => void
    ) => {
      // @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type. | TS7006 - Parameter 'data' implicitly has an 'any' type.
      fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
        if (err) return reject(err);

        try {
          const dataObject = JSON.parse(data);
          return resolve(dataObject);
        } catch (ex) {
          return reject(filepath + ' is a corrupted/malformed file.');
        }
      });
    }
  );
};

export default class LocalEventsFunctionsExtensionOpener {
  static chooseEventsFunctionExtensionFile = (): Promise<
    string | null | undefined
  > => {
    if (!dialog) return Promise.reject('Not supported');
    const browserWindow = remote.getCurrentWindow();

    return (
      dialog
        .showOpenDialog(browserWindow, {
          title: 'Import an extension in the project',
          properties: ['openFile'],
          message: 'Choose an extension file to import (.json file)',
          filters: [
            {
              name: 'GDevelop 5 "events based" extension',
              extensions: ['json'],
            },
          ],
        })
        // @ts-expect-error - TS7031 - Binding element 'filePaths' implicitly has an 'any' type.
        .then(({ filePaths }) => {
          if (!filePaths || !filePaths.length) return null;
          return filePaths[0];
        })
    );
  };

  static readEventsFunctionExtensionFile = (filepath: string): Promise<any> => {
    return readJSONFile(filepath);
  };
}
