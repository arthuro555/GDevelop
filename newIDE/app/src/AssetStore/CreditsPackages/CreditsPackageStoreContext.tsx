import * as React from 'react';
import {
  listListedCreditsPackages,
  CreditsPackageListingData,
} from '../../Utils/GDevelopServices/Shop';

import CreditsPackagesDialog from '../../Credits/CreditsPackagesDialog';

import CreditsUsageDialog from '../../Credits/CreditsUsageDialog';
import { CREDITS_PACKAGES_FETCH_TIMEOUT } from '../../Utils/GlobalFetchTimeouts';

type CreditsPackageDialogOpeningOptions = {
  missingCredits?: number;
  showCalloutTip?: boolean;
};

type CreditsUsageDialogOptions = {
  title: React.ReactNode;
  message: React.ReactNode;
  onConfirm: () => Promise<void>;
  successMessage: React.ReactNode;
  closeAutomaticallyAfterSuccess?: boolean;
};

type CreditsPackageStoreState = {
  fetchCreditsPackages: () => void;
  creditsPackageListingDatas:
    | Array<CreditsPackageListingData>
    | null
    | undefined;
  error: Error | null | undefined;
  openCreditsPackageDialog: (
    arg1?: CreditsPackageDialogOpeningOptions | null | undefined
  ) => void;
  closeCreditsPackageDialog: () => void;
  openCreditsUsageDialog: (arg1: CreditsUsageDialogOptions) => void;
};

export const CreditsPackageStoreContext =
  React.createContext<CreditsPackageStoreState>({
    fetchCreditsPackages: () => {},
    creditsPackageListingDatas: null,
    error: null,
    openCreditsPackageDialog: () => {},
    closeCreditsPackageDialog: () => {},
    openCreditsUsageDialog: () => {},
  });

// Ids are in the form "amount_credits" (e.g: "500_credits").
export const getCreditsAmountFromId = (id: string) => {
  return parseInt(id.split('_')[0], 10);
};

type CreditsPackageStoreStateProviderProps = {
  children: React.ReactNode;
};

