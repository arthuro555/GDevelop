// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import {
  ColumnStackLayout,
  LineStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module './CreditsStatusBanner' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/CreditsStatusBanner.tsx', but '--jsx' is not set.
import CreditsStatusBanner from './CreditsStatusBanner';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackageStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackageStoreContext.tsx', but '--jsx' is not set.
import { CreditsPackageStoreContext } from '../AssetStore/CreditsPackages/CreditsPackageStoreContext';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../AssetStore/ProductPriceTag' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductPriceTag.tsx', but '--jsx' is not set.
import { renderProductPrice } from '../AssetStore/ProductPriceTag';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../AssetStore/CreditsPackages/CreditsPackagePurchaseDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/CreditsPackages/CreditsPackagePurchaseDialog.tsx', but '--jsx' is not set.
import CreditsPackagePurchaseDialog from '../AssetStore/CreditsPackages/CreditsPackagePurchaseDialog';
// @ts-expect-error - TS6142 - Module '../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { CreditsPackageListingData } from '../Utils/GDevelopServices/Shop';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/OneCoin'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/OneCoin.js' implicitly has an 'any' type.
import OneCoin from './Icons/OneCoin';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/TwoCoins'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/TwoCoins.js' implicitly has an 'any' type.
import TwoCoins from './Icons/TwoCoins';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/ThreeCoins'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/ThreeCoins.js' implicitly has an 'any' type.
import ThreeCoins from './Icons/ThreeCoins';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/FourCoins'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/FourCoins.js' implicitly has an 'any' type.
import FourCoins from './Icons/FourCoins';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Icons/FiveCoins'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Credits/Icons/FiveCoins.js' implicitly has an 'any' type.
import FiveCoins from './Icons/FiveCoins';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
import { useResponsiveWindowSize } from '../UI/Responsive/ResponsiveWindowMeasurer';
import { getItemsSplitInLines } from './CreditsPackagesHelper';

