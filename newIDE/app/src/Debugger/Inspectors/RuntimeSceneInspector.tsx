// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

import * as React from 'react';
import ReactJsonView from 'react-json-view';
import {
  GameData,
  EditFunction,
  CallFunction,
// @ts-expect-error - TS6142 - Module '../GDJSInspectorDescriptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/GDJSInspectorDescriptions.tsx', but '--jsx' is not set.
} from '../GDJSInspectorDescriptions';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../UI/Layout';
import mapValues from 'lodash/mapValues';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledAutoComplete from '../../UI/SemiControlledAutoComplete';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module './TimersInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/TimersInspector.tsx', but '--jsx' is not set.
import TimersInspector from './TimersInspector';

type Props = {
  runtimeScene: GameData,
  onCall: CallFunction,
  onEdit: EditFunction
};

type State = {
  newObjectName: string
};

const transformLayer = layer: any => {
  if (!layer) return null;
  return {
    'Camera rotation (in deg)': layer._cameraRotation,
    'Camera zoom': layer._zoomFactor,
    'Layer is hidden': !!layer._hidden,
    'Camera X position': layer._cameraX,
    'Camera Y position': layer._cameraY,
    'Time scale': layer._timeScale,
  };
};

const transform = runtimeScene: GameData => {
  if (!runtimeScene) return null;

  return {
    'Time scale': runtimeScene._timeManager
      ? runtimeScene._timeManager._timeScale
      : null,
    Layers:
      runtimeScene._layers && runtimeScene._layers.items
        ? mapValues(runtimeScene._layers.items, transformLayer)
        : null,
    'Actions waiting to be finished':
      runtimeScene._asyncTasksManager.tasksWithCallback.length,
  };
};

const handleEdit = (edit: any, {
  onCall,
  onEdit,
}: Props) => {
  if (edit.namespace.length === 0 && edit.name === 'Time scale') {
    onCall(['_timeManager', 'setTimeScale'], [parseFloat(edit.new_value)]);
  } else if (edit.namespace.length >= 2) {
    if (edit.namespace[0] === 'Layers') {
      if (edit.name === 'Camera rotation (in deg)') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'setCameraRotation'],
          [parseFloat(edit.new_value)]
        );
      } else if (edit.name === 'Camera zoom') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'setCameraZoom'],
          [parseFloat(edit.new_value)]
        );
      } else if (edit.name === 'Layer is hidden') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'show'],
          [!edit.new_value]
        );
      } else if (edit.name === 'Camera X position') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'setCameraX'],
          [parseFloat(edit.new_value)]
        );
      } else if (edit.name === 'Camera Y position') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'setCameraY'],
          [parseFloat(edit.new_value)]
        );
      } else if (edit.name === 'Time scale') {
        onCall(
          ['_layers', 'items', edit.namespace[1], 'setTimeScale'],
          [parseFloat(edit.new_value)]
        );
      }
    }
  } else return false;

  return true;
};

export default class RuntimeSceneInspector extends React.Component<Props, State> {
  state = {
    newObjectName: '',
  };

  render() {
    const { runtimeScene, onCall } = this.props;
    if (!runtimeScene) return null;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Layers:</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ReactJsonView
          collapsed={false}
          name={false}
          src={transform(runtimeScene)}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
          onEdit={edit => handleEdit(edit, this.props)}
          groupArraysAfterLength={50}
          theme="monokai"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Timers:</Trans>
        </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <TimersInspector timers={runtimeScene._timeManager._timers} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>
            Create a new instance on the scene (will be at position 0;0):
          </Trans>
        </Text>
        {runtimeScene._objects && runtimeScene._objects.items && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <TextFieldWithButtonLayout
            noFloatingLabelText
            renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SemiControlledAutoComplete
                hintText={t`Enter the name of the object`}
                value={this.state.newObjectName}
// @ts-expect-error - TS7006 - Parameter 'value' implicitly has an 'any' type.
                onChange={value => {
                  this.setState({
                    newObjectName: value,
                  });
                }}
                dataSource={Object.keys(runtimeScene._objects.items).map(
                  objectName => ({
                    text: objectName,
                    value: objectName,
                  })
                )}
                openOnFocus
                fullWidth
              />
            )}
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
            renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                style={style}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Create</Trans>}
                primary
                onClick={() => {
                  onCall(['createObject'], [this.state.newObjectName]);
                }}
              />
            )}
          />
        )}
      </React.Fragment>
    );
  }
}
