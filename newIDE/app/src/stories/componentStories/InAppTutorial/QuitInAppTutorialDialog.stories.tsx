import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../InAppTutorial/QuitInAppTutorialDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/QuitInAppTutorialDialog.tsx', but '--jsx' is not set.
import QuitInAppTutorialDialog from '../../../InAppTutorial/QuitInAppTutorialDialog';
import { delay } from '../../../Utils/Delay';

export default {
  title: 'In-app tutorial/QuitInAppTutorialDialog',
  component: QuitInAppTutorialDialog,
  decorators: [paperDecorator],
};

export const Default = () => {
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [canEndTutorial, setCanEndTutorial] = React.useState<boolean>(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <QuitInAppTutorialDialog
      canEndTutorial={canEndTutorial}
      onSaveProject={async () => {
        setIsSaving(true);
        await delay(1500);
        setCanEndTutorial(true);
        setIsSaving(false);
      }}
      isSavingProject={isSaving}
      onClose={() => action('on close')()}
      endTutorial={() => action('end tutorial')()}
    />
  );
};
