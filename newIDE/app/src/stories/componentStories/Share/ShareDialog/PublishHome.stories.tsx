import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../../PaperDecorator';

import { Exporter } from '../../../../ExportAndShare/ShareDialog';

import {
  ExporterSection,
  ExporterSubSection,
} from '../../../../ExportAndShare/ShareDialog';

import PublishHome from '../../../../ExportAndShare/ShareDialog/PublishHome';
import GDevelopJsInitializerDecorator, {
  testProject,
} from '../../../GDevelopJsInitializerDecorator';

import { fakeBrowserOnlineWebExportPipeline } from '../../../../fixtures/TestExporters';
import AuthenticatedUserContext from '../../../../Profile/AuthenticatedUserContext';
import { fakeStartupAuthenticatedUser } from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Share/PublishHome',
  component: PublishHome,
  decorators: [paperDecorator, GDevelopJsInitializerDecorator],
};

const onlineWebExporter: Exporter = {
  key: 'onlinewebexport',
  tabName: 'Web',
  name: 'Web',
  helpPage: '/publishing/web',
  exportPipeline: fakeBrowserOnlineWebExportPipeline,
};

export const Default = () => {
  const [chosenExporterSection, setChosenExporterSection] = React.useState<
    ExporterSection | null | undefined
  >(null);
  const [chosenExporterSubSection, setChosenExporterSubSection] =
    React.useState<ExporterSubSection | null | undefined>(null);
  return (
    <PublishHome
      project={testProject.project}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
      onSaveProject={action('onSaveProject')}
      isSavingProject={false}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
      onGameUpdated={action('onGameUpdated')}
      onChangeSubscription={action('onChangeSubscription')}
      isNavigationDisabled={false}
      setIsNavigationDisabled={action('setIsNavigationDisabled')}
      selectedExporter={null}
      onChooseSection={setChosenExporterSection}
      onChooseSubSection={setChosenExporterSubSection}
      chosenSection={chosenExporterSection}
      chosenSubSection={chosenExporterSubSection}
      game={null}
      gameAvailabilityError={null}
    />
  );
};

export const OnlineWebExporterSelected = () => {
  const [chosenExporterSection, setChosenExporterSection] = React.useState<
    ExporterSection | null | undefined
  >('browser');
  const [chosenExporterSubSection, setChosenExporterSubSection] =
    React.useState<ExporterSubSection | null | undefined>('online');
  return (
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
      <PublishHome
        project={testProject.project}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onGameUpdated={action('onGameUpdated')}
        onChangeSubscription={action('onChangeSubscription')}
        isNavigationDisabled={false}
        setIsNavigationDisabled={action('setIsNavigationDisabled')}
        selectedExporter={onlineWebExporter}
        onChooseSection={setChosenExporterSection}
        onChooseSubSection={setChosenExporterSubSection}
        chosenSection={chosenExporterSection}
        chosenSubSection={chosenExporterSubSection}
        game={null}
        gameAvailabilityError={null}
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const OnlineWebExporterSelectedForGameNotOwned = () => {
  const [chosenExporterSection, setChosenExporterSection] = React.useState<
    ExporterSection | null | undefined
  >('browser');
  const [chosenExporterSubSection, setChosenExporterSubSection] =
    React.useState<ExporterSubSection | null | undefined>('online');
  return (
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
      <PublishHome
        project={testProject.project}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onGameUpdated={action('onGameUpdated')}
        onChangeSubscription={action('onChangeSubscription')}
        isNavigationDisabled={false}
        setIsNavigationDisabled={action('setIsNavigationDisabled')}
        selectedExporter={onlineWebExporter}
        onChooseSection={setChosenExporterSection}
        onChooseSubSection={setChosenExporterSubSection}
        chosenSection={chosenExporterSection}
        chosenSubSection={chosenExporterSubSection}
        game={null}
        gameAvailabilityError="not-owned"
      />
    </AuthenticatedUserContext.Provider>
  );
};

export const OnlyOnlineWebExporter = () => {
  const [chosenExporterSection, setChosenExporterSection] = React.useState<
    ExporterSection | null | undefined
  >('browser');
  const [chosenExporterSubSection, setChosenExporterSubSection] =
    React.useState<ExporterSubSection | null | undefined>('online');
  return (
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
      <PublishHome
        project={testProject.project}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
// @ts-expect-error - TS2322 - Type 'HandlerFunction' is not assignable to type '() => Promise<void>'.
        onGameUpdated={action('onGameUpdated')}
        onChangeSubscription={action('onChangeSubscription')}
        isNavigationDisabled={false}
        setIsNavigationDisabled={action('setIsNavigationDisabled')}
        selectedExporter={onlineWebExporter}
        onChooseSection={setChosenExporterSection}
        onChooseSubSection={setChosenExporterSubSection}
        chosenSection={chosenExporterSection}
        chosenSubSection={chosenExporterSubSection}
        game={null}
        gameAvailabilityError={null}
        showOnlineWebExporterOnly
      />
    </AuthenticatedUserContext.Provider>
  );
};
