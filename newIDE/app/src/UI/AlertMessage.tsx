import * as React from 'react';
// @ts-expect-error - TS6142 - Module './Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer, Line, Column } from './Grid';
import { useTheme } from '@material-ui/styles';
import { lighten } from '@material-ui/core/styles';
// @ts-expect-error - TS6142 - Module './Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from './Text';
import GDevelopThemeContext from './Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module './Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from './Layout';
// @ts-expect-error - TS6142 - Module './IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from './IconButton';
// @ts-expect-error - TS6142 - Module './Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from './Paper';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from './CustomSvgIcons/Cross';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/WarningFilled'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/WarningFilled.js' implicitly has an 'any' type.
import WarningFilled from './CustomSvgIcons/WarningFilled';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/SuccessFilled'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SuccessFilled.js' implicitly has an 'any' type.
import SuccessFilled from './CustomSvgIcons/SuccessFilled';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/ErrorFilled'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ErrorFilled.js' implicitly has an 'any' type.
import ErrorFilled from './CustomSvgIcons/ErrorFilled';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './CustomSvgIcons/SquaredInfo'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SquaredInfo.js' implicitly has an 'any' type.
import SquaredInfo from './CustomSvgIcons/SquaredInfo';

const styles = {
  icon: { width: 28, height: 28, marginRight: 10, marginLeft: 10 },
  topRightHideButton: { position: 'absolute', right: 0, top: 0 },
  paper: { position: 'relative', overflow: 'hidden' },
  content: { flex: 1 },
} as const;

type Props = {
  kind?: 'info' | 'warning' | 'error' | 'valid',
  children: React.ReactNode,
  onHide?: () => void | null | undefined,
  hideButtonSize?: 'small',
  renderLeftIcon?: () => React.ReactElement,
  renderRightButton?: () => React.ReactElement | null | undefined,
  markdownImageOnly?: boolean
};

/**
 * Show an hint, warning or other message. If you want to allow the user
 * to permanently hide the hint/alert/message, see DismissableAlertMessage.
 */
const AlertMessage = ({
  kind,
  children,
  onHide,
  hideButtonSize,
  renderRightButton,
  renderLeftIcon,
  markdownImageOnly,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const theme = useTheme();
  const paperStyle: {
    position: string,
    borderColor?: string,
    backgroundColor?: string,
    overflow: string
  } = {
    ...styles.paper,
  };
  const hideButtonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
    borderLeft: `1px solid ${theme.palette.divider}`,
  } as const;

  if (kind === 'error' || kind === 'warning' || kind === 'valid') {
    paperStyle.borderColor = gdevelopTheme.message[kind];
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
    if (theme.palette.type === 'light') {
      paperStyle.backgroundColor = lighten(gdevelopTheme.message[kind], 0.9);
    }
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper variant="outlined" style={paperStyle} background="dark">
      {markdownImageOnly ? (
        children
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                alignItems="center"
                justifyContent="space-between"
                noMargin
                expand
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line noMargin alignItems="center">
                  {renderLeftIcon ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment>
                      {renderLeftIcon()}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Spacer />
                    </React.Fragment>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      {kind === 'info' && <SquaredInfo style={styles.icon} />}
                      {kind === 'warning' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <WarningFilled
                          style={{
                            ...styles.icon,
                            color: gdevelopTheme.message.warning,
                          }}
                        />
                      )}
                      {kind === 'error' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <ErrorFilled
                          style={{
                            ...styles.icon,
                            color: gdevelopTheme.message.error,
                          }}
                        />
                      )}
                      {kind === 'valid' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <SuccessFilled
                          style={{
                            ...styles.icon,
                            color: gdevelopTheme.message.valid,
                          }}
                        />
                      )}
                    </React.Fragment>
                  )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text style={styles.content}>{children}</Text>
                </Line>
                {renderRightButton && renderRightButton()}
              </ResponsiveLineStackLayout>
            </Line>
          </Column>
          {onHide && !(hideButtonSize === 'small') && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <div style={hideButtonContainerStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton onClick={onHide} color="default">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Cross fontSize="small" />
              </IconButton>
            </div>
          )}
        </Line>
      )}
      {onHide && hideButtonSize === 'small' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div style={styles.topRightHideButton}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton aria-label="hide" onClick={() => onHide()} size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Cross fontSize="small" />
          </IconButton>
        </div>
      )}
    </Paper>
  );
};

export default AlertMessage;
