// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/EditorMosaic' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EditorMosaic/index.tsx', but '--jsx' is not set.
import EditorMosaic, { EditorMosaicInterface } from '../UI/EditorMosaic';
// @ts-expect-error - TS6142 - Module '../UI/Background' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Background.tsx', but '--jsx' is not set.
import Background from '../UI/Background';
import get from 'lodash/get';
// @ts-expect-error - TS6142 - Module '../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
// @ts-expect-error - TS6142 - Module './InspectorsList' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/InspectorsList.tsx', but '--jsx' is not set.
import InspectorsList from './InspectorsList';
import {
  getInspectorDescriptions,
  InspectorDescription,
  EditFunction,
  CallFunction,
// @ts-expect-error - TS6142 - Module './GDJSInspectorDescriptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/GDJSInspectorDescriptions.tsx', but '--jsx' is not set.
} from './GDJSInspectorDescriptions';
// @ts-expect-error - TS6142 - Module './Inspectors/RawContentInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/RawContentInspector.tsx', but '--jsx' is not set.
import RawContentInspector from './Inspectors/RawContentInspector';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';
// @ts-expect-error - TS6142 - Module '../UI/Checkbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Checkbox.tsx', but '--jsx' is not set.
import Checkbox from '../UI/Checkbox';
import Flash from '@material-ui/icons/FlashOn';
import FlashOff from '@material-ui/icons/FlashOff';
// @ts-expect-error - TS6142 - Module '../UI/HelpButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/HelpButton/index.tsx', but '--jsx' is not set.
import HelpButton from '../UI/HelpButton';
// @ts-expect-error - TS6142 - Module './Profiler' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Profiler/index.tsx', but '--jsx' is not set.
import Profiler from './Profiler';
// @ts-expect-error - TS6142 - Module './DebuggerConsole' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/DebuggerConsole.tsx', but '--jsx' is not set.
import { DebuggerConsole, LogsManager } from './DebuggerConsole';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/index.tsx', but '--jsx' is not set.
import { ProfilerOutput } from '.';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
// @ts-expect-error - TS6142 - Module '../UI/MiniToolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MiniToolbar.tsx', but '--jsx' is not set.
import MiniToolbar from '../UI/MiniToolbar';
// @ts-expect-error - TS6142 - Module '../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../UI/ScrollView';

type Props = {
  gameData: any | null | undefined,
  onEdit: EditFunction,
  onCall: CallFunction,
  onPlay: () => void,
  onPause: () => void,
  onRefresh: () => void,
  onStartProfiler: () => void,
  onStopProfiler: () => void,
  profilerOutput: ProfilerOutput | null | undefined,
  profilingInProgress: boolean,
  logsManager: LogsManager,
  onOpenedEditorsChanged: () => void
};

type State = {
  selectedInspector: InspectorDescription | null | undefined,
  selectedInspectorFullPath: Array<string>,
  rawMode: boolean
};

const initialMosaicEditorNodes = {
  direction: 'column',
  first: {
    direction: 'row',
    first: 'inspectors',
    second: 'selected-inspector',
    splitPercentage: 25,
  },
  second: {
    direction: 'row',
    first: 'profiler',
    second: 'console',
    splitPercentage: 25,
  },
  splitPercentage: 65,
} as const;

/**
 * The debugger interface: show the list of inspectors for a game, along with the
 * currently selected inspector.
 */
export default class DebuggerContent extends React.Component<Props, State> {
  state = {
    selectedInspector: null,
    selectedInspectorFullPath: [],
    rawMode: false,
  };

  _editors: EditorMosaicInterface | null | undefined = null;

  isProfilerShown = () => {
    return (
      !!this._editors &&
      this._editors.getOpenedEditorNames().includes('profiler')
    );
  };

  isConsoleShown = () => {
    return (
      !!this._editors &&
      this._editors.getOpenedEditorNames().includes('console')
    );
  };

  toggleProfiler = () => {
    if (this._editors) this._editors.toggleEditor('profiler', 'end', 75, 'row');
  };

  toggleConsole = () => {
    if (this._editors) this._editors.toggleEditor('console', 'end', 75, 'row');
  };

