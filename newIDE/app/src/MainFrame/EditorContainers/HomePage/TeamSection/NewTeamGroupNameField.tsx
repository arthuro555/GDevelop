import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../UI/AsyncSemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AsyncSemiControlledTextField.tsx', but '--jsx' is not set.
import AsyncSemiControlledTextField from '../../../../UI/AsyncSemiControlledTextField';

type Props = {
  onValidateGroupName: (
    arg1: {
      name: string
    },
  ) => Promise<void>,
  onDismiss: () => void
};

const NewTeamGroupNameField = ({
  onValidateGroupName,
  onDismiss,
}: Props) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AsyncSemiControlledTextField
        margin="dense"
        maxLength={50}
        autoFocus="desktopAndMobileDevices"
        translatableHintText={t`New group name`}
        value={''}
// @ts-expect-error - TS7006 - Parameter 'newName' implicitly has an 'any' type.
        callback={async newName => {
          await onValidateGroupName({ name: newName });
          onDismiss();
        }}
        callbackErrorText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            An error occurred while creating the group. Please try again later.
          </Trans>
        }
        onCancel={onDismiss}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        emptyErrorText={<Trans>Group name cannot be empty.</Trans>}
      />
    </Line>
  );
};

export default NewTeamGroupNameField;
