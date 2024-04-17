import React from 'react';

import { I18n } from '@lingui/react';

import { I18n as I18nType } from '@lingui/core';
import { MenuItemTemplate } from './Menu';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import ElectronMenuImplementation from './ElectronMenuImplementation';

import MaterialUIMenuImplementation from './MaterialUIMenuImplementation';

import optionalRequire from '../../Utils/OptionalRequire';
import useForceUpdate from '../../Utils/UseForceUpdate';
const electron = optionalRequire('electron') as typeof import('electron');

export type ContextMenuInterface = {
  open: (x: number, y: number, options?: any) => void;
};

type ContextMenuProps = {
  buildMenuTemplate: (i18n: I18nType, options?: any) => Array<MenuItemTemplate>;
};

const MaterialUIContextMenu = React.forwardRef<
  ContextMenuInterface,
  ContextMenuProps
>((props, ref) => {
  const [anchorPosition, setAnchorPosition] = React.useState<Array<number>>([
    0, 0,
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

  React.useImperativeHandle(ref, () => ({
    open,
  }));

  return openMenu ? (
    <I18n>
      {({ i18n }) => (
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

type ElectronContextMenuProps = ContextMenuProps & {
  i18n: I18nType;
};

const ElectronContextMenu = React.forwardRef<
  ContextMenuInterface,
  ElectronContextMenuProps
>((props, ref) => {
  const menuImplementation = new ElectronMenuImplementation();

  const open = (x: number, y: number, options: any) => {
    menuImplementation.buildFromTemplate(
      props.buildMenuTemplate(props.i18n, options)
    );
    menuImplementation.showMenu({
      left: x || 0,
      top: y || 0,
      width: 0,
      height: 0,
    });
  };

  React.useImperativeHandle(ref, () => ({
    open,
  }));

  return null;
});

const ElectronContextMenuWrapper = React.forwardRef<
  ContextMenuInterface,
  ContextMenuProps
>((props, ref) => {
  const electronContextMenu = React.useRef<
    ContextMenuInterface | null | undefined
  >(null);

  React.useImperativeHandle(ref, () => ({
    open: (x, y, options) => {
      if (electronContextMenu.current)
        electronContextMenu.current.open(x, y, options);
    },
  }));

  return (
    <I18n>
      {({ i18n }) => (
        // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2322 - Type 'MutableRefObject<ContextMenuInterface | null | undefined>' is not assignable to type 'LegacyRef<ElectronContextMenuProps> | undefined'.
        <ElectronContextMenu {...props} i18n={i18n} ref={electronContextMenu} />
      )}
    </I18n>
  );
});

export default electron ? ElectronContextMenuWrapper : MaterialUIContextMenu;
