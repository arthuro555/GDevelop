import { Trans } from '@lingui/macro';

import { t } from '@lingui/macro';
import * as React from 'react';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';

import SelectField, { SelectFieldInterface } from '../../UI/SelectField';

import SelectOption from '../../UI/SelectOption';

const operatorLabels = {
  '=': t`= (equal to)`,
  '<': t`< (less than)`,
  '>': t`> (greater than)`,
  '<=': t`≤ (less or equal to)`,
  '>=': t`≥ (greater or equal to)`,
  '!=': t`≠ (not equal to)`,
  startsWith: t`starts with`,
  endsWith: t`ends with`,
  contains: t`contains`,
} as const;

const mapTypeToOperators: {
  [key: string]: Array<string>;
} = {
  unknown: Object.keys(operatorLabels),
  number: ['=', '<', '>', '<=', '>=', '!='],
  time: ['<', '>', '<=', '>='],
  string: ['=', '!=', 'startsWith', 'endsWith', 'contains'],
  color: ['=', '!='],
};

const defaultOperators: {
  [key: string]: string;
} = {
  number: '=',
  time: '>=',
  string: '=',
  color: '=',
};

export default React.forwardRef<ParameterFieldInterface, ParameterFieldProps>(
  function RelationalOperatorField(props: ParameterFieldProps, ref) {
    const field = React.useRef<SelectFieldInterface>(null);
    const focus: FieldFocusFunction = (options) => {
      if (field.current) field.current.focus(options);
    };

    React.useImperativeHandle(ref, () => ({
      focus,
    }));

    const { parameterMetadata } = props;
    const description = parameterMetadata
      ? parameterMetadata.getDescription()
      : undefined;

    const comparedValueType = parameterMetadata
      ? parameterMetadata.getExtraInfo()
      : 'unknown';
    const operators =
      mapTypeToOperators[comparedValueType] || mapTypeToOperators.unknown;

    if (!props.value) {
      const defaultOperator = defaultOperators[comparedValueType];
      if (defaultOperator) {
        props.onChange(defaultOperator);
      }
    }

    return (
      <SelectField
        margin={props.isInline ? 'none' : 'dense'}
        fullWidth
        floatingLabelText={description}
        helperMarkdownText={
          parameterMetadata ? parameterMetadata.getLongDescription() : undefined
        }
        value={props.value}
        onChange={(e, i, value: string) => props.onChange(value)}
        ref={field}
        translatableHintText={t`Choose an operator`}
      >
        {operators.map((operator) => (
          <SelectOption
            key={operator}
            value={operator}
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly '=': any; readonly '<': any; readonly '>': any; readonly '<=': any; readonly '>=': any; readonly '!=': any; readonly startsWith: any; readonly endsWith: any; readonly contains: any; }'.
            label={operatorLabels[operator]}
          />
        ))}
      </SelectField>
    );
  }
);

export const renderInlineRelationalOperator = ({
  value,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value) {
    return (
      <InvalidParameterValue isEmpty>
        <Trans>Choose an operator</Trans>
      </InvalidParameterValue>
    );
  }

  if (
    value !== '=' &&
    value !== '<' &&
    value !== '>' &&
    value !== '<=' &&
    value !== '>=' &&
    value !== '!=' &&
    value !== 'startsWith' &&
    value !== 'endsWith' &&
    value !== 'contains'
  ) {
    return <InvalidParameterValue>{value}</InvalidParameterValue>;
  }

  if (value === '<=') return '\u2264';
  if (value === '>=') return '\u2265';
  if (value === '!=') return '\u2260';

  if (value === 'startsWith') return <Trans>starts with</Trans>;

  if (value === 'endsWith') return <Trans>ends with</Trans>;

  if (value === 'contains') return <Trans>contains</Trans>;

  return value;
};
