import * as React from 'react';

import { t } from '@lingui/macro';

import SelectField from '../UI/SelectField';

import SelectOption from '../UI/SelectOption';

import VariableStringIcon from './Icons/VariableStringIcon';

import VariableNumberIcon from './Icons/VariableNumberIcon';

import VariableBooleanIcon from './Icons/VariableBooleanIcon';

import VariableArrayIcon from './Icons/VariableArrayIcon';

import VariableStructureIcon from './Icons/VariableStructureIcon';

import { Line, Spacer } from '../UI/Grid';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

type Props = {
  variableType: Variable_Type;
  onChange: (newVariableType: string, nodeId: string) => void;
  nodeId: string;
  isHighlighted?: boolean;
  readOnlyWithIcon?: boolean;
  id?: string;
};

// @ts-expect-error - TS7034 - Variable 'options' implicitly has type 'any' in some locations where its type cannot be determined.
let options;
// @ts-expect-error - TS7034 - Variable 'variableTypeToIcon' implicitly has type 'any' in some locations where its type cannot be determined.
let variableTypeToIcon;
// @ts-expect-error - TS7034 - Variable 'variableTypeToString' implicitly has type 'any' in some locations where its type cannot be determined.
let variableTypeToString;

const getOptions = () => {
  // @ts-expect-error - TS7005 - Variable 'options' implicitly has an 'any' type.
  if (!options) {
    options = [
      <SelectOption
        key="string"
        label={t`String`}
        value={gd.Variable.String}
      />,

      <SelectOption
        key="number"
        label={t`Number`}
        value={gd.Variable.Number}
      />,

      <SelectOption
        key="boolean"
        label={t`Boolean`}
        value={gd.Variable.Boolean}
      />,

      <SelectOption key="array" label={t`Array`} value={gd.Variable.Array} />,

      <SelectOption
        key="structure"
        label={t`Structure`}
        value={gd.Variable.Structure}
      />,
    ];
  }
  // @ts-expect-error - TS7005 - Variable 'options' implicitly has an 'any' type.
  return options;
};

export const getVariableTypeToIcon = (): Partial<
  Record<Variable_Type, any>
> => {
  // @ts-expect-error - TS7005 - Variable 'variableTypeToIcon' implicitly has an 'any' type.
  if (!variableTypeToIcon) {
    variableTypeToIcon = {
      [gd.Variable.String]: VariableStringIcon,
      [gd.Variable.Number]: VariableNumberIcon,
      [gd.Variable.Boolean]: VariableBooleanIcon,
      [gd.Variable.Array]: VariableArrayIcon,
      [gd.Variable.Structure]: VariableStructureIcon,
    };
  }
  // @ts-expect-error - TS7005 - Variable 'variableTypeToIcon' implicitly has an 'any' type.
  return variableTypeToIcon;
};

const getVariableTypeToString = () => {
  // @ts-expect-error - TS7005 - Variable 'variableTypeToString' implicitly has an 'any' type.
  if (!variableTypeToString) {
    variableTypeToString = {
      [gd.Variable.String]: 'string',
      [gd.Variable.Number]: 'number',
      [gd.Variable.Boolean]: 'boolean',
      [gd.Variable.Array]: 'array',
      [gd.Variable.Structure]: 'structure',
    };
  }
  // @ts-expect-error - TS7005 - Variable 'variableTypeToString' implicitly has an 'any' type.
  return variableTypeToString;
};

const VariableTypeSelector = React.memo<Props>((props: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const Icon = getVariableTypeToIcon()[props.variableType];

  return (
    <Line alignItems="center" noMargin>
      <Icon
        fontSize="small"
        htmlColor={
          props.isHighlighted
            ? gdevelopTheme.listItem.selectedTextColor
            : undefined
        }
      />
      {!props.readOnlyWithIcon && (
        <>
          <Spacer />
          <SelectField
            value={props.variableType}
            margin="none"
            stopPropagationOnClick
            onChange={(event) =>
              props.onChange(
                getVariableTypeToString()[event.target.value],
                props.nodeId
              )
            }
            inputStyle={{
              fontSize: 14,
              color: props.isHighlighted
                ? gdevelopTheme.listItem.selectedTextColor
                : undefined,
            }}
            id={props.id}
          >
            {getOptions()}
          </SelectField>
        </>
      )}
    </Line>
  );
});

export default VariableTypeSelector;
