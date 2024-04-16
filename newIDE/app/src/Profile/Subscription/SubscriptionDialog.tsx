// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import AuthenticatedUserContext from '../AuthenticatedUserContext';
import {
  changeUserSubscription,
  getRedirectToCheckoutUrl,
  canSeamlesslyChangeSubscription,
  canCancelAtEndOfPeriod,
  hasValidSubscriptionPlan,
  EDUCATION_PLAN_MAX_SEATS,
  EDUCATION_PLAN_MIN_SEATS,
  SubscriptionPlanWithPricingSystems,
  SubscriptionPlanPricingSystem,
  Subscription,
} from '../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
import { showErrorBox } from '../../UI/Messages/MessageBox';
import {
  sendSubscriptionDialogShown,
  sendChoosePlanClicked,
  sendCancelSubscriptionToChange,
} from '../../Utils/Analytics/EventSender';
import {
  SubscriptionAnalyticsMetadata,
  SubscriptionType,
// @ts-expect-error - TS6142 - Module './SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
} from './SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module './SubscriptionPendingDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionPendingDialog.tsx', but '--jsx' is not set.
import SubscriptionPendingDialog from './SubscriptionPendingDialog';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/RedemptionCode'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/RedemptionCode.js' implicitly has an 'any' type.
import RedemptionCodeIcon from '../../UI/CustomSvgIcons/RedemptionCode';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../RedeemCodeDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/RedeemCodeDialog.tsx', but '--jsx' is not set.
import RedeemCodeDialog from '../RedeemCodeDialog';
// @ts-expect-error - TS6142 - Module './PlanCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/PlanCard.tsx', but '--jsx' is not set.
import PlanCard from './PlanCard';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
import { useResponsiveWindowSize } from '../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
import { selectMessageByLocale } from '../../Utils/i18n/MessageByLocale';
import uniq from 'lodash/uniq';
// @ts-expect-error - TS6142 - Module './CancelReasonDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/CancelReasonDialog.tsx', but '--jsx' is not set.
import CancelReasonDialog from './CancelReasonDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/TwoStatesButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TwoStatesButton.tsx', but '--jsx' is not set.
import TwoStatesButton from '../../UI/TwoStatesButton';
// @ts-expect-error - TS6142 - Module '../../UI/HotMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HotMessage/index.tsx', but '--jsx' is not set.
import HotMessage from '../../UI/HotMessage';

const styles = {
  descriptionText: {
    marginLeft: 16,
    marginRight: 16,
  },
  bulletIcon: { width: 20, height: 20, marginRight: 10 },
  bulletText: { flex: 1 },
  diamondIcon: {
    width: 90,
    height: 90,
    flexShrink: 0,
    objectFit: 'contain',
  },
  scrollablePlanCardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    justifyContent: 'center',
  },
  planCardsContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    flex: 1,
    gap: 8,
    alignItems: 'center',
    overflowY: 'auto',
  },
  planCardsMobileContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    flex: 1,
    gap: 8,
    alignItems: 'stretch',
    overflowY: 'auto',
  },
  planCardsLineContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 8,
    overflowY: 'auto',
  },
} as const;

const cancelConfirmationTexts = {
  title: t`Cancel your subscription?`,
  message: t`By canceling your subscription, you will lose all your premium features at the end of the period you already paid for. Continue?`,
  confirmButtonLabel: t`Continue`,
  dismissButtonLabel: t`Keep subscription`,
  maxWidth: 'sm',
} as const;
const cancelImmediatelyConfirmationTexts = {
  title: t`Cancel your subscription?`,
  message: t`By canceling your subscription you will lose all your premium features IMMEDIATELY. Continue?`,
  confirmButtonLabel: t`Cancel my subscription now`,
  dismissButtonLabel: t`Keep subscription`,
  maxWidth: 'sm',
} as const;
const seamlesslyChangeConfirmationTexts = {
  title: t`Update your subscription`,
  message: t`Are you sure you want to change your plan? Your next payment will be pro-rated.`,
  confirmButtonLabel: t`Update my subscription`,
  dismissButtonLabel: t`Go back`,
  maxWidth: 'sm',
} as const;
const cancelAndChangeConfirmationTexts = {
  title: t`Update your subscription`,
  message: t`To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate but your payment will NOT be pro-rated (you will have to pay as for a new subscription).`,
  confirmButtonLabel: t`Cancel my subscription`,
  dismissButtonLabel: t`Go back`,
  maxWidth: 'sm',
} as const;
const cancelAndChangeWithValidRedeemedCodeConfirmationTexts = {
  title: t`Update your subscription`,
  message: t`To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate. You will also lose your redeemed code.`,
  confirmButtonLabel: t`Update my subscription`,
  dismissButtonLabel: t`Go back`,
  maxWidth: 'sm',
} as const;

