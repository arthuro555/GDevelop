import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ResourceStore/ResourceStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/ResourceStoreContext.tsx', but '--jsx' is not set.
import { ResourceStoreStateProvider } from '../../../../AssetStore/ResourceStore/ResourceStoreContext';
// @ts-expect-error - TS6142 - Module '../../../../AssetStore/ResourceStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/index.tsx', but '--jsx' is not set.
import { ResourceStore } from '../../../../AssetStore/ResourceStore';

export default {
  title: 'AssetStore/ResourceStore',
  component: ResourceStore,
  decorators: [paperDecorator],
};

export const ImageResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="image" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);

export const AudioResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="audio" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);

export const FontResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="font" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);

export const SvgResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="svg" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);

export const Model3DResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="model3D" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);

export const AtlasResource = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ResourceStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ResourceStore onChoose={action('onChoose')} resourceKind="atlas" />
    </ResourceStoreStateProvider>
  </FixedHeightFlexContainer>
);
