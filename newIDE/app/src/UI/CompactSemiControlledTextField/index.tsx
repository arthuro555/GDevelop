import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../CompactTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactTextField/index.tsx', but '--jsx' is not set.
import CompactTextField from '../CompactTextField';
// @ts-expect-error - TS2307 - Cannot find module './CompactSemiControlledTextField.module.css' or its corresponding type declarations.
import classes from './CompactSemiControlledTextField.module.css';

type Props = {
  id?: string,
  value: string,
  onChange: (arg1: string) => void,
  commitOnBlur?: boolean,
  disabled?: boolean,
  errored?: boolean,
  placeholder?: string,
  renderLeftIcon?: (className: string) => React.ReactElement,
  leftIconTooltip?: React.ReactNode,
  renderEndAdornmentOnHover?: (className: string) => React.ReactElement,
  onClickEndAdornment?: () => void,
  errorText?: React.ReactNode
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div className={classes.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CompactTextField
        type="text"
        value={focused ? text : value}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onFocus={event => {
          setFocused(true);
          setText(value);
        }}
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
        onChange={newValue => {
          setText(newValue);
          if (!commitOnBlur) onChange(newValue);
        }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onBlur={event => {
          onChange(event.currentTarget.value);
          setFocused(false);
          setText('');
        }}
        {...otherProps}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {errorText && <div className={classes.error}>{errorText}</div>}
    </div>
  );
};

export default CompactSemiControlledTextField;