const styles = {
  creditsPackage: {
    display: 'flex',
    flex: 1,
    borderRadius: 8,
    padding: 16,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
  backgroundText: {
    textAlign: 'left',
  },
} as const;

const getIconFromIndex = (index: number) => {
  switch (index) {
    case 0:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <OneCoin style={styles.iconStyle} />;
    case 1:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <TwoCoins style={styles.iconStyle} />;
    case 2:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <ThreeCoins style={styles.iconStyle} />;
    case 3:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <FourCoins style={styles.iconStyle} />;
    case 4:
    default:
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <FiveCoins style={styles.iconStyle} />;
  }
};

type Props = {
  onClose: () => void,
  suggestedPackage: CreditsPackageListingData | null | undefined,
  missingCredits: number | null | undefined,
  showCalloutTip?: boolean
};

const CreditsPackagesDialog = ({
  onClose,
  suggestedPackage,
  missingCredits,
  showCalloutTip,
}: Props) => {
  const {
    error,
    fetchCreditsPackages,
    creditsPackageListingDatas,
  } = React.useContext(CreditsPackageStoreContext);
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const [
    purchasingCreditsPackageListingData,
    setPurchasingCreditsPackageListingData,
  ] = React.useState<CreditsPackageListingData | null | undefined>(null);
  const { isMediumScreen } = useResponsiveWindowSize();

  React.useEffect(
    () => {
      fetchCreditsPackages();
    },
    [fetchCreditsPackages]
  );

  // Split credit packages on multiple lines to spread them as much as possible.
  // Logic is different based on the screen size so that it looks ok.
  const creditsPackageListingDatasArrays: CreditsPackageListingData[][] | null | undefined = React.useMemo(
    () => getItemsSplitInLines(creditsPackageListingDatas, isMediumScreen),
    [creditsPackageListingDatas, isMediumScreen]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Purchase credits</Trans>}
          open
          maxWidth="md"
          onRequestClose={onClose}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              onClick={onClose}
            />,
          ]}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CreditsStatusBanner displayPurchaseAction={false} />
            {showCalloutTip && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="info">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  You can use credits to feature a game or purchase asset packs
                  and game templates in the store!
                </Trans>
              </AlertMessage>
            )}
            {!!missingCredits && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text size="sub-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>You're {missingCredits} credits short.</Trans>
                </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Recharge your account to purchase this item.</Trans>
                </Text>
              </Column>
            )}
            {error ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PlaceholderError onRetry={fetchCreditsPackages}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Can't load the credits packages. Verify your internet
                  connection or retry later.
                </Trans>
              </PlaceholderError>
            ) : !creditsPackageListingDatasArrays ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <PlaceholderLoader />
            ) : (
              creditsPackageListingDatasArrays.map(
                (creditsPackageListingDatasArray, lineIndex) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <ResponsiveLineStackLayout
                    noColumnMargin
                    key={`line-${lineIndex}`}
                  >
                    {creditsPackageListingDatasArray.map(
                      (creditsPackageListingData, index) => {
                        const {
                          id,
                          name,
                          description,
                        } = creditsPackageListingData;
                        const shouldSuggestPackage =
                          !suggestedPackage || suggestedPackage.id === id;
                        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <div
                            style={{
                              ...styles.creditsPackage,
                              border: `1px solid ${
                                gdevelopTheme.palette.secondary
                              }`,
                            }}
                            key={id}
                          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                            <ColumnStackLayout
                              alignItems="center"
                              justifyContent="space-between"
                              noMargin
                              expand
                            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <div style={styles.titleContainer}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <div style={styles.iconContainer}>
                                  {getIconFromIndex(index)}
                                </div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <LineStackLayout
                                  justifyContent="space-between"
                                  alignItems="flex-end"
                                  expand
                                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Line noMargin alignItems="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                    <Text size="sub-title" noMargin>
                                      {name}
                                    </Text>
                                  </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                  <Text
                                    size="body-small"
                                    color="secondary"
                                    noMargin
                                  >
                                    {renderProductPrice({
                                      productListingData: creditsPackageListingData,
                                      usageType: 'default',
                                      i18n,
                                    })}
                                  </Text>
                                </LineStackLayout>
                              </div>

{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                              <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                                <Text
                                  size="body-small"
                                  noMargin
                                  color="secondary"
                                  align="left"
                                >
                                  {description}
                                </Text>
                              </Column>
                              {shouldSuggestPackage ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <RaisedButton
                                  primary
                                  onClick={() =>
                                    setPurchasingCreditsPackageListingData(
                                      creditsPackageListingData
                                    )
                                  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  label={<Trans>Purchase</Trans>}
                                  fullWidth
                                />
                              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                <FlatButton
                                  primary
                                  onClick={() =>
                                    setPurchasingCreditsPackageListingData(
                                      creditsPackageListingData
                                    )
                                  }
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                                  label={<Trans>Purchase</Trans>}
                                  fullWidth
                                />
                              )}
                            </ColumnStackLayout>
                          </div>
                        );
                      }
                    )}
                  </ResponsiveLineStackLayout>
                )
              )
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText style={styles.backgroundText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Not sure how many credits you need? Check{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Link
                  href="https://wiki.gdevelop.io/gdevelop5/interface/profile/credits"
                  onClick={() =>
                    Window.openExternalURL(
                      'https://wiki.gdevelop.io/gdevelop5/interface/profile/credits'
                    )
                  }
                >
                  this guide
                </Link>{' '}
                to help you decide.
              </Trans>
            </BackgroundText>
          </ColumnStackLayout>
          {!!purchasingCreditsPackageListingData && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <CreditsPackagePurchaseDialog
              creditsPackageListingData={purchasingCreditsPackageListingData}
              onClose={() => setPurchasingCreditsPackageListingData(null)}
              onCloseWhenPurchaseSuccessful={() => {
                if (suggestedPackage) {
                  // If a package was suggested, we can close the dialog as the user
                  // is going through a flow to purchase a product.
                  onClose();
                }
              }}
            />
          )}
        </Dialog>
      )}
    </I18n>
  );
};

export default CreditsPackagesDialog;
