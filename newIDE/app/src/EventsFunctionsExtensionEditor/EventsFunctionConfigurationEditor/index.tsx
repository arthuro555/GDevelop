// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../ObjectGroupsList/ObjectGroupsListWithObjectGroupEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupsList/ObjectGroupsListWithObjectGroupEditor.tsx', but '--jsx' is not set.
import ObjectGroupsListWithObjectGroupEditor from '../../ObjectGroupsList/ObjectGroupsListWithObjectGroupEditor';
// @ts-expect-error - TS6142 - Module '../../UI/Tabs' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Tabs.tsx', but '--jsx' is not set.
import { Tabs } from '../../UI/Tabs';
// @ts-expect-error - TS6142 - Module './EventsFunctionParametersEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionParametersEditor.tsx', but '--jsx' is not set.
import { EventsFunctionParametersEditor } from './EventsFunctionParametersEditor';
// @ts-expect-error - TS6142 - Module './EventsFunctionPropertiesEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/EventsFunctionConfigurationEditor/EventsFunctionPropertiesEditor.tsx', but '--jsx' is not set.
import { EventsFunctionPropertiesEditor } from './EventsFunctionPropertiesEditor';
// @ts-expect-error - TS6142 - Module '../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import Window from '../../Utils/Window';
import { GroupWithContext } from '../../ObjectsList/EnumerateObjects';
// @ts-expect-error - TS6142 - Module '../../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../../MainFrame/UnsavedChangesContext';
import newNameGenerator from '../../Utils/NewNameGenerator';
// @ts-expect-error - TS6142 - Module '../../EventsFunctionsExtensionEditor' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsFunctionsExtensionEditor/index.tsx', but '--jsx' is not set.
import { ExtensionItemConfigurationAttribute } from '../../EventsFunctionsExtensionEditor';

const gd: libGDevelop = global.gd;

type Props = {
  project: gdProject,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  eventsFunction: gdEventsFunction,
  eventsBasedBehavior: gdEventsBasedBehavior | null | undefined,
  eventsBasedObject: gdEventsBasedObject | null | undefined,
  eventsFunctionsContainer: gdEventsFunctionsContainer,
  onParametersOrGroupsUpdated: () => void,
  helpPagePath?: string,
  onConfigurationUpdated?: (arg1?: ExtensionItemConfigurationAttribute | null | undefined) => void,
  renderConfigurationHeader?: () => React.ReactElement,
  freezeParameters?: boolean,
  freezeEventsFunctionType?: boolean,
  onMoveFreeEventsParameter?: (
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void,
  ) => void,
  onMoveBehaviorEventsParameter?: (
    eventsBasedBehavior: gdEventsBasedBehavior,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void,
  ) => void,
  onMoveObjectEventsParameter?: (
    eventsBasedObject: gdEventsBasedObject,
    eventsFunction: gdEventsFunction,
    oldIndex: number,
    newIndex: number,
    done: (arg1: boolean) => void,
  ) => void,
  unsavedChanges?: UnsavedChanges | null | undefined,
  getFunctionGroupNames?: () => string[]
};

type TabNames = 'config' | 'parameters' | 'groups';

type State = {
  currentTab: TabNames
};

export default class EventsFunctionConfigurationEditor extends React.Component<Props, State> {
// @ts-expect-error - TS2416 - Property 'state' in type 'EventsFunctionConfigurationEditor' is not assignable to the same property in base type 'Component<Props, State, any>'.
  state = {
    currentTab: 'config',
  };

  _getValidatedObjectOrGroupName = (newName: string) => {
    const { objectsContainer, globalObjectsContainer } = this.props;

    const safeAndUniqueNewName = newNameGenerator(
      gd.Project.getSafeName(newName),
      tentativeNewName => {
        if (
          objectsContainer.hasObjectNamed(tentativeNewName) ||
          globalObjectsContainer.hasObjectNamed(tentativeNewName) ||
          objectsContainer.getObjectGroups().has(tentativeNewName) ||
          globalObjectsContainer.getObjectGroups().has(tentativeNewName)
        ) {
          return true;
        }

        return false;
      }
    );

    return safeAndUniqueNewName;
  };

