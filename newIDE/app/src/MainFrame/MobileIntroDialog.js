import { Trans } from '@lingui/macro';
import React, { Component } from 'react';
import Dialog from '../UI/Dialog';
import FlatButton from '../UI/FlatButton';
import Text from '../UI/Text';
import { ResponsiveWindowMeasurer } from '../UI/Reponsive/ResponsiveWindowMeasurer';
import RaisedButton from '../UI/RaisedButton';
import { Line } from '../UI/Grid';

export default class MobileIntroDialog extends Component {
  render() {
    const { open, onClose } = this.props;
    if (window.localStorage.getItem('hasUsedMobileBefore') === "true") onClose();
    window.localStorage.setItem('hasUsedMobileBefore', "true")

    return (
      <ResponsiveWindowMeasurer>
        {windowWidth => (
          <Dialog
            title={
              <Trans>Welcome to the unofficial GDevelop mobile port</Trans>
            }
            actions={[
              <FlatButton
                label={<Trans>Close</Trans>}
                primary={false}
                onClick={onClose}
                key="close"
              />,
            ]}
            cannotBeDismissed={false}
            open={open}
            onRequestClose={onClose}
          >
            <div>
              <Text>
                <Trans>
                  Welcome to the GDevelop mobile port made by arthuro555!
                </Trans>
              </Text>
              <Text>
                Remember that this is an <b>unofficial version</b>. It isn't
                officially supported and lots of features might be broken.
              </Text>
              <Line justifyContent="center">
                <RaisedButton
                  label={<Trans>Start using GDevelop</Trans>}
                  primary
                  onClick={onClose}
                />
              </Line>
            </div>
          </Dialog>
        )}
      </ResponsiveWindowMeasurer>
    );
  }
}
