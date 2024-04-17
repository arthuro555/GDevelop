import { Trans } from '@lingui/macro';
import { EventsScope } from '../../../InstructionOrExpression/EventsScope.flow';
import * as React from 'react';
import { mapFor } from '../../../Utils/MapFor';

import EmptyMessage from '../../../UI/EmptyMessage';

import { ColumnStackLayout } from '../../../UI/Layout';

export type ParameterValues = Array<string>;

type Props = {
  project?: gd.Project;
  scope: EventsScope;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  expressionMetadata: gd.ExpressionMetadata;
  parameterValues: ParameterValues;
  onChangeParameter: (index: number, value: string) => void;
  parameterRenderingService?: {
    components: any;
    getParameterComponent: (type: string) => any;
  };
};

export const hasNonCodeOnlyParameters = (
  expressionMetadata: gd.ExpressionMetadata
) =>
  mapFor(0, expressionMetadata.getParametersCount(), (i) => {
    const parameterMetadata = expressionMetadata.getParameter(i);
    return !parameterMetadata.isCodeOnly();
  }).filter((isVisible) => isVisible).length !== 0;

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
    getParameter: (index) => {
      return parameterValues[index] || '';
    },
  } as const;

  return (
    <ColumnStackLayout>
      {mapFor(0, expressionMetadata.getParametersCount(), (i) => {
        const parameterMetadata = expressionMetadata.getParameter(i);
        const ParameterComponent =
          parameterRenderingService.getParameterComponent(
            parameterMetadata.getType()
          );

        if (parameterMetadata.isCodeOnly()) return null;
        return (
          <React.Fragment key={i}>
            <ParameterComponent
              expressionMetadata={expressionMetadata}
              expression={expression}
              parameterMetadata={parameterMetadata}
              parameterIndex={i}
              value={parameterValues[i]}
              // @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
              onChange={(value) => onChangeParameter(i, value)}
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
        <EmptyMessage>
          <Trans>There is nothing to configure.</Trans>
        </EmptyMessage>
      )}
    </ColumnStackLayout>
  );
};

export default ExpressionParametersEditor;
