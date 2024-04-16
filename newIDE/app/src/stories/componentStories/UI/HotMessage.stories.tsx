import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import { getPaperDecorator } from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/HotMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HotMessage/index.tsx', but '--jsx' is not set.
import HotMessage from '../../../UI/HotMessage';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';

export default {
  title: 'UI Building Blocks/HotMessage',
  component: HotMessage,
  decorators: [getPaperDecorator('medium')],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <HotMessage
      title="Get 2 months free!"
      message="Get a yearly subscription and pay only 10 months!"
      rightButtonLabel="See yearly subs"
      onClickRightButton={action('onClickRightButton')}
    />
  </ColumnStackLayout>
);
