// TODO: This module could be published on npm if useful.
import newNameGenerator from './NewNameGenerator';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'slugs'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/slugs/slugs.js' implicitly has an 'any' type.
import slugs from 'slugs';

export type PartialObjectDescription = {
  reference: string;
  object: any;
};

type Reference = {
  referenceTo: string;
};

type SplitConfiguration = {
  pathSeparator: string;
  getArrayItemReferenceName: (object: any, currentReference: string) => string;
  shouldSplit: (path: string) => boolean;
  isReferenceMagicPropertyName: string;
};

type UnsplitConfiguration = {
  isReferenceMagicPropertyName: string;
  getReferencePartialObject: (referencePath: string) => Promise<any>;
  maxUnsplitDepth?: number;
};

/**
 * Mutate the given object to split it into multiple partial objects.
 * Partial objects will be replaced by references.
 *
 * @param object The object to be split.
 * @param configuration Configuration to be used to split the object.
 */
export const split = (
  object: any,
  {
    pathSeparator,
    getArrayItemReferenceName,
    shouldSplit,
    isReferenceMagicPropertyName,
  }: SplitConfiguration
): Array<PartialObjectDescription> => {
  const partialObjects: Array<PartialObjectDescription> = [];
  const createReference = (reference: string, object: any): Reference => {
    partialObjects.push({
      reference,
      object,
    });

    return {
      [isReferenceMagicPropertyName]: true,
      referenceTo: reference,
    };
  };

  const splitObject = (
    currentObject: any,
    currentPath: string,
    currentReference: string
  ) => {
    if (currentObject !== null && typeof currentObject === 'object') {
      if (Array.isArray(currentObject)) {
        for (let index in currentObject) {
          const itemPath = currentPath + pathSeparator + '*';
          if (shouldSplit(itemPath)) {
            const partialObject = currentObject[index];
            const name = getArrayItemReferenceName(
              partialObject,
              currentReference
            );
            const itemReference = currentReference + pathSeparator + name;

            currentObject[index] = createReference(
              itemReference,
              partialObject
            );

            splitObject(partialObject, itemPath, itemReference);
          } else {
            const itemReference = currentReference + pathSeparator + index;

            splitObject(currentObject[index], itemPath, itemReference);
          }
        }
      } else {
        for (let propertyName in currentObject) {
          const propertyPath = currentPath + pathSeparator + propertyName;
          const propertyReference =
            currentReference + pathSeparator + propertyName;
          if (shouldSplit(propertyPath)) {
            const partialObject = currentObject[propertyName];

            currentObject[propertyName] = createReference(
              propertyReference,
              partialObject
            );

            splitObject(partialObject, propertyPath, propertyReference);
          } else {
            splitObject(
              currentObject[propertyName],
              propertyPath,
              propertyReference
            );
          }
        }
      }
    }
  };

  splitObject(object, '', '');
  return partialObjects;
};

/**
 * Mutate the given object to recompose it from partial objects.
 * References to partial objects will be fetched as needed.
 *
 * @param object The object to be unsplit.
 * @param configuration Configuration to be used to unsplit the object.
 */
export const unsplit = (
  object: any,
  {
    isReferenceMagicPropertyName,
    getReferencePartialObject,
    maxUnsplitDepth,
  }: UnsplitConfiguration
): Promise<void> => {
  const isReference = (object: any): Reference | null | undefined => {
    if (object[isReferenceMagicPropertyName] === true) {
      return object;
    }

    return null;
  };

  const unsplitObject = (currentObject: any, depth: number): Promise<void> => {
    if (maxUnsplitDepth !== undefined && depth >= maxUnsplitDepth) {
      return Promise.resolve();
    }

    if (currentObject !== null && typeof currentObject === 'object') {
      const keys = Object.keys(currentObject);
      if (keys) {
        return Promise.all(
          keys.map((indexOrPropertyName) => {
            const reference = isReference(currentObject[indexOrPropertyName]);
            if (reference) {
              return getReferencePartialObject(reference.referenceTo).then(
                (partialObject) => {
                  currentObject[indexOrPropertyName] = partialObject;

                  return unsplitObject(
                    currentObject[indexOrPropertyName],
                    depth + 1
                  );
                }
              );
            }

            return unsplitObject(currentObject[indexOrPropertyName], depth + 1);
          })
        ).then(() => {});
      }
    }

    return Promise.resolve();
  };

  return unsplitObject(object, 0);
};

/**
 * A helper that can be used to split according to a list of hardcoded paths
 */
export const splitPaths = (paths: Set<string>) => {
  return (path: string) => paths.has(path);
};

/**
 * A helper that can be used to get the name of items in array using an hardcoded property name.
 */
export const getNameFromProperty = (propertyName: string) => {
  return (object: any): string => {
    const property = object[propertyName];
    if (typeof property !== 'string') {
      throw new Error(`Property ${propertyName} is not a string`);
    }

    return property;
  };
};

/**
 * A helper that can be used to get the name of items in array using an hardcoded property name.
 */
export const getSlugifiedUniqueNameFromProperty = (propertyName: string) => {
  const existingNamesForReference: Record<string, any> = {};

  return (object: any, currentReference: string): string => {
    const property = object[propertyName];
    if (typeof property !== 'string') {
      throw new Error(`Property ${propertyName} is not a string`);
    }

    existingNamesForReference[currentReference] =
      existingNamesForReference[currentReference] || {};
    const newName = newNameGenerator(
      slugs(property),
      (name) => !!existingNamesForReference[currentReference][name]
    );
    existingNamesForReference[currentReference][newName] = true;
    return newName;
  };
};
