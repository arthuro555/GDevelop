import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:
// @ts-expect-error - TS6142 - Module '../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
import { testProject } from '../../GDevelopJsInitializerDecorator';

// @ts-expect-error - TS6142 - Module '../../../BehaviorsEditor/NewBehaviorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/NewBehaviorDialog.tsx', but '--jsx' is not set.
import NewBehaviorDialog from '../../../BehaviorsEditor/NewBehaviorDialog';
// @ts-expect-error - TS6142 - Module '../../../AssetStore/BehaviorStore/BehaviorStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/BehaviorStore/BehaviorStoreContext.tsx', but '--jsx' is not set.
import { BehaviorStoreStateProvider } from '../../../AssetStore/BehaviorStore/BehaviorStoreContext';
import { GDevelopAssetApi } from '../../../Utils/GDevelopServices/ApiConfigs';
import { fakeBehaviorsRegistry } from '../../../fixtures/GDevelopServicesTestData/FakeBehaviorsRegistry';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import PreferencesContext, {
  initialPreferences,
  Preferences,
// @ts-expect-error - TS6142 - Module '../../../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
} from '../../../MainFrame/Preferences/PreferencesContext';

export default {
  title: 'ObjectEditor/NewBehaviorDialog',
  component: NewBehaviorDialog,
};

const apiDataServerSideError = {
  mockData: [
    {
      url: `${GDevelopAssetApi.baseUrl}/behaviors-registry`,
      method: 'GET',
      status: 500,
      response: { data: 'status' },
    },
  ],
} as const;

const apiDataFakeBehaviors = {
  mockData: [
    {
      url: `${GDevelopAssetApi.baseUrl}/behaviors-registry`,
      method: 'GET',
      status: 200,
      response: fakeBehaviorsRegistry,
    },
  ],
} as const;

export const DefaultForSpriteObject = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <BehaviorStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <NewBehaviorDialog
      open
      project={testProject.project}
      objectType={'Sprite'}
      onClose={action('on close')}
      onChoose={action('on choose')}
      objectBehaviorsTypes={[
        'DestroyOutsideBehavior::DestroyOutside',
        'PlatformBehavior::PlatformBehavior',
      ]}
    />
  </BehaviorStoreStateProvider>
);
DefaultForSpriteObject.parameters = apiDataFakeBehaviors;

export const WithCommunityExtensions = () => {
  const [showCommunityExtensions, setShowCommunityExtensions] = React.useState(
    true
  );
  const preferences: Preferences = {
    ...initialPreferences,
    values: { ...initialPreferences.values, showCommunityExtensions },
    setShowCommunityExtensions,
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PreferencesContext.Provider value={preferences}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <BehaviorStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <NewBehaviorDialog
            open
            project={testProject.project}
            objectType={'Sprite'}
            onClose={action('on close')}
            onChoose={action('on choose')}
            objectBehaviorsTypes={[
              'DestroyOutsideBehavior::DestroyOutside',
              'PlatformBehavior::PlatformBehavior',
            ]}
          />
        </BehaviorStoreStateProvider>
      </FixedHeightFlexContainer>
    </PreferencesContext.Provider>
  );
};
WithCommunityExtensions.parameters = apiDataFakeBehaviors;

export const WithServerSideErrors = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <FixedHeightFlexContainer height={400}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <BehaviorStoreStateProvider>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <NewBehaviorDialog
        open
        project={testProject.project}
        objectType={'Sprite'}
        onClose={action('on close')}
        onChoose={action('on choose')}
        objectBehaviorsTypes={[
          'DestroyOutsideBehavior::DestroyOutside',
          'PlatformBehavior::PlatformBehavior',
        ]}
      />
    </BehaviorStoreStateProvider>
  </FixedHeightFlexContainer>
);
WithServerSideErrors.parameters = apiDataServerSideError;
