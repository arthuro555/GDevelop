import * as React from 'react';
import { action } from '@storybook/addon-actions';
import MockAdapter from 'axios-mock-adapter';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationPage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationPage.tsx', but '--jsx' is not set.
import PrivateGameTemplateInformationPage from '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateInformationPage';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { client as userApiAxiosClient } from '../../../../Utils/GDevelopServices/User';
import {
  client as shopApiAxiosClient,
  PrivateGameTemplateListingData,
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
} from '../../../../Utils/GDevelopServices/Shop';
import {
  client as assetApiAxiosClient,
  PrivateGameTemplate,
} from '../../../../Utils/GDevelopServices/Asset';
import AuthenticatedUserContext, {
  AuthenticatedUser,
} from '../../../../Profile/AuthenticatedUserContext';
import {
  fakeGameTemplateLicenses,
  fakeSilverAuthenticatedUserWithCloudProjects,
} from '../../../../fixtures/GDevelopServicesTestData';
import {
  PrivateGameTemplateStoreContext,
  initialPrivateGameTemplateStoreState,
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext.tsx', but '--jsx' is not set.
} from '../../../../AssetStore/PrivateGameTemplates/PrivateGameTemplateStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../Profile/Subscription/SubscriptionSuggestionContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/Subscription/SubscriptionSuggestionContext.tsx', but '--jsx' is not set.
import { SubscriptionSuggestionProvider } from '../../../../Profile/Subscription/SubscriptionSuggestionContext';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ProductLicense/ProductLicenseStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ProductLicense/ProductLicenseStoreContext.tsx', but '--jsx' is not set.
import { ProductLicenseStoreStateProvider } from '../../../../AssetStore/ProductLicense/ProductLicenseStoreContext';

export default {
  title: 'AssetStore/AssetStore/PrivateGameTemplateInformationPage',
  component: PrivateGameTemplateInformationPage,
  decorators: [paperDecorator],
};

const sellerPublicProfile = {
  id: 'tVUYpNMz1AfsbzJtxUEpPTuu4Mn1',
  username: 'CreatorUserName',
  description:
    'I create game templates for GDevelop for country-specific food.',
} as const;

const privateGameTemplate1ListingData: PrivateGameTemplateListingData = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918d593a6e2',
  sellerId: 'tVUYpNMz1AfsbzJtxUEpPTuu4Mn1',
  isSellerGDevelop: false,
  productType: 'GAME_TEMPLATE',
  thumbnailUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
  ],
  updatedAt: '2022-09-14T12:43:51.329Z',
  createdAt: '2022-09-14T12:43:51.329Z',
  listing: 'GAME_TEMPLATE',
  description: 'best food ever',
  name: 'French Food',
  categories: ['props'],
  prices: [
    {
      value: 1500,
      name: 'commercial_USD',
      stripePriceId: 'stripePriceId',
      currency: 'USD',
      usageType: 'commercial',
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

const privateGameTemplate1: PrivateGameTemplate = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918d593a6e2',
  name: 'French Game',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
    'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
    'https://resources.gdevelop-app.com/assets/Packs/particles emitter.png',
    'https://resources.gdevelop-app.com/assets/Packs/lucid icons pack.png',
    'https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png',
    'https://resources.gdevelop-app.com/assets/Packs/casual buttons pack.png',
  ],
  updatedAt: '2022-09-15T08:17:59.977Z',
  createdAt: '2022-09-14T12:27:27.173Z',
  tag: 'french game',
  longDescription: 'This is the best game template about french food',
  gamePreviewLink: 'https://gamepreview.gdevelop-app.com',
};

