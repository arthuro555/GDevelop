// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, LineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Check'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Check.js' implicitly has an 'any' type.
import Check from '../../UI/CustomSvgIcons/Check';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Help'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Help.js' implicitly has an 'any' type.
import Help from '../../UI/CustomSvgIcons/Help';
import { getHelpLink } from '../../Utils/HelpLink';
import Window from '../../Utils/Window';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import { ExportFlowProps } from '../ExportPipeline.flow';

export const ExplanationHeader = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Trans>
      This will export your game as a Cordova project. Cordova is a technology
      that enables HTML5 games to be packaged for iOS and Android.
    </Trans>
  </Text>
);

type CordovaExportFlowProps = (ExportFlowProps) & {
  exportPipelineName: string
};

export const ExportFlow = ({
  disabled,
  launchExport,
  isExporting,
  exportStep,
  exportPipelineName,
}: CordovaExportFlowProps) =>
  exportStep !== 'done' ? (
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
  ) : null;

export const DoneFooter = ({
  renderGameButton,
}: {
  renderGameButton: () => React.ReactElement
}) => {
  const openLearnMore = () => {
    Window.openExternalURL(
      getHelpLink('/publishing/android_and_ios_with_cordova')
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
          You can now compile the game by yourself using Cordova command-line
          tool to iOS (XCode is required) or Android (Android SDK is required).
        </Trans>
      </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line justifyContent="center">{renderGameButton()}</Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Learn more about manual builds</Trans>}
          primary
          onClick={openLearnMore}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          leftIcon={<Help />}
        />
      </ColumnStackLayout>
    </Column>
  );
};

export const cordovaExporter = {
  key: 'cordovaexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>Mobile</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>iOS &amp; Android (manual)</Trans>,
  helpPage: '/publishing/android_and_ios_with_cordova',
} as const;
