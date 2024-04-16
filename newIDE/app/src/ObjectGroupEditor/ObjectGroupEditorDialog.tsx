// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ObjectGroupEditor/index.tsx', but '--jsx' is not set.
import ObjectGroupEditor from '.';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
import { useSerializableObjectCancelableEditor } from '../Utils/SerializableObjectCancelableEditor';
import useForceUpdate from '../Utils/UseForceUpdate';

type Props = {
  project: gdProject,
  group: gdObjectGroup,
  onApply: () => void,
  onCancel: () => void,
  globalObjectsContainer: gdObjectsContainer,
  objectsContainer: gdObjectsContainer
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
  const {
    onCancelChanges,
    notifyOfChange,
  } = useSerializableObjectCancelableEditor({
    serializableObject: group,
// @ts-expect-error - TS2322 - Type '() => void' is not assignable to type '() => Promise<undefined> | undefined'.
    onCancel,
  });

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      title={<Trans>Edit {group.getName()}</Trans>}
      key={group.ptr}
      actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Cancel</Trans>}
          keyboardFocused
          onClick={onCancelChanges}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="apply"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Apply</Trans>}
          primary
          onClick={onApply}
        />,
      ]}
      onRequestClose={onCancelChanges}
      onApply={onApply}
      open
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
