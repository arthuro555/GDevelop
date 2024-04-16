import {initializeZipJs} from '.';

export const unzipFirstEntryOfBlob = async (zippedBlob: Blob): Promise<string> => {
  const zipJs: ZipJs = await initializeZipJs();

  return new Promise((resolve: (result: Promise<never>) => void, reject: (error?: any) => void) => {
    zipJs.createReader(
      new zipJs.BlobReader(zippedBlob),
// @ts-expect-error - TS7006 - Parameter 'zipReader' implicitly has an 'any' type.
      zipReader => {
// @ts-expect-error - TS7006 - Parameter 'entries' implicitly has an 'any' type.
        zipReader.getEntries(entries => {
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type.
          entries[0].getData(new zipJs.TextWriter(), result => {
            resolve(result);
          });
        });
      },
// @ts-expect-error - TS7006 - Parameter 'error' implicitly has an 'any' type.
      error => {
        console.error('An error occurred when unzipping blob', error);
        reject(error);
      }
    );
  });
};

export const createZipWithSingleTextFile = async (textFileContent: string, fileName: string = 'file.txt'): Promise<Blob> => {
  const zipJs: ZipJs = await initializeZipJs();
  const textReader = new zipJs.TextReader(textFileContent);

  return new Promise((resolve: (result: Promise<never>) => void, reject: (error?: any) => void) => {
    zipJs.createWriter(
      new zipJs.BlobWriter('application/zip'),
// @ts-expect-error - TS7006 - Parameter 'zipWriter' implicitly has an 'any' type.
      zipWriter => {
        zipWriter.add(fileName, textReader, () => {
// @ts-expect-error - TS7006 - Parameter 'blob' implicitly has an 'any' type.
          zipWriter.close(blob => {
            resolve(blob);
          });
        });
      },
// @ts-expect-error - TS7006 - Parameter 'error' implicitly has an 'any' type.
      error => {
        console.error('An error occurred when zipping content', error);
        reject(error);
      }
    );
  });
};
