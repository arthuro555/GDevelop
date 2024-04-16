import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import { differenceInCalendarDays, format } from 'date-fns';

// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, LargeSpacer, Spacer, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Chrome'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Chrome.js' implicitly has an 'any' type.
import Chrome from '../../UI/CustomSvgIcons/Chrome';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Messages/InfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/InfoBar.tsx', but '--jsx' is not set.
import InfoBar from '../../UI/Messages/InfoBar';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../../UI/CustomSvgIcons/Copy';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/Menu/ElementWithMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ElementWithMenu.tsx', but '--jsx' is not set.
import ElementWithMenu from '../../UI/Menu/ElementWithMenu';
// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField, { TextFieldInterface } from '../../UI/TextField';
import { showErrorBox } from '../../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
import {
  shouldCloseOrCancel,
  shouldValidate,
} from '../../UI/KeyboardShortcuts/InteractionKeys';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Card' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Card.tsx', but '--jsx' is not set.
import Card from '../../UI/Card';

// @ts-expect-error - TS6142 - Module './BuildProgressAndActions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildProgressAndActions.tsx', but '--jsx' is not set.
import BuildProgressAndActions from './BuildProgressAndActions';

import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
import {
  deleteBuild,
  updateBuild,
  Build,
} from '../../Utils/GDevelopServices/Build';
import { Game } from '../../Utils/GDevelopServices/Game';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Desktop'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Desktop.js' implicitly has an 'any' type.
import Desktop from '../../UI/CustomSvgIcons/Desktop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Apple'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Apple.js' implicitly has an 'any' type.
import Apple from '../../UI/CustomSvgIcons/Apple';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Android'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Android.js' implicitly has an 'any' type.
import Android from '../../UI/CustomSvgIcons/Android';

const styles = {
  icon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
  buildButtonIcon: { height: 16, width: 16, opacity: 0.6 },
  openForFeedbackIndicator: { height: 4, width: 4, borderRadius: 4 },
  cardContent: { flex: 1 },
  textField: { width: '70%' },
  circularProgress: { height: 20, width: 20 },
} as const;

const formatBuildText = (
  buildType: 'cordova-build' | 'cordova-ios-build' | 'electron-build' | 'web-build'
) => {
  switch (buildType) {
    case 'cordova-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Android Build</Trans>;
    case 'cordova-ios-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>iOS Build</Trans>;
    case 'electron-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Windows/macOS/Linux Build</Trans>;
    case 'web-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Trans>Web Build</Trans>;
    default:
      return buildType;
  }
};

const getIcon = (
  buildType: 'cordova-build' | 'cordova-ios-build' | 'electron-build' | 'web-build'
) => {
  switch (buildType) {
    case 'cordova-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Android style={styles.icon} />;
    case 'cordova-ios-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Apple style={styles.icon} />;
    case 'electron-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Desktop style={styles.icon} />;
    case 'web-build':
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Chrome style={styles.icon} />;
    default:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <Chrome style={styles.icon} />;
  }
};

const BuildAndCreatedAt = ({
  build,
}: {
  build: Build
}) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Line alignItems="end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line noMargin alignItems="center">
      {getIcon(build.type)}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>{formatBuildText(build.type)}</Trans>
      </Text>
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>{format(build.updatedAt, 'yyyy-MM-dd HH:mm:ss')}</Trans>
    </BackgroundText>
  </Line>
);

const BUILD_NAME_MAX_LENGTH = 50;
const BUILD_DEFAULT_NAME_TIME_FORMAT = 'yyyy-MM-dd-HH-mm-ss';

type Props = {
  build: Build,
  game: Game,
  onGameUpdated?: () => Promise<void>,
  gameUpdating: boolean,
  setGameUpdating: (arg1: boolean) => void,
  onBuildUpdated: (arg1: Build) => void,
  onBuildDeleted: (arg1: Build) => void,
  authenticatedUser: AuthenticatedUser
};

