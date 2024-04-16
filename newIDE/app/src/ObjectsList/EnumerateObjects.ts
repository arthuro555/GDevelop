import {mapFor} from '../Utils/MapFor';
import flatten from 'lodash/flatten';
import { RequiredExtension } from '../AssetStore/InstallAsset';

const gd: libGDevelop = global.gd;

export type EnumeratedObjectMetadata = {
  extension: gdPlatformExtension,
  objectMetadata: gdObjectMetadata,
  name: string,
  fullName: string,
  description: string,
  iconFilename: string,
  categoryFullName: string,
  assetStorePackTag?: string,
  requiredExtensions?: Array<RequiredExtension>
};

export type ObjectWithContext = {
  object: gdObject,
  global: boolean
};

export type GroupWithContext = {
  group: gdObjectGroup,
  global: boolean
};

export type ObjectWithContextList = Array<ObjectWithContext>;
export type GroupWithContextList = Array<GroupWithContext>;

export const isSameGroupWithContext = (groupWithContext?: GroupWithContext | null) => (
  other?: GroupWithContext | null
) => {
  return (
    groupWithContext &&
    other &&
    groupWithContext.global === other.global &&
    groupWithContext.group === other.group
  );
};

export const isSameObjectWithContext = (
  objectWithContext?: ObjectWithContext | null
) => (other?: ObjectWithContext | null) => {
  return (
    objectWithContext &&
    other &&
    objectWithContext.global === other.global &&
    objectWithContext.object === other.object
  );
};

export const enumerateObjects = (
  project: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  filters?: {
    type?: string,
    names?: Array<string>
  } | null
) => {
  const typeFilter = (filters && filters.type) || null;
  const namesFilter = (filters && filters.names) || null;
  const filterObjectByType = typeFilter
    ? (object: gdObject): boolean => {
        return (
          gd.getTypeOfObject(
            project,
            objectsContainer,
            object.getName(),
            false
          ) === typeFilter
        );
      }
    : null;

  const filterObjectByName = namesFilter
    ? (object: gdObject): boolean => {
        return namesFilter.includes(object.getName());
      }
    : null;

  let containerObjectsList: ObjectWithContextList = mapFor(
    0,
    objectsContainer.getObjectsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    i => {
      const object = objectsContainer.getObjectAt(i);
      if (filterObjectByType && !filterObjectByType(object)) {
        return null;
      }
      if (filterObjectByName && !filterObjectByName(object)) {
        return null;
      }
      return object;
    }
  )
    .filter(Boolean)
    .map((object: gdObject): ObjectWithContext => ({ object, global: false }));

  const projectObjectsList: ObjectWithContextList =
    project === objectsContainer
      ? []
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
      : mapFor(0, project.getObjectsCount(), i => {
          const object = project.getObjectAt(i);
          if (filterObjectByType && !filterObjectByType(object)) {
            return null;
          }
          if (filterObjectByName && !filterObjectByName(object)) {
            return null;
          }
          return object;
        })
          .filter(Boolean)
          .map(
            (object: gdObject): ObjectWithContext => ({
              object,
              global: true,
            })
          );

  const allObjectsList: ObjectWithContextList = containerObjectsList.concat(
    projectObjectsList
  );

  return {
    containerObjectsList,
    projectObjectsList,
    allObjectsList,
  };
};

export const enumerateObjectTypes = (project: gdProject): Array<EnumeratedObjectMetadata> => {
  const platform = project.getCurrentPlatform();
  const extensionsList = platform.getAllPlatformExtensions();

  return flatten(
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    mapFor(0, extensionsList.size(), i => {
      const extension = extensionsList.at(i);

      return extension
        .getExtensionObjectsTypes()
        .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'objectType' implicitly has an 'any' type.
        .map(objectType => extension.getObjectMetadata(objectType))
// @ts-expect-error - TS7006 - Parameter 'objectMetadata' implicitly has an 'any' type.
        .filter(objectMetadata => !objectMetadata.isHidden())
// @ts-expect-error - TS7006 - Parameter 'objectMetadata' implicitly has an 'any' type.
        .map(objectMetadata => ({
          extension,
          objectMetadata,
          name: objectMetadata.getName(),
          fullName: objectMetadata.getFullName(),
          description: objectMetadata.getDescription(),
          iconFilename: objectMetadata.getIconFilename(),
          categoryFullName: objectMetadata.getCategoryFullName(),
        }));
    })
  );
};

