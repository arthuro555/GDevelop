// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { getHelpLink } from '../../Utils/HelpLink';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Facebook'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Facebook.js' implicitly has an 'any' type.
import Facebook from '../../UI/CustomSvgIcons/Facebook';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Help'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Help.js' implicitly has an 'any' type.
import Help from '../../UI/CustomSvgIcons/Help';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import Check from '../../UI/CustomSvgIcons/Check';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import { ExportFlowProps } from '../ExportPipeline.flow';

const styles = {
  icon: {
    height: 48,
    width: 48,
    margin: 10,
  },
} as const;

export const ExplanationHeader = () => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Prepare your game for Facebook Instant Games so that it can be play
            on Facebook Messenger. GDevelop will create a compressed file that
            you can upload on your Facebook Developer account.
          </Trans>
        </Text>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Facebook color="secondary" style={styles.icon} />
      </Line>
    </Column>
  );
};

type FacebookInstantGamesExportFlowProps = (ExportFlowProps) & {
  exportPipelineName: string
};

export const ExportFlow = ({
  disabled,
  launchExport,
  isExporting,
  exportPipelineName,
}: FacebookInstantGamesExportFlowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <RaisedButton
      label={
        !isExporting ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Package game files</Trans>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>Packaging...</Trans>
        )
      }
      primary
      id={`launch-export-${exportPipelineName}-button`}
      onClick={launchExport}
      disabled={disabled || isExporting}
    />
  </Line>
);

export const DoneFooter = ({
  renderGameButton,
}: {
  renderGameButton: () => React.ReactElement
}) => {
  const openLearnMore = () => {
    Window.openExternalURL(
      getHelpLink('/publishing/publishing-to-facebook-instant-games')
    );
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <LineStackLayout noMargin justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Check fontSize="small" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Done!</Trans>
        </Text>
      </LineStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>
          You can now create a game on Facebook Instant Games, if not already
          done, and upload the generated archive.
        </Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="center">{renderGameButton()}</Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Learn more about Instant Games publication</Trans>}
          primary
          onClick={openLearnMore}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Help />}
        />
      </ColumnStackLayout>
    </Column>
  );
};

export const facebookInstantGamesExporter = {
  key: 'facebookinstantgamesexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>Instant Games</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>Facebook Instant Games</Trans>,
  helpPage: '/publishing/publishing-to-facebook-instant-games',
} as const;
