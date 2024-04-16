import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/Messages/DismissableInfoBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Messages/DismissableInfoBar.tsx', but '--jsx' is not set.
import DismissableInfoBar from '../../../UI/Messages/DismissableInfoBar';

export default {
  title: 'UI Building Blocks/DismissableInfoBar',
  component: DismissableInfoBar,
  decorators: [paperDecorator],
};

export const Default = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DismissableInfoBar
      identifier="default-additional-work"
      message="This is a message that you should be able to read"
      touchScreenMessage={false}
      show
    />
  );
};
