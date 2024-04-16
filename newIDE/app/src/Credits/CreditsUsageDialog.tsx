// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module './CreditsStatusBanner' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/CreditsStatusBanner.tsx', but '--jsx' is not set.
import CreditsStatusBanner from './CreditsStatusBanner';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';

type Props = {
  onClose: () => void,
  title: React.ReactNode,
  message: React.ReactNode,
  onConfirm: () => Promise<void>,
  successMessage: React.ReactNode,
  closeAutomaticallyAfterSuccess?: boolean
};

const CreditsUsageDialog = ({
  onClose,
  title,
  message,
  onConfirm,
  successMessage,
  closeAutomaticallyAfterSuccess,
}: Props) => {
  const [isPurchasing, setIsPurchasing] = React.useState(false);
  const [isPurchaseSuccessful, setisPurchaseSuccessful] = React.useState(false);
// @ts-expect-error - TS2339 - Property 'showAlert' does not exist on type 'void'.
  const { showAlert } = useAlertDialog();
  const {
    onRefreshGameTemplatePurchases,
    onRefreshAssetPackPurchases,
    onPurchaseSuccessful,
    onRefreshLimits,
  } = React.useContext(AuthenticatedUserContext);

  const onPurchase = React.useCallback(
    async () => {
      setIsPurchasing(true);
      try {
        await onConfirm();
        // We assume that the purchase was successful, so we refresh the purchases and limits,
        // no need to wait for those to complete as they are not critical to the purchase.
        onRefreshGameTemplatePurchases();
        onRefreshAssetPackPurchases();
        onPurchaseSuccessful();
        onRefreshLimits();
        if (closeAutomaticallyAfterSuccess) onClose();

        // Show a success message to the user.
        setisPurchaseSuccessful(true);
      } catch (error: any) {
        console.error('An error happened while purchasing a product:', error);
        await showAlert({
          title: t`Could not purchase this product`,
          message: t`An error happened while purchasing this product. Verify your internet connection or try again later.`,
        });
      } finally {
        setIsPurchasing(false);
      }
    },
    [
      onConfirm,
      onRefreshGameTemplatePurchases,
      onRefreshAssetPackPurchases,
      onPurchaseSuccessful,
      onRefreshLimits,
      showAlert,
      closeAutomaticallyAfterSuccess,
      onClose,
    ]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={title}
          open
          maxWidth="sm"
          cannotBeDismissed // Prevent the user from continuing by clicking outside
          onRequestClose={onClose}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              onClick={onClose}
              disabled={isPurchasing}
            />,
            !isPurchaseSuccessful && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                key="confirm"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Purchase</Trans>}
                primary
                onClick={onPurchase}
                disabled={isPurchasing}
              />
            ),
          ]}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CreditsStatusBanner displayPurchaseAction={false} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
              {isPurchasing ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <PlaceholderLoader />
              ) : isPurchaseSuccessful ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>{successMessage}</Text>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Text>{message}</Text>
              )}
            </Column>
          </ColumnStackLayout>
        </Dialog>
      )}
    </I18n>
  );
};

export default CreditsUsageDialog;
