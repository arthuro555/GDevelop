import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = Record<any, any>;

export default React.memo<Props>((props) => (
  <SvgIcon {...props} viewBox="0 0 12 12">
    <path
      d="M9.40063 5.29672L9.40063 5.29673L10.34 6.23611L9.40065 7.17549C9.29799 7.27815 9.2403 7.41741 9.2403 7.56259V9.80103C9.2403 10.1849 8.92798 10.4972 8.54415 10.4972H7.6322C7.32986 10.4972 7.08477 10.7423 7.08477 11.0446C7.08477 11.347 7.32986 11.592 7.6322 11.592H8.54415C9.53177 11.592 10.3352 10.7886 10.3352 9.80103V7.78934L11.5013 6.62319C11.7151 6.40941 11.7151 6.0628 11.5013 5.84901L11.466 5.88436L11.5013 5.84901L10.3352 4.68287V2.67118C10.3352 1.68359 9.53177 0.880176 8.54415 0.880176H7.6322C7.32986 0.880176 7.08477 1.12527 7.08477 1.42761C7.08477 1.72995 7.32986 1.97504 7.6322 1.97504H8.54415C8.92798 1.97504 9.2403 2.28736 9.2403 2.67118V4.90962C9.2403 5.05481 9.29799 5.19406 9.40063 5.29672Z"
      strokeWidth="0.1"
    />
    <path
      d="M3.21104 7.17549L3.21103 7.17549L2.27163 6.23611L3.21101 5.29673C3.31367 5.19406 3.37136 5.05481 3.37136 4.90962V2.67118C3.37136 2.28736 3.68368 1.97504 4.06751 1.97504H4.97946C5.28181 1.97504 5.5269 1.72995 5.5269 1.42761C5.5269 1.12527 5.28181 0.880176 4.97946 0.880176H4.06751C3.07989 0.880176 2.2765 1.68359 2.2765 2.67118V4.68287L1.11035 5.84901C0.896552 6.0628 0.896552 6.40939 1.11035 6.62319L2.2765 7.78934V9.80103C2.2765 10.7886 3.07989 11.592 4.06751 11.592H4.97946C5.28181 11.592 5.5269 11.347 5.5269 11.0446C5.5269 10.7423 5.28181 10.4972 4.97946 10.4972H4.06751C3.68368 10.4972 3.37136 10.1849 3.37136 9.80103V7.56259C3.37136 7.41741 3.31368 7.27816 3.21104 7.17549Z"
      strokeWidth="0.1"
    />
  </SvgIcon>
));
