import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/PrivateAssets/PrivateAssetPackPurchaseDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateAssets/PrivateAssetPackPurchaseDialog.tsx', but '--jsx' is not set.
import PrivateAssetPackPurchaseDialog from '../../../../AssetStore/PrivateAssets/PrivateAssetPackPurchaseDialog';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import {
  fakeSilverAuthenticatedUser,
  fakeNotAuthenticatedUser,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateAssetPackListingData } from '../../../../Utils/GDevelopServices/Shop';

export default {
  title: 'AssetStore/AssetStore/PrivateAssetPackPurchaseDialog',
  component: PrivateAssetPackPurchaseDialog,
  decorators: [paperDecorator],
  parameters: {
    initialState: {
      isBuying: true,
    },
  },
};

const privateAssetPackListingData: PrivateAssetPackListingData = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918d593a6e2',
  sellerId: 'tVUYpNMz1AfsbzJtxUEpPTuu4Mn1',
  isSellerGDevelop: false,
  productType: 'ASSET_PACK',
  thumbnailUrls: [
    'https://resources.gdevelop-app.com/staging/private-assets/French Food/thumbnail1.png',
  ],
  updatedAt: '2022-09-14T12:43:51.329Z',
  createdAt: '2022-09-14T12:43:51.329Z',
  listing: 'ASSET_PACK',
  description: '5 assets',
  name: 'French Food',
  categories: ['props'],
  prices: [
    {
      value: 1500,
      name: 'commercial_USD',
      stripePriceId: 'stripePriceId',
      usageType: 'commercial',
      currency: 'USD',
    },
  ],
  creditPrices: [
    {
      amount: 1500,
      usageType: 'commercial',
    },
  ],
  appStoreProductId: null,
  sellerStripeAccountId: 'sellerStripeProductId',
  stripeProductId: 'stripeProductId',
};

export const NotLoggedIn = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeNotAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PrivateAssetPackPurchaseDialog
        privateAssetPackListingData={privateAssetPackListingData}
        usageType="commercial"
        onClose={() => action('close')()}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const LoggedIn = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PrivateAssetPackPurchaseDialog
        privateAssetPackListingData={privateAssetPackListingData}
        usageType="commercial"
        onClose={() => action('close')()}
      />
    </AuthenticatedUserContext.Provider>
  );
};
