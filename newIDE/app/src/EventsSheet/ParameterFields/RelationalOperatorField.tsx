// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
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
  [key: string]: Array<string>
} = {
  unknown: Object.keys(operatorLabels),
  number: ['=', '<', '>', '<=', '>=', '!='],
  time: ['<', '>', '<=', '>='],
  string: ['=', '!=', 'startsWith', 'endsWith', 'contains'],
  color: ['=', '!='],
};

const defaultOperators: {
  [key: string]: string
} = {
  number: '=',
  time: '>=',
  string: '=',
  color: '=',
};

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function RelationalOperatorField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SelectFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SelectField
      margin={props.isInline ? 'none' : 'dense'}
      fullWidth
      floatingLabelText={description}
      helperMarkdownText={
        parameterMetadata ? parameterMetadata.getLongDescription() : undefined
      }
      value={props.value}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
      onChange={(e, i, value: string) => props.onChange(value)}
      ref={field}
      translatableHintText={t`Choose an operator`}
    >
      {operators.map(operator => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SelectOption
          key={operator}
          value={operator}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly '=': any; readonly '<': any; readonly '>': any; readonly '<=': any; readonly '>=': any; readonly '!=': any; readonly startsWith: any; readonly endsWith: any; readonly contains: any; }'.
          label={operatorLabels[operator]}
        />
      ))}
    </SelectField>
  );
});

export const renderInlineRelationalOperator = ({
  value,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  if (!value) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <InvalidParameterValue isEmpty>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <InvalidParameterValue>{value}</InvalidParameterValue>;
  }

  if (value === '<=') return '\u2264';
  if (value === '>=') return '\u2265';
  if (value === '!=') return '\u2260';
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (value === 'startsWith') return <Trans>starts with</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (value === 'endsWith') return <Trans>ends with</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (value === 'contains') return <Trans>contains</Trans>;

  return value;
};
