import {action} from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../ProjectsStorage/ProjectStorageProviders' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ProjectsStorage/ProjectStorageProviders.tsx', but '--jsx' is not set.
import { emptyStorageProvider } from '../ProjectsStorage/ProjectStorageProviders';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
import fakeResourceExternalEditors from './FakeResourceExternalEditors';

/**
 * Fake "resource management props" to be used in Storybook.
 */
const fakeResourceManagementProps: ResourceManagementProps = {
  getStorageProvider: () => emptyStorageProvider,
  onFetchNewlyAddedResources: async () => {},
  resourceSources: [],
  onChooseResource: () => {
    action('onChooseResource');
    return Promise.reject('Unimplemented');
  },
  resourceExternalEditors: fakeResourceExternalEditors,
  getStorageProviderResourceOperations: () => null,
};

export default fakeResourceManagementProps;
