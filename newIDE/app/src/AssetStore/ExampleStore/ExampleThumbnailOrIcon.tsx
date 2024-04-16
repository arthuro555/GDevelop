import * as React from 'react';
import { ExampleShortHeader } from '../../Utils/GDevelopServices/Example';
// @ts-expect-error - TS6142 - Module '../../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../../UI/CorsAwareImage';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { iconWithBackgroundStyle } from '../../UI/IconContainer';

const styles = {
  iconBackground: {
    flex: 0,
    display: 'flex',
    justifyContent: 'left',
  },
  icon: {
    ...iconWithBackgroundStyle,
    padding: 1,
  },
} as const;

const ICON_DESKTOP_HEIGHT = 120;

type Props = {
  exampleShortHeader: ExampleShortHeader
};

export const ExampleThumbnailOrIcon = ({
  exampleShortHeader,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const iconUrl = exampleShortHeader.previewImageUrls[0];
  const aspectRatio = iconUrl.endsWith('square-icon.png') ? '1 / 1' : '16 / 9';
  // Make the icon be full width on mobile.
  const height = isMobile ? undefined : ICON_DESKTOP_HEIGHT;
  const width = isMobile ? '100%' : undefined;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={styles.iconBackground}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <CorsAwareImage
        style={{ ...styles.icon, height, width, aspectRatio }}
        src={iconUrl}
        alt={exampleShortHeader.name}
      />
    </div>
  );
};
