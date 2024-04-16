import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreStateProvider } from '../../../AssetStore/AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/NewObjectFromScratch' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/NewObjectFromScratch.tsx', but '--jsx' is not set.
import { CustomObjectPackResults } from '../../../AssetStore/NewObjectFromScratch';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { useShopNavigation } from '../../../AssetStore/AssetStoreNavigator';

export default {
  title: 'AssetStore/CustomObjectPackResults',
  component: CustomObjectPackResults,
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
    <FixedHeightFlexContainer height={500}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AssetStoreStateProvider shopNavigationState={navigationState}>
        {children}
      </AssetStoreStateProvider>
    </FixedHeightFlexContainer>
  );
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CustomObjectPackResults
      packTag="multitouch joysticks"
      onAssetSelect={action('onAssetSelect')}
      onBack={action('onBack')}
      isAssetBeingInstalled={false}
    />
  </Wrapper>
);

export const Installing = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Wrapper>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <CustomObjectPackResults
      packTag="multitouch joysticks"
      onAssetSelect={action('onAssetSelect')}
      onBack={action('onBack')}
      isAssetBeingInstalled
    />
  </Wrapper>
);
