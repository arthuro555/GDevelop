import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
import { Exporter } from '../../../../ExportAndShare/ShareDialog';

import {
  ExporterSection,
  ExporterSubSection,
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/ShareDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/index.tsx', but '--jsx' is not set.
} from '../../../../ExportAndShare/ShareDialog';
// @ts-expect-error - TS6142 - Module '../../../../ExportAndShare/ShareDialog/PublishHome' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/ShareDialog/PublishHome.tsx', but '--jsx' is not set.
import PublishHome from '../../../../ExportAndShare/ShareDialog/PublishHome';
import GDevelopJsInitializerDecorator, {
  testProject,
// @ts-expect-error - TS6142 - Module '../../../GDevelopJsInitializerDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/GDevelopJsInitializerDecorator.tsx', but '--jsx' is not set.
} from '../../../GDevelopJsInitializerDecorator';
// @ts-expect-error - TS6142 - Module '../../../../fixtures/TestExporters' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/fixtures/TestExporters.tsx', but '--jsx' is not set.
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
  const [
    chosenExporterSection,
    setChosenExporterSection,
  ] = React.useState<ExporterSection | null | undefined>(null);
  const [
    chosenExporterSubSection,
    setChosenExporterSubSection,
  ] = React.useState<ExporterSubSection | null | undefined>(null);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <PublishHome
      project={testProject.project}
      onSaveProject={action('onSaveProject')}
      isSavingProject={false}
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
  const [
    chosenExporterSection,
    setChosenExporterSection,
  ] = React.useState<ExporterSection | null | undefined>('browser');
  const [
    chosenExporterSubSection,
    setChosenExporterSubSection,
  ] = React.useState<ExporterSubSection | null | undefined>('online');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PublishHome
        project={testProject.project}
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
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
  const [
    chosenExporterSection,
    setChosenExporterSection,
  ] = React.useState<ExporterSection | null | undefined>('browser');
  const [
    chosenExporterSubSection,
    setChosenExporterSubSection,
  ] = React.useState<ExporterSubSection | null | undefined>('online');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PublishHome
        project={testProject.project}
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
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
  const [
    chosenExporterSection,
    setChosenExporterSection,
  ] = React.useState<ExporterSection | null | undefined>('browser');
  const [
    chosenExporterSubSection,
    setChosenExporterSubSection,
  ] = React.useState<ExporterSubSection | null | undefined>('online');
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeStartupAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <PublishHome
        project={testProject.project}
        onSaveProject={action('onSaveProject')}
        isSavingProject={false}
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
