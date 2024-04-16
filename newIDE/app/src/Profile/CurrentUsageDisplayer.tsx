// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import {
  canUpgradeSubscription,
  hasValidSubscriptionPlan,
  Quota,
  Subscription,
  UsagePrice,
} from '../Utils/GDevelopServices/Usage';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module './Subscription/GetSubscriptionCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/GetSubscriptionCard.tsx', but '--jsx' is not set.
import GetSubscriptionCard from './Subscription/GetSubscriptionCard';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../AssetStore/CreditsPackages/CreditsPackageStoreContext';
import AuthenticatedUserContext from './AuthenticatedUserContext';

const styles = {
  subscriptionContainer: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
  },
  diamondIcon: {
    width: 50,
    height: 50,
    // Prevent cumulative layout shift by enforcing the ratio.
    aspectRatio: '1',
  },
} as const;

type Props = {
  subscription: Subscription | null | undefined,
  quota: Quota | null | undefined,
  usagePrice: UsagePrice | null | undefined,
  onChangeSubscription: () => void,
  onStartBuildWithCredits: () => void,
  hidePurchaseWithCredits?: boolean
};

const CurrentUsageDisplayer = ({
  subscription,
  quota,
  usagePrice,
  onChangeSubscription,
  onStartBuildWithCredits,
  hidePurchaseWithCredits,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { openCreditsPackageDialog, openCreditsUsageDialog } = React.useContext(
    CreditsPackageStoreContext
  );
  const { profile, limits } = React.useContext(AuthenticatedUserContext);
  const usageCreditPrice = usagePrice ? usagePrice.priceInCredits : 0;

  const onPurchaseBuildWithCredits = React.useCallback(
    () => {
      if (!profile || !limits || !usageCreditPrice) {
        return;
      }

      const currentCreditsAmount = limits.credits.userBalance.amount;
      if (currentCreditsAmount < usageCreditPrice) {
        openCreditsPackageDialog({
          missingCredits: usageCreditPrice - currentCreditsAmount,
        });
        return;
      }

      openCreditsUsageDialog({
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title: <Trans>Start build with credits</Trans>,
        message: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            You are about to use {usageCreditPrice} credits to start this build.
            Continue?
          </Trans>
        ),
        onConfirm: async () => {
          // We do not await for the build to start, we assume
          // that the ExportLauncher will handle the error if the build fails.
          onStartBuildWithCredits();
        },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        successMessage: <Trans>Build started!</Trans>,
        closeAutomaticallyAfterSuccess: true,
      });
    },
    [
      profile,
      limits,
      usageCreditPrice,
      openCreditsUsageDialog,
      onStartBuildWithCredits,
      openCreditsPackageDialog,
    ]
  );

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (!quota || !subscription || !usagePrice) return <PlaceholderLoader />;

  const isFeatureLocked = quota.max === 0;
  const hasSubscription = hasValidSubscriptionPlan(subscription);
  const remainingBuilds = Math.max(quota.max - quota.current, 0);
  const usageRatio = `${quota.current}/${quota.max}`;
  const remainingMultipleMessage =
    quota.period === '30days' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        You have <b>{remainingBuilds}</b> builds remaining — you have used
        {usageRatio} in the past 30 days.
      </Trans>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        You have <b>{remainingBuilds}</b> builds remaining — you have used
        {usageRatio} in the past 24h.
      </Trans>
    );
  const remainingSingleMessage =
    quota.period === '30days' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        You have <b>{remainingBuilds}</b> build remaining — you have used
        {usageRatio} in the past 30 days.
      </Trans>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Trans>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        You have <b>{remainingBuilds}</b> build remaining — you have used
        {usageRatio} in the past 24h.
      </Trans>
    );

  const cannotUpgradeSubscription = !canUpgradeSubscription(subscription);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {hasSubscription ? (
        !quota.limitReached ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <div
            style={{
              ...styles.subscriptionContainer,
              border: `1px solid ${gdevelopTheme.palette.secondary}`,
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <img
              src="res/diamond.svg"
              style={styles.diamondIcon}
              alt="diamond"
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
                  {remainingBuilds === 1
                    ? remainingSingleMessage
                    : remainingMultipleMessage}
                </Text>
              </Column>
            </Line>
          </div>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <GetSubscriptionCard
            subscriptionDialogOpeningReason={
              !isFeatureLocked ? 'Build limit reached' : 'Unlock build type'
            }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Upgrade your subscription</Trans>}
            makeButtonRaised
            payWithCreditsOptions={
              hidePurchaseWithCredits
                ? undefined
                : {
                    label: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Purchase with {usageCreditPrice} credits</Trans>
                    ),
                    onPayWithCredits: onPurchaseBuildWithCredits,
                  }
            }
            hideButton={cannotUpgradeSubscription}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
              {!isFeatureLocked ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>{remainingMultipleMessage}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
                    {cannotUpgradeSubscription ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Use GDevelop credits to start an export.</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Use GDevelop credits or upgrade your subscription to
                        increase the limits.
                      </Trans>
                    )}
                  </Text>
                </Column>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      Upgrade your GDevelop subscription to unlock this
                      packaging.
                    </Trans>
                  </Text>
                </Column>
              )}
            </Line>
          </GetSubscriptionCard>
        )
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <GetSubscriptionCard
          subscriptionDialogOpeningReason={
            !isFeatureLocked ? 'Build limit reached' : 'Unlock build type'
          }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Get a subscription</Trans>}
          makeButtonRaised={quota.limitReached}
          payWithCreditsOptions={
            !quota.limitReached || hidePurchaseWithCredits
              ? undefined
              : {
                  label: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Purchase with {usageCreditPrice} credits</Trans>
                  ),
                  onPayWithCredits: onPurchaseBuildWithCredits,
                }
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Line>
            {!isFeatureLocked ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
                  {remainingBuilds === 1
                    ? remainingSingleMessage
                    : remainingMultipleMessage}
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
                  {quota.limitReached ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Use GDevelop credits or get a subscription to increase the
                      limits.
                    </Trans>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      Get a GDevelop subscription to increase the limits.
                    </Trans>
                  )}
                </Text>
              </Column>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Get a subscription to unlock this packaging.</Trans>
                </Text>
              </Column>
            )}
          </Line>
        </GetSubscriptionCard>
      )}
    </ColumnStackLayout>
  );
};

export default CurrentUsageDisplayer;
