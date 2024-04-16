import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Spacer } from '../UI/Grid';
import { getDisplayZIndexForHighlighter } from './HTMLUtils';
import { InAppTutorialFormattedTooltip } from '../Utils/GDevelopServices/InAppTutorial';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowBottom'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowBottom.js' implicitly has an 'any' type.
import ChevronArrowBottom from '../UI/CustomSvgIcons/ChevronArrowBottom';
import useIsElementVisibleInScroll from '../Utils/UseIsElementVisibleInScroll';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../UI/CustomSvgIcons/Cross';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/ChevronArrowTop'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowTop.js' implicitly has an 'any' type.
import ChevronArrowTop from '../UI/CustomSvgIcons/ChevronArrowTop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../UI/TextButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextButton.tsx', but '--jsx' is not set.
import TextButton from '../UI/TextButton';

const themeColors = {
  grey10: '#EBEBED',
  grey20: '#D9D9DE',
  grey30: '#C5C5C9',
  grey40: '#A6A6AB',
  grey50: '#7F7F85',
  grey70: '#494952',
  grey100: '#1D1D26',
} as const;

const styles = {
  paper: {
    padding: '10px 12px', // vertical padding is added by markdown text paragraphs
    minWidth: 180,
  },
  title: {
    color: themeColors.grey100,
  },
  description: {
    color: themeColors.grey70,
  },
  divider: {
    backgroundColor: themeColors.grey20,
    height: 1,
  },
  descriptionImage: {
    margin: 'auto',
  },
  iconButtonContainer: {
    cursor: 'pointer',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
  },
  iconButtonContainerWithPadding: { paddingRight: 5 },
  headerText: { fontSize: 12 },
  headerContentPreview: { color: themeColors.grey100 },
} as const;

const useClasses = makeStyles({
  popper: {
    '&[x-placement*="bottom"] #arrow-popper': {
      top: 0,
      left: 0,
      marginTop: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '0 100%',
      },
    },
    '&[x-placement*="top"] #arrow-popper': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '100% 0',
      },
    },
    '&[x-placement*="right"] #arrow-popper': {
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
    '&[x-placement*="left"] #arrow-popper': {
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

type TooltipBodyProps = {
  tooltip: InAppTutorialFormattedTooltip,
  buttonLabel?: string,
  goToNextStep: () => void,
  fillAutomatically?: () => void
};

const TooltipBody = ({
  tooltip,
  buttonLabel,
  goToNextStep,
  fillAutomatically,
}: TooltipBodyProps) => {
  const { isMobile } = useResponsiveWindowSize();
  const titleAndDescription = (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
      {tooltip.title && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Typography style={styles.title} variant="subtitle1" translate="no">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MarkdownText source={tooltip.title} allowParagraphs />
        </Typography>
      )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {tooltip.title && tooltip.description && <span style={styles.divider} />}
      {tooltip.description && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Typography style={styles.description} translate="no">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <MarkdownText source={tooltip.description} allowParagraphs />
        </Typography>
      )}
    </Column>
  );
  const image = tooltip.image && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <img
      src={tooltip.image.dataUrl}
      alt="Tutorial helper"
      style={{
        ...styles.descriptionImage,
        width: tooltip.image.width || '100%',
        maxWidth: isMobile ? 150 : '100%',
        maxHeight: isMobile ? 150 : '100%',
      }}
    />
  );
  const button = buttonLabel && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      {tooltip.image ? <Spacer /> : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton primary label={buttonLabel} onClick={goToNextStep} />
    </Column>
  );
  const imageAndButton = isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout noMargin alignItems="center">
      {image}
      {button}
    </LineStackLayout>
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin alignItems="center">
      {image}
      {button}
    </Column>
  );

  const fillAutomaticallyButton = fillAutomatically && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextButton
      onClick={fillAutomatically}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={<Trans>Fill automatically</Trans>}
      primary
    />
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
      {titleAndDescription}
      {imageAndButton}
      {fillAutomaticallyButton}
    </Column>
  );
};

type TooltipHeaderProps = {
  paletteType: 'dark' | 'light',
  progress: number,
  showFoldButton: boolean,
  showQuitButton: boolean,
  onClickFoldButton: () => void,
  tooltipContent?: string,
  endTutorial: () => void
};

