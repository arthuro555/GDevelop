import {EventsFunctionCodeWriter, EventsFunctionCodeWriterCallbacks} from '..';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import { getUID } from '../../Utils/LocalUserInfo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'slugs'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/slugs/slugs.js' implicitly has an 'any' type.
import slugs from 'slugs';
const path = optionalRequire('path');
const os = optionalRequire('os');
const fs = optionalRequire('fs');

/**
 * Create the EventsFunctionCodeWriter that writes generated code for events functions
 * to local files.
 */
export const makeLocalEventsFunctionCodeWriter = (
  {
    onWriteFile,
  }: EventsFunctionCodeWriterCallbacks,
): EventsFunctionCodeWriter => {
  // The generated code for extensions will be stored in a temporary directory

  const outputDir = path.join(
    os.tmpdir(),
    `GDGeneratedEventsFunctions-` + getUID()
  );
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type.
  fs.mkdir(outputDir, err => {
    if (err && err.code !== 'EEXIST') {
      console.error(
        'Unable to create the directory where to output events functions generated code: ',
        err
      );
      return;
    }
  });

  const getPathFor = (codeNamespace: string) => {
    return `${outputDir}/${slugs(codeNamespace)}.js`;
  };

  return {
    getIncludeFileFor: (codeNamespace: string) => getPathFor(codeNamespace),
    writeFunctionCode: (functionCodeNamespace: string, code: string): Promise<void> => {
      return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
        const includeFile = getPathFor(functionCodeNamespace);
        onWriteFile({ includeFile, content: code });
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type.
        fs.writeFile(includeFile, code, err => {
          if (err) return reject(err);

// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve();
        });
      });
    },
    writeBehaviorCode: (behaviorCodeNamespace: string, code: string): Promise<void> => {
      return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
        const includeFile = getPathFor(behaviorCodeNamespace);
        onWriteFile({ includeFile, content: code });
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type.
        fs.writeFile(includeFile, code, err => {
          if (err) return reject(err);

// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve();
        });
      });
    },
    writeObjectCode: (objectCodeNamespace: string, code: string): Promise<void> => {
      return new Promise((resolve: (result: Promise<undefined> | undefined) => void, reject: (error?: any) => void) => {
        const includeFile = getPathFor(objectCodeNamespace);
        onWriteFile({ includeFile, content: code });
// @ts-expect-error - TS7006 - Parameter 'err' implicitly has an 'any' type.
        fs.writeFile(includeFile, code, err => {
          if (err) return reject(err);

// @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve();
        });
      });
    },
  };
};
