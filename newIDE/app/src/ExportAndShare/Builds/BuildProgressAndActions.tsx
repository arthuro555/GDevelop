// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer, Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import differenceInSeconds from 'date-fns/differenceInSeconds';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import {
  getBuildArtifactUrl,
  Build,
  BuildArtifactKeyName,
} from '../../Utils/GDevelopServices/Build';
import { Game, updateGame } from '../../Utils/GDevelopServices/Game';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
// @ts-expect-error - TS6142 - Module '../../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../../UI/TextButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Download'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Download.js' implicitly has an 'any' type.
import Download from '../../UI/CustomSvgIcons/Download';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../../UI/CustomSvgIcons/Copy';
import { shortenUuidForDisplay } from '../../Utils/GDevelopServices/Play';
// @ts-expect-error - TS6142 - Module '../../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../../UI/LinearProgress';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from '../../UI/CustomSvgIcons/ShareExternal';

const buildTypesConfig = {
  'cordova-build': {
    estimatedTimeInSeconds: (build: Build) => 300,
    completeDescription:
      'You can download it on your Android phone and install it.',
  },
  'cordova-ios-build': {
    estimatedTimeInSeconds: (build: Build) => 150,
    completeDescription: '',
  },
  'electron-build': {
    estimatedTimeInSeconds: (build: Build) =>
      90 + 130 * (build.targets ? build.targets.length : 0),
    completeDescription: '',
  },
  'web-build': {
    estimatedTimeInSeconds: (build: Build) => 5,
    completeDescription: '',
  },
} as const;

const downloadButtons = [
  {
    displayName: t`Download (APK)`,
    key: 'apkKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`Download (Android App Bundle)`,
    key: 'aabKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`Windows (zip)`,
    key: 'windowsZipKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`Windows (exe)`,
    key: 'windowsExeKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`macOS (zip)`,
    key: 'macosZipKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`IPA for App Store`,
    key: 'iosAppStoreIpaKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`IPA for testing on registered devices`,
    key: 'iosDevelopmentIpaKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`Linux (AppImage)`,
    key: 'linuxAppImageKey',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <Download />,
  },
  {
    displayName: t`Open build link`,
    key: 's3Key',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <ShareExternal />,
  },
];

type Props = {
  build: Build,
  game?: Game | null | undefined,
  onGameUpdated?: () => Promise<void>,
  gameUpdating?: boolean,
  setGameUpdating?: (arg1: boolean) => void,
  onCopyToClipboard?: () => void
};

/**
 * Show an estimate of the progress of a build or the button
 * to download the artifacts.
 */
