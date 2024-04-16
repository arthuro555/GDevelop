import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../../UI/Toggle';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';

export default {
  title: 'UI Building Blocks/Toggle',
  component: Toggle,
  decorators: [paperDecorator],
};

const WithLeftLabel = () => {
  const [value, setValue] = React.useState<boolean>(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Toggle
      label="With a left label"
      labelPosition="left"
      onToggle={() => {
        setValue(!value);
      }}
      toggled={value}
    />
  );
};

const WithRightLabel = () => {
  const [value, setValue] = React.useState<boolean>(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Toggle
      labelPosition="right"
      onToggle={() => {
        setValue(!value);
      }}
      toggled={value}
      label="With a right label"
    />
  );
};

const Disabled = () => {
  const [value, setValue] = React.useState<boolean>(false);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Toggle
      label="Disabled"
      labelPosition="left"
      onToggle={() => {
        setValue(!value);
      }}
      toggled={value}
      disabled
    />
  );
};

export const AllOptions = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithLeftLabel />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <WithRightLabel />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Disabled />
  </ColumnStackLayout>
);
