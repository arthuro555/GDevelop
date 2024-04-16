// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import {
  EnumeratedExpressionMetadata,
  InstructionOrExpressionScope,
} from './EnumeratedInstructionOrExpressionMetadata';
import { mapVector } from '../Utils/MapFor';
import flatten from 'lodash/flatten';
import { getExtensionPrefix } from './EnumerateInstructions';
const gd: libGDevelop = global.gd;

const GROUP_DELIMITER = '/';

const shouldOnlyBeNumberType = (type: string) => type === 'number';

const enumerateExpressionMetadataMap = (
  prefix: string,
  expressions: gdMapStringExpressionMetadata,
  scope: InstructionOrExpressionScope,
): Array<EnumeratedExpressionMetadata> => {
// @ts-expect-error - TS7006 - Parameter 'expressionType' implicitly has an 'any' type.
  return mapVector(expressions.keys(), expressionType => {
    const exprMetadata = expressions.get(expressionType);
    if (!exprMetadata.isShown()) {
      return null; // Skip hidden expressions
    }

    let parameters: Array<gdParameterMetadata> = [];
    for (let i = 0; i < exprMetadata.getParametersCount(); i++) {
      if (scope.objectMetadata && i === 0) continue;
      if (scope.behaviorMetadata && i <= 1) continue; //Skip object and behavior parameters
      if (exprMetadata.getParameter(i).isCodeOnly()) continue;

      parameters.push(exprMetadata.getParameter(i));
    }

    const groupName = exprMetadata.getGroup();

    return {
      type: expressionType,
      name: expressionType,
      displayedName: exprMetadata.getFullName(),
      fullGroupName: [prefix, groupName].filter(Boolean).join(GROUP_DELIMITER),
      iconFilename: exprMetadata.getSmallIconFilename(),
      metadata: exprMetadata,
      parameters: parameters,
      scope,
      isPrivate: exprMetadata.isPrivate(),
      isRelevantForLayoutEvents: exprMetadata.isRelevantForLayoutEvents(),
      isRelevantForFunctionEvents: exprMetadata.isRelevantForFunctionEvents(),
      isRelevantForAsynchronousFunctionEvents: exprMetadata.isRelevantForAsynchronousFunctionEvents(),
      isRelevantForCustomObjectEvents: exprMetadata.isRelevantForCustomObjectEvents(),
    };
  }).filter(Boolean);
};

/** Enumerate all the free expressions available. */
export const enumerateFreeExpressions = (type: string, i18n: I18nType): Array<EnumeratedExpressionMetadata> => {
  const allExtensions = gd
    .asPlatform(gd.JsPlatform.get())
    .getAllPlatformExtensions();

  return flatten(
// @ts-expect-error - TS7006 - Parameter 'extension' implicitly has an 'any' type.
    mapVector(allExtensions, extension => {
      const prefix = getExtensionPrefix(extension, i18n);
      const scope = {
        extension,
        objectMetadata: undefined,
        behaviorMetadata: undefined,
      } as const;

      return [
        ...(!shouldOnlyBeNumberType(type)
          ? enumerateExpressionMetadataMap(
              prefix,
              extension.getAllStrExpressions(),
              scope
            )
          : []),
        ...enumerateExpressionMetadataMap(
          prefix,
          extension.getAllExpressions(),
          scope
        ),
      ];
    })
  );
};

/** Enumerate the expressions available for the given object type. */
export const enumerateObjectExpressions = (type: string, objectType: string): Array<EnumeratedExpressionMetadata> => {
  const extensionAndObjectMetadata = gd.MetadataProvider.getExtensionAndObjectMetadata(
    gd.JsPlatform.get(),
    objectType
  );
  const extension = extensionAndObjectMetadata.getExtension();
  const objectMetadata = extensionAndObjectMetadata.getMetadata();
  const scope = { extension, objectMetadata } as const;

  let objectsExpressions = [
    ...(shouldOnlyBeNumberType(type)
      ? []
      : enumerateExpressionMetadataMap(
          '',
          extension.getAllStrExpressionsForObject(objectType),
          scope
        )),
    ...enumerateExpressionMetadataMap(
      '',
      extension.getAllExpressionsForObject(objectType),
      scope
    ),
  ];

  const baseObjectType = ''; /* An empty string means the base object */
  if (objectType !== baseObjectType) {
    const extensionAndObjectMetadata = gd.MetadataProvider.getExtensionAndObjectMetadata(
      gd.JsPlatform.get(),
      baseObjectType
    );
    const extension = extensionAndObjectMetadata.getExtension();

    objectsExpressions = [
      ...objectsExpressions,
      ...(shouldOnlyBeNumberType(type)
        ? []
        : enumerateExpressionMetadataMap(
            '',
            extension.getAllStrExpressionsForObject(baseObjectType),
            scope
          )),
      ...enumerateExpressionMetadataMap(
        '',
        extension.getAllExpressionsForObject(baseObjectType),
        scope
      ),
    ];
  }

  return objectsExpressions;
};