const TooltipHeader = ({
  paletteType,
  progress,
  showFoldButton,
  showQuitButton,
  onClickFoldButton,
  tooltipContent,
  endTutorial,
}: TooltipHeaderProps) => {
  const progressColor =
    paletteType === 'light' ? themeColors.grey40 : themeColors.grey30;
  const iconButtonContainerColors =
    paletteType === 'light'
      ? {
          color: themeColors.grey50,
          backgroundColor: themeColors.grey20,
        }
      : {
          color: themeColors.grey40,
          backgroundColor: themeColors.grey10,
        };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout
      alignItems="center"
      noMargin
      justifyContent={tooltipContent ? undefined : 'space-between'}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Typography
        style={{ ...styles.headerText, color: progressColor }}
        translate="no"
      >
        {progress}%
      </Typography>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin alignItems="center" overflow="hidden">
        {tooltipContent || !showQuitButton ? null : (
          // We hide the quit button:
          // - When the tooltip is folded, the tooltip content should not be null;
          // - When requested.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ButtonBase disableRipple onClick={endTutorial}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <div
              style={{
                ...styles.iconButtonContainer,
                ...styles.iconButtonContainerWithPadding,
                ...iconButtonContainerColors,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Cross />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Typography style={styles.headerText} translate="no">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Quit tutorial</Trans>
              </Typography>
            </div>
          </ButtonBase>
        )}
        {tooltipContent && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Typography
            variant="body2"
            style={{ ...styles.headerContentPreview, ...textEllipsisStyle }}
            translate="no"
          >
            {tooltipContent}
          </Typography>
        )}
        {showFoldButton ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ButtonBase disableRipple onClick={onClickFoldButton}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <span
              style={{
                ...styles.iconButtonContainer,
                ...iconButtonContainerColors,
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              {tooltipContent ? <ChevronArrowTop /> : <ChevronArrowBottom />}
            </span>
          </ButtonBase>
        ) : null}
      </LineStackLayout>
    </LineStackLayout>
  );
};

type Props = {
  anchorElement: HTMLElement,
  tooltip: InAppTutorialFormattedTooltip,
  showQuitButton: boolean,
  buttonLabel?: string,
  progress: number,
  endTutorial: () => void,
  goToNextStep: () => void,
  fillAutomatically?: () => void
};

const InAppTutorialTooltipDisplayer = ({
  anchorElement,
  tooltip,
  showQuitButton,
  buttonLabel,
  progress,
  endTutorial,
  goToNextStep,
  fillAutomatically,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const {
    palette: { type: paletteType },
  } = React.useContext(GDevelopThemeContext);
  const [show, setShow] = React.useState<boolean>(false);
  const [folded, setFolded] = React.useState<boolean>(false);
  const updateVisibility = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      setShow(entries[0].isIntersecting);
    },
    []
  );
  const tooltipConcatenated = (
    (tooltip.title || '') + (tooltip.description || '')
  ).replace(/\(.+\)/g, ''); // Remove content between parenthesis as they should contain dynamic content (to prevent unfolding the tooltip for nothing).

  // If tooltip changes, we unfold the tooltip.
  React.useEffect(
    () => {
      setFolded(false);
    },
    [tooltipConcatenated]
  );

  useIsElementVisibleInScroll(anchorElement, updateVisibility);

  const classes = useClasses();
  const placement =
    isMobile && tooltip.mobilePlacement
      ? tooltip.mobilePlacement
      : tooltip.placement || 'bottom';
  const backgroundColor =
    paletteType === 'light'
      ? '#EBEBED' // Grey10
      : '#FAFAFA'; // Grey00

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Popper
      id="in-app-tutorial-tooltip-displayer"
      open={show}
      className={classes.popper}
      anchorEl={anchorElement}
      transition
      placement={placement}
      popperOptions={{
        modifiers: {
          arrow: { enabled: true, element: '#arrow-popper' },
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
        width: isMobile ? '100%' : undefined,
      }}
    >
      {({ TransitionProps }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Fade {...TransitionProps} timeout={{ enter: 350, exit: 0 }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Paper
            style={{
              ...styles.paper,
              backgroundColor,
            }}
            elevation={4}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TooltipHeader
                paletteType={paletteType}
                // Display the hide button when standalone only
                showFoldButton={!!tooltip.standalone}
                showQuitButton={showQuitButton}
                progress={progress}
                tooltipContent={
                  folded ? tooltip.title || tooltip.description : undefined
                }
                onClickFoldButton={() => setFolded(!folded)}
                endTutorial={endTutorial}
              />
              {!folded && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TooltipBody
                  tooltip={tooltip}
                  buttonLabel={buttonLabel}
                  goToNextStep={goToNextStep}
                  fillAutomatically={fillAutomatically}
                />
              )}
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <span
              id="arrow-popper"
              className={classes.arrow}
              style={{ color: backgroundColor }}
            />
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default InAppTutorialTooltipDisplayer;
