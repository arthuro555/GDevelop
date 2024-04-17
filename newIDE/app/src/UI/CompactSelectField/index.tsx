import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
// @ts-expect-error - TS2307 - Cannot find module './CompactSelectField.module.css' or its corresponding type declarations.
import classes from './CompactSelectField.module.css';
import { tooltipEnterDelay } from '../Tooltip';
type Props = {
  onChange: (arg1: string) => void;
  value: string;
  id?: string;
  disabled?: boolean;
  errored?: boolean;
  placeholder?: string;
  children: React.ReactNode;
  renderLeftIcon?: (className: string) => React.ReactElement;
  leftIconTooltip?: React.ReactNode;
};

const CompactSelectField = ({
  onChange,
  value,
  id,
  disabled,
  errored,
  placeholder,
  children,
  renderLeftIcon,
  leftIconTooltip,
}: Props) => {
  return (
    <div
      className={classNames({
        [classes.container]: true,
        [classes.disabled]: disabled,
        [classes.errored]: errored,
      })}
    >
      {renderLeftIcon && (
        <Tooltip
          // @ts-expect-error - TS2322 - Type 'ReactNode' is not assignable to type 'string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal'.
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
          <div className={classes.leftIconContainer}>
            {renderLeftIcon(classes.leftIcon)}
          </div>
        </Tooltip>
      )}
      <div
        className={classNames({
          [classes.compactSelectField]: true,
        })}
      >
        <select
          id={id}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        >
          {children}
        </select>
        <div className={classNames({ [classes.arrowContainer]: true })}>
          <span className={classNames({ [classes.arrow]: true })} />
        </div>
      </div>
    </div>
  );
};

export default CompactSelectField;
