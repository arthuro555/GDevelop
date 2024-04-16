import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
import { useTimeout } from '../../../Utils/UseTimeout';

export default {
  title: 'UI Building Blocks/CircularProgress',
  component: CircularProgress,
  decorators: [paperDecorator],
};

const STEP_COUNT = 10;

export const Default = () => {
  const [step, setStep] = React.useState<number>(0);
  useTimeout(() => {
    if (step < STEP_COUNT) setStep(step + 1);
  }, 1000);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Indeterminate (default)</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CircularProgress />
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>Determinate</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CircularProgress
          variant="determinate"
          value={(step / STEP_COUNT) * 100}
        />
      </Line>
    </ColumnStackLayout>
  );
};
