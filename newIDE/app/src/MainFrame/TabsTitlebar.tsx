import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Menu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Menu.js' implicitly has an 'any' type.
import MenuIcon from '../UI/CustomSvgIcons/Menu';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../UI/Menu/ElementWithMenu';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
import { isMacLike } from '../Utils/Platform';
import Window, { useWindowControlsOverlayWatcher } from '../Utils/Window';
import { MenuItemTemplate } from '../UI/Menu/Menu.flow';
import useForceUpdate from '../Utils/UseForceUpdate';
const electron = optionalRequire('electron');

type Props = {
  onBuildMenuTemplate: () => Array<MenuItemTemplate>,
  children: React.ReactNode
};

const DRAGGABLE_PART_CLASS_NAME = 'title-bar-draggable-part';

const styles = {
  container: { display: 'flex', flexShrink: 0, alignItems: 'flex-end' },
  leftSideArea: { alignSelf: 'stretch' },
  rightSideArea: { alignSelf: 'stretch', flex: 1 },
  menuIcon: { marginLeft: 4, marginRight: 4 },
} as const;

/**
 * The titlebar containing a menu, the tabs and giving space for window controls.
 */
export default function TabsTitlebar({
  children,
  onBuildMenuTemplate,
}: Props) {
  const forceUpdate = useForceUpdate();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const backgroundColor = gdevelopTheme.titlebar.backgroundColor;
  React.useEffect(
    () => {
      Window.setTitleBarColor(backgroundColor);
    },
    [backgroundColor]
  );

  // An installed PWA can have window controls displayed as overlay. If supported,
  // we set up a listener to detect any change and force a refresh that will read
  // the latest size of the controls.
  useWindowControlsOverlayWatcher({ onChanged: forceUpdate });

  // macOS displays the "traffic lights" on the left.
  const isDesktopMacos = !!electron && isMacLike();
  let leftSideOffset = isDesktopMacos ? 76 : 0;

  const isDesktopWindowsOrLinux = !!electron && !isMacLike();
  // Windows and Linux have their "window controls" on the right
  let rightSideOffset = isDesktopWindowsOrLinux ? 150 : 0;

  // An installed PWA can have window controls displayed as overlay,
  // which we measure here to set the offsets.
// @ts-expect-error - TS2339 - Property 'windowControlsOverlay' does not exist on type 'Navigator'.
  const { windowControlsOverlay } = navigator;
  if (windowControlsOverlay) {
    if (windowControlsOverlay.visible) {
      const { x, width } = windowControlsOverlay.getTitlebarAreaRect();
      leftSideOffset = x;
      rightSideOffset = window.innerWidth - x - width;
    }
  }
  const rightSideAdditionalOffsetToGiveSpaceToDrag = 30;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={{ ...styles.container, backgroundColor }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.leftSideArea,
          width: leftSideOffset,
        }}
        className={DRAGGABLE_PART_CLASS_NAME}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ElementWithMenu
        element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton
            size="small"
            id="gdevelop-main-menu"
            style={styles.menuIcon}
            color="default"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MenuIcon />
          </IconButton>
        }
        buildMenuTemplate={onBuildMenuTemplate}
      />
      {children}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.rightSideArea,
          minWidth:
            rightSideOffset + rightSideAdditionalOffsetToGiveSpaceToDrag,
        }}
        className={DRAGGABLE_PART_CLASS_NAME}
      />
    </div>
  );
}
