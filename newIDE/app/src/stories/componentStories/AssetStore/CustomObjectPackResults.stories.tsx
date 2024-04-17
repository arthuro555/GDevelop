import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import { AssetStoreStateProvider } from '../../../AssetStore/AssetStoreContext';

import { CustomObjectPackResults } from '../../../AssetStore/NewObjectFromScratch';

import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { useShopNavigation } from '../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/CustomObjectPackResults',
  component: CustomObjectPackResults,
  decorators: [paperDecorator],
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const navigationState = useShopNavigation();
  return (
    <FixedHeightFlexContainer height={500}>
      <AssetStoreStateProvider shopNavigationState={navigationState}>
        {children}
      </AssetStoreStateProvider>
    </FixedHeightFlexContainer>
  );
};

export const Default = () => (
  <Wrapper>
    <CustomObjectPackResults
      packTag="multitouch joysticks"
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(assetShortHeader: AssetShortHeader) => Promise<void>'.
      onAssetSelect={action('onAssetSelect')}
      onBack={action('onBack')}
      isAssetBeingInstalled={false}
    />
  </Wrapper>
);

export const Installing = () => (
  <Wrapper>
    <CustomObjectPackResults
      packTag="multitouch joysticks"
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '(assetShortHeader: AssetShortHeader) => Promise<void>'.
      onAssetSelect={action('onAssetSelect')}
      onBack={action('onBack')}
      isAssetBeingInstalled
    />
  </Wrapper>
);
