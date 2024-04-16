import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module './Icons/VariableStringIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/Icons/VariableStringIcon.tsx', but '--jsx' is not set.
import VariableStringIcon from './Icons/VariableStringIcon';
// @ts-expect-error - TS6142 - Module './Icons/VariableNumberIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/Icons/VariableNumberIcon.tsx', but '--jsx' is not set.
import VariableNumberIcon from './Icons/VariableNumberIcon';
// @ts-expect-error - TS6142 - Module './Icons/VariableBooleanIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/Icons/VariableBooleanIcon.tsx', but '--jsx' is not set.
import VariableBooleanIcon from './Icons/VariableBooleanIcon';
// @ts-expect-error - TS6142 - Module './Icons/VariableArrayIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/Icons/VariableArrayIcon.tsx', but '--jsx' is not set.
import VariableArrayIcon from './Icons/VariableArrayIcon';
// @ts-expect-error - TS6142 - Module './Icons/VariableStructureIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/Icons/VariableStructureIcon.tsx', but '--jsx' is not set.
import VariableStructureIcon from './Icons/VariableStructureIcon';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../UI/Grid';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7017 - Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
const gd = global.gd;

type Props = {
  variableType: Variable_Type,
  onChange: (newVariableType: string, nodeId: string) => void,
  nodeId: string,
  isHighlighted?: boolean,
  readOnlyWithIcon?: boolean,
  id?: string
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key="string"
        label={t`String`}
        value={gd.Variable.String}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key="number"
        label={t`Number`}
        value={gd.Variable.Number}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption
        key="boolean"
        label={t`Boolean`}
        value={gd.Variable.Boolean}
      />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SelectOption key="array" label={t`Array`} value={gd.Variable.Array} />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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

export const getVariableTypeToIcon = (): Partial<Record<Variable_Type, any>> => {
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Icon
        fontSize="small"
        htmlColor={
          props.isHighlighted
            ? gdevelopTheme.listItem.selectedTextColor
            : undefined
        }
      />
      {!props.readOnlyWithIcon && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SelectField
            value={props.variableType}
            margin="none"
            stopPropagationOnClick
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
            onChange={event =>
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
