import {action} from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
import { HotReloadPreviewButtonProps } from '../HotReload/HotReloadPreviewButton';

/**
 * Fake "external editors" to be used in Storybook.
 */
const fakeHotReloadPreviewButtonProps: HotReloadPreviewButtonProps = {
  hasPreviewsRunning: false,
  launchProjectDataOnlyPreview: action('launchProjectDataOnlyPreview'),
  launchProjectWithLoadingScreenPreview: action(
    'launchProjectWithLoadingScreenPreview'
  ),
};

export default fakeHotReloadPreviewButtonProps;
