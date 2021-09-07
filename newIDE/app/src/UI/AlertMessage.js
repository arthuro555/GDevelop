// @flow
import { Trans } from '@lingui/macro';

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error';
import { Spacer, Line, Column } from './Grid';
import FlatButton from './FlatButton';
import Text from './Text';
import GDeveloppeThemeContext from './Theme/ThemeContext';
import { ResponsiveLineStackLayout } from './Layout';

const styles = {
  icon: { width: 28, height: 28, marginRight: 10, marginLeft: 10 },
  content: { flex: 1 },
};

type Props = {|
  kind: 'info' | 'warning' | 'error',
  children: React.Node,
  onHide?: () => void,
  renderLeftIcon?: () => React.Node,
  renderRightButton?: () => React.Node,
|};

/**
 * Show an hint, warning or other message. If you want to allow the user
 * to permanently hide the hint/alert/message, see DismissableAlertMessage.
 */
const AlertMessage = ({
  kind,
  children,
  onHide,
  renderRightButton,
  renderLeftIcon,
}: Props) => {
  const GDeveloppeTheme = React.useContext(GDeveloppeThemeContext);

  return (
    <Paper elevation={10} square>
      <Column expand>
        <ResponsiveLineStackLayout
          alignItems="center"
          justifyContent="space-between"
          noMargin
        >
          <Line noMargin alignItems="center">
            {renderLeftIcon ? (
              <React.Fragment>
                {renderLeftIcon()}
                <Spacer />
                <Spacer />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {kind === 'info' && <Info style={styles.icon} />}
                {kind === 'warning' && (
                  <Warning
                    style={{
                      ...styles.icon,
                      color: GDeveloppeTheme.message.warning,
                    }}
                  />
                )}
                {kind === 'error' && (
                  <Error
                    style={{
                      ...styles.icon,
                      color: GDeveloppeTheme.message.error,
                    }}
                  />
                )}
              </React.Fragment>
            )}
            <Text style={styles.content}>{children}</Text>
          </Line>
          <ResponsiveLineStackLayout noMargin alignItems="center">
            {renderRightButton && renderRightButton()}
            {onHide && (
              <FlatButton
                label={<Trans>Hide</Trans>}
                onClick={() => onHide()}
              />
            )}
          </ResponsiveLineStackLayout>
        </ResponsiveLineStackLayout>
      </Column>
    </Paper>
  );
};

export default AlertMessage;
