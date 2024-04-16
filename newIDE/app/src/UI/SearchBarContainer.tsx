import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from './Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from './TextEllipsis';
import { GDevelopTheme } from './Theme';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Search'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Search.js' implicitly has an 'any' type.
import Search from './CustomSvgIcons/Search';
import { dataObjectToProps } from '../Utils/HTMLDataset';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Filter'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Filter.js' implicitly has an 'any' type.
import Filter from './CustomSvgIcons/Filter';
// @ts-expect-error - TS6142 - Module './HelpIcon' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpIcon/index.tsx', but '--jsx' is not set.
import HelpIcon from './HelpIcon';
// @ts-expect-error - TS6142 - Module './IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from './IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';
// @ts-expect-error - TS6142 - Module './Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from './Menu/ElementWithMenu';
import { MenuItemTemplate } from './Menu/Menu.flow';

// We override the style of paper for the border, as we need access
// to the hover/focus status of the paper to change the border color.
const usePaperStyles = ({
  theme,
  disabled,
  nonEmpty,
  focused,
}: {
  nonEmpty: boolean,
  disabled: boolean,
  theme: GDevelopTheme,
  focused: boolean
}) =>
  makeStyles({
    root: {
      border: `1px solid ${
        focused ? theme.searchBar.borderColor.focused : 'transparent'
      }`,
      '&:hover': {
        border:
          !focused &&
          !disabled &&
          `1px solid ${theme.searchBar.borderColor.hovered}`,
      },
    },
  })();

// Defines the space an icon takes with a button, to place the popper accordingly.
const leftIconSpace = 43;
const rightIconSpace = 33;

const getStyles = ({
  nonEmpty,
  disabled,
  theme,
  aspect,
  focused,
  hasHelpPage,
}: {
  nonEmpty: boolean,
  disabled: boolean,
  theme: GDevelopTheme,
  aspect?: 'integrated-search-bar',
  focused: boolean,
  hasHelpPage: boolean
}) => {
  const iconOpacity = !disabled ? 1 : 0.38;
  const iconSize = 30;
  return {
    root: {
      height: 30,
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: disabled
        ? theme.searchBar.backgroundColor.disabled
        : theme.searchBar.backgroundColor.default,
      borderRadius: aspect === 'integrated-search-bar' ? 0 : 4,
    },
    iconButtonClose: {
      style: {
        opacity: iconOpacity,
        visibility: nonEmpty && !disabled ? 'visible' : 'hidden',
        transition: 'visibility 0s linear 0.1s',
      },
    },
    iconButtonSearch: {
      container: {
        padding: '5px 10px',
      },
      iconStyle: {
        fontSize: 18,
        opacity: focused ? 1 : 0.5,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
    iconButtonFilter: {
      style: {
        opacity: iconOpacity,
        transform: nonEmpty ? 'translateX(0)' : `translateX(${iconSize}px)`,
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
    iconButtonHelp: {
      style: {
        opacity: iconOpacity,
        transform: nonEmpty ? 'translateX(0)' : `translateX(${iconSize}px)`,
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
    inputStyle: {
      padding: 0,
      color: disabled
        ? theme.searchBar.textColor.disabled
        : nonEmpty && focused
        ? theme.searchBar.textColor.focused
        : theme.searchBar.textColor.default,
      ...textEllipsisStyle,
    },
    searchContainer: {
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    inputContainer: {
      margin: 'auto 4px',
      flex: 1,
    },
    popperContainer: {
      left: `-${leftIconSpace}px`,
      right: hasHelpPage ? `-${2 * rightIconSpace}px` : `-${rightIconSpace}px`,
      position: 'absolute',
      zIndex: 1, // Make sure the Popper is above the search bar.
    },
  };
};

type Props = {
  renderContent: (
    arg1: {
      inputStyle: any,
      popperContainerStyle: any
    },
  ) => React.ReactElement,
  disabled?: boolean,
  isSearchBarEmpty: boolean,
  isFocused: boolean,
  helpPagePath?: string | null | undefined,
  aspect?: 'integrated-search-bar',
  buildMenuTemplate?: (i18n: I18nType) => Array<MenuItemTemplate>,
  onCancel: () => void,
  renderSubLine?: () => React.ReactElement | null | undefined
};

const SearchBarContainer = ({
  renderContent,
  disabled,
  isSearchBarEmpty,
  isFocused,
  helpPagePath,
  aspect,
  buildMenuTemplate,
  onCancel,
  renderSubLine,
}: Props) => {
  const GDevelopTheme = React.useContext(GDevelopThemeContext);

  const styles = getStyles({
    nonEmpty: !isSearchBarEmpty,
    disabled: !!disabled,
    theme: GDevelopTheme,
    aspect,
    focused: isFocused,
    hasHelpPage: !!helpPagePath,
  });

  const paperStyles = usePaperStyles({
    theme: GDevelopTheme,
    disabled: !!disabled,
    nonEmpty: !isSearchBarEmpty,
    focused: isFocused,
  });

  const content = React.useMemo(
    () =>
      renderContent({
        inputStyle: styles.inputStyle,
        popperContainerStyle: styles.popperContainer,
      }),
    [renderContent, styles.inputStyle, styles.popperContainer]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Paper classes={paperStyles} style={styles.root}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div style={styles.iconButtonSearch.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Search
              style={styles.iconButtonSearch.iconStyle}
              viewBox="2 2 12 12"
            />
          </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
// @ts-expect-error - TS2322 - Type '{ position: string; display: string; width: string; }' is not assignable to type 'Properties<string | number, string & {}>'.
            style={styles.searchContainer}
            {...dataObjectToProps({ searchBarContainer: 'true' })}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.inputContainer}>{content}</div>
          </div>
          {buildMenuTemplate && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <ElementWithMenu
              element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton
                  style={styles.iconButtonFilter.style}
                  disabled={disabled}
                  size="small"
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Filter />
                </IconButton>
              }
              buildMenuTemplate={buildMenuTemplate}
            />
          )}
          {helpPagePath && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpIcon
              disabled={disabled}
              helpPagePath={helpPagePath}
              style={styles.iconButtonHelp.style}
              size="small"
            />
          )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            onClick={onCancel}
            style={styles.iconButtonClose.style}
            disabled={disabled}
            size="small"
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Cross />
          </IconButton>
        </Paper>
      </Line>
      {renderSubLine && renderSubLine()}
    </Column>
  );
};

export default SearchBarContainer;
