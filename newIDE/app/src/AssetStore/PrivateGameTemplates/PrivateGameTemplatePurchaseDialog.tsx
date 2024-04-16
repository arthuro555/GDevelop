import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
import AuthenticatedUserContext from '../../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../../Profile/CreateProfile' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/CreateProfile.tsx', but '--jsx' is not set.
import CreateProfile from '../../Profile/CreateProfile';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { useInterval } from '../../Utils/UseInterval';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { getPurchaseCheckoutUrl } from '../../Utils/GDevelopServices/Shop';
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
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  usageType: string,
  onClose: () => void,
  simulateAppStoreProduct?: boolean
};

const PrivateGameTemplatePurchaseDialog = ({
  privateGameTemplateListingData,
  usageType,
  onClose,
  simulateAppStoreProduct,
}: Props) => {
  const {
    profile,
    onOpenLoginDialog,
    onOpenCreateAccountDialog,
    receivedGameTemplates,
    onPurchaseSuccessful,
    onRefreshGameTemplatePurchases,
    gameTemplatePurchases,
  } = React.useContext(AuthenticatedUserContext);
  const [isPurchasing, setIsPurchasing] = React.useState(false);
  const [
    isCheckingPurchasesAfterLogin,
    setIsCheckingPurchasesAfterLogin,
  ] = React.useState(!receivedGameTemplates);
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
          privateGameTemplateListingData.appStoreProductId
        );
      } finally {
        setIsPurchasing(false);
      }
      return;
    }

    const price = privateGameTemplateListingData.prices.find(
// @ts-expect-error - TS7006 - Parameter 'price' implicitly has an 'any' type.
      price => price.usageType === usageType
    );
    if (!price) {
      console.error('Unable to find the price for the usage type', usageType);
      await showAlert({
        title: t`An error happened`,
        message: t`Unable to find the price for this game template. Please try again later.`,
      });
      return;
    }

    // Purchase with web.
    try {
      setIsPurchasing(true);
      const checkoutUrl = getPurchaseCheckoutUrl({
        productId: privateGameTemplateListingData.id,
        priceName: price.name,
        userId: profile.id,
        userEmail: profile.email,
        ...(password ? { password } : undefined),
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
    // Password is required in dev environment only so that one cannot freely purchase game templates.
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

  // This effect will be triggered when the game template purchases change,
  // to check if the user has just bought the product.
  React.useEffect(
    () => {
      const checkIfPurchaseIsDone = async () => {
        if (
          isPurchasing &&
          gameTemplatePurchases &&
          gameTemplatePurchases.find(
            userPurchase =>
              userPurchase.productId === privateGameTemplateListingData.id
          )
        ) {
          // We found the purchase, the user has bought the game template.
          // We do not close the dialog yet, as we need to trigger a refresh of the products received.
          await onPurchaseSuccessful();
        }
      };
      checkIfPurchaseIsDone();
    },
    [
      isPurchasing,
      gameTemplatePurchases,
      privateGameTemplateListingData,
      onPurchaseSuccessful,
      onRefreshGameTemplatePurchases,
    ]
  );

  useInterval(
    () => {
      onRefreshGameTemplatePurchases();
    },
    isPurchasing ? 3900 : null
  );

  // Listen to the received game template, to know when a user has just logged in and the received game templates have been loaded.
  // In this case, start a timeout to remove the loader and give some time for the store to refresh.
  React.useEffect(
    () => {
// @ts-expect-error - TS7034 - Variable 'timeoutId' implicitly has type 'any' in some locations where its type cannot be determined.
      let timeoutId;
      (async () => {
        if (receivedGameTemplates) {
          timeoutId = setTimeout(
            () => setIsCheckingPurchasesAfterLogin(false),
            3000
          );
        }
      })();
      return () => {
// @ts-expect-error - TS7005 - Variable 'timeoutId' implicitly has an 'any' type.
        clearTimeout(timeoutId);
      };
    },
    [receivedGameTemplates]
  );

  // If the user has received this particular template, either:
  // - they just logged in, and already have it, so we close the dialog.
  // - they just bought it, we display the success message.
  React.useEffect(
    () => {
      if (receivedGameTemplates) {
        const receivedGameTemplate = receivedGameTemplates.find(
          gameTemplate => gameTemplate.id === privateGameTemplateListingData.id
        );
        if (receivedGameTemplate) {
          if (isPurchasing) {
            setIsPurchasing(false);
            setPurchaseSuccessful(true);
          } else if (!purchaseSuccessful) {
            onClose();
          }
        }
      }
    },
    [
      receivedGameTemplates,
      privateGameTemplateListingData,
      isPurchasing,
      onClose,
      isCheckingPurchasesAfterLogin,
      purchaseSuccessful,
    ]
  );

  const dialogContents = !profile
    ? {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        subtitle: <Trans>Log-in to purchase this item</Trans>,
        content: (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <CreateProfile
            onOpenLoginDialog={onOpenLoginDialog}
            onOpenCreateAccountDialog={onOpenCreateAccountDialog}
            message={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Game templates will be linked to your user account and available
                for all your projects. Log-in or sign-up to purchase this game
                template. (or restore your existing purchase).
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
              <Trans>
                You can now go back to the store to use your new game template.
              </Trans>
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
                  Once you're done, come back to GDevelop and the game template
                  will be added to your account automatically.
                </Trans>
              </BackgroundText>
            </Line>
          </>
        ),
      }
    : isCheckingPurchasesAfterLogin
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
            The game template {privateGameTemplateListingData.name} will be
            linked to your account {profile.email}.
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
    profile &&
    !isPurchasing &&
    !purchaseSuccessful &&
    !isCheckingPurchasesAfterLogin;
  const dialogActions = [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FlatButton
      key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      label={purchaseSuccessful ? <Trans>Close</Trans> : <Trans>Cancel</Trans>}
      onClick={onClose}
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>{privateGameTemplateListingData.name}</Trans>}
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

export default PrivateGameTemplatePurchaseDialog;
