import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from './Menu/ElementWithMenu';
import { MenuItemTemplate } from './Menu/Menu.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from './Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from './CustomSvgIcons/ChevronArrowBottom';

type Props = {
  id?: string,
  label?: React.ReactNode,
  primary?: boolean,
  disabled?: boolean,
  icon?: React.ReactNode,
  onClick: () => undefined | Promise<undefined> | null | undefined,
  buildMenuTemplate: (i18n: I18nType) => Array<MenuItemTemplate>,
  style?: {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    margin?: number,
    flexShrink?: 0
  }
};

const shouldNeverBeCalled = () => {
  throw new Error(
    'This FlatButtonWithSplitMenu onClick should never be called'
  );
};

const styles = {
  mainButton: { flex: 1 },
  arrowDropDownButton: {
    // Reduce the size forced by Material UI to avoid making the arrow
    // too big.
    minWidth: 30,
    paddingLeft: 0,
    paddingRight: 0,
  },
} as const;

/**
 * A flat button based on Material-UI button, that has a menu displayed
 * when the dropdown arrow is clicked.
 */
const FlatButtonWithSplitMenu = (props: Props) => {
  const {
    id,
    buildMenuTemplate,
    onClick,
    label,
    primary,
    icon,
    disabled,
  } = props;

  // In theory, focus ripple is only shown after a keyboard interaction
  // (see https://github.com/mui-org/material-ui/issues/12067). However, as
  // it's important to get focus right in the whole app, make the ripple
  // always visible to be sure we're getting focusing right.
  const focusRipple = true;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonGroup
      variant={'outlined'}
      disableElevation
      color={primary ? 'secondary' : 'default'}
      disabled={disabled}
      size="small"
      style={props.style}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Button
        id={id}
        focusRipple={focusRipple}
        onClick={onClick}
        style={styles.mainButton}
      >
        {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        {!!icon && !!label && <Spacer />}
        {label}
      </Button>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ElementWithMenu
        passExtraProps={
          true /* ButtonGroup is passing props to Button: disabled, color, variant, size */
        }
        element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Button
            onClick={shouldNeverBeCalled}
            focusRipple={focusRipple}
            style={styles.arrowDropDownButton}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ChevronArrowBottom />
          </Button>
        }
        buildMenuTemplate={buildMenuTemplate}
      />
    </ButtonGroup>
  );
};

export default FlatButtonWithSplitMenu;
