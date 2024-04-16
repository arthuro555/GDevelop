import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../../UI/LinearProgress';
import { roundTo } from '../../Utils/Mathematics';

type Props = {
  value: number,
  label: React.ReactNode
};

/* Display a rating between 1 and 10. */
const Rating = ({
  value,
  label,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body2">{label}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="body2">{roundTo(value, 1)}</Text>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LinearProgress
          variant="determinate"
          value={value * 10}
          style={{ height: 8, borderRadius: 8 }}
        />
      </Line>
    </Column>
  );
};

export default Rating;
