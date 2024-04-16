// @ts-expect-error - TS7016 - Could not find a declaration file for module './Crypto/sha512'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/Crypto/sha512.js' implicitly has an 'any' type.
import jsSHA from './Crypto/sha512';

const digestWithSha512TruncatedTo256 = (arrayBuffer: ArrayBuffer): Promise<string> => {
  if (crypto && crypto.subtle) {
    crypto.subtle.digest('SHA-512', arrayBuffer).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHexString = hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      return hashHexString.substr(0, 64);
    });
  }

  // In some environments, crypto.subtle is not available. This is the case
  // for a development app accessed from local network outside HTTPS (http://192.168.x.x...).
  console.warn(
    'crypto.subtle is not available in this environment - using jsSHA instead.'
  );

  const shaObj = new jsSHA('SHA-512', 'ARRAYBUFFER');
  shaObj.update(arrayBuffer);
  const hashHexString = shaObj.getHash('HEX');
  return Promise.resolve(hashHexString.substr(0, 64));
};

export const getFileSha512TruncatedTo256 = async (file: File): Promise<string> => {
  return new Promise((resolve: (result: Promise<string> | string) => void, reject: (error?: any) => void) => {
    const fileReader = new FileReader();

    fileReader.onload = function(event: ProgressEvent) {
      const arrayBuffer: string | ArrayBuffer | null = event.target
        ? // $FlowFixMe - using the type inferred by TypeScript.
// @ts-expect-error - TS2339 - Property 'result' does not exist on type 'EventTarget'.
          event.target.result
        : null;
      if (arrayBuffer instanceof ArrayBuffer) {
        resolve(digestWithSha512TruncatedTo256(arrayBuffer));
        return;
      }

      reject(new Error('Error reading file (arraybuffer issue).'));
    };

    fileReader.onerror = () => {
      reject(new Error('Error reading file (errored).'));
    };

    fileReader.onabort = () => {
      reject(new Error('Error reading file (aborted).'));
    };

    fileReader.readAsArrayBuffer(file);
  });
};
