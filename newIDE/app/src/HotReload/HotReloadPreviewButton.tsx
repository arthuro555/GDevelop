// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Preview'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preview.js' implicitly has an 'any' type.
import PreviewIcon from '../UI/CustomSvgIcons/Preview';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Update'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Update.js' implicitly has an 'any' type.
import UpdateIcon from '../UI/CustomSvgIcons/Update';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';

export type HotReloadPreviewButtonProps = {
  hasPreviewsRunning: boolean,
  launchProjectDataOnlyPreview: () => void,
  launchProjectWithLoadingScreenPreview: () => void
};

export default function HotReloadPreviewButton({
  launchProjectDataOnlyPreview,
  hasPreviewsRunning,
}: HotReloadPreviewButtonProps) {
  const { isMobile } = useResponsiveWindowSize();
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  const icon = hasPreviewsRunning ? <UpdateIcon /> : <PreviewIcon />;
  const label = hasPreviewsRunning ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Apply changes to preview</Trans>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>Run a preview</Trans>
  );

  // Hide the text on mobile, to avoid taking too much space.
  return !isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      leftIcon={icon}
      label={label}
      onClick={launchProjectDataOnlyPreview}
    />
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <IconButton onClick={launchProjectDataOnlyPreview} size="small">
      {icon}
    </IconButton>
  );
}
