import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../UI/SimpleTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SimpleTextField.tsx', but '--jsx' is not set.
import { SimpleTextField } from '../../UI/SimpleTextField';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

export default {
  title: 'UI Building Blocks/SimpleTextField',
  component: SimpleTextField,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SimpleTextField
      disabled={false}
      type="text"
      id="some-id-1"
      value={'Test 123'}
      onChange={action('onChange')}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SimpleTextField
      disabled={false}
      type="number"
      id="some-id-2"
      value={'456.123'}
      onChange={action('onChange')}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SimpleTextField
      disabled={false}
      type="text"
      id="some-id-3"
      italic
      value={'Test 456'}
      onChange={action('onChange')}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <SimpleTextField
      disabled={true}
      type="text"
      id="some-id-3"
      italic
      value={'Test 456'}
      onChange={action('onChange')}
    />
  </ColumnStackLayout>
);
