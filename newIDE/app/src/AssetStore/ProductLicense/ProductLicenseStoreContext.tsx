import * as React from 'react';
import {
  listProductLicenses,
  ProductLicense,
} from '../../Utils/GDevelopServices/Shop';
import { PRODUCT_LICENSES_FETCH_TIMEOUT } from '../../Utils/GlobalFetchTimeouts';

type ProductLicenseStoreState = {
  fetchProductLicenses: (arg1: {
    productType: 'game-template' | 'asset-pack';
  }) => void;
  assetPackLicenses: Array<ProductLicense> | null | undefined;
  gameTemplateLicenses: Array<ProductLicense> | null | undefined;
  error: Error | null | undefined;
};

export const ProductLicenseStoreContext =
  React.createContext<ProductLicenseStoreState>({
    fetchProductLicenses: () => {},
    assetPackLicenses: null,
    gameTemplateLicenses: null,
    error: null,
  });

type ProductLicenseStoreStateProviderProps = {
  children: React.ReactNode;
};

export const ProductLicenseStoreStateProvider = ({
  children,
}: ProductLicenseStoreStateProviderProps) => {
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [gameTemplateLicenses, setGameTemplateLicenses] = React.useState<
    Array<ProductLicense> | null | undefined
  >(null);
  const [assetPackLicenses, setAssetPackLicenses] = React.useState<
    Array<ProductLicense> | null | undefined
  >(null);

  const isLoading = React.useRef<boolean>(false);

  const fetchProductLicenses = React.useCallback(() => {
    // If the product licenses are already loaded, or being loaded, don't load them again.
    if (isLoading.current || (gameTemplateLicenses && assetPackLicenses))
      return;

    (async () => {
      setError(null);
      isLoading.current = true;

      try {
        const [fetchedAssetPackLicenses, fetchedGameTemplateLicenses] =
          await Promise.all([
            listProductLicenses({
              productType: 'asset-pack',
            }),
            listProductLicenses({
              productType: 'game-template',
            }),
          ]);

        console.info(
          `Loaded ${
            fetchedAssetPackLicenses ? fetchedAssetPackLicenses.length : 0
          } asset pack licenses and ${
            fetchedGameTemplateLicenses ? fetchedGameTemplateLicenses.length : 0
          } game template licenses`
        );

        setAssetPackLicenses(fetchedAssetPackLicenses);
        setGameTemplateLicenses(fetchedGameTemplateLicenses);
      } catch (error) {
        console.error(`Unable to load product licenses:`, error);
        setError(error);
      }

      isLoading.current = false;
    })();
  }, [assetPackLicenses, gameTemplateLicenses]);

  React.useEffect(() => {
    // If the product licenses are already loaded, or being loaded, don't load them again.
    if (isLoading.current || (gameTemplateLicenses && assetPackLicenses))
      return;

    const timeoutId = setTimeout(() => {
      console.info('Pre-fetching product licenses...');
      fetchProductLicenses();
    }, PRODUCT_LICENSES_FETCH_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [fetchProductLicenses, assetPackLicenses, gameTemplateLicenses]);
  const ProductLicenseStoreState = React.useMemo(
    () => ({
      assetPackLicenses: assetPackLicenses,
      gameTemplateLicenses: gameTemplateLicenses,
      fetchProductLicenses,
      error,
    }),
    [assetPackLicenses, gameTemplateLicenses, fetchProductLicenses, error]
  );

  return (
    <ProductLicenseStoreContext.Provider value={ProductLicenseStoreState}>
      {children}
    </ProductLicenseStoreContext.Provider>
  );
};
