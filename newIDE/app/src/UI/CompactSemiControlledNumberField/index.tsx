import * as React from 'react';

import CompactTextField from '../CompactTextField';
// @ts-expect-error - TS2307 - Cannot find module './CompactSemiControlledNumberField.module.css' or its corresponding type declarations.
import classes from './CompactSemiControlledNumberField.module.css';

type Props = {
  id?: string;
  value: number;
  onChange: (arg1: number) => void;
  commitOnBlur?: boolean;
  disabled?: boolean;
  errored?: boolean;
  placeholder?: string;
  renderLeftIcon?: (className: string) => React.ReactElement;
  leftIconTooltip?: React.ReactNode;
  useLeftIconAsNumberControl?: boolean;
  renderEndAdornmentOnHover?: (className: string) => React.ReactElement;
  onClickEndAdornment?: () => void;
  errorText?: React.ReactNode;
};

const CompactSemiControlledNumberField = ({
  value,
  onChange,
  errorText,
  commitOnBlur,
  ...otherProps
}: Props) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [temporaryValue, setTemporaryValue] = React.useState<
    number | null | undefined
  >(null);

  return (
    <div className={classes.container}>
      <CompactTextField
        type="number"
        value={focused ? temporaryValue : value}
        onChange={(valueAsString, reason) => {
// @ts-expect-error - TS2345 - Argument of type 'number' is not assignable to parameter of type 'string'.
          const newValue = parseFloat(valueAsString);
          const isNewValueValid = !Number.isNaN(newValue);
          if (isNewValueValid) {
            setTemporaryValue(newValue);
            if (reason === 'keyInput') {
              if (!commitOnBlur) onChange(newValue);
            } else {
              onChange(newValue);
            }
          } else {
            setTemporaryValue(null);
          }
        }}
        onFocus={(event) => {
          setFocused(true);
          setTemporaryValue(value);
        }}
        onBlur={(event) => {
          const newValue = parseFloat(event.currentTarget.value);
          const isNewValueValid = !Number.isNaN(newValue);
          if (isNewValueValid) {
            onChange(newValue);
          }
          setFocused(false);
          setTemporaryValue(null);
        }}
        {...otherProps}
      />
      {errorText && <div className={classes.error}>{errorText}</div>}
    </div>
  );
};

export default CompactSemiControlledNumberField;
