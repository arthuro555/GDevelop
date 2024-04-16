import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/Slider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Slider.tsx', but '--jsx' is not set.
import Slider from '../../../UI/Slider';
import ValueStateHolder from '../../ValueStateHolder';

export default {
  title: 'UI Building Blocks/Slider',
  component: Slider,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <ValueStateHolder
    initialValue={1}
    render={(value, onChange) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Slider
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
        onChange={newValue => {
          action('onChange')(newValue);
          onChange(newValue);
        }}
        value={value}
        min={-1}
        max={1}
        step={0.1}
      />
    )}
  />
);
