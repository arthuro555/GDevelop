import {serializeToJSObject} from '../../Utils/Serializer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
const fs = optionalRequire('fs-extra');
const path = optionalRequire('path');
const remote = optionalRequire('@electron/remote');
const dialog = remote ? remote.dialog : null;

const writeJSONFile = (object: any, filepath: string): Promise<void> => {
  if (!fs) return Promise.reject(new Error('Filesystem is not supported.'));

  try {
    const content = JSON.stringify(object, null, 2);
    return fs.ensureDir(path.dirname(filepath)).then(
      () =>
        new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
          fs.writeFile(filepath, content, (err?: Error | null) => {
            if (err) {
              return reject(err);
            }

// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
            return resolve();
          });
        })
    );
  } catch (stringifyException: any) {
    return Promise.reject(stringifyException);
  }
};

export default class LocalEventsFunctionsExtensionWriter {
  static chooseEventsFunctionExtensionFile = (extensionName?: string): Promise<string | null | undefined> => {
    if (!dialog) return Promise.reject('Not supported');
    const browserWindow = remote.getCurrentWindow();

    return dialog
      .showSaveDialog(browserWindow, {
        title: 'Export an extension of the project',
        filters: [
          {
            name: 'GDevelop 5 "events based" extension',
            extensions: ['json'],
          },
        ],
        defaultPath: extensionName || 'Extension.json',
      })
// @ts-expect-error - TS7031 - Binding element 'filePath' implicitly has an 'any' type.
      .then(({ filePath }) => {
        if (!filePath) return null;
        return filePath;
      });
  };

  static writeEventsFunctionsExtension = (extension: gdEventsFunctionsExtension, filepath: string): Promise<void> => {
    const serializedObject = serializeToJSObject(extension);
    return writeJSONFile(serializedObject, filepath).catch(err => {
      console.error('Unable to write the events function extension:', err);
      throw err;
    });
  };
}
