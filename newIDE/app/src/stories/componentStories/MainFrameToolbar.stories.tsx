import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

import MainFrameToolbar, {
  MainFrameToolbarProps,
  ToolbarInterface,
// @ts-expect-error - TS6142 - Module '../../MainFrame/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Toolbar/index.tsx', but '--jsx' is not set.
} from '../../MainFrame/Toolbar';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Debug'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Debug.js' implicitly has an 'any' type.
import DebugIcon from '../../UI/CustomSvgIcons/Debug';

export default {
  title: 'MainFrameToolbar',
  component: MainFrameToolbar,
  decorators: [paperDecorator],
};

const fakeEditorToolbar = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <span
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    }}
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton size="small" tooltip={'Test tooltip'} color="default">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DebugIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton size="small" tooltip={'Test tooltip'} color="default">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DebugIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton size="small" tooltip={'Test tooltip'} color="default" selected>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DebugIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton size="small" tooltip={'Test tooltip'} disabled color="default">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DebugIcon />
    </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <IconButton size="small" tooltip={'Test tooltip'} color="default">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DebugIcon />
    </IconButton>
  </span>
);

const defaultProps: MainFrameToolbarProps = {
  showProjectButtons: true,
  toggleProjectManager: () => {},
  openShareDialog: () => {},
  isSharingEnabled: true,

  onPreviewWithoutHotReload: () => {},
  onOpenDebugger: () => {},
  onNetworkPreview: () => {},
  onHotReloadPreview: () => {},
  setPreviewOverride: () => {},
  canDoNetworkPreview: true,
  isPreviewEnabled: false,
  hasPreviewsRunning: false,
  canSave: true,
  onSave: async () => {},
  onOpenVersionHistory: () => {},
  canQuitVersionHistory: true,
  onQuitVersionHistory: async () => {},
  previewState: {
    isPreviewOverriden: false,
    previewLayoutName: null,
    previewExternalLayoutName: null,
    overridenPreviewLayoutName: null,
    overridenPreviewExternalLayoutName: null,
  },
};

export const NoProjectOpen = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar {...defaultProps} showProjectButtons={false} />
);

export const NoProjectOpenWithFakeButtons = () => {
  const toolbar = React.useRef<ToolbarInterface | null | undefined>(null);
  React.useEffect(
    () => {
      if (toolbar.current) {
        toolbar.current.setEditorToolbar(fakeEditorToolbar);
      }
    },
    [toolbar]
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MainFrameToolbar
      {...defaultProps}
      showProjectButtons={false}
      ref={toolbar}
    />
  );
};

export const ProjectOpen = () => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <MainFrameToolbar {...defaultProps} isPreviewEnabled />;
};

export const ProjectOpenPreviewDisabled = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar
    {...defaultProps}
    previewState={{
      isPreviewOverriden: false,
      overridenPreviewExternalLayoutName: null,
      overridenPreviewLayoutName: null,
      previewExternalLayoutName: null,
      previewLayoutName: 'testLayout',
    }}
  />
);

export const ProjectOpenOnScene = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar
    {...defaultProps}
    isPreviewEnabled
    previewState={{
      isPreviewOverriden: false,
      overridenPreviewExternalLayoutName: null,
      overridenPreviewLayoutName: null,
      previewExternalLayoutName: null,
      previewLayoutName: 'testLayout',
    }}
  />
);

export const ProjectOpenOnExternalLayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar
    {...defaultProps}
    isPreviewEnabled
    previewState={{
      isPreviewOverriden: false,
      overridenPreviewExternalLayoutName: null,
      overridenPreviewLayoutName: null,
      previewExternalLayoutName: 'testExternalLayout',
      previewLayoutName: null,
    }}
  />
);

export const ProjectOpenPreviewOverridenOnScene = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar
    {...defaultProps}
    isPreviewEnabled
    previewState={{
      isPreviewOverriden: true,
      overridenPreviewExternalLayoutName: null,
      overridenPreviewLayoutName: 'testLayout',
      previewExternalLayoutName: null,
      previewLayoutName: 'testLayout',
    }}
  />
);

export const ProjectOpenPreviewOverridenOnExternalLayout = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MainFrameToolbar
    {...defaultProps}
    isPreviewEnabled
    previewState={{
      isPreviewOverriden: true,
      overridenPreviewExternalLayoutName: 'testExternalLayout',
      overridenPreviewLayoutName: 'testLayout',
      previewExternalLayoutName: 'testExternalLayout',
      previewLayoutName: 'testLayout',
    }}
  />
);

export const ProjectOpenWithFakeButtons = () => {
  const toolbar = React.useRef<ToolbarInterface | null | undefined>(null);
  React.useEffect(
    () => {
      if (toolbar.current) {
        toolbar.current.setEditorToolbar(fakeEditorToolbar);
      }
    },
    [toolbar]
  );
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <MainFrameToolbar {...defaultProps} ref={toolbar} isPreviewEnabled />;
};

export const ProjectOpenPreviewRunning = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MainFrameToolbar {...defaultProps} isPreviewEnabled hasPreviewsRunning />
  );
};
