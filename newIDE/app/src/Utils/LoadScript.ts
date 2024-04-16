/**
 * Load a script from the specified source. The returned promise
 * resolves when the script is loaded.
 * @param source The script source
 */
export const loadScript = (source: string): Promise<void> => {
  return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
    if (typeof document === 'undefined') {
      reject(
        new Error('loadScript is only supported in a browser environment.')
      );
      return;
    }

    const { body } = document;
    if (!body) {
      reject(
        new Error('loadScript is only supported in a browser environment.')
      );
      return;
    }

    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = source;
// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
    scriptElement.onload = () => resolve();
    scriptElement.onerror = error: any => reject(error);
    scriptElement.onabort = error: any => reject(error);

    body.appendChild(scriptElement);
  });
};
