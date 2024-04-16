// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
import ReactJsonView from 'react-json-view';
import {
  GameData,
  EditFunction,
  CallFunction,
// @ts-expect-error - TS6142 - Module '../GDJSInspectorDescriptions' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/GDJSInspectorDescriptions.tsx', but '--jsx' is not set.
} from '../GDJSInspectorDescriptions';
// @ts-expect-error - TS6142 - Module './VariablesContainerInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/VariablesContainerInspector.tsx', but '--jsx' is not set.
import VariablesContainerInspector from './VariablesContainerInspector';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module './TimersInspector' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Debugger/Inspectors/TimersInspector.tsx', but '--jsx' is not set.
import TimersInspector from './TimersInspector';

type Props = {
  runtimeObject: GameData,
  onCall: CallFunction,
  onEdit: EditFunction
};

type RuntimeObjectData = {
  ['X position']: number,
  ['Y position']: number,
  ['Z position']?: number,
  Angle?: number,
  ['Rotation around X axis']?: number,
  ['Rotation around Y axis']?: number,
  ['Rotation around Z axis (Angle)']?: number,
  Layer: string,
  ['Z order']: number,
  ['Is hidden?']: boolean
};

const transform = runtimeObject: GameData => {
  if (!runtimeObject) return null;
  const runtimeObjectData: RuntimeObjectData = {
    'X position': runtimeObject.x,
    'Y position': runtimeObject.y,
    Angle: runtimeObject.angle,
    Layer: runtimeObject.layer,
    'Z order': runtimeObject.zOrder,
    'Is hidden?': runtimeObject.hidden,
  };
  // TODO: Improve check to have more robust type checking
  if (typeof runtimeObject._z !== 'undefined') {
    // 3D object
    runtimeObjectData['Z position'] = runtimeObject._z;
    runtimeObjectData['Rotation around X axis'] = runtimeObject._rotationX;
    runtimeObjectData['Rotation around Y axis'] = runtimeObject._rotationY;
    runtimeObjectData['Rotation around Z axis (Angle)'] =
      runtimeObjectData['Angle'];
    delete runtimeObjectData['Angle'];
  }
  return runtimeObjectData;
};

const handleEdit = (edit: any, {
  onCall,
  onEdit,
}: Props) => {
  if (edit.name === 'X position') {
    onCall(['setX'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Y position') {
    onCall(['setY'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Z position') {
    onCall(['setZ'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Rotation around X axis') {
    onCall(['setRotationX'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Rotation around Y axis') {
    onCall(['setRotationY'], [parseFloat(edit.new_value)]);
  } else if (
    edit.name === 'Angle' ||
    edit.name === 'Rotation around Z axis (Angle)'
  ) {
    onCall(['setAngle'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Layer') {
    onCall(['setLayer'], [edit.new_value]);
  } else if (edit.name === 'Z order') {
    onCall(['setZOrder'], [parseFloat(edit.new_value)]);
  } else if (edit.name === 'Is hidden?') {
    onCall(['hide'], [!!edit.new_value]);
  } else return false;

  return true;
};

const RuntimeObjectInspector = (props: Props) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <React.Fragment>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>General:</Trans>
    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <ReactJsonView
      collapsed={false}
      name={false}
      src={transform(props.runtimeObject)}
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
      onEdit={edit => handleEdit(edit, props)}
      groupArraysAfterLength={50}
      theme="monokai"
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>Instance variables:</Trans>
    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <VariablesContainerInspector
      variablesContainer={
        props.runtimeObject ? props.runtimeObject._variables : null
      }
      // TODO: onEdit and onCall could benefit from a "forward" utility function
      // (can also be applied in DebuggerContent.js)
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'newValue' implicitly has an 'any' type.
      onEdit={(path, newValue) =>
        props.onEdit(['_variables'].concat(path), newValue)
      }
// @ts-expect-error - TS7006 - Parameter 'path' implicitly has an 'any' type. | TS7006 - Parameter 'args' implicitly has an 'any' type.
      onCall={(path, args) => props.onCall(['_variables'].concat(path), args)}
    />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Trans>Timers:</Trans>
    </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <TimersInspector
      timers={props.runtimeObject ? props.runtimeObject._timers : null}
    />
  </React.Fragment>
);

export default RuntimeObjectInspector;