/** Enumerate the expressions available for the given behavior type. */
export const enumerateBehaviorExpressions = (type: string, behaviorType: string): Array<EnumeratedExpressionMetadata> => {
  const extensionAndBehaviorMetadata = gd.MetadataProvider.getExtensionAndBehaviorMetadata(
    gd.JsPlatform.get(),
    behaviorType
  );
  const extension = extensionAndBehaviorMetadata.getExtension();
  const behaviorMetadata = extensionAndBehaviorMetadata.getMetadata();
  const scope = { extension, behaviorMetadata } as const;

  return [
    ...(shouldOnlyBeNumberType(type)
      ? []
      : enumerateExpressionMetadataMap(
          '',
          extension.getAllStrExpressionsForBehavior(behaviorType),
          scope
        )),
    ...enumerateExpressionMetadataMap(
      '',
      extension.getAllExpressionsForBehavior(behaviorType),
      scope
    ),
  ];
};

/** Enumerate all the expressions available. */
export const enumerateAllExpressions = (type: string, i18n: I18nType): Array<EnumeratedExpressionMetadata> => {
  const objectsExpressions: Array<any> = [];
  const behaviorsExpressions: Array<any> = [];
  const freeExpressions = enumerateFreeExpressions(type, i18n);

  const allExtensions = gd
    .asPlatform(gd.JsPlatform.get())
    .getAllPlatformExtensions();
// @ts-expect-error - TS7006 - Parameter 'extension' implicitly has an 'any' type.
  mapVector(allExtensions, extension => {
    const prefix = getExtensionPrefix(extension, i18n);

    //Objects expressions:
// @ts-expect-error - TS7006 - Parameter 'objectType' implicitly has an 'any' type.
    mapVector(extension.getExtensionObjectsTypes(), objectType => {
      const objectMetadata = extension.getObjectMetadata(objectType);
      const scope = { extension, objectMetadata } as const;

      if (!shouldOnlyBeNumberType(type))
        objectsExpressions.push.apply(
          objectsExpressions,
          enumerateExpressionMetadataMap(
            prefix,
            extension.getAllStrExpressionsForObject(objectType),
            scope
          )
        );
      objectsExpressions.push.apply(
        objectsExpressions,
        enumerateExpressionMetadataMap(
          prefix,
          extension.getAllExpressionsForObject(objectType),
          scope
        )
      );
    });

    //Behaviors expressions:
// @ts-expect-error - TS7006 - Parameter 'behaviorType' implicitly has an 'any' type.
    mapVector(extension.getBehaviorsTypes(), behaviorType => {
      const behaviorMetadata = extension.getBehaviorMetadata(behaviorType);
      const scope = { extension, behaviorMetadata } as const;

      if (!shouldOnlyBeNumberType(type))
        behaviorsExpressions.push.apply(
          behaviorsExpressions,
          enumerateExpressionMetadataMap(
            prefix,
            extension.getAllStrExpressionsForBehavior(behaviorType),
            scope
          )
        );
      behaviorsExpressions.push.apply(
        behaviorsExpressions,
        enumerateExpressionMetadataMap(
          prefix,
          extension.getAllExpressionsForBehavior(behaviorType),
          scope
        )
      );
    });
  });

  return [...freeExpressions, ...objectsExpressions, ...behaviorsExpressions];
};

export const filterExpressions = (list: Array<EnumeratedExpressionMetadata>, searchText: string): Array<EnumeratedExpressionMetadata> => {
  if (!searchText) return list;

  const lowercaseSearchText = searchText.toLowerCase();

  const matchCritera = (enumeratedExpression: EnumeratedExpressionMetadata) => {
    return (
      enumeratedExpression.type.toLowerCase().indexOf(lowercaseSearchText) !==
      -1
    );
  };

  const favorExactMatch = (list: Array<EnumeratedExpressionMetadata>): Array<EnumeratedExpressionMetadata> => {
    if (!searchText) {
      return list;
    }

    for (var i = 0; i < list.length; ++i) {
      if (list[i].type.toLowerCase() === lowercaseSearchText) {
        const exactMatch = list[i];
        list.splice(i, 1);
        list.unshift(exactMatch);
      }
    }

    return list;
  };

  // See EnumerateInstructions for a similar logic for instructions
  return favorExactMatch(list.filter(matchCritera));
};
