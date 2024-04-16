import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MUIList from '@material-ui/core/List';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemIcon from '@material-ui/core/ListItemIcon';
import MUIListItemText from '@material-ui/core/ListItemText';
import MUIListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
// @ts-expect-error - TS6142 - Module './Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from './Menu/ElementWithMenu';
import Tooltip from '@material-ui/core/Tooltip';
import { MenuItemTemplate } from './Menu/Menu.flow';
import { dataObjectToProps, HTMLDataset } from '../Utils/HTMLDataset';
import { useLongTouch } from '../Utils/UseLongTouch';
import Collapse from '@material-ui/core/Collapse';

// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from './CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from './CustomSvgIcons/ShareExternal';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ChevronArrowTop'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowTop.js' implicitly has an 'any' type.
import ChevronTop from './CustomSvgIcons/ChevronArrowTop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronBottom from './CustomSvgIcons/ChevronArrowBottom';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Refresh'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Refresh.js' implicitly has an 'any' type.
import Refresh from './CustomSvgIcons/Refresh';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Remove'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Remove.js' implicitly has an 'any' type.
import Remove from './CustomSvgIcons/Remove';

const useDenseLists = true;
export const listItemWith32PxIconHeight = 32;
export const listItemWithoutIconHeight = 29;

const styles = {
  listItemText: {
    // Reduce the default spacing between list items
    // to densify the lists.
    margin: '1px 0',
    // Always break the words if necessary. Otherwise a long word
    // without spaces would be overflowing the list.
    // This seems to be necessary for all lists (we don't ever want
    // an overflow - and it's strange in a way that Material-UI is
    // not handling this by default?)
    wordBreak: 'break-word',
  },
  listWithGap: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    flexDirection: 'column',
  },
  noLeftPaddingListItem: { paddingLeft: 0 },
  dot: {
    height: 10,
    width: 10,
    marginLeft: 10,
    borderRadius: 5,
    flexShrink: 0,
  },
} as const;

type DoubleClickMouseEvent = {
  button: 0 | 1 | 2
};

// Support for a bunch of different secondary actions
type ListItemRightButtonProps = {
  displayReloadButton: boolean,
  reloadButtonTooltip: React.ReactNode,
  onReload?: () => void
} | {
  displayMenuButton: boolean,
  buildMenuTemplate: (i18n: I18nType) => Array<MenuItemTemplate>
} | {
  displayLinkButton: boolean,
  onOpenLink: () => void
} | {
  displayRemoveButton: true,
  onRemove: () => void
} | {
  displayDot: boolean,
  dotColor: string
} | Record<any, any>;

// We support a subset of the props supported by Material-UI v0.x ListItem
// They should be self descriptive - refer to Material UI docs otherwise.
type ListItemProps = {
  onClick?: () => undefined | Promise<undefined> | null | undefined,
  onDoubleClick?: (event: DoubleClickMouseEvent) => void,
  primaryText: React.ReactNode | null | undefined,
  secondaryText?: React.ReactNode,
  disableAutoTranslate?: boolean,
  selected?: boolean,
  autoGenerateNestedIndicator?: boolean // TODO: Rename?,
  renderNestedItems?: () => Array<React.ReactElement<any> | null>,
  isGreyed?: boolean,
  open?: boolean,
  initiallyOpen?: boolean,
  disabled?: boolean,
  nestedListStyle?: {
    padding: 0
  },
  noPadding?: boolean,
  /* Set to true to remove button behavior of item that contains nested items. */
  disableButtonBehaviorForParentItem?: boolean,
  style?: {
    color?: string,
    backgroundColor?: string,
    borderBottom?: string,
    opacity?: number,
    paddingLeft?: number
  },
  leftIcon?: React.ReactNode
} & (ListItemRightButtonProps) & {
  rightIconColor?: string,
  secondaryTextLines?: 1 | 2,
  secondaryTextSize?: 'body' | 'body-small',
  id?: string | null | undefined,
  data?: HTMLDataset
};

export type ListItemRefType = any; // Should be a material-ui ListItem

const useStylesForGreyedListItem = makeStyles(theme => {
  return createStyles({
    root: { color: theme.palette.text.secondary },
  });
});

