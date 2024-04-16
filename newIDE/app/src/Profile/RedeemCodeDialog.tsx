// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import {I18n} from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { AuthenticatedUser } from './AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/LeftLoader' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LeftLoader.tsx', but '--jsx' is not set.
import LeftLoader from '../UI/LeftLoader';
import { redeemCode } from '../Utils/GDevelopServices/Usage';
import { extractGDevelopApiErrorStatusAndCode } from '../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Form' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Form.tsx', but '--jsx' is not set.
import Form from '../UI/Form';

type Props = {
  onClose: (hasJustRedeemedCode: boolean) => Promise<void>,
  authenticatedUser: AuthenticatedUser
};

export const getRedeemCodeErrorText = (error?: Error | null) => {
  if (!error) return undefined;

  const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(error);
  if (extractedStatusAndCode) {
    if (extractedStatusAndCode.status === 404) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          This code is not valid - verify you've entered it properly.
        </Trans>
      );
    }
    if (
      extractedStatusAndCode.code ===
      'redemption-code/cannot-be-redeemed-anymore'
    )
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          This code was valid but can't be redeemed anymore. If this is
          unexpected, contact us or the code provider.
        </Trans>
      );
    if (
      extractedStatusAndCode.code ===
      'user-redeemed-code/already-redeemed-by-user'
    )
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Trans>
          You already used this code - you can't reuse a code multiple times.
        </Trans>
      );
  }
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Trans>
      There was an unknown error when trying to apply the code. Double check the
      code, try again later or contact us if this persists.
    </Trans>
  );
};

export default function RedeemCodeDialog({
  onClose,
  authenticatedUser,
}: Props) {
  const [redemptionCode, setRedemptionCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null | undefined>(null);

  const onRedeemCode = async () => {
    setIsLoading(true);
    const { getAuthorizationHeader, profile } = authenticatedUser;

    try {
      if (!profile) throw new Error('User should be logged in');

      await redeemCode(
        getAuthorizationHeader,
        profile.id,
        redemptionCode.trim().toLowerCase()
      );

      // Redemption was successful, we close the dialog and let the parent know
      // that a redemption happened - so some update should be fetched.
      onClose(/*hasJustRedeemedCode=*/ true);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const canRedeem = !!redemptionCode && !isLoading;
  const { subscription } = authenticatedUser;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Redeem a code</Trans>}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              key="close"
              primary={false}
              disabled={isLoading}
              onClick={() => onClose(false)}
            />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LeftLoader isLoading={isLoading}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <DialogPrimaryButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Redeem</Trans>}
                disabled={!canRedeem}
                primary
                key="redeem"
                onClick={onRedeemCode}
              />
            </LeftLoader>,
          ]}
          cannotBeDismissed={isLoading}
          onRequestClose={() => onClose(false)}
          onApply={() => {
            if (canRedeem) onRedeemCode();
          }}
          maxWidth="sm"
          open
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Form onSubmit={onRedeemCode} name="redeemSubscriptionCoupon">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledTextField
                value={redemptionCode}
                onChange={setRedemptionCode}
                translatableHintText={t`Enter your code here`}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Redemption code</Trans>}
                floatingLabelFixed
                errorText={getRedeemCodeErrorText(error)}
                autoFocus="desktop"
              />
              {!subscription ||
              !subscription.planId ? null : !!subscription.redemptionCodeValidUntil ? ( // No subscription, do not show a warning.
                subscription.redemptionCodeValidUntil > Date.now() ? ( // Has valid subscription.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      You currently have a subscription, applied thanks to a
                      redemption code, valid until{' '}
                      {i18n.date(subscription.redemptionCodeValidUntil)}. If you
                      redeem another code, your existing subscription will be
                      canceled and not redeemable anymore!
                    </Trans>
                  </AlertMessage>
                ) : null // Has expired subscription, do not show a warning.
              ) : (
                // Has a subscription, but not applied thanks to a redemption code.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    You currently have a subscription. If you redeem a code, the
                    existing subscription will be cancelled and replaced by the
                    one given by the code.
                  </Trans>
                </AlertMessage>
              )}
            </ColumnStackLayout>
          </Form>
        </Dialog>
      )}
    </I18n>
  );
}
