// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
import {
  TargetName,
  BuildSigningOptions,
} from '../../Utils/GDevelopServices/Build';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { HeaderProps, ExportFlowProps } from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../SigningCredentials/IosSigningCredentialsSelector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/SigningCredentials/IosSigningCredentialsSelector.tsx', but '--jsx' is not set.
import { IosSigningCredentialsSelector } from '../SigningCredentials/IosSigningCredentialsSelector';
// @ts-expect-error - TS6142 - Module '../Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import BuildStepsProgress from '../Builds/BuildStepsProgress';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';

export type ExportState = {
  targets: Array<TargetName>,
  signing: BuildSigningOptions | null
};

export const SetupExportHeader = ({
  exportState,
  authenticatedUser,
  updateExportState,
  isExporting,
  build,
  quota,
}: HeaderProps<ExportState>) => {
  // Build is finished, hide options.
  if (!!build && build.status === 'complete') return null;

  const isFeatureLocked = quota && quota.max === 0;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center" justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Package the game for iOS, using your Apple Developer account.
          </Trans>
        </Text>
      </Line>
      {!isFeatureLocked && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RadioGroup
            value={exportState.targets[0] || 'iosAppStore'}
            onChange={event => {
              const targetName = event.target.value;
              updateExportState(prevExportState => ({
                ...prevExportState,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'TargetName'.
                targets: [targetName],
              }));
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FormControlLabel
              value={'iosDevelopment'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="secondary" disabled={isExporting} />}
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Development (debugging & testing on a registered iPhone/iPad)
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FormControlLabel
              value={'iosAppStore'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="secondary" disabled={isExporting} />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Apple App Store</Trans>}
            />
          </RadioGroup>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <IosSigningCredentialsSelector
            targets={exportState.targets}
            buildSigningOptions={exportState.signing}
// @ts-expect-error - TS7006 - Parameter 'signing' implicitly has an 'any' type.
            onSelectBuildSigningOptions={signing => {
              updateExportState(prevExportState => ({
                ...prevExportState,
                signing,
              }));
            }}
            authenticatedUser={authenticatedUser}
            disabled={isExporting}
          />
        </ColumnStackLayout>
      )}
    </ColumnStackLayout>
  );
};

type OnlineCordovaIosExportFlowProps = (ExportFlowProps) & {
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
}: OnlineCordovaIosExportFlowProps) => {
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
            label={<Trans>Create package for iOS</Trans>}
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

export const onlineCordovaIosExporter = {
  key: 'onlinecordovaiosexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>iOS</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>iOS</Trans>,
  helpPage: '/publishing/android_and_ios',
} as const;
