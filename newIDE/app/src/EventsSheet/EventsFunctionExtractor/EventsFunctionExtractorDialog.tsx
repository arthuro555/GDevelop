// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
import { enumerateEventsFunctionsExtensions } from '../../ProjectManager/EnumerateProjectItems';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
import {
  setupFunctionFromEvents,
  canCreateEventsFunction,
  functionHasLotsOfParameters,
  validateExtensionNameUniqueness,
  validateExtensionName,
  validateEventsFunctionNameUniqueness,
  validateEventsFunctionName,
} from '.';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/DismissableAlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DismissableAlertMessage.tsx', but '--jsx' is not set.
import DismissableAlertMessage from '../../UI/DismissableAlertMessage';
// @ts-expect-error - TS6142 - Module '../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionParametersEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionParametersEditor.tsx', but '--jsx' is not set.
import { EventsFunctionParametersEditor } from '../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionParametersEditor';
// @ts-expect-error - TS6142 - Module '../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionPropertiesEditor.tsx', but '--jsx' is not set.
import { EventsFunctionPropertiesEditor } from '../../EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionPropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
import { EventsScope } from '../../InstructionOrExpression/EventsScope.flow';
const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  scope: EventsScope,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  serializedEvents: any,
  onClose: () => void,
  onCreate: (extensionName: string, eventsFunction: gdEventsFunction) => void
};

type State = {
  eventsFunction: gdEventsFunction | null | undefined,
  extensionName: string,
  createNewExtension: boolean
};

const CREATE_NEW_EXTENSION_PLACEHOLDER = '<create a new extension>';

export default class EventsFunctionExtractorDialog extends React.Component<Props, State> {
  state = {
    eventsFunction: null,
    extensionName: '',
    createNewExtension: false,
  };

  componentDidMount() {
    const {
      project,
      scope,
      globalObjectsContainer,
      objectsContainer,
      serializedEvents,
    } = this.props;

    // Set up the function
    const eventsFunction = new gd.EventsFunction();
    setupFunctionFromEvents({
      project,
      scope,
      globalObjectsContainer,
      objectsContainer,
      serializedEvents,
      eventsFunction,
    });
    this.setState({
      eventsFunction,
    });

    // Prepopulate the form
    const eventsFunctionsExtensions = enumerateEventsFunctionsExtensions(
      project
    );
    if (eventsFunctionsExtensions.length === 0) {
      this.setState({
        createNewExtension: true,
      });
    }
  }

  componentWillUnmount() {
    const { eventsFunction } = this.state;
// @ts-expect-error - TS2339 - Property 'delete' does not exist on type 'never'.
    if (eventsFunction) eventsFunction.delete();
  }

  _getFunctionGroupNames = (): Array<string> => {
    const { createNewExtension, extensionName } = this.state;
    if (createNewExtension || !extensionName) {
      return [];
    }
    const groupNames = new Set<string>();
    const { project } = this.props;
    const eventsFunctionsExtension = project.getEventsFunctionsExtension(
      extensionName
    );
    for (
      let index = 0;
      index < eventsFunctionsExtension.getEventsFunctionsCount();
      index++
    ) {
      const groupName = eventsFunctionsExtension
        .getEventsFunctionAt(index)
        .getGroup();
      if (groupName) {
        groupNames.add(groupName);
      }
    }
    return [...groupNames].sort((a, b) => a.localeCompare(b));
  };

