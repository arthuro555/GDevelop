import * as React from 'react';

export type InvalidParameterValueProps = {
  children: React.ReactNode;
  isEmpty?: boolean;
};

/**
 * The props expected by a function that renders a parameter in the events sheet
 */
export type ParameterInlineRendererProps = {
  parameterMetadata: gd.ParameterMetadata;
  value: string;
  expressionIsValid: boolean;
  renderObjectThumbnail: (arg1: string) => React.ReactElement;
  InvalidParameterValue: (
    arg1: InvalidParameterValueProps
  ) => React.ReactElement;
  MissingParameterValue: () => React.ReactElement;
  useAssignmentOperators: boolean;
};

/**
 * The type of a function that renders a parameter in the events sheet
 */
export type ParameterInlineRenderer = (
  arg1: ParameterInlineRendererProps
) => React.ReactElement;
