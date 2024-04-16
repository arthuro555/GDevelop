// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { TargetName } from '../../Utils/GDevelopServices/Build';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../../UI/HelpButton';
import { HeaderProps, ExportFlowProps } from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import BuildStepsProgress from '../Builds/BuildStepsProgress';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';

export type ExportState = {
  targets: Array<TargetName>,
  keystore: 'old' | 'new',
  signingDialogOpen: boolean
};

export const SetupExportHeader = ({
  exportState,
  updateExportState,
  isExporting,
  build,
}: HeaderProps<ExportState>) => {
  // Build is finished, hide options.
  if (!!build && build.status === 'complete') return null;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Packaging your game for Android will create an APK file that can be
            installed on Android phones or an Android App Bundle that can be
            published to Google Play.
          </Trans>
        </Text>
      </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RadioGroup
          value={exportState.targets[0] || 'androidApk'}
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
            value={'androidApk'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            control={<Radio color="secondary" disabled={isExporting} />}
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                APK (for testing on device or sharing outside Google Play)
              </Trans>
            }
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FormControlLabel
            value={'androidAppBundle'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            control={<Radio color="secondary" disabled={isExporting} />}
            label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>Android App Bundle (for publishing on Google Play)</Trans>
            }
          />
        </RadioGroup>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Signing options</Trans>}
            onClick={() => {
              updateExportState(prevExportState => ({
                ...prevExportState,
                signingDialogOpen: true,
              }));
            }}
            disabled={
              exportState.targets[0] !== 'androidAppBundle' || isExporting
            }
          />
        </Line>
      </Column>
      {exportState.signingDialogOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          title={<Trans>Signing options</Trans>}
          actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <FlatButton
              key="close"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Close</Trans>}
              primary
              keyboardFocused
              onClick={() => {
                updateExportState(prevExportState => ({
                  ...prevExportState,
                  signingDialogOpen: false,
                }));
              }}
            />,
          ]}
          secondaryActions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <HelpButton
              helpPagePath="/publishing/android/play-store/upgrading-from-apk-to-aab"
              key="help"
            />,
          ]}
          open
          onRequestClose={() => {
            updateExportState(prevExportState => ({
              ...prevExportState,
              signingDialogOpen: false,
            }));
          }}
          maxWidth="sm"
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>
              Choose the upload key to use to identify your Android App Bundle.
              In most cases you don't need to change this. Use the "Old upload
              key" if you used to publish your game as an APK and you activated
              Play App Signing before switching to Android App Bundle.
            </Trans>
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <RadioGroup
            name="signing-keystore"
            value={exportState.keystore}
            onChange={event => {
              const keystore = event.target.value;
              updateExportState(prevExportState => ({
                ...prevExportState,
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type '"new" | "old"'.
                keystore,
              }));
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FormControlLabel
              value={'new'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="primary" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Default upload key (recommended)</Trans>}
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FormControlLabel
              value={'old'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="primary" />}
              label={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <Trans>
                  Old, legacy upload key (only if you used to publish your game
                  as an APK and already activated Play App Signing)
                </Trans>
              }
            />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <FormControlLabel
              value={'custom'}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              control={<Radio color="primary" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Custom upload key (not available yet)</Trans>}
              disabled
            />
          </RadioGroup>
        </Dialog>
      )}
    </Column>
  );
};

type OnlineCordovaExportFlowProps = (ExportFlowProps) & {
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
}: OnlineCordovaExportFlowProps) => {
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
            label={<Trans>Create package for Android</Trans>}
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

export const onlineCordovaExporter = {
  key: 'onlinecordovaexport',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  tabName: <Trans>Mobile</Trans>,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  name: <Trans>Android</Trans>,
  helpPage: '/publishing/android',
} as const;
