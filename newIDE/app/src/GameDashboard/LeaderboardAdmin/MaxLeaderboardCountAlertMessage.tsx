import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../../UI/Grid';
import { Limits } from '../../Utils/GDevelopServices/Usage';

type Props = {
  onUpgrade: () => void,
  onClose: () => void,
  limits: Limits
};

const MaxLeaderboardCountAlertMessage = ({
  onUpgrade,
  onClose,
  limits,
}: Props) => {
  const leaderboardLimits = limits.capabilities.leaderboards;
  if (!leaderboardLimits) return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <AlertMessage
          kind="warning"
          onHide={onClose}
          renderRightButton={
            leaderboardLimits.canMaximumCountPerGameBeIncreased
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
              You've reached your maximum of{' '}
              {leaderboardLimits.maximumCountPerGame} leaderboards for your game
            </Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
            {leaderboardLimits.canMaximumCountPerGameBeIncreased ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Upgrade to GDevelop Premium to get more leaderboards, storage,
                and one-click packagings!
              </Trans>
            ) : (
              // This should not happen at the moment since leaderboards are unlimited
              // in any paid plans but it could happen in the future with a plan that
              // cannot be increased and that has a max number of leaderboards.
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                To keep using GDevelop leaderboards, consider deleting old,
                unused leaderboards.
              </Trans>
            )}
          </Text>
        </AlertMessage>
      </Column>
    </Line>
  );
};

export default MaxLeaderboardCountAlertMessage;