  render() {
    const {
      gameData,
      onRefresh,
      onCall,
      onEdit,
      onStartProfiler,
      onStopProfiler,
      profilerOutput,
      profilingInProgress,
      logsManager,
      onOpenedEditorsChanged,
    } = this.props;
    const {
      selectedInspector,
      selectedInspectorFullPath,
      rawMode,
    } = this.state;

    const editors = {
      inspectors: {
        type: 'primary',
        title: t`Inspectors`,
        toolbarControls: [],
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand noMargin useFullHeight>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <RaisedButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Refresh</Trans>}
                  onClick={onRefresh}
                  primary
                />
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InspectorsList
                gameData={gameData}
                getInspectorDescriptions={getInspectorDescriptions}
                onChooseInspector={(
// @ts-expect-error - TS7006 - Parameter 'selectedInspector' implicitly has an 'any' type.
                  selectedInspector,
// @ts-expect-error - TS7006 - Parameter 'selectedInspectorFullPath' implicitly has an 'any' type.
                  selectedInspectorFullPath
                ) =>
                  this.setState({
                    selectedInspector,
                    selectedInspectorFullPath,
                  })
                }
              />
            </Column>
          </Background>
        ),
      },
      'selected-inspector': {
        type: 'primary',
        noTitleBar: true,
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column>
                {selectedInspector ? (
                  rawMode ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <RawContentInspector
                      gameData={get(gameData, selectedInspectorFullPath, null)}
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                      onEdit={(path, newValue) =>
                        onEdit(selectedInspectorFullPath.concat(path), newValue)
                      }
                    />
                  ) : (
// @ts-expect-error - TS2339 - Property 'renderInspector' does not exist on type 'never'.
                    selectedInspector.renderInspector(
                      get(gameData, selectedInspectorFullPath, null),
                      {
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'args' implicitly has an 'any' type.
                        onCall: (path, args) =>
                          onCall(selectedInspectorFullPath.concat(path), args),
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                        onEdit: (path, newValue) =>
                          onEdit(
                            selectedInspectorFullPath.concat(path),
                            newValue
                          ),
                      }
                    ) || (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>
                          No inspector, choose another element in the list or
                          toggle the raw data view.
                        </Trans>
                      </EmptyMessage>
                    )
                  )
                ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <EmptyMessage>
                    {gameData ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>Choose an element to inspect in the list</Trans>
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <Trans>
                        Pause the game (from the toolbar) or hit refresh (on the
                        left) to inspect the game
                      </Trans>
                    )}
                  </EmptyMessage>
                )}
              </Column>
            </ScrollView>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <MiniToolbar>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line justifyContent="space-between" alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <HelpButton helpPagePath="/interface/debugger" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    checkedIcon={<Flash />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    uncheckedIcon={<FlashOff />}
                    checked={rawMode}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'enabled' implicitly has an 'any' type.
                    onCheck={(e, enabled) =>
                      this.setState({
                        rawMode: enabled,
                      })
                    }
                  />
                </div>
              </Line>
            </MiniToolbar>
          </Background>
        ),
      },
      profiler: {
        type: 'secondary',
        title: t`Profiler`,
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Profiler
            onStart={onStartProfiler}
            onStop={onStopProfiler}
            profilerOutput={profilerOutput}
            profilingInProgress={profilingInProgress}
          />
        ),
      },
      console: {
        type: 'secondary',
        title: t`Console`,
        renderEditor: () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Background>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <DebuggerConsole logsManager={logsManager || []} />
          </Background>
        ),
      },
    } as const;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <PreferencesContext.Consumer>
{ /* @ts-expect-error - TS7031 - Binding element 'getDefaultEditorMosaicNode' implicitly has an 'any' type. | TS7031 - Binding element 'setDefaultEditorMosaicNode' implicitly has an 'any' type. */}
        {({ getDefaultEditorMosaicNode, setDefaultEditorMosaicNode }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EditorMosaic
// @ts-expect-error - TS7006 - Parameter 'editors' implicitly has an 'any' type.
            ref={editors => (this._editors = editors)}
            editors={editors}
            initialNodes={
              getDefaultEditorMosaicNode('debugger') || initialMosaicEditorNodes
            }
// @ts-expect-error - TS7006 - Parameter 'node' implicitly has an 'any' type.
            onPersistNodes={node =>
              setDefaultEditorMosaicNode('debugger', node)
            }
            onOpenedEditorsChanged={onOpenedEditorsChanged}
          />
        )}
      </PreferencesContext.Consumer>
    );
  }
}
