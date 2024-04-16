import * as React from 'react';
import Button from '@material-ui/core/Button';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from './Grid';
import { ButtonInterface } from './Button';

type Props = {
  label: React.ReactNode,
  onClick: (ev?: any) => undefined | Promise<undefined> | null | undefined,
  primary?: boolean,
  secondary?: boolean,
  allowBrowserAutoTranslate?: boolean,
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
  target?: '_blank',
  id?: string | null | undefined
};

/**
 * A "text" button based on Material-UI button.
 */
const TextButton = React.forwardRef<Props, ButtonInterface>((
  {
// @ts-expect-error - TS2339 - Property 'label' does not exist on type 'ButtonInterface'.
    label,
// @ts-expect-error - TS2339 - Property 'primary' does not exist on type 'ButtonInterface'.
    primary,
// @ts-expect-error - TS2339 - Property 'secondary' does not exist on type 'ButtonInterface'.
    secondary,
// @ts-expect-error - TS2339 - Property 'icon' does not exist on type 'ButtonInterface'.
    icon,
// @ts-expect-error - TS2339 - Property 'keyboardFocused' does not exist on type 'ButtonInterface'.
    keyboardFocused,
// @ts-expect-error - TS2339 - Property 'disabled' does not exist on type 'ButtonInterface'.
    disabled,
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'ButtonInterface'.
    id,
// @ts-expect-error - TS2339 - Property 'allowBrowserAutoTranslate' does not exist on type 'ButtonInterface'.
    allowBrowserAutoTranslate = true,
    ...otherProps
  },
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
      variant="text"
      size="small"
      translate={allowBrowserAutoTranslate ? undefined : 'no'}
      color={primary ? 'primary' : secondary ? 'secondary' : 'default'}
      autoFocus={keyboardFocused}
      focusRipple={focusRipple}
      disabled={disabled}
      id={id}
      {...otherProps}
      ref={ref}
    >
      {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {icon && <Spacer />}
      {/* span element is required to prevent browser auto translators to crash the app - See https://github.com/4ian/GDevelop/issues/3453 */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {label ? <span>{label}</span> : null}
    </Button>
  );
});

export default TextButton;
