// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';
import * as React from 'react';
import { mapFor } from '../../../Utils/MapFor';
// @ts-expect-error - TS6142 - Module '../../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';

export type ParameterValues = Array<string>;

type Props = {
  project?: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  expressionMetadata: gdExpressionMetadata,
  parameterValues: ParameterValues,
  onChangeParameter: (index: number, value: string) => void,
  parameterRenderingService?: {
    components: any,
    getParameterComponent: (type: string) => any
  }
};

export const hasNonCodeOnlyParameters = (
  expressionMetadata: gdExpressionMetadata
) =>
// @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type.
  mapFor(0, expressionMetadata.getParametersCount(), i => {
    const parameterMetadata = expressionMetadata.getParameter(i);
    return !parameterMetadata.isCodeOnly();
// @ts-expect-error - TS7006 - Parameter 'isVisible' implicitly has an 'any' type.
  }).filter(isVisible => isVisible).length !== 0;

const ExpressionParametersEditor = ({
  expressionMetadata,
  parameterValues,
  project,
  scope,
  globalObjectsContainer,
  objectsContainer,
  parameterRenderingService,
  onChangeParameter,
}: Props) => {
  if (!parameterRenderingService) {
    console.error(
      'Missing parameterRenderingService for ExpressionParametersEditor'
    );
    return null;
  }

  // Create an object mimicking Instruction interface so that it can be used by
  // ParameterFields components.
  const parametersCount = expressionMetadata.getParametersCount();
  const expression = {
    getParametersCount: () => parametersCount,
// @ts-expect-error - TS7006 - Parameter 'index' implicitly has an 'any' type.
    getParameter: index => {
      return parameterValues[index] || '';
    },
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout>
{ /* @ts-expect-error - TS7006 - Parameter 'i' implicitly has an 'any' type. */}
      {mapFor(0, expressionMetadata.getParametersCount(), i => {
        const parameterMetadata = expressionMetadata.getParameter(i);
        const ParameterComponent = parameterRenderingService.getParameterComponent(
          parameterMetadata.getType()
        );

        if (parameterMetadata.isCodeOnly()) return null;
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <React.Fragment key={i}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ParameterComponent
              expressionMetadata={expressionMetadata}
              expression={expression}
              parameterMetadata={parameterMetadata}
              parameterIndex={i}
              value={parameterValues[i]}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={value => onChangeParameter(i, value)}
              project={project}
              scope={scope}
              globalObjectsContainer={globalObjectsContainer}
              objectsContainer={objectsContainer}
              parameterRenderingService={parameterRenderingService}
            />
          </React.Fragment>
        );
      })}
      {!hasNonCodeOnlyParameters(expressionMetadata) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>There is nothing to configure.</Trans>
        </EmptyMessage>
      )}
    </ColumnStackLayout>
  );
};

export default ExpressionParametersEditor;
