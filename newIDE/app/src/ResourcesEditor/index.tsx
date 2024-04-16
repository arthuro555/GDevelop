// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../ResourcesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesList/index.tsx', but '--jsx' is not set.
import ResourcesList from '../ResourcesList';
import ResourcePropertiesEditor, {
  ResourcePropertiesEditorInterface,
// @ts-expect-error - TS6142 - Module './ResourcePropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesEditor/ResourcePropertiesEditor/index.tsx', but '--jsx' is not set.
} from './ResourcePropertiesEditor';
// @ts-expect-error - TS6142 - Module './Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesEditor/Toolbar.tsx', but '--jsx' is not set.
import Toolbar from './Toolbar';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import EditorMosaic, { EditorMosaicInterface } from '../UI/EditorMosaic';
import ResourcesLoader from '../ResourcesLoader';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../Utils/OptionalRequire';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import {
  ResourceManagementProps,
  ResourceKind,
} from '../ResourcesList/ResourceSource';
import { FileMetadata } from '../ProjectsStorage';
import { getResourceFilePathStatus } from '../ResourcesList/ResourceUtils';
import type { StorageProvider } from '../ProjectsStorage';
import {
  registerOnResourceExternallyChangedCallback,
  unregisterOnResourceExternallyChangedCallback,
} from '../MainFrame/ResourcesWatcher';

const gd: libGDevelop = global.gd;

// It's important to use remote and not electron for folder actions,
// otherwise they will be opened in the background.
// See https://github.com/electron/electron/issues/4349#issuecomment-777475765
const remote = optionalRequire('@electron/remote');
const path = optionalRequire('path');
const styles = {
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
} as const;

type State = {
  selectedResource: gdResource | null | undefined
};

type Props = {
  setToolbar: (arg1: React.ReactNode) => void,
  project: gdProject,
  onDeleteResource: (resource: gdResource, cb: (arg1: boolean) => void) => void,
  onRenameResource: (resource: gdResource, newName: string, cb: (arg1: boolean) => void) => void,
  resourceManagementProps: ResourceManagementProps,
  fileMetadata: FileMetadata | null | undefined,
  storageProvider: StorageProvider
};

const initialMosaicEditorNodes = {
  direction: 'row',
  first: 'properties',
  second: 'resources-list',
  splitPercentage: 66,
} as const;

export default class ResourcesEditor extends React.Component<Props, State> {
  static defaultProps = {
    setToolbar: () => {},
  };
  resourceExternallyChangedCallbackId: string | null | undefined;
  editorMosaic: EditorMosaicInterface | null | undefined = null;
  _propertiesEditor: ResourcePropertiesEditorInterface | null | undefined = null;
  _resourcesList: ResourcesList | null | undefined = null;
  resourcesLoader = ResourcesLoader;
  state = {
    selectedResource: null,
  };

  componentDidMount() {
    this.resourceExternallyChangedCallbackId = registerOnResourceExternallyChangedCallback(
      this.onResourceExternallyChanged.bind(this)
    );
  }
  componentWillUnmount() {
    unregisterOnResourceExternallyChangedCallback(
      this.resourceExternallyChangedCallbackId
    );
  }

  refreshResourcesList() {
    if (this._resourcesList) this._resourcesList.forceUpdate();
  }

  updateToolbar = () => {
    const openedEditorNames = this.editorMosaic
      ? this.editorMosaic.getOpenedEditorNames()
      : [];

    this.props.setToolbar(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Toolbar
        onOpenProjectFolder={this.openProjectFolder}
        canOpenProjectFolder={
          !!remote &&
          !!this.props.fileMetadata &&
          this.props.storageProvider.internalName === 'LocalFile'
        }
        onToggleProperties={this.toggleProperties}
        isPropertiesShown={openedEditorNames.includes('properties')}
        canDelete={!!this.state.selectedResource}
        onDeleteSelection={() =>
          this.deleteResource(this.state.selectedResource)
        }
      />
    );
  };

  deleteResource = (resource?: gdResource | null) => {
    const { project, onDeleteResource } = this.props;
    if (!resource) return;

    const answer = Window.showConfirmDialog(
      "Are you sure you want to remove this resource? This can't be undone."
    );
    if (!answer) return;

    onDeleteResource(resource, doRemove => {
      if (!doRemove || !resource) return;

      project.getResourcesManager().removeResource(resource.getName());
      this.setState(
        {
          selectedResource: null,
        },
        () => {
          // Force update of the resources list as otherwise it could render
          // resource that was just deleted.
          if (this._resourcesList) this._resourcesList.forceUpdateList();
          this.updateToolbar();
        }
      );
    });
  };

  _removeUnusedResources = (resourceKind: ResourceKind) => {
    const { project } = this.props;
    const selectedResourceName = this.state.selectedResource
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'never'.
      ? this.state.selectedResource.getName()
      : null;

    const removedResourceNames = gd.ProjectResourcesAdder.getAllUseless(
      project,
      resourceKind
    ).toJSArray();
    console.info(
      `Removing ${
        removedResourceNames.length
      } unused ${resourceKind} resource(s):`,
      removedResourceNames
    );

    gd.ProjectResourcesAdder.removeAllUseless(project, resourceKind);

    // The selectedResource might be *invalid* now if it was removed.
    // Be sure to drop the reference to it if that's the case.
    if (removedResourceNames.includes(selectedResourceName)) {
      this._onResourceSelected(null);
    }

    // Force update of the resources list as otherwise it could render
    // resources that were just deleted.
    if (this._resourcesList) {
      this._resourcesList.forceUpdateList();
    }
  };

