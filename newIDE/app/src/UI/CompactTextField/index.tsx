import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
// @ts-expect-error - TS2307 - Cannot find module './CompactTextField.module.css' or its corresponding type declarations.
import classes from './CompactTextField.module.css';
import { tooltipEnterDelay } from '../Tooltip';
import useClickDragAsControl from './UseClickDragAsControl';
import { makeTimestampedId } from '../../Utils/TimestampedId';
import { toFixedWithoutTrailingZeros } from '../../Utils/Mathematics';

type ValueProps = {
  type?: 'text',
  value: string,
  onChange: (newValue: string, reason: 'keyInput') => void
} | {
  type: 'number',
  value: number | null | undefined // null value corresponds to an empty input.,
  onChange: (newValue: number, reason: 'keyInput' | 'iconControl') => void
};

type OtherProps = {
  onBlur?: (
    arg1: {
      currentTarget: {
        value: string
      }
    },
  ) => void,
  onFocus?: (
    arg1: {
      currentTarget: {
        value: string
      },
      preventDefault: () => void
    },
  ) => void
};

export type CompactTextFieldProps = (ValueProps) & (OtherProps) & {
  id?: string,
  disabled?: boolean,
  errored?: boolean,
  placeholder?: string,
  renderLeftIcon?: (className: string) => React.ReactElement,
  leftIconTooltip?: React.ReactNode,
  useLeftIconAsNumberControl?: boolean,
  renderEndAdornmentOnHover?: (className: string) => React.ReactElement,
  onClickEndAdornment?: () => void
};

const CompactTextField = ({
  type,
  value,
  onChange,
  id,
  disabled,
  errored,
  placeholder,
  renderLeftIcon,
  leftIconTooltip,
  useLeftIconAsNumberControl,
  renderEndAdornmentOnHover,
  onClickEndAdornment,
  onBlur,
  onFocus,
}: CompactTextFieldProps) => {
  const idToUse = React.useRef<string>(id || makeTimestampedId());
  const controlProps = useClickDragAsControl({
    // $FlowExpectedError - Click drag controls should not be used if value type is not number.
// @ts-expect-error - TS2345 - Argument of type 'number' is not assignable to parameter of type 'never'.
    onChange: value => onChange(value, 'iconControl'),
    // $FlowExpectedError
// @ts-expect-error - TS2322 - Type 'string | number | null | undefined' is not assignable to type 'number'.
    onGetInitialValue: () => value,
  });

  const onBlurInput = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
    event => {
      if (onBlur) onBlur(event);
    },
    [onBlur]
  );
  const onFocusInput = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
    event => {
      if (onFocus) onFocus(event);
    },
    [onFocus]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
      className={classNames({
        [classes.container]: true,
        [classes.disabled]: disabled,
        [classes.errored]: errored,
      })}
    >
      {renderLeftIcon && leftIconTooltip && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tooltip
          title={leftIconTooltip}
          enterDelay={tooltipEnterDelay}
          placement="bottom"
          PopperProps={{
            modifiers: {
              offset: {
                enabled: true,
                /**
                 * It does not seem possible to get the tooltip closer to the anchor
                 * when positioned on top. So it is positioned on bottom with a negative offset.
                 */
                offset: '0,-20',
              },
            },
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type '{ children: Element; onMouseDown?: ((e: MouseEvent) => void) | undefined; onMouseMove?: ((e: MouseEvent) => void) | undefined; onMouseUp?: (() => void) | undefined; className: any; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. */}
          <div
            className={classNames({
              [classes.leftIconContainer]: true,
              [classes.control]: !!useLeftIconAsNumberControl,
            })}
            {...(useLeftIconAsNumberControl ? controlProps : {})}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <label htmlFor={idToUse.current} className={classes.label}>
              {renderLeftIcon(classes.leftIcon)}
            </label>
          </div>
        </Tooltip>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        className={classNames({
          [classes.compactTextField]: true,
          [classes.withEndAdornment]: !!renderEndAdornmentOnHover,
        })}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <input
          id={idToUse.current}
          type={type || 'text'}
          disabled={disabled}
          value={
            value === null
              ? ''
              : typeof value === 'number'
              ? toFixedWithoutTrailingZeros(value, 2)
              : value
          }
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'never'.
          onChange={e => onChange(e.currentTarget.value, 'keyInput')}
          placeholder={placeholder}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
        />
        {renderEndAdornmentOnHover && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <button
            onClick={onClickEndAdornment}
            className={classes.endAdornmentButton}
          >
            {renderEndAdornmentOnHover(classes.endAdornmentIcon)}
          </button>
        )}
      </div>
    </div>
  );
};

export default CompactTextField;
