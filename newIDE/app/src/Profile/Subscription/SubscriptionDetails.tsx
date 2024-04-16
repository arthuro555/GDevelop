// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
import {
  SubscriptionPlanWithPricingSystems,
  Subscription,
  hasMobileAppStoreSubscriptionPlan,
  hasSubscriptionBeenManuallyAdded,
  getSubscriptionPlanPricingSystem,
  canPriceBeFoundInGDevelopPrices,
} from '../../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../../UI/LeftLoader';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import {
  SubscriptionSuggestionContext,
  SubscriptionType,
// @ts-expect-error - TS6142 - Module './SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
} from './SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module '../../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
import Paper from '../../UI/Paper';
// @ts-expect-error - TS6142 - Module './PlanSmallCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/PlanSmallCard.tsx', but '--jsx' is not set.
import PlanSmallCard from './PlanSmallCard';
import { isNativeMobileApp } from '../../Utils/Platform';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/IndividualPlans'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/IndividualPlans.js' implicitly has an 'any' type.
import IndividualPlans from './Icons/IndividualPlans';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/TeamPlans'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/TeamPlans.js' implicitly has an 'any' type.
import TeamPlans from './Icons/TeamPlans';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/EducationPlans'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/Icons/EducationPlans.js' implicitly has an 'any' type.
import EducationPlans from './Icons/EducationPlans';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
import Window from '../../Utils/Window';

const styles = {
  diamondIcon: {
    width: 90,
    height: 90,
    flexShrink: 0,
    objectFit: 'contain',
  },
  paper: {
    paddingRight: 6,
    display: 'flex',
  },
  subscription: {
    display: 'flex',
    flex: 1,
    borderRadius: 8,
    padding: 16,
  },
} as const;

const subscriptionOptions: Partial<Record<SubscriptionType, {
  title: React.ReactNode,
  description: React.ReactNode,
  icon: React.ReactNode
}>> = {
  individual: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>For Individuals</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>Hobbyists and indie devs</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <IndividualPlans style={{ width: 115, height: 100 }} />,
  },
  team: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>For Teams</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>Companies, studios and agencies</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <TeamPlans style={{ width: 175, height: 100 }} />,
  },
  education: {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    title: <Trans>For Education</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    description: <Trans>Teachers, courses and universities</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    icon: <EducationPlans style={{ width: 110, height: 100 }} />,
  },
};

type Props = {
  subscription: Subscription | null | undefined,
  subscriptionPlansWithPricingSystems: SubscriptionPlanWithPricingSystems[],
  onManageSubscription: () => undefined | Promise<undefined>,
  isManageSubscriptionLoading: boolean,
  simulateNativeMobileApp?: boolean
};

/**
 * Here are the possible cases:
 * - Subscription null: loading. (The backend always return a subscription)
 * - Subscription with no plan: show a message to invite the user to subscribe.
 * - Subscription bought:
 *   - with Stripe, they can easily manage it only as well as upgrade/downgrade.
 *   - with Paypal, in order to upgrade/downgrade, the subscription need to be canceled first.
 * - Subscription with a redemption code:
 *  - If the code is still valid, show a message to indicate when it will expire
 *    and show a warning if trying to buy a new one as it will cancel the current one.
 *  - If the code is expired, show a message to invite the user to re-subscribe.
 *    We will need to cancel the current expired subscription, but don't show a warning.
 */
