import {mapFor} from '../Utils/MapFor';
import flatten from 'lodash/flatten';

export type EnumeratedBehaviorMetadata = {
  extension: gdPlatformExtension,
  behaviorMetadata: gdBehaviorMetadata,
  type: string,
  objectType: string,
  defaultName: string,
  fullName: string,
  description: string,
  previewIconUrl: string,
  category: string,
  tags: Array<string>
};

export const enumerateBehaviorsMetadata = (
  platform: gdPlatform,
  project: gdProject,
  eventsFunctionsExtension?: gdEventsFunctionsExtension,
): Array<EnumeratedBehaviorMetadata> => {
  const extensionsList = platform.getAllPlatformExtensions();

  return flatten(
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    mapFor(0, extensionsList.size(), i => {
      const extension = extensionsList.at(i);

      return extension
        .getBehaviorsTypes()
        .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'behaviorType' implicitly has an 'any' type.
        .map(behaviorType => ({
          behaviorType,
          behaviorMetadata: extension.getBehaviorMetadata(behaviorType),
        }))
        .filter(
// @ts-expect-error - TS7031 - Binding element 'behaviorMetadata' implicitly has an 'any' type.
          ({ behaviorMetadata }) =>
            !behaviorMetadata.isPrivate() ||
            (eventsFunctionsExtension &&
              extension.getName() === eventsFunctionsExtension.getName())
        )
// @ts-expect-error - TS7031 - Binding element 'behaviorType' implicitly has an 'any' type. | TS7031 - Binding element 'behaviorMetadata' implicitly has an 'any' type.
        .map(({ behaviorType, behaviorMetadata }) => ({
          extension,
          behaviorMetadata,
          type: behaviorType,
          defaultName: behaviorMetadata.getDefaultName(),
          fullName: behaviorMetadata.getFullName(),
          description: behaviorMetadata.getDescription(),
          previewIconUrl: behaviorMetadata.getIconFilename(),
          objectType: behaviorMetadata.getObjectType(),
          category: extension.getCategory(),
          tags: extension.getTags().toJSArray(),
        }));
    })
  );
};

export const filterEnumeratedBehaviorMetadata = (list: Array<EnumeratedBehaviorMetadata>, searchText: string): Array<EnumeratedBehaviorMetadata> => {
  if (!searchText) return list;

  const lowercaseSearchText = searchText.toLowerCase();

  return list.filter(enumerateBehaviorsMetadata => {
    return (
      enumerateBehaviorsMetadata.fullName
        .toLowerCase()
        .indexOf(lowercaseSearchText) !== -1 ||
      enumerateBehaviorsMetadata.description
        .toLowerCase()
        .indexOf(lowercaseSearchText) !== -1
    );
  });
};
