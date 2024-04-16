import * as React from 'react';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupsList/index.tsx', but '--jsx' is not set.
import ObjectGroupsList from '.';
// @ts-expect-error - TS6142 - Module '../ObjectGroupEditor/ObjectGroupEditorDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupEditor/ObjectGroupEditorDialog.tsx', but '--jsx' is not set.
import ObjectGroupEditorDialog from '../ObjectGroupEditor/ObjectGroupEditorDialog';
import { GroupWithContext } from '../ObjectsList/EnumerateObjects';
// @ts-expect-error - TS6142 - Module '../MainFrame/UnsavedChangesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/UnsavedChangesContext.tsx', but '--jsx' is not set.
import { UnsavedChanges } from '../MainFrame/UnsavedChangesContext';

type Props = {
  project: gdProject,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer,
  globalObjectGroups: gdObjectGroupsContainer,
  objectGroups: gdObjectGroupsContainer,
  getValidatedObjectOrGroupName: (newName: string, global: boolean) => string,
  onDeleteGroup: (groupWithScope: GroupWithContext, done: (arg1: boolean) => void) => void,
  onRenameGroup: (
    groupWithScope: GroupWithContext,
    newName: string,
    done: (arg1: boolean) => void,
  ) => void,
  onGroupsUpdated?: () => void,
  canSetAsGlobalGroup?: boolean,
  unsavedChanges?: UnsavedChanges | null | undefined
};

type State = {
  editedGroup: gdObjectGroup | null | undefined
};

/**
 * Helper showing the list of groups and embedding the editor to edit a group.
 */
export default class ObjectGroupsListWithObjectGroupEditor extends React.Component<Props, State> {
  state = {
    editedGroup: null,
  };

  editGroup = (editedGroup?: gdObjectGroup | null) => this.setState({ editedGroup });

  render() {
    const {
      project,
      objectsContainer,
      globalObjectsContainer,
      objectGroups,
      globalObjectGroups,
    } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ObjectGroupsList
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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
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