const SubscriptionDetails = ({
  subscription,
  subscriptionPlansWithPricingSystems,
  isManageSubscriptionLoading,
  onManageSubscription,
  simulateNativeMobileApp,
}: Props) => {
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const [
    userSubscriptionPlanWithPricingSystems,
    setUserSubscriptionPlanWithPricingSystems,
  ] = React.useState<SubscriptionPlanWithPricingSystems | null | undefined>(null);
  const [error, setError] = React.useState<React.ReactNode | null | undefined>(null);
  const [isLoadingUserPrice, setIsLoadingUserPrice] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      (async () => {
        setError(null);
        setIsLoadingUserPrice(true);
        try {
          if (!subscription) {
            setUserSubscriptionPlanWithPricingSystems(null);
            return;
          }

          const { planId, pricingSystemId } = subscription;
          if (!planId || !pricingSystemId) {
            setUserSubscriptionPlanWithPricingSystems(null);
            return;
          }

          const matchingSubscriptionPlanWithPrices = subscriptionPlansWithPricingSystems.find(
            plan => subscription.planId === plan.id
          );
          if (!matchingSubscriptionPlanWithPrices) {
            setError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Couldn't find a subscription matching your account. Please get
                in touch with us to fix this issue.
              </Trans>
            );
            setUserSubscriptionPlanWithPricingSystems(null);
            return;
          }

          const {
            pricingSystems,
            ...subscriptionPlan
          } = matchingSubscriptionPlanWithPrices;

          if (!canPriceBeFoundInGDevelopPrices(pricingSystemId)) {
            setUserSubscriptionPlanWithPricingSystems({
              ...subscriptionPlan,
              pricingSystems: [],
            });
            return;
          }

          let pricingSystem = pricingSystems.find(
            price => price.id === subscription.pricingSystemId
          );
          if (!pricingSystem) {
// @ts-expect-error - TS2322 - Type 'SubscriptionPlanPricingSystem | null | undefined' is not assignable to type 'SubscriptionPlanPricingSystem | undefined'.
            pricingSystem = await getSubscriptionPlanPricingSystem(
              pricingSystemId
            );
          }
          if (!pricingSystem) {
            setError(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Couldn't find a subscription price matching your account. Please
                get in touch with us to fix this issue.
              </Trans>
            );
            setUserSubscriptionPlanWithPricingSystems(null);
            return;
          }

          setUserSubscriptionPlanWithPricingSystems({
            ...subscriptionPlan,
            pricingSystems: [pricingSystem],
          });
        } finally {
          setIsLoadingUserPrice(false);
        }
      })();
    },
    [subscription, subscriptionPlansWithPricingSystems]
  );

  const redemptionCodeExpirationDate =
    subscription && subscription.redemptionCodeValidUntil;
  const isSubscriptionExpired =
    !!redemptionCodeExpirationDate && redemptionCodeExpirationDate < Date.now();
  const isOnOrSimulateMobileApp =
    isNativeMobileApp() || simulateNativeMobileApp;

  if (error) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <PlaceholderError>{error}</PlaceholderError>;
  }
  if (!subscription || isLoadingUserPrice) {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    return <PlaceholderLoader />;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Subscriptions</Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="body" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Publish to Android, iOS, unlock more cloud projects, leaderboards,
              collaboration features and more online services.{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Link
                href="https://gdevelop.io/pricing#feature-comparison"
                onClick={() =>
                  Window.openExternalURL(
                    'https://gdevelop.io/pricing#feature-comparison'
                  )
                }
              >
                Learn more
              </Link>
            </Trans>
          </Text>
        </Column>
      </Line>
      {userSubscriptionPlanWithPricingSystems &&
      userSubscriptionPlanWithPricingSystems.id &&
      !isSubscriptionExpired ? (
        isOnOrSimulateMobileApp ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Paper background="medium" variant="outlined" style={styles.paper}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout alignItems="center" expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <img
                    src="res/diamond.svg"
                    style={styles.diamondIcon}
                    alt="diamond"
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      You have unlocked full access to GDevelop to create
                      without limits!
                    </Trans>
                  </Text>
                </LineStackLayout>
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Manage subscription</Trans>}
                  primary
                  onClick={() => {
                    if (hasMobileAppStoreSubscriptionPlan(subscription)) {
                      // Would open App Store subscriptions settings.
                    } else {
                      showAlert({
                        title: t`Subscription outside the app store`,
                        message: t`The subscription of this account comes from outside the app store. Connect with your account on gdevelop.io from your web-browser to manage it.`,
                      });
                    }
                  }}
                />
              </Column>
            </ResponsiveLineStackLayout>
          </Paper>
        ) : (
          // On web/desktop, displays the subscription as usual:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PlanSmallCard
              subscriptionPlanWithPricingSystems={
                userSubscriptionPlanWithPricingSystems
              }
              hidePrice={
                // A redemption code means the price does not really reflect what was paid, so we hide it.
                !!redemptionCodeExpirationDate ||
                hasMobileAppStoreSubscriptionPlan(subscription) ||
                !!subscription.benefitsFromEducationPlan
              }
              actions={
                subscription.benefitsFromEducationPlan
                  ? null
                  : [
                      !redemptionCodeExpirationDate &&
                      !hasMobileAppStoreSubscriptionPlan(subscription) &&
                      !hasSubscriptionBeenManuallyAdded(subscription) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <FlatButton
                          key="manage-payments"
                          label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <LeftLoader isLoading={isManageSubscriptionLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Trans>Manage payments</Trans>
                            </LeftLoader>
                          }
                          primary
                          onClick={onManageSubscription}
                          disabled={isManageSubscriptionLoading}
                        />
                      ) : null,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <RaisedButton
                        key="manage-subscription"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        label={<Trans>Manage subscription</Trans>}
                        primary
                        onClick={() =>
                          openSubscriptionDialog({
                            analyticsMetadata: { reason: 'Consult profile' },
                          })
                        }
                        disabled={isManageSubscriptionLoading}
                      />,
                    ].filter(Boolean)
              }
              isHighlighted
              background="medium"
            />
            {subscription.cancelAtPeriodEnd && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Your subscription is being cancelled: you will lose the
                  benefits at the end of the period you already paid for.
                </Trans>
              </AlertMessage>
            )}
            {!!redemptionCodeExpirationDate && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
                {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Paper background="dark" variant="outlined">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <LineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <img
                        src="res/diamond.svg"
                        style={styles.diamondIcon}
                        alt="diamond"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>
                            Thanks to the redemption code you've used, you have
                            this subscription enabled until{' '}
                            {i18n.date(subscription.redemptionCodeValidUntil)}.
                          </Trans>
                        </Text>
                      </Column>
                    </LineStackLayout>
                  </Paper>
                )}
              </I18n>
            )}
          </ColumnStackLayout>
        )
      ) : !isSubscriptionExpired ? (
        isOnOrSimulateMobileApp ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Paper background="medium" variant="outlined" style={styles.paper}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout alignItems="center" expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LineStackLayout alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <img
                    src="res/diamond.svg"
                    style={styles.diamondIcon}
                    alt="diamond"
                  />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Unlock full access to GDevelop to create without limits!
                    </Trans>
                  </Text>
                </LineStackLayout>
              </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Choose a subscription</Trans>}
                  primary
                  onClick={() =>
                    openSubscriptionDialog({
                      analyticsMetadata: { reason: 'Consult profile' },
                    })
                  }
                />
              </Column>
            </ResponsiveLineStackLayout>
          </Paper>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResponsiveLineStackLayout noColumnMargin>
            {Object.keys(subscriptionOptions).map(key => {
// @ts-expect-error - TS2339 - Property 'title' does not exist on type '{ title: ReactNode; description: ReactNode; icon: ReactNode; } | undefined'. | TS2339 - Property 'description' does not exist on type '{ title: ReactNode; description: ReactNode; icon: ReactNode; } | undefined'. | TS2339 - Property 'icon' does not exist on type '{ title: ReactNode; description: ReactNode; icon: ReactNode; } | undefined'.
              const { title, description, icon } = subscriptionOptions[key];
              return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <div
                  style={{
                    ...styles.subscription,
                    border: `1px solid ${gdevelopTheme.palette.secondary}`,
                  }}
                  key={key}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Column
                    expand
                    alignItems="center"
                    justifyContent="space-between"
                    noMargin
                    key={key}
                  >
                    {icon}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text size="sub-title" noMargin align="center">
                        {title}
                      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text
                        size="body-small"
                        noMargin
                        color="secondary"
                        align="center"
                      >
                        {description}
                      </Text>
                    </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <RaisedButton
                      primary
                      onClick={() =>
                        openSubscriptionDialog({
                          analyticsMetadata: { reason: 'Consult profile' },
                          filter: key,
                        })
                      }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      label={<Trans>See plans</Trans>}
                      fullWidth
                    />
                  </Column>
                </div>
              );
            })}
          </ResponsiveLineStackLayout>
        )
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Paper background="medium" variant="outlined" style={styles.paper}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout alignItems="center" expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <img
                  src="res/diamond.svg"
                  style={styles.diamondIcon}
                  alt="diamond"
                />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    Oh no! Your subscription from the redemption code has
                    expired. You can renew it by redeeming a new code or getting
                    a new subscription.
                  </Trans>
                </Text>
              </LineStackLayout>
            </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Choose a subscription</Trans>}
                primary
                onClick={() =>
                  openSubscriptionDialog({
                    analyticsMetadata: { reason: 'Consult profile' },
                  })
                }
              />
            </Column>
          </ResponsiveLineStackLayout>
        </Paper>
      )}
    </Column>
  );
};

export default SubscriptionDetails;
