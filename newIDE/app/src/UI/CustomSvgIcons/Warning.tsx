import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default React.memo(
  React.forwardRef((props, ref) => (
// @ts-expect-error - TS2769 - No overload matches this call.
    <SvgIcon
      {...props}
      ref={ref}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M8.66705 5.5C8.9432 5.5 9.16705 5.72386 9.16705 6V8C9.16705 8.27614 8.9432 8.5 8.66705 8.5C8.39091 8.5 8.16705 8.27614 8.16705 8V6C8.16705 5.72386 8.39091 5.5 8.66705 5.5Z"
        fill="currentColor"
      />
      <path
        d="M8.66703 11.3333C9.03522 11.3333 9.3337 11.0349 9.3337 10.6667C9.3337 10.2985 9.03522 10 8.66703 10C8.29884 10 8.00037 10.2985 8.00037 10.6667C8.00037 11.0349 8.29884 11.3333 8.66703 11.3333Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5935 2.69047C9.80011 1.10352 7.53887 1.10307 6.74495 2.68977L2.39727 11.3787C1.68083 12.8106 2.71895 14.5 4.32135 14.5H13.0128C14.6148 14.5 15.6529 12.8112 14.9372 11.3795L10.5935 2.69047ZM7.63925 3.13725C8.06446 2.28742 9.27407 2.28762 9.69902 3.13762L14.0427 11.8266C14.4275 12.5964 13.8681 13.5 13.0128 13.5H4.32135C3.46577 13.5 2.90635 12.5961 3.29157 11.8262L7.63925 3.13725Z"
        fill="currentColor"
      />
    </SvgIcon>
  ))
);
