import React from 'react';
import {
  RenderEditorContainerProps,
  RenderEditorContainerPropsWithRef,
} from './BaseEditor';
// @ts-expect-error - TS6142 - Module '../../ResourcesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ResourcesEditor/index.tsx', but '--jsx' is not set.
import ResourcesEditor from '../../ResourcesEditor';

export class ResourcesEditorContainer extends React.Component<RenderEditorContainerProps> {
  editor: ResourcesEditor | null | undefined;

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // We stop updates when the component is inactive.
    // If it's active, was active or becoming active again we let update propagate.
    // Especially important to note that when becoming inactive, a "last" update is allowed.
    return this.props.isActive || nextProps.isActive;
  }

  getProject(): gdProject | null | undefined {
    return this.props.project;
  }

  getLayout(): gdLayout | null | undefined {
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResourcesEditor
        setToolbar={this.props.setToolbar}
        onDeleteResource={this.props.onDeleteResource}
        onRenameResource={this.props.onRenameResource}
        resourceManagementProps={this.props.resourceManagementProps}
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
        ref={editor => (this.editor = editor)}
        fileMetadata={this.props.fileMetadata}
        project={project}
        storageProvider={this.props.storageProvider}
      />
    );
  }
}

export const renderResourcesEditorContainer = (
  props: RenderEditorContainerPropsWithRef
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <ResourcesEditorContainer {...props} />;