  render() {
    const { project, onClose, onCreate } = this.props;
    const { eventsFunction, extensionName, createNewExtension } = this.state;
    if (!eventsFunction) return null;

    const eventsFunctionsExtensions = enumerateEventsFunctionsExtensions(
      project
    );
    const hasLotsOfParameters = functionHasLotsOfParameters(eventsFunction);

    const onApply = () => {
      if (!canCreateEventsFunction(project, extensionName, eventsFunction)) {
        onClose();
      } else {
        onCreate(extensionName, eventsFunction);
      }
    };

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Extract the events in a function</Trans>}
        secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <HelpButton
            helpPagePath="/events/functions/extract-events"
            key="help"
          />,
        ]}
        actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Cancel</Trans>}
            onClick={onClose}
          />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <DialogPrimaryButton
            key="create"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Create</Trans>}
            primary
            disabled={
              !canCreateEventsFunction(project, extensionName, eventsFunction)
            }
            onClick={onApply}
          />,
        ]}
        open
        cannotBeDismissed
        onRequestClose={onClose}
        onApply={onApply}
      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <DismissableAlertMessage
            identifier="function-extractor-explanation"
            kind="info"
          >
            After creating a function, it will be usable in the events sheet.
            Functions are grouped by extensions. Choose, or enter the name of a
            new extension, and a function name, then configure the function and
            its parameters.
          </DismissableAlertMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ResponsiveLineStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SelectField
                floatingLabelText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Trans>Extension (storing the function)</Trans>
                }
                value={
                  createNewExtension
                    ? CREATE_NEW_EXTENSION_PLACEHOLDER
                    : extensionName
                }
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type. | TS7006 - Parameter 'extensionName' implicitly has an 'any' type.
                onChange={(e, i, extensionName) => {
                  if (extensionName === CREATE_NEW_EXTENSION_PLACEHOLDER) {
                    this.setState({
                      createNewExtension: true,
                      extensionName: '',
                    });
                  } else {
                    this.setState({
                      createNewExtension: false,
                      extensionName,
                    });
                  }
                }}
                fullWidth
              >
                {eventsFunctionsExtensions.map(eventsFunctionsExtension => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <SelectOption
                    key={eventsFunctionsExtension.getName()}
                    value={eventsFunctionsExtension.getName()}
                    label={
                      eventsFunctionsExtension.getFullName() ||
                      eventsFunctionsExtension.getName()
                    }
                  />
                ))}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectOption
                  value={CREATE_NEW_EXTENSION_PLACEHOLDER}
                  label={t`<Create a New Extension>`}
                />
              </SelectField>
              {createNewExtension ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SemiControlledTextField
                  commitOnBlur
                  value={extensionName}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  floatingLabelText={<Trans>New extension name</Trans>}
                  onChange={(extensionName: string) =>
                    this.setState({ extensionName })
                  }
                  fullWidth
                  errorText={
                    !validateExtensionNameUniqueness(project, extensionName) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        This name is already taken by another extension.
                      </Trans>
                    ) : !validateExtensionName(extensionName) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        This name is not valid. Only use alphanumeric characters
                        (0-9, a-z) and underscores.
                      </Trans>
                    ) : (
                      undefined
                    )
                  }
                />
              ) : null}
            </ResponsiveLineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <SemiControlledTextField
                commitOnBlur
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'never'.
                value={eventsFunction.getName()}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Function name</Trans>}
                onChange={(functionName: string) => {
// @ts-expect-error - TS2339 - Property 'setName' does not exist on type 'never'.
                  eventsFunction.setName(functionName);
                  this.forceUpdate();
                }}
                fullWidth
                errorText={
                  !validateEventsFunctionNameUniqueness(
                    project,
                    extensionName,
                    eventsFunction
                  ) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      This name is already taken by another function. Choose
                      another name.
                    </Trans>
// @ts-expect-error - TS2339 - Property 'getName' does not exist on type 'never'.
                  ) : !validateEventsFunctionName(eventsFunction.getName()) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>
                      This name is not valid. Only use alphanumeric characters
                      (0-9, a-z) and underscores.
                    </Trans>
                  ) : (
                    undefined
                  )
                }
              />
            </Line>
            {hasLotsOfParameters ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    This function will have a lot of parameters. Consider
                    creating groups or functions for a smaller set of objects so
                    that the function is easier to reuse.
                  </Trans>
                </AlertMessage>
              </Line>
            ) : null}
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EventsFunctionPropertiesEditor
            project={project}
            eventsFunction={eventsFunction}
            eventsBasedBehavior={null}
            eventsBasedObject={null}
            eventsFunctionsContainer={null}
            onConfigurationUpdated={() => {
              // Force re-running logic to see if Create button is disabled.
              this.forceUpdate();
            }}
            freezeEventsFunctionType
            getFunctionGroupNames={this._getFunctionGroupNames}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EventsFunctionParametersEditor
            project={project}
            eventsFunction={eventsFunction}
            eventsBasedBehavior={null}
            eventsBasedObject={null}
            eventsFunctionsContainer={null}
            onParametersUpdated={() => {
              // Force the dialog to adapt its size
              this.forceUpdate();
            }}
            freezeParameters
          />
        </ColumnStackLayout>
      </Dialog>
    );
  }
}