export type ObjectFilteringOptions = {
  searchText: string,
  hideExactMatches?: boolean
};

export const filterObjectsList = (
  list: ObjectWithContextList,
  {
    searchText,
    hideExactMatches,
  }: ObjectFilteringOptions,
): ObjectWithContextList => {
  if (!searchText) return list;

  return list.filter((objectWithContext: ObjectWithContext) => {
    const objectName = objectWithContext.object.getName();

    if (hideExactMatches && searchText === objectName) return undefined;

    return objectName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });
};

export type GroupFilteringOptions = {
  searchText: string,
  hideExactMatches?: boolean
};

export const filterGroupsList = (
  list: GroupWithContextList,
  {
    searchText,
    hideExactMatches,
  }: GroupFilteringOptions,
): GroupWithContextList => {
  if (!searchText) return list;

  return list.filter((groupWithContext: GroupWithContext) => {
    const groupName = groupWithContext.group.getName();

    if (hideExactMatches && groupName === searchText) return undefined;

    return groupName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  });
};

export const enumerateGroups = (objectGroups: gdObjectGroupsContainer): Array<gdObjectGroup> => {
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  return mapFor(0, objectGroups.count(), i => {
    return objectGroups.getAt(i);
  });
};

export const enumerateObjectsAndGroups = (
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
// @ts-expect-error - TS2322 - Type 'undefined' is not assignable to type 'string | null'.
  objectType: string | null = undefined,
  requiredBehaviorTypes: Array<string> = []
) => {
  const filterObject = (object: gdObject): boolean => {
    return (
      (!objectType ||
        gd.getTypeOfObject(
          globalObjectsContainer,
          objectsContainer,
          object.getName(),
          false
        ) === objectType) &&
      requiredBehaviorTypes.every(
        requiredBehaviorType =>
          gd
            .getBehaviorNamesInObjectOrGroup(
              globalObjectsContainer,
              objectsContainer,
              object.getName(),
              requiredBehaviorType,
              false
            )
            .size() > 0
      )
    );
  };
  const filterGroup = (group: gdObjectGroup): boolean => {
    return (
      (!objectType ||
        gd.getTypeOfObject(
          globalObjectsContainer,
          objectsContainer,
          group.getName(),
          true
        ) === objectType) &&
      requiredBehaviorTypes.every(
        behaviorType =>
          gd
            .getBehaviorNamesInObjectOrGroup(
              globalObjectsContainer,
              objectsContainer,
              group.getName(),
              behaviorType,
              true
            )
            .size() > 0
      )
    );
  };

  const containerObjectsList: ObjectWithContextList = mapFor(
    0,
    objectsContainer.getObjectsCount(),
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
    i => objectsContainer.getObjectAt(i)
  )
    .filter(filterObject)
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type.
    .map(object => ({ object, global: false }));

  const containerGroups = objectsContainer.getObjectGroups();
  const containerGroupsList: GroupWithContextList = enumerateGroups(
    containerGroups
  )
    .filter(filterGroup)
    .map(group => ({ group, global: false }));

  const projectObjectsList: ObjectWithContextList =
    globalObjectsContainer === objectsContainer
      ? []
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
      : mapFor(0, globalObjectsContainer.getObjectsCount(), i =>
          globalObjectsContainer.getObjectAt(i)
        )
          .filter(filterObject)
// @ts-expect-error - TS7006 - Parameter 'object' implicitly has an 'any' type.
          .map(object => ({ object, global: true }));

  const projectGroups = globalObjectsContainer.getObjectGroups();
  const projectGroupsList: GroupWithContextList =
    globalObjectsContainer === objectsContainer
      ? []
      : enumerateGroups(projectGroups)
          .filter(filterGroup)
          .map(group => ({ group, global: true }));

  const allObjectsList: ObjectWithContextList = containerObjectsList.concat(
    projectObjectsList
  );
  const allGroupsList: GroupWithContextList = containerGroupsList.concat(
    projectGroupsList
  );

  return {
    allObjectsList,
    allGroupsList,
  };
};
