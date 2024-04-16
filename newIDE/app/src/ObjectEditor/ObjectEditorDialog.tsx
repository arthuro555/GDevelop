// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
import ObjectsEditorService from './ObjectsEditorService';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../BehaviorsEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/BehaviorsEditor/index.tsx', but '--jsx' is not set.
import BehaviorsEditor from '../BehaviorsEditor';
// @ts-expect-error - TS6142 - Module '../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../UI/Tabs';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
// @ts-expect-error - TS6142 - Module '../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import { EditorProps } from './Editors/EditorProps.flow';
import { ResourceManagementProps } from '../ResourcesList/ResourceSource';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';
import useForceUpdate from '../Utils/UseForceUpdate';
import HotReloadPreviewButton, {
  HotReloadPreviewButtonProps,
// @ts-expect-error - TS6142 - Module '../HotReload/HotReloadPreviewButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/HotReload/HotReloadPreviewButton.tsx', but '--jsx' is not set.
} from '../HotReload/HotReloadPreviewButton';
// @ts-expect-error - TS6142 - Module '../EffectsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EffectsList/index.tsx', but '--jsx' is not set.
import EffectsList from '../EffectsList';
// @ts-expect-error - TS6142 - Module '../VariablesList/VariablesList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VariablesList/VariablesList.tsx', but '--jsx' is not set.
import VariablesList from '../VariablesList/VariablesList';
import { sendBehaviorsEditorShown } from '../Utils/Analytics/EventSender';
// @ts-expect-error - TS6142 - Module '../Hints/useDismissableTutorialMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Hints/useDismissableTutorialMessage.tsx', but '--jsx' is not set.
import useDismissableTutorialMessage from '../Hints/useDismissableTutorialMessage';
import useAlertDialog from '../UI/Alert/useAlertDialog';
// @ts-expect-error - TS6142 - Module '../UI/ErrorBoundary' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ErrorBoundary.tsx', but '--jsx' is not set.
import ErrorBoundary from '../UI/ErrorBoundary';

const gd: libGDevelop = global.gd;

export type ObjectEditorTab = 'properties' | 'behaviors' | 'variables' | 'effects';

type Props = {
  open: boolean,
  object: gdObject | null | undefined,
  onApply: () => void,
  onCancel: () => void,
  // Object renaming:
  onRename: (arg1: string) => void,
  getValidatedObjectOrGroupName: (arg1: string) => string,
  // Passed down to object editors:
  project: gdProject,
  layout?: gdLayout,
  onComputeAllVariableNames: () => Array<string>,
  resourceManagementProps: ResourceManagementProps,
  unsavedChanges?: UnsavedChanges,
  onUpdateBehaviorsSharedData: () => void,
  initialTab: ObjectEditorTab | null | undefined,
  // Passed down to the behaviors editor:
  eventsFunctionsExtension?: gdEventsFunctionsExtension,
  // Preview:
  hotReloadPreviewButtonProps: HotReloadPreviewButtonProps,
  openBehaviorEvents: (extensionName: string, behaviorName: string) => void
};

type InnerDialogProps = (Props) & {
  editorComponent: React.ComponentType<EditorProps> | null | undefined,
  objectName: string,
  helpPagePath: string | null | undefined,
  object: gdObject
};

