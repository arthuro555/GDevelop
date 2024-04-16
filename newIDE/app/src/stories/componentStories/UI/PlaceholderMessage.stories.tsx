import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/PlaceholderMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderMessage.tsx', but '--jsx' is not set.
import PlaceholderMessage from '../../../UI/PlaceholderMessage';

export default {
  title: 'UI Building Blocks/PlaceholderMessage',
  component: PlaceholderMessage,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PlaceholderMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <p>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit
    </p>
  </PlaceholderMessage>
);
