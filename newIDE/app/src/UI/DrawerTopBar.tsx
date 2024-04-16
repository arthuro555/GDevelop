import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';
import Tooltip from '@material-ui/core/Tooltip';
import { tooltipEnterDelay } from './Tooltip';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import { DialogTitleBar } from '../UI/Dialog';

const appBarHeight = 32;

type Props = {
  title: React.ReactNode,
  onClose: () => void,
  id: string
};

const styles = {
  appBar: {
    height: appBarHeight,
    minHeight: appBarHeight,
  },
  toolbar: {
    height: appBarHeight,
    minHeight: appBarHeight,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: '15px',
    flexGrow: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
} as const;

const DrawerTopBar = (props: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <DialogTitleBar backgroundColor="transparent" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AppBar
        position="static"
        style={styles.appBar}
        className="safe-area-aware-top-margin"
        color="primary"
        elevation={0}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Toolbar style={styles.toolbar}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Tooltip
// @ts-expect-error - TS2322 - Type 'ReactNode' is not assignable to type 'string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal'.
            title={props.title}
            placement="bottom"
            enterDelay={tooltipEnterDelay}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Typography variant="h6" style={styles.title}>
              {props.title}
            </Typography>
          </Tooltip>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton
            onClick={props.onClose}
            edge="end"
            color="inherit"
            size="small"
            id={`${props.id}-close`}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Cross />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DrawerTopBar;
