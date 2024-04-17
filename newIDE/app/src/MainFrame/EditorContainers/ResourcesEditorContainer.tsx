import React from 'react';
import {
  RenderEditorContainerProps,
  RenderEditorContainerPropsWithRef,
} from './BaseEditor';

import ResourcesEditor from '../../ResourcesEditor';

export class ResourcesEditorContainer extends React.Component<RenderEditorContainerProps> {
  editor: ResourcesEditor | null | undefined;

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // We stop updates when the component is inactive.
    // If it's active, was active or becoming active again we let update propagate.
    // Especially important to note that when becoming inactive, a "last" update is allowed.
    return this.props.isActive || nextProps.isActive;
  }

  getProject(): gd.Project | null | undefined {
    return this.props.project;
  }

  getLayout(): gd.Layout | null | undefined {
    return null;
  }

  updateToolbar() {
    if (this.editor) this.editor.updateToolbar();
  }

  forceUpdateEditor() {
    // No updates to be done.
  }

  componentDidUpdate(prevProps: RenderEditorContainerProps) {
    if (
      this.editor &&
      this.props.isActive &&
      prevProps.isActive !== this.props.isActive
    )
      this.editor.refreshResourcesList();
  }

  render() {
    const { project } = this.props;
    if (!project) return null;

    return (
      <ResourcesEditor
        setToolbar={this.props.setToolbar}
        onDeleteResource={this.props.onDeleteResource}
        onRenameResource={this.props.onRenameResource}
        resourceManagementProps={this.props.resourceManagementProps}
        ref={(editor) => (this.editor = editor)}
        fileMetadata={this.props.fileMetadata}
        project={project}
        storageProvider={this.props.storageProvider}
      />
    );
  }
}

export const renderResourcesEditorContainer = (
  props: RenderEditorContainerPropsWithRef
) => <ResourcesEditorContainer {...props} />;
