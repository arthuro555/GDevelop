import * as React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonInterface } from './Button';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from './Grid';

// We support a subset of the props supported by Material-UI v0.x RaisedButton
// They should be self descriptive - refer to Material UI docs otherwise.
export type RaisedButtonPropsWithoutOnClick = {
  label?: React.ReactNode,
  primary?: boolean,
  disabled?: boolean,
  keyboardFocused?: boolean,
  fullWidth?: boolean,
  icon?: React.ReactNode,
  style?: {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    margin?: number,
    flexShrink?: 0
  },
  id?: string | null | undefined
};

export type RaisedButtonProps = (RaisedButtonPropsWithoutOnClick) & {
  onClick: () => undefined | Promise<undefined> | null | undefined
};

/**
 * A raised button based on Material-UI button.
 */
// @ts-expect-error - TS2345 - Argument of type '({ label, primary, icon, disabled, keyboardFocused, style, ...otherProps }: RaisedButtonProps, ref: ForwardedRef<RaisedButtonProps>) => Element' is not assignable to parameter of type 'ForwardRefRenderFunction<RaisedButtonProps, ButtonInterface>'.
const RaisedButton = React.forwardRef<RaisedButtonProps, ButtonInterface>((
  {
    label,
    primary,
    icon,
    disabled,
    keyboardFocused,
    style,
    ...otherProps
  }: RaisedButtonProps,
  ref
) => {
  // In theory, focus ripple is only shown after a keyboard interaction
  // (see https://github.com/mui-org/material-ui/issues/12067). However, as
  // it's important to get focus right in the whole app, make the ripple
  // always visible to be sure we're getting focusing right.
  const focusRipple = true;

  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Button
      variant="contained"
      size="small"
      disableElevation
      color={primary ? 'primary' : 'default'}
      autoFocus={keyboardFocused}
      focusRipple={focusRipple}
      disabled={disabled}
      style={
        style || !label
          ? {
              // If no label is specified, reduce the min width so that the button
              // is just around the icon.
              minWidth: !label ? 0 : undefined,
              ...style,
            }
          : undefined
      }
      {...otherProps}
      ref={ref}
    >
      {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {!!icon && !!label && <Spacer />}
      {/* span element is required to prevent browser auto translators to crash the app - See https://github.com/4ian/GDevelop/issues/3453 */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {label ? <span>{label}</span> : null}
    </Button>
  );
});

export default RaisedButton;
