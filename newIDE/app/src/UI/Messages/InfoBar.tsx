import * as React from 'react';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { useScreenType } from '../Responsive/ScreenTypeMeasurer';
import GDevelopThemeContext from '../Theme/GDevelopThemeContext';

type Props = {
  message: React.ReactNode,
  touchScreenMessage?: React.ReactNode,
  visible: boolean,
  duration?: number,
  hide: () => void,
  actionLabel?: React.ReactNode,
  onActionClick?: () => undefined | Promise<undefined>
};

const InfoBar = ({
  visible,
  touchScreenMessage,
  message,
  hide,
  actionLabel,
  onActionClick,
  duration = 3000,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const screenType = useScreenType();

  React.useEffect(
    () => {
      if (visible) {
        const timeout = setTimeout(() => {
          hide();
        }, duration);
        return () => clearTimeout(timeout);
      }
    },
    [visible, hide, duration]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Snackbar
      open={visible}
      message={
        screenType === 'touch' && touchScreenMessage
          ? touchScreenMessage
          : message
      }
      action={
        actionLabel && onActionClick ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Button
            color={
              gdevelopTheme.palette.type === 'light' ? 'secondary' : 'primary'
            }
            size="small"
            onClick={onActionClick}
          >
            {actionLabel}
          </Button>
        ) : null
      }
    />
  );
};

export default InfoBar;
