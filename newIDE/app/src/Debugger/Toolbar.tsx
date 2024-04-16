// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t, Trans} from '@lingui/macro';
import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { ToolbarGroup } from '../UI/Toolbar';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Profiler'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Profiler.js' implicitly has an 'any' type.
import ProfilerIcon from '../UI/CustomSvgIcons/Profiler';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Console'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Console.js' implicitly has an 'any' type.
import ConsoleIcon from '../UI/CustomSvgIcons/Console';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Preview'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Preview.js' implicitly has an 'any' type.
import PlayIcon from '../UI/CustomSvgIcons/Preview';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Pause'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Pause.js' implicitly has an 'any' type.
import PauseIcon from '../UI/CustomSvgIcons/Pause';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';

type Props = {
  onPlay: () => void,
  canPlay: boolean,
  onPause: () => void,
  canPause: boolean,
  isProfilerShown: boolean,
  onToggleProfiler: () => void,
  canOpenProfiler: boolean,
  isConsoleShown: boolean,
  onToggleConsole: () => void,
  canOpenConsole: boolean
};

export class Toolbar extends React.PureComponent<Props> {
  render() {
    const {
      onPlay,
      onPause,
      canPlay,
      canPause,
      onToggleProfiler,
      canOpenProfiler,
      onToggleConsole,
      canOpenConsole,
      isProfilerShown,
      isConsoleShown,
    } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ToolbarGroup lastChild>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onToggleProfiler}
          disabled={!canOpenProfiler}
          selected={isProfilerShown}
          tooltip={t`Open the performance profiler`}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ProfilerIcon />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={onToggleConsole}
          disabled={!canOpenConsole}
          selected={isConsoleShown}
          tooltip={t`Open the console`}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ConsoleIcon />
        </IconButton>

        {canPause ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <FlatButton
            primary
            onClick={onPause}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            leftIcon={<PauseIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Pause</Trans>}
          />
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <RaisedButton
            primary
            onClick={onPlay}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            icon={<PlayIcon />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            label={<Trans>Play</Trans>}
            disabled={!canPlay}
          />
        )}
      </ToolbarGroup>
    );
  }
}

export default Toolbar;
