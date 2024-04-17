import { mapVector } from '../../Utils/MapFor';

export const enumerateParametersUsableInExpressions = (
  eventsFunctionsContainer: gd.EventsFunctionsContainer,
  eventsFunction: gd.EventsFunction,
  allowedParameterTypes: string[]
): Array<gd.ParameterMetadata> => {
  return mapVector(
    eventsFunction.getParametersForEvents(eventsFunctionsContainer),

    (parameterMetadata) =>
      !parameterMetadata.isCodeOnly() &&
      !gd.ParameterMetadata.isObject(parameterMetadata.getType()) &&
      !gd.ParameterMetadata.isBehavior(parameterMetadata.getType()) &&
      (allowedParameterTypes.length === 0 ||
        allowedParameterTypes.includes(
          gd.ValueTypeMetadata.getPrimitiveValueType(
            parameterMetadata.getType()
          )
        ))
        ? parameterMetadata
        : null
  ).filter(Boolean);
};
