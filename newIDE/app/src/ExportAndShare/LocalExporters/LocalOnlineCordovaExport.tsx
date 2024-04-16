import * as React from 'react';
import assignIn from 'lodash/assignIn';
import {
  Build,
  buildCordovaAndroid,
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
  ExportFlowProps,
  ExportPipeline,
  ExportPipelineContext,
} from '../ExportPipeline.flow';
import {
  ExportState,
  SetupExportHeader,
  ExportFlow,
// @ts-expect-error - TS6142 - Module '../GenericExporters/OnlineCordovaExport' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/GenericExporters/OnlineCordovaExport.tsx', but '--jsx' is not set.
} from '../GenericExporters/OnlineCordovaExport';
import { downloadUrlsToLocalFiles } from '../../Utils/LocalFileDownloader';

const path = optionalRequire('path');
const os = optionalRequire('os');
const gd: libGDevelop = global.gd;

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

const exportPipelineName = 'local-online-cordova';

export const localOnlineCordovaExportPipeline: ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: exportPipelineName,
  onlineBuildType: 'cordova-build',
  limitedBuilds: true,
  packageNameWarningType: 'mobile',

  getInitialExportState: () => ({
    targets: ['androidApk'],
    keystore: 'new',
    signingDialogOpen: false,
  }),

  // Build can be launched only if just opened the dialog or build errored.
  canLaunchBuild: (exportState, errored, exportStep) =>
    errored || exportStep === '',

  // Navigation is enabled when the build is errored or whilst uploading.
  isNavigationDisabled: (exportStep, errored) =>
    !errored &&
    ['register', 'export', 'resources-download', 'compress', 'upload'].includes(
      exportStep
    ),

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  renderHeader: props => <SetupExportHeader {...props} />,

  shouldSuggestBumpingVersionNumber: () => true,

  renderExportFlow: (props: ExportFlowProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ExportFlow {...props} exportPipelineName={exportPipelineName} />
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
        'OnlineCordovaExport'
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

    return buildCordovaAndroid(
      getAuthorizationHeader,
      firebaseUser.uid,
      uploadBucketKey,
      exportState.targets,
      exportState.keystore,
      gameId,
      options,
      payWithCredits
    );
  },
};
