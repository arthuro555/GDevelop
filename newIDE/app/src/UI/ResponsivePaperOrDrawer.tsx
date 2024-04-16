import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from './Paper';
import { useResponsiveWindowSize } from './Responsive/ResponsiveWindowMeasurer';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  paper: {
    display: 'flex',
    width: 250,
  },
  drawerPaper: {
    display: 'flex',
    maxWidth: '80%', // Ensure it can always be closed on small screens.
  },
} as const;

const drawerPaperProps = {
  style: styles.drawerPaper,
} as const;

const drawerModalProps = {
  keepMounted: true,
} as const;

/**
 * Display a Paper element, for medium/large screens, or a Drawer on small screens.
 */
export const ResponsivePaperOrDrawer = ({
  open,
  onClose,
  children,
}: {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}) => {
  const { isMobile } = useResponsiveWindowSize();
  if (!isMobile) {
    if (!open) return null;
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Paper style={styles.paper} background="medium">
        {children}
      </Paper>
    );
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={drawerPaperProps}
      ModalProps={drawerModalProps}
    >
      {children}
    </Drawer>
  );
};
