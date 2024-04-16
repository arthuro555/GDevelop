// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
// @ts-expect-error - TS6142 - Module './Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
import ContextMenu, { ContextMenuInterface } from './Menu/ContextMenu';
import { useLongTouch } from '../Utils/UseLongTouch';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from './Grid';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
import { dataObjectToProps, HTMLDataset } from '../Utils/HTMLDataset';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';

const styles = {
  tabContentContainer: {
    width: '100%',
    position: 'relative',
    textAlign: 'initial',
    minHeight: 0,
    display: 'flex',
    flex: 1,
  },
  tabLabel: {
    maxWidth: 360,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '15px', // Same as in Mosaic.css (for mosaic-window-title)
  },
  tabLabelAndIcon: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  closeButton: {
    marginRight: 5,
    marginLeft: 5,
  },
} as const;

type TabContentContainerProps = {
  active: boolean,
  children: React.ReactNode
};

/**
 * Contains the content of a tab. Two important things:
 *
 * 1) Instead of setting the "height" of hidden tabs to "0", we set "display" to "none" to avoid
 * messing with components (in particular components where you can scroll: when collapsed because of height=0,
 * they will lose they scrolling position).
 *
 * 2) shouldComponentUpdate is used to avoid updating the content of a tab that is not selected.
 */
export class TabContentContainer extends React.Component<TabContentContainerProps> {
  shouldComponentUpdate(nextProps: TabContentContainerProps) {
    return this.props.active || nextProps.active;
  }

  render() {
    const { children, active } = this.props;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div
        style={{
          ...styles.tabContentContainer,
          ...(active ? undefined : { display: 'none' }),
        }}
      >
        {children}
      </div>
    );
  }
}

type ClosableTabsProps = {
  hideLabels?: boolean,
  children: React.ReactNode
};

export const ClosableTabs = ({
  hideLabels,
  children,
}: ClosableTabsProps) => {
  const containerRef = React.useRef<HTMLDivElement | null | undefined>(null);
  const tabItemContainerStyle = {
    maxWidth: '100%', // Tabs should take all width
    display: hideLabels ? 'none' : 'flex',
    flexWrap: 'nowrap', // Single line of tab...
    overflowX: 'overlay', // ...scroll horizontally if needed
    overflowY: 'hidden', // ...never scroll vertically (useful on Safari)
    marginTop: 6,
  } as const;

  const onScroll = React.useCallback((event: WheelEvent) => {
    const divElement = containerRef.current;
    if (divElement) {
      divElement.scrollLeft += event.deltaY;
    }
  }, []);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div
// @ts-expect-error - TS2322 - Type 'MutableRefObject<HTMLDivElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
      ref={containerRef}
      className="almost-invisible-scrollbar"
// @ts-expect-error - TS2322 - Type '{ readonly maxWidth: "100%"; readonly display: "none" | "flex"; readonly flexWrap: "nowrap"; readonly overflowX: "overlay"; readonly overflowY: "hidden"; readonly marginTop: 6; }' is not assignable to type 'Properties<string | number, string & {}>'.
      style={tabItemContainerStyle}
// @ts-expect-error - TS2322 - Type '(event: WheelEvent) => void' is not assignable to type 'WheelEventHandler<HTMLDivElement>'.
      onWheel={onScroll}
    >
      {children}
    </div>
  );
};

export type ClosableTabProps = {
  id?: string,
  data?: HTMLDataset,
  active: boolean,
  label: React.ReactNode | null | undefined,
  icon: React.ReactNode | null | undefined,
  closable: boolean,
  onClose: () => void,
  onCloseOthers: () => void,
  onCloseAll: () => void,
  onClick: () => void,
  onActivated: () => void
};

export function ClosableTab({
  id,
  data,
  active,
  onClose,
  onCloseOthers,
  onCloseAll,
  label,
  icon,
  closable,
  onClick,
  onActivated,
}: ClosableTabProps) {
  React.useEffect(
    () => {
      if (active) {
        onActivated();
      }
    },
    [active, onActivated]
  );
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);

// @ts-expect-error - TS1005 - ',' expected. | TS7005 - Variable 'any' implicitly has an 'any' type. | TS1005 - ';' expected.
  const openContextMenu = event: any => {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'.
    event.stopPropagation();
    if (contextMenu.current) {
// @ts-expect-error - TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'clientX' does not exist on type 'Event'. | TS2532 - Object is possibly 'undefined'. | TS2339 - Property 'clientY' does not exist on type 'Event'.
      contextMenu.current.open(event.clientX, event.clientY);
    }
  };

  const closeOnMiddleClick = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
    event => {
      if (event.nativeEvent && event.nativeEvent.button === 1) {
        onClose();
      }
    },
    [onClose]
  );

  // Allow a long press to show the context menu
  const longTouchForContextMenuProps = useLongTouch(
    React.useCallback(
      event => {
        if (contextMenu.current) {
          contextMenu.current.open(event.clientX, event.clientY);
        }
      },
      [contextMenu]
    )
  );

  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const textColor = !active
    ? gdevelopTheme.closableTabs.textColor
    : gdevelopTheme.closableTabs.selectedTextColor;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <span
        id={id}
        style={{
          flexShrink: 0, // Tabs are never resized to fit in flex container
          position: 'relative',
          display: 'inline-block',
          marginRight: 2,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          borderTop: '1px solid black',
          borderRight: '1px solid black',
          borderLeft: '1px solid black',
          borderBottom: 'none',
          borderColor: active
            ? gdevelopTheme.closableTabs.selectedBorderColor
            : gdevelopTheme.closableTabs.backgroundColor,
          backgroundColor: !active
            ? gdevelopTheme.closableTabs.backgroundColor
            : gdevelopTheme.closableTabs.selectedBackgroundColor,
        }}
      >
{ /* @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ButtonBase
          onClick={onClick}
          onAuxClick={closable ? closeOnMiddleClick : undefined}
          onContextMenu={openContextMenu}
          data-active={active ? 'true' : undefined}
          id={id ? `${id}-button` : undefined}
          {...dataObjectToProps(data)}
          {...longTouchForContextMenuProps}
          focusRipple
          // If the touch ripple is not disabled, the dragged preview will
          // use the size of the ripple and it will be too big.
          disableTouchRipple
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <span
            style={{
              ...styles.tabLabelAndIcon,
              height: gdevelopTheme.closableTabs.height,
              color: textColor,
              fontFamily: gdevelopTheme.closableTabs.fontFamily,
            }}
          >
            {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {icon && label ? <Spacer /> : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {label && <span style={styles.tabLabel}>{label}</span>}
          </span>
        </ButtonBase>
        {closable && (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ButtonBase
            onClick={onClose}
            onAuxClick={closeOnMiddleClick}
            onContextMenu={openContextMenu}
            {...longTouchForContextMenuProps}
            focusRipple
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Cross
              style={{
                ...styles.closeButton,
                width: gdevelopTheme.closableTabs.height / 2,
                height: gdevelopTheme.closableTabs.height,
              }}
              htmlColor={textColor}
            />
          </ButtonBase>
        )}
      </span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ContextMenu
        ref={contextMenu}
        buildMenuTemplate={(i18n: I18nType) => [
          {
            label: i18n._(t`Close`),
            click: onClose,
            enabled: closable,
          },
          {
            label: i18n._(t`Close others`),
            click: onCloseOthers,
          },
          {
            label: i18n._(t`Close all`),
            click: onCloseAll,
          },
        ]}
      />
    </React.Fragment>
  );
}