  _removeAllResourcesWithInvalidPath = () => {
    const { project } = this.props;
    const selectedResourceName = this.state.selectedResource
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'never'.
      ? this.state.selectedResource.getName()
      : null;

    const resourcesManager = project.getResourcesManager();
    const removedResourceNames = resourcesManager
      .getAllResourceNames()
      .toJSArray()
// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
      .filter(resourceName => {
        return getResourceFilePathStatus(project, resourceName) === 'error';
      });

// @ts-expect-error - TS7006 - Parameter 'resourceName' implicitly has an 'any' type.
    removedResourceNames.forEach(resourceName => {
      resourcesManager.removeResource(resourceName);
      console.info('Removed due to invalid path: ' + resourceName);
    });

    // The selectedResource might be *invalid* now if it was removed.
    // Be sure to drop the reference to it if that's the case.
    if (removedResourceNames.includes(selectedResourceName)) {
      this._onResourceSelected(null);
    }

    // Force update of the resources list as otherwise it could render
    // resources that were just deleted.
    if (this._resourcesList) {
      this._resourcesList.forceUpdateList();
    }
  };

  openProjectFolder = () => {
    if (remote)
      remote.shell.openPath(path.dirname(this.props.project.getProjectFile()));
  };

  toggleProperties = () => {
    if (!this.editorMosaic) return;
    this.editorMosaic.toggleEditor('properties', 'start', 66, 'column');
  };

  _onResourceSelected = (selectedResource?: gdResource | null) => {
    this.setState(
      {
        selectedResource,
      },
      () => {
        if (this._propertiesEditor) this._propertiesEditor.forceUpdate();
        this.updateToolbar();
      }
    );
  };

  onResourceExternallyChanged = (resourceInfo: {
    identifier: string
  }) => {
    if (this._propertiesEditor) {
      this._propertiesEditor.forceUpdate();
    }
    this.refreshResourcesList();
  };

  render() {
    const {
      project,
      onRenameResource,
      resourceManagementProps,
      fileMetadata,
    } = this.props;
    const { selectedResource } = this.state;
    const resourcesActionsMenuBuilder = resourceManagementProps.getStorageProviderResourceOperations();

    const editors = {
      properties: {
        type: 'secondary',
        title: t`Properties`,
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResourcePropertiesEditor
// @ts-expect-error - TS2339 - Property 'ptr' does not exist on type 'never'.
            key={selectedResource ? selectedResource.ptr : undefined}
            resources={selectedResource ? [selectedResource] : []}
            project={project}
            resourcesLoader={this.resourcesLoader}
// @ts-expect-error - TS7006 - Parameter 'propertiesEditor' implicitly has an 'any' type.
            ref={propertiesEditor =>
              (this._propertiesEditor = propertiesEditor)
            }
            onResourcePathUpdated={() => {
              if (this._resourcesList) {
                this._resourcesList.checkMissingPaths();
              }
            }}
            resourceManagementProps={resourceManagementProps}
          />
        ),
      },
      'resources-list': {
        type: 'primary',
        noTitleBar: true,
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ResourcesList
            project={project}
            fileMetadata={fileMetadata}
            onDeleteResource={this.deleteResource}
            onRenameResource={onRenameResource}
            onSelectResource={this._onResourceSelected}
            selectedResource={selectedResource}
// @ts-expect-error - TS7006 - Parameter 'resourcesList' implicitly has an 'any' type.
            ref={resourcesList => (this._resourcesList = resourcesList)}
            onRemoveUnusedResources={this._removeUnusedResources}
            onRemoveAllResourcesWithInvalidPath={
              this._removeAllResourcesWithInvalidPath
            }
            getResourceActionsSpecificToStorageProvider={
              resourcesActionsMenuBuilder
            }
          />
        ),
      },
    } as const;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.container}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'getDefaultEditorMosaicNode' implicitly has an 'any' type. | TS7031 - Binding element 'setDefaultEditorMosaicNode' implicitly has an 'any' type. */}
          {({ getDefaultEditorMosaicNode, setDefaultEditorMosaicNode }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EditorMosaic
              editors={editors}
// @ts-expect-error - TS7006 - Parameter 'editorMosaic' implicitly has an 'any' type.
              ref={editorMosaic => (this.editorMosaic = editorMosaic)}
              initialNodes={
                getDefaultEditorMosaicNode('resources-editor') ||
                initialMosaicEditorNodes
              }
              onOpenedEditorsChanged={this.updateToolbar}
// @ts-expect-error - TS7006 - Parameter 'node' implicitly has an 'any' type.
              onPersistNodes={node =>
                setDefaultEditorMosaicNode('resources-editor', node)
              }
            />
          )}
        </PreferencesContext.Consumer>
      </div>
    );
  }
}