const InnerDialog = (props: InnerDialogProps) => {
// @ts-expect-error - TS2339 - Property 'showConfirmation' does not exist on type 'void'.
  const { showConfirmation } = useAlertDialog();
  const { openBehaviorEvents } = props;
  const [currentTab, setCurrentTab] = React.useState<ObjectEditorTab>(props.initialTab || 'properties');
  const [objectName, setObjectName] = React.useState(props.objectName);
  const forceUpdate = useForceUpdate();
  const {
    onCancelChanges,
    notifyOfChange,
    hasUnsavedChanges,
    getOriginalContentSerializedElement,
  } = useSerializableObjectCancelableEditor({
    serializableObject: props.object,
    useProjectToUnserialize: props.project,
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel: props.onCancel,
    resetThenClearPersistentUuid: true,
  });

  // Don't use a memo for this because metadata from custom objects are built
  // from event-based object when extensions are refreshed after an extension
  // installation.
  const objectMetadata = gd.MetadataProvider.getObjectMetadata(
    props.project.getCurrentPlatform(),
    props.object.getType()
  );

  const EditorComponent: React.ComponentType<EditorProps> | null | undefined =
    props.editorComponent;

  const onApply = async () => {
    props.onApply();

    const changeset = gd.WholeProjectRefactorer.computeChangesetForVariablesContainer(
      props.project,
      getOriginalContentSerializedElement().getChild('variables'),
      props.object.getVariables()
    );
    if (changeset.hasRemovedVariables()) {
      // While we support refactoring that would remove all references (actions, conditions...)
      // it's both a bit dangerous for the user and we would need to show the user what
      // will be removed before doing so. For now, just clear the removed variables so they don't
      // trigger any refactoring.
      changeset.clearRemovedVariables();
    }

    gd.WholeProjectRefactorer.applyRefactoringForVariablesContainer(
      props.project,
      props.object.getVariables(),
      changeset
    );
    props.object.clearPersistentUuid();

    // Do the renaming *after* applying changes, as "withSerializableObject"
    // HOC will unserialize the object to apply modifications, which will
    // override the name.
    props.onRename(objectName);
  };

  const { DismissableTutorialMessage } = useDismissableTutorialMessage(
    'intro-variables'
  );

  React.useEffect(
    () => {
      if (currentTab === 'behaviors') {
        sendBehaviorsEditorShown({ parentEditor: 'object-editor-dialog' });
      }
    },
    [currentTab]
  );

  const askConfirmationAndOpenBehaviorEvents = React.useCallback(
// @ts-expect-error - TS7006 - Parameter 'extensionName' implicitly has an 'any' type. | TS7006 - Parameter 'behaviorName' implicitly has an 'any' type.
    async (extensionName, behaviorName) => {
      if (hasUnsavedChanges()) {
        const answer = await showConfirmation({
          title: t`Discard changes and open events`,
          message: t`You've made some changes here. Are you sure you want to discard them and open the behavior events?`,
          confirmButtonLabel: t`Yes, discard my changes`,
          dismissButtonLabel: t`Stay there`,
        });
        if (!answer) return;
      }
      onCancelChanges();
      openBehaviorEvents(extensionName, behaviorName);
    },
    [hasUnsavedChanges, onCancelChanges, openBehaviorEvents, showConfirmation]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Edit {objectName}</Trans>}
      key={props.object && props.object.ptr}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          onClick={onCancelChanges}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="apply"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          id="apply-button"
          primary
          onClick={onApply}
        />,
      ]}
      secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HelpButton key="help-button" helpPagePath={props.helpPagePath} />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <HotReloadPreviewButton
          key="hot-reload-preview-button"
          {...props.hotReloadPreviewButtonProps}
        />,
      ]}
      onRequestClose={onCancelChanges}
      onApply={onApply}
      open={props.open}
      fullHeight
      flexBody
      fixedContent={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Tabs
          value={currentTab}
          onChange={setCurrentTab}
          options={[
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Properties</Trans>,
              value: 'properties',
            },
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Behaviors</Trans>,
              value: 'behaviors',
              id: 'behaviors-tab',
            },
            {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label: <Trans>Variables</Trans>,
              value: 'variables',
            },
            objectMetadata.hasDefaultBehavior(
              'EffectCapability::EffectBehavior'
            )
              ? {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Effects</Trans>,
                  value: 'effects',
                }
              : null,
          ].filter(Boolean)}
        />
      }
      id="object-editor-dialog"
    >
      {currentTab === 'properties' && EditorComponent ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column
          noMargin
          expand
          useFullHeight={
            true /* Ensure editors with large/scrolling children won't grow outside of the dialog. */
          }
          noOverflowParent={
            true /* Ensure editors with large/scrolling children won't grow outside of the dialog. */
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EditorComponent
            objectConfiguration={props.object.getConfiguration()}
            project={props.project}
            layout={props.layout}
            object={props.object}
            resourceManagementProps={props.resourceManagementProps}
            onSizeUpdated={
              forceUpdate /*Force update to ensure dialog is properly positioned*/
            }
            objectName={props.objectName}
            onObjectUpdated={notifyOfChange}
            renderObjectNameField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SemiControlledTextField
                fullWidth
                id="object-name"
                commitOnBlur
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Object name</Trans>}
                floatingLabelFixed
                value={objectName}
                translatableHintText={t`Object Name`}
// @ts-expect-error - TS7006 - Parameter 'newObjectName' implicitly has an 'any' type.
                onChange={newObjectName => {
                  if (newObjectName === objectName) return;

                  setObjectName(
                    props.getValidatedObjectOrGroupName(newObjectName)
                  );
                  notifyOfChange();
                }}
                autoFocus="desktop"
              />
            )}
          />
        </Column>
      ) : null}
      {currentTab === 'behaviors' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <BehaviorsEditor
          object={props.object}
          project={props.project}
          eventsFunctionsExtension={props.eventsFunctionsExtension}
          resourceManagementProps={props.resourceManagementProps}
          onSizeUpdated={
            forceUpdate /*Force update to ensure dialog is properly positioned*/
          }
          onUpdateBehaviorsSharedData={props.onUpdateBehaviorsSharedData}
          onBehaviorsUpdated={notifyOfChange}
          openBehaviorEvents={askConfirmationAndOpenBehaviorEvents}
        />
      )}
      {currentTab === 'variables' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column expand noMargin>
          {props.object.getVariables().count() > 0 &&
            DismissableTutorialMessage && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin expand>
                  {DismissableTutorialMessage}
                </Column>
              </Line>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <VariablesList
            variablesContainer={props.object.getVariables()}
            emptyPlaceholderTitle={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Add your first object variable</Trans>
            }
            emptyPlaceholderDescription={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                These variables hold additional information on an object.
              </Trans>
            }
            helpPagePath={'/all-features/variables/object-variables'}
            onComputeAllVariableNames={props.onComputeAllVariableNames}
            onVariablesUpdated={notifyOfChange}
          />
        </Column>
      )}
      {currentTab === 'effects' && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <EffectsList
          target="object"
          // TODO (3D): declare the renderer type in object metadata.
          layerRenderingType="2d"
          project={props.project}
          resourceManagementProps={props.resourceManagementProps}
          effectsContainer={props.object.getEffects()}
// @ts-expect-error - TS7006 - Parameter 'oldName' implicitly has an 'any' type. | TS7006 - Parameter 'newName' implicitly has an 'any' type.
          onEffectsRenamed={(oldName, newName) =>
            // TODO EBO Refactor event-based object events when an effect is renamed.
            props.layout &&
            gd.WholeProjectRefactorer.renameObjectEffect(
              props.project,
              props.layout,
              props.object,
              oldName,
              newName
            )
          }
          onEffectsUpdated={() => {
            forceUpdate(); /*Force update to ensure dialog is properly positioned*/
            notifyOfChange();
          }}
        />
      )}
    </Dialog>
  );
};

