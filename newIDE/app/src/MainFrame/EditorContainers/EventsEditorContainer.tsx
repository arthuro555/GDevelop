import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../EventsSheet' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/index.tsx', but '--jsx' is not set.
import EventsSheet, { EventsSheetInterface } from '../../EventsSheet';
import { sendEventsExtractedAsFunction } from '../../Utils/Analytics/EventSender';
import {
  RenderEditorContainerProps,
  RenderEditorContainerPropsWithRef,
} from './BaseEditor';

export class EventsEditorContainer extends React.Component<RenderEditorContainerProps> {
  editor: EventsSheetInterface | null | undefined;

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // We stop updates when the component is inactive.
    // If it's active, was active or becoming active again we let update propagate.
    // Especially important to note that when becoming inactive, a "last" update is allowed.
    return this.props.isActive || nextProps.isActive;
  }

  componentDidMount() {
    if (this.props.isActive) {
      const layout = this.getLayout();
      this.props.setPreviewedLayout(layout ? layout.getName() : null);
    }
  }

  componentDidUpdate(prevProps: RenderEditorContainerProps) {
    if (!prevProps.isActive && this.props.isActive) {
      const layout = this.getLayout();
      this.props.setPreviewedLayout(layout ? layout.getName() : null);
    }
  }

  getProject(): gdProject | null | undefined {
    return this.props.project;
  }

  updateToolbar() {
    if (this.editor) this.editor.updateToolbar();
  }

  forceUpdateEditor() {
    // No updates to be done.
  }

  getLayout(): gdLayout | null | undefined {
    const { project, projectItemName } = this.props;
    if (
      !project ||
      !projectItemName ||
      !project.hasLayoutNamed(projectItemName)
    )
      return null;

    return project.getLayout(projectItemName);
  }

  onBeginCreateEventsFunction = () => {
    sendEventsExtractedAsFunction({
      step: 'begin',
      parentEditor: 'scene-events-editor',
    });
  };

  onCreateEventsFunction = (extensionName: any, eventsFunction: any) => {
    this.props.onCreateEventsFunction(
      extensionName,
      eventsFunction,
      'scene-events-editor'
    );
  };

  render() {
    const { project, projectItemName } = this.props;
    const layout = this.getLayout();
    if (!layout || !project) {
      //TODO: Error component
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <div>No layout called {projectItemName} found!</div>;
    }

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <EventsSheet
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
        ref={editor => (this.editor = editor)}
        setToolbar={this.props.setToolbar}
        onOpenLayout={this.props.onOpenLayout}
        resourceManagementProps={this.props.resourceManagementProps}
        openInstructionOrExpression={this.props.openInstructionOrExpression}
        onCreateEventsFunction={this.onCreateEventsFunction}
        onBeginCreateEventsFunction={this.onBeginCreateEventsFunction}
        unsavedChanges={this.props.unsavedChanges}
        project={project}
        scope={{
          project,
          layout,
        }}
        globalObjectsContainer={project}
        objectsContainer={layout}
        events={layout.getEvents()}
        onOpenExternalEvents={this.props.onOpenExternalEvents}
        isActive={this.props.isActive}
      />
    );
  }
}

export const renderEventsEditorContainer = (
  props: RenderEditorContainerPropsWithRef
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <EventsEditorContainer {...props} />;
