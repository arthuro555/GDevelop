import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = Record<any, any>;

export default React.memo<Props>(props => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <SvgIcon {...props} viewBox="0 0 10 12">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <path d="M3.67764 2.0539V0.930176H0.61294C0.450378 0.930176 0.294474 0.989372 0.179526 1.09474C0.0645775 1.20011 0 1.34302 0 1.49204V10.4818C0 10.6308 0.0645775 10.7737 0.179526 10.8791C0.294474 10.9845 0.450378 11.0437 0.61294 11.0437H3.67764V9.91996H1.22588V2.0539H3.67764Z" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <path d="M5.5167 9.91998L5.5167 11.0437L8.5814 11.0437C8.74396 11.0437 8.89986 10.9845 9.01481 10.8791C9.12976 10.7738 9.19434 10.6309 9.19434 10.4818L9.19434 1.49206C9.19434 1.34305 9.12976 1.20013 9.01481 1.09476C8.89986 0.989394 8.74396 0.9302 8.5814 0.9302L5.5167 0.930199L5.5167 2.05392L7.96846 2.05392L7.96846 9.91998L5.5167 9.91998Z" />
  </SvgIcon>
));
