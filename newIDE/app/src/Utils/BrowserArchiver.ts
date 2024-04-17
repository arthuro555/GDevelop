import { initializeZipJs } from './Zip.js';
import { downloadUrlsToBlobs, ItemResult } from './BlobDownloader';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'path-browserify'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/path-browserify/index.js' implicitly has an 'any' type.
import path from 'path-browserify';
import { shortenString } from './StringHelpers.js';

export type BlobFileDescriptor = {
  filePath: string;
  blob: Blob;
};

export type TextFileDescriptor = {
  filePath: string;
  text: string;
};

export type UrlFileDescriptor = {
  filePath: string;
  url: string;
};

function eachCallback<T>(
  array: Array<T>,
  callback: (arg1: T, arg2: () => void) => void,
  done: () => void
) {
  if (!array.length) {
    done();
    return;
  }
  let index = 0;

  const callNextCallback = () => {
    callback(array[index], () => {
      index++;
      if (index >= array.length) {
        done();
      } else {
        callNextCallback();
      }
    });
  };

  callNextCallback();
}

export const downloadUrlFilesToBlobFiles = async ({
  urlFiles,
  onProgress,
}: {
  urlFiles: Array<UrlFileDescriptor>;
  onProgress: (count: number, total: number) => void;
}): Promise<Array<BlobFileDescriptor>> => {
  const downloadedBlobs: Array<ItemResult<UrlFileDescriptor>> =
    await downloadUrlsToBlobs({
      urlContainers: urlFiles.filter(({ url }) => url.indexOf('.h') === -1), // Should be useless now, still keep it by safety.
      onProgress,
    });

  const erroredUrls = downloadedBlobs.filter((downloadedBlob) => {
    return !!downloadedBlob.error || !downloadedBlob.blob;
  });
  if (erroredUrls.length) {
    const errorMessages = erroredUrls
      .map(({ error }) =>
        error ? error.message : 'Unknown error during download.'
      )
      .filter(Boolean)
      .join(',\n');

    throw new Error(
      `Could not download ${erroredUrls.length} files:\n ${shortenString(
        errorMessages,
        300
      )}`
    );
  }

  // @ts-expect-error - TS2322 - Type '{ blob: Blob | undefined; filePath: string; }[]' is not assignable to type 'BlobFileDescriptor[]'.
  return downloadedBlobs.map(({ item, blob }) => {
    return {
      // $FlowFixMe - any non existing blob is discarded before.
      blob,
      filePath: item.filePath,
    };
  });
};

/**
 * Archive the specified blobs and texts into a zip file,
 * returned as a blob.
 */
export const archiveFiles = async ({
  textFiles,
  blobFiles,
  basePath,
  onProgress,
  sizeLimit,
}: {
  textFiles: Array<TextFileDescriptor>;
  blobFiles: Array<BlobFileDescriptor>;
  basePath: string;
  onProgress: (count: number, total: number) => void;
  sizeLimit?: number;
}): Promise<Blob> => {
  const zipJs: ZipJs = await initializeZipJs();

  let zippedFilesCount = 0;
  let totalFilesCount = blobFiles.length + textFiles.length;

  return new Promise(
    (
      resolve: (result: Promise<Blob> | Blob) => void,
      reject: (error?: any) => void
    ) => {
      zipJs.createWriter(
        new zipJs.BlobWriter('application/zip'),
        // @ts-expect-error - TS7006 - Parameter 'zipWriter' implicitly has an 'any' type.
        function (zipWriter) {
          eachCallback(
            blobFiles,
            ({ filePath, blob }, done) => {
              // All files in a zip are relative
              const relativeFilePath = path.relative(basePath, filePath);

              zipWriter.add(
                relativeFilePath,
                new zipJs.BlobReader(blob),
                () => {
                  zippedFilesCount++;
                  onProgress(zippedFilesCount, totalFilesCount);
                  done();
                },
                () => {
                  /* We don't track progress at the file level */
                }
              );
            },
            () => {
              eachCallback(
                textFiles,
                ({ filePath, text }, done) => {
                  // All files in a zip are relative
                  const relativeFilePath = path.relative(basePath, filePath);

                  zipWriter.add(
                    relativeFilePath,
                    new zipJs.TextReader(text),
                    () => {
                      zippedFilesCount++;
                      onProgress(zippedFilesCount, totalFilesCount);
                      done();
                    },
                    () => {
                      /* We don't track progress at the file level */
                    }
                  );
                },
                () => {
                  zipWriter.close((blob: Blob) => {
                    const fileSize = blob.size;
                    if (sizeLimit && fileSize > sizeLimit) {
                      const roundFileSizeInMb = Math.round(
                        fileSize / (1000 * 1000)
                      );
                      reject(
                        new Error(
                          `Archive is of size ${roundFileSizeInMb} MB, which is above the limit allowed of ${
                            sizeLimit / (1000 * 1000)
                          } MB.`
                        )
                      );
                    }
                    resolve(blob);
                  });
                }
              );
            }
          );
        },
        // @ts-expect-error - TS7006 - Parameter 'error' implicitly has an 'any' type.
        (error) => {
          console.error('Error while making zip:', error);
          reject(error);
        }
      );
    }
  );
};
