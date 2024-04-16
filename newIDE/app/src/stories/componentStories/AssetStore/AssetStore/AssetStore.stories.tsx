import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/index.tsx', but '--jsx' is not set.
import { AssetStore } from '../../../../AssetStore';
import {
  fakeAssetPacks,
  fakeSilverAuthenticatedUser,
} from '../../../../fixtures/GDevelopServicesTestData';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import { useShopNavigation } from '../../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/AssetStore',
  component: AssetStore,
  decorators: [paperDecorator],
};

const apiDataServerSideError = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/assets-database/assetPacks.json`,
      method: 'GET',
      status: 500,
      response: { data: 'status' },
    },
  ],
} as const;

const apiDataFakePacks = {
  mockData: [
    {
      url: `https://resources.gdevelop-app.com/assets-database/assetPacks.json`,
      method: 'GET',
      status: 200,
      response: fakeAssetPacks,
    },
  ],
} as const;

const Wrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigationState = useShopNavigation();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AssetStoreStateProvider shopNavigationState={navigationState}>
          {children}
        </AssetStoreStateProvider>
      </AuthenticatedUserContext.Provider>
    </FixedHeightFlexContainer>
  );
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetStore displayPromotions />
  </Wrapper>
);
Default.parameters = apiDataFakePacks;

export const WithoutPromotions = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetStore displayPromotions={false} />
  </Wrapper>
);
WithoutPromotions.parameters = apiDataFakePacks;

export const LoadingError = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AssetStore />
  </Wrapper>
);
LoadingError.parameters = apiDataServerSideError;
