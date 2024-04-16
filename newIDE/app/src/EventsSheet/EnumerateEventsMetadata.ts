import flatten from 'lodash/flatten';
import { mapFor } from '../Utils/MapFor';
const gd: libGDevelop = global.gd;

export type EventMetadata = {
  type: string,
  fullName: string,
  description: string
};

export const enumerateEventsMetadata = (): Array<EventMetadata> => {
  const allExtensions = gd
    .asPlatform(gd.JsPlatform.get())
    .getAllPlatformExtensions();

  return flatten(
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    mapFor(0, allExtensions.size(), i => {
      const extension = allExtensions.at(i);
      const extensionEvents = extension.getAllEvents();

      return extensionEvents
        .keys()
        .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'type' implicitly has an 'any' type.
        .filter(type => type !== 'BuiltinAsync::Async')
// @ts-expect-error - TS7006 - Parameter 'type' implicitly has an 'any' type.
        .map(type => {
          const metadata = extensionEvents.get(type);
          return {
            type,
            fullName: metadata.getFullName(),
            description: metadata.getDescription(),
          };
        });
    })
  );
};
