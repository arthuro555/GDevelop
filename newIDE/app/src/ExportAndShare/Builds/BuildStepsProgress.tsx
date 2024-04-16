// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Spacer, Column } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module './BuildProgressAndActions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/ExportAndShare/Builds/BuildProgressAndActions.tsx', but '--jsx' is not set.
import BuildProgressAndActions from './BuildProgressAndActions';
import { Build } from '../../Utils/GDevelopServices/Build';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../../UI/LinearProgress';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import { StepIcon } from '@material-ui/core';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';

const styles = {
  stepper: { flex: 1, padding: 8 },
} as const;

// We are obliged to override the StepIcon colors through StepLabel
// since it is not customizable from Stepper props.
const useStepLabelStyles = makeStyles(theme => ({
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
  text: { fill: theme.palette.secondary.contrastText },
  completed: {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
    fill: theme.palette.secondary.main,
  },
  active: {
// @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
    fill: theme.palette.secondary.main,
  },
}));

const usetStepConnectorStyles = makeStyles(theme => ({
  root: {
    flex: 0,
  },
}));

export type BuildStep = '' | 'register' | 'export' | 'resources-download' | 'compress' | 'upload' | 'waiting-for-build' | 'build' | 'done';

type Props = {
  exportStep: BuildStep,
  build: Build | null | undefined,
  stepMaxProgress: number,
  stepCurrentProgress: number,
  errored: boolean,
  showSeeAllMyBuildsExplanation?: boolean,
  hasBuildStep: boolean
};

const CustomStepLabel = (props: {
  children: React.ReactNode
}) => {
  const classes = useStepLabelStyles();
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <StepLabel
      {...props}
      StepIconComponent={iconProps => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <StepIcon {...iconProps} classes={classes} />
      )}
    >
      {props.children}
    </StepLabel>
  );
};

/**
 * Can be used in an exporter to show the overall progress of a build
 * (including local archiving/upload steps and remote build progress)
 */
const BuildStepsProgress = ({
  exportStep,
  build,
  stepMaxProgress,
  stepCurrentProgress,
  errored,
  hasBuildStep,
  showSeeAllMyBuildsExplanation,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const getActiveStep = React.useCallback(
    () =>
      exportStep === 'register' ||
      exportStep === 'export' ||
      exportStep === 'resources-download'
        ? 0
        : exportStep === 'compress' || exportStep === 'upload'
        ? 1
        : exportStep === 'waiting-for-build' || exportStep === 'build'
        ? 2
        : exportStep === 'done'
        ? hasBuildStep
          ? 2
          : 1
        : -1,
    [exportStep, hasBuildStep]
  );
  const stepConnectorStyles = usetStepConnectorStyles();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Stepper
      activeStep={getActiveStep()}
      orientation="vertical"
      style={{
        ...styles.stepper,
        backgroundColor: gdevelopTheme.paper.backgroundColor.medium,
      }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      connector={<StepConnector classes={stepConnectorStyles} />}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Step>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Game export</Trans>
        </CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <StepContent>
          {errored ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>Can't properly export the game.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Please check your internet connection or try again later.
              </Trans>
            </AlertMessage>
          ) : exportStep === 'resources-download' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Downloading game resources...</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LinearProgress
                  value={
                    stepMaxProgress > 0
                      ? (stepCurrentProgress / stepMaxProgress) * 100
                      : 0
                  }
                  variant="determinate"
                />
              </Line>
            </Column>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column expand noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Export in progress...</Trans>
              </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LinearProgress />
              </Line>
            </Column>
          )}
        </StepContent>
      </Step>
      {hasBuildStep && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Step>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Upload to build service</Trans>
          </CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <StepContent>
            {errored ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Can't upload your game to the build service.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Please check your internet connection or try again later.
                </Trans>
              </AlertMessage>
            ) : exportStep === 'compress' ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <CircularProgress size={20} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Compressing before upload...</Trans>
                </Text>
              </Line>
            ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Line alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <LinearProgress
                  value={
                    stepMaxProgress > 0
                      ? (stepCurrentProgress / stepMaxProgress) * 100
                      : 0
                  }
                  variant="determinate"
                />
              </Line>
            )}
          </StepContent>
        </Step>
      )}
      {hasBuildStep && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Step>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Build and download</Trans>
          </CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <StepContent>
            {errored && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <AlertMessage kind="error">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  Build could not start or errored. Please check your internet
                  connection or try again later.
                </Trans>
              </AlertMessage>
            )}
            {!build && !errored && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>Build is starting...</Trans>
              </Text>
            )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {build && <BuildProgressAndActions build={build} />}
            {showSeeAllMyBuildsExplanation && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>
                  If you close this window while the build is being done, you
                  can see its progress and download the game later by clicking
                  on See All My Builds below.
                </Trans>
              </EmptyMessage>
            )}
          </StepContent>
        </Step>
      )}
      {!hasBuildStep && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Step>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Done</Trans>
          </CustomStepLabel>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <StepContent />
        </Step>
      )}
    </Stepper>
  );
};

export default BuildStepsProgress;
