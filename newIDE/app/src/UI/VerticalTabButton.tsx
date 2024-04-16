import * as React from 'react';
import Button from '@material-ui/core/Button';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from './Grid';

export const verticalTabButtonSize = 30;

const styles = {
  button: {
    justifyContent: 'start',
    minWidth: 0, // Ensure we can use the button with just an icon.
    minHeight: verticalTabButtonSize, // Ensure it stays the same size with and without label.
    padding: '4px 6px', // Ensure same padding applied no matter the button variant.
    fontWeight: 400,
    transition: 'none', // Disable transition to avoid desync between label and icon color.
  },
  buttonWithoutLabel: {
    marginTop: 10,
    justifyContent: 'center',
  },
  iconWrapperWithoutLabel: {
    justifyContent: 'center',
    display: 'flex',
  },
  iconWrapperWithLabel: {
    padding: '3px 8px',
    justifyContent: 'center',
    display: 'flex',
  },
} as const;

type Props = {
  label: React.ReactNode,
  onClick: (ev?: any) => undefined | Promise<undefined> | null | undefined,
  getIcon: (
    arg1: {
      color: string,
      fontSize: 'inherit' | 'small'
    },
  ) => React.ReactElement,
  isActive: boolean,
  hideLabel?: boolean,
  id?: string
};

const VerticalTabButton = ({
  label,
  getIcon,
  onClick,
  isActive,
  hideLabel,
  id,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Button
      variant={isActive ? 'contained' : 'text'}
      size="small"
      style={{
        ...styles.button,
        ...(hideLabel ? styles.buttonWithoutLabel : {}),
      }}
      fullWidth
      onClick={onClick}
      color={isActive ? 'primary' : 'default'}
      id={id}
      disableElevation
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={
          hideLabel
            ? styles.iconWrapperWithoutLabel
            : styles.iconWrapperWithLabel
        }
      >
        {getIcon({
          color: isActive ? 'inherit' : 'secondary',
          fontSize: 'small',
        })}
      </div>
      {!hideLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Spacer />
          {/* span element is required to prevent browser auto translators to crash the app - See https://github.com/4ian/GDevelop/issues/3453 */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <span>{label}</span>
        </>
      )}
    </Button>
  );
};

export default VerticalTabButton;