const BuildProgressAndActions = ({
  build,
  game,
  onGameUpdated,
  gameUpdating,
  setGameUpdating,
  onCopyToClipboard,
}: Props) => {
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );
  const config = buildTypesConfig[build.type];
  const estimatedTime = config.estimatedTimeInSeconds(build);
  const secondsSinceLastUpdate = Math.abs(
    differenceInSeconds(build.updatedAt, Date.now())
  );
  const estimatedRemainingTime = estimatedTime - secondsSinceLastUpdate;
  const isStillWithinEstimatedTime = estimatedRemainingTime > 0;
  const hasJustOverrun =
    !isStillWithinEstimatedTime && estimatedRemainingTime >= -estimatedTime;
  const hasTimedOut =
    !isStillWithinEstimatedTime && estimatedRemainingTime < -estimatedTime;
  const onDownload = (key: BuildArtifactKeyName) => {
    const url = getBuildArtifactUrl(build, key);
    if (url) Window.openExternalURL(url);
  };

  const onCopyBuildLink = () => {
    const url = getBuildArtifactUrl(build, 's3Key');
    if (url) navigator.clipboard.writeText(url);
    onCopyToClipboard && onCopyToClipboard();
  };

  const onUpdatePublicBuild = React.useCallback(
    async (buildId: string | null | undefined, i18n: I18nType) => {
      if (!profile || !game || !onGameUpdated || !setGameUpdating) return;

      const { id } = profile;
      const answer = Window.showConfirmDialog(
        buildId
          ? i18n._(
              t`"${build.name ||
                shortenUuidForDisplay(
                  build.id
                )}" will be the new build of this game published on gd.games. Continue?`
            )
          : i18n._(
              t`"${build.name ||
                shortenUuidForDisplay(
                  build.id
                )}" will be unpublished on gd.games. Continue?`
            )
      );
      if (!answer) return;
      try {
        setGameUpdating(true);
        await updateGame(getAuthorizationHeader, id, game.id, {
          publicWebBuildId: buildId,
        });
        await onGameUpdated();
        setGameUpdating(false);
      } catch (err: any) {
        console.error('Unable to update the game', err);
        setGameUpdating(false);
      }
    },
    [
      profile,
      game,
      onGameUpdated,
      setGameUpdating,
      build.name,
      build.id,
      getAuthorizationHeader,
    ]
  );

  const isBuildPublished = !!game && game.publicWebBuildId === build.id;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) =>
        build.status === 'error' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsiveLineStackLayout
            alignItems="center"
            justifyContent="space-between"
            expand
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Something wrong happened :(</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EmptyMessage
                style={{ justifyContent: 'flex-start', padding: 0 }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Check the logs to see if there is an explanation about what
                  went wrong, or try again later.
                </Trans>
              </EmptyMessage>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <RaisedButton
              primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Download log files</Trans>}
              onClick={() => onDownload('logsKey')}
            />
          </ResponsiveLineStackLayout>
        ) : build.status === 'pending' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line alignItems="center" expand justifyContent="center">
              {(isStillWithinEstimatedTime || hasJustOverrun) && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <LinearProgress
                    value={
                      isStillWithinEstimatedTime
                        ? ((estimatedTime - estimatedRemainingTime) /
                            estimatedTime) *
                          100
                        : 0
                    }
                    variant={
                      isStillWithinEstimatedTime
                        ? 'determinate'
                        : 'indeterminate'
                    }
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Spacer />
                </>
              )}
              {isStillWithinEstimatedTime && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    ~{Math.round(estimatedRemainingTime / 60)} minutes.
                  </Trans>
                </Text>
              )}
              {hasJustOverrun && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Should finish soon.</Trans>
                </Text>
              )}
            </Line>
            {hasTimedOut && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="flex-end" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Something wrong happened :(</Trans>
                  </Text>
                </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="flex-end" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <EmptyMessage
                    style={{ justifyContent: 'flex-end', padding: 0 }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      It looks like the build has timed out, please try again.
                    </Trans>
                  </EmptyMessage>
                </Line>
              </Column>
            )}
          </>
        ) : build.status === 'complete' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout
              expand
              justifyContent="space-between"
              noMargin
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout noMargin noColumnMargin>
                {game && !!build.s3Key && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Toggle
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Publish this build on gd.games</Trans>}
                      labelPosition="left"
                      toggled={isBuildPublished}
                      onToggle={() => {
                        onUpdatePublicBuild(
                          isBuildPublished ? null : build.id,
                          i18n
                        );
                      }}
                      disabled={gameUpdating}
                    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <TextButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>Copy build link</Trans>}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      icon={<Copy />}
                      onClick={onCopyBuildLink}
                    />
                  </>
                )}
                {downloadButtons
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Build'.
                  .filter(button => !!build[button.key])
                  .map(button => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment key={button.key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <RaisedButton
                        primary
                        label={i18n._(button.displayName)}
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'BuildArtifactKeyName'.
                        onClick={() => onDownload(button.key)}
                        icon={button.icon}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Spacer />
                    </React.Fragment>
                  ))}
              </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Download log files</Trans>}
                onClick={() => onDownload('logsKey')}
              />
            </ResponsiveLineStackLayout>
            {config && config.completeDescription && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line expand justifyContent="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin size="body2">
                  {config.completeDescription}
                </Text>
              </Line>
            )}
          </ColumnStackLayout>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Unknown status</Trans>
          </Line>
        )
      }
    </I18n>
  );
};

export default BuildProgressAndActions;
