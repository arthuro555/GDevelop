import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../UI/Breadcrumbs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Breadcrumbs.tsx', but '--jsx' is not set.
import Breadcrumbs from '../../../UI/Breadcrumbs';

export default {
  title: 'UI Building Blocks/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Breadcrumbs
        steps={[
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label: <span>Home</span>,
            onClick: action('Click on home'),
            href: '/',
          },
        ]}
      />
    </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Breadcrumbs
        steps={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          { label: <span>Home</span> },
          {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label: <span>Categories</span>,
            onClick: action('Click on categories'),
            href: '/categories',
          },
        ]}
      />
    </Line>
  </Column>
);
