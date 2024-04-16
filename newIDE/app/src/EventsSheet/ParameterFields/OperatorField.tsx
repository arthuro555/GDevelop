import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
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
  '=': t`= (set to)`,
  '+': t`+ (add)`,
  '-': t`- (subtract)`,
  '*': t`* (multiply by)`,
  '/': t`/ (divide by)`,
} as const;

const mapTypeToOperators: {
  [key: string]: Array<string>
} = {
  unknown: Object.keys(operatorLabels),
  number: ['=', '+', '-', '*', '/'],
  string: ['=', '+'],
  color: ['=', '+'],
};

// @ts-expect-error - TS2345 - Argument of type '(props: ParameterFieldProps, ref: ForwardedRef<ParameterFieldProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<ParameterFieldProps, ParameterFieldInterface>'.
export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function OperatorField(props: ParameterFieldProps, ref) {
  const field = React.useRef<SelectFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const { parameterMetadata, value, onChange } = props;
  const description = parameterMetadata
    ? parameterMetadata.getDescription()
    : undefined;

  const comparedValueType = parameterMetadata
    ? parameterMetadata.getExtraInfo()
    : 'unknown';
  const operators =
    mapTypeToOperators[comparedValueType] || mapTypeToOperators.unknown;

  React.useEffect(
    () => {
      if (!value && comparedValueType !== 'unknown') {
        onChange('=');
      }
    },
    [value, onChange, comparedValueType]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SelectField
      margin={props.isInline ? 'none' : 'dense'}
      fullWidth
      floatingLabelText={description}
      helperMarkdownText={
        parameterMetadata ? parameterMetadata.getLongDescription() : undefined
      }
      value={value}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
      onChange={(e, i, value: string) => onChange(value)}
      ref={field}
      translatableHintText={t`Choose an operator`}
      id={
        props.parameterIndex !== undefined
          ? `parameter-${props.parameterIndex}-operator-field`
          : undefined
      }
    >
      {operators.map(operator => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <SelectOption
          key={operator}
          value={operator}
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly '=': any; readonly '+': any; readonly '-': any; readonly '*': any; readonly '/': any; }'.
          label={operatorLabels[operator]}
        />
      ))}
    </SelectField>
  );
});

export const renderInlineOperator = ({
  value,
  InvalidParameterValue,
  useAssignmentOperators,
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

  if (useAssignmentOperators) {
    if (value === '=') return '=';
    else if (value === '+') return '+=';
    else if (value === '-') return '-=';
    else if (value === '/') return '/=';
    else if (value === '*') return '*=';
  } else {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    if (value === '=') return <Trans>set to</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    else if (value === '+') return <Trans>add</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    else if (value === '-') return <Trans>subtract</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    else if (value === '/') return <Trans>divide by</Trans>;
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    else if (value === '*') return <Trans>multiply by</Trans>;
  }

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <InvalidParameterValue>{value}</InvalidParameterValue>;
};