const privateGameTemplate2ListingData: PrivateGameTemplateListingData = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918d568ef234',
  sellerId: 'tVUYpNMz1AfsbzJtxUEpPTuu4Mn1',
  isSellerGDevelop: false,
  productType: 'GAME_TEMPLATE',
  thumbnailUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
  ],
  updatedAt: '2022-09-14T12:43:51.329Z',
  createdAt: '2022-09-14T12:43:51.329Z',
  listing: 'GAME_TEMPLATE',
  description: 'best sounds ever',
  name: 'French Sounds',
  categories: ['sounds'],
  prices: [
    {
      value: 1000,
      usageType: 'commercial',
      stripePriceId: 'stripePriceId',
      currency: 'USD',
      name: 'commercial_USD',
    },
  ],
  creditPrices: [
    {
      amount: 1000,
      usageType: 'commercial',
    },
  ],
  appStoreProductId: 'fake.product.id',
  sellerStripeAccountId: 'sellerStripeProductId',
  stripeProductId: 'stripeProductId',
};

const privateGameTemplate2: PrivateGameTemplate = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918d568ef234',
  name: 'French Sounds',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
    'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
  ],
  updatedAt: '2022-09-15T08:17:59.977Z',
  createdAt: '2022-09-14T12:27:27.173Z',
  tag: 'french sounds',
  longDescription: 'This is the best game template about french sounds',
  gamePreviewLink: 'https://gamepreview.gdevelop-app.com',
};

const privateGameTemplateBundleListingData: PrivateGameTemplateListingData = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918dabcop234',
  sellerId: 'tVUYpNMz1AfsbzJtxUEpPTuu4Mn1',
  isSellerGDevelop: false,
  productType: 'GAME_TEMPLATE',
  thumbnailUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
    'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
  ],
  updatedAt: '2022-09-14T12:43:51.329Z',
  createdAt: '2022-09-14T12:43:51.329Z',
  listing: 'GAME_TEMPLATE',
  description: 'best bundle ever',
  name: 'French Bundle',
  categories: ['sounds', 'props'],
  prices: [
    {
      value: 2000,
      name: 'commercial_USD',
      stripePriceId: 'stripePriceId',
      currency: 'USD',
      usageType: 'commercial',
    },
  ],
  creditPrices: [
    {
      amount: 2000,
      usageType: 'commercial',
    },
  ],
  appStoreProductId: 'fake.product.id',
  sellerStripeAccountId: 'sellerStripeProductId',
  stripeProductId: 'stripeProductId',
  includedListableProductIds: [
    privateGameTemplate1ListingData.id,
    privateGameTemplate2ListingData.id,
  ],
};

const privateGameTemplateBundle: PrivateGameTemplate = {
  id: '56a50a9e-57ef-4d1d-a3f2-c918dabcop234',
  name: 'French Bundle',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/assets/Packs/gdevelop platformer.png',
    'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
    'https://resources.gdevelop-app.com/assets/Packs/particles emitter.png',
    'https://resources.gdevelop-app.com/assets/Packs/lucid icons pack.png',
    'https://resources.gdevelop-app.com/assets/Packs/wesxdz skullcup.png',
    'https://resources.gdevelop-app.com/assets/Packs/casual buttons pack.png',
  ],
  updatedAt: '2022-09-15T08:17:59.977Z',
  createdAt: '2022-09-14T12:27:27.173Z',
  tag: 'french bundle',
  longDescription: 'This is the best bundle about french games',
  gamePreviewLink: 'https://gamepreview.gdevelop-app.com',
};

const allPrivateGameTemplateListingData = [
  privateGameTemplate1ListingData,
  privateGameTemplate2ListingData,
  privateGameTemplateBundleListingData,
];

const gameTemplates = [
  privateGameTemplate1,
  privateGameTemplate2,
  privateGameTemplateBundle,
];

