import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { MenuItemTemplate } from './Menu.flow';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import ElectronMenuImplementation from './ElectronMenuImplementation';
// @ts-expect-error - TS6142 - Module './MaterialUIMenuImplementation' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/MaterialUIMenuImplementation.tsx', but '--jsx' is not set.
import MaterialUIMenuImplementation from './MaterialUIMenuImplementation';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import useForceUpdate from '../../Utils/UseForceUpdate';
const electron = optionalRequire('electron');

export type ContextMenuInterface = {
  open: (x: number, y: number, options?: any) => void
};

type ContextMenuProps = {
  buildMenuTemplate: (i18n: I18nType, options?: any) => Array<MenuItemTemplate>
};

const MaterialUIContextMenu = React.forwardRef<ContextMenuProps, ContextMenuInterface>((props, ref) => {
  const [anchorPosition, setAnchorPosition] = React.useState<Array<number>>([
    0,
    0,
  ]);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [buildOptions, setBuildOptions] = React.useState<any>({});
  const forceUpdate = useForceUpdate();

  const menuImplementation = new MaterialUIMenuImplementation({
    onClose: () => setOpenMenu(false),
  });

  const open = (x: number, y: number, options: any) => {
    setAnchorPosition([x, y]);
    setBuildOptions(options);
    setOpenMenu(true);
  };

// @ts-expect-error - TS2741 - Property 'buildMenuTemplate' is missing in type '{ open: (x: number, y: number, options: any) => void; }' but required in type 'ContextMenuProps'.
  React.useImperativeHandle(ref, () => ({
    open,
  }));

  return openMenu ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Menu
          open
          anchorPosition={{
            left: anchorPosition[0],
            top: anchorPosition[1],
          }}
          anchorReference={'anchorPosition'}
          onClose={(event, reason) => {
            if (reason === 'backdropClick') {
              // Prevent any side effect of a backdrop click that should only
              // close the context menu.
              // When used in the ElementWithMenu component, there are cases where
              // the event propagates to the element on which the menu is set up and
              // then the event bubbles up, triggering click events on its way up.
// @ts-expect-error - TS2339 - Property 'stopPropagation' does not exist on type '{}'.
              event.stopPropagation();
            }
            setOpenMenu(false);
          }}
          TransitionComponent={Fade}
          {...menuImplementation.getMenuProps()}
        >
          {menuImplementation.buildFromTemplate(
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ContextMenuInterface'.
            props.buildMenuTemplate(i18n, buildOptions),
            forceUpdate
          )}
        </Menu>
      )}
    </I18n>
  ) : // Don't render the menu when it's not opened, as `buildMenuTemplate` could
  // be running logic to compute some labels or `enabled` flag values - and might
  // not be prepared to do that when the menu is not opened.
  null;
});

type ElectronContextMenuProps = (ContextMenuProps) & {
  i18n: I18nType
};

const ElectronContextMenu = React.forwardRef<ElectronContextMenuProps, ContextMenuInterface>((props, ref) => {
  const menuImplementation = new ElectronMenuImplementation();

  const open = (x: number, y: number, options: any) => {
    menuImplementation.buildFromTemplate(
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ContextMenuInterface'. | TS2339 - Property 'i18n' does not exist on type 'ContextMenuInterface'.
      props.buildMenuTemplate(props.i18n, options)
    );
    menuImplementation.showMenu({
      left: x || 0,
      top: y || 0,
      width: 0,
      height: 0,
    });
  };

// @ts-expect-error - TS2322 - Type '{ open: (x: number, y: number, options: any) => void; }' is not assignable to type 'ElectronContextMenuProps'.
  React.useImperativeHandle(ref, () => ({
    open,
  }));

  return null;
});

const ElectronContextMenuWrapper = React.forwardRef<ContextMenuProps, ContextMenuInterface>((props, ref) => {
  const electronContextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);
// @ts-expect-error - TS2741 - Property 'buildMenuTemplate' is missing in type '{ open: (x: any, y: any, options: any) => void; }' but required in type 'ContextMenuProps'.
  React.useImperativeHandle(ref, () => ({
// @ts-expect-error - TS7006 - Parameter 'x' implicitly has an 'any' type. | TS7006 - Parameter 'y' implicitly has an 'any' type. | TS7006 - Parameter 'options' implicitly has an 'any' type.
    open: (x, y, options) => {
      if (electronContextMenu.current)
        electronContextMenu.current.open(x, y, options);
    },
  }));

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<ContextMenuInterface | null | undefined>' is not assignable to type 'LegacyRef<ElectronContextMenuProps> | undefined'.
        <ElectronContextMenu {...props} i18n={i18n} ref={electronContextMenu} />
      )}
    </I18n>
  );
});

export default (electron ? ElectronContextMenuWrapper : MaterialUIContextMenu);
