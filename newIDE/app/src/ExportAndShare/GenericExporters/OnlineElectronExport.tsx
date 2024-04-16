// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../../UI/Checkbox';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { TargetName } from '../../Utils/GDevelopServices/Build';
import { HeaderProps, ExportFlowProps } from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import BuildStepsProgress from '../Builds/BuildStepsProgress';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';

export type ExportState = {
  targets: Array<TargetName>
};

export const SetupExportHeader = ({
  exportState,
  updateExportState,
  isExporting,
  build,
}: HeaderProps<ExportState>) => {
  // Build is finished, hide options.
  if (!!build && build.status === 'complete') return null;

  const setTarget = (targetName: TargetName, enable: boolean) => {
    updateExportState(prevExportState => {
      if (enable && prevExportState.targets.indexOf(targetName) === -1) {
        return {
          ...prevExportState,
          targets: [...prevExportState.targets, targetName],
        };
      } else if (
        !enable &&
        prevExportState.targets.indexOf(targetName) !== -1
      ) {
        return {
          ...prevExportState,
          targets: prevExportState.targets.filter(name => name !== targetName),
        };
      }

      return prevExportState;
    });
  };

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Your game will be exported and packaged online as a stand-alone
              game for Windows, Linux and/or macOS.
            </Trans>
          </Text>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Windows (zip file)</Trans>}
          checked={exportState.targets.indexOf('winZip') !== -1}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => setTarget('winZip', checked)}
          disabled={isExporting}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Windows (auto-installer file)</Trans>}
          checked={exportState.targets.indexOf('winExe') !== -1}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => setTarget('winExe', checked)}
          disabled={isExporting}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>macOS (zip file)</Trans>}
          checked={exportState.targets.indexOf('macZip') !== -1}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => setTarget('macZip', checked)}
          disabled={isExporting}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Linux (AppImage)</Trans>}
          checked={exportState.targets.indexOf('linuxAppImage') !== -1}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
          onCheck={(e, checked) => setTarget('linuxAppImage', checked)}
          disabled={isExporting}
        />
      </Column>
    </React.Fragment>
  );
};

type OnlineElectronExportFlowProps = (ExportFlowProps) & {
  exportPipelineName: string
};

export const ExportFlow = ({
  disabled,
  launchExport,
  isExporting,
  exportPipelineName,
  exportStep,
  build,
  stepMaxProgress,
  stepCurrentProgress,
  errored,
}: OnlineElectronExportFlowProps) => {
  const isExportingOrbuildRunningOrFinished =
    isExporting || (!!build && build.status !== 'error');

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {!isExportingOrbuildRunningOrFinished && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Create installation file</Trans>}
            primary
            id={`launch-export-${exportPipelineName}-button`}
            onClick={launchExport}
            disabled={disabled}
          />
        </Line>
      )}
      {isExportingOrbuildRunningOrFinished && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <BuildStepsProgress
            exportStep={exportStep}
            hasBuildStep={true}
            build={build}
            stepMaxProgress={stepMaxProgress}
            stepCurrentProgress={stepCurrentProgress}
            errored={errored}
          />
        </Line>
      )}
    </ColumnStackLayout>
  );
};

export const onlineElectronExporter = {
  key: 'onlineelectronexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>Desktop</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>Windows, macOS &amp; Linux</Trans>,
  helpPage: '/publishing/windows-macos-linux',
} as const;
