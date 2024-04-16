import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
import {
  CreditsPackageListingData,
  getPurchaseCheckoutUrl,
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../Profile/CreateProfile' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateProfile.tsx', but '--jsx' is not set.
import CreateProfile from '../../Profile/CreateProfile';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { useInterval } from '../../Utils/UseInterval';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Mark'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Mark.js' implicitly has an 'any' type.
import Mark from '../../UI/CustomSvgIcons/Mark';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
import useAlertDialog from '../../UI/Alert/useAlertDialog';
import {
  shouldUseAppStoreProduct,
  purchaseAppStoreProduct,
} from '../../Utils/AppStorePurchases';
import { extractGDevelopApiErrorStatusAndCode } from '../../Utils/GDevelopServices/Errors';
// @ts-expect-error - TS6142 - Module '../PasswordPromptDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PasswordPromptDialog.tsx', but '--jsx' is not set.
import PasswordPromptDialog from '../PasswordPromptDialog';

type Props = {
  creditsPackageListingData: CreditsPackageListingData,
  onClose: () => void,
  onCloseWhenPurchaseSuccessful: () => void,
  simulateAppStoreProduct?: boolean
};

const CreditsPackagePurchaseDialog = ({
  creditsPackageListingData,
  onClose,
  onCloseWhenPurchaseSuccessful,
  simulateAppStoreProduct,
}: Props) => {
  const {
    profile,
    onOpenLoginDialog,
    onOpenCreateAccountDialog,
    limits,
    onRefreshLimits,
  } = React.useContext(AuthenticatedUserContext);
  const [initialCreditsAmount, setInitialCreditsAmount] = React.useState<any>(null);
  const [isPurchasing, setIsPurchasing] = React.useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = React.useState(false);
  const [
    displayPasswordPrompt,
    setDisplayPasswordPrompt,
  ] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>('');
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();

  const shouldUseOrSimulateAppStoreProduct =
    shouldUseAppStoreProduct() || simulateAppStoreProduct;

  const onStartPurchase = async () => {
    if (!profile) return;
    setDisplayPasswordPrompt(false);

    // Purchase with the App Store.
    if (shouldUseOrSimulateAppStoreProduct) {
      try {
        setIsPurchasing(true);
        await purchaseAppStoreProduct(
          creditsPackageListingData.appStoreProductId
        );
      } finally {
        setIsPurchasing(false);
      }
      return;
    }

    // Purchase with web.
    try {
      setIsPurchasing(true);
      const checkoutUrl = await getPurchaseCheckoutUrl({
        productId: creditsPackageListingData.id,
        priceName: creditsPackageListingData.prices[0].name,
        userId: profile.id,
        userEmail: profile.email,
        password,
      });
      Window.openExternalURL(checkoutUrl);
    } catch (error: any) {
      const extractedStatusAndCode = extractGDevelopApiErrorStatusAndCode(
        error
      );
      if (
        extractedStatusAndCode &&
        extractedStatusAndCode.status === 403 &&
        extractedStatusAndCode.code === 'auth/wrong-password'
      ) {
        await showAlert({
          title: t`Operation not allowed`,
          message: t`The password you entered is incorrect. Please try again.`,
        });
      } else {
        console.error('Unable to get the checkout URL', error);
        await showAlert({
          title: t`An error happened`,
          message: t`Unable to get the checkout URL. Please try again later.`,
        });
      }
      setIsPurchasing(false);
    } finally {
      setPassword('');
    }
  };

  const onWillPurchase = () => {
    // Password is required in dev environment only so that one cannot freely purchase credits.
    if (Window.isDev()) setDisplayPasswordPrompt(true);
    else onStartPurchase();
  };

  React.useEffect(
    () => {
      onWillPurchase();
    },
    // Launch the start process directly when the dialog is opened, to avoid an extra click.
    // eslint-disable-next-line
    []
  );

  useInterval(
    () => {
      onRefreshLimits();
    },
    isPurchasing ? 3900 : null
  );

  // Listen to the limits being loaded the first time (either when the dialog is opened, or when the user logs in)
  // In this case, save the user balance before the purchase.
  React.useEffect(
    () => {
      (async () => {
        if (limits && initialCreditsAmount === null) {
          setInitialCreditsAmount(limits.credits.userBalance.amount);
        }
      })();
    },
    [limits, initialCreditsAmount]
  );

  // If the limits change, check the user balance and close the dialog if the purchase was successful.
  React.useEffect(
    () => {
      if (initialCreditsAmount !== null && limits && isPurchasing) {
        const newCreditsAmount = limits.credits.userBalance.amount;
        if (newCreditsAmount > initialCreditsAmount) {
          setIsPurchasing(false);
          setPurchaseSuccessful(true);
        }
      }
    },
    [initialCreditsAmount, isPurchasing, purchaseSuccessful, limits]
  );

  const dialogContents = !profile
    ? {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        subtitle: <Trans>Log-in to purchase these credits</Trans>,
        content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <CreateProfile
            onOpenLoginDialog={onOpenLoginDialog}
            onOpenCreateAccountDialog={onOpenCreateAccountDialog}
            message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Credits will be linked to your user account. Log-in or sign-up
                to purchase them!
              </Trans>
            }
            justifyContent="center"
          />
        ),
      }
    : purchaseSuccessful
    ? {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        subtitle: <Trans>Your purchase has been processed!</Trans>,
        content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>You can now use them across the app!</Trans>
            </Text>
          </Line>
        ),
      }
    : isPurchasing
    ? {
        subtitle: shouldUseOrSimulateAppStoreProduct ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Complete your purchase with the app store.</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Complete your payment on the web browser</Trans>
        ),
        content: shouldUseOrSimulateAppStoreProduct ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CircularProgress size={40} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  The purchase will be linked to your account once done.
                </Trans>
              </Text>
            </ColumnStackLayout>
          </>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <CircularProgress size={20} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Waiting for the purchase confirmation...</Trans>
              </Text>
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Once you're done, come back to GDevelop and the credits will
                  be added to your account automatically.
                </Trans>
              </BackgroundText>
            </Line>
          </>
        ),
      }
    : !limits
    ? {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        subtitle: <Trans>Loading your profile...</Trans>,
        content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CircularProgress size={20} />
          </Line>
        ),
      }
    : {
        subtitle: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            {creditsPackageListingData.name} will be added to your account
            {profile.email}.
          </Trans>
        ),
        content: shouldUseOrSimulateAppStoreProduct ? null : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                A new secure window will open to complete the purchase.
              </Trans>
            </Text>
          </Line>
        ),
      };

  const allowPurchase =
    profile && !isPurchasing && !purchaseSuccessful && !!limits;
  const dialogActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={purchaseSuccessful ? <Trans>Close</Trans> : <Trans>Cancel</Trans>}
      onClick={() => {
        if (purchaseSuccessful) {
          onCloseWhenPurchaseSuccessful();
        }

        onClose();
      }}
    />,
    allowPurchase ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DialogPrimaryButton
        key="continue"
        primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Continue</Trans>}
        onClick={onWillPurchase}
      />
    ) : null,
  ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Dialog
        title={creditsPackageListingData.name}
        maxWidth="sm"
        open
        onRequestClose={onClose}
        actions={dialogActions}
        onApply={purchaseSuccessful ? onClose : onWillPurchase}
        cannotBeDismissed // Prevent the user from continuing by clicking outside.
        flexColumnBody
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <LineStackLayout justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          {purchaseSuccessful && <Mark />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="sub-title">{dialogContents.subtitle}</Text>
        </LineStackLayout>
        {dialogContents.content}
      </Dialog>
      {displayPasswordPrompt && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PasswordPromptDialog
          onApply={onStartPurchase}
          onClose={() => setDisplayPasswordPrompt(false)}
          passwordValue={password}
          setPasswordValue={setPassword}
        />
      )}
    </>
  );
};

export default CreditsPackagePurchaseDialog;
