import { Trans } from '@lingui/macro';

import { t } from '@lingui/macro';

import * as React from 'react';

import EditorMosaic, { EditorMosaicInterface } from '../UI/EditorMosaic';

import Background from '../UI/Background';
import get from 'lodash/get';

import RaisedButton from '../UI/RaisedButton';

import { Column, Line } from '../UI/Grid';

import InspectorsList from './InspectorsList';
import {
  getInspectorDescriptions,
  InspectorDescription,
  EditFunction,
  CallFunction,
} from './GDJSInspectorDescriptions';

import RawContentInspector from './Inspectors/RawContentInspector';

import EmptyMessage from '../UI/EmptyMessage';

import Checkbox from '../UI/Checkbox';
import Flash from '@material-ui/icons/FlashOn';
import FlashOff from '@material-ui/icons/FlashOff';

import HelpButton from '../UI/HelpButton';

import Profiler from './Profiler';

import { DebuggerConsole, LogsManager } from './DebuggerConsole';

import { ProfilerOutput } from '.';

import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';

import MiniToolbar from '../UI/MiniToolbar';

import ScrollView from '../UI/ScrollView';

type Props = {
  gameData: any | null | undefined;
  onEdit: EditFunction;
  onCall: CallFunction;
  onPlay: () => void;
  onPause: () => void;
  onRefresh: () => void;
  onStartProfiler: () => void;
  onStopProfiler: () => void;
  profilerOutput: ProfilerOutput | null | undefined;
  profilingInProgress: boolean;
  logsManager: LogsManager;
  onOpenedEditorsChanged: () => void;
};

type State = {
  selectedInspector: InspectorDescription | null | undefined;
  selectedInspectorFullPath: Array<string>;
  rawMode: boolean;
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
    const { selectedInspector, selectedInspectorFullPath, rawMode } =
      this.state;

    const editors = {
      inspectors: {
        type: 'primary',
        title: t`Inspectors`,
        toolbarControls: [],
        renderEditor: () => (
          <Background>
            <Column expand noMargin useFullHeight>
              <Line justifyContent="center">
                <RaisedButton
                  label={<Trans>Refresh</Trans>}
                  onClick={onRefresh}
                  primary
                />
              </Line>
              {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <InspectorsList
                gameData={gameData}
                getInspectorDescriptions={getInspectorDescriptions}
                onChooseInspector={(
                  selectedInspector,
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
          <Background>
            <ScrollView>
              <Column>
                {selectedInspector ? (
                  rawMode ? (
                    <RawContentInspector
                      gameData={get(gameData, selectedInspectorFullPath, null)}
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
                      <EmptyMessage>
                        <Trans>
                          No inspector, choose another element in the list or
                          toggle the raw data view.
                        </Trans>
                      </EmptyMessage>
                    )
                  )
                ) : (
                  <EmptyMessage>
                    {gameData ? (
                      <Trans>Choose an element to inspect in the list</Trans>
                    ) : (
                      <Trans>
                        Pause the game (from the toolbar) or hit refresh (on the
                        left) to inspect the game
                      </Trans>
                    )}
                  </EmptyMessage>
                )}
              </Column>
            </ScrollView>
            <MiniToolbar>
              <Line justifyContent="space-between" alignItems="center" noMargin>
                <HelpButton helpPagePath="/interface/debugger" />
                <div>
                  {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Checkbox
                    checkedIcon={<Flash />}
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
          <Background>
            <DebuggerConsole logsManager={logsManager || []} />
          </Background>
        ),
      },
    } as const;

    return (
      <PreferencesContext.Consumer>
        {({ getDefaultEditorMosaicNode, setDefaultEditorMosaicNode }) => (
          <EditorMosaic
            ref={(editors) => (this._editors = editors)}
            editors={editors}
            initialNodes={
              getDefaultEditorMosaicNode('debugger') || initialMosaicEditorNodes
            }
            onPersistNodes={(node) =>
              setDefaultEditorMosaicNode('debugger', node)
            }
            onOpenedEditorsChanged={onOpenedEditorsChanged}
          />
        )}
      </PreferencesContext.Consumer>
    );
  }
}
