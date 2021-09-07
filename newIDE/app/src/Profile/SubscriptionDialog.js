// @flow
import { t } from '@lingui/macro';
import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';
import { type I18n as I18nType } from '@lingui/core';
import * as React from 'react';
import FlatButton from '../UI/FlatButton';
import Dialog from '../UI/Dialog';
import UserProfileContext, { type UserProfile } from './UserProfileContext';
import {
  type PlanDetails,
  changeUserSubscription,
  getRedirectToCheckoutUrl,
} from '../Utils/GDeveloppeServices/Usage';
import { showMessageBox, showErrorBox } from '../UI/Messages/MessageBox';
import {
  sendSubscriptionDialogShown,
  sendChoosePlanClicked,
} from '../Utils/Analytics/EventSender';
import ThemeConsumer from '../UI/Theme/ThemeConsumer';
type Props = {|
  open: boolean,
  onClose: Function,
|};

type State = {|
  isLoading: boolean,
  subscriptionPendingDialogOpen: boolean,
|};

export default class SubscriptionDialog extends React.Component<Props, State> {
  state = { isLoading: false, subscriptionPendingDialogOpen: false };

  componentDidMount() {
    if (this.props.open) {
      sendSubscriptionDialogShown();
    }
  }

  componentWillReceiveProps(newProps: Props) {
    if (!this.props.open && newProps.open) {
      sendSubscriptionDialogShown();
    }
  }

  choosePlan = (
    i18n: I18nType,
    userProfile: UserProfile,
    plan: PlanDetails
  ) => {
    const { getAuthorizationHeader, subscription, profile } = userProfile;
    if (!profile || !subscription) return;
    sendChoosePlanClicked(plan.planId);

    if (subscription.stripeSubscriptionId) {
      const answer = Window.showConfirmDialog(
        plan.planId
          ? i18n._(t`Are you sure you want to subscribe to this new plan?`)
          : i18n._(t`Are you sure you want to cancel your subscription?`)
      );
      if (!answer) return;

      // We already have a stripe customer, change the subscription without
      // asking for the user card.
      this.setState({ isLoading: true });
      changeUserSubscription(getAuthorizationHeader, profile.uid, {
        planId: plan.planId,
      }).then(
        () => this.handleUpdatedSubscriptionSuccess(i18n, userProfile, plan),
        (err: Error) => this.handleUpdatedSubscriptionFailure(i18n, err)
      );
    } else {
      this.setState({
        subscriptionPendingDialogOpen: true,
      });
      Window.openExternalURL(
        getRedirectToCheckoutUrl(
          plan.planId || '',
          profile.uid,
          profile.email || ''
        )
      );
    }
  };

  handleUpdatedSubscriptionSuccess = (
    i18n: I18nType,
    userProfile: UserProfile,
    plan: PlanDetails
  ) => {
    userProfile.onRefreshUserProfile();
    this.setState({ isLoading: false });
    if (plan.planId) {
      showMessageBox(
        i18n._(
          t`Congratulations, your new subscription is now active!\n\nYou can now use the services unlocked with this plan.`
        )
      );
    } else {
      showMessageBox(
        i18n._(
          t`Your subscription was properly cancelled. Sorry to see you go!`
        )
      );
    }
  };

  handleUpdatedSubscriptionFailure = (i18n: I18nType, rawError: Error) => {
    this.setState({ isLoading: false });
    showErrorBox({
      message: i18n._(
        t`Your subscription could not be updated. Please try again later!`
      ),
      rawError,
      errorId: 'subscription-update-error',
    });
  };

  _renderPrice(plan: PlanDetails): React.Node {
    return !plan.monthlyPriceInEuros ? (
      <Trans>Free</Trans>
    ) : (
      <Trans>{plan.monthlyPriceInEuros}€/month</Trans>
    );
  }

  _isLoading = (userProfile: UserProfile) =>
    !userProfile.subscription || !userProfile.profile || this.state.isLoading;

  render() {
    const { open, onClose } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <UserProfileContext.Consumer>
            {(userProfile: UserProfile) => (
              <ThemeConsumer>
                {muiTheme => (
                  <Dialog
                    actions={[
                      <FlatButton
                        label={<Trans>Close</Trans>}
                        key="close"
                        primary={false}
                        onClick={onClose}
                      />,
                    ]}
                    onRequestClose={onClose}
                    cannotBeDismissed={true}
                    open={open}
                    noMargin
                  >
                    ÜUIAvdpiuaüfDA hahaha nO YOU GOT RICK role
                    <iframe
                      title="rickrole!"
                      width="420"
                      height="315"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    />
                  </Dialog>
                )}
              </ThemeConsumer>
            )}
          </UserProfileContext.Consumer>
        )}
      </I18n>
    );
  }
}
