import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../CompactTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactTextField/index.tsx', but '--jsx' is not set.
import CompactTextField from '../CompactTextField';
// @ts-expect-error - TS2307 - Cannot find module './CompactSemiControlledNumberField.module.css' or its corresponding type declarations.
import classes from './CompactSemiControlledNumberField.module.css';

type Props = {
  id?: string,
  value: number,
  onChange: (arg1: number) => void,
  commitOnBlur?: boolean,
  disabled?: boolean,
  errored?: boolean,
  placeholder?: string,
  renderLeftIcon?: (className: string) => React.ReactElement,
  leftIconTooltip?: React.ReactNode,
  useLeftIconAsNumberControl?: boolean,
  renderEndAdornmentOnHover?: (className: string) => React.ReactElement,
  onClickEndAdornment?: () => void,
  errorText?: React.ReactNode
};

const CompactSemiControlledNumberField = ({
  value,
  onChange,
  errorText,
  commitOnBlur,
  ...otherProps
}: Props) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [temporaryValue, setTemporaryValue] = React.useState<number | null | undefined>(null);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div className={classes.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CompactTextField
        type="number"
        value={focused ? temporaryValue : value}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type. | TS7006 - Parameter 'reason' implicitly has an 'any' type.
        onChange={(valueAsString, reason) => {
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
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onFocus={event => {
          setFocused(true);
          setTemporaryValue(value);
        }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
        onBlur={event => {
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {errorText && <div className={classes.error}>{errorText}</div>}
    </div>
  );
};

export default CompactSemiControlledNumberField;
