import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../ThemeDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ThemeDecorator.tsx', but '--jsx' is not set.
import muiDecorator from '../../ThemeDecorator';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/CompactTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactTextField/index.tsx', but '--jsx' is not set.
import CompactTextField from '../../../UI/CompactTextField';
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../../UI/Layout';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Angle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Angle.js' implicitly has an 'any' type.
import Angle from '../../../UI/CustomSvgIcons/Angle';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../ElementHighlighterProvider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/ElementHighlighterProvider.tsx', but '--jsx' is not set.
import ElementHighlighterProvider from '../../ElementHighlighterProvider';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../UI/CustomSvgIcons/Restore'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Restore.js' implicitly has an 'any' type.
import Restore from '../../../UI/CustomSvgIcons/Restore';

export default {
  title: 'UI Building Blocks/CompactTextField',
  component: CompactTextField,
  decorators: [paperDecorator, muiDecorator],
};

export const Default = () => {
  const [value, setValue] = React.useState<string>('');
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');
  const [value3, setValue3] = React.useState<string>('');
  const [value4, setValue4] = React.useState<string>('');
  const [value5, setValue5] = React.useState<string>('');
  const [value8, setValue8] = React.useState<string>('');
  const [value6, setValue6] = React.useState<number>(0);
  const [value7, setValue7] = React.useState<number>(0);
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ElementHighlighterProvider
      elements={[
        { label: 'Text with icon', id: 'with-icon' },
        { label: 'text without icon', id: 'without-icon' },
        { label: 'Number with icon', id: 'number-with-icon' },
        { label: 'Text with end adornment', id: 'text-with-end-adornment' },
      ]}
    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField value={value} onChange={setValue} id="without-icon" />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField value={value1} onChange={setValue1} errored />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          value={value2}
          onChange={setValue2}
          placeholder="With placeholder"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          disabled
          value={'disabled field'}
          onChange={() => {}}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          value={value3}
          onChange={setValue3}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
          id="with-icon"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          value={value4}
          onChange={setValue4}
          errored
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          value={value5}
          onChange={setValue5}
          placeholder="With placeholder"
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          disabled
          value={'disabled field'}
          onChange={() => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>Numbers</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          type="number"
          value={value6}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type.
          onChange={valueAsString => {
            if (!valueAsString) setValue6(valueAsString);
            else setValue6(parseFloat(valueAsString) || 0);
          }}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
          useLeftIconAsNumberControl
          id="number-with-icon"
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          type="number"
          value={value7}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type.
          onChange={valueAsString => {
            if (!valueAsString) setValue7(valueAsString);
            else setValue7(parseFloat(valueAsString) || 0);
          }}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
          placeholder="80"
          useLeftIconAsNumberControl
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          type="number"
          disabled
          value={45}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type.
          onChange={valueAsString => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle disabled'}
          useLeftIconAsNumberControl
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text>With end adornment</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          value={value8}
          onChange={setValue8}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle'}
          useLeftIconAsNumberControl
          id="text-with-end-adornment"
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type.
          renderEndAdornmentOnHover={className => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Restore className={className} />
          )}
          onClickEndAdornment={action('onClickEndAdornment')}
        />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CompactTextField
          disabled
          value={'Disabled field'}
// @ts-expect-error - TS7006 - Parameter 'valueAsString' implicitly has an 'any' type.
          onChange={valueAsString => {}}
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          renderLeftIcon={className => <Angle className={className} />}
          leftIconTooltip={'Angle disabled'}
          useLeftIconAsNumberControl
// @ts-expect-error - TS7006 - Parameter 'className' implicitly has an 'any' type.
          renderEndAdornmentOnHover={className => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Restore className={className} />
          )}
          onClickEndAdornment={action('onClickEndAdornment')}
        />
      </ColumnStackLayout>
    </ElementHighlighterProvider>
  );
};
