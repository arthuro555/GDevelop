// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { findGDJS } from '../../GameEngineFinder/LocalGDJSFinder';
import LocalFileSystem, { UrlFileDescriptor } from './LocalFileSystem';
import assignIn from 'lodash/assignIn';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import {
  ExportFlowProps,
  ExportPipeline,
  ExportPipelineContext,
} from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../../UI/LocalFilePicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LocalFilePicker/index.tsx', but '--jsx' is not set.
import LocalFilePicker from '../../UI/LocalFilePicker';
import { archiveLocalFolder } from '../../Utils/LocalArchiver';
import {
  ExplanationHeader,
  DoneFooter,
  ExportFlow,
// @ts-expect-error - TS6142 - Module '../GenericExporters/FacebookInstantGamesExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/FacebookInstantGamesExport.tsx', but '--jsx' is not set.
} from '../GenericExporters/FacebookInstantGamesExport';
import { downloadUrlsToLocalFiles } from '../../Utils/LocalFileDownloader';

const path = optionalRequire('path');
const electron = optionalRequire('electron');
const remote = optionalRequire('@electron/remote');
const app = remote ? remote.app : null;
const shell = electron ? electron.shell : null;

const gd: libGDevelop = global.gd;

type ExportState = {
  archiveOutputFilename: string
};

type PreparedExporter = {
  exporter: gdjsExporter,
  localFileSystem: LocalFileSystem,
  temporaryOutputDir: string
};

type ExportOutput = {
  temporaryOutputDir: string,
  urlFiles: Array<UrlFileDescriptor>
};

type ResourcesDownloadOutput = {
  temporaryOutputDir: string
};

type CompressionOutput = string;

const exportPipelineName = 'local-facebook-instant-games';

export const localFacebookInstantGamesExportPipeline: ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: exportPipelineName,

  getInitialExportState: (project: gdProject) => ({
    archiveOutputFilename: app
      ? path.join(app.getPath('documents'), 'fb-instant-game.zip')
      : '',
  }),

  canLaunchBuild: exportState => !!exportState.archiveOutputFilename,

  isNavigationDisabled: () => false,

  renderHeader: ({ project, exportState, updateExportState, exportStep }) =>
// @ts-expect-error - TS2322 - Type 'Element | null' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    exportStep !== 'done' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column noMargin expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExplanationHeader />
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LocalFilePicker
            title={'Facebook Instant Games export zip file'}
            message={
              'Choose where to save the exported file for Facebook Instant Games'
            }
            filters={[
              {
                name: 'Compressed file for Facebook Instant Games',
                extensions: ['zip'],
              },
            ]}
            value={exportState.archiveOutputFilename}
            defaultPath={app ? app.getPath('documents') : ''}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
            onChange={value =>
              updateExportState(() => ({ archiveOutputFilename: value }))
            }
            fullWidth
          />
        </Line>
      </Column>
    ) : null,

  renderExportFlow: (props: ExportFlowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExportFlow {...props} exportPipelineName={exportPipelineName} />
  ),

  prepareExporter: (context: ExportPipelineContext<ExportState>): Promise<PreparedExporter> => {
// @ts-expect-error - TS7031 - Binding element 'gdjsRoot' implicitly has an 'any' type.
    return findGDJS().then(({ gdjsRoot }) => {
      console.info('GDJS found in ', gdjsRoot);

      // TODO: Memory leak? Check for other exporters too.
      const localFileSystem = new LocalFileSystem({
        downloadUrlsToLocalFiles: true,
      });
      const fileSystem = assignIn(
        new gd.AbstractFileSystemJS(),
        localFileSystem
      );
      const exporter = new gd.Exporter(fileSystem, gdjsRoot);
      const temporaryOutputDir = path.join(
        fileSystem.getTempDir(),
        'FacebookInstantGamesExport'
      );
      fileSystem.mkDir(temporaryOutputDir);
      fileSystem.clearDir(temporaryOutputDir);

      return {
        exporter,
        localFileSystem,
        temporaryOutputDir,
      };
    });
  },

  launchExport: async (
    context: ExportPipelineContext<ExportState>,
    {
      exporter,
      localFileSystem,
      temporaryOutputDir,
    }: PreparedExporter,
    fallbackAuthor?: {
      id: string,
      username: string
    } | null,
  ): Promise<ExportOutput> => {
    const exportOptions = new gd.ExportOptions(
      context.project,
      temporaryOutputDir
    );
    exportOptions.setTarget('facebookInstantGames');
    if (fallbackAuthor) {
      exportOptions.setFallbackAuthor(
        fallbackAuthor.id,
        fallbackAuthor.username
      );
    }
    exporter.exportWholePixiProject(exportOptions);
    exportOptions.delete();
    exporter.delete();

    return {
      temporaryOutputDir,
      urlFiles: localFileSystem.getAllUrlFilesIn(temporaryOutputDir),
    };
  },

  launchResourcesDownload: async (
    context: ExportPipelineContext<ExportState>,
    {
      temporaryOutputDir,
      urlFiles,
    }: ExportOutput,
  ): Promise<ResourcesDownloadOutput> => {
    await downloadUrlsToLocalFiles({
      urlContainers: urlFiles,
      onProgress: context.updateStepProgress,
      throwIfAnyError: true,
    });

    return { temporaryOutputDir };
  },

  launchCompression: (
    context: ExportPipelineContext<ExportState>,
    {
      temporaryOutputDir,
    }: ResourcesDownloadOutput,
  ): Promise<CompressionOutput> => {
    return archiveLocalFolder({
      path: temporaryOutputDir,
      outputFilename: context.exportState.archiveOutputFilename,
    });
  },

  renderDoneFooter: ({ exportState }) => {
    const openExportFolder = () => {
      if (shell && path)
        shell.openPath(path.dirname(exportState.archiveOutputFilename));
    };

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DoneFooter
        renderGameButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
            key="open"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Open folder</Trans>}
            primary={true}
            onClick={openExportFolder}
          />
        )}
      />
    );
  },
};
