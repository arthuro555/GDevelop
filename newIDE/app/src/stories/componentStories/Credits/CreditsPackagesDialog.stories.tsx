import * as React from 'react';

import paperDecorator from '../../PaperDecorator';

import CreditsPackagesDialog from '../../../Credits/CreditsPackagesDialog';

import { CreditsPackageStoreContext } from '../../../AssetStore/CreditsPackages/CreditsPackageStoreContext';

import { CreditsPackageListingData } from '../../../Utils/GDevelopServices/Shop';

export default {
  title: 'Credits/CreditsPackagesDialog',
  component: CreditsPackagesDialog,
  decorators: [paperDecorator],
};

const creditsPackageListingDatas: CreditsPackageListingData[] = [
  {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    id: '500_credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    createdAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    updatedAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    name: '500 credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    description:
      '500 credits for GDevelop - perfect for cloud builds, get games featuring, or unlock more leaderboards or cloud projects.',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    productType: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    thumbnailUrls: [],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerId: 'R0F5QGNCzgOY5w2cxGeKJOq2UaD2',
// @ts-expect-error - TS2322 - Type 'boolean' is not assignable to type 'never'.
    isSellerGDevelop: true,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    listing: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    categories: [],
    prices: [
      {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        stripePriceId: 'price_1O3gEK46T03ISJOcW7Nguse6',
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'never'.
        value: 599,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        name: 'default',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        currency: 'USD',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        usageType: 'default',
      },
    ],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerStripeAccountId: 'acct_14EN2o46T03ISJOc',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    stripeProductId: 'prod_OrP2SrmGQjRcJx',
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type 'never'.
    appStoreProductId: null,
  },
  {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    id: '1000_credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    createdAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    updatedAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    name: '1000 credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    description:
      '1000 credits for GDevelop - perfect for cloud builds, get games featuring, or unlock more leaderboards or cloud projects.',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    productType: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    thumbnailUrls: [],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerId: 'R0F5QGNCzgOY5w2cxGeKJOq2UaD2',
// @ts-expect-error - TS2322 - Type 'boolean' is not assignable to type 'never'.
    isSellerGDevelop: true,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    listing: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    categories: [],
    prices: [
      {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        stripePriceId: 'price_1OKHfh46T03ISJOcpHksCgMW',
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'never'.
        value: 999,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        name: 'default',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        currency: 'USD',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        usageType: 'default',
      },
    ],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerStripeAccountId: 'acct_14EN2o46T03ISJOc',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    stripeProductId: 'prod_P8Yn5L7ykOl1lD',
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type 'never'.
    appStoreProductId: null,
  },
  {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    id: '2000_credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    createdAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    updatedAt: '2024-01-10T14:59:43.376Z',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    name: '2000 credits',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    description:
      '2000 credits for GDevelop - perfect for cloud builds, get games featuring, or unlock more leaderboards or cloud projects.',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    productType: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    thumbnailUrls: [],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerId: 'R0F5QGNCzgOY5w2cxGeKJOq2UaD2',
// @ts-expect-error - TS2322 - Type 'boolean' is not assignable to type 'never'.
    isSellerGDevelop: true,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    listing: 'CREDITS_PACKAGE',
// @ts-expect-error - TS2322 - Type 'never[]' is not assignable to type 'never'.
    categories: [],
    prices: [
      {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        stripePriceId: 'price_1OKHfh46T03ISJOcpHksCgMW',
// @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'never'.
        value: 1899,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        name: 'default',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        currency: 'USD',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
        usageType: 'default',
      },
    ],
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    sellerStripeAccountId: 'acct_14EN2o46T03ISJOc',
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'never'.
    stripeProductId: 'prod_P8Yn5L7ykOl1lD',
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type 'never'.
    appStoreProductId: null,
  },
];

export const Loading = () => {
  return (
    <CreditsPackageStoreContext.Provider
      value={{
        fetchCreditsPackages: () => {},
        creditsPackageListingDatas: null,
        error: null,
        openCreditsPackageDialog: () => {},
        closeCreditsPackageDialog: () => {},
        openCreditsUsageDialog: () => {},
      }}
    >
      <CreditsPackagesDialog
        onClose={() => {}}
        suggestedPackage={null}
        missingCredits={null}
      />
    </CreditsPackageStoreContext.Provider>
  );
};

export const Loaded = () => {
  return (
    <CreditsPackageStoreContext.Provider
      value={{
        fetchCreditsPackages: () => {},
        creditsPackageListingDatas,
        error: null,
        openCreditsPackageDialog: () => {},
        closeCreditsPackageDialog: () => {},
        openCreditsUsageDialog: () => {},
      }}
    >
      <CreditsPackagesDialog
        onClose={() => {}}
        suggestedPackage={null}
        missingCredits={null}
      />
    </CreditsPackageStoreContext.Provider>
  );
};

export const WithSuggestedPackageAndMissingCredits = () => {
  return (
    <CreditsPackageStoreContext.Provider
      value={{
        fetchCreditsPackages: () => {},
        creditsPackageListingDatas,
        error: null,
        openCreditsPackageDialog: () => {},
        closeCreditsPackageDialog: () => {},
        openCreditsUsageDialog: () => {},
      }}
    >
      <CreditsPackagesDialog
        onClose={() => {}}
        suggestedPackage={creditsPackageListingDatas[1]}
        missingCredits={200}
      />
    </CreditsPackageStoreContext.Provider>
  );
};
