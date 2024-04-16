import * as React from 'react';
import assignIn from 'lodash/assignIn';
import {
  Build,
  buildWeb,
  getBuildFileUploadOptions,
} from '../../Utils/GDevelopServices/Build';
import { uploadLocalFile } from './LocalFileUploader';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { findGDJS } from '../../GameEngineFinder/LocalGDJSFinder';
import { archiveLocalFolder } from '../../Utils/LocalArchiver';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../Utils/OptionalRequire'. '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/OptionalRequire.js' implicitly has an 'any' type.
import optionalRequire from '../../Utils/OptionalRequire';
import LocalFileSystem, { UrlFileDescriptor } from './LocalFileSystem';
import {
  ExportPipeline,
  ExportPipelineContext,
  ExportFlowProps,
} from '../ExportPipeline.flow';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineWebExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/index.tsx', but '--jsx' is not set.
import { ExplanationHeader } from '../GenericExporters/OnlineWebExport';
import { downloadUrlsToLocalFiles } from '../../Utils/LocalFileDownloader';
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineWebExport/OnlineWebExportFlow' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineWebExport/OnlineWebExportFlow.tsx', but '--jsx' is not set.
import OnlineWebExportFlow from '../GenericExporters/OnlineWebExport/OnlineWebExportFlow';

const path = optionalRequire('path');
const os = optionalRequire('os');
const gd: libGDevelop = global.gd;

type ExportState = null;

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

const exportPipelineName = 'local-online-web';

export const localOnlineWebExportPipeline: ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: exportPipelineName,
  onlineBuildType: 'web-build',

  getInitialExportState: () => null,

  // Build can be launched if just opened the dialog or build errored, re-enabled when done.
  canLaunchBuild: (exportState, errored, exportStep) =>
    errored || exportStep === '' || exportStep === 'done',

  // Navigation is enabled when the build is errored or if the build is not done.
  isNavigationDisabled: (exportStep, errored) =>
    !errored && !['', 'done'].includes(exportStep),

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderHeader: () => <ExplanationHeader />,

  renderExportFlow: (props: ExportFlowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <OnlineWebExportFlow {...props} exportPipelineName={exportPipelineName} />
  ),

  prepareExporter: (context: ExportPipelineContext<ExportState>): Promise<PreparedExporter> => {
// @ts-expect-error - TS7031 - Binding element 'gdjsRoot' implicitly has an 'any' type.
    return findGDJS().then(({ gdjsRoot }) => {
      console.info('GDJS found in ', gdjsRoot);

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
        'OnlineWebExport'
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
    const archiveOutputDir = os.tmpdir();
    return archiveLocalFolder({
      path: temporaryOutputDir,
      outputFilename: path.join(archiveOutputDir, 'game-archive.zip'),
      sizeLimit: 250 * 1000 * 1000,
    });
  },

  launchUpload: (context: ExportPipelineContext<ExportState>, outputFile: CompressionOutput): Promise<string> => {
    return getBuildFileUploadOptions().then(uploadOptions => {
      return uploadLocalFile(
        outputFile,
        uploadOptions,
        context.updateStepProgress
      ).then(() => uploadOptions.key);
    });
  },

  launchOnlineBuild: (
    exportState: ExportState,
    authenticatedUser: AuthenticatedUser,
    uploadBucketKey: string,
    gameId: string,
    options: {
      gameName: string,
      gameVersion: string
    },
    payWithCredits: boolean,
  ): Promise<Build> => {
    const { getAuthorizationHeader, firebaseUser } = authenticatedUser;
    if (!firebaseUser)
      return Promise.reject(new Error('User is not authenticated'));

    return buildWeb(
      getAuthorizationHeader,
      firebaseUser.uid,
      uploadBucketKey,
      gameId,
      options,
      payWithCredits
    );
  },
};
