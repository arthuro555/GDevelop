// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { Toolbar, ToolbarGroup } from '../../UI/Toolbar';
import PreviewAndShareButtons, {
  PreviewAndShareButtonsProps,
// @ts-expect-error - TS6142 - Module './PreviewAndShareButtons' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Toolbar/PreviewAndShareButtons.tsx', but '--jsx' is not set.
} from './PreviewAndShareButtons';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ProjectManager'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ProjectManager.js' implicitly has an 'any' type.
import ProjectManagerIcon from '../../UI/CustomSvgIcons/ProjectManager';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Floppy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Floppy.js' implicitly has an 'any' type.
import FloppyIcon from '../../UI/CustomSvgIcons/Floppy';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/History'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/History.js' implicitly has an 'any' type.
import HistoryIcon from '../../UI/CustomSvgIcons/History';
// @ts-expect-error - TS6142 - Module '../../VersionHistory/OpenedVersionStatusChip' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/OpenedVersionStatusChip.tsx', but '--jsx' is not set.
import OpenedVersionStatusChip from '../../VersionHistory/OpenedVersionStatusChip';
// @ts-expect-error - TS6142 - Module '../../VersionHistory' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/index.tsx', but '--jsx' is not set.
import type { OpenedVersionStatus } from '../../VersionHistory';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../VersionHistory/Utils'. '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/Utils.js' implicitly has an 'any' type.
import { getStatusColor } from '../../VersionHistory/Utils';

export type MainFrameToolbarProps = {
  showProjectButtons: boolean,
  toggleProjectManager: () => void,
  openShareDialog: () => void,
  onSave: () => Promise<void>,
  canSave: boolean,
  onOpenVersionHistory: () => void,
  checkedOutVersionStatus?: OpenedVersionStatus | null | undefined,
  onQuitVersionHistory: () => Promise<void>,
  canQuitVersionHistory: boolean
} & (PreviewAndShareButtonsProps);

export type ToolbarInterface = {
  setEditorToolbar: (arg1: React.ReactNode | null) => void
};

type LeftButtonsToolbarGroupProps = {
  toggleProjectManager: () => void,
  onSave: () => Promise<void>,
  onOpenVersionHistory: () => void,
  checkedOutVersionStatus?: OpenedVersionStatus | null | undefined,
  onQuitVersionHistory: () => Promise<void>,
  canQuitVersionHistory: boolean,
  canSave: boolean
};

const LeftButtonsToolbarGroup = React.memo<LeftButtonsToolbarGroupProps>(function LeftButtonsToolbarGroup(props) {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ToolbarGroup firstChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconButton
        size="small"
        id="main-toolbar-project-manager-button"
        onClick={props.toggleProjectManager}
        tooltip={t`Project Manager`}
        color="default"
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ProjectManagerIcon />
      </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconButton
        size="small"
        id="toolbar-history-button"
        onClick={props.onOpenVersionHistory}
        tooltip={t`Open version history`}
        color="default"
        disabled={false}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <HistoryIcon />
      </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <IconButton
        size="small"
        id="toolbar-save-button"
        onClick={props.onSave}
        tooltip={t`Save project`}
        color="default"
        disabled={!props.canSave}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FloppyIcon />
      </IconButton>
      {props.checkedOutVersionStatus && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          style={{
            // Leave margin between the chip that has a Cross icon to click and the
            // Play icon to preview the project. It's to avoid a mis-click that would
            // quit the version history instead of previewing the game.
            marginRight: 20,
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <OpenedVersionStatusChip
            onQuit={props.onQuitVersionHistory}
            disableQuitting={!props.canQuitVersionHistory}
            openedVersionStatus={props.checkedOutVersionStatus}
          />
        </div>
      )}
    </ToolbarGroup>
  );
});

export default React.forwardRef<MainFrameToolbarProps, ToolbarInterface>(function MainframeToolbar(props: MainFrameToolbarProps, ref) {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const [editorToolbar, setEditorToolbar] = React.useState<React.ReactNode | null | undefined>(null);
  React.useImperativeHandle(ref, () => ({
    setEditorToolbar,
  }));

  const borderBottomColor = React.useMemo(
    () => {
      if (!props.checkedOutVersionStatus) return null;
      return getStatusColor(
        gdevelopTheme,
        props.checkedOutVersionStatus.status
      );
    },
    [props.checkedOutVersionStatus, gdevelopTheme]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Toolbar borderBottomColor={borderBottomColor}>
      {props.showProjectButtons ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LeftButtonsToolbarGroup
            toggleProjectManager={props.toggleProjectManager}
            onSave={props.onSave}
            canSave={props.canSave}
            onOpenVersionHistory={props.onOpenVersionHistory}
            checkedOutVersionStatus={props.checkedOutVersionStatus}
            onQuitVersionHistory={props.onQuitVersionHistory}
            canQuitVersionHistory={props.canQuitVersionHistory}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ToolbarGroup>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PreviewAndShareButtons
              onPreviewWithoutHotReload={props.onPreviewWithoutHotReload}
              onOpenDebugger={props.onOpenDebugger}
              onNetworkPreview={props.onNetworkPreview}
              onHotReloadPreview={props.onHotReloadPreview}
              setPreviewOverride={props.setPreviewOverride}
              canDoNetworkPreview={props.canDoNetworkPreview}
              isPreviewEnabled={props.isPreviewEnabled}
              previewState={props.previewState}
              hasPreviewsRunning={props.hasPreviewsRunning}
              openShareDialog={props.openShareDialog}
              isSharingEnabled={props.isSharingEnabled}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
          </ToolbarGroup>
        </>
      ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {editorToolbar || <ToolbarGroup />}
    </Toolbar>
  );
});