/**
 * A ListItem to be used in a List.
 *
 * Also used outside of a List by virtualized lists.
 */
export const ListItem = React.forwardRef<ListItemProps, ListItemRefType>((props: ListItemProps, ref) => {
  const [isOpen, setIsOpen] = React.useState(!!props.initiallyOpen);
  const elementWithMenu = React.useRef<ElementWithMenu | null | undefined>(null);
  const classes = useStylesForGreyedListItem();

  const openContextMenu = React.useCallback(
    () => {
      if (elementWithMenu.current) {
        elementWithMenu.current.open();
      }
    },
    [elementWithMenu]
  );
  const longTouchForContextMenuProps = useLongTouch(openContextMenu);

  const renderListItemSecondaryAction = () => {
// @ts-expect-error - TS2339 - Property 'displayReloadButton' does not exist on type 'ListItemProps'.
    if (props.displayReloadButton) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'reloadButtonTooltip' does not exist on type 'ListItemProps'. */}
          <Tooltip title={props.reloadButtonTooltip}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton
              size="small"
              edge="end"
              aria-label="reload"
// @ts-expect-error - TS2339 - Property 'onReload' does not exist on type 'ListItemProps'.
              onClick={props.onReload}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Refresh />
            </IconButton>
          </Tooltip>
        </MUIListItemSecondaryAction>
      );
    }
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ListItemProps'.
    if (props.buildMenuTemplate) {
// @ts-expect-error - TS2339 - Property 'displayMenuButton' does not exist on type 'ListItemProps'.
      return props.displayMenuButton ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ElementWithMenu
            ref={elementWithMenu}
            element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <IconButton size="small" edge="end" aria-label="menu">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ThreeDotsMenu style={{ color: props.rightIconColor }} />
              </IconButton>
            }
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ListItemProps'.
            buildMenuTemplate={props.buildMenuTemplate}
          />
        </MUIListItemSecondaryAction>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ElementWithMenu
          ref={elementWithMenu}
          element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div /> /* We still need a dummy div for context menu placement */
          }
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ListItemProps'.
          buildMenuTemplate={props.buildMenuTemplate}
        />
      );
    }
// @ts-expect-error - TS2339 - Property 'displayLinkButton' does not exist on type 'ListItemProps'.
    if (props.displayLinkButton) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            size="small"
            edge="end"
            aria-label="open link"
// @ts-expect-error - TS2339 - Property 'onOpenLink' does not exist on type 'ListItemProps'.
            onClick={props.onOpenLink}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ShareExternal style={{ color: props.rightIconColor }} />
          </IconButton>
        </MUIListItemSecondaryAction>
      );
    }
// @ts-expect-error - TS2339 - Property 'displayRemoveButton' does not exist on type 'ListItemProps'.
    if (props.displayRemoveButton) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            size="small"
            edge="end"
            aria-label="remove"
// @ts-expect-error - TS2339 - Property 'onRemove' does not exist on type 'ListItemProps'.
            onClick={props.onRemove}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Remove style={{ color: props.rightIconColor }} />
          </IconButton>
        </MUIListItemSecondaryAction>
      );
    }
// @ts-expect-error - TS2339 - Property 'displayDot' does not exist on type 'ListItemProps'.
    if (props.displayDot) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2339 - Property 'dotColor' does not exist on type 'ListItemProps'.
        <span style={{ ...styles.dot, backgroundColor: props.dotColor }} />
      );
    }

    return null;
  };

  const noPaddingStyle = props.noPadding
    ? styles.noLeftPaddingListItem
    : undefined;

  const { renderNestedItems } = props;

  if (!renderNestedItems) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <MUIListItem
        button
        dense={useDenseLists}
        disableRipple
        ContainerComponent={
          'div' /* Otherwise, when ListItemSecondaryAction is defined, we would get a li, that is not playing well in virtualized list, that are using ListItem without List */
        }
        onClick={props.onClick}
// @ts-expect-error - TS2769 - No overload matches this call.
        onDoubleClick={props.onDoubleClick}
        disabled={props.disabled}
        selected={props.selected}
        style={{
          // $FlowFixMe - Flow is not happy about two spreads.
          ...noPaddingStyle,
          ...props.style,
        }}
