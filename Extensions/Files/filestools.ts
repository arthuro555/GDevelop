namespace gdjs {
  export namespace evtTools {
    export namespace files {
      const logger = new gdjs.Logger('File Variables');

      export function getFileName(file: gdjs.Variable): string {
        return file.getFileDescriptor()?.name || '';
      }

      export function getFileType(file: gdjs.Variable): string {
        return file.getFileDescriptor()?.mimeType || '';
      }

      export function readAsText(
        file: gdjs.Variable,
        output: gdjs.Variable
      ): gdjs.AsyncTask {
        const fd = file.getFileDescriptor();
        if (!fd) {
          logger.error('Cannot read a non-file variable as a file!');
          return new gdjs.ResolveTask();
        }

        return new gdjs.PromiseTask(
          fd
            .getAsText()
            .then((text) => {
              output.setString(text);
            })
            .catch((e: Error) => {
              logger.error(`Couldn't read file as text: ${e.message}`);
            })
        );
      }

      export function readAsByteArray(
        file: gdjs.Variable,
        output: gdjs.Variable
      ): gdjs.AsyncTask {
        const fd = file.getFileDescriptor();
        if (!fd) {
          logger.error('Cannot read a non-file variable as a file!');
          return new gdjs.ResolveTask();
        }

        return new gdjs.PromiseTask(
          fd
            .getBinaryContents()
            .then((arrayBuffer) => {
              output.fromJSObject(new Uint8Array(arrayBuffer));
            })
            .catch((e: Error) => {
              logger.error(`Couldn't read file as text: ${e.message}`);
            })
        );
      }

      export function openFile(
        file: gdjs.Variable,
        acceptedTypes: string = '*',
        multiple: boolean = false
      ): gdjs.AsyncTask {
        if (!globalThis.document) {
          logger.error(
            'Cannot open the file selection dialog, not running in a graphical environment!'
          );
          return new gdjs.ResolveTask();
        }

        const input = document.createElement('input');
        Object.assign(input, {
          type: 'file',
          style: 'display: none;',
          accept: acceptedTypes,
          multiple,
        });

        return new gdjs.PromiseTask(
          new Promise<void>((resolve, reject) => {
            input.onchange = () => {
              if (!input.files || input.files.length === 0) return;

              if (multiple) {
                file.castTo('array');
                file.clearChildren();
                const fileCount = input.files.length;
                for (let i = 0; i < fileCount; i++) {
                  const child = file.getChildAt(i);
                  child.storeFileReference(
                    new gdjs.FileDescriptor.WebFileFD(input.files[i])
                  );
                }
              } else {
                file.storeFileReference(
                  new gdjs.FileDescriptor.WebFileFD(input.files[0])
                );
              }

              resolve();
            };
            input.oncancel = () => {
              reject();
            };

            input.click();
          }).catch(() => {
            // TODO: reflect whether we need to explicitly tell the user somehow the input was cancelled,
            //       or if the fact the variable was unchanged yet the promised resolved enough.
          })
        );
      }

      export function loadUrl(
        file: gdjs.Variable,
        url: string,
        lazy: boolean = true
      ) {
        file.storeFileReference(new gdjs.FileDescriptor.UrlFD(url, lazy));
      }
    }
  }
}
