// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../../EventsSheet' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/index.tsx', but '--jsx' is not set.
import EventsSheet, { EventsSheetInterface } from '../../EventsSheet';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/PlaceholderMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderMessage.tsx', but '--jsx' is not set.
import PlaceholderMessage from '../../UI/PlaceholderMessage';
import {
  RenderEditorContainerProps,
  RenderEditorContainerPropsWithRef,
} from './BaseEditor';
import ExternalPropertiesDialog, {
  ExternalProperties,
// @ts-expect-error - TS6142 - Module './ExternalPropertiesDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/EditorContainers/ExternalPropertiesDialog.tsx', but '--jsx' is not set.
} from './ExternalPropertiesDialog';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
import { sendEventsExtractedAsFunction } from '../../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/TutorialButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TutorialButton/index.tsx', but '--jsx' is not set.
import TutorialButton from '../../UI/TutorialButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/EditScene'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/EditScene.js' implicitly has an 'any' type.
import EditSceneIcon from '../../UI/CustomSvgIcons/EditScene';
import {
  registerOnResourceExternallyChangedCallback,
  unregisterOnResourceExternallyChangedCallback,
} from '../ResourcesWatcher';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
} as const;

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
const editSceneIconReactNode = <EditSceneIcon />;

type State = {
  externalPropertiesDialogOpen: boolean
};

export class ExternalEventsEditorContainer extends React.Component<RenderEditorContainerProps, State> {
  editor: EventsSheetInterface | null | undefined;
  resourceExternallyChangedCallbackId: string | null | undefined;

  state = {
    externalPropertiesDialogOpen: false,
  };

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // We stop updates when the component is inactive.
    // If it's active, was active or becoming active again we let update propagate.
    // Especially important to note that when becoming inactive, a "last" update is allowed.
    return this.props.isActive || nextProps.isActive;
  }

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

  onResourceExternallyChanged = (resourceInfo: {
    identifier: string
  }) => {
    if (this.editor) this.editor.onResourceExternallyChanged(resourceInfo);
  };

  getProject(): gdProject | null | undefined {
    return this.props.project;
  }

  updateToolbar() {
    if (this.editor) this.editor.updateToolbar();
  }

  forceUpdateEditor() {
    // No updates to be done.
  }

  getExternalEvents(): gdExternalEvents | null | undefined {
    const { project, projectItemName } = this.props;
    if (!project || !projectItemName) return null;

    if (!project.hasExternalEventsNamed(projectItemName)) {
      return null;
    }
    return project.getExternalEvents(projectItemName);
  }

  getLayout(): gdLayout | null | undefined {
    const { project } = this.props;
    if (!project) return null;

    const layoutName = this.getAssociatedLayoutName();
    if (!layoutName) return null;

    return project.getLayout(layoutName);
  }

  getAssociatedLayoutName(): string | null | undefined {
    const { project } = this.props;
    if (!project) return null;

    const externalEvents = this.getExternalEvents();
    if (!externalEvents) return null;

    const layoutName = externalEvents.getAssociatedLayout();
    if (!project.hasLayoutNamed(layoutName)) {
      return null;
    }

    return layoutName;
  }

  saveExternalProperties = (externalProps: ExternalProperties) => {
    const externalEvents = this.getExternalEvents();
    if (!externalEvents) return;

    externalEvents.setAssociatedLayout(externalProps.layoutName);
    this.setState(
      {
        externalPropertiesDialogOpen: false,
      },
      () => this.updateToolbar()
    );
  };

  openExternalPropertiesDialog = () => {
    this.setState({
      externalPropertiesDialogOpen: true,
    });
  };

  onBeginCreateEventsFunction = () => {
    sendEventsExtractedAsFunction({
      step: 'begin',
      parentEditor: 'external-events-editor',
    });
  };

  onCreateEventsFunction = (extensionName: any, eventsFunction: any) => {
    this.props.onCreateEventsFunction(
      extensionName,
      eventsFunction,
      'external-events-editor'
    );
  };

  render() {
    const { project, projectItemName } = this.props;
    const externalEvents = this.getExternalEvents();
    const layout = this.getLayout();

    if (!externalEvents || !project) {
      //TODO: Error component
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <div>No external events called {projectItemName} found!</div>;
    }

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.container}>
        {layout && (
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
              externalEvents,
            }}
            globalObjectsContainer={project}
            objectsContainer={layout}
            events={externalEvents.getEvents()}
            onOpenSettings={this.openExternalPropertiesDialog}
            settingsIcon={editSceneIconReactNode}
            onOpenExternalEvents={this.props.onOpenExternalEvents}
            isActive={this.props.isActive}
          />
        )}
        {!layout && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                To edit the external events, choose the scene in which it will
                be included
              </Trans>
            </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Choose the scene</Trans>}
                primary
                onClick={this.openExternalPropertiesDialog}
              />
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line justifyContent="flex-start" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TutorialButton
                tutorialId="Intermediate-externals"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Watch tutorial</Trans>}
                renderIfNotFound={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <HelpButton helpPagePath="/interface/events-editor/external-events" />
                }
              />
            </Line>
          </PlaceholderMessage>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ExternalPropertiesDialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Configure the external events</Trans>}
          helpTexts={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              In order to use these external events, you still need to add a
              "Link" event in the events sheet of the corresponding scene
            </Trans>,
          ]}
          open={this.state.externalPropertiesDialogOpen}
          project={project}
          onChoose={this.saveExternalProperties}
          layoutName={this.getAssociatedLayoutName()}
          onClose={() => this.setState({ externalPropertiesDialogOpen: false })}
        />
      </div>
    );
  }
}

export const renderExternalEventsEditorContainer = (
  props: RenderEditorContainerPropsWithRef
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <ExternalEventsEditorContainer {...props} />;
