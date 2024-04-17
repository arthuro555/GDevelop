import * as React from 'react';
import ReactJsonView from 'react-json-view';

// This mirrors the internals of gdjs.Timer.
type Timer = {
  _name: string;
  _time: number;
  _paused: boolean;
};
// This mirrors the internals of Hashtable<gdjs.Timer>.
type TimersHashtable = {
  items: {
    [timerName: string]: Timer;
  };
};

const transform = (timersHashtable: TimersHashtable) => {
  if (!timersHashtable) return null;
  return Object.entries(timersHashtable.items).map(
    // $FlowExpectedError - Object.entries does not infer well the type of the value.
    ([timerName, timer]: [any, any]) => ({
      'Timer name': timer._name,
      'Time (in seconds)': timer._time / 1000,
      'Is paused': timer._paused,
    })
  );
};

type Props = {
  timers: TimersHashtable | null | undefined;
};

const TimersInspector = (props: Props) => (
  <ReactJsonView
    collapsed={false}
    name={false}
    // @ts-expect-error - TS2322 - Type '{ 'Timer name': any; 'Time (in seconds)': number; 'Is paused': any; }[] | null' is not assignable to type 'object'.
    src={props.timers ? transform(props.timers) : null}
    enableClipboard={false}
    displayDataTypes={false}
    displayObjectSize={false}
    groupArraysAfterLength={50}
    theme="monokai"
    // TODO: Add possibility to edit a timer data
  />
);

export default TimersInspector;
