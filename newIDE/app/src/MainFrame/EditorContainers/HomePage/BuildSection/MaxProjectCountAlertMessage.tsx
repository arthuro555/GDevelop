import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../../../UI/Grid';
import { Limits } from '../../../../Utils/GDevelopServices/Usage';
import { AuthenticatedUser } from '../../../../Profile/AuthenticatedUserContext';

type Props = {
  onUpgrade: () => void,
  limits: Limits
};

export const checkIfHasTooManyCloudProjects = (
  authenticatedUser: AuthenticatedUser
) => {
  if (!authenticatedUser.authenticated) return false;

  const { limits, cloudProjects } = authenticatedUser;

  return limits && cloudProjects
    ? cloudProjects.filter(cloudProject => !cloudProject.deletedAt).length >=
        limits.capabilities.cloudProjects.maximumCount
    : false;
};

export const MaxProjectCountAlertMessage = ({
  onUpgrade,
  limits,
}: Props) => {
  const {
    maximumCount,
    canMaximumCountBeIncreased,
  } = limits.capabilities.cloudProjects;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AlertMessage
          kind="warning"
          renderRightButton={
            canMaximumCountBeIncreased
              ? () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <RaisedButton
                    primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    label={<Trans>Check our premiums plans</Trans>}
                    onClick={onUpgrade}
                  />
                )
              : undefined
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              You've reached your maximum storage of {maximumCount} cloud-based
              projects
            </Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
            {canMaximumCountBeIncreased ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Update to GDevelop Premium to get more storage, leaderboards,
                and one-click packagings!
              </Trans>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                To keep using GDevelop cloud, consider deleting old, unused
                projects.
              </Trans>
            )}
          </Text>
        </AlertMessage>
      </Column>
    </Line>
  );
};
