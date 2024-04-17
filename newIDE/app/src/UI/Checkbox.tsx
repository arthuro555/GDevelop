import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MUICheckbox from '@material-ui/core/Checkbox';
import { FormHelperText } from '@material-ui/core';

// Reduce checkbox size to avoid overlapping with other checkboxes.
const useStyles = makeStyles({
  root: {
    marginLeft: 9,
    marginRight: 9,
    marginTop: 0, // Material UI adds negative margin triggering a scrollbar.
    marginBottom: 0, // Material UI adds negative margin triggering a scrollbar.
    padding: 0,
  },
});

const useFormGroupStyles = makeStyles({
  root: {
    display: 'block',
  },
});

// We support a subset of the props supported by Material-UI v0.x Checkbox
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = {
  label?: React.ReactNode | null | undefined,
  checked: boolean,
  onCheck?: (e: Record<any, any>, checked: boolean) => undefined | Promise<undefined>,
  tooltipOrHelperText?: React.ReactNode,
  checkedIcon?: React.ReactNode,
  uncheckedIcon?: React.ReactNode,
  disabled?: boolean,
  style?: {
    display?: 'inline-block',
    marginRight?: number,
    margin?: number
  },
  id?: string
};

/**
 * A checkbox based on Material-UI checkbox.
 */
const Checkbox = (props: Props) => {
  const { onCheck } = props;
  const classes = useStyles();
  const formGroupClasses = useFormGroupStyles();
  const checkbox = (

    <MUICheckbox
      className={classes.root}
      disabled={props.disabled}
      checked={props.checked}
// @ts-expect-error - TS2322 - Type 'Event | ((any: ChangeEvent<HTMLInputElement>) => any) | undefined' is not assignable to type '((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined'.
      onChange={
// @ts-expect-error - TS2722 - Cannot invoke an object which is possibly 'undefined'. | TS2532 - Object is possibly 'undefined'. | TS2531 - Object is possibly 'null'. | TS2339 - Property 'checked' does not exist on type 'EventTarget'. | TS1005 - '}' expected.
        onCheck ? event: any => onCheck(event, event.target.checked) : undefined

      }
      icon={props.uncheckedIcon}
      checkedIcon={props.checkedIcon}
      style={props.label ? undefined : props.style}
      id={props.id}

    />

  );
  return props.label ? (
    <FormGroup classes={formGroupClasses}>
      <FormControlLabel
        control={checkbox}
        label={props.label}
        style={{
          ...props.style,
          cursor: 'default',
        }}
      />
      {props.tooltipOrHelperText && (
        <FormHelperText>{props.tooltipOrHelperText}</FormHelperText>
      )}
    </FormGroup>
  ) : (
    checkbox
  );

};

export default Checkbox;
