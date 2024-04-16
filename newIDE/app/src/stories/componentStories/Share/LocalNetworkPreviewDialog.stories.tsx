import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ExportAndShare/LocalExporters/LocalPreviewLauncher/LocalNetworkPreviewDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/LocalExporters/LocalPreviewLauncher/LocalNetworkPreviewDialog.tsx', but '--jsx' is not set.
import LocalNetworkPreviewDialog from '../../../ExportAndShare/LocalExporters/LocalPreviewLauncher/LocalNetworkPreviewDialog';

export default {
  title: 'Share/LocalNetworkPreviewDialog',
  component: LocalNetworkPreviewDialog,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LocalNetworkPreviewDialog
    open
    url="192.168.0.1:2929"
    error={null}
    onRunPreviewLocally={action('on run preview locally')}
    onExport={action('on export')}
    onClose={action('on close')}
  />
);
export const WaitingForUrl = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LocalNetworkPreviewDialog
    open
    url=""
    error={null}
    onRunPreviewLocally={action('on run preview locally')}
    onExport={action('on export')}
    onClose={action('on close')}
  />
);
export const Error = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <LocalNetworkPreviewDialog
    open
    url="192.168.0.1:2929"
    error={{ message: 'Oops' }}
    onRunPreviewLocally={action('on run preview locally')}
    onExport={action('on export')}
    onClose={action('on close')}
  />
);
