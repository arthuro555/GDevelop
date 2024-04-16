import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../EffectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EffectsList/index.tsx', but '--jsx' is not set.
import EffectsList from '../../../EffectsList';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/DragAndDrop/DragAndDropContextProvider'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragAndDropContextProvider.js' implicitly has an 'any' type.
import DragAndDropContextProvider from '../../../UI/DragAndDrop/DragAndDropContextProvider';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import fakeResourceManagementProps from '../../FakeResourceManagement';
// @ts-expect-error - TS6142 - Module '../../../ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import { emptyStorageProvider } from '../../../ProjectsStorage/ProjectStorageProviders';
import fakeResourceExternalEditors from '../../FakeResourceExternalEditors';

export const withSomeEffectsForAMixedLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="2d+3d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.layerWithEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withSomeEffectsForA2DLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="2d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.layerWith2DEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

// TODO Add a story with 2 effects of the same type that should be unique.
// Note that this can't be done until the list of unique effect is hardcoded.

export const withSomeEffectsForA3DLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="3d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.layerWith3DEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withSomeEffectsForAnObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="object"
        layerRenderingType="2d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.spriteObjectWithEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withAnEffectWithoutEffectTypeForALayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="2d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.layerWithEffectWithoutEffectType.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withoutEffectsForAMixedLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="2d+3d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.layerWithoutEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withoutEffectsForA2DLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="2d"
        project={testProject.project}
        resourceManagementProps={{
          getStorageProvider: () => emptyStorageProvider,
          getStorageProviderResourceOperations: () => null,
          onFetchNewlyAddedResources: async () => {},
          resourceSources: [],
          onChooseResource: () => Promise.reject('Unimplemented'),
          resourceExternalEditors: fakeResourceExternalEditors,
        }}
        effectsContainer={testProject.layerWithoutEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withoutEffectsForA3DLayer = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="layer"
        layerRenderingType="3d"
        project={testProject.project}
        resourceManagementProps={{
          getStorageProvider: () => emptyStorageProvider,
          getStorageProviderResourceOperations: () => null,
          onFetchNewlyAddedResources: async () => {},
          resourceSources: [],
          onChooseResource: () => Promise.reject('Unimplemented'),
          resourceExternalEditors: fakeResourceExternalEditors,
        }}
        effectsContainer={testProject.layerWithoutEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export const withoutEffectsForAnObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <DragAndDropContextProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <EffectsList
        target="object"
        layerRenderingType="2d"
        project={testProject.project}
        resourceManagementProps={fakeResourceManagementProps}
        effectsContainer={testProject.spriteObjectWithoutEffects.getEffects()}
        onEffectsRenamed={action('effects renamed')}
        onEffectsUpdated={action('effects updated')}
      />
    </FixedHeightFlexContainer>
  </DragAndDropContextProvider>
);

export default {
  title: 'ObjectEditor/EffectsList',
  component: EffectsList,
  decorators: [paperDecorator],
};
