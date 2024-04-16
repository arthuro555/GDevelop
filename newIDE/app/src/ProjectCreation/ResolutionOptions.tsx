import * as React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles, createStyles } from '@material-ui/styles';
import { shouldValidate } from '../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/DesktopHD'. '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/Icons/DesktopHD.js' implicitly has an 'any' type.
import DesktopHD from './Icons/DesktopHD';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/DesktopMobileLandscape'. '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/Icons/DesktopMobileLandscape.js' implicitly has an 'any' type.
import DesktopMobileLandscape from './Icons/DesktopMobileLandscape';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/MobilePortrait'. '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/Icons/MobilePortrait.js' implicitly has an 'any' type.
import MobilePortrait from './Icons/MobilePortrait';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/CustomSize'. '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/Icons/CustomSize.js' implicitly has an 'any' type.
import CustomSize from './Icons/CustomSize';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';

const styles = {
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
    gridGap: '0.5rem',
    margin: 2,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
  },
  buttonBase: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    padding: 8,
    cursor: 'default',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  largeIcon: {
    transform: 'scale(1.5)',
  },
  customSizeField: {
    fontSize: 12,
    padding: 2,
  },
} as const;

export type ResolutionOption = 'mobilePortrait' | 'desktopMobileLandscape' | 'desktopHD' | 'custom';

export const resolutionOptions: Partial<Record<ResolutionOption, {
  label: React.ReactNode,
  height?: number,
  width?: number,
  orientation: 'landscape' | 'portrait' | 'default',
  icon: React.ReactNode
}>> = {
  mobilePortrait: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Mobile portrait</Trans>,
    width: 720,
    height: 1280,
    orientation: 'portrait',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <MobilePortrait fontSize="large" />,
  },
  desktopMobileLandscape: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Desktop & Mobile landscape</Trans>,
    width: 1280,
    height: 720,
    orientation: 'landscape',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <DesktopMobileLandscape fontSize="large" />,
  },
  desktopHD: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Desktop Full HD</Trans>,
    width: 1920,
    height: 1080,
    orientation: 'default',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <DesktopHD fontSize="large" style={styles.largeIcon} />,
  },
  custom: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Custom size</Trans>,
    orientation: 'default',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <CustomSize fontSize="large" style={styles.largeIcon} />,
  },
};

const maxCustomSize = 9999;
const minCustomSize = 1;
export const defaultCustomWidth = 800;
export const defaultCustomHeight = 600;

const ResolutionDimensionTextField = ({
  value,
  onChange,
  defaultValue,
  disabled,
}: {
  value: number | null | undefined,
  onChange: (value?: number | null | undefined) => void,
  defaultValue: number,
  disabled?: boolean
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SemiControlledTextField
    margin="none"
    style={styles.customSizeField}
    inputStyle={{ padding: 0 }}
    type="number"
    value={value ? value.toString(10) : ''}
// @ts-expect-error - TS7006 - Parameter 'newValueString' implicitly has an 'any' type.
    onChange={newValueString => {
      // Allow any value, we will clean the value on blur.
      const newValueInt = parseInt(newValueString, 10);
      // Important to allow null when the user is clearing the field.
      const newValue = isNaN(newValueInt) ? null : newValueInt;
      onChange(newValue);
    }}
    onBlur={() => {
      const newValueInt = parseInt(
// @ts-expect-error - TS2345 - Argument of type 'number' is not assignable to parameter of type 'string'.
        value || defaultValue, // Default if empty.
        10
      );
      const newValueWithinLimits = Math.min(
        Math.max(newValueInt, minCustomSize),
        maxCustomSize
      );
      onChange(newValueWithinLimits);
    }}
    min={0} // This value is not valid, but it's required to start at 0 for the step to go from 10 to 10.
    max={maxCustomSize}
    step={10}
  />
);

// Styles to give the impression of pressing an element.
const useStylesForButtonBase = (selected: boolean) =>
  makeStyles(theme =>
    createStyles({
      root: {
        outline: selected
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          ? `2px solid ${theme.palette.secondary.dark}`
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          : `1px solid ${theme.palette.text.disabled}`,
        '&:focus': {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
          backgroundColor: theme.palette.action.hover,
        },
      },
    })
  )();

type Props = {
  children: React.ReactNode,
  onClick: () => void,
  selected: boolean,
  disabled?: boolean
};

const ResolutionOptionButton = ({
  children,
  onClick,
  selected,
  disabled,
}: Props) => {
  const classes = useStylesForButtonBase(selected);

  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      onClick={onClick}
      elevation={2}
      style={{
        ...styles.buttonBase,
      }}
      classes={classes}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event) && !selected) {
          onClick();
        }
      }}
      disableTouchRipple={selected} // Avoid ripple effect even if already selected.
      disabled={disabled}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.contentWrapper}>{children}</div>
    </ButtonBase>
  );
};

const ResolutionOptions = ({
  selectedOption,
  onClick,
  disabled,
  customWidth,
  customHeight,
  onCustomWidthChange,
  onCustomHeightChange,
}: {
  selectedOption: string,
  onClick: (arg1: ResolutionOption) => void,
  disabled?: boolean,
  customWidth: number | null | undefined,
  customHeight: number | null | undefined,
  onCustomWidthChange: (arg1?: number | null | undefined) => void,
  onCustomHeightChange: (arg1?: number | null | undefined) => void
}) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={styles.optionsContainer}>
      {Object.keys(resolutionOptions).map((key, index) => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<Record<ResolutionOption, { label: ReactNode; height?: number | undefined; width?: number | undefined; orientation: "default" | "landscape" | "portrait"; icon: ReactNode; }>>'.
        const { width, height, label, icon } = resolutionOptions[key];
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column expand noMargin key={key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResolutionOptionButton
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'ResolutionOption'.
              onClick={() => onClick(key)}
              selected={selectedOption === key}
              disabled={disabled}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column
                expand
                alignItems="center"
                justifyContent="center"
                noMargin
              >
                {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="body2" noMargin>
                    {label}
                  </Text>
                  {width && height ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Text size="body-small" noMargin color="secondary">
                      {width}x{height}
                    </Text>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line noMargin alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="body-small" noMargin color="secondary">
                        W
                      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ResolutionDimensionTextField
                        value={customWidth}
                        onChange={onCustomWidthChange}
                        defaultValue={defaultCustomWidth}
                        disabled={disabled}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="body-small" noMargin color="secondary">
                        H
                      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <ResolutionDimensionTextField
                        value={customHeight}
                        onChange={onCustomHeightChange}
                        defaultValue={defaultCustomHeight}
                        disabled={disabled}
                      />
                    </Line>
                  )}
                </Column>
              </Column>
            </ResolutionOptionButton>
          </Column>
        );
      })}
    </div>
  );
};

export default ResolutionOptions;
