// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Chrome'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Chrome.js' implicitly has an 'any' type.
import Chrome from '../../UI/CustomSvgIcons/Chrome';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Apple'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Apple.js' implicitly has an 'any' type.
import Apple from '../../UI/CustomSvgIcons/Apple';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Desktop'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Desktop.js' implicitly has an 'any' type.
import Desktop from '../../UI/CustomSvgIcons/Desktop';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../UI/Layout';
import {
  Exporter,
  ExporterSection,
  ExporterSubSection,
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
} from '.';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, marginsSize } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module './ExportLauncher' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/ExportLauncher.tsx', but '--jsx' is not set.
import ExportLauncher from './ExportLauncher';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../UI/CustomSvgIcons/ChevronArrowRight';
import { useOnlineStatus } from '../../Utils/OnlineStatus';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
import { ButtonBase, createStyles, makeStyles } from '@material-ui/core';
import { shouldValidate } from '../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../UI/TextButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Facebook'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Facebook.js' implicitly has an 'any' type.
import Facebook from '../../UI/CustomSvgIcons/Facebook';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/GdGames'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GdGames.js' implicitly has an 'any' type.
import GdGames from '../../UI/CustomSvgIcons/GdGames';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ItchIo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ItchIo.js' implicitly has an 'any' type.
import ItchIo from '../../UI/CustomSvgIcons/ItchIo';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CloudDownload'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CloudDownload.js' implicitly has an 'any' type.
import CloudDownload from '../../UI/CustomSvgIcons/CloudDownload';
import { Game } from '../../Utils/GDevelopServices/Game';
import { getBuilds, Build } from '../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Wrench'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Wrench.js' implicitly has an 'any' type.
import Wrench from '../../UI/CustomSvgIcons/Wrench';
import EventsFunctionsExtensionsContext from '../../EventsFunctionsExtensionsLoader/EventsFunctionsExtensionsContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Android'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Android.js' implicitly has an 'any' type.
import Android from '../../UI/CustomSvgIcons/Android';
import { isNativeMobileApp } from '../../Utils/Platform';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../GameDashboard/GameRegistration' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/GameRegistration.tsx', but '--jsx' is not set.
import { GameAvailabilityError } from '../../GameDashboard/GameRegistration';

const styles = {
  buttonBase: {
    borderRadius: 8,
    padding: 8,
    flex: 1,
    cursor: 'default',
  },
  titleContainer: {
    marginLeft: marginsSize,
    marginRight: marginsSize,
    display: 'flex',
    alignItems: 'center',
    flex: 3, // Give more space to the title, to ensure it doesn't wrap.
  },
  iconContainer: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 36,
    height: 36,
  },
  iconSmall: {
    width: 24,
    height: 24,
  },
  highlightedTag: {
    padding: '2px 6px',
    borderRadius: 4,
  },
} as const;

const getSectionLabel = ({
  section,
}: {
  section: ExporterSection
}) => {
  switch (section) {
    case 'browser':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Browser</Trans>;
    case 'desktop':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Desktop</Trans>;
    case 'android':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Android</Trans>;
    case 'ios':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>iOS</Trans>;
    default:
      return null;
  }
};

const getSectionIcon = ({
  section,
  small,
}: {
  section: ExporterSection,
  small?: boolean
}) => {
  switch (section) {
    case 'browser':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Chrome style={small ? styles.iconSmall : styles.icon} />;
    case 'desktop':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Desktop style={small ? styles.iconSmall : styles.icon} />;
    case 'android':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Android style={small ? styles.iconSmall : styles.icon} />;
    case 'ios':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Apple style={small ? styles.iconSmall : styles.icon} />;
    default:
      return null;
  }
};

