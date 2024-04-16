import * as React from 'react';
import {
  MarketingPlan,
  listMarketingPlans,
} from '../Utils/GDevelopServices/Game';
import { MARKETING_PLANS_FETCH_TIMEOUT } from '../Utils/GlobalFetchTimeouts';

type MarketingPlansStoreState = {
  fetchMarketingPlans: () => void,
  marketingPlans: Array<MarketingPlan> | null | undefined,
  error: Error | null | undefined
};

export const MarketingPlansStoreContext = React.createContext<MarketingPlansStoreState>({
  fetchMarketingPlans: () => {},
  marketingPlans: null,
  error: null,
});

type MarketingPlansStoreStateProviderProps = {
  children: React.ReactNode
};

export const MarketingPlansStoreStateProvider = ({
  children,
}: MarketingPlansStoreStateProviderProps) => {
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const [
    marketingPlans,
    setMarketingPlans,
  ] = React.useState<Array<MarketingPlan> | null | undefined>(null);

  const isLoading = React.useRef<boolean>(false);

  const fetchMarketingPlans = React.useCallback(
    () => {
      // If the marketing plans are already loaded, don't load them again.
      if (isLoading.current || marketingPlans) return;

      (async () => {
        setError(null);
        isLoading.current = true;

        try {
          const fetchedMarketingPlans = await listMarketingPlans();

          console.info(
            `Loaded ${
              fetchedMarketingPlans ? fetchedMarketingPlans.length : 0
            } marketing plans from the store.`
          );

          setMarketingPlans(fetchedMarketingPlans);
        } catch (error: any) {
          console.error(
            `Unable to load the marketing plans from the store:`,
            error
          );
          setError(error);
        }

        isLoading.current = false;
      })();
    },
    [marketingPlans]
  );

  React.useEffect(
    () => {
      if (isLoading.current) return;

      const timeoutId = setTimeout(() => {
        console.info('Pre-fetching marketing plans...');
        fetchMarketingPlans();
      }, MARKETING_PLANS_FETCH_TIMEOUT);
      return () => clearTimeout(timeoutId);
    },
    [fetchMarketingPlans]
  );

  const MarketingPlansStoreState = React.useMemo(
    () => ({
      marketingPlans,
      fetchMarketingPlans,
      error,
    }),
    [marketingPlans, fetchMarketingPlans, error]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MarketingPlansStoreContext.Provider value={MarketingPlansStoreState}>
      {children}
    </MarketingPlansStoreContext.Provider>
  );
};
