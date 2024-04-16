import * as React from 'react';
// @ts-expect-error - TS6142 - Module './CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from './CorsAwareImage';

export const iconWithBackgroundStyle = {
  background: 'linear-gradient(45deg, #FFFFFF33, #FFFFFF)',
  borderRadius: 4,
} as const;

const styles = {
  iconBackground: {
    flex: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: iconWithBackgroundStyle,
} as const;

type Props = {
  src: string,
  alt: string,
  size: number
};

/**
 * Display the specified icon with a background so that it's suitable
 * for display anywhere with a consistent style.
 */
export const IconContainer = ({
  src,
  alt,
  size,
}: Props) => {
  const padding = size > 24 ? 4 : 2;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={styles.iconBackground}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CorsAwareImage
        style={{
          ...styles.icon,
          padding,
          width: size - 2 * padding,
          height: size - 2 * padding,
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
};
