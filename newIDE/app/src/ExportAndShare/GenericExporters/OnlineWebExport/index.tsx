// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module './OnlineGameLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/OnlineGameLink.tsx', but '--jsx' is not set.
import OnlineGameLink from './OnlineGameLink';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/GdGames'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/GdGames.js' implicitly has an 'any' type.
import GdGames from '../../../UI/CustomSvgIcons/GdGames';

const styles = {
  icon: {
    height: 48,
    width: 48,
    margin: 10,
  },
} as const;

const ExplanationHeader = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Generate a unique link, playable from any computer or mobile phone's
            browser.
          </Trans>
        </Text>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <GdGames color="secondary" style={styles.icon} />
      </Line>
    </Column>
  );
};

const onlineWebExporter = {
  key: 'onlinewebexport',
  tabName: 'Web',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>gd.games</Trans>,
  helpPage: '/publishing/web',
} as const;

export { onlineWebExporter, ExplanationHeader, OnlineGameLink };
