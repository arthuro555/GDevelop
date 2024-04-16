import {ResourceManagementProps} from '../../ResourcesList/ResourceSource';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';
import { MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';

export type ParameterRenderingServiceType = {
  components: any,
  getParameterComponent: (type: string) => any,
  getUserFriendlyTypeName: (rawType: string) => MessageDescriptor | null | undefined
};

type CommonProps = {
  // The parameter
  parameterMetadata?: gdParameterMetadata,
  onChange: (arg1: string) => void,
  value: string,
  // Context
  project?: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  isInline?: boolean,
  onRequestClose?: () => void,
  onApply?: () => void,
  resourceManagementProps?: ResourceManagementProps,
  // Pass the ParameterRenderingService to allow to render nested parameters
  parameterRenderingService?: ParameterRenderingServiceType,
  // Other
  id?: string
};

export type ExpressionParameters = {
  getParametersCount: () => number,
  getParameter: (index: number) => string
};

export type ParameterFieldProps = (CommonProps) & {
  // Instruction in which the parameter is.
  instruction?: gdInstruction,
  // Metadata of the instruction in which the parameter is.
  instructionMetadata?: gdInstructionMetadata,
  // Expression in which the parameter is.
  expression?: ExpressionParameters,
  // Metadata of the instruction in which the parameter is.
  expressionMetadata?: gdExpressionMetadata,
  // The index of the parameter in the instruction or expression.
  parameterIndex?: number
};

export type FieldFocusFunction = (
  arg1?: {
    selectAll?: boolean,
    caretPosition?: 'end' | number | null
  } | null | undefined,
) => void;

export type ParameterFieldInterface = {
  focus: FieldFocusFunction
};

export const getParameterValueOrDefault = (
  value: string,
  parameterMetadata?: gdParameterMetadata | null
) => {
  if (value) return value;

  const defaultValue =
    parameterMetadata && parameterMetadata.isOptional()
      ? parameterMetadata.getDefaultValue()
      : '';
  return defaultValue;
};
