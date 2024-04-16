// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import {I18n as I18nType} from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';
import { PreviewState } from '../PreviewState';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Preview'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preview.js' implicitly has an 'any' type.
import PreviewIcon from '../../UI/CustomSvgIcons/Preview';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Update'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Update.js' implicitly has an 'any' type.
import UpdateIcon from '../../UI/CustomSvgIcons/Update';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Publish'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Publish.js' implicitly has an 'any' type.
import PublishIcon from '../../UI/CustomSvgIcons/Publish';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../../UI/FlatButtonWithSplitMenu';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/ResponsiveRaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ResponsiveRaisedButton.tsx', but '--jsx' is not set.
import ResponsiveRaisedButton from '../../UI/ResponsiveRaisedButton';

export type PreviewAndShareButtonsProps = {
  onPreviewWithoutHotReload: () => void,
  onOpenDebugger: () => void,
  onNetworkPreview: () => void,
  onHotReloadPreview: () => void,
  setPreviewOverride: (
    arg1: {
      isPreviewOverriden: boolean,
      overridenPreviewLayoutName: string | null | undefined,
      overridenPreviewExternalLayoutName: string | null | undefined
    },
  ) => void,
  canDoNetworkPreview: boolean,
  isPreviewEnabled: boolean,
  hasPreviewsRunning: boolean,
  previewState: PreviewState,
  openShareDialog: () => void,
  isSharingEnabled: boolean
};

const PreviewAndShareButtons = React.memo<PreviewAndShareButtonsProps>(function PreviewAndShareButtons({
  onPreviewWithoutHotReload,
  onNetworkPreview,
  onOpenDebugger,
  onHotReloadPreview,
  canDoNetworkPreview,
  isPreviewEnabled,
  hasPreviewsRunning,
  previewState,
  setPreviewOverride,
  openShareDialog,
  isSharingEnabled,
}: PreviewAndShareButtonsProps) {
  const { isMobile } = useResponsiveWindowSize();

  const previewBuildMenuTemplate = React.useCallback(
    (i18n: I18nType) => [
      {
        label: i18n._(t`Start Network Preview (Preview over WiFi/LAN)`),
        click: onNetworkPreview,
        enabled: canDoNetworkPreview,
      },
      {
        label: i18n._(t`Start Preview and Debugger`),
        click: onOpenDebugger,
      },
      {
        label: i18n._(t`Launch another preview in a new window`),
        click: onPreviewWithoutHotReload,
        enabled: isPreviewEnabled && hasPreviewsRunning,
      },
      { type: 'separator' },
      ...(previewState.overridenPreviewLayoutName
        ? [
            {
              type: 'checkbox',
              label: previewState.overridenPreviewExternalLayoutName
                ? i18n._(
                    t`Start all previews from external layout ${
                      previewState.overridenPreviewExternalLayoutName
                    }`
                  )
                : i18n._(
                    t`Start all previews from scene ${
                      previewState.overridenPreviewLayoutName
                    }`
                  ),
              checked: previewState.isPreviewOverriden,
              click: () =>
                setPreviewOverride({
                  isPreviewOverriden: !previewState.isPreviewOverriden,
                  overridenPreviewLayoutName:
                    previewState.overridenPreviewLayoutName,
                  overridenPreviewExternalLayoutName:
                    previewState.overridenPreviewExternalLayoutName,
                }),
            },
            { type: 'separator' },
          ]
        : []),
      {
        label: previewState.previewExternalLayoutName
          ? i18n._(
              t`Use this external layout inside this scene to start all previews`
            )
          : i18n._(t`Use this scene to start all previews`),
        click: () =>
          setPreviewOverride({
            isPreviewOverriden: true,
            overridenPreviewLayoutName: previewState.previewLayoutName,
            overridenPreviewExternalLayoutName:
              previewState.previewExternalLayoutName,
          }),
        enabled:
          previewState.previewLayoutName !==
            previewState.overridenPreviewLayoutName ||
          previewState.previewExternalLayoutName !==
            previewState.overridenPreviewExternalLayoutName,
      },
    ],
    [
      onPreviewWithoutHotReload,
      isPreviewEnabled,
      hasPreviewsRunning,
      setPreviewOverride,
      previewState,
      onNetworkPreview,
      onOpenDebugger,
      canDoNetworkPreview,
    ]
  );

  // Create a separate function to avoid the button passing its event as
  // the first argument.
  const onShareClick = React.useCallback(
    () => {
      openShareDialog();
    },
    [openShareDialog]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FlatButtonWithSplitMenu
        primary
        onClick={onHotReloadPreview}
        disabled={!isPreviewEnabled}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        icon={hasPreviewsRunning ? <UpdateIcon /> : <PreviewIcon />}
        label={
          !isMobile ? (
            hasPreviewsRunning ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Update</Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Preview</Trans>
            )
          ) : null
        }
        id="toolbar-preview-button"
        buildMenuTemplate={previewBuildMenuTemplate}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResponsiveRaisedButton
        primary
        onClick={onShareClick}
        disabled={!isSharingEnabled}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        icon={<PublishIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Share</Trans>}
        // This ID is used for guided lessons, let's keep it stable.
        id="toolbar-publish-button"
      />
    </LineStackLayout>
  );
});

export default PreviewAndShareButtons;