export const CreditsPackageStoreStateProvider = ({
  children,
}: CreditsPackageStoreStateProviderProps) => {
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [creditsPackageListingDatas, setCreditsPackageListingDatas] =
    React.useState<Array<CreditsPackageListingData> | null | undefined>(null);
  const [isCreditsPackageDialogOpen, setIsCreditsPackageDialogOpen] =
    React.useState<boolean>(false);
  const [missingCredits, setMissingCredits] = React.useState<
    number | null | undefined
  >(null);
  const [showCalloutTip, setShowCalloutTip] = React.useState<boolean>(false);

  const [creditsUsageDialogConfig, setCreditsUsageDialogConfig] =
    React.useState<CreditsUsageDialogOptions | null | undefined>(null);

  const isLoading = React.useRef<boolean>(false);

  const fetchCreditsPackages = React.useCallback(() => {
    // If the credit packages are already loaded, don't load them again.
    if (isLoading.current || creditsPackageListingDatas) return;

    (async () => {
      setError(null);
      isLoading.current = true;

      try {
        const fetchedCreditsPackageListingDatas =
          await listListedCreditsPackages();

        console.info(
          `Loaded ${
            fetchedCreditsPackageListingDatas
              ? fetchedCreditsPackageListingDatas.length
              : 0
          } credit packages from the store.`
        );

        setCreditsPackageListingDatas(fetchedCreditsPackageListingDatas);
      } catch (error) {
        console.error(
          `Unable to load the credit packages from the store:`,
          error
        );
// @ts-expect-error - TS2345 - Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<Error | null | undefined>'.
        setError(error);
      }

      isLoading.current = false;
    })();
  }, [creditsPackageListingDatas]);

  React.useEffect(() => {
    if (isLoading.current) return;

    const timeoutId = setTimeout(() => {
      console.info('Pre-fetching credit packages from the store...');
      fetchCreditsPackages();
    }, CREDITS_PACKAGES_FETCH_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [fetchCreditsPackages]);

  const openCreditsPackageDialog = React.useCallback(
    (options?: CreditsPackageDialogOpeningOptions | null) => {
      if (!creditsPackageListingDatas) return;

      setMissingCredits(
        options && options.missingCredits ? options.missingCredits : 0
      );
      setShowCalloutTip(
        options && options.showCalloutTip ? options.showCalloutTip : false
      );
      setIsCreditsPackageDialogOpen(true);
    },
    [creditsPackageListingDatas]
  );

  const suggestedPackage: CreditsPackageListingData | null | undefined =
    React.useMemo(() => {
      if (!missingCredits || !creditsPackageListingDatas) return null;
      // @ts-expect-error - TS7034 - Variable 'creditsPackageListingDataWithShorterPositiveDifferenceInCredits' implicitly has type 'any' in some locations where its type cannot be determined.
      let creditsPackageListingDataWithShorterPositiveDifferenceInCredits =
        null;
      creditsPackageListingDatas.forEach((creditsPackageListingData) => {
        const packageCreditsAmount = getCreditsAmountFromId(
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'never'.
          creditsPackageListingData.id
        );

        const shortlistedPackageCreditsAmount =
// @ts-expect-error - TS7005 - Variable 'creditsPackageListingDataWithShorterPositiveDifferenceInCredits' implicitly has an 'any' type.
          creditsPackageListingDataWithShorterPositiveDifferenceInCredits
            ? getCreditsAmountFromId(
                // @ts-expect-error - TS7005 - Variable 'creditsPackageListingDataWithShorterPositiveDifferenceInCredits' implicitly has an 'any' type.
                creditsPackageListingDataWithShorterPositiveDifferenceInCredits.id
              )
            : null;
        if (
          packageCreditsAmount >= missingCredits &&
          (!shortlistedPackageCreditsAmount ||
            packageCreditsAmount < shortlistedPackageCreditsAmount)
        ) {
          creditsPackageListingDataWithShorterPositiveDifferenceInCredits =
            creditsPackageListingData;
        }
      });

      // If no package with more credits than missingCredits is found, return the package with the most credits.
      if (!creditsPackageListingDataWithShorterPositiveDifferenceInCredits) {
        creditsPackageListingDataWithShorterPositiveDifferenceInCredits =
          creditsPackageListingDatas.reduce((a, b) => {
// @ts-expect-error - TS2339 - Property 'id' does not exist on type 'never'. | TS2339 - Property 'id' does not exist on type 'never'.
            return getCreditsAmountFromId(a.id) > getCreditsAmountFromId(b.id)
              ? a
              : b;
          });
      }

      return creditsPackageListingDataWithShorterPositiveDifferenceInCredits;
    }, [creditsPackageListingDatas, missingCredits]);

  const closeCreditsPackageDialog = React.useCallback(() => {
    setIsCreditsPackageDialogOpen(false);
  }, []);

  const openCreditsUsageDialog = React.useCallback(
    (options: CreditsUsageDialogOptions) => {
      setCreditsUsageDialogConfig(options);
    },
    []
  );

  const CreditsPackageStoreState = React.useMemo(
    () => ({
      creditsPackageListingDatas,
      fetchCreditsPackages,
      openCreditsPackageDialog,
      closeCreditsPackageDialog,
      error,
      openCreditsUsageDialog,
    }),
    [
      creditsPackageListingDatas,
      fetchCreditsPackages,
      openCreditsPackageDialog,
      closeCreditsPackageDialog,
      error,
      openCreditsUsageDialog,
    ]
  );

  return (
    <CreditsPackageStoreContext.Provider value={CreditsPackageStoreState}>
      {children}
      {isCreditsPackageDialogOpen && (
        <CreditsPackagesDialog
          onClose={() => setIsCreditsPackageDialogOpen(false)}
          suggestedPackage={suggestedPackage}
          missingCredits={missingCredits}
          showCalloutTip={showCalloutTip}
        />
      )}
      {creditsUsageDialogConfig && (
        <CreditsUsageDialog
          onClose={() => setCreditsUsageDialogConfig(null)}
          message={creditsUsageDialogConfig.message}
          title={creditsUsageDialogConfig.title}
          onConfirm={creditsUsageDialogConfig.onConfirm}
          successMessage={creditsUsageDialogConfig.successMessage}
          closeAutomaticallyAfterSuccess={
            creditsUsageDialogConfig.closeAutomaticallyAfterSuccess
          }
        />
      )}
    </CreditsPackageStoreContext.Provider>
  );
};