const getSubSectionIcon = (
  section: ExporterSection,
  subSection: ExporterSubSection
) => {
  switch (section) {
    case 'browser':
      switch (subSection) {
        case 'online':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <GdGames style={styles.icon} />;
        case 'offline':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <ItchIo style={styles.icon} />;
        case 'facebook':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <Facebook style={styles.icon} />;
        default:
          return null;
      }
    case 'desktop':
    case 'android':
      switch (subSection) {
        case 'online':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <CloudDownload style={styles.icon} />;
        case 'offline':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <Wrench style={styles.iconSmall} />;
        default:
          return null;
      }
    case 'ios':
      switch (subSection) {
        case 'online':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <CloudDownload style={styles.icon} />;
        case 'offline':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          return <Wrench style={styles.iconSmall} />;
        default:
          return null;
      }
    default:
      return null;
  }
};

// Styles to improve the interaction with the button.
const useStylesForWidget = () =>
  makeStyles(theme => {
    return createStyles({
      root: {
        border: `1px solid ${theme.palette.text.disabled}`,
        '&:focus': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:disabled': {
          opacity: theme.palette.action.disabledOpacity,
        },
      },
    });
  })();

const SectionLine = ({
  icon,
  label,
  onClick,
  description,
  disabled,
  small,
  highlighted,
  id,
}: {
  icon: React.ReactNode,
  label: React.ReactNode,
  onClick: () => void,
  description: React.ReactNode,
  disabled?: boolean,
  small?: boolean,
  highlighted?: boolean,
  id: string
}) => {
  const classes = useStylesForWidget();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { isMobile } = useResponsiveWindowSize();
  return (
// @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonBase
      onClick={onClick}
      focusRipple
      elevation={2}
      style={styles.buttonBase}
      classes={classes}
      tabIndex={0}
      onKeyPress={(event: React.KeyboardEvent<HTMLLIElement>): void => {
        if (shouldValidate(event)) {
          onClick();
        }
      }}
      disabled={disabled}
      id={id}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveLineStackLayout
        expand
        justifyContent="space-between"
        alignItems="center"
        noColumnMargin
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column alignItems="flex-start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LineStackLayout expand noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div style={styles.iconContainer}>{icon}</div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text
              noMargin
              size={small ? 'sub-title' : 'block-title'}
              align="left"
              color="primary"
            >
              {label}
            </Text>
            {highlighted && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <div
                style={{
                  ...styles.highlightedTag,
                  color: gdevelopTheme.statusIndicator.success,
                  border: `1px solid ${gdevelopTheme.statusIndicator.success}`,
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text color="inherit" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Easiest</Trans>
                </Text>
              </div>
            )}
          </LineStackLayout>
        </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LineStackLayout
            expand
            noMargin
            alignItems="center"
            justifyContent={isMobile ? 'space-between' : 'flex-end'}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text
              color="secondary"
              size="body2"
              align={isMobile ? 'left' : 'right'}
              noMargin
            >
              {description}
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ChevronArrowRight color="secondary" />
          </LineStackLayout>
        </Column>
      </ResponsiveLineStackLayout>
    </ButtonBase>
  );
};

type PublishHomeProps = {
  project: gdProject,
  onSaveProject: () => Promise<void>,
  isSavingProject: boolean,
  onGameUpdated: () => Promise<void>,
  onChangeSubscription: () => void,
  isNavigationDisabled: boolean,
  setIsNavigationDisabled: (isNavigationDisabled: boolean) => void,
  selectedExporter: Exporter | null | undefined,
  onChooseSection: (section?: ExporterSection | null | undefined) => void,
  onChooseSubSection: (subSection?: ExporterSubSection | null | undefined) => void,
  chosenSection: ExporterSection | null | undefined,
  chosenSubSection: ExporterSubSection | null | undefined,
  game: Game | null | undefined,
  gameAvailabilityError: GameAvailabilityError | null | undefined,
  allExportersRequireOnline?: boolean,
  showOnlineWebExporterOnly?: boolean
};

const PublishHome = ({
  project,
  onSaveProject,
  isSavingProject,
  onChangeSubscription,
  isNavigationDisabled,
  setIsNavigationDisabled,
  onGameUpdated,
  selectedExporter,
  onChooseSection,
  onChooseSubSection,
  chosenSection,
  chosenSubSection,
  game,
  gameAvailabilityError,
  allExportersRequireOnline,
  showOnlineWebExporterOnly,
}: PublishHomeProps) => {
  const { isMobile } = useResponsiveWindowSize();
  const isOnline = useOnlineStatus();
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const { profile, getAuthorizationHeader } = authenticatedUser;
  const eventsFunctionsExtensionsState = React.useContext(
    EventsFunctionsExtensionsContext
  );
  const [
    hasSkippedSubSectionSelection,
    setHasSkippedSubSectionSelection,
  ] = React.useState<boolean>(false);
  const [builds, setBuilds] = React.useState<Array<Build> | null | undefined>(null);

// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const onBack = () => {
    if (chosenSubSection) {
      onChooseSubSection(null);
      // In case the user navigated directly to the sub-section, we need to
      // reset the section too.
      if (hasSkippedSubSectionSelection) {
        onChooseSection(null);
        setHasSkippedSubSectionSelection(false);
      }
    } else if (chosenSection) {
      onChooseSection(null);
    }
  };

  const refreshBuilds = React.useCallback(
    async () => {
      if (!profile) return;

      try {
        const userBuilds = await getBuilds(getAuthorizationHeader, profile.id);
        setBuilds(userBuilds);
      } catch (error: any) {
        console.error('Error while loading builds:', error);
        showAlert({
          title: t`Error while loading builds`,
          message: t`An error occurred while loading your builds. Verify your internet connection and try again.`,
        });
      }
    },
    [profile, getAuthorizationHeader, showAlert]
  );

  React.useEffect(
    () => {
      refreshBuilds();
    },
    [refreshBuilds]
  );

  const shouldShowBackButton = !!(chosenSection || chosenSubSection);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout expand noMargin>
      {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column
            expand={!isMobile} // To give space to the title on mobile.
            alignItems="flex-start"
            justifyContent="center"
            noMargin
          >
            {shouldShowBackButton && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <TextButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<ChevronArrowLeft />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Back</Trans>}
                onClick={onBack}
                disabled={isNavigationDisabled}
              />
            )}
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <div
            style={{
              ...styles.titleContainer,
              justifyContent:
                isMobile && shouldShowBackButton ? 'flex-end' : 'center',
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout
              noMargin
              alignItems="center"
              justifyContent="center"
            >
              {!chosenSection
                ? undefined
                : getSectionIcon({
                    section: chosenSection,
                    small: true,
                  })}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="block-title">
                {selectedExporter ? (
                  selectedExporter.name
                ) : chosenSection ? (
                  getSectionLabel({
                    section: chosenSection,
                  })
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Export your game</Trans>
                )}
              </Text>
            </LineStackLayout>
          </div>
          {/** Keep empty column to have title centered on desktop */}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {!isMobile && <Column expand alignItems="flex-end" noMargin />}
        </Line>
      )}
      {!isOnline && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>You must be connected to use online export services.</Trans>
        </AlertMessage>
      )}
      {!chosenSection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>gd.games</Trans>}
            icon={getSubSectionIcon('browser', 'online')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Generate a shareable link to your game.</Trans>}
            onClick={() => {
              setHasSkippedSubSectionSelection(true);
              onChooseSection('browser');
              onChooseSubSection('online');
            }}
            highlighted
            disabled={!isOnline}
            id="publish-gd-games"
          />
          {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
              label={getSectionLabel({ section: 'browser' })}
              icon={getSectionIcon({ section: 'browser' })}
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Gaming portals (Itch.io, Poki, Facebook...)</Trans>
              }
              onClick={() => onChooseSection('browser')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-browser"
            />
          )}
          {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
              label={getSectionLabel({ section: 'desktop' })}
              icon={getSectionIcon({ section: 'desktop' })}
              description={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>Windows, MacOS, Linux (Steam, MS Store...)</Trans>
              }
              onClick={() => onChooseSection('desktop')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-desktop"
            />
          )}
          {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
              label={getSectionLabel({ section: 'android' })}
              icon={getSectionIcon({ section: 'android' })}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              description={<Trans>Google Play (or other stores)</Trans>}
              onClick={() => onChooseSection('android')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-mobile"
            />
          )}
          {!showOnlineWebExporterOnly && !isNativeMobileApp() && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
              label={getSectionLabel({ section: 'ios' })}
              icon={getSectionIcon({ section: 'ios' })}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              description={<Trans>Apple App Store</Trans>}
              onClick={() => onChooseSection('ios')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-mobile-ios"
            />
          )}
        </ColumnStackLayout>
      )}
      {chosenSection === 'browser' && !chosenSubSection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>gd.games</Trans>}
            icon={getSubSectionIcon('browser', 'online')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Generate a shareable link to your game.</Trans>}
            onClick={() => onChooseSubSection('online')}
            highlighted
            disabled={!isOnline}
            id="publish-gd-games"
          />
          {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>HTML5 (external websites)</Trans>}
              icon={getSubSectionIcon('browser', 'offline')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              description={<Trans>Itch.io, Poki, CrazyGames...</Trans>}
              onClick={() => onChooseSubSection('offline')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-external-websites"
            />
          )}
          {!showOnlineWebExporterOnly && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Facebook Games</Trans>}
              icon={getSubSectionIcon('browser', 'facebook')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              description={<Trans>Instant Games</Trans>}
              onClick={() => onChooseSubSection('facebook')}
              disabled={allExportersRequireOnline && !isOnline}
              id="publish-facebook"
            />
          )}
        </ColumnStackLayout>
      )}
      {chosenSection === 'desktop' && !chosenSubSection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>One-click packaging</Trans>}
            icon={getSubSectionIcon('desktop', 'online')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Windows, MacOS and Linux</Trans>}
            onClick={() => onChooseSubSection('online')}
            highlighted
            disabled={!isOnline}
            id="publish-desktop-cloud"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Manual build</Trans>}
            icon={getSubSectionIcon('desktop', 'offline')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Development tools required</Trans>}
            onClick={() => onChooseSubSection('offline')}
            disabled={allExportersRequireOnline && !isOnline}
            small
            id="publish-desktop-manual"
          />
        </ColumnStackLayout>
      )}
      {chosenSection === 'android' && !chosenSubSection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>One-click packaging</Trans>}
            icon={getSubSectionIcon('android', 'online')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Automated</Trans>}
            onClick={() => onChooseSubSection('online')}
            highlighted
            disabled={!isOnline}
            id="publish-mobile-cloud"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Manual build</Trans>}
            icon={getSubSectionIcon('desktop', 'offline')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Development tools required</Trans>}
            onClick={() => onChooseSubSection('offline')}
            small
            disabled={allExportersRequireOnline && !isOnline}
            id="publish-mobile-manual"
          />
        </ColumnStackLayout>
      )}
      {chosenSection === 'ios' && !chosenSubSection && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>One-click packaging</Trans>}
            icon={getSubSectionIcon('ios', 'online')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Automated</Trans>}
            onClick={() => onChooseSubSection('online')}
            highlighted
            disabled={!isOnline}
            id="publish-ios-cloud"
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SectionLine
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Manual build</Trans>}
            icon={getSubSectionIcon('desktop', 'offline')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            description={<Trans>Development tools required</Trans>}
            onClick={() => onChooseSubSection('offline')}
            small
            disabled={allExportersRequireOnline && !isOnline}
            id="publish-ios-manual"
          />
        </ColumnStackLayout>
      )}
      {chosenSection && chosenSubSection && selectedExporter && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ExportLauncher
          authenticatedUser={authenticatedUser}
          eventsFunctionsExtensionsState={eventsFunctionsExtensionsState}
          exportPipeline={selectedExporter.exportPipeline}
          project={project}
          onSaveProject={onSaveProject}
          isSavingProject={isSavingProject}
          onGameUpdated={onGameUpdated}
          onChangeSubscription={onChangeSubscription}
          setIsNavigationDisabled={setIsNavigationDisabled}
          game={game}
          gameAvailabilityError={gameAvailabilityError}
          builds={builds}
          onRefreshBuilds={refreshBuilds}
        />
      )}
    </ColumnStackLayout>
  );
};

export default PublishHome;
