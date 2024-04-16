import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../CustomSvgIcons/Cross';
import { MosaicWindowContext, MosaicContext } from 'react-mosaic-component';

const styles = {
  container: {
    padding: 0,
    width: 32,
    height: 32,
  },
  icon: {
    width: 16,
    height: 16,
  },
} as const;

type Props = Record<any, any>;

export default function CloseButton(props: Props) {
  const { mosaicActions } = React.useContext(MosaicContext);
  const { mosaicWindowActions } = React.useContext(MosaicWindowContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <IconButton
      onClick={() => {
        mosaicActions.remove(mosaicWindowActions.getPath());
      }}
      style={styles.container}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Cross htmlColor="inherit" style={styles.icon} />
    </IconButton>
  );
}
