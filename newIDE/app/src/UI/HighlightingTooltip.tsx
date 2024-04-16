import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from './Grid';
import { getDisplayZIndexForHighlighter } from '../InAppTutorial/HTMLUtils';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
// @ts-expect-error - TS6142 - Module './CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from './CorsAwareImage';
// @ts-expect-error - TS6142 - Module './IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from './IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from './Layout';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
import InAppTutorialContext from '../InAppTutorial/InAppTutorialContext';

const styles = {
  paper: {
    padding: '8px 10px',
    minWidth: 180,
  },
} as const;

const useClasses = makeStyles({
  popper: {
    '&[x-placement*="bottom"] #new-feature-popper-arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '0 100%',
      },
    },
    '&[x-placement*="top"] #new-feature-popper-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '100% 0',
      },
    },
    '&[x-placement*="right"] #new-feature-popper-arrow': {
      left: 0,
      marginLeft: '-0.71em',
      height: '1em',
      width: '0.71em',
      marginTop: 4,
      marginBottom: 4,
      '&::before': {
        transformOrigin: '100% 100%',
      },
    },
    '&[x-placement*="left"] #new-feature-popper-arrow': {
      right: 0,
      marginRight: '-0.71em',
      height: '1em',
      width: '0.71em',
      marginTop: 4,
      marginBottom: 4,
      '&::before': {
        transformOrigin: '0 0',
      },
    },
  },
  arrow: {
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    /* = width / sqrt(2) = (length of the hypotenuse) */
    height: '0.71em',
    boxSizing: 'border-box',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  },
});

type Props = {
  title: React.ReactNode,
  thumbnailSource?: string,
  thumbnailAlt?: string,
  content: React.ReactNode,
  anchorElement: HTMLElement,
  onClose: () => void,
  placement: 'left' | 'top' | 'bottom' | 'right',
  closeWithBackdropClick: boolean
};

const HighlightingTooltip = ({
  title,
  thumbnailSource,
  thumbnailAlt,
  content,
  anchorElement,
  onClose,
  placement,
  closeWithBackdropClick,
}: Props) => {
  const classes = useClasses();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { currentlyRunningInAppTutorial } = React.useContext(
    InAppTutorialContext
  );
  if (currentlyRunningInAppTutorial) return null;

  const popper = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Popper
      id="in-app-tutorial-tooltip-displayer"
      open={true}
      className={classes.popper}
      anchorEl={anchorElement}
      transition
      placement={placement}
      popperOptions={{
        modifiers: {
          arrow: { enabled: true, element: '#new-feature-popper-arrow' },
          offset: {
            enabled: true,
            offset: '0,10',
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: document.querySelector('.main-frame'),
          },
        },
      }}
      style={{
        zIndex: getDisplayZIndexForHighlighter(anchorElement),
        maxWidth: 'min(90%, 300px)',
      }}
    >
      {({ TransitionProps }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Fade {...TransitionProps} timeout={{ enter: 350, exit: 0 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Paper
            style={{
              ...styles.paper,
              backgroundColor: gdevelopTheme.paper.backgroundColor.light,
            }}
            elevation={4}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin size="sub-title">
                  {title}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton size="small" onClick={onClose}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Cross fontSize="small" />
                </IconButton>
              </Line>
              {thumbnailSource && thumbnailAlt && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <CorsAwareImage
                  src={thumbnailSource}
                  alt={thumbnailAlt}
                  style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
              )}
              {content}
            </ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <span
              id="new-feature-popper-arrow"
              className={classes.arrow}
              style={{ color: gdevelopTheme.paper.backgroundColor.light }}
            />
          </Paper>
        </Fade>
      )}
    </Popper>
  );

  if (closeWithBackdropClick) {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ClickAwayListener
        onClickAway={event => {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }}
      >
        {popper}
      </ClickAwayListener>
    );
  }
  return popper;
};

export default HighlightingTooltip;
