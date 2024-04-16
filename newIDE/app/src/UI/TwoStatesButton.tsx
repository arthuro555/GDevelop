import * as React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { dataObjectToProps } from '../Utils/HTMLDataset';
import { focusButton } from './Button';

type Props = {
  leftButton: {
    label: React.ReactNode,
    value: string,
    id?: string
  },
  rightButton: {
    label: React.ReactNode,
    value: string,
    id?: string
  },
  onChange: (arg1: string) => void,
  value: string
};

export type TwoStatesButtonInterface = {
  focusLeftButton: () => void
};

// @ts-expect-error - TS2339 - Property 'leftButton' does not exist on type 'TwoStatesButtonInterface'. | TS2339 - Property 'rightButton' does not exist on type 'TwoStatesButtonInterface'. | TS2339 - Property 'onChange' does not exist on type 'TwoStatesButtonInterface'. | TS2339 - Property 'value' does not exist on type 'TwoStatesButtonInterface'.
const TwoStatesButton = React.forwardRef<Props, TwoStatesButtonInterface>(({ leftButton, rightButton, onChange, value }, ref) => {
// @ts-expect-error - TS2749 - 'Button' refers to a value, but is being used as a type here. Did you mean 'typeof Button'?
  const leftButtonRef = React.useRef<Button | null | undefined>(null);

  const focusLeftButton = React.useCallback(() => {
    if (leftButtonRef.current) focusButton(leftButtonRef.current);
  }, []);

// @ts-expect-error - TS2739 - Type '{ focusLeftButton: () => void; }' is missing the following properties from type 'Props': leftButton, rightButton, onChange, value
  React.useImperativeHandle(ref, () => ({
    focusLeftButton,
  }));

  const isLeft = value === leftButton.value;
  const leftButtonDataset = isLeft ? { effective: 'true' } : undefined;
  const rightButtonDataset = !isLeft ? { effective: 'true' } : undefined;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ButtonGroup>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Button
        id={leftButton.id}
        {...dataObjectToProps(leftButtonDataset)}
        variant={isLeft ? 'contained' : 'outlined'}
        color={isLeft ? 'secondary' : 'default'}
        onClick={() => onChange(leftButton.value)}
        ref={leftButtonRef}
      >
        {leftButton.label}
      </Button>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Button
        id={rightButton.id}
        {...dataObjectToProps(rightButtonDataset)}
        variant={!isLeft ? 'contained' : 'outlined'}
        color={!isLeft ? 'secondary' : 'default'}
        onClick={() => onChange(rightButton.value)}
      >
        {rightButton.label}
      </Button>
    </ButtonGroup>
  );
});

export default TwoStatesButton;