const PrivateGameTemplateInformationPageStory = ({
  privateGameTemplateListingData,
  receivedGameTemplates = [],
  authenticatedUser = fakeSilverAuthenticatedUserWithCloudProjects,
  delayResponse = 0,
  errorCode,
  errorMessage,
}: {
  privateGameTemplateListingData: PrivateGameTemplateListingData,
  authenticatedUser?: AuthenticatedUser,
  receivedGameTemplates?: Array<PrivateGameTemplate>,
  delayResponse?: number,
  errorCode?: number,
  errorMessage?: string
}) => {
  const userServiceMock = new MockAdapter(userApiAxiosClient, {
    delayResponse,
  });
  userServiceMock
    .onGet(`/user-public-profile/${privateGameTemplateListingData.sellerId}`)
    .reply(200, sellerPublicProfile)
    .onGet(`/user/${privateGameTemplateListingData.sellerId}/badge`)
    .reply(200, [])
    .onGet(`/achievement`)
    .reply(200, []);
  const assetServiceMock = new MockAdapter(assetApiAxiosClient, {
    delayResponse,
  });
  assetServiceMock
    .onGet(`/game-template/${privateGameTemplateListingData.id}`)
    .reply(
      errorCode || 200,
      errorCode
        ? errorMessage || null
        : gameTemplates.find(
            assetPack => assetPack.id === privateGameTemplateListingData.id
          )
    )
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });
  const shopServiceMock = new MockAdapter(shopApiAxiosClient, {
    delayResponse,
  });
  shopServiceMock
    .onGet('/product-license')
    .reply(200, fakeGameTemplateLicenses)
    .onAny()
    .reply(config => {
      console.error(`Unexpected call to ${config.url} (${config.method})`);
      return [504, null];
    });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PrivateGameTemplateStoreContext.Provider
      value={{
        ...initialPrivateGameTemplateStoreState,
        privateGameTemplateListingDatas: [
          privateGameTemplate1ListingData,
          privateGameTemplate2ListingData,
          privateGameTemplateBundleListingData,
        ],
      }}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider
        value={{
          ...authenticatedUser,
          receivedGameTemplates,
          gameTemplatePurchases: receivedGameTemplates.map(
            privateGameTemplate => ({
              id: 'purchase-id',
              productType: 'GAME_TEMPLATE',
              usageType: 'commercial',
              productId: privateGameTemplate.id,
              buyerId: authenticatedUser.profile
                ? authenticatedUser.profile.id
                : 'userId',
              receiverId: authenticatedUser.profile
                ? authenticatedUser.profile.id
                : 'userId',
              createdAt: new Date(1707519600000).toString(),
            })
          ),
        }}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <SubscriptionSuggestionProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ProductLicenseStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <PrivateGameTemplateInformationPage
              privateGameTemplateListingData={privateGameTemplateListingData}
              onGameTemplateOpen={() => action('open game template')()}
              onCreateWithGameTemplate={() =>
                action('create with game template')()
              }
              privateGameTemplateListingDatasFromSameCreator={allPrivateGameTemplateListingData.filter(
                gameTemplateListingData =>
                  gameTemplateListingData.id !==
                  privateGameTemplateListingData.id
              )}
            />
          </ProductLicenseStoreStateProvider>
        </SubscriptionSuggestionProvider>
      </AuthenticatedUserContext.Provider>
    </PrivateGameTemplateStoreContext.Provider>
  );
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplate1ListingData}
  />
);

export const ForABundle = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplateBundleListingData}
  />
);

export const ForAlreadyPurchasedGameTemplate = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplate1ListingData}
    receivedGameTemplates={[
      {
        id: privateGameTemplate1ListingData.id,
        // Below is useless data for the component.
        name: privateGameTemplate1ListingData.name,
        createdAt: '2',
        updatedAt: '2',
        longDescription: 'longDescription',
        previewImageUrls: [],
        tag: 'tag',
        gamePreviewLink: 'https://gdevelop.io',
      },
    ]}
  />
);
export const ForAlreadyPurchasedBundle = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplateBundleListingData}
    receivedGameTemplates={[
      {
        id: privateGameTemplateBundleListingData.id,
        // Below is useless data for the component.
        name: privateGameTemplateBundleListingData.name,
        createdAt: '2',
        updatedAt: '2',
        longDescription: 'longDescription',
        previewImageUrls: [],
        tag: 'tag',
        gamePreviewLink: 'https://gdevelop.io',
      },
    ]}
  />
);

export const Loading = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplate1ListingData}
    delayResponse={10000}
  />
);

export const With404 = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplate1ListingData}
    errorCode={404}
  />
);

export const WithUnknownError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <PrivateGameTemplateInformationPageStory
    privateGameTemplateListingData={privateGameTemplate1ListingData}
    errorCode={500}
    errorMessage={'Internal server error'}
  />
);
