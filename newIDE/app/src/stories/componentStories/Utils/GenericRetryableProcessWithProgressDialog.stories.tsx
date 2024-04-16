import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../Utils/UseGenericRetryableProcessWithProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/UseGenericRetryableProcessWithProgress.tsx', but '--jsx' is not set.
import { GenericRetryableProcessWithProgressDialog } from '../../../Utils/UseGenericRetryableProcessWithProgress';

export default {
  title: 'GenericRetryableProcessWithProgressDialog',
  component: GenericRetryableProcessWithProgressDialog,
  decorators: [paperDecorator],
};

export const Starting = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GenericRetryableProcessWithProgressDialog
    progress={0}
    result={null}
    onAbandon={null}
    onRetry={null}
    genericError={null}
  />
);

export const InProgress = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GenericRetryableProcessWithProgressDialog
    progress={40}
    result={null}
    onAbandon={null}
    onRetry={null}
    genericError={null}
  />
);

export const WithErrors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GenericRetryableProcessWithProgressDialog
    progress={100}
    result={{
      erroredResources: [
        {
          resourceName: 'Player.png',
          error: new Error('Fake download error'),
        },
        {
          resourceName: 'Spaceship.png',
          error: new Error('Another fake error'),
        },
      ],
    }}
    onAbandon={action('abandon')}
    onRetry={action('retry')}
    genericError={null}
  />
);

export const WithGenericError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <GenericRetryableProcessWithProgressDialog
    progress={100}
    result={{
      erroredResources: [
        {
          resourceName: 'Spaceship.png',
          error: new Error('Another fake error'),
        },
      ],
    }}
    onAbandon={action('abandon')}
    onRetry={action('retry')}
    genericError={new Error('Some generic error that happened to the project.')}
  />
);
