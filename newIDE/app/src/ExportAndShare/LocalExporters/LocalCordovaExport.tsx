// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
import { findGDJS } from '../../GameEngineFinder/LocalGDJSFinder';
import LocalFileSystem, { UrlFileDescriptor } from './LocalFileSystem';
// @ts-expect-error - TS6142 - Module '../../UI/LocalFolderPicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LocalFolderPicker/index.tsx', but '--jsx' is not set.
import LocalFolderPicker from '../../UI/LocalFolderPicker';
import assignIn from 'lodash/assignIn';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import {
  ExportFlowProps,
  ExportPipeline,
  ExportPipelineContext,
} from '../ExportPipeline.flow';
import {
  ExplanationHeader,
  DoneFooter,
  ExportFlow,
// @ts-expect-error - TS6142 - Module '../GenericExporters/CordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/CordovaExport.tsx', but '--jsx' is not set.
} from '../GenericExporters/CordovaExport';
import { downloadUrlsToLocalFiles } from '../../Utils/LocalFileDownloader';
const electron = optionalRequire('electron');
const shell = electron ? electron.shell : null;

const gd: libGDevelop = global.gd;

type ExportState = {
  outputDir: string
};

type PreparedExporter = {
  exporter: gdjsExporter,
  localFileSystem: LocalFileSystem
};

type ExportOutput = {
  urlFiles: Array<UrlFileDescriptor>
};

type ResourcesDownloadOutput = null;

type CompressionOutput = null;

const exportPipelineName = 'local-cordova';

export const localCordovaExportPipeline: ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: exportPipelineName,
  packageNameWarningType: 'mobile',

  getInitialExportState: (project: gdProject) => ({
    outputDir: project.getLastCompilationDirectory(),
  }),

  canLaunchBuild: exportState => !!exportState.outputDir,

  isNavigationDisabled: () => false,

  renderHeader: ({ project, exportState, updateExportState, exportStep }) =>
// @ts-expect-error - TS2322 - Type 'Element | null' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    exportStep !== 'done' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ExplanationHeader />
          </Column>
        </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <LocalFolderPicker
            type="export"
            value={exportState.outputDir}
            defaultPath={project.getLastCompilationDirectory()}
// @ts-expect-error - TS7006 - Parameter 'outputDir' implicitly has an 'any' type.
            onChange={outputDir => {
              updateExportState(() => ({ outputDir }));
              project.setLastCompilationDirectory(outputDir);
            }}
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

      return {
        exporter,
        localFileSystem,
      };
    });
  },

  launchExport: async (
    context: ExportPipelineContext<ExportState>,
    {
      exporter,
      localFileSystem,
    }: PreparedExporter,
    fallbackAuthor?: {
      id: string,
      username: string
    } | null,
  ): Promise<ExportOutput> => {
    const exportOptions = new gd.ExportOptions(
      context.project,
      context.exportState.outputDir
    );
    exportOptions.setTarget('cordova');
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
      urlFiles: localFileSystem.getAllUrlFilesIn(context.exportState.outputDir),
    };
  },

  launchResourcesDownload: async (
    context: ExportPipelineContext<ExportState>,
    {
      urlFiles,
    }: ExportOutput,
  ): Promise<ResourcesDownloadOutput> => {
    await downloadUrlsToLocalFiles({
      urlContainers: urlFiles,
      onProgress: context.updateStepProgress,
      throwIfAnyError: true,
    });

    return null;
  },

  launchCompression: (
    context: ExportPipelineContext<ExportState>,
    exportOutput: ResourcesDownloadOutput,
  ): Promise<CompressionOutput> => {
    return Promise.resolve(null);
  },

  renderDoneFooter: ({ exportState }) => {
    const openExportFolder = () => {
      if (shell) shell.openPath(exportState.outputDir);
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
