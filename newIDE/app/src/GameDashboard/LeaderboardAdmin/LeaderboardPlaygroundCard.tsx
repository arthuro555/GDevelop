import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
import Window from '../../Utils/Window';

const LeaderboardPlaygroundCard = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <LineStackLayout
      expand
      noMargin
      alignItems="center"
      justifyContent="space-around"
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Experiment with the leaderboard colors using the playground
          </Trans>
        </Text>
      </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Link
          href="https://gd.games/playground/test-leaderboard"
          onClick={() =>
            Window.openExternalURL(
              'https://gd.games/playground/test-leaderboard'
            )
          }
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin color="inherit">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Playground</Trans>
          </Text>
        </Link>
      </Column>
    </LineStackLayout>
  );
};

export default LeaderboardPlaygroundCard;
