import * as React from 'react';

import InlineCheckbox from '../../../UI/InlineCheckbox';

import paperDecorator from '../../PaperDecorator';

import { Column, LargeSpacer } from '../../../UI/Grid';

import Text from '../../../UI/Text';

import Checkbox from '../../../UI/Checkbox';

import { ResponsiveLineStackLayout } from '../../../UI/Layout';

import Visibility from '../../../UI/CustomSvgIcons/Visibility';

import VisibilityOff from '../../../UI/CustomSvgIcons/VisibilityOff';

export default {
  title: 'UI Building Blocks/Checkboxes',
  component: InlineCheckbox,
  decorators: [paperDecorator],
};

export const Default = () => {
  const [value, setValue] = React.useState(false);
  const [inlineValue, setInlineValue] = React.useState(false);

  return (
    <ResponsiveLineStackLayout noColumnMargin noMargin>
      <Column alignItems="flex-start" expand>
        <Text size="block-title">Checkboxes</Text>
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={value}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => setValue(value)}
          label="This is a checkbox"
        />
        <LargeSpacer />
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={true}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => {}}
          label="This is a disabled checkbox"
          disabled
        />
        <LargeSpacer />
        <Text>Without label</Text>
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={value}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => setValue(value)}
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
        />
        <LargeSpacer />
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Checkbox
          checked={true}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => {}}
          label="With some helper text"
          tooltipOrHelperText="This is some helper text"
        />
      </Column>
      <Column alignItems="flex-start" expand>
        <Text size="block-title">Inline checkboxes</Text>
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlineCheckbox
          checked={inlineValue}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => setInlineValue(value)}
          label="This is a checkbox"
        />
        <LargeSpacer />
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlineCheckbox
          checked={true}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => {}}
          label="This is a disabled checkbox"
          disabled
        />
        <LargeSpacer />
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlineCheckbox
          checked={true}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => {}}
          label="With some helper text"
          tooltipOrHelperText="This is some helper text"
        />
        <LargeSpacer />
        <Text>Without label</Text>
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlineCheckbox
          checked={inlineValue}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => setInlineValue(value)}
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
        />
        <LargeSpacer />
        <Text>Without label and with tooltip</Text>
        {/* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <InlineCheckbox
          checked={inlineValue}
          // @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'value' implicitly has an 'any' type.
          onCheck={(e, value) => setInlineValue(value)}
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          tooltipOrHelperText="This is a tooltip"
        />
      </Column>
    </ResponsiveLineStackLayout>
  );
};
