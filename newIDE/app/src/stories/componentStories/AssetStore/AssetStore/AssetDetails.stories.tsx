import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetDetails' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetDetails.tsx', but '--jsx' is not set.
import { AssetDetails } from '../../../../AssetStore/AssetDetails';
import {
  fakeAssetShortHeader1,
  fakeAssetWithCustomObject,
} from '../../../../fixtures/GDevelopServicesTestData';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../../../../AssetStore/AssetStoreContext';
import { GDevelopUserApi } from '../../../../Utils/GDevelopServices/ApiConfigs';
// @ts-expect-error - TS6142 - Module '../../../../Profile/PublicProfileProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileProvider.tsx', but '--jsx' is not set.
import PublicProfileProvider from '../../../../Profile/PublicProfileProvider';
import { useShopNavigation } from '../../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/AssetStore/AssetDetails',
  component: AssetDetails,
  decorators: [paperDecorator],
};

const Wrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigationState = useShopNavigation();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PublicProfileProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStoreStateProvider shopNavigationState={navigationState}>
        {children}
      </AssetStoreStateProvider>
    </PublicProfileProvider>
  );
};

export const PublicAsset = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetDetails
        onTagSelection={() => {}}
        assetShortHeader={fakeAssetShortHeader1}
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
        onOpenDetails={assetShortHeader => {}}
        onPrivateAssetPackSelection={() => {}}
        onPrivateGameTemplateSelection={() => {}}
      />
    </Wrapper>
  );
};
PublicAsset.parameters = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/assets-database/assets/${
        fakeAssetShortHeader1.id
      }.json`,
      method: 'GET',
      status: 200,
      response: fakeAssetWithCustomObject,
    },
  ],
};

export const PrivateAsset = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetDetails
      onTagSelection={() => {}}
      assetShortHeader={fakeAssetShortHeader1}
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
      onOpenDetails={assetShortHeader => {}}
      onPrivateAssetPackSelection={() => {}}
      onPrivateGameTemplateSelection={() => {}}
    />
  </Wrapper>
);
PrivateAsset.parameters = {
  mockData: [
    {
      url: `${
        GDevelopUserApi.baseUrl
      }/user-public-profile?id=ZJxWdIDmJzUA5iAWryEItxINA7n1`,
      method: 'GET',
      status: 200,
      response: {
        ZJxWdIDmJzUA5iAWryEItxINA7n1: {
          id: 'ZJxWdIDmJzUA5iAWryEItxINA7n1',
          username: 'Clem',
          description: "I'm Clement\n\ntada",
          donateLink: 'https://ko-fi/clem',
          discordUsername: 'indie-user#1234',
          personalWebsiteLink: 'https://indie-user.com',
          personalWebsite2Link: 'https://indie-user2.com',
          twitterUsername: 'indie-user',
          facebookUsername: 'indie-user',
          youtubeUsername: 'indie-user',
          tiktokUsername: 'indie-user',
          instagramUsername: 'indie-user',
          redditUsername: 'indie-user',
          snapchatUsername: 'indie-user',
          discordServerLink: 'https://discord.gg/indie-user',
        },
      },
    },
    {
      url: `https://resources.gdevelop-app.com/assets-database/assets/${
        fakeAssetShortHeader1.id
      }.json`,
      method: 'GET',
      status: 200,
      response: {
        ...fakeAssetWithCustomObject,
        authorIds: ['ZJxWdIDmJzUA5iAWryEItxINA7n1'],
        authors: [],
      },
    },
  ],
};

export const AssetWithMultipleAuthors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetDetails
      onTagSelection={() => {}}
      assetShortHeader={fakeAssetShortHeader1}
// @ts-expect-error - TS7006 - Parameter 'assetShortHeader' implicitly has an 'any' type.
      onOpenDetails={assetShortHeader => {}}
      onPrivateAssetPackSelection={() => {}}
      onPrivateGameTemplateSelection={() => {}}
    />
  </Wrapper>
);
PrivateAsset.parameters = {
  mockData: [
    {
      url: `${
        GDevelopUserApi.baseUrl
      }/user-public-profile?id=ZJxWdIDmJzUA5iAWryEItxINA7n1,ABCWdIDmJzUA5iAWryEItxINA7n1`,
      method: 'GET',
      status: 200,
      response: {
        ZJxWdIDmJzUA5iAWryEItxINA7n1: {
          id: 'ZJxWdIDmJzUA5iAWryEItxINA7n1',
          username: 'Clem',
          description: "I'm Clement\n\ntada",
          donateLink: 'https://ko-fi/clem',
          discordUsername: 'indie-user#1234',
          personalWebsiteLink: 'https://indie-user.com',
          personalWebsite2Link: 'https://indie-user2.com',
          twitterUsername: 'indie-user',
          facebookUsername: 'indie-user',
          youtubeUsername: 'indie-user',
          tiktokUsername: 'indie-user',
          instagramUsername: 'indie-user',
          redditUsername: 'indie-user',
          snapchatUsername: 'indie-user',
          discordServerLink: 'https://discord.gg/indie-user',
        },
        ABCWdIDmJzUA5iAWryEItxINA7n1: {
          id: 'ABCWdIDmJzUA5iAWryEItxINA7n1',
          username: 'Clem2',
          description: "I'm Clement 2\n\ntada",
          donateLink: 'https://ko-fi/clem2',
          discordUsername: 'indie-user#12345',
          personalWebsiteLink: 'https://indie-user.com',
          personalWebsite2Link: 'https://indie-user2.com',
          twitterUsername: 'indie-user',
          facebookUsername: 'indie-user',
          youtubeUsername: 'indie-user',
          tiktokUsername: 'indie-user',
          instagramUsername: 'indie-user',
          redditUsername: 'indie-user',
          snapchatUsername: 'indie-user',
          discordServerLink: 'https://discord.gg/indie-user',
        },
      },
    },
    {
      url: `https://resources.gdevelop-app.com/assets-database/assets/${
        fakeAssetShortHeader1.id
      }.json`,
      method: 'GET',
      status: 200,
      response: {
        ...fakeAssetWithCustomObject,
        authorIds: [
          'ZJxWdIDmJzUA5iAWryEItxINA7n1',
          'ABCWdIDmJzUA5iAWryEItxINA7n1',
        ],
      },
    },
  ],
};