// @ts-expect-error - TS2339 - Property 'buildMenuTemplate' does not exist on type 'ListItemProps'.
        onContextMenu={props.buildMenuTemplate ? openContextMenu : undefined}
        {...longTouchForContextMenuProps}
        alignItems={props.secondaryTextLines === 2 ? 'flex-start' : undefined}
// @ts-expect-error - TS2769 - No overload matches this call.
        ref={ref}
// @ts-expect-error - TS2769 - No overload matches this call.
        id={props.id}
        {...dataObjectToProps(props.data)}
      >
        {props.leftIcon && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <MUIListItemIcon
            classes={props.isGreyed ? classes : undefined}
            style={{
              marginTop: 0, // MUI applies an unnecessary marginTop when items are aligned to the top.
            }}
          >
            {props.leftIcon}
          </MUIListItemIcon>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MUIListItemText
          classes={props.isGreyed ? classes : undefined}
          style={styles.listItemText}
          primary={props.primaryText}
          secondary={props.secondaryText}
          secondaryTypographyProps={{
            variant:
              props.secondaryTextSize === 'body-small' ? 'caption' : 'body1',
            ...(props.isGreyed ? { color: 'inherit' } : undefined),
          }}
          primaryTypographyProps={
            props.isGreyed ? { color: 'inherit' } : undefined
          }
          className={props.disableAutoTranslate ? 'notranslate' : ''}
        />
        {renderListItemSecondaryAction()}
      </MUIListItem>
    );
  } else {
    const isItemOpen = props.open === undefined ? isOpen : props.open;
    const onClickItem = () => {
      setIsOpen(!isItemOpen);
      if (props.onClick) {
        props.onClick();
      }
    };
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <MUIListItem
// @ts-expect-error - TS2769 - No overload matches this call.
          button={!props.disableButtonBehaviorForParentItem}
          dense={useDenseLists}
          disableRipple
          onClick={onClickItem}
          disabled={props.disabled}
          style={{
            // $FlowFixMe - Flow is not happy about two spreads.
            ...noPaddingStyle,
            ...props.style,
          }}
// @ts-expect-error - TS2769 - No overload matches this call.
          ref={ref}
// @ts-expect-error - TS2769 - No overload matches this call.
          id={props.id}
          {...dataObjectToProps(props.data)}
        >
          {props.leftIcon && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <MUIListItemIcon>{props.leftIcon}</MUIListItemIcon>
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MUIListItemText
            style={styles.listItemText}
            primary={props.primaryText}
            secondary={props.secondaryText}
            className={props.disableAutoTranslate ? 'notranslate' : ''}
          />
          {props.autoGenerateNestedIndicator ? (
            isItemOpen ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="collapse"
                  onClick={onClickItem}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ChevronTop />
                </IconButton>
              </MUIListItemSecondaryAction>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <MUIListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="expand"
                  onClick={onClickItem}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ChevronBottom />
                </IconButton>
              </MUIListItemSecondaryAction>
            )
          ) : null}
          {renderListItemSecondaryAction()}
        </MUIListItem>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Collapse in={isItemOpen} timeout="auto" unmountOnExit>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MUIList
            component="div"
            disablePadding
            style={{
              paddingLeft: 16,
              ...props.nestedListStyle,
            }}
            dense={useDenseLists}
          >
            {renderNestedItems()}
          </MUIList>
        </Collapse>
      </React.Fragment>
    );
  }
});

// We support a subset of the props supported by Material-UI v0.x List
// They should be self descriptive - refer to Material UI docs otherwise.
type ListProps = {
  children: React.ReactNode,
  style?: {
    overflowY?: 'scroll',
    flex?: 1,
    padding?: number
  },
  useGap?: boolean
};

/**
 * List based on Material-UI List.
 */
export const List = (props: ListProps) => {
  let listStyle = { ...props.style };
  if (props.useGap) {
    listStyle = { ...listStyle, ...styles.listWithGap };
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MUIList style={listStyle} dense={useDenseLists}>
      {props.children}
    </MUIList>
  );
};
