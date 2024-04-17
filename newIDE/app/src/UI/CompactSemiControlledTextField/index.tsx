import * as React from 'react';

import CompactTextField from '../CompactTextField';
// @ts-expect-error - TS2307 - Cannot find module './CompactSemiControlledTextField.module.css' or its corresponding type declarations.
import classes from './CompactSemiControlledTextField.module.css';

type Props = {
  id?: string;
  value: string;
  onChange: (arg1: string) => void;
  commitOnBlur?: boolean;
  disabled?: boolean;
  errored?: boolean;
  placeholder?: string;
  renderLeftIcon?: (className: string) => React.ReactElement;
  leftIconTooltip?: React.ReactNode;
  renderEndAdornmentOnHover?: (className: string) => React.ReactElement;
  onClickEndAdornment?: () => void;
  errorText?: React.ReactNode;
};

const CompactSemiControlledTextField = ({
  value,
  onChange,
  errorText,
  commitOnBlur,
  ...otherProps
}: Props) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');

  return (
    <div className={classes.container}>
      <CompactTextField
        type="text"
        value={focused ? text : value}
        onFocus={(event) => {
          setFocused(true);
          setText(value);
        }}
        onChange={(newValue) => {
          setText(newValue);
          if (!commitOnBlur) onChange(newValue);
        }}
        onBlur={(event) => {
          onChange(event.currentTarget.value);
          setFocused(false);
          setText('');
        }}
        {...otherProps}
      />
      {errorText && <div className={classes.error}>{errorText}</div>}
    </div>
  );
};

export default CompactSemiControlledTextField;
