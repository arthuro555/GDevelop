import * as React from 'react';
import { action } from '@storybook/addon-actions';

// Keep first as it creates the `global.gd` object:

import { testProject } from '../../GDevelopJsInitializerDecorator';

import NewBehaviorDialog from '../../../BehaviorsEditor/NewBehaviorDialog';

import { BehaviorStoreStateProvider } from '../../../AssetStore/BehaviorStore/BehaviorStoreContext';
import { GDevelopAssetApi } from '../../../Utils/GDevelopServices/ApiConfigs';
import { fakeBehaviorsRegistry } from '../../../fixtures/GDevelopServicesTestData/FakeBehaviorsRegistry';

import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import PreferencesContext, {
  initialPreferences,
  Preferences,
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
  <BehaviorStoreStateProvider>
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
  const [showCommunityExtensions, setShowCommunityExtensions] =
    React.useState(true);
  const preferences: Preferences = {
    ...initialPreferences,
// @ts-expect-error - TS2322 - Type '{ showCommunityExtensions: boolean; language: "en"; autoDownloadUpdates: true; themeName: "GDevelop default Dark"; codeEditorThemeName: "vs-dark"; hiddenAlertMessages: {}; hiddenTutorialHints: {}; ... 32 more ...; editorStateByProject: {}; }' is not assignable to type 'PreferencesValues'.
    values: { ...initialPreferences.values, showCommunityExtensions },
    setShowCommunityExtensions,
  };

  return (
    <PreferencesContext.Provider value={preferences}>
      <FixedHeightFlexContainer height={400}>
        <BehaviorStoreStateProvider>
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
  <FixedHeightFlexContainer height={400}>
    <BehaviorStoreStateProvider>
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
