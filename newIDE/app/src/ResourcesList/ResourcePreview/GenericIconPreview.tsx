import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../CheckeredBackground' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/CheckeredBackground.tsx', but '--jsx' is not set.
import CheckeredBackground from '../CheckeredBackground';

const styles = {
  previewContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: { width: 60, height: 60 },
} as const;

type Props = {
  renderIcon: (
    arg1: {
      style: any
    },
  ) => React.ReactElement
};

/**
 * Display a generic container to display an icon.
 */
const GenericIconPreview = ({
  renderIcon,
}: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <div style={styles.previewContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CheckeredBackground />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <div style={styles.iconContainer}>{renderIcon({ style: styles.icon })}</div>
  </div>
);

export default GenericIconPreview;
