// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;

type UploadOptions = {
  signedUrl: string,
  contentType: string
};

export const uploadLocalFile = (
  localFilePath: string,
  uploadOptions: UploadOptions,
  onProgress: (progress: number, total: number) => void,
): Promise<void> => {
  if (!ipcRenderer) return Promise.reject('No support for local file upload');

  ipcRenderer.removeAllListeners('local-file-upload-progress');
  ipcRenderer.removeAllListeners('local-file-upload-done');

  return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
    ipcRenderer.on(
      'local-file-upload-progress',
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'stepCurrentProgress' implicitly has an 'any' type. | TS7006 - Parameter 'stepMaxProgress' implicitly has an 'any' type.
      (event, stepCurrentProgress, stepMaxProgress) => {
        onProgress(stepCurrentProgress, stepMaxProgress);
      }
    );
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type. | TS7006 - Parameter 'err' implicitly has an 'any' type.
    ipcRenderer.on('local-file-upload-done', (event, err) => {
      if (err) return reject(err);
// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
      resolve();
    });
    ipcRenderer.send('local-file-upload', localFilePath, uploadOptions);
  });
};
