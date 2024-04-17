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
  id?: string;
  label?: React.ReactNode | null | undefined;
  checked: boolean;
  onCheck?: (e: Record<any, any>, checked: boolean) => void;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  disabled?: boolean;
  paddingSize?: 'small';
  tooltipOrHelperText?: React.ReactNode;
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
    <Checkbox
      id={id}
      disabled={disabled}
      checked={checked}
      onChange={
        onCheck
          ? (event: React.ChangeEvent<HTMLInputElement>) =>
              onCheck(event, event.target.checked)
          : undefined
      }
      classes={paddingSize === 'small' ? smallPaddingClasses : undefined}
      icon={uncheckedIcon}
      checkedIcon={checkedIcon}
      color="secondary"
    />
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
};

export default InlineCheckbox;
