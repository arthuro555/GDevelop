import * as React from 'react';
import { Build, BuildType } from '../Utils/GDevelopServices/Build';
import { Game } from '../Utils/GDevelopServices/Game';
import { AuthenticatedUser } from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module './Builds/BuildStepsProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildStepsProgress.tsx', but '--jsx' is not set.
import { BuildStep } from './Builds/BuildStepsProgress';
import { Quota } from '../Utils/GDevelopServices/Usage';

export type ExportPipelineContext<ExportState> = {
  project: gdProject,
  exportState: ExportState,
  updateStepProgress: (count: number, total: number) => void
};

export type HeaderProps<ExportState> = {
  project: gdProject,
  authenticatedUser: AuthenticatedUser,
  exportState: ExportState,
  updateExportState: (updater: (prevExportState: ExportState) => ExportState) => void,
  isExporting: boolean,
  build: Build | null | undefined,
  exportStep: BuildStep,
  quota: Quota | null | undefined
};

export type ExportFlowProps = {
  project: gdProject,
  game: Game | null | undefined,
  builds: Array<Build> | null | undefined,
  build: Build | null | undefined,
  onSaveProject: () => Promise<void>,
  isSavingProject: boolean,
  errored: boolean,
  exportStep: BuildStep,
  disabled: boolean,
  launchExport: () => Promise<void>,
  isExporting: boolean,
  stepMaxProgress: number,
  stepCurrentProgress: number,
  onGameUpdated: () => Promise<void>
};

/**
 * An export pipeline describing how to export and build a game.
 */
export type ExportPipeline<ExportState, PreparedExporter, ExportOutput, ResourcesDownloadOutput, CompressionOutput> = {
  name: string,
  onlineBuildType?: BuildType,
  limitedBuilds?: boolean,
  packageNameWarningType?: 'mobile' | 'desktop',
  getInitialExportState: (project: gdProject) => ExportState,
  renderTutorial?: () => React.ReactElement,
  renderHeader: (arg1: HeaderProps<ExportState>) => React.ReactElement,
  shouldSuggestBumpingVersionNumber?: () => boolean,
  renderExportFlow: (props: ExportFlowProps) => React.ReactElement,
  canLaunchBuild: (exportState: ExportState, errored: boolean, exportStep: BuildStep) => boolean,
  isNavigationDisabled: (exportStep: BuildStep, errored: boolean) => boolean,
  prepareExporter: (context: ExportPipelineContext<ExportState>) => Promise<PreparedExporter>,
  launchExport: (
    context: ExportPipelineContext<ExportState>,
    preparedExporter: PreparedExporter,
    fallbackAuthor?: {
      id: string,
      username: string
    } | null | undefined,
  ) => Promise<ExportOutput>,
  launchResourcesDownload: (context: ExportPipelineContext<ExportState>, exportOutput: ExportOutput) => Promise<ResourcesDownloadOutput>,
  launchCompression: (
    context: ExportPipelineContext<ExportState>,
    resourcesDownloadOutput: ResourcesDownloadOutput,
  ) => Promise<CompressionOutput>,
  /**
   * Launch the upload of the archive to the online build service.
   * This step is only done if `launchUpload` and `launchOnlineBuild`
   * are defined.
   */
  launchUpload?: (
    context: ExportPipelineContext<ExportState>,
    compressionOutput: CompressionOutput,
  ) => Promise<string>,
  /**
   * Launch the online build of the uploaded archive.
   * This step is only done if `launchUpload` and `launchOnlineBuild`
   * are defined.
   */
  launchOnlineBuild?: (
    exportState: ExportState,
    authenticatedUser: AuthenticatedUser,
    uploadBucketKey: string,
    gameId: string,
    options: {
      gameName: string,
      gameVersion: string
    },
    payWithCredits: boolean,
  ) => Promise<Build>,
  /**
   * Render the footer when the whole export (+ online build if any) is done.
   */
  renderDoneFooter?: (
    arg1: {
      compressionOutput: CompressionOutput,
      exportState: ExportState
    },
  ) => React.ReactElement
};
