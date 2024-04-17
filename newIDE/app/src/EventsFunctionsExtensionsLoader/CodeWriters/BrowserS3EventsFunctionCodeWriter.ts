import {
  EventsFunctionCodeWriter,
  EventsFunctionCodeWriterCallbacks,
} from '..';
import { uploadObject, getBaseUrl } from '../../Utils/GDevelopServices/Preview';
import { makeTimestampedId } from '../../Utils/TimestampedId';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'slugs'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/slugs/slugs.js' implicitly has an 'any' type.
import slugs from 'slugs';

/**
 * Create the EventsFunctionCodeWriter that writes generated code for events functions
 * to temporary S3 files.
 */
export const makeBrowserS3EventsFunctionCodeWriter = ({
  onWriteFile,
}: EventsFunctionCodeWriterCallbacks): EventsFunctionCodeWriter => {
  const prefix = makeTimestampedId();
  const getPathFor = (codeNamespace: string) => {
    return `${prefix}/${slugs(codeNamespace)}.js`;
  };

  return {
    getIncludeFileFor: (codeNamespace: string) =>
      getBaseUrl() + getPathFor(codeNamespace),
    writeFunctionCode: (
      functionCodeNamespace: string,
      code: string
    ): Promise<void> => {
      const key = getPathFor(functionCodeNamespace);
      onWriteFile({ includeFile: key, content: code });
      console.log(`Uploading function generated code to ${key}...`);
      return uploadObject({
        Key: getPathFor(functionCodeNamespace),
        Body: code,
        ContentType: 'text/javascript',
      });
    },
    writeBehaviorCode: (
      behaviorCodeNamespace: string,
      code: string
    ): Promise<void> => {
      const key = getPathFor(behaviorCodeNamespace);
      onWriteFile({ includeFile: key, content: code });
      console.log(`Uploading behavior generated code to ${key}...`);
      return uploadObject({
        Key: getPathFor(behaviorCodeNamespace),
        Body: code,
        ContentType: 'text/javascript',
      });
    },
    writeObjectCode: (
      objectCodeNamespace: string,
      code: string
    ): Promise<void> => {
      const key = getPathFor(objectCodeNamespace);
      onWriteFile({ includeFile: key, content: code });
      console.log(`Uploading object generated code to ${key}...`);
      return uploadObject({
        Key: getPathFor(objectCodeNamespace),
        Body: code,
        ContentType: 'text/javascript',
      });
    },
  };
};
