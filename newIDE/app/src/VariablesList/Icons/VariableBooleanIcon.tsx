import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = Record<any, any>;

export default React.memo<Props>(props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SvgIcon {...props} viewBox="0 0 17 7">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <path
      fill="none"
      d="M9.5 3.5L11.8824 6L16 1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <path
      fill="none"
      d="M1 1L6 6M6 1L1 6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
));
