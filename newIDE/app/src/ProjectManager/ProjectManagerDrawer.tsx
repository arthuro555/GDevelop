import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import {
  getAvoidSoftKeyboardStyle,
  useSoftKeyboardBottomOffset,
} from '../UI/MobileSoftKeyboard';
import { dataObjectToProps } from '../Utils/HTMLDataset';
// @ts-expect-error - TS6142 - Module '../UI/DrawerTopBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DrawerTopBar.tsx', but '--jsx' is not set.
import DrawerTopBar from '../UI/DrawerTopBar';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  drawerContent: {
    width: 320,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
} as const;

type Props = {
  title: string,
  projectManagerOpen: boolean,
  toggleProjectManager: () => void,
  children: React.ReactNode | null
};

export const ProjectManagerDrawer = ({
  title,
  children,
  projectManagerOpen,
  toggleProjectManager,
}: Props) => {
  const softKeyboardBottomOffset = useSoftKeyboardBottomOffset();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Drawer
      open={projectManagerOpen}
      PaperProps={{
        style: {
          ...styles.drawerContent,
          ...getAvoidSoftKeyboardStyle(softKeyboardBottomOffset),
        },
        className: 'safe-area-aware-left-container',
      }}
      ModalProps={{
        keepMounted: true,
      }}
      onClose={toggleProjectManager}
      {...dataObjectToProps({
        open: projectManagerOpen ? 'true' : undefined,
      })}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DrawerTopBar
        title={title}
        onClose={toggleProjectManager}
        id="project-manager-drawer"
      />
      {children}
      {!children && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>To begin, open or create a new project.</Trans>
        </EmptyMessage>
      )}
    </Drawer>
  );
};
