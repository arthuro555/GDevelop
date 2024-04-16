import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
import assignIn from 'lodash/assignIn';
import { findGDJS } from '../../GameEngineFinder/BrowserS3GDJSFinder';
import BrowserFileSystem from './BrowserFileSystem';
import {
  UrlFileDescriptor,
  TextFileDescriptor,
  BlobFileDescriptor,
  downloadUrlFilesToBlobFiles,
  archiveFiles,
} from '../../Utils/BrowserArchiver';
import {
  ExportFlowProps,
  ExportPipeline,
  ExportPipelineContext,
} from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
import {
  BlobDownloadUrlHolder,
  openBlobDownloadUrl,
} from '../../Utils/BlobDownloadUrlHolder';
import {
  ExplanationHeader,
  DoneFooter,
  ExportFlow,
// @ts-expect-error - TS6142 - Module '../GenericExporters/ElectronExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/ElectronExport.tsx', but '--jsx' is not set.
} from '../GenericExporters/ElectronExport';

const gd: libGDevelop = global.gd;

type ExportState = null;

type PreparedExporter = {
  exporter: gdjsExporter,
  abstractFileSystem: BrowserFileSystem,
  outputDir: string
};

type ExportOutput = {
  textFiles: Array<TextFileDescriptor>,
  urlFiles: Array<UrlFileDescriptor>
};

type ResourcesDownloadOutput = {
  textFiles: Array<TextFileDescriptor>,
  blobFiles: Array<BlobFileDescriptor>
};

type CompressionOutput = Blob;

const exportPipelineName = 'browser-electron';

export const browserElectronExportPipeline: ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: exportPipelineName,
  packageNameWarningType: 'desktop',

  getInitialExportState: () => null,

  canLaunchBuild: () => true,

  isNavigationDisabled: () => false,

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderHeader: () => <ExplanationHeader />,

  renderExportFlow: (props: ExportFlowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExportFlow {...props} exportPipelineName={exportPipelineName} />
  ),

  prepareExporter: (context: ExportPipelineContext<ExportState>): Promise<PreparedExporter> => {
    return findGDJS('electron').then(({ gdjsRoot, filesContent }) => {
      console.info('GDJS found in ', gdjsRoot);

      const outputDir = '/export/';
      const abstractFileSystem = new BrowserFileSystem({
        textFiles: filesContent,
      });
      // TODO: Memory leak? Check for other exporters too.
      const fileSystem = assignIn(
        new gd.AbstractFileSystemJS(),
        abstractFileSystem
      );
      const exporter = new gd.Exporter(fileSystem, gdjsRoot);

      return {
        exporter,
        outputDir,
        abstractFileSystem,
      };
    });
  },

  launchExport: (
    context: ExportPipelineContext<ExportState>,
    {
      exporter,
      outputDir,
      abstractFileSystem,
    }: PreparedExporter,
    fallbackAuthor?: {
      id: string,
      username: string
    } | null,
  ): Promise<ExportOutput> => {
    const { project } = context;
    const exportOptions = new gd.ExportOptions(project, outputDir);
    exportOptions.setTarget('electron');
    if (fallbackAuthor) {
      exportOptions.setFallbackAuthor(
        fallbackAuthor.id,
        fallbackAuthor.username
      );
    }
    exporter.exportWholePixiProject(exportOptions);
    exportOptions.delete();
    exporter.delete();

    return Promise.resolve({
      textFiles: abstractFileSystem.getAllTextFilesIn(outputDir),
      urlFiles: abstractFileSystem.getAllUrlFilesIn(outputDir),
    });
  },

  launchResourcesDownload: (
    context: ExportPipelineContext<ExportState>,
    {
      textFiles,
      urlFiles,
    }: ExportOutput,
  ): Promise<ResourcesDownloadOutput> => {
    return downloadUrlFilesToBlobFiles({
      urlFiles,
      onProgress: context.updateStepProgress,
    }).then(blobFiles => ({
      blobFiles,
      textFiles,
    }));
  },

  launchCompression: (
    context: ExportPipelineContext<ExportState>,
    {
      textFiles,
      blobFiles,
    }: ResourcesDownloadOutput,
  ): Promise<Blob> => {
    return archiveFiles({
      blobFiles,
      textFiles,
      basePath: '/export/',
      onProgress: context.updateStepProgress,
    });
  },

  renderDoneFooter: ({ compressionOutput, exportState }) => {
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <DoneFooter
        renderGameButton={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <BlobDownloadUrlHolder blob={compressionOutput}>
            {blobDownloadUrl => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                primary
                onClick={() => openBlobDownloadUrl(blobDownloadUrl, 'game.zip')}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Download the exported game</Trans>}
              />
            )}
          </BlobDownloadUrlHolder>
        )}
      />
    );
  },
};
