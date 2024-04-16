import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { TeamGroup } from '../../../../Utils/GDevelopServices/User';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import EditIcon from '../../../../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import TrashIcon from '../../../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS6142 - Module '../../../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../../../UI/CircularProgress';
// @ts-expect-error - TS6142 - Module '../../../../UI/AsyncSemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AsyncSemiControlledTextField.tsx', but '--jsx' is not set.
import AsyncSemiControlledTextField from '../../../../UI/AsyncSemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../../../UI/Layout';

type Props = {
  group: TeamGroup,
  onFinishEditingGroupName: (group: TeamGroup, newName: string) => Promise<void>,
  allowDelete: boolean,
  onDeleteGroup: (group: TeamGroup) => Promise<void>
};

const TeamGroupNameField = ({
  group,
  onFinishEditingGroupName,
  allowDelete,
  onDeleteGroup,
}: Props) => {
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
  const [isEditingName, setIsEditingName] = React.useState<boolean>(false);

  const onStartEditingGroupName = React.useCallback(() => {
    setIsEditingName(true);
  }, []);

  const onClickDeleteGroup = React.useCallback(
    async () => {
      setIsDeleting(true);
      try {
        await onDeleteGroup(group);
        // No need to set back isDeleting flag to false since the component should
        // be unmounted by the time the API call is done.
      } catch (error: any) {
        console.error(
          `An error occurred when deleting the group ${group.id}`,
          error
        );
        setIsDeleting(false);
      }
    },
    [group, onDeleteGroup]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin>
      {isEditingName ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <AsyncSemiControlledTextField
          margin="dense"
          maxLength={50}
          autoFocus="desktopAndMobileDevices"
          value={group.name}
// @ts-expect-error - TS7006 - Parameter 'newGroupName' implicitly has an 'any' type.
          callback={async newGroupName => {
            await onFinishEditingGroupName(group, newGroupName);
            setIsEditingName(false);
          }}
          callbackErrorText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Trans>
              An error occurred while renaming the group name. Please try again
              later.
            </Trans>
          }
          onCancel={() => setIsEditingName(false)}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          emptyErrorText={<Trans>Group name cannot be empty.</Trans>}
        />
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <LineStackLayout noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">{group.name}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IconButton onClick={onStartEditingGroupName} size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <EditIcon fontSize="small" />
          </IconButton>
          {allowDelete && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <IconButton onClick={onClickDeleteGroup} size="small">
              {isDeleting ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <CircularProgress size={10} />
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TrashIcon fontSize="small" />
              )}
            </IconButton>
          )}
        </LineStackLayout>
      )}
    </Line>
  );
};

export default TeamGroupNameField;
