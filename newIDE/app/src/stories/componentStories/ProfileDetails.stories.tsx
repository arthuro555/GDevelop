import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../Profile/ProfileDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/ProfileDetails.tsx', but '--jsx' is not set.
import ProfileDetails from '../../Profile/ProfileDetails';
import {
  indieUserProfile,
  subscriptionForStartupUser,
  subscriptionForSilverUser,
} from '../../fixtures/GDevelopServicesTestData';
import { Profile } from '../../Utils/GDevelopServices/Authentication';
// @ts-expect-error - TS6142 - Module '../../Utils/GDevelopServices/Shop' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/Shop.tsx', but '--jsx' is not set.
import { PrivateAssetPackListingData } from '../../Utils/GDevelopServices/Shop';

const indieUserWithoutUsernameNorDescriptionProfile: Profile = {
  ...indieUserProfile,
  username: null,
  description: null,
  communityLinks: {},
};

export default {
  title: 'Profile/ProfileDetails',
  component: ProfileDetails,
  decorators: [paperDecorator],
};

const getAssetPacksListingData = (userId: string): Array<PrivateAssetPackListingData> => [
  {
    id: 'assetPackId',
    sellerId: userId,
    isSellerGDevelop: false,
    productType: 'ASSET_PACK',
    listing: 'ASSET_PACK',
    name: 'French food',
    description: 'The best asset pack about french food',
    categories: ['props'],
    updatedAt: '2021-11-18T10:19:50.417Z',
    createdAt: '2021-11-18T10:19:50.417Z',
    thumbnailUrls: [
      'https://resources.gdevelop-app.com/private-assets/Blue Girl Platformer Pack/thumbnail.png',
    ],
    prices: [
      {
        value: 599,
        name: 'commercial_USD',
        stripePriceId: 'stripePriceId',
        usageType: 'commercial',
        currency: 'USD',
      },
    ],
    creditPrices: [
      {
        amount: 600,
        usageType: 'commercial',
      },
    ],
    appStoreProductId: null,
    sellerStripeAccountId: 'sellerStripeProductId',
    stripeProductId: 'stripeProductId',
  },
];

export const MyCompleteProfileWithoutSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails profile={indieUserProfile} isAuthenticatedUserProfile />
);

export const MyCompleteProfileWithSilverSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={indieUserProfile}
    isAuthenticatedUserProfile
    subscription={subscriptionForSilverUser}
  />
);

export const MyCompleteProfileWithBusinessSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={indieUserProfile}
    isAuthenticatedUserProfile
    subscription={subscriptionForStartupUser}
  />
);

export const MyProfileWithoutDiscordUsernameNorSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={{ ...indieUserProfile, discordUsername: '' }}
    isAuthenticatedUserProfile
  />
);

export const MyProfileWithoutDiscordUsernameWithStartupSubscription = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={{ ...indieUserProfile, discordUsername: '' }}
    isAuthenticatedUserProfile
    subscription={subscriptionForStartupUser}
  />
);

export const OtherUserProfile = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails profile={indieUserProfile} assetPacksListingDatas={[]} />
);

export const OtherUserIncompleteProfile = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={{
      ...indieUserWithoutUsernameNorDescriptionProfile,
      discordUsername: '',
    }}
    assetPacksListingDatas={[]}
  />
);

export const OtherUserProfileWithPremiumAssetPacks = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={indieUserProfile}
    assetPacksListingDatas={getAssetPacksListingData(indieUserProfile.id)}
    onAssetPackOpen={action('open asset pack')}
  />
);

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Loading = () => <ProfileDetails profile={null} />;

export const Errored = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ProfileDetails
    profile={null}
    error={new Error('Connectivity Problems')}
    onRetry={() => {
      action('Retry profile fetch');
    }}
  />
);
