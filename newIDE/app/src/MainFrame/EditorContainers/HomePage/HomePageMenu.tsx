import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
import Drawer from '@material-ui/core/Drawer';
// @ts-expect-error - TS6142 - Module '../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../../UI/VerticalTabButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/VerticalTabButton.tsx', but '--jsx' is not set.
import VerticalTabButton from '../../../UI/VerticalTabButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/DoubleChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/DoubleChevronArrowLeft.js' implicitly has an 'any' type.
import DoubleChevronArrowLeft from '../../../UI/CustomSvgIcons/DoubleChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/PickAxe'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/PickAxe.js' implicitly has an 'any' type.
import PickAxeIcon from '../../../UI/CustomSvgIcons/PickAxe';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/School'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/School.js' implicitly has an 'any' type.
import SchoolIcon from '../../../UI/CustomSvgIcons/School';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/GoogleController'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GoogleController.js' implicitly has an 'any' type.
import GoogleControllerIcon from '../../../UI/CustomSvgIcons/GoogleController';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Web'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Web.js' implicitly has an 'any' type.
import WebIcon from '../../../UI/CustomSvgIcons/Web';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/BookLeaf'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/BookLeaf.js' implicitly has an 'any' type.
import BookLeafIcon from '../../../UI/CustomSvgIcons/BookLeaf';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Sun'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Sun.js' implicitly has an 'any' type.
import SunIcon from '../../../UI/CustomSvgIcons/Sun';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Store'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Store.js' implicitly has an 'any' type.
import StoreIcon from '../../../UI/CustomSvgIcons/Store';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Preferences'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preferences.js' implicitly has an 'any' type.
import Preferences from '../../../UI/CustomSvgIcons/Preferences';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/GDevelopGLogo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GDevelopGLogo.js' implicitly has an 'any' type.
import GDevelopGLogo from '../../../UI/CustomSvgIcons/GDevelopGLogo';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module './HomePageMenuBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/HomePage/HomePageMenuBar.tsx', but '--jsx' is not set.
import HomePageMenuBar from './HomePageMenuBar';
import type { Profile } from '../../../Utils/GDevelopServices/Authentication';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Graphs'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Graphs.js' implicitly has an 'any' type.
import GraphsIcon from '../../../UI/CustomSvgIcons/Graphs';

export const styles = {
  drawerContent: {
    height: '100%',
    width: 250,
    paddingBottom: 10,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerTopButtonsContainer: {
    flex: 1,
    marginTop: 'env(safe-area-inset-top)',
  },
  drawerBottomButtonsContainer: {
    marginBottom: 'env(safe-area-inset-bottom)',
  },
} as const;

export type HomeTab = 'get-started' | 'manage' | 'build' | 'learn' | 'play' | 'community' | 'shop' | 'team-view';

export type GetIconFunction = (
  arg1: {
    color: string,
    fontSize: 'inherit' | 'small'
  },
) => React.ReactElement;

export type HomePageMenuTab = {
  label: React.ReactNode,
  tab: HomeTab,
  getIcon: GetIconFunction,
  id: string
};

const homePageMenuTabs: {
  [tab: string]: HomePageMenuTab
} = {
  'get-started': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Get Started</Trans>,
    tab: 'get-started',
    id: 'home-get-started-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SunIcon fontSize={fontSize} color={color} />
    ),
  },
  build: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Build</Trans>,
    tab: 'build',
    id: 'home-build-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PickAxeIcon fontSize={fontSize} color={color} />
    ),
  },
  manage: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Manage</Trans>,
    tab: 'manage',
    id: 'home-manage-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <GraphsIcon fontSize={fontSize} color={color} />
    ),
  },
  shop: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Shop</Trans>,
    tab: 'shop',
    id: 'home-shop-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <StoreIcon fontSize={fontSize} color={color} />
    ),
  },
  learn: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Learn</Trans>,
    tab: 'learn',
    id: 'home-learn-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <SchoolIcon fontSize={fontSize} color={color} />
    ),
  },
  play: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Play</Trans>,
    tab: 'play',
    id: 'home-play-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <GoogleControllerIcon fontSize={fontSize} color={color} />
    ),
  },
  community: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Community</Trans>,
    tab: 'community',
    id: 'home-community-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <WebIcon fontSize={fontSize} color={color} />
    ),
  },
  'team-view': {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    label: <Trans>Classrooms</Trans>,
    tab: 'team-view',
    id: 'team-view-tab',
    getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <BookLeafIcon fontSize={fontSize} color={color} />
    ),
  },
};

export const getTabsToDisplay = (
  {
    profile,
  }: {
    profile: Profile | null | undefined
  },
): HomePageMenuTab[] => {
  const displayTeamViewTab = profile && profile.isTeacher;
  const displayPlayTab = !profile || !profile.isStudent;
  const tabs = [
    'get-started',
    'build',
    displayTeamViewTab ? 'team-view' : null,
    'manage',
    'shop',
    'learn',
    displayPlayTab ? 'play' : null,
    'community',
  ].filter(Boolean);
  return tabs.map(tab => homePageMenuTabs[tab]);
};

type Props = {
  setActiveTab: (arg1: HomeTab) => void,
  activeTab: HomeTab,
  onOpenPreferences: () => void,
  onOpenAbout: () => void
};

export const HomePageMenu = ({
  setActiveTab,
  activeTab,
  onOpenPreferences,
  onOpenAbout,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { profile } = React.useContext(AuthenticatedUserContext);
  const [
    isHomePageMenuDrawerOpen,
    setIsHomePageMenuDrawerOpen,
  ] = React.useState(false);

  const tabsToDisplay = getTabsToDisplay({ profile });

  const buttons: {
    label: React.ReactNode,
    getIcon: (
      arg1: {
        color: string,
        fontSize: 'inherit' | 'small'
      },
    ) => React.ReactElement,
    id: string,
    onClick: () => void
  }[] = [
    {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label: <Trans>Preferences</Trans>,
      id: 'settings',
      onClick: onOpenPreferences,
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
      getIcon: ({ color, fontSize }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GDevelopGLogo fontSize={fontSize} color={color} />
      ),
    },
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <HomePageMenuBar
        activeTab={activeTab}
        onOpenAbout={onOpenAbout}
        onOpenHomePageMenuDrawer={() => setIsHomePageMenuDrawerOpen(true)}
        onOpenPreferences={onOpenPreferences}
        setActiveTab={setActiveTab}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Drawer
        open={isHomePageMenuDrawerOpen}
        PaperProps={{
          style: {
            ...styles.drawerContent,
            backgroundColor: gdevelopTheme.home.header.backgroundColor,
          },
          className: 'safe-area-aware-left-container',
        }}
        onClose={() => {
          setIsHomePageMenuDrawerOpen(false);
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.drawerTopButtonsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    onClick={() => {
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    size="small"
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <DoubleChevronArrowLeft />
                  </IconButton>
                </Line>
                {tabsToDisplay.map(({ label, tab, getIcon, id }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <VerticalTabButton
                    key={id}
                    label={label}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    getIcon={getIcon}
                    isActive={activeTab === tab}
                  />
                ))}
              </Column>
            </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.drawerBottomButtonsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
                {buttons.map(({ label, getIcon, onClick, id }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <VerticalTabButton
                    key={id}
                    label={label}
                    onClick={onClick}
                    getIcon={getIcon}
                    isActive={false}
                  />
                ))}
              </Column>
            </div>
          </Column>
        </Line>
      </Drawer>
    </>
  );
};