type State = {
  editorComponent: React.ComponentType<EditorProps> | null | undefined,
  castToObjectType: (objectConfiguration: gdObjectConfiguration) => gdObjectConfiguration | null | undefined,
  helpPagePath: string | null | undefined,
  objectName: string
};

class ObjectEditorDialog extends React.Component<Props, State> {
// @ts-expect-error - TS2416 - Property 'state' in type 'ObjectEditorDialog' is not assignable to the same property in base type 'Component<Props, State, any>'.
  state = {
    editorComponent: null,
    castToObjectType: null,
    helpPagePath: null,
    objectName: '',
  };

  // This should be updated, see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html.
  UNSAFE_componentWillMount() {
    this._loadFrom(this.props.object);
  }

  // To be updated, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops.
  UNSAFE_componentWillReceiveProps(newProps: Props) {
    if (
      (!this.props.open && newProps.open) ||
      (newProps.open && this.props.object !== newProps.object)
    ) {
      this._loadFrom(newProps.object);
    }
  }

  _loadFrom(object?: gdObject | null) {
    if (!object) return;

    const editorConfiguration = ObjectsEditorService.getEditorConfiguration(
      this.props.project,
      object.getType()
    );
    if (!editorConfiguration) {
      return this.setState({
        editorComponent: null,
// @ts-expect-error - TS2322 - Type 'null' is not assignable to type '(objectConfiguration: gdObjectConfiguration) => any'.
        castToObjectType: null,
      });
    }

    this.setState({
      editorComponent: editorConfiguration.component,
      helpPagePath: editorConfiguration.helpPagePath,
      castToObjectType: editorConfiguration.castToObjectType,
      objectName: object.getName(),
    });
  }

  render() {
    const { object, initialTab } = this.props;
    const { editorComponent, castToObjectType, helpPagePath } = this.state;

    if (!object || !castToObjectType) return null;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <InnerDialog
        {...this.props}
        editorComponent={editorComponent}
        key={this.props.object && this.props.object.ptr}
        helpPagePath={helpPagePath}
        object={object}
        objectName={this.state.objectName}
        initialTab={initialTab}
      />
    );
  }
}

const ObjectEditorWithErrorBoundary = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ErrorBoundary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    componentTitle={<Trans>Object editor</Trans>}
    scope="object-details"
    onClose={props.onCancel}
    showOnTop
  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ObjectEditorDialog {...props} />
  </ErrorBoundary>
);

export default ObjectEditorWithErrorBoundary;
