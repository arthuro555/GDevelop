import { Trans } from '@lingui/macro';
import React from 'react';

import FlatButton from '../UI/FlatButton';

import ObjectGroupEditor from '.';

import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
import useForceUpdate from '../Utils/UseForceUpdate';

type Props = {
  project: gd.Project;
  group: gd.ObjectGroup;
  onApply: () => void;
  onCancel: () => void;
  globalObjectsContainer: gd.ObjectsContainer;
  objectsContainer: gd.ObjectsContainer;
};

const ObjectGroupEditorDialog = ({
  project,
  group,
  onApply,
  onCancel,
  globalObjectsContainer,
  objectsContainer,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const { onCancelChanges, notifyOfChange } =
    useSerializableObjectCancelableEditor({
      serializableObject: group,
      // @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
      onCancel,
    });

  return (
    <Dialog
      title={<Trans>Edit {group.getName()}</Trans>}
      key={group.ptr}
      actions={[
        <FlatButton
          key="cancel"
          label={<Trans>Cancel</Trans>}
          keyboardFocused
          onClick={onCancelChanges}
        />,

        <DialogPrimaryButton
          key="apply"
          label={<Trans>Apply</Trans>}
          primary
          onClick={onApply}
        />,
      ]}
      onRequestClose={onCancelChanges}
      onApply={onApply}
      open
    >
      <ObjectGroupEditor
        project={project}
        group={group}
        globalObjectsContainer={globalObjectsContainer}
        objectsContainer={objectsContainer}
        onSizeUpdated={
          forceUpdate /*Force update to ensure dialog is properly positioned*/
        }
        onObjectGroupUpdated={notifyOfChange}
      />
    </Dialog>
  );
};

export default ObjectGroupEditorDialog;
