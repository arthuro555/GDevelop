import * as React from 'react';
import MuiSlider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/styles';

type Props<T> = {
  value: T;
  min: number;
  max: number;
  step: number;
  scale?: (arg1: number) => number;
  valueLabelDisplay?: 'auto';
  marks?: boolean;
  onChange: (value: T) => void;
};

// We are obliged to override the label color value since it is not
// customizable from Slider props.
const useStyles = makeStyles((theme) => {
  return {
    valueLabel: {
      // @ts-expect-error - TS2339 - Property 'palette' does not exist on type 'DefaultTheme'.
      '& > span > span': { color: theme.palette.secondary.contrastText },
    },
  };
});

const Slider = <T extends number | [number, number]>(props: Props<T>) => {
  const classes = useStyles();
  return (
    <MuiSlider
      classes={classes}
      color="secondary"
      marks={props.marks}
      valueLabelDisplay={props.valueLabelDisplay}
      value={props.value}
      scale={props.scale}
      track={false}
      // @ts-expect-error - TS2345 - Argument of type 'number | number[]' is not assignable to parameter of type 'T'.
      onChange={(e, newValue) => props.onChange(newValue)}
      min={props.min}
      max={props.max}
      step={props.step}
    />
  );
};

export default Slider;