const getSubscriptionPricingSystemPeriod = (
  subscription?: Subscription | null,
  subscriptionPlansWithPricingSystems?: SubscriptionPlanWithPricingSystems[] | null,
): null | 'year' | 'month' => {
  if (!subscription || !subscriptionPlansWithPricingSystems) return null;
  const allPricingSystems = subscriptionPlansWithPricingSystems
    .map(
      subscriptionPlanWithPricingSystems =>
        subscriptionPlanWithPricingSystems.pricingSystems
    )
    .flat();
  const subscriptionPricingSystem = allPricingSystems.find(
    pricingSystem => pricingSystem.id === subscription.pricingSystemId
  );
  if (
    !subscriptionPricingSystem ||
    // TODO: Add support for weekly subscriptions when needed.
    subscriptionPricingSystem.period === 'week'
  ) {
    return null;
  }
  return subscriptionPricingSystem.period;
};

const getMaximumYearlyDiscountOverPlans = (
  {
    subscriptionPlansWithPricingSystems,
  }: {
    subscriptionPlansWithPricingSystems: Array<SubscriptionPlanWithPricingSystems> | null | undefined
  },
): number => {
  if (!subscriptionPlansWithPricingSystems) return 0;
  let maximumDiscount = 0;
  subscriptionPlansWithPricingSystems.forEach(
    subscriptionPlanWithPricingSystems => {
      if (subscriptionPlanWithPricingSystems.isLegacy) return;
      const { pricingSystems } = subscriptionPlanWithPricingSystems;
      const monthlyPricingSystem = pricingSystems.find(
        pricingSystem => pricingSystem.period === 'month'
      );
      const yearlyPricingSystem = pricingSystems.find(
        pricingSystem => pricingSystem.period === 'year'
      );
      if (!monthlyPricingSystem || !yearlyPricingSystem) return;
      const discount =
        100 -
        (yearlyPricingSystem.amountInCents /
          (monthlyPricingSystem.amountInCents * 12)) *
          100;
      if (discount > maximumDiscount) {
        maximumDiscount = discount;
      }
    }
  );
  return maximumDiscount;
};

const getPlanSpecificRequirements = (
  i18n: I18nType,
  subscriptionPlansWithPricingSystems?: Array<SubscriptionPlanWithPricingSystems> | null,
): Array<string> => {
  const planSpecificRequirements = subscriptionPlansWithPricingSystems
    ? uniq(
        subscriptionPlansWithPricingSystems
          .map(subscriptionPlanWithPricingSystems => {
            if (!subscriptionPlanWithPricingSystems.specificRequirementByLocale)
              return null;
            return selectMessageByLocale(
              i18n,
              subscriptionPlanWithPricingSystems.specificRequirementByLocale
            );
          })
          .filter(Boolean)
      )
    : [];

  return planSpecificRequirements;
};

type Props = {
  open: boolean,
  onClose: any,
  analyticsMetadata: SubscriptionAnalyticsMetadata,
  subscriptionPlansWithPricingSystems: SubscriptionPlanWithPricingSystems[] | null | undefined,
  userLegacySubscriptionPlanWithPricingSystem: SubscriptionPlanWithPricingSystems | null | undefined,
  filter: SubscriptionType | null | undefined
};

