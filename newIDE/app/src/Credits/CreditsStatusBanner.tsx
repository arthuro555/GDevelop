// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/Coin'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/Coin.js' implicitly has an 'any' type.
import Coin from './Icons/Coin';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../AssetStore/CreditsPackages/CreditsPackageStoreContext';

const styles = {
  container: {
    borderRadius: 8,
    padding: 8,
  },
} as const;

type Props = {
  displayPurchaseAction: boolean
};

const CreditsStatusBanner = ({
  displayPurchaseAction,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { limits, onRefreshLimits } = React.useContext(
    AuthenticatedUserContext
  );
  const { openCreditsPackageDialog } = React.useContext(
    CreditsPackageStoreContext
  );

  // Ensure credits are refreshed when this component is shown.
  React.useEffect(
    () => {
      onRefreshLimits();
    },
    [onRefreshLimits]
  );

  if (!limits) {
    return null;
  }

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <div
        style={{
          ...styles.container,
          backgroundColor: gdevelopTheme.credits.backgroundColor,
          color: gdevelopTheme.credits.color,
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout
          alignItems="center"
          justifyContent="space-between"
          noMargin
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout alignItems="flex-end" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Coin />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Credits available: {limits.credits.userBalance.amount}
                </Trans>
              </Text>
            </LineStackLayout>
          </Column>
          {displayPurchaseAction && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Get credit packs</Trans>}
                onClick={() =>
                  openCreditsPackageDialog({ showCalloutTip: true })
                }
                style={{
                  color: gdevelopTheme.credits.color,
                  borderColor: gdevelopTheme.credits.color,
                }}
              />
            </Column>
          )}
        </ResponsiveLineStackLayout>
      </div>
    </>
  );
};

export default CreditsStatusBanner;
