import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, marginsSize } from '../../../UI/Grid';
import { useResponsiveWindowSize } from '../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/DoubleChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/DoubleChevronArrowRight.js' implicitly has an 'any' type.
import DoubleChevronArrowRight from '../../../UI/CustomSvgIcons/DoubleChevronArrowRight';
import VerticalTabButton, {
  verticalTabButtonSize,
// @ts-expect-error - TS6142 - Module '../../../UI/VerticalTabButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/VerticalTabButton.tsx', but '--jsx' is not set.
} from '../../../UI/VerticalTabButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Preferences'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preferences.js' implicitly has an 'any' type.
import Preferences from '../../../UI/CustomSvgIcons/Preferences';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../../../UI/CustomSvgIcons/GDevelopGLogo';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../../UI/Paper';
import {
  HomeTab,
  GetIconFunction,
  getTabsToDisplay,
// @ts-expect-error - TS6142 - Module './HomePageMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenu.tsx', but '--jsx' is not set.
} from './HomePageMenu';
// @ts-expect-error - TS6142 - Module '../../../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { Toolbar, ToolbarGroup } from '../../../UI/Toolbar';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

const iconSize = 20;
const iconButtonPaddingVertical = 8;
const iconButtonPaddingHorizontal = 5;
const iconButtonLabelPadding = 6;
const toolbarHeight =
  iconSize + 2 * iconButtonLabelPadding + 2 * iconButtonPaddingVertical;
export const homepageDesktopMenuBarWidth = 230;
export const homepageMediumMenuBarWidth =
  verticalTabButtonSize + 2 * marginsSize;

export const styles = {
  desktopMenu: {
    paddingTop: 40,
    paddingBottom: 10,
    minWidth: homepageDesktopMenuBarWidth,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileContainer: {
    width: '100%',
    fontSize: iconSize,
    height: toolbarHeight,
  },
  bottomButtonsContainer: {
    marginBottom: 'env(safe-area-inset-bottom)',
  },
  mobileButton: {
    padding: `${iconButtonPaddingVertical}px ${iconButtonPaddingHorizontal}px`,
    fontSize: 'inherit',
  },
  buttonLabel: { padding: iconButtonLabelPadding, display: 'flex' },
} as const;

type Props = {
  setActiveTab: (arg1: HomeTab) => void,
  activeTab: HomeTab,
  onOpenPreferences: () => void,
  onOpenAbout: () => void,
  onOpenHomePageMenuDrawer: () => void
};

const HomePageMenuBar = ({
  setActiveTab,
  activeTab,
  onOpenPreferences,
  onOpenAbout,
  onOpenHomePageMenuDrawer,
}: Props) => {
  const { isMobile, isMediumScreen } = useResponsiveWindowSize();
  const isMobileOrSmallScreen = isMobile || isMediumScreen;
  const theme = React.useContext(GDevelopThemeContext);
  const { profile } = React.useContext(AuthenticatedUserContext);
  const tabsToDisplay = getTabsToDisplay({ profile });
  const largeScreenOnlyButtons: {
    label: React.ReactNode,
    getIcon: GetIconFunction,
    id: string,
    onClick: () => void
  }[] = [
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Preferences</Trans>,
      id: 'settings',
      onClick: onOpenPreferences,
// @ts-expect-error - TS7031 - Binding element 'color' implicitly has an 'any' type. | TS7031 - Binding element 'fontSize' implicitly has an 'any' type.
      getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Preferences fontSize={fontSize} color={color} />
      ),
    },
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>About GDevelop</Trans>,
      id: 'about-gdevelop',
      onClick: onOpenAbout,
// @ts-expect-error - TS7031 - Binding element 'color' implicitly has an 'any' type. | TS7031 - Binding element 'fontSize' implicitly has an 'any' type.
      getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GDevelopGLogo fontSize={fontSize} color={color} />
      ),
    },
  ];

  if (isMobile) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Paper
        background="medium"
        square
        style={{
          ...styles.mobileContainer,
          borderTop: `1px solid ${theme.home.separator.color}`,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Toolbar height={toolbarHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ToolbarGroup>
{ /* @ts-expect-error - TS7031 - Binding element 'label' implicitly has an 'any' type. | TS7031 - Binding element 'tab' implicitly has an 'any' type. | TS7031 - Binding element 'getIcon' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type. */}
            {tabsToDisplay.map(({ label, tab, getIcon, id }) => {
              const isActive = activeTab === tab;
              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <IconButton
                  color="default"
                  key={id}
                  disableRipple
                  disableFocusRipple
                  style={styles.mobileButton}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  selected={isActive}
                  id={id}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <span style={styles.buttonLabel}>
                    {getIcon({
                      color: isActive ? 'inherit' : 'secondary',
                      fontSize: 'inherit',
                    })}
                  </span>
                </IconButton>
              );
            })}
          </ToolbarGroup>
        </Toolbar>
      </Paper>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper
      style={{
        ...(isMobileOrSmallScreen ? styles.mobileMenu : styles.desktopMenu),
        borderRight: `1px solid ${theme.home.separator.color}`,
      }}
      square
      background="dark"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand>
        {isMobileOrSmallScreen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <IconButton onClick={onOpenHomePageMenuDrawer} size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DoubleChevronArrowRight />
          </IconButton>
        )}
{ /* @ts-expect-error - TS7031 - Binding element 'label' implicitly has an 'any' type. | TS7031 - Binding element 'tab' implicitly has an 'any' type. | TS7031 - Binding element 'getIcon' implicitly has an 'any' type. | TS7031 - Binding element 'id' implicitly has an 'any' type. */}
        {tabsToDisplay.map(({ label, tab, getIcon, id }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <VerticalTabButton
            key={id}
            label={label}
            onClick={() => setActiveTab(tab)}
            getIcon={getIcon}
            isActive={activeTab === tab}
            hideLabel={isMobileOrSmallScreen}
            id={id}
          />
        ))}
      </Column>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div style={styles.bottomButtonsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
          {largeScreenOnlyButtons.map(({ label, getIcon, onClick, id }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <VerticalTabButton
              key={id}
              label={label}
              onClick={onClick}
              getIcon={getIcon}
              isActive={false}
              hideLabel={isMobileOrSmallScreen}
              id={id}
            />
          ))}
        </Column>
      </div>
    </Paper>
  );
};

export default HomePageMenuBar;
