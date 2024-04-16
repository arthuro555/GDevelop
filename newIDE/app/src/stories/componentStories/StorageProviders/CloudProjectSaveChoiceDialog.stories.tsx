import * as React from 'react';

import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/CloudStorageProvider/CloudProjectSaveChoiceDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/CloudStorageProvider/CloudProjectSaveChoiceDialog.tsx', but '--jsx' is not set.
import CloudProjectSaveChoiceDialog from '../../../ProjectsStorage/CloudStorageProvider/CloudProjectSaveChoiceDialog';

export default {
  title: 'Storage Providers/CloudStorageProvider/CloudProjectSaveChoiceDialog',
  component: CloudProjectSaveChoiceDialog,
};

export const Default = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      if (isLoading) {
        const timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    },
    [isLoading]
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <CloudProjectSaveChoiceDialog
      isLoading={isLoading}
      onClose={() => action('onClose')()}
      onSaveAsDuplicate={() => setIsLoading(true)}
      onSaveAsMainVersion={() => setIsLoading(true)}
    />
  );
};
