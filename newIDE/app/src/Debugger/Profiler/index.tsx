// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module './MeasuresTable' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Profiler/MeasuresTable.tsx', but '--jsx' is not set.
import MeasuresTable from './MeasuresTable';
// @ts-expect-error - TS6142 - Module '..' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/index.tsx', but '--jsx' is not set.
import { ProfilerOutput } from '..';
// @ts-expect-error - TS6142 - Module '../../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../../UI/Background';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/LinearProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/LinearProgress.tsx', but '--jsx' is not set.
import LinearProgress from '../../UI/LinearProgress';

const styles = {
  tableContainer: {
    flex: 1,
  },
} as const;

type Props = {
  onStart: () => void,
  onStop: () => void,
  profilerOutput: ProfilerOutput | null | undefined,
  profilingInProgress: boolean
};

export default class Profiler extends React.Component<Props, undefined> {
  render() {
    const { onStart, onStop, profilerOutput, profilingInProgress } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center" justifyContent="center">
          {!profilingInProgress && profilerOutput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Last run collected on {profilerOutput.stats.framesCount} frames.
              </Trans>
            </Text>
          )}
          {!profilingInProgress && profilerOutput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton label={<Trans>Restart</Trans>} onClick={onStart} />
          )}
          {!profilingInProgress && !profilerOutput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Start profiling</Trans>}
              onClick={onStart}
            />
          )}
          {profilingInProgress && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              label={<Trans>Stop profiling</Trans>}
              onClick={onStop}
            />
          )}
        </Line>
        {profilingInProgress && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LinearProgress />
          </Line>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <div style={styles.tableContainer}>
          {profilerOutput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <MeasuresTable
              profilerMeasures={profilerOutput.framesAverageMeasures}
            />
          )}
          {!profilerOutput && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Start profiling and then stop it after a few seconds to see the
                results.
              </Trans>
            </EmptyMessage>
          )}
        </div>
      </Background>
    );
  }
}
