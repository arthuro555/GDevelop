import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../ProjectCreation/ProjectGeneratingDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectCreation/ProjectGeneratingDialog.tsx', but '--jsx' is not set.
import ProjectGeneratingDialog from '../../../ProjectCreation/ProjectGeneratingDialog';
import UrlStorageProvider from '../../../ProjectsStorage/UrlStorageProvider';
import { GDevelopGenerationApi } from '../../../Utils/GDevelopServices/ApiConfigs';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import { fakeSilverAuthenticatedUser } from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Project Creation/ProjectGeneratingDialog',
  component: ProjectGeneratingDialog,
  decorators: [paperDecorator],
};

export const Generating = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ProjectGeneratingDialog
      storageProvider={UrlStorageProvider}
      onClose={() => action('on close')()}
      onCreate={() => action('on create')()}
      generatingProjectId="fake-generating-project-id"
      saveAsLocation={null}
    />
  );
};

export const Errored = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <AuthenticatedUserContext.Provider value={fakeSilverAuthenticatedUser}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ProjectGeneratingDialog
        storageProvider={UrlStorageProvider}
        onClose={() => action('on close')()}
        onCreate={() => action('on create')()}
        generatingProjectId="fake-generating-project-id"
        saveAsLocation={null}
      />
    </AuthenticatedUserContext.Provider>
  );
};
Errored.parameters = {
  mockData: [
    {
      url: `${
        GDevelopGenerationApi.baseUrl
      }/generated-project/fake-generating-project-id?userId=indie-user`,
      method: 'GET',
      status: 500,
      response: {},
      delay: 500,
    },
  ],
};