export const BuildCard = ({
  build,
  game,
  onGameUpdated,
  gameUpdating,
  setGameUpdating,
  onBuildUpdated,
  onBuildDeleted,
  authenticatedUser,
}: Props) => {
  const { getAuthorizationHeader, profile } = authenticatedUser;
  const defaultBuildName = `${game.gameName
    .toLowerCase()
    .replace(/ /g, '-')
    .slice(
      0,
      BUILD_NAME_MAX_LENGTH - BUILD_DEFAULT_NAME_TIME_FORMAT.length - 1
    )}-${format(build.updatedAt, BUILD_DEFAULT_NAME_TIME_FORMAT)}`;
  const buildName = build.name ? build.name : defaultBuildName;
  const isOnlineBuild = game.publicWebBuildId === build.id;
  const isOld =
    build &&
    build.type !== 'web-build' &&
    differenceInCalendarDays(Date.now(), build.updatedAt) > 6;

  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const nameInput = React.useRef<TextFieldInterface | null | undefined>(null);
  const { isMobile } = useResponsiveWindowSize();

  const [showCopiedInfoBar, setShowCopiedInfoBar] = React.useState(false);

  const [isEditingName, setIsEditingName] = React.useState(false);
  const [name, setName] = React.useState(buildName);

  const onCopyUuid = () => {
    navigator.clipboard.writeText(build.id);
    setShowCopiedInfoBar(true);
  };

  const onEditName = () => {
    setIsEditingName(true);
    nameInput.current && nameInput.current.focus();
  };
  const onBlurEditName = async (i18n: I18nType) => {
    if (!profile) return;
    const trimmedName = name.trim();
    if (!trimmedName) {
      setName(build.name || '');
    } else if (trimmedName === buildName) {
      setName(name.trim());
    } else {
      try {
        setGameUpdating(true);
        const updatedBuild = await updateBuild(
          getAuthorizationHeader,
          profile.id,
          build.id,
          {
            name: name,
          }
        );
        onBuildUpdated({
          ...build,
          name: updatedBuild.name,
        });
      } catch (error: any) {
        setName(build.name || '');
        showErrorBox({
          message: i18n._(
            t`Could not update the build name. Verify your internet connection or try again later.`
          ),
          rawError: error,
          errorId: 'build-name-update-error',
        });
      } finally {
        setGameUpdating(false);
      }
    }
    setIsEditingName(false);
  };

  const onDeleteBuild = async (i18n: I18nType) => {
    if (!profile) return;
    const answer = Window.showConfirmDialog(
      'You are about to delete this build. Continue?'
    );
    if (!answer) return;
    try {
      setGameUpdating(true);
      await deleteBuild(getAuthorizationHeader, profile.id, build.id);
      setGameUpdating(false);
      onBuildDeleted(build);
    } catch (error: any) {
      showErrorBox({
        message: i18n._(
          t`Could not delete the build. Verify your internet connection or try again later.`
        ),
        rawError: error,
        errorId: 'build-delete-error',
      });
      setGameUpdating(false);
    }
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Card
            isHighlighted={isOnlineBuild}
            cardCornerAction={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ElementWithMenu
                element={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <IconButton size="small" disabled={gameUpdating}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ThreeDotsMenu />
                  </IconButton>
                }
                buildMenuTemplate={(i18n: I18nType) => [
                  {
                    label: i18n._(t`Edit build name`),
                    click: onEditName,
                  },
                  { type: 'separator' },
                  {
                    label: i18n._(t`Delete build`),
                    click: () => onDeleteBuild(i18n),
                  },
                ]}
              />
            }
            header={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line noMargin alignItems="start" justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                {!isMobile && <BuildAndCreatedAt build={build} />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Line noMargin justifyContent="end">
                    {isOnlineBuild ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Current build online</Trans>
                      </Text>
                    ) : (
                      game.acceptsBuildComments &&
                      build.type === 'web-build' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <LineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <div
                            style={{
                              ...styles.openForFeedbackIndicator,
                              backgroundColor: gdevelopTheme.message.valid,
                            }}
                          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <Trans>Build open for feedbacks</Trans>
                          </Text>
                        </LineStackLayout>
                      )
                    )}
                  </Line>
                </Column>
              </Line>
            }
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              {isMobile && <BuildAndCreatedAt build={build} />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin>
                {isEditingName ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TextField
                      ref={nameInput}
                      style={styles.textField}
                      value={name}
                      margin="none"
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
                      onChange={(_, value) => setName(value)}
                      onBlur={() => {
                        onBlurEditName(i18n);
                      }}
                      hintText={buildName}
                      disabled={gameUpdating}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                      onKeyPress={event => {
                        if (shouldValidate(event) && nameInput.current)
                          nameInput.current.blur();
                      }}
// @ts-expect-error - TS7006 - Parameter 'event' implicitly has an 'any' type.
                      onKeyDown={event => {
                        if (shouldCloseOrCancel(event)) {
                          event.stopPropagation();
                          setIsEditingName(false);
                          setName(buildName);
                        }
                      }}
                      maxLength={BUILD_NAME_MAX_LENGTH}
                    />
                    {gameUpdating && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <CircularProgress style={styles.circularProgress} />
                      </>
                    )}
                  </Line>
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line noMargin alignItems="baseline">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Text noMargin>{buildName}</Text>
                  </Line>
                )}
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <BackgroundText style={{ textAlign: 'left' }}>
                  {build.id}
                </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton size="small" onClick={onCopyUuid}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Copy style={styles.buildButtonIcon} />
                </IconButton>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand noMargin justifyContent="space-between">
                {!isOld && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <BuildProgressAndActions
                    build={build}
                    game={game}
                    onGameUpdated={onGameUpdated}
                    gameUpdating={gameUpdating}
                    setGameUpdating={setGameUpdating}
                    onCopyToClipboard={() => setShowCopiedInfoBar(true)}
                  />
                )}
                {isOld && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      This build is old and the generated games can't be
                      downloaded anymore.
                    </Trans>
                  </EmptyMessage>
                )}
              </Line>
            </Column>
          </Card>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <InfoBar
            visible={showCopiedInfoBar}
            hide={() => setShowCopiedInfoBar(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            message={<Trans>Copied to clipboard!</Trans>}
          />
        </>
      )}
    </I18n>
  );
};
