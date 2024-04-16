import * as React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles, createStyles } from '@material-ui/styles';
import { shouldValidate } from '../../../UI/KeyboardShortcuts/InteractionKeys';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';

const styles = {
  buttonBase: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    cursor: 'default',
    overflow: 'hidden',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
} as const;

// Styles to give the impression of pressing an element.
const useStylesForWidget = (useDefaultDisabledStyle?: boolean) =>
  makeStyles(theme =>
    createStyles({
      root: {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
        border: `1px solid ${theme.palette.text.primary}`,
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
        borderBottom: `6px solid ${theme.palette.text.primary}`,
        transition: 'background-color 100ms ease',
        '&:focus': {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          backgroundColor: theme.palette.action.hover,
        },
        '&:disabled': useDefaultDisabledStyle
          ? {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
              opacity: theme.palette.action.disabledOpacity,
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
              border: `1px solid ${theme.palette.text.secondary}`,
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
              borderBottom: `6px solid ${theme.palette.text.secondary}`,
            }
          : undefined,
      },
    })
  )();

export const LARGE_WIDGET_SIZE = 320;
export const SMALL_WIDGET_SIZE = 200;

type Props = {
  children: React.ReactNode,
  onClick: () => void,
  size: 'small' | 'large' | 'banner',
  disabled?: boolean,
  useDefaultDisabledStyle?: boolean
};

export const CardWidget = ({
  children,
  onClick,
  size,
  disabled,
  useDefaultDisabledStyle,
}: Props) => {
  const classes = useStylesForWidget(useDefaultDisabledStyle);
  const { isMobile } = useResponsiveWindowSize();

  const widgetMaxWidth =
    size === 'banner'
      ? undefined
      : isMobile
      ? undefined
      : size === 'small'
      ? SMALL_WIDGET_SIZE
      : LARGE_WIDGET_SIZE;

  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      onClick={onClick}
      focusRipple
      elevation={2}
      style={{
        ...styles.buttonBase,
        maxWidth: widgetMaxWidth,
      }}
      classes={classes}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onClick();
        }
      }}
      disabled={disabled}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.contentWrapper}>{children}</div>
    </ButtonBase>
  );
};