export default function SubscriptionDialog({
  open,
  onClose,
  analyticsMetadata,
  subscriptionPlansWithPricingSystems,
  userLegacySubscriptionPlanWithPricingSystem,
  filter,
}: Props) {
  const [isChangingSubscription, setIsChangingSubscription] = React.useState(
    false
  );
  const [
    educationPlanSeatsCount,
    setEducationPlanSeatsCount,
  ] = React.useState<number>(20);
  const [
    subscriptionPendingDialogOpen,
    setSubscriptionPendingDialogOpen,
  ] = React.useState(false);
  const [redeemCodeDialogOpen, setRedeemCodeDialogOpen] = React.useState(false);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const [period, setPeriod] = React.useState<'year' | 'month'>(getSubscriptionPricingSystemPeriod(
    authenticatedUser.subscription,
    subscriptionPlansWithPricingSystems
  ) || 'year');

// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  const [cancelReasonDialogOpen, setCancelReasonDialogOpen] = React.useState(
    false
  );

  React.useEffect(
    () => {
      if (open) {
        sendSubscriptionDialogShown(analyticsMetadata);
      }
    },
    [open, analyticsMetadata]
  );

  const buyUpdateOrCancelPlan = async (
    i18n: I18nType,
    subscriptionPlanPricingSystem: SubscriptionPlanPricingSystem | null
  ) => {
    const { getAuthorizationHeader, subscription, profile } = authenticatedUser;
    if (!profile || !subscription) return;
    if (subscriptionPlanPricingSystem) {
      sendChoosePlanClicked({
        planId: subscriptionPlanPricingSystem.planId,
        pricingSystemId: subscriptionPlanPricingSystem.id,
      });
    }
    // Subscribing from an account without a subscription
    if (!subscription.planId && subscriptionPlanPricingSystem) {
      setSubscriptionPendingDialogOpen(true);
      const isEducationPlan =
        subscriptionPlanPricingSystem &&
        subscriptionPlanPricingSystem.planId === 'gdevelop_education';
      const quantity = isEducationPlan ? educationPlanSeatsCount : undefined;
      Window.openExternalURL(
        getRedirectToCheckoutUrl({
          pricingSystemId: subscriptionPlanPricingSystem.id,
          userId: profile.id,
          userEmail: profile.email,
          quantity,
        })
      );
      return;
    }

    if (!subscriptionPlanPricingSystem) {
      // Cancelling the existing subscription.
      const answer = await showConfirmation(
        canCancelAtEndOfPeriod(subscription)
          ? cancelConfirmationTexts
          : cancelImmediatelyConfirmationTexts
      );
      if (!answer) return;

      setCancelReasonDialogOpen(true);
      return;
    }

    const { planId } = subscriptionPlanPricingSystem;
    const needToCancelSubscription = !canSeamlesslyChangeSubscription(
      subscription,
      planId
    );
    const hasValidRedeemedSubscription =
      !!subscription.redemptionCodeValidUntil &&
      subscription.redemptionCodeValidUntil > Date.now();
    const hasExpiredRedeemedSubscription =
      !!subscription.redemptionCodeValidUntil &&
      subscription.redemptionCodeValidUntil < Date.now();
    const shouldSkipAlert = hasExpiredRedeemedSubscription; // we don't show an alert if the redeemed code is expired

    // Changing the existing subscription.
    const confirmDialogTexts =
      !needToCancelSubscription || hasExpiredRedeemedSubscription
        ? seamlesslyChangeConfirmationTexts
        : hasValidRedeemedSubscription
        ? cancelAndChangeWithValidRedeemedCodeConfirmationTexts
        : cancelAndChangeConfirmationTexts;

    if (!shouldSkipAlert) {
      const answer = await showConfirmation(confirmDialogTexts);
      if (!answer) return;
    }

    if (!needToCancelSubscription) {
      // Changing the existing subscription without asking for payment details again.
      // TODO: When possible, handle cases when a subscription can be updated seamlessly.
    } else {
      // Changing the existing subscription by cancelling first.
      setIsChangingSubscription(true);
      await sendCancelSubscriptionToChange({
        planId: subscriptionPlanPricingSystem.planId,
        pricingSystemId: subscriptionPlanPricingSystem.id,
      });
      try {
        await changeUserSubscription(
          getAuthorizationHeader,
          profile.id,
          {
            planId: null,
          },
          {
            cancelImmediately: true,
            cancelReasons: {
              'changing-subscription': true,
            },
          }
        );
        await authenticatedUser.onRefreshSubscription();
      } catch (rawError: any) {
        showErrorBox({
          message: i18n._(
            t`Your subscription could not be cancelled. Please try again later!`
          ),
          rawError,
          errorId: 'subscription-update-error',
        });
      } finally {
        setIsChangingSubscription(false);
      }

      // Then redirect as if a new subscription is being chosen.
      setSubscriptionPendingDialogOpen(true);
      Window.openExternalURL(
        getRedirectToCheckoutUrl({
          pricingSystemId: subscriptionPlanPricingSystem.id,
          userId: profile.id,
          userEmail: profile.email,
        })
      );
    }
  };

  const isLoading =
    !authenticatedUser.subscription ||
    !authenticatedUser.profile ||
    isChangingSubscription;

  const isPlanValid = hasValidSubscriptionPlan(authenticatedUser.subscription);

  const willCancelAtPeriodEnd =
    !!authenticatedUser.subscription &&
    !!authenticatedUser.subscription.cancelAtPeriodEnd;
  const userPlanId = authenticatedUser.subscription
    ? authenticatedUser.subscription.planId
    : null;
  const userPricingSystemId = authenticatedUser.subscription
    ? authenticatedUser.subscription.pricingSystemId
    : null;

  const { windowSize, isMobile } = useResponsiveWindowSize();

  const displayedSubscriptionPlanWithPricingSystems = subscriptionPlansWithPricingSystems
    ? [
        userLegacySubscriptionPlanWithPricingSystem,
        ...subscriptionPlansWithPricingSystems,
      ]
        .filter(Boolean)
        .filter(plan => {
          if (filter === 'individual') {
            return ['free', 'gdevelop_silver', 'gdevelop_gold'].includes(
              plan.id
            );
          }
          if (filter === 'team') {
            return ['gdevelop_startup', 'gdevelop_enterprise'].includes(
              plan.id
            );
          }
          if (filter === 'education') {
            return ['gdevelop_education'].includes(plan.id);
          }

          return plan.id !== 'gdevelop_education';
        })
    : null;

  const dialogMaxWidth =
    !displayedSubscriptionPlanWithPricingSystems ||
    displayedSubscriptionPlanWithPricingSystems.length === 1
      ? 'md'
      : displayedSubscriptionPlanWithPricingSystems.length < 4
      ? 'lg'
      : displayedSubscriptionPlanWithPricingSystems.length < 5
      ? 'xl'
      : false;
  const maximumDiscount = getMaximumYearlyDiscountOverPlans({
    subscriptionPlansWithPricingSystems,
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Dialog
            title={null}
            fullHeight
            maxWidth={dialogMaxWidth}
            actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Close</Trans>}
                key="close"
                primary={false}
                onClick={onClose}
              />,
            ]}
            secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<RedemptionCodeIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Redeem a code</Trans>}
                key="redeem-code"
                disabled={!authenticatedUser.authenticated || isLoading}
                primary={false}
                onClick={() => setRedeemCodeDialogOpen(true)}
              />,
            ]}
            open={open}
            fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Line justifyContent="space-between" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>Subscription plans</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TwoStatesButton
                    value={period}
                    leftButton={{
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label: <Trans>Monthly</Trans>,
                      value: 'month',
                    }}
                    rightButton={{
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label: <Trans>Yearly</Trans>,
                      value: 'year',
                    }}
                    // $FlowIgnore
                    onChange={setPeriod}
                  />
                </Line>
                {period !== 'year' && maximumDiscount > 0 && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <HotMessage
                    title={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Up to {maximumDiscount.toFixed(0)}% discount
                      </Trans>
                    }
                    message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Get a yearly subscription and enjoy discounts up to
                        {maximumDiscount.toFixed(0)}%!
                      </Trans>
                    }
                    onClickRightButton={() => setPeriod('year')}
                    rightButtonLabel={
                      isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>Check out</Trans>
                      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <Trans>See yearly subs</Trans>
                      )
                    }
                  />
                )}
              </>
            }
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
              {willCancelAtPeriodEnd && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Your subscription is being cancelled: you will lose the
                    benefits at the end of the period you already paid for.
                  </Trans>
                </AlertMessage>
              )}
              {displayedSubscriptionPlanWithPricingSystems ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div style={styles.scrollablePlanCardsContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <div
                    style={
                      windowSize === 'large' || windowSize === 'xlarge'
                        ? styles.planCardsLineContainer
                        : isMobile
                        ? styles.planCardsMobileContainer
                        : styles.planCardsContainer
                    }
                  >
                    {displayedSubscriptionPlanWithPricingSystems.map(
                      subscriptionPlanWithPricingSystems => {
                        const isFreePlan =
                          subscriptionPlanWithPricingSystems.id === 'free';
                        const isUserCurrentOrLegacyPlan =
                          userPlanId === subscriptionPlanWithPricingSystems.id;
                        const pricingSystem = isFreePlan
                          ? null
                          : subscriptionPlanWithPricingSystems.pricingSystems.find(
                              _pricingSystem => _pricingSystem.period === period
                            );
                        let actions: React.ReactNode = null;
                        if (isFreePlan || !pricingSystem) {
                          // If no plan (free usage), do not display button.
                        } else if (
                          subscriptionPlanWithPricingSystems.id ===
                          'gdevelop_education'
                        ) {
                          if (!isUserCurrentOrLegacyPlan) {
                            const yearlyPlanPrice = subscriptionPlanWithPricingSystems.pricingSystems.find(
                              price => price.period === 'year'
                            );
                            const monthlyPlanPrice = subscriptionPlanWithPricingSystems.pricingSystems.find(
                              price => price.period === 'month'
                            );
                            if (yearlyPlanPrice && monthlyPlanPrice) {
                              actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <ColumnStackLayout
                                  key="options"
                                  expand
                                  noMargin
                                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <SemiControlledTextField
                                    value={educationPlanSeatsCount.toString()}
                                    floatingLabelFixed
                                    fullWidth
                                    floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <Trans>Number of seats</Trans>
                                    }
                                    commitOnBlur
                                    type="number"
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                                    onChange={value => {
                                      const newValue = parseInt(value);
                                      setEducationPlanSeatsCount(
                                        Math.min(
                                          EDUCATION_PLAN_MAX_SEATS,
                                          Math.max(
                                            Number.isNaN(newValue)
                                              ? EDUCATION_PLAN_MIN_SEATS
                                              : newValue,
                                            EDUCATION_PLAN_MIN_SEATS
                                          )
                                        )
                                      );
                                    }}
                                    min={EDUCATION_PLAN_MIN_SEATS}
                                    max={EDUCATION_PLAN_MAX_SEATS}
                                    step={1}
                                    helperMarkdownText={i18n._(
                                      t`As a teacher, you will use one seat in the plan so make sure to include yourself!`
                                    )}
                                  />
                                </ColumnStackLayout>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <RaisedButton
                                  primary
                                  key="upgrade"
                                  disabled={isLoading}
                                  fullWidth
                                  label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                    <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                      <Trans>Choose this plan</Trans>
                                    </LeftLoader>
                                  }
                                  onClick={() =>
                                    buyUpdateOrCancelPlan(
                                      i18n,
                                      period === 'year'
                                        ? yearlyPlanPrice
                                        : monthlyPlanPrice
                                    )
                                  }
                                />,
                              ];
                            }
                          } else {
                            actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <Text key="contact">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Trans>Contact us for more information.</Trans>
                              </Text>,
                            ];
                          }
                        } else if (isUserCurrentOrLegacyPlan && isPlanValid) {
                          const isUserCurrentPricingSystem = pricingSystem
                            ? pricingSystem.id === userPricingSystemId
                            : false;
                          if (willCancelAtPeriodEnd) {
                            actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <FlatButton
                                key="cancel"
                                disabled
                                fullWidth
                                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Trans>
                                      Already cancelled - will expire in the
                                      future
                                    </Trans>
                                  </LeftLoader>
                                }
                                onClick={() => {}}
                              />,
                            ];
                          } else if (isUserCurrentPricingSystem) {
                            actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <FlatButton
                                key="cancel"
                                disabled={isLoading}
                                fullWidth
                                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Trans>Cancel your subscription</Trans>
                                  </LeftLoader>
                                }
                                onClick={() =>
                                  buyUpdateOrCancelPlan(i18n, null)
                                }
                              />,
                            ];
                          } else {
                            actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <RaisedButton
                                key="switch"
                                disabled={isLoading}
                                fullWidth
                                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <LeftLoader isLoading={isLoading}>
                                    {period === 'year' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <Trans>Switch to yearly pricing</Trans>
                                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                      <Trans>Switch to monthly pricing</Trans>
                                    )}
                                  </LeftLoader>
                                }
                                onClick={() =>
                                  buyUpdateOrCancelPlan(i18n, pricingSystem)
                                }
                              />,
                            ];
                          }
                        } else {
                          const pricingSystem = subscriptionPlanWithPricingSystems.pricingSystems.find(
                            _pricingSystem => _pricingSystem.period === period
                          );
                          if (pricingSystem) {
                            actions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                              <RaisedButton
                                primary
                                key="upgrade"
                                disabled={isLoading}
                                fullWidth
                                label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Trans>Choose this plan</Trans>
                                  </LeftLoader>
                                }
                                onClick={() =>
                                  buyUpdateOrCancelPlan(i18n, pricingSystem)
                                }
                              />,
                            ];
                          }
                        }

                        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <PlanCard
                            key={
                              subscriptionPlanWithPricingSystems.id || 'free'
                            }
                            subscriptionPlanWithPricingSystems={
                              subscriptionPlanWithPricingSystems
                            }
                            periodToDisplay={period}
                            actions={actions}
                            isPending={isLoading}
                            isHighlighted={isUserCurrentOrLegacyPlan} // highlight the plan even if it's expired.
                            background="medium"
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PlaceholderLoader />
              )}
              {getPlanSpecificRequirements(
                i18n,
                displayedSubscriptionPlanWithPricingSystems
              ).map(planSpecificRequirements => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AlertMessage
                  kind="info"
                  key={planSpecificRequirements.substring(0, 25)}
                >
                  {planSpecificRequirements}
                </AlertMessage>
              ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  No ties, cancel your subscription anytime. Payments done using
                  Stripe.com and PayPal secure infrastructure.
                </Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Compare all the advantages of the different plans in this{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Link
                      href="https://gdevelop.io/pricing#feature-comparison"
                      onClick={() =>
                        Window.openExternalURL(
                          'https://gdevelop.io/pricing#feature-comparison'
                        )
                      }
                    >
                      big feature comparison table
                    </Link>
                    .
                  </Trans>
                </div>
              </EmptyMessage>
            </ColumnStackLayout>
          </Dialog>
          {!authenticatedUser.authenticated &&
            authenticatedUser.loginState !== 'loggingIn' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Dialog
                open
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                title={<Trans>Create a GDevelop account to continue</Trans>}
                maxWidth="sm"
                cannotBeDismissed
                secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <FlatButton
                    key="later"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Maybe later</Trans>}
                    onClick={onClose}
                  />,
                ]}
                actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <FlatButton
                    key="login"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Login</Trans>}
                    onClick={authenticatedUser.onOpenLoginDialog}
                  />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <DialogPrimaryButton
                    key="create-account"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Create my account</Trans>}
                    primary
                    onClick={authenticatedUser.onOpenCreateAccountDialog}
                  />,
                ]}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Create an account to get started with GDevelop and access to
                    cloud projects, cloud builds, game analytics, leaderboards
                    and more.
                  </Trans>
                </Text>
              </Dialog>
            )}
          {subscriptionPendingDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SubscriptionPendingDialog
              authenticatedUser={authenticatedUser}
              onClose={() => {
                setSubscriptionPendingDialogOpen(false);
                authenticatedUser.onRefreshSubscription();
              }}
            />
          )}
          {redeemCodeDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RedeemCodeDialog
              authenticatedUser={authenticatedUser}
// @ts-expect-error - TS7006 - Parameter 'hasJustRedeemedCode' implicitly has an 'any' type.
              onClose={async hasJustRedeemedCode => {
                setRedeemCodeDialogOpen(false);

                if (hasJustRedeemedCode) {
                  try {
                    setIsChangingSubscription(true);
                    await authenticatedUser.onRefreshSubscription();
                  } finally {
                    setIsChangingSubscription(false);
                    setSubscriptionPendingDialogOpen(true);
                  }
                }
              }}
            />
          )}
          {cancelReasonDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <CancelReasonDialog
              onClose={() => {
                setCancelReasonDialogOpen(false);
              }}
              onCloseAfterSuccess={() => {
                setCancelReasonDialogOpen(false);
                onClose();
              }}
            />
          )}
        </>
      )}
    </I18n>
  );
}
