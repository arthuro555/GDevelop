import * as React from 'react';

import ObjectGroupsList from '.';

import ObjectGroupEditorDialog from '../ObjectGroupEditor/ObjectGroupEditorDialog';
import { GroupWithContext } from '../ObjectsList/EnumerateObjects';

import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

type Props = {
  project: gd.Project;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
  globalObjectGroups: gd.ObjectGroupsContainer;
  objectGroups: gd.ObjectGroupsContainer;
  getValidatedObjectOrGroupName: (newName: string, global: boolean) => string;
  onDeleteGroup: (
    groupWithScope: GroupWithContext,
    done: (arg1: boolean) => void
  ) => void;
  onRenameGroup: (
    groupWithScope: GroupWithContext,
    newName: string,
    done: (arg1: boolean) => void
  ) => void;
  onGroupsUpdated?: () => void;
  canSetAsGlobalGroup?: boolean;
  unsavedChanges?: UnsavedChanges | null | undefined;
};

type State = {
  editedGroup: gd.ObjectGroup | null | undefined;
};

/**
 * Helper showing the list of groups and embedding the editor to edit a group.
 */
export default class ObjectGroupsListWithObjectGroupEditor extends React.Component<
  Props,
  State
> {
  state = {
    editedGroup: null,
  };

  editGroup = (editedGroup?: gd.ObjectGroup | null) =>
    this.setState({ editedGroup });

  render() {
    const {
      project,
      objectsContainer,
      globalObjectsContainer,
      objectGroups,
      globalObjectGroups,
    } = this.props;

    return (
      <React.Fragment>
        <ObjectGroupsList
// @ts-expect-error - TS2322 - Type '{ globalObjectGroups: gd.ObjectGroupsContainer; objectGroups: gd.ObjectGroupsContainer; onEditGroup: (editedGroup?: any) => void; onDeleteGroup: (groupWithScope: GroupWithContext, done: (arg1: boolean) => void) => void; ... 6 more ...; unsavedChanges: UnsavedChanges | ... 1 more ... | undefined; }' is not assignable to type 'IntrinsicAttributes & ObjectGroupsListInterface & RefAttributes<Props>'.
          globalObjectGroups={globalObjectGroups}
          objectGroups={objectGroups}
          onEditGroup={this.editGroup}
          onDeleteGroup={this.props.onDeleteGroup}
          onRenameGroup={this.props.onRenameGroup}
          getValidatedObjectOrGroupName={
            this.props.getValidatedObjectOrGroupName
          }
          onGroupAdded={this.props.onGroupsUpdated}
          onGroupRemoved={this.props.onGroupsUpdated}
          onGroupRenamed={this.props.onGroupsUpdated}
          canSetAsGlobalGroup={this.props.canSetAsGlobalGroup}
          unsavedChanges={this.props.unsavedChanges}
        />
        {this.state.editedGroup && (
          <ObjectGroupEditorDialog
            project={project}
            key={globalObjectsContainer.ptr + ';' + objectsContainer.ptr}
            group={this.state.editedGroup}
            globalObjectsContainer={globalObjectsContainer}
            objectsContainer={objectsContainer}
            onCancel={() => this.editGroup(null)}
            onApply={() => {
              if (this.props.onGroupsUpdated) this.props.onGroupsUpdated();
              this.editGroup(null);
            }}
          />
        )}
      </React.Fragment>
    );
  }
}
