import * as React from 'react';
import { enumerateGroups } from '../ObjectsList/EnumerateObjects';
import { useCommandWithOptions } from '../CommandPalette/CommandHooks';

type Props = {
  project: gd.Project;
  layout: gd.Layout;
  onEditObjectGroup: (group: gd.ObjectGroup) => void;
};

const useObjectGroupsListCommands = (props: Props) => {
  const { project, layout, onEditObjectGroup } = props;

  useCommandWithOptions('EDIT_OBJECT_GROUP', true, {
    // @ts-expect-error - TS2322 - Type '() => { text: any; handler: () => void; }[]' is not assignable to type '() => CommandOption[]'.
    generateOptions: React.useCallback(
      () =>
        [
          ...enumerateGroups(layout.getObjectGroups()),
          ...enumerateGroups(project.getObjectGroups()),
        ].map((group) => ({
          text: group.getName(),
          handler: () => onEditObjectGroup(group),
        })),
      [onEditObjectGroup, project, layout]
    ),
  });
};

export default useObjectGroupsListCommands;
