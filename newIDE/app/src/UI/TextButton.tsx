import * as React from 'react';
import Button from '@material-ui/core/Button';

import { Spacer } from './Grid';
import { ButtonInterface } from './Button';

type Props = {
  label: React.ReactNode;
  onClick: (ev?: any) => void;
  primary?: boolean;
  secondary?: boolean;
  allowBrowserAutoTranslate?: boolean;
  disabled?: boolean;
  keyboardFocused?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    margin?: number;
    flexShrink?: 0;
  };
  target?: '_blank';
  id?: string | null | undefined;
};

/**
 * A "text" button based on Material-UI button.
 */
const TextButton = React.forwardRef<ButtonInterface, Props>(
  (
    {
      label,
      primary,
      secondary,
      icon,
      keyboardFocused,
      disabled,
      id,
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
        {icon && <Spacer />}
        {/* span element is required to prevent browser auto translators to crash the app - See https://github.com/4ian/GDevelop/issues/3453 */}
        {label ? <span>{label}</span> : null}
      </Button>
    );
  }
);

export default TextButton;
