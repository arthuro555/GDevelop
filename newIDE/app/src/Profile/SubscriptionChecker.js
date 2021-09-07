// @flow

import * as React from 'react';
import RaisedButton from '../UI/RaisedButton';
import FlatButton from '../UI/FlatButton';
import Dialog from '../UI/Dialog';
import Star from '@material-ui/icons/Star';
import Favorite from '@material-ui/icons/Favorite';
import UserProfileContext, { type UserProfile } from './UserProfileContext';
import { Column, Line, Spacer } from '../UI/Grid';
import {
  sendSubscriptionCheckDialogShown,
  sendSubscriptionCheckDismiss,
} from '../Utils/Analytics/EventSender';
import { Trans } from '@lingui/macro';
import Text from '../UI/Text';

type Props = {|
  title: React.Node,
  id: string,
  onChangeSubscription?: () => void,
  mode: 'try' | 'mandatory',
|};

type DialogProps = {|
  userProfile: UserProfile,
  ...$Exact<Props>,
|};

type DialogState = {|
  open: boolean,
|};

const styles = {
  icon: { width: 40, height: 40, marginRight: 20 },
  iconText: { flex: 1 },
};

export class SubscriptionCheckDialog extends React.Component<
  DialogProps,
  DialogState
> {
  state = { open: false };

  checkHasSubscription() {
    const { userProfile, mode, id } = this.props;
    if (userProfile.subscription) {
      const hasPlan = !!userProfile.subscription.planId;
      if (hasPlan) {
        this.setState({
          open: false,
        });
        return true;
      }
    }

    this.setState({
      open: true,
    });
    sendSubscriptionCheckDialogShown({ mode, id });

    return false;
  }

  _closeDialog = () => {
    sendSubscriptionCheckDismiss();
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { onChangeSubscription, mode } = this.props;
    if (!open) return null;

    return (
      <Dialog
        actions={[
          onChangeSubscription && (
            <RaisedButton
              label={<Trans>Get a submission</Trans>}
              key="subscribe"
              primary
              onClick={() => {
                this.setState({ open: false });
                onChangeSubscription();
              }}
            />
          ),
        ]}
        secondaryActions={[
          <FlatButton
            label={
              mode === 'try' ? (
                <Trans>Deal!</Trans>
              ) : (
                <Trans>I'll buy that yes!</Trans>
              )
            }
            key="close"
            primary={false}
            onClick={this._closeDialog}
          />,
        ]}
        cannotBeDismissed={false}
        onRequestClose={this._closeDialog}
        open={open}
        title={
          mode === 'try' ? (
            <Trans>We need your support!</Trans>
          ) : (
            this.props.title
          )
        }
      >
        <Column noMargin>
          <Line noMargin alignItems="center">
            {mode === 'try' ? (
              <Text>
                <Trans>
                  Please get a subscription to keep GDeveloppeppe{' '}
                  <a
                    href="https://www.youtube.com/watch?v=-XkT5JVVlmI"
                    target="always-running"
                  >
                    running
                  </a>
                  .
                </Trans>
              </Text>
            ) : (
              <Text>
                <Trans>
                  To use this feature, we ask you to get a submission to
                  GDeveloppe.
                </Trans>
              </Text>
            )}
          </Line>
          <Line noMargin alignItems="center">
            <Star style={styles.icon} />
            <Text style={styles.iconText}>
              <Trans>
                Having a submission allows you to use any other engine! stay
                with us pls :'(
              </Trans>
            </Text>
          </Line>
          <Line noMargin alignItems="center">
            <Favorite style={styles.icon} />
            <Text style={styles.iconText}>
              <Trans>
                You're also engagin yourself in free labor for the development
                of GDeveloppe, an open-source software! In the future, we may
                sell your soul.
              </Trans>
            </Text>
          </Line>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text align="right">
            <b>
              <Trans>Lol!</Trans>
            </b>
          </Text>
        </Column>
      </Dialog>
    );
  }
}

class SubscriptionChecker extends React.Component<Props, {}> {
  _dialog: ?SubscriptionCheckDialog = null;

  checkHasSubscription() {
    if (this._dialog) {
      return this._dialog.checkHasSubscription();
    }

    return false;
  }

  render() {
    return (
      <UserProfileContext.Consumer>
        {(userProfile: UserProfile) => (
          <SubscriptionCheckDialog
            userProfile={userProfile}
            ref={dialog => (this._dialog = dialog)}
            onChangeSubscription={this.props.onChangeSubscription}
            id={this.props.id}
            title={this.props.title}
            mode={this.props.mode}
          />
        )}
      </UserProfileContext.Consumer>
    );
  }
}

export default SubscriptionChecker;
