import * as React from 'react';
import MUITabs from '@material-ui/core/Tabs';
import MUITab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';

const styles = {
  tabs: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tab: {
    flexGrow: 1, // Ensure the tab is taking space depending on its text length.
  },
  selectedTab: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tabIndicator: {
    height: 3,
  },
  tabScrollButton: {
    display: 'none',
  },
} as const;

const useStylesForTab = makeStyles({
  wrapper: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

// We support a subset of the props supported by Material-UI v0.x Tabs
// They should be self descriptive - refer to Material UI docs otherwise.
type TabProps<TabName> = {
  label: React.ReactNode;
  value: TabName;
  tabIndex: number;
  disabled?: boolean;
  id?: string | null | undefined;
  style: any; // Allow additional style from the Tabs component.
};

/**
 * A Tab based on Material-UI Tab.
 */
function Tab<TabName>(props: TabProps<TabName>) {
  const classes = useStylesForTab();
  // @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS2769 - No overload matches this call.
  return <MUITab classes={classes} {...props} />;
}

export type TabOptions<TabName> = Array<{
  label: React.ReactNode;
  value: TabName;
  id?: string;
  disabled?: boolean;
}>;

// We support a subset of the props supported by Material-UI v0.x Tabs
// They should be self descriptive - refer to Material UI docs otherwise.
type TabsProps<TabName> = {
  value?: TabName;
  onChange: (arg1: TabName) => void;
  options: TabOptions<TabName>;
  variant?: 'scrollable'; // Allow overriding the scrollable variant for specific cases.
};

/**
 * Tabs based on Material-UI Tabs.
 */
export function Tabs<TabName>({
  value,
  onChange,
  options,
  variant,
}: TabsProps<TabName>) {
  const { windowSize } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  // Ensure tabs are scrollable when they reach too many options on the screen.
  const shouldScroll =
    (windowSize === 'small' && options.length >= 2) ||
    (windowSize === 'medium' && options.length >= 4) ||
    (windowSize === 'large' && options.length >= 7) ||
    (windowSize === 'xlarge' && options.length >= 8);
  const automaticScreenVariant = shouldScroll ? 'scrollable' : 'fullWidth';
  return (
    <MUITabs
      variant={variant || automaticScreenVariant}
      textColor="primary"
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      scrollButtons={variant || shouldScroll ? 'on' : 'off'}
      style={styles.tabs}
      TabIndicatorProps={{
        style: {
          ...styles.tabIndicator,
          backgroundColor: gdevelopTheme.tabs.indicator.backgroundColor,
        },
      }}
      TabScrollButtonProps={{
        style: styles.tabScrollButton,
      }}
    >
      {options.map((option, index) => {
        const isTabSelected = option.value === value;
        const selectedTabIndex = options.findIndex(
          (option) => option.value === value
        );
        // Apply a specific style if it's far from the selected tab.
        // 2 to the right, 1 to the left, as we apply a border on the left of the tab.
        const isTabDistant =
          index !== 0 &&
          (index - selectedTabIndex >= 2 || selectedTabIndex - index >= 1);
        return (
          <Tab
            value={option.value}
            disabled={option.disabled}
            label={option.label}
            id={option.id}
            tabIndex={index}
            key={index}
            style={{
              ...styles.tab,
              ...(isTabSelected
                ? styles.selectedTab
                : isTabDistant
                  ? {
                      borderLeft: `1px solid ${gdevelopTheme.tabs.separator.color}`,
                    }
                  : {}),
            }}
          />
        );
      })}
    </MUITabs>
  );
}
