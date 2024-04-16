import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const useLabelStyles = makeStyles({
  root: {
    cursor: 'default',
  },
});

const useFormGroupStyles = makeStyles({
  root: {
    display: 'block',
  },
});

const useSmallPaddingCheckboxStyles = makeStyles({
  root: {
    padding: 3,
  },
});

type Props = {
  id?: string,
  label?: React.ReactNode | null | undefined,
  checked: boolean,
  onCheck?: (e: Record<any, any>, checked: boolean) => undefined | Promise<undefined>,
  checkedIcon?: React.ReactNode,
  uncheckedIcon?: React.ReactNode,
  disabled?: boolean,
  paddingSize?: 'small',
  tooltipOrHelperText?: React.ReactNode
};

/**
 * A checkbox based on Material-UI Checkbox, but that can be displayed
 * without having it taking the full width of its container.
 */
const InlineCheckbox = ({
  id,
  onCheck,
  disabled,
  checked,
  label,
  uncheckedIcon,
  checkedIcon,
  tooltipOrHelperText,
  paddingSize,
}: Props) => {
  const labelClasses = useLabelStyles();
  const formGroupClasses = useFormGroupStyles();
  const smallPaddingClasses = useSmallPaddingCheckboxStyles();
  const checkbox = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Checkbox
      id={id}
      disabled={disabled}
      checked={checked}
// @ts-expect-error - TS2322 - Type 'Event | ((any: ChangeEvent<HTMLInputElement>) => any) | undefined' is not assignable to type '((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined'.
      onChange={
// @ts-expect-error - TS2722 - Cannot invoke an object which is possibly 'undefined'. | TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'checked' does not exist on type 'EventTarget'. | TS1005 - '}' expected.
        onCheck ? event: any => onCheck(event, event.target.checked) : undefined
// @ts-expect-error - TS1003 - Identifier expected.
      }
      classes={paddingSize === 'small' ? smallPaddingClasses : null}
      icon={uncheckedIcon}
      checkedIcon={checkedIcon}
      color="secondary"
// @ts-expect-error - TS1109 - Expression expected.
    />
// @ts-expect-error - TS1109 - Expression expected.
  );
  return label ? (
    <FormGroup classes={formGroupClasses}>
      <FormControlLabel
        control={checkbox}
        label={label}
        classes={labelClasses}
      />
      {tooltipOrHelperText && (
        <FormHelperText>{tooltipOrHelperText}</FormHelperText>
      )}
    </FormGroup>
  ) : tooltipOrHelperText && !disabled ? (
    <Tooltip title={tooltipOrHelperText}>{checkbox}</Tooltip>
  ) : (
    checkbox
  );
// @ts-expect-error - TS1128 - Declaration or statement expected.
};

export default InlineCheckbox;
