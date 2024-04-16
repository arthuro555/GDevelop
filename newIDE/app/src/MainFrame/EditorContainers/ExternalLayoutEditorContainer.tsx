// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../SceneEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/SceneEditor/index.tsx', but '--jsx' is not set.
import SceneEditor from '../../SceneEditor';
import {
  serializeToJSObject,
  unserializeFromJSObject,
} from '../../Utils/Serializer';
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
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
import { prepareInstancesEditorSettings } from '../../InstancesEditor/InstancesEditorSettings';
// @ts-expect-error - TS6142 - Module '../../UI/TutorialButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TutorialButton/index.tsx', but '--jsx' is not set.
import TutorialButton from '../../UI/TutorialButton';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
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

type State = {
  externalPropertiesDialogOpen: boolean
};

export class ExternalLayoutEditorContainer extends React.Component<RenderEditorContainerProps, State> {
  editor: SceneEditor | null | undefined;
  resourceExternallyChangedCallbackId: string | null | undefined;
  state = {
    externalPropertiesDialogOpen: false,
  };

  getProject(): gdProject | null | undefined {
    return this.props.project;
  }

  shouldComponentUpdate(nextProps: RenderEditorContainerProps) {
    // This optimization is a bit more cautious than the traditional one, to still allow
    // children, and in particular SceneEditor and InstancesEditor, to be notified when isActive
    // goes from true to false (in which case PIXI rendering is halted). If isActive was false
    // and remains false, it's safe to stop update here (PIXI rendering is already halted).
    return this.props.isActive || nextProps.isActive;
  }

  componentDidMount() {
    if (this.props.isActive) {
      const { projectItemName } = this.props;
      const layout = this.getLayout();
      this.props.setPreviewedLayout(
        layout ? layout.getName() : null,
        projectItemName
      );
    }
    this.resourceExternallyChangedCallbackId = registerOnResourceExternallyChangedCallback(
      this.onResourceExternallyChanged.bind(this)
    );
  }
  componentWillUnmount() {
    unregisterOnResourceExternallyChangedCallback(
      this.resourceExternallyChangedCallbackId
    );
  }

  componentDidUpdate(prevProps: RenderEditorContainerProps) {
    if (!prevProps.isActive && this.props.isActive) {
      const { projectItemName } = this.props;
      const layout = this.getLayout();
      this.props.setPreviewedLayout(
        layout ? layout.getName() : null,
        projectItemName
      );
    }
  }

  onResourceExternallyChanged(resourceInfo: {
    identifier: string
  }) {
    const { editor } = this;
    if (editor) {
      editor.onResourceExternallyChanged(resourceInfo);
    }
  }

  updateToolbar() {
    if (this.editor) this.editor.updateToolbar();
  }

  forceUpdateEditor() {
    const { editor } = this;
    if (editor) {
      editor.forceUpdateObjectsList();
      editor.forceUpdateObjectGroupsList();
      editor.forceUpdateLayersList();
    }
  }

  getExternalLayout(): gdExternalLayout | null | undefined {
    const { project, projectItemName } = this.props;
    if (!project || !projectItemName) return null;

    if (!project.hasExternalLayoutNamed(projectItemName)) {
      return null;
    }
    return project.getExternalLayout(projectItemName);
  }

  getLayout(): gdLayout | null | undefined {
    const { project } = this.props;
    if (!project) return null;

    const layoutName = this.getAssociatedLayoutName();
    if (!layoutName) return;

    return project.getLayout(layoutName);
  }

  getAssociatedLayoutName(): string | null | undefined {
    const { project } = this.props;
    if (!project) return null;

    const externalLayout = this.getExternalLayout();
    if (!externalLayout) return null;

    const layoutName = externalLayout.getAssociatedLayout();
    if (!project.hasLayoutNamed(layoutName)) {
      return null;
    }

    return layoutName;
  }

  saveExternalProperties = (externalProps: ExternalProperties) => {
    const externalLayout = this.getExternalLayout();
    if (!externalLayout) return;

    externalLayout.setAssociatedLayout(externalProps.layoutName);
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

  saveUiSettings = () => {
    const layout = this.getExternalLayout();
    const editor = this.editor;

    if (editor && layout) {
      unserializeFromJSObject(
        layout.getAssociatedEditorSettings(),
        editor.getInstancesEditorSettings()
      );
    }
  };

  render() {
    const { project, projectItemName, isActive } = this.props;
    const externalLayout = this.getExternalLayout();
    const layout = this.getLayout();

    if (!externalLayout || !project) {
      //TODO: Error component
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      return <div>No external layout called {projectItemName} found!</div>;
    }

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <div style={styles.container}>
        {layout && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <SceneEditor
            setToolbar={this.props.setToolbar}
            resourceManagementProps={this.props.resourceManagementProps}
            unsavedChanges={this.props.unsavedChanges}
            hotReloadPreviewButtonProps={this.props.hotReloadPreviewButtonProps}
// @ts-expect-error - TS7006 - Parameter 'editor' implicitly has an 'any' type.
            ref={editor => (this.editor = editor)}
            project={project}
            layout={layout}
            initialInstances={externalLayout.getInitialInstances()}
            getInitialInstancesEditorSettings={() =>
              prepareInstancesEditorSettings(
                serializeToJSObject(
                  externalLayout.getAssociatedEditorSettings()
                ),
                Math.max(
                  project.getGameResolutionWidth(),
                  project.getGameResolutionHeight()
                )
              )
            }
            onOpenEvents={this.props.onOpenEvents}
            onOpenMoreSettings={this.openExternalPropertiesDialog}
            isActive={isActive}
            canInstallPrivateAsset={this.props.canInstallPrivateAsset}
            openBehaviorEvents={this.props.openBehaviorEvents}
          />
        )}
        {!layout && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                To edit the external layout, choose the scene in which it will
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
          title={<Trans>Configure the external layout</Trans>}
          helpTexts={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              In order to see your objects in the scene, you need to add an
              action "Create objects from external layout" in your events sheet.
            </Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              You can also launch a preview from this external layout, but
              remember that it will still create objects from the scene, as well
              as trigger its events. Make sure to disable any action loading the
              external layout before doing so to avoid having duplicate objects!
            </Trans>,
          ]}
          open={this.state.externalPropertiesDialogOpen}
          project={project}
          layoutName={this.getAssociatedLayoutName()}
          onChoose={this.saveExternalProperties}
          onClose={() => this.setState({ externalPropertiesDialogOpen: false })}
        />
      </div>
    );
  }
}

export const renderExternalLayoutEditorContainer = (
  props: RenderEditorContainerPropsWithRef
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <ExternalLayoutEditorContainer {...props} />;
