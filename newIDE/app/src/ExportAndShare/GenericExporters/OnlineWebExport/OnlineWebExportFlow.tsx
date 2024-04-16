// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
import * as React from 'react';
import { ExportFlowProps } from '../../ExportPipeline.flow';
import {
  ColumnStackLayout,
  ResponsiveLineStackLayout,
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module './OnlineGameLink' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/OnlineGameLink.tsx', but '--jsx' is not set.
import OnlineGameLink from './OnlineGameLink';

type OnlineWebExportFlowProps = (ExportFlowProps) & {
  exportPipelineName: string
};

const OnlineWebExportFlow = ({
  project,
  game,
  builds,
  build,
  onSaveProject,
  isSavingProject,
  errored,
  exportStep,
  disabled,
  launchExport,
  exportPipelineName,
  isExporting,
  onGameUpdated,
}: OnlineWebExportFlowProps) => {
  const hasGameExistingBuilds =
    game && builds
      ? !!builds.filter(build => build.gameId === game.id).length
      : false;
  const isPublishedOnGdgames = !!game && !!game.publicWebBuildId;
  const [
    automaticallyOpenGameProperties,
    setAutomaticallyOpenGameProperties,
  ] = React.useState(false);

  const isExportPending = exportStep !== '' && exportStep !== 'done';

  const Buttons = isExportPending ? null : hasGameExistingBuilds ? (
    isPublishedOnGdgames ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ResponsiveLineStackLayout justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Generate new link</Trans>}
          primary
          id={`launch-export-${exportPipelineName}-web-button`}
          onClick={async () => {
            setAutomaticallyOpenGameProperties(false);
            await launchExport();
          }}
          disabled={disabled}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Update my current page</Trans>}
          primary
          id={`launch-export-and-publish-${exportPipelineName}-web-button`}
          onClick={async () => {
            await launchExport();
            // Set to true after the export is done, so that the game properties
            // are automatically opened only when the build is finished.
            setAutomaticallyOpenGameProperties(true);
          }}
          disabled={disabled}
        />
      </ResponsiveLineStackLayout>
    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Generate new link</Trans>}
          primary
          id={`launch-export-${exportPipelineName}-web-button`}
          onClick={async () => {
            setAutomaticallyOpenGameProperties(false);
            await launchExport();
          }}
          disabled={disabled}
        />
      </Line>
    )
  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label={<Trans>Generate link</Trans>}
        primary
        id={`launch-export-${exportPipelineName}-web-button`}
        onClick={async () => {
          setAutomaticallyOpenGameProperties(false);
          await launchExport();
        }}
        disabled={disabled}
      />
    </Line>
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout noMargin>
      {Buttons}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <OnlineGameLink
        build={build}
        project={project}
        onSaveProject={onSaveProject}
        isSavingProject={isSavingProject}
        errored={errored}
        exportStep={exportStep}
        automaticallyOpenGameProperties={automaticallyOpenGameProperties}
        onGameUpdated={onGameUpdated}
        game={game}
      />
    </ColumnStackLayout>
  );
};

export default OnlineWebExportFlow;