  _onDeleteGroup = (
    groupWithContext: GroupWithContext,
    done: (arg1: boolean) => void
  ) => {
    const { group } = groupWithContext;
    const {
      project,
      eventsFunction,
      globalObjectsContainer,
      objectsContainer,
    } = this.props;

    const answer = Window.showConfirmDialog(
      'Do you want to remove all references to this group in events (actions and conditions using the group)?'
    );

    gd.WholeProjectRefactorer.objectOrGroupRemovedInEventsFunction(
      project,
      eventsFunction,
      globalObjectsContainer,
      objectsContainer,
      group.getName(),
      /* isObjectGroup=*/ true,
      !!answer
    );
    done(true);
  };

  _onRenameGroup = (
    groupWithContext: GroupWithContext,
    newName: string,
    done: (arg1: boolean) => void
  ) => {
    const { group } = groupWithContext;
    const {
      project,
      eventsFunction,
      globalObjectsContainer,
      objectsContainer,
    } = this.props;

    // newName is supposed to have been already validated

    // Avoid triggering renaming refactoring if name has not really changed
    if (group.getName() !== newName) {
      gd.WholeProjectRefactorer.objectOrGroupRenamedInEventsFunction(
        project,
        eventsFunction,
        globalObjectsContainer,
        objectsContainer,
        group.getName(),
        newName,
        /* isObjectGroup=*/ true
      );
    }

    done(true);
  };

  _chooseTab = (currentTab: TabNames) =>
    this.setState({
      currentTab,
    });

  render() {
    const {
      project,
      globalObjectsContainer,
      objectsContainer,
      eventsFunction,
      eventsBasedBehavior,
      eventsBasedObject,
      freezeEventsFunctionType,
      onConfigurationUpdated,
      onParametersOrGroupsUpdated,
      freezeParameters,
      helpPagePath,
      renderConfigurationHeader,
      onMoveFreeEventsParameter,
      onMoveBehaviorEventsParameter,
      onMoveObjectEventsParameter,
      getFunctionGroupNames,
      eventsFunctionsContainer,
    } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column expand useFullHeight noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin expand noOverflowParent>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Tabs
              value={this.state.currentTab}
              onChange={this._chooseTab}
              options={[
                {
                  value: ('config' as TabNames),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Configuration</Trans>,
                },
                {
                  value: ('parameters' as TabNames),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Parameters</Trans>,
                },
                {
                  value: ('groups' as TabNames),
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label: <Trans>Object groups</Trans>,
                },
              ]}
            />
          </Column>
        </Line>
        {this.state.currentTab === 'config' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EventsFunctionPropertiesEditor
                project={project}
                eventsFunction={eventsFunction}
                eventsBasedBehavior={eventsBasedBehavior}
                eventsBasedObject={eventsBasedObject}
                eventsFunctionsContainer={eventsFunctionsContainer}
                helpPagePath={helpPagePath}
                onConfigurationUpdated={onConfigurationUpdated}
                renderConfigurationHeader={renderConfigurationHeader}
                freezeEventsFunctionType={freezeEventsFunctionType}
                getFunctionGroupNames={getFunctionGroupNames}
              />
            </Line>
          </ScrollView>
        ) : null}
        {this.state.currentTab === 'parameters' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <EventsFunctionParametersEditor
                project={project}
                eventsFunction={eventsFunction}
                eventsBasedBehavior={eventsBasedBehavior}
                eventsBasedObject={eventsBasedObject}
                eventsFunctionsContainer={eventsFunctionsContainer}
                onParametersUpdated={onParametersOrGroupsUpdated}
                helpPagePath={helpPagePath}
                freezeParameters={freezeParameters}
                onMoveFreeEventsParameter={onMoveFreeEventsParameter}
                onMoveBehaviorEventsParameter={onMoveBehaviorEventsParameter}
                onMoveObjectEventsParameter={onMoveObjectEventsParameter}
                key={eventsFunction ? eventsFunction.ptr : null}
              />
            </Line>
          </ScrollView>
        ) : null}
        {this.state.currentTab === 'groups' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ObjectGroupsListWithObjectGroupEditor
            project={project}
            globalObjectsContainer={globalObjectsContainer}
            objectsContainer={objectsContainer}
            globalObjectGroups={globalObjectsContainer.getObjectGroups()}
            objectGroups={eventsFunction.getObjectGroups()}
            getValidatedObjectOrGroupName={this._getValidatedObjectOrGroupName}
            onRenameGroup={this._onRenameGroup}
            onDeleteGroup={this._onDeleteGroup}
            onGroupsUpdated={onParametersOrGroupsUpdated}
            canSetAsGlobalGroup={false}
            unsavedChanges={this.props.unsavedChanges}
          />
        ) : null}
      </Column>
    );
  }
}
