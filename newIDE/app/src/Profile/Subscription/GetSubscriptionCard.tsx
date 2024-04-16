import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';

import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
import { SubscriptionDialogDisplayReason } from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module './SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionContext } from './SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Credits/Icons/Coin'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/Coin.js' implicitly has an 'any' type.
import Coin from '../../Credits/Icons/Coin';

const styles = {
  subscriptionContainer: {
    display: 'flex',
    borderRadius: 10,
  },
  diamondIcon: {
    width: 50,
    height: 50,
  },
  coinIcon: {
    width: 12,
    height: 12,
    // Prevent cumulative layout shift by enforcing the ratio.
    aspectRatio: '1',
  },
} as const;

type Props = {
  children: React.ReactNode,
  subscriptionDialogOpeningReason: SubscriptionDialogDisplayReason,
  label?: React.ReactNode,
  makeButtonRaised?: boolean,
  hideButton?: boolean,
  payWithCreditsOptions?: {
    label: React.ReactNode,
    onPayWithCredits: () => void
  }
};

const GetSubscriptionCard = ({
  children,
  subscriptionDialogOpeningReason,
  label,
  makeButtonRaised,
  hideButton,
  payWithCreditsOptions,
}: Props) => {
  const { openSubscriptionDialog } = React.useContext(
    SubscriptionSuggestionContext
  );
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const subscriptionContainerStyle = {
    ...styles.subscriptionContainer,
    border: `1px solid ${gdevelopTheme.palette.secondary}`,
  } as const;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <div style={subscriptionContainerStyle}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <img src="res/diamond.svg" style={styles.diamondIcon} alt="diamond" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ResponsiveLineStackLayout
            alignItems="center"
            noColumnMargin
            noMargin
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin expand>
              {children}
            </Column>
            {payWithCreditsOptions && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                leftIcon={<Coin style={styles.coinIcon} />}
                label={payWithCreditsOptions.label}
                primary
                onClick={payWithCreditsOptions.onPayWithCredits}
              />
            )}
            {!hideButton &&
              (!makeButtonRaised ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Link
                  href="#"
                  onClick={() => {
                    openSubscriptionDialog({
                      analyticsMetadata: {
                        reason: subscriptionDialogOpeningReason,
                      },
                    });
                  }}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    {label || <Trans>Upgrade</Trans>}
                  </Text>
                </Link>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={label || <Trans>Upgrade</Trans>}
                  primary
                  onClick={() => {
                    openSubscriptionDialog({
                      analyticsMetadata: {
                        reason: subscriptionDialogOpeningReason,
                      },
                    });
                  }}
                />
              ))}
          </ResponsiveLineStackLayout>
        </Column>
      </Line>
    </div>
  );
};

export default GetSubscriptionCard;
